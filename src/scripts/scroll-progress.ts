/*
  Scroll progress bar — Fase 5 (07-animaciones.md).
  Barra fina en el borde superior del viewport, ancho proporcional al scroll:
  scrollY / (documentHeight - viewportHeight). Implementación simple en JS,
  sin ScrollTrigger. Aplica `transform: scaleX()` (sin reflow).
  Bajo prefers-reduced-motion la barra sigue funcionando (es informativa y
  accionada por el scroll del usuario) pero sin transición de suavizado.

  Con Astro View Transitions el bundle NO se re-ejecuta por navegación SPA y el
  nodo de la barra se recrea en cada página. `update` re-consulta el `[data-scroll-progress]`
  del DOM actual y, además del listener de scroll (registrado UNA sola vez vía
  guard), se llama en `astro:page-load` para dimensionar la barra nueva al entrar.
*/
const update = () => {
  const bar = document.querySelector<HTMLElement>('[data-scroll-progress]');
  if (!bar) return;
  const doc = document.documentElement;
  const max = doc.scrollHeight - window.innerHeight;
  const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
  bar.style.transform = `scaleX(${progress})`;
};

if (!(window as unknown as Record<string, unknown>).__scrollProgressBound) {
  (window as unknown as Record<string, unknown>).__scrollProgressBound = true;
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  document.addEventListener('astro:page-load', update);
}

update();