# Portfolio Personal — Dante Valentín Samacoits

## Contexto para opencode

Este documento es el punto de entrada. Si estás retomando el proyecto en una sesión nueva, leé este archivo primero y después el/los doc(s) específico(s) que te indique el usuario en el prompt de esa sesión.

El proyecto se gestiona con **pnpm** (no usar npm ni yarn en ningún comando ni script). El trabajo se hace en sesiones separadas de opencode, cada una enfocada en una parte puntual del sitio — no asumas que tenés que completar todo el roadmap en una sola sesión.

## Qué es este proyecto

Portfolio web personal de Dante Valentín Samacoits, estudiante de Tecnicatura en Programación Informática y desarrollador de software, que también tiene experiencia en edición y producción audiovisual (trabajo en una inmobiliaria editando videos de propiedades).

El sitio **no es un CV tradicional**. Es una experiencia que combina:

**Portfolio + CV + proyectos + experiencia audiovisual + presentación personal.**

## Objetivo

Que una persona que nunca trabajó con Dante pueda entender rápidamente, navegando de forma vertical (scroll progresivo, sección por sección):

1. Quién es.
2. Qué estudia.
3. Qué tecnologías maneja.
4. Qué experiencia tiene.
5. Qué proyectos desarrolló.
6. Qué trabajos audiovisuales realizó.
7. Cómo contactarlo.
8. Qué puede aportar profesionalmente.

## Idea central (no perder de vista esto)

El sitio no debe comunicar solamente "sé programar". Debe comunicar **"creo cosas"**.

```
                    DANTE
                      │
        ┌─────────────┴─────────────┐
        │                           │
    SOFTWARE                  CREATIVIDAD
        │                           │
        ↓                           ↓
   Proyectos                     Videos
   Aplicaciones                  Edición
   Web                           Diseño
   Bases de datos                Contenido
        │                           │
        └─────────────┬─────────────┘
                       ↓
                  PORTFOLIO
```

La combinación desarrollo de software + experiencia audiovisual es el elemento distintivo del portfolio. Proyectos y videos se tratan como **dos tipos de contenido distintos pero con la misma lógica de interacción** (card → preview → click → página detallada). Ver `04-proyectos.md` y `05-audiovisual.md`.

## Flujo mental esperado del visitante

```
"Entré y rápidamente entendí quién es Dante."
 → "Veo que estudia programación y qué tecnologías utiliza."
 → "Veo su experiencia."
 → "Ahora quiero ver qué proyectos hizo."
 → "Entro a GurkCRM y puedo entender qué hizo realmente."
 → "También tiene experiencia audiovisual."
 → "Quiero ver sus videos."
 → "Ahora sé qué sabe hacer y cómo puedo contactarlo."
 → [ CONTACTAR ]
```

## Stack

- **Framework:** Astro + React (React solo para islas interactivas, no para todo)
- **Lenguaje:** TypeScript
- **Package manager:** pnpm
- **Estilos:** Tailwind CSS v4 vía `@tailwindcss/vite` (no `@astrojs/tailwind`, incompatible con Astro 7 — ver `01-arquitectura-tecnica.md`). Sistema de diseño: **Obsidian Slate**.
- **Animaciones:** ver `07-animaciones.md` (GSAP o Framer Motion, elegir una sola)
- **Hosting sugerido:** Vercel o Netlify (a definir más adelante, no es prioridad de las primeras sesiones)

## Referencia visual (Obsidian Slate)

El sistema de diseño quedó definido a partir de mockups de referencia, no a partir de cero. Los archivos fuente están en `docs/reference/`:

- `docs/reference/DESIGN.md` — sistema de diseño en texto (colores, tipografía, spacing, componentes).
- `docs/reference/videos-page-reference.html` — implementación real en HTML + Tailwind config, incluye la página de Videos completa como ejemplo funcional.
- `docs/reference/home-reference.html` — mockup del Home completo (Hero → Trayectoria → Featured Work → Cinematic → Footer), en HTML + Tailwind config.
- `docs/reference/projects-reference.html` — mockup de la página de Proyectos (bento grid + technical explorations).
- `docs/reference/videos-detail-reference.html` — mockup de la página de Videos con detalle (Process/Toolkit + grid de videos).

Los mockups originales provienen del folder `stitch_personal_portfolio_showcase` (en el Desktop de la máquina local); las copias en `docs/reference/` son la versión que se usa como fuente de verdad en el repo.

`02-diseño-visual.md` es el resumen operativo de esos archivos — ante cualquier valor exacto (hex, spacing, radius) que no esté claro, consultar los archivos de `reference/` directamente en vez de asumir.

**Cambio de alcance importante respecto a la primera versión de esta documentación:** la sección/página de **Experiencia como entidad separada se elimina**. La experiencia (desarrollo + audiovisual) se fusiona dentro de la sección **"Trayectoria"** del Home, junto con Educación, en formato timeline de dos columnas. Ver `03-secciones-home.md`.

## Principio de performance

Astro debe manejar la mayor parte del sitio como HTML estático. React se usa **únicamente** donde hace falta interactividad real (ej: filtros de proyectos, formulario de contacto, cursor custom). No convertir todo el sitio en una SPA de React.

## Índice de documentos

| Archivo | Contenido |
|---|---|
| `00-overview.md` | Este archivo |
| `01-arquitectura-tecnica.md` | Estructura de carpetas, pnpm, data files |
| `02-diseño-visual.md` | Sistema de diseño Obsidian Slate: paleta, tipografía, tokens, componentes |
| `03-secciones-home.md` | Hero, Trayectoria (Experiencia + Educación), Skills, Featured Work, Cinematic preview, Contacto, Footer |
| `04-proyectos.md` | Página `/projects` (grid asimétrico) + GurkCRM, ForgeStudio, Book-Bites, 007-Sama |
| `05-audiovisual.md` | Página `/videos` (hero + Process/Toolkit + grid) + experiencia en inmobiliaria |
| `06-navegacion.md` | Navbar, routing, páginas de listado |
| `07-animaciones.md` | Scroll animations, hovers (grayscale→color, borde a cyan), transiciones |
| `08-responsive-mobile.md` | Checklist mobile obligatorio por fase |
| `09-seo-accesibilidad-performance.md` | SEO, a11y, performance |
| `10-roadmap.md` | Fases de desarrollo |
| `reference/DESIGN.md` | Sistema de diseño original (fuente de verdad) |
| `reference/videos-page-reference.html` | Implementación HTML/Tailwind de referencia |
| `reference/home-reference.html` | Mockup del Home (HTML/Tailwind) |
| `reference/projects-reference.html` | Mockup de Proyectos (HTML/Tailwind) |
| `reference/videos-detail-reference.html` | Mockup de Videos detalle (HTML/Tailwind) |
