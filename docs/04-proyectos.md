# Página de Proyectos (`/projects`)

Rediseñada según la captura de referencia "Selected Works" — layout tipo galería con grid asimétrico, no un grid uniforme de cards idénticas.

## Header de la página

```
Selected              ← Montserrat display-lg, color on-surface
Works.                ← misma línea de estilo, color tertiary (cyan) — solo esta palabra

A definitive collection of engineered solutions and crafted
interfaces. Exploring the intersection of rigorous logic and
sophisticated aesthetics.
```

Adaptar copy a Dante en español, manteniendo la estructura de "título en 2 líneas, segunda línea en cyan + subtítulo descriptivo":

```
Proyectos
Seleccionados.        ← esta palabra en cyan

Una colección de soluciones desarrolladas experimentando
con distintas tecnologías, arquitecturas y conceptos.
```

## Grid asimétrico (masonry de 2 columnas)

A diferencia del `ProjectCard` compacto usado en el Home (`Featured Work`, ver `03-secciones-home.md`), acá las cards son grandes y de **altura variable** — algunas más altas/verticales (ej. ForgeStudio en la captura, con más contenido de imagen tipo cover vertical), otras más bajas/horizontales (GurkCRM, imagen de escritorio en 16:9). Esto rompe la monotonía de un grid parejo y le da sensación de "colección curada" en vez de listado automático.

```
┌──────────────────────┐   ┌──────────────────────┐
│                       │   │                       │
│   GurkCRM (imagen     │   │   ForgeStudio (imagen │
│   16:9, escritorio)   │   │   más alta/vertical)  │
│                       │   │                       │
├──────────────────────┤   │                       │
│ GurkCRM          ↗    │   ├──────────────────────┤
│                       │   │ ForgeStudio      ↗    │
│ An enterprise-grade   │   │                       │
│ customer relationship │   │ A digital presence for │
│ management platform...│   │ an avant-garde design  │
│                       │   │ agency...              │
└──────────────────────┘   └──────────────────────┘
```

Detalles del patrón de card en este listado (distinto al `ProjectCard` del Home):
- **Sin badge de tecnologías visible en la card** (a diferencia del Home) — foco puesto en imagen + título + descripción.
- Título + ícono de link externo (↗, `open_in_new` de Material Symbols) alineados en la misma fila, el ícono a la derecha.
- Descripción de 2-3 líneas en `on-surface-variant`.
- Toda la card es clickeable (no hay botón explícito "Ver proyecto" como en el Home) — el ícono ↗ es la afordancia visual de que lleva a otro lado.
- Imagen: por default con leve desaturación, la sombra ambiental de la foto (mockup fotográfico del proyecto en un monitor/escritorio, no un screenshot pelado) — vuelve a nitidez/color completo en hover, siguiendo la regla general de `02-diseño-visual.md`.

Definir en implementación el criterio para decidir qué proyecto es "alto" y cuál es "ancho" en el grid — puede ser un campo `layout: "wide" | "tall"` en `src/data/projects.ts`, o derivarse automático del aspect ratio real de la imagen subida. Preferible el campo explícito para tener control curatorial.

## Filtros

Se mantiene la idea de filtros opcionales por categoría de la v1 (`Todos / Web / Desktop / Mobile / Backend / Bases de datos / Otros`) — el mockup de referencia no los muestra en la captura provista, pero no hay motivo para sacarlos si la lista de proyectos crece. Estilo: mismos badges `label-caps` con borde que pasa a `tertiary` al estar activo/hover.

## Botón "cargar más"

```
[ Load More Projects ]  →  [ Ver más proyectos ]
```
Estilo secundario (ghost), centrado, ancho fijo — no ancho completo. Solo se muestra si hay más proyectos de los que entran en la vista inicial (con 4 proyectos actuales probablemente no haga falta todavía, pero se deja preparado para cuando se sumen más).

---

## Página individual de proyecto (`/projects/[slug]`)

Se mantiene la estructura de contenido de la v1 — no cambia el contenido, cambia el sistema visual con el que se presenta (usar los componentes de `02-diseño-visual.md`: badges de tecnología en `label-caps`, bloques de código/arquitectura con el `code-block-border` de acento cyan a la izquierda si se muestra algo tipo snippet o diagrama en texto).

1. **Hero** del proyecto (título + descripción corta, mismo tratamiento tipográfico que el hero del home pero en `headline-md`)
2. **Información:** Descripción, Objetivo, Problema, Solución, Tecnologías, Arquitectura, Funcionalidades, Desafíos, Aprendizajes
3. **Imágenes:** screenshots, dashboard, formularios, base de datos, distintas vistas
4. **Tecnologías:** badges (`label-caps`, borde `outline-variant`)
5. **Links:** `[ GitHub ]` `[ Demo ]` (botones secundarios ghost)

> Estas 9 subsecciones de "Información" son contenido real a completar con el usuario proyecto por proyecto — no inventar el contenido, pedirlo.

### GurkCRM — `/projects/gurkcrm`
```
GurkCRM
CRM desarrollado para centralizar la gestión
de clientes y procesos comerciales.

Sistema CRM diseñado para gestionar clientes,
información comercial, seguimientos y operaciones.

Tecnologías: .NET, PostgreSQL, React
```

### ForgeStudio — `/projects/forgestudio`
```
ForgeStudio
Web moderna enfocada en presentar
servicios y soluciones digitales.

Tecnologías: HTML, CSS, JavaScript
```
Incluye además: decisiones de diseño como sección propia.

### Book-Bites — `/projects/book-bites`
```
Book-Bites
Plataforma web relacionada con libros
y exploración de contenido.

Tecnología: Astro
```

### 007-Sama — `/projects/007-sama`
```
007-Sama
Experiencia web interactiva enfocada
en videojuegos.

Tecnologías: Web • Interactividad • Diseño
```
Incluye además: Demo como campo propio (aparte de GitHub).

---

## `src/data/projects.ts` — actualización del tipo

```ts
export interface Project {
  title: string;
  slug: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  featured: boolean;       // true = aparece en "Featured Work" del Home
  layout: "wide" | "tall";  // controla el masonry en /projects
  category: "web" | "desktop" | "mobile" | "backend" | "database" | "other";
  year?: number;            // para el badge de año en Featured Work (ej. "2023")
}
```
