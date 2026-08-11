# Roadmap

Pensado para trabajarse en sesiones separadas de opencode. Cada fase puede ser una o varias sesiones — no hace falta completar una fase entera de una sola vez. Al empezar una sesión nueva, indicar qué fase/ítems se van a trabajar y qué docs leer.

## Fase 1 — Base ✅ completada

- [x] Crear proyecto Astro (`pnpm create astro@latest .`) — Astro 7.1.6, template minimal, TS strict
- [x] Agregar integración de React (`@astrojs/react` v6 + React 19)
- [x] Agregar Tailwind — **v4 vía `@tailwindcss/vite`**, no `@astrojs/tailwind` (incompatible con Astro 7). Ver `01-arquitectura-tecnica.md`.
- [x] Portar tokens de `docs/reference/videos-page-reference.html` a `@theme` CSS-first en `src/styles/global.css` (no hay `tailwind.config.mjs`)
- [x] Cargar fuentes Montserrat/Inter/Geist + Material Symbols Outlined en `Layout.astro`
- [x] Configurar TypeScript
- [x] Crear `Layout.astro`
- [x] Crear `Navbar.astro` (glass, sin link a Experience, botón "Contactarme")
- [x] Crear `Footer.astro`
- [x] Configurar estilos globales según `02-diseño-visual.md` (Obsidian Slate)

## Fase 2 — Homepage (contenido estático primero, sin animaciones todavía)

- [x] Hero (headline, presentación, status dot, imagen/gráfico lateral)
- [x] Trayectoria (2 columnas: Experiencia + Educación, fusiona lo que antes era Experiencia/Educación separadas)
- [x] Skills
- [x] Featured Work (preview de 2 proyectos destacados)
- [x] Cinematic Editing (preview de 3 trabajos audiovisuales)
- [x] Contacto

## Fase 3 — Proyectos

- [x] Crear `src/data/projects.ts` (con campos `featured`, `layout`, `year`)
- [x] Crear `ProjectCard.astro` (versión compacta, para Featured Work del Home)
- [x] Crear listado destacado en Home (Featured Work, 2 cards)
- [x] Crear página `/projects` con grid asimétrico (masonry `wide`/`tall`) + filtros
- [x] Crear página individual (`ProjectDetail` layout reutilizable)
- [x] Cargar contenido real de GurkCRM
- [x] Cargar contenido real de 007-Sama
- [x] Cargar contenido real de ForgeStudio
- [x] Cargar contenido real de Consolink
- [x] Cargar contenido real de Kaido

## Fase 4 — Audiovisual

- [x] Crear `src/data/videos.ts` (con campos `tag`, `location`)
- [x] Crear `VideoCard.astro` (con efecto grayscale→color + play icon en hover)
- [x] Crear preview "Cinematic Editing" en Home (3 cards)
- [x] Crear página `/videos` con hero + "The Process" + "The Toolkit" + grid + filtros
- [x] Crear página individual de video
- [x] Cargar videos reales de la experiencia en la inmobiliaria
- [x] Optimizar thumbnails
- [x] Optimizar videos (compresión)

## Fase 5 — Animaciones

- [x] Elegir librería (GSAP o Framer Motion) — ver `07-animaciones.md`
- [ ] Animaciones de entrada por scroll en cada sección
- [ ] Hover states en cards (borde a cyan + grayscale→color, sin sombras ni scale del contenedor)
- [ ] Scroll progress bar
- [ ] Transiciones entre páginas (evaluar Astro View Transitions)
- [ ] Cursor personalizado (opcional)
- [ ] Verificar `prefers-reduced-motion` en todo lo anterior

## Fase 6 — Responsive / Mobile

- [ ] Ajustar Desktop
- [ ] Ajustar Tablet
- [ ] Ajustar Mobile
- [ ] Menú hamburguesa funcional
- [ ] Videos/imágenes responsive
- [ ] Correr el checklist completo de `08-responsive-mobile.md`

## Fase 7 — Optimización final

- [ ] SEO (title, description, OG, sitemap, robots.txt)
- [ ] Favicon
- [ ] Accesibilidad (revisión con checklist de `09-seo-accesibilidad-performance.md`)
- [ ] Performance (Lighthouse)
- [ ] Revisión general de contraste en dark theme

## Backlog / funcionalidades futuras (no prioritario ahora)

- Blog (`/blog`) para tutoriales, experiencias, proyectos, aprendizajes
- Página `/cv` con botón de descarga en PDF
- Sistema de administración/CMS para gestionar proyectos, videos, experiencia y skills sin tocar código
- Analytics (visitas, proyectos más vistos, tiempo en página, procedencia de visitantes)

---

## Info pendiente de completar con el usuario

Antes de que algunas secciones estén 100% terminadas, falta que Dante provea:

- Nombre real de la institución educativa
- Links reales de GitHub/Demo de cada proyecto
- Contenido real de las 9 subsecciones de info por proyecto (objetivo, problema, solución, arquitectura, desafíos, aprendizajes, etc.)
- Archivos de video reales de la inmobiliaria + thumbnails
- Definir si el WhatsApp va público en Contacto
- Definir si usa una foto real en el Hero (blanco y negro, estilo editorial) o un elemento gráfico
- Copy final del headline del Hero (2 líneas, tono contundente — ver ejemplos en `03-secciones-home.md`)
- Confirmar herramientas reales de "The Toolkit" en Videos (el mockup trae herramientas genéricas que no necesariamente usa Dante)
- Ubicación/contexto real de cada video inmobiliario (o decidir qué mostrar en su lugar si no se puede compartir la ubicación)
- Definir si el formulario de contacto usa un servicio externo o backend propio
