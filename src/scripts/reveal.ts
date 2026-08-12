/*
  Reveal por scroll — Fase 5 (07-animaciones.md).
  Anima cada elemento con `[data-reveal]` cuando entra en el viewport:
  opacity 0 → 1 + translateY(30px) → 0, una sola vez por sección.
  Respeta prefers-reduced-motion (no se anima nada; el contenido queda visible
  gracias al fallback CSS en global.css).

  Con Astro View Transitions el bundle NO se re-ejecuta en cada navegación SPA
  (Astro marca los scripts como ya ejecutados), pero el documento persiste y
  `astro:page-load` dispara en la carga inicial y en cada navegación.
  `init()` se registra UNA sola vez (guard en window) y re-arma los reveals
  contra el DOM de la página actual, limpiando antes los triggers de la página
  anterior. También re-agrega la clase `js` que `swapRootAttributes` borra en
  cada transición (necesaria para el pre-hide CSS de `[data-reveal]`).
*/
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const init = () => {
  // Pre-hide del DOM actual vía la clase `js` (ver comment de arriba).
  document.documentElement.classList.add('js');

  // Limpiar reveals de la página anterior (referencian nodos desacoplados).
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

  const mm = gsap.matchMedia();

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    const targets = gsap.utils.toArray<HTMLElement>('[data-reveal]');

    targets.forEach((el) => {
      const delay = el.dataset.revealDelay ? parseFloat(el.dataset.revealDelay) : 0;

      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
        }
      );
    });
  });

  // Medir después de que el layout de la página nueva se asentó.
  requestAnimationFrame(() => ScrollTrigger.refresh());
};

// Carga inicial: medir cuando imágenes/fuentes ya cargaron.
window.addEventListener('load', init);

// Carga inicial + cada navegación SPA (registrado una sola vez).
if (!(window as unknown as Record<string, unknown>).__revealBound) {
  (window as unknown as Record<string, unknown>).__revealBound = true;
  document.addEventListener('astro:page-load', init);
}