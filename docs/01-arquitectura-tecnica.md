# Arquitectura técnica

> **Estado real del proyecto (actualizado tras Fase 1):** se usó Astro 7 + Tailwind v4. Esto cambia cómo se configura Tailwind respecto a lo que decía la v1 de este documento — ver sección "Tailwind v4" más abajo antes de tocar estilos o instalar dependencias nuevas.

## Package manager

**Usar siempre pnpm.** No generar `package-lock.json` ni usar `npm install`/`yarn add`. Todos los comandos de instalación, scripts y ejemplos deben usar `pnpm`.

```bash
pnpm create astro@latest .
pnpm add react @astrojs/react
pnpm dev
pnpm build
```

Se usa `pnpm-workspace.yaml` (no `.npmrc`) para habilitar el build script de `esbuild` bajo pnpm 11 — ya está resuelto, no hace falta tocarlo salvo que pnpm tire un error de build scripts bloqueados en una instalación nueva.

## Tailwind v4 (no `@astrojs/tailwind`)

`@astrojs/tailwind` es para Tailwind v3 y es incompatible con Astro 7. El proyecto usa **Tailwind v4 vía `@tailwindcss/vite`**, configurado directamente en `astro.config.mjs` como plugin de Vite — no existe (ni debe crearse) un `tailwind.config.mjs`.

Los tokens de diseño (colores, `fontSize`, `fontFamily`, `spacing`, `borderRadius`) están portados **literales** desde `docs/reference/videos-page-reference.html` a un bloque `@theme` CSS-first dentro de `src/styles/global.css`. Cualquier token nuevo que se necesite (ej. un color que falte) se agrega ahí, con el mismo naming que ya usa Tailwind en el HTML de referencia (`surface`, `on-surface`, `tertiary`, etc.) — no inventar nombres nuevos ni reescribir los existentes.

**Border radius — decisión tomada:** se usan los valores del `tailwind.config` del HTML de referencia (`DEFAULT: 0.125rem`, `lg: 0.25rem`, `xl: 0.5rem`, `full: 0.75rem`), no los de `DESIGN.md`. Esto resuelve la divergencia que estaba anotada como pendiente en `02-diseño-visual.md` — no volver a preguntarlo.

## Estructura de carpetas objetivo

```
Portfolio/
├── docs/                       ← documentación de contexto (este set de archivos)
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Experience.astro
│   │   ├── Education.astro
│   │   ├── Skills.astro
│   │   ├── ProjectCard.astro
│   │   ├── ProjectGrid.astro
│   │   ├── VideoCard.astro
│   │   ├── VideoGrid.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   │
│   ├── layouts/
│   │   └── Layout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── projects/
│   │   │   ├── index.astro
│   │   │   ├── gurkcrm.astro
│   │   │   ├── forgestudio.astro
│   │   │   ├── book-bites.astro
│   │   │   └── 007-sama.astro
│   │   └── videos/
│   │       ├── index.astro
│   │       ├── video-01.astro
│   │       ├── video-02.astro
│   │       └── video-03.astro
│   │
│   ├── data/
│   │   ├── projects.ts
│   │   ├── videos.ts
│   │   └── experience.ts
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   └── assets/
│       ├── projects/
│       ├── videos/
│       └── images/
│
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── pnpm-lock.yaml
```

No crear archivos fuera de esta estructura sin que lo pida el usuario. Si una sesión necesita agregar algo nuevo (ej. una carpeta `lib/` para utils), avisar antes de decidirlo por tu cuenta si no está en este documento.

## Content-driven, no hardcodeado

Los proyectos y videos **no se escriben directamente dentro de los componentes**. Se manejan desde archivos de datos tipados en `src/data/`, para que agregar un proyecto o video nuevo sea solo agregar un objeto al array, sin tocar componentes ni páginas.

### `src/data/projects.ts`

```ts
export interface Project {
  title: string;
  slug: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  featured: boolean;
  category: "web" | "desktop" | "mobile" | "backend" | "database" | "other";
}

export const projects: Project[] = [
  {
    title: "GurkCRM",
    slug: "gurkcrm",
    description: "Sistema CRM diseñado para gestionar clientes, información comercial, seguimientos y operaciones.",
    technologies: [".NET", "PostgreSQL", "React"],
    image: "/projects/gurkcrm.webp",
    github: "",
    demo: "",
    featured: true,
    category: "web",
  },
  // ForgeStudio, Book-Bites, 007-Sama van acá con la misma forma
];
```

### `src/data/videos.ts`

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
}

export const videos: VideoWork[] = [
  {
    title: "Departamento en Palermo",
    slug: "departamento-palermo",
    description: "Video inmobiliario para publicación en redes sociales.",
    thumbnail: "/videos/palermo.webp",
    video: "/videos/palermo.mp4",
    role: "Editor de video",
    software: ["Premiere Pro"],
    category: "inmobiliaria",
  },
];
```

### `src/data/experience.ts`

Timeline de experiencia (desarrollo + audiovisual), pensada para renderizar la sección de Experiencia como línea de tiempo vertical con items expandibles. Definir la forma exacta del objeto en la sesión que se trabaje `03-secciones-home.md`, pero como guía:

```ts
export interface ExperienceItem {
  period: string;       // ej: "2025 — Actualidad"
  title: string;
  organization?: string;
  description: string;
  type: "desarrollo" | "audiovisual";
  linkToVideos?: boolean; // si es la experiencia en la inmobiliaria, linkea a /videos
}
```

## Reglas generales para cualquier sesión de opencode

- No reescribir componentes ya funcionando salvo que la sesión sea explícitamente para eso.
- Antes de crear un componente nuevo, revisar si ya existe algo similar en `src/components/`.
- Mantener el naming en inglés para archivos/componentes (`ProjectCard.astro`) y el contenido/copy en español (es el idioma del sitio).
- Cualquier decisión de estructura que no esté en estos docs, preguntar antes de asumir.
