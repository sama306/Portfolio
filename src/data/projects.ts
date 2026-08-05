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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD2J6tGgNiTGsOhTlbE7Lt2t3U0gZ0cyVQ7eA2iiad61K3Z-lEBCVDcOkWFFS5NZ_dts_rMs9ITQFI51rQtu3ElZkn9aBxkJQv3BZcpHLS-bt2Wym7PxuZP5PnERoolx0nap-n9QbNQctYJiEpobOih7VouI3MiFDm0k1VNHZ_nnFfasaPCRzHmko77Qe-qLgfoUj55Qcup4wyjmRXga_g5fqU1Nd9mh1pJDnS141-bP1P-dU5AXHdw",
    github: "",
    demo: "",
    featured: true,
    layout: "wide",
    category: "web",
    year: 2023,
  },
  {
    title: "ForgeStudio",
    slug: "forgestudio",
    subtitle: "Digital Identity",
    description:
      "Web moderna enfocada en presentar servicios y soluciones digitales, con decisiones de diseño como sección propia.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBM8JacLy4tugTHpASLXLS4DoNJ3Ta8pc2_pQel5vJ3OzrsI7_d-QV-c9yRqOBLucbxI7zdRrjor4rFb9-3pmNof_P2A34DDiHTVIhmGfPRPNRzZHtewnKnG7my-lEJ7qhdUPYNuGRL62SsG7Fdc0oVL8K6kHhKBrhNlOuO47AKr1ggsgAm56w3PLGDH9STcVkdoFa-RneV0PyU0J5Ye3YoDzcwp4I_I1JTLQUa75sH11Z44pSddiqR",
    github: "",
    demo: "",
    featured: true,
    layout: "tall",
    category: "web",
    year: 2022,
  },
];
