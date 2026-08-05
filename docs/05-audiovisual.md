# Página de Audiovisual (`/videos`)

Rediseñada 1:1 en estructura sobre la captura de referencia y `docs/reference/videos-page-reference.html` (que es el HTML real de esta página, ya armado con Tailwind). **Esta es la página con más definición visual de todo el sitio** — usarla como referencia de calidad para el resto.

## Header de la página

```
Real Estate Visuals.

Elevating property presentations through cinematic editing,
precise color grading, and dynamic pacing. Delivering high-end
visual narratives that command attention and convey luxury.
```

Adaptar a Dante en español, manteniendo el tono "premium/cinematográfico":

```
Producción Audiovisual.

Edición cinematográfica, corrección de color y ritmo narrativo
aplicados a contenido inmobiliario. Videos pensados para captar
la atención y transmitir calidad desde el primer segundo.
```

Título en `display-lg`, subtítulo en `body-lg` color `on-surface-variant`, máximo ancho de línea legible (no que el párrafo ocupe todo el ancho del contenedor de 1200px).

## Dos cards informativas lado a lado (`The Process` / `The Toolkit`)

Layout: 2 columnas en desktop, se apilan en mobile.

### The Process
```
🎬 The Process

Every property tells a story. The editing process begins with
understanding the architectural highlights and the target
demographic. I focus on creating a seamless flow that guides
the viewer through the space naturally, emphasizing light,
scale, and premium finishes.

> Footage Ingestion & Organization
> Rough Cut & Narrative Assembly
> Pacing & Rhythmic Sync
> Color Grading & Correction
> Audio Sweetening & SFX
```

Adaptado a Dante (mantener el paso a paso, ajustar a su proceso real — confirmar con el usuario si estos pasos genéricos aplican o si su proceso real es distinto, ya documentado parcialmente en la v1 de este doc como "Proceso" de cada video individual):

```
🎬 El Proceso

Cada propiedad cuenta una historia. El proceso de edición
empieza por entender los puntos fuertes de la propiedad y el
público al que está dirigida. El objetivo es un flujo que
guíe la mirada de forma natural, destacando luz, escala y
terminaciones.

> Selección y organización del material
> Armado de corte inicial
> Ritmo y sincronización
> Corrección de color
> Música y ajuste de audio
```

Estilo: card con fondo `surface-variant` (o `surface-container`), la lista de pasos va dentro de un bloque tipo terminal — fondo `surface-container`, borde izquierdo 4px en `tertiary` (`code-block-border`), cada línea con prefijo `>`, tipografía `mono-code` (Geist).

### The Toolkit
```
🔧 The Toolkit

Professional results require industry-standard tools. My
workflow is optimized for speed without compromising quality,
utilizing a powerful suite of post-production software.

[Adobe Premiere Pro] [After Effects] [DaVinci Resolve] [Audition] [Cinema 4D]
```

Adaptar la lista de herramientas a lo que Dante realmente usa (consistente con `03-secciones-home.md` → Skills → Diseño/Multimedia: **Premiere Pro** confirmado; Photoshop e Illustrator también están en su set pero son de diseño gráfico, no de edición de video — evaluar si van en este toolkit o se dejan solo en Skills general. No agregar After Effects/DaVinci/Audition/Cinema 4D si Dante no los usa realmente; son placeholders del mockup).

Estilo: badges con borde `outline-variant`, hover a `tertiary`, mismo componente que los badges de tecnología de Proyectos.

## Selected Works — grid de videos

```
Selected Works
─────────────────────────────────────────

┌───────────────────────┐  ┌───────────────────────┐
│                        │  │                        │
│      ▶ (en hover)      │  │      ▶ (en hover)      │
│   video preview b/n    │  │   video preview b/n    │
│   → color en hover     │  │   → color en hover     │
├────────────────────────┤  ├────────────────────────┤
│ The Glass House Estate │  │ Skyline Penthouse       │
│ Beverly Hills, CA       │  │ New York, NY     [Promo]│
│               [Cinematic Tour]│                        │
└───────────────────────┘  └───────────────────────┘
```

Grid de 2 columnas en desktop, 1 en mobile. Cada card:
- Imagen 16:9, `grayscale(80%)` por default, `grayscale(0%)` + `scale(1.02)` en hover (clases `video-image` / `video-card:hover .video-image` del HTML de referencia — copiar ese comportamiento literal).
- Ícono de play (Material Symbols, `FILL 1`, color `tertiary`) centrado, aparece en overlay al hacer hover sobre la card (`opacity-0 group-hover:opacity-100`).
- Debajo de la imagen: título (`body-lg`, semibold) + ubicación/contexto (`mono-code`, `on-surface-variant`) a la izquierda; badge de tag (`label-caps`, borde `tertiary`, texto `tertiary`) a la derecha — ej. "Cinematic Tour", "Promo Edit", "Drone Focus", "Social Reel".

**Adaptar los tags a las categorías reales de Dante** (consistente con `src/data/videos.ts` → campo `category`: `inmobiliaria`, `social-media`, `edicion`, `otros`). El tag visual puede ser más específico que la categoría de filtro — ej. categoría `inmobiliaria` con tag visual "Recorrido Inmobiliario" o "Edición para Redes", según el video puntual.

**Adaptar el copy de ubicación**: el mockup usa "Beverly Hills, CA" / "New York, NY" porque es un ejemplo ficticio genérico de real estate premium internacional. Los videos reales de Dante son de la inmobiliaria donde trabajó — usar la ubicación real de cada propiedad si está disponible, o reemplazar ese campo por algo más ajustado (ej. barrio/ciudad real, o el tipo de propiedad si la ubicación no es relevante de compartir). Confirmar con el usuario.

## Botón "cargar más"

```
[ Load More Projects ]  →  [ Ver más trabajos ]
```
Mismo estilo ghost que en Proyectos.

---

## Página individual de video (`/videos/[slug]`)

Se mantiene la estructura de contenido de la v1, adaptada al sistema visual:

1. Título + descripción corta
2. **Video** con reproductor grande, integrado visualmente (no un iframe genérico sin estilo — envolver en el mismo tratamiento de card que el resto del sitio: borde `outline-variant`, radius `lg`)
3. **Información:**
```
Tipo de trabajo: Video inmobiliario
Rol: Edición de video
Herramientas: Premiere Pro
Objetivo: Presentar visualmente una propiedad
          para publicación en redes sociales.
```
4. **Proceso** (mismo tratamiento visual que "The Process" de la página listado — bloque `code-block-border` con pasos `>`):
```
01 — Selección del material
02 — Organización de tomas
03 — Edición
04 — Música y transiciones
05 — Corrección final
06 — Exportación
```
5. **Resultado:** video final + breve explicación.

---

## `src/data/videos.ts` — actualización del tipo

```ts
export interface VideoWork {
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  video: string;
  role: string;
  software: string[];
  category: "inmobiliaria" | "social-media" | "edicion" | "otros";
  tag: string;        // label visual en la card, ej. "Recorrido Inmobiliario"
  location?: string;  // reemplaza/ajusta el "Beverly Hills, CA" del mockup
}
```

## Nota sobre archivos de video

Sigue vigente lo de la v1: los videos deben estar optimizados antes de subirse (ver `09-seo-accesibilidad-performance.md`). No commitear videos pesados sin comprimir.
