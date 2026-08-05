# SEO, Accesibilidad y Performance

## SEO

Agregar en el layout base (`Layout.astro`):
- `<title>` por página
- Meta description
- Open Graph (og:title, og:description, og:image, og:type)
- Twitter/X cards
- Favicon
- `sitemap.xml` (Astro tiene integración oficial `@astrojs/sitemap`)
- `robots.txt`

**Ejemplo base (home):**
```
Title: Dante Samacoits — Software Developer

Description: Portfolio personal de Dante Samacoits.
Desarrollo de software, proyectos web, bases de
datos y producción audiovisual.
```

Cada página de proyecto/video individual debe tener su propio title/description generado a partir de `src/data/projects.ts` / `videos.ts`, no reusar el meta genérico del home en todas las páginas internas.

## Accesibilidad

- HTML semántico (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, no todo `<div>`).
- `alt` descriptivo en todas las imágenes (no vacío salvo que sea puramente decorativa).
- Contraste de color adecuado (mínimo WCAG AA) — especialmente relevante acá porque el sitio es dark theme, revisar contraste real y no asumirlo solo por "texto claro sobre fondo oscuro". Puntual sobre el acento cyan (`tertiary`, `#00dce5`) del sistema Obsidian Slate: verificar contraste contra `surface`/`surface-container` antes de usarlo en texto de lectura extensa — funciona bien para labels grandes, badges, íconos y elementos de UI, pero en texto pequeño (`body-md` o menor) puede no alcanzar AA. Preferir `on-surface`/`on-surface-variant` para cuerpo de texto y reservar el cyan para acentos puntuales, tal como indica su propio principio de uso en `02-diseño-visual.md`.
- Navegación completa por teclado (Tab, Enter, Esc en menús/modales).
- Estados de foco visibles (`:focus-visible`) en todos los elementos interactivos — no quitar el outline sin reemplazarlo por algo igual de visible.
- Labels asociados correctamente a los inputs del formulario de contacto.
- Respeto estricto por `prefers-reduced-motion` (ver `07-animaciones.md`).

Las animaciones nunca deben impedir usar la página (ej: contenido que solo aparece después de una animación y queda invisible si el usuario tiene JS lento o reduced motion mal manejado).

## Performance

Prioridades:
- Optimización de imágenes (usar el componente `<Image>` de Astro cuando aplique).
- Lazy loading en imágenes y videos fuera del viewport inicial.
- Formatos modernos: WebP/AVIF para imágenes.
- Videos optimizados (compresión, resolución adecuada — no subir el archivo crudo de la cámara/exportación de Premiere sin comprimir).
- Code splitting (nativo de Astro por ruta).
- Evitar JavaScript innecesario — cuestionar cada isla de React: ¿esto realmente necesita ser interactivo, o puede ser HTML/CSS estático?
- Carga progresiva del contenido largo del home.

Al cerrar una sesión que agregue imágenes o videos nuevos, revisar que estén optimizados antes de commitear — no dejarlo para "después".

## Referencia de auditoría

Antes de considerar una fase de estilo/contenido cerrada, correr Lighthouse (Chrome DevTools) y revisar las 4 categorías: Performance, Accessibility, Best Practices, SEO. No hace falta 100 en todas, pero cualquier puntaje bajo (<80) debe investigarse antes de seguir a la próxima sesión.
