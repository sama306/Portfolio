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
    subtitle: "CRM SaaS Multi-tenant",
    description:
      "CRM SaaS full stack para gestión de clientes, oportunidades comerciales, tareas y equipos. Multi-tenancy, autenticación JWT y pipeline Kanban.",
    technologies: [
      "Astro",
      "React",
      "TypeScript",
      "Tailwind",
      "shadcn/ui",
      "TanStack Query",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Framer Motion",
      "dnd-kit",
      "Express",
      "Prisma",
      "SQL Server",
    ],
    image: "/assets/Projects/Gurk/Inicio.PNG",
    github: "https://github.com/sama306/GurkCRM",
    demo: "https://gurk-crm.vercel.app",
    featured: true,
    layout: "wide",
    category: "web",
    year: 2026,
    goal: "Desarrollar una aplicación SaaS profesional que permita a pequeñas y medianas empresas administrar todo su proceso comercial —clientes, oportunidades, tareas y equipos— desde un único lugar, sirviendo como pieza principal de portfolio para aplicar a posiciones de Frontend / Full Stack Developer.",
    problem:
      "Los equipos comerciales de agencias, estudios jurídicos, consultoras y PyMEs suelen manejar clientes, oportunidades y tareas en planillas o herramientas fragmentadas. Además, al tratarse de un SaaS, cada organización necesita aislar sus datos por completo y controlar qué puede ver y hacer cada usuario según su rol.",
    solution:
      "Sistema full stack de dos aplicaciones: un frontend Astro + React que consume una API REST, y un backend Express con Clean Architecture por capas. Multi-tenancy real mediante scoping por organizationId, autenticación por JWT con refresh tokens rotativos, roles granulares (Owner, Admin, Sales, Viewer) y validación compartida con Zod entre frontend y backend.",
    architecture: `backend/
└── src/
    ├── modules/            # Un folder por entidad de negocio
    │   ├── auth/           #   (users, customers, deals, tasks, ...)
    │   │   └── {module}.routes.ts
    │   │   └── {module}.controller.ts
    │   │   └── {module}.service.ts
    │   │   └── {module}.repository.ts
    │   │   └── {module}.dto.ts
    │   │   └── {module}.schema.ts      # Zod
    ├── middlewares/        # auth, role, validate, error
    ├── shared/             # errors, utils, types
    ├── config/             # env, prisma
    └── prisma/             # schema.prisma, migrations, seed

Order: routes → controller → service → repository → Prisma`,
    features: [
      "Autenticación completa: registro, login, recuperación de contraseña, JWT con refresh tokens rotativos y revocación",
      "Multi-tenancy real: cada organización es un tenant aislado, probado contra fugas de datos",
      "Roles y permisos granulares: Owner, Admin, Sales y Viewer con jerarquía",
      "Gestión comercial: Empresas, Contactos, Clientes, Oportunidades y Tareas con búsqueda, filtros y paginación",
      "Pipeline Kanban con drag & drop, actualización optimista y reordenamiento bajo concurrencia",
      "Dashboard con métricas en vivo: clientes activos, oportunidades abiertas, ventas del mes y actividad reciente",
      "Exportación de clientes a CSV con los filtros aplicados",
      "Invitación de usuarios por email con rol asignado",
      "Diseño responsive con sidebar colapsable",
    ],
    challenges: [
      "Aislar los datos entre organizaciones (multi-tenancy) para evitar fugas en un modelo single-database",
      "Reordenar el Kanban de forma correcta bajo concurrencia real, con actualización optimista",
      "Modelar la jerarquía de roles para que un Admin no pueda modificar a otro Admin ni al Owner",
      "Rotar y revocar refresh tokens para mitigar replay attacks",
      "Adaptar el modelo de datos a las limitaciones de Prisma/SQL Server (enums y JSON como string + validación con Zod)",
    ],
    learnings: [
      "Clean Architecture y Repository Pattern ayudan a aislar el ORM y testear la lógica de negocio",
      "Separar estado de servidor (TanStack Query) del estado de cliente (Zustand) evita anti-patrones",
      "Compartir schemas de Zod entre frontend y backend reduce duplicación y bugs de validación",
      "Estrategia MVP vs fase 2 permite completar un portfolio profesional en un tiempo razonable",
    ],
    screenshots: [
      "/assets/Projects/Gurk/Dashboard.PNG",
      "/assets/Projects/Gurk/Oportunidadeds.PNG",
      "/assets/Projects/Gurk/Clientes.png",
      "/assets/Projects/Gurk/Empresas.PNG",
      "/assets/Projects/Gurk/Tareas.png",
      "/assets/Projects/Gurk/Contacto.PNG",
    ],
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
