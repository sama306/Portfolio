# Animaciones

Las animaciones son parte central de la personalidad del sitio — no son un detalle final, son un requisito desde el diseño de cada sección. **No deben ser exageradas** ni afectar la usabilidad.

## Librería

Elegir **una sola** entre GSAP o Framer Motion (no mezclar ambas en el mismo proyecto) en la sesión donde se implementen las animaciones. Framer Motion tiene más sentido si ya se está usando React para esa isla interactiva; GSAP es más flexible si se anima directamente sobre Astro/HTML sin depender de React.

## Animación de entrada al hacer scroll (obligatorio en cada sección)

Cuando una sección entra en el viewport:

```css
opacity: 0 → 1
transform: translateY(30px) → 0
```

Trigger con `IntersectionObserver` (o el helper equivalente de la librería elegida). Debe dispararse una sola vez por sección (no re-animar cada vez que se vuelve a scrollear hacia arriba/abajo), salvo que se decida lo contrario para algún elemento puntual.

## Cards (proyectos y videos)

> **Actualizado según el sistema Obsidian Slate (`02-diseño-visual.md`): este sistema rechaza sombras y "levante" de elementos.** No usar `scale` en el contenedor de la card ni `box-shadow` como indicador de hover. En su lugar:

Al pasar el mouse sobre una card:
- **Borde:** transiciona de `outline-variant` a `tertiary` (cyan) — este es el indicador principal de "esto es interactivo".
- **Imagen interna:** desaturada (`grayscale`) por default, vuelve a color completo en hover, con un leve `scale(1.02)` **solo en la imagen** (no en toda la card) — tomado literal del HTML de referencia:
  ```css
  .video-image { filter: grayscale(80%); transition: all 0.4s ease; }
  .video-card:hover .video-image { filter: grayscale(0%); transform: scale(1.02); }
  ```
  Este mismo patrón aplica tanto a `ProjectCard` como a `VideoCard` (unifica el lenguaje visual entre ambos tipos de contenido, como pedía el doc original de interacción entre proyectos y videos).
- Transición suave (`transition: all 0.4s ease` o similar), nunca instantánea.

### Proyectos — efecto de imagen en hover
```
hover → imagen pasa de grayscale a color + leve scale → borde de la card a cyan
```
En el listado `/projects` (grid asimétrico), el ícono ↗ junto al título no necesita animación propia más allá de heredar el color `tertiary` si se quiere reforzar el estado hover.

### Videos — efecto en hover
```
hover → imagen pasa de grayscale a color + leve scale → aparece ícono de play (opacity 0→1, centrado, FILL cyan) → borde de la card a cyan
```

## Scroll progress bar

Barra fina en la parte superior del viewport, ancho proporcional al scroll de la página. Implementación simple con `scrollY / (documentHeight - viewportHeight)`.

## Cursor personalizado (opcional, evaluar carga de trabajo)

Cursor circular pequeño que reacciona (crece / cambia de forma) al pasar sobre botones, links, imágenes y cards. Si se implementa, debe **desactivarse en mobile/touch** (no tiene sentido ahí) y respetar `prefers-reduced-motion`.

## Transiciones entre páginas

Al entrar a una página de detalle (`/projects/[slug]`, `/videos/[slug]`):
```
Página actual → fade / slide → Detalle
```
Astro View Transitions es el mecanismo más natural para esto en este stack — evaluarlo primero antes de armar algo custom con la librería de animación.

## Regla no negociable: `prefers-reduced-motion`

Ninguna animación debe impedir usar la página. Todo el set de animaciones (entrada por scroll, hovers, cursor custom, transiciones) debe respetar `prefers-reduced-motion: reduce`, reduciendo o eliminando el movimiento para usuarios que lo tengan activado a nivel sistema operativo. Esto se verifica explícitamente antes de dar por cerrada la sesión de animaciones (ver también `09-seo-accesibilidad-performance.md`).
