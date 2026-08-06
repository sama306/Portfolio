// Listado de proyectos. Renderizado por ProjectCard / FeaturedWork.
// Se maneja content-driven (ver 01-arquitectura-tecnica.md §projects):
// agregar un proyecto = agregar un objeto acá, sin tocar componentes.
// `featured: true` = aparece en "Featured Work" del Home (03-secciones-home.md §4).
// `layout` controla el masonry en /projects (04-proyectos.md).
// Las `image` actuales son URLs remotas temporales (mockups de la referencia) —
// reemplazar por screenshots reales en src/assets/projects/ cuando se provean.

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
}

export const projects: Project[] = [
  {
    title: "GurkCRM",
    slug: "gurkcrm",
    subtitle: "Enterprise Architecture",
    description:
      "Sistema CRM diseñado para gestionar clientes, información comercial, seguimientos y operaciones.",
    technologies: [".NET", "PostgreSQL", "React"],
    image:
      "assets/Projects/Gurk/Inicio.PNG",
    github: "",
    demo: "",
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
    technologies: ["HTML", "CSS", "JavaScript"],
    image:
      "assets/Projects/Forge-Studio/Inicio.PNG",
    github: "",
    demo: "",
    featured: true,
    layout: "tall",
    category: "web",
    year: 2026,
  },
];
