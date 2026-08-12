/*
  Reveal por scroll — Fase 5 (07-animaciones.md).
  Anima cada elemento con `[data-reveal]` cuando entra en el viewport:
  opacity 0 → 1 + translateY(30px) → 0, una sola vez por sección.
  Respeta prefers-reduced-motion (no se anima nada, el contenido queda visible
  gracias al fallback CSS en global.css).
  `data-reveal-delay` (segundos) permite stagger en grids.
*/
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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

window.addEventListener('load', () => {
  ScrollTrigger.refresh();
});
