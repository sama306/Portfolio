/*
  Integración con Astro View Transitions (Fase 5, 07-animaciones.md).

  Hay 2 gotchas del router de Astro que se resuelven acá:

  1) Restauración de scroll back/forward: con `html { scroll-behavior: smooth }`
     el router restaura la posición con animación (withastro/astro#10615).
     Durante el swap se fuerza `scroll-behavior: auto` (restauraciones/scrolls
     del router instantáneos) y se vuelve a `smooth` después del swap.

  2) Links con hash cross-page (`/#contacto` desde /projects, detalle, etc.):
     el router hace `pushState(to.href)` (que ya incluye el hash) y después
     `location.href = to.href` queda como no-op → NUNCA scrollea al ancla.
     Acá se scrollea manualmente al elemento cuyo id está en `location.hash`
     en cada `astro:page-load`. `scrollIntoView()` sin behavior respeta el
     CSS `scroll-behavior: smooth` / el override de prefers-reduced-motion.

  Los listeners se registran UNA sola vez (guard en window) porque el módulo
  se re-ejecuta en cada navegación SPA pero `document`/`window` persisten.
*/
const BOUND_KEY = '__viewTransitionsBound';

if (!(window as unknown as Record<string, unknown>)[BOUND_KEY]) {
  (window as unknown as Record<string, unknown>)[BOUND_KEY] = true;

  document.addEventListener('astro:before-swap', () => {
    document.documentElement.style.scrollBehavior = 'auto';
  });

  document.addEventListener('astro:after-swap', () => {
    document.documentElement.style.scrollBehavior = '';
    // swapRootAttributes() copia los atributos del <html> nuevo y borra la clase
    // `js` (agregada en runtime por Layout.astro). Sin ella el pre-hide CSS de
    // [data-reveal] no aplica en las páginas siguientes. La re-agregamos acá,
    // en el after-swap, que siempre corre antes del `astro:page-load`.
    document.documentElement.classList.add('js');
  });

  document.addEventListener('astro:page-load', () => {
    if (!location.hash) return;
    const id = decodeURIComponent(location.hash.slice(1));
    const el = document.getElementById(id);
    if (el) {
      // reveal.ts corre ScrollTrigger.refresh() en un rAF al entrar; ese refresh
      // puede cancelar un smooth-scroll recién iniciado. Esperar un frame más
      // para que el refresh de la página nueva haya terminado.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => el.scrollIntoView());
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  });
}