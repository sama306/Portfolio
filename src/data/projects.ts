// Listado de proyectos. Renderizado por ProjectCard / FeaturedWork (Home)
// y por la página /projects. Content-driven (ver 01-arquitectura-tecnica.md §projects):
// agregar un proyecto = agregar un objeto acá, sin tocar componentes.
// `featured: true` = aparece en "Featured Work" del Home (03-secciones-home.md §4).
// `featured: false` = solo en la página /projects.
// `layout` controla el masonry en /projects (04-proyectos.md).
// Proyectos reales: 007-Sama, Consolink, ForgeStudio, GurkCRM, Kaido.

export interface Project {
  title: string;
  slug: string;
  subtitle: string; // categoría corta mostrada en la card del Home (ej. "Enterprise Architecture")
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  featured: boolean;
  layout: "wide" | "tall";
  category: "web" | "desktop" | "mobile" | "backend" | "database" | "other";
  year?: number; // badge de año en Featured Work
  // Subsecciones de la página detalle (ProjectLayout, ver 04-proyectos.md).
  // Campos opcionales: el layout renderiza solo los presentes. El contenido
  // real se carga proyecto por proyecto (tarea separada del roadmap).
  goal?: string; // Objetivo
  problem?: string; // Problema
  solution?: string; // Solución
  architecture?: string; // Arquitectura (se renderiza como bloque code-block-border)
  features?: string[]; // Funcionalidades (lista ">")
  challenges?: string[]; // Desafíos
  learnings?: string[]; // Aprendizajes
  screenshots?: string[]; // Galería de imágenes de la página detalle
}

export const projects: Project[] = [
  {
    title: "GurkCRM",
    slug: "gurkcrm",
    subtitle: "Enterprise Architecture",
    description:
      "Sistema CRM diseñado para gestionar clientes, información comercial, seguimientos y operaciones.",
    technologies: ["Astro", "React", "TypeScript", "Express", "Prisma", "SQL Server"],
    image: "/assets/Projects/Gurk/Inicio.PNG",
    demo: "https://gurk-crm.vercel.app",
    featured: true,
    layout: "wide",
    category: "web",
    year: 2026,
  },
  {
    title: "ForgeStudio",
    slug: "forgestudio",
    subtitle: "Digital Identity",
    description:
      "Web moderna enfocada en presentar servicios y soluciones digitales, con decisiones de diseño como sección propia.",
    technologies: ["Astro", "TypeScript", "Tailwind", "GSAP"],
    image: "/assets/Projects/Forge-Studio/Inicio.PNG",
    featured: true,
    layout: "tall",
    category: "web",
    year: 2026,
  },
  {
    title: "007 Sama",
    slug: "007-sama",
    subtitle: "Interactive Gaming Experience",
    description:
      "E-commerce de videojuegos completo: catálogo, búsqueda, autenticación, wishlist, noticias y checkout con Stripe.",
    technologies: ["Astro", "React", "TypeScript", "Stripe", "Redis"],
    image: "/assets/Projects/007-Sama/Inicio.PNG",
    featured: false,
    layout: "wide",
    category: "web",
    year: 2026,
  },
  {
    title: "Consolink",
    slug: "consolink",
    subtitle: "Facility Management",
    description:
      "Plataforma de gestión para consorcios con paneles por rol (admin, manager, owner, tenant) y administración de edificios y departamentos.",
    technologies: ["Astro", "React", "TypeScript", "TanStack Query", "Zod"],
    image: "/assets/Projects/Consolink/login.jpeg",
    featured: false,
    layout: "wide",
    category: "web",
    year: 2026,
  },
  {
    title: "Kaido",
    slug: "kaido",
    subtitle: "Restaurant Web",
    description:
      "Landing page premium para una cafetería de especialidad de inspiración japonesa: menú, especialidades, galería y ubicación.",
    technologies: ["Astro", "React", "TypeScript", "GSAP", "Framer Motion"],
    image: "/assets/Projects/Kaido/Inicio.PNG",
    featured: false,
    layout: "wide",
    category: "web",
    year: 2026,
  },
];
