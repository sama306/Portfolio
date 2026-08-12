/*
  Scroll progress bar — Fase 5 (07-animaciones.md).
  Barra fina en el borde superior del viewport, ancho proporcional al scroll:
  scrollY / (documentHeight - viewportHeight). Implementación simple en JS,
  sin ScrollTrigger. Aplica `transform: scaleX()` (sin reflow).
  Bajo prefers-reduced-motion la barra sigue funcionando (es informativa y
  accionada por el scroll del usuario) pero sin transición de suavizado.
*/
const bar = document.querySelector<HTMLElement>('[data-scroll-progress]');

const update = () => {
  if (!bar) return;
  const doc = document.documentElement;
  const max = doc.scrollHeight - window.innerHeight;
  const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
  bar.style.transform = `scaleX(${progress})`;
};

window.addEventListener('scroll', update, { passive: true });
window.addEventListener('resize', update, { passive: true });
update();
