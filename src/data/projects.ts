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
  portfolioNote?: string; // nota de honestidad: proyecto de portfolio/demo, no un producto en producción
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
    portfolioNote:
      "Proyecto de portfolio construido de cero: una demo funcional con datos de prueba, no un producto SaaS real en uso. El backend corre en un plan gratuito que se duerme tras inactividad.",
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
      "/assets/Projects/Gurk/Inicio.PNG",
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
    subtitle: "Estudio de Diseño / Branding",
    description:
      "Landing premium para un estudio creativo ficticio de diseño, desarrollo web y branding, con animaciones GSAP, dark/light mode y case studies dinámicos.",
    technologies: [
      "Astro",
      "TypeScript",
      "Tailwind",
      "GSAP",
      "ScrollTrigger",
      "Lenis",
      "Astro Icon",
      "Zod",
    ],
    image: "/assets/Projects/Forge-Studio/Inicio.PNG",
    github: "https://github.com/sama306/ForgeStudio",
    demo: "https://forge-studio12.vercel.app",
    portfolioNote:
      "Proyecto de portfolio basado en una marca ficticia (Forge Studio). La demo en línea es estática, sin backend, formularios dirigidos a Formspree ni datos reales: es una presentación, no un sitio en producción para clientes.",
    featured: true,
    layout: "tall",
    category: "web",
    year: 2026,
    goal: "Simular un producto digital real de nivel profesional —un estudio creativo ficticio llamado Forge Studio— demostrando dominio de Astro, Tailwind CSS, animaciones avanzadas, accesibilidad y optimización, como carta de presentación para entrevistas y clientes.",
    problem:
      "Demostrar que se puede construir un sitio multi-página premium de una marca completa —con contenido modelado en case studies, dark/light mode y animaciones sofisticadas— y no quedarse en una one-page estática sin profundidad.",
    solution:
      "Landing premium de Forge Studio + páginas secundarias (Work, Services, About, Contact) + 4 case studies dinámicos con rutas /work/[slug]. Animaciones GSAP + ScrollTrigger con Lenis como fuente del scroll, dark/light mode persistente sin flash, formulario de contacto a Formspree con validación client-side, y SEO completo.",
    architecture: `src/
├── assets/
├── components/    # Hero, Clients, Services, Process, Projects,
│                  # Stats, Testimonials, CTA, Navbar, Footer, ProjectCard
├── layouts/       # Layout.astro (SEO, fuentes, Lenis, grain overlay)
├── pages/         # index, work, work/[slug], services, about,
│                  # contact, terms, privacy
├── styles/        # global.css (paleta, tipografía, tokens)
├── content/
│   └── projects/  # atlas, lunar, nova, pulse (MD)
└── utils/         # lenis.ts, textReveal.ts, services.ts`,
    features: [
      "Landing completa: Hero, Clients (carrusel infinito), Services, Process, Projects, Stats, Testimonials y CTA",
      "Páginas adicionales: Work (listado), Services, About y Contact, cada una con animaciones y diseño propio",
      "4 case studies con rutas dinámicas (/work/[slug]) a partir de content collections",
      "Dark/Light mode con persistencia en localStorage y toggle en navbar sin flash",
      "Animaciones GSAP + ScrollTrigger en Hero, Stats, Projects, Process y Contact, con utilidad textReveal",
      "Scroll suave con Lenis sincronizado con ScrollTrigger",
      "Formulario de contacto con validación client-side y envío a Formspree",
      "Páginas legales: Términos y Privacidad",
      "SEO: Open Graph, Twitter Cards, sitemap.xml, robots.txt y URLs semánticas",
      "Accesibilidad: ARIA, foco visible, navegación por teclado y prefers-reduced-motion",
      "Responsive mobile-first con menú hamburguesa y overlay animado",
      "Performance: fuentes con swap, Lenis diferido y animaciones con transform/opacity",
    ],
    challenges: [
      "Sincronizar Lenis como fuente única del scroll con el ScrollTrigger de GSAP sin conflictos",
      "Implementar dark/light mode persistente sin flash de color al recargar (script inline)",
      "Mantener animaciones fluidas usando solo transform y opacity para no degradar el rendimiento",
      "Validar el contenido de los case studies con Zod en las content collections",
    ],
    learnings: [
      "Especificar animaciones por elemento en un documento de diseño (docs/animations.md) ordena la implementación",
      "Una utilidad textReveal reutilizable evita repetir lógica de animación entre secciones",
      "Lenis como fuente única del scroll evita los conflictos típicos de scroll suave con librerías de animación",
      "Una landing multi-página con content collections escala mejor que una one-page hardcodeada",
    ],
    screenshots: [
      "/assets/Projects/Forge-Studio/Inicio.PNG",
      "/assets/Projects/Forge-Studio/Servicios.PNG",
      "/assets/Projects/Forge-Studio/Proceso.PNG",
      "/assets/Projects/Forge-Studio/Proyectos.PNG",
      "/assets/Projects/Forge-Studio/Trabajos.PNG",
      "/assets/Projects/Forge-Studio/Nosotros.PNG",
      "/assets/Projects/Forge-Studio/Contacto.PNG",
    ],
  },
  {
    title: "007 Sama",
    slug: "007-sama",
    subtitle: "E-commerce de Videojuegos",
    description:
      "Tienda de videojuegos static-first con islas de hidratación: catálogo, búsqueda fuzzy, autenticación OAuth, wishlist y checkout, pensada para rendimiento y escalabilidad.",
    technologies: [
      "Astro",
      "React",
      "TypeScript",
      "Tailwind",
      "Nano Stores",
      "Auth.js",
      "Upstash Redis",
      "Zod",
      "Fuse.js",
      "jsPDF",
      "Resend",
      "Vitest",
      "Playwright",
    ],
    image: "/assets/Projects/007-Sama/Inicio.PNG",
    github: "https://github.com/sama306/007-Sama",
    demo: "https://007-sama.vercel.app",
    portfolioNote:
      "Proyecto de portfolio con una demo funcional: sin pagos reales ni datos sensibles; el checkout y las vistas autenticadas usan entorno de prueba. Corresponde a un demo, no a una tienda de videojuegos en producción.",
    featured: false,
    layout: "wide",
    category: "web",
    year: 2026,
    goal: "Demostrar que una tienda de videojuegos puede ofrecer interactividad donde importa —carrito, búsqueda, login y wishlist— sin sacrificar Core Web Vitals en favor de un SPA pesado.",
    problem:
      "La mayoría de los e-commerces del sector dependen de SPAs pesados que sacrifican rendimiento y Core Web Vitals en favor de una interactividad total, incluso en zonas donde el usuario no la percibe.",
    solution:
      "Arquitectura Astro static-first con islands de hidratación parcial (client:load / client:visible), Nano Stores para el estado de cliente, Auth.js con OAuth (Google, Discord, Steam), Upstash Redis para sesiones y wishlist, y una estrategia híbrida SSG/SSR: estático donde se puede, server rendering solo donde hace falta autenticación.",
    architecture: `src/
├── content/          # Content Collections (.md)
│   ├── config.ts     # schema con Zod
│   ├── games/        # un archivo por juego
│   └── news/         # noticias
├── components/       # ui, game, cart, auth, layout
├── layouts/          # BaseLayout, GameLayout, AdminLayout
├── pages/            # file-based routing
├── lib/              # kv, auth, users, search, cart, format
├── stores/           # Nano Stores (cart, auth, wishlist, UI)
├── db/               # schema, queries, seed
└── styles/

Ruteo: SSG (/, games, news, cart, search)
     SSR + auth (/account/*, /checkout)`,
    features: [
      "Catálogo con Content Collections y frontmatter validado con Zod",
      "Filtros por género, plataforma, precio y rating",
      "Búsqueda client-side con Fuse.js (fuzzy search)",
      "Página de detalle con galería, requisitos, trailer y valoraciones",
      "Nuevos lanzamientos: últimos 30 días y próximos",
      "Módulo de noticias: releases, updates, reviews y eventos",
      "Autenticación: registro por email y login con OAuth (Google, Discord, Steam)",
      "Recuperación de contraseña con email transaccional (Resend)",
      "Carrito de compras sincronizado con API y persistente en sesión",
      "Wishlist sincronizada entre dispositivos vía Redis con localStorage como fallback",
      "Checkout SSR con confirmación y comprobante PDF (jsPDF)",
      "Panel de usuario: pedidos, wishlist y perfil",
      "SEO: sitemap, structured data, Open Graph y meta tags",
      "Tests unitarios (Vitest) + e2e (Playwright) y CI/CD a Vercel",
    ],
    challenges: [
      "Diferenciar rutas SSG de rutas SSR, subiendo auth solo donde se necesita",
      "Sincronizar carrito y wishlist entre Redis y localStorage sin perder estado",
      "Compartir esquemas de Zod entre la API, los formularios y las Content Collections",
    ],
    learnings: [
      "La arquitectura de islands permite equilibrar rendimiento e interactividad sin elegir uno solo",
      "Nano Stores es una alternativa ligera (~1 KB) y reactiva a soluciones de estado más pesadas",
      "El fuzzy search client-side evita servicios externos y reduce dependencias",
    ],
    screenshots: [
      "/assets/Projects/007-Sama/Inicio.PNG",
      "/assets/Projects/007-Sama/Nuevos-Lanzamientos.PNG",
      "/assets/Projects/007-Sama/Catalogo.PNG",
      "/assets/Projects/007-Sama/Buscar.PNG",
      "/assets/Projects/007-Sama/Noticias.PNG",
    ],
  },
  {
    title: "Consolink",
    slug: "consolink",
    subtitle: "Gestión de Consorcios",
    description:
      "Plataforma centralizada para administrar consorcios, edificios, departamentos, expensas y tickets de reparación, con roles y permisos diferenciados (admin, manager, owner, tenant).",
    technologies: [
      "Astro",
      "React",
      "TypeScript",
      "Tailwind",
      "shadcn/ui",
      "Radix UI",
      "TanStack Query",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Express",
      "PostgreSQL",
      "Prisma",
      "JWT",
    ],
    image: "/assets/Projects/Consolink/login.jpeg",
    github: "https://github.com/sama306/consolink",
    portfolioNote:
      "Proyecto de práctica personal (full stack) para ejercitar roles, autenticación y modelado relacional. Este repositorio contiene únicamente el frontend; el backend no está publicado, por lo que no es funcional ni relevable standalone ni está en producción.",
    featured: false,
    layout: "wide",
    category: "web",
    year: 2026,
    goal: "Ejercitar el desarrollo full-stack en un escenario con múltiples roles, autenticación, autorización y una base de datos relacional con relaciones complejas, aplicado a la gestión integral de consorcios.",
    problem:
      "Administrar consorcios involucra roles muy distintos —administración, encargados, propietarios e inquilinos— con permisos y vistas propias, más datos relacionales complejos (consorcio → edificio → departamento → inquilino, expensas, tickets y avisos) difíciles de organizar sin una plataforma centralizada.",
    solution:
      "Frontend Astro SSR con islas de React 19 y paneles por rol, consumiendo una API REST no incluida en el repo (Node + Express + PostgreSQL + Prisma). Autenticación mediante JWT en cookie httpOnly, roles many-to-many para usuarios con varios roles y paneles diferenciados por tipo de usuario.",
    architecture: `Cliente (Astro SSR, puerto 4321)
  │  fetch (cookie auth_token)
  ▼
Servidor (Express API, puerto 3001)
  │  Prisma ORM
  ▼
PostgreSQL

Auth: cookie httpOnly → GET /api/auth/me
      → middleware Astro adjunta user a locals
Roles: many-to-many (UserRole) + requireRole()`,
    features: [
      "Panel ADMIN: CRUD de consorcios, edificios, departamentos, propietarios, inquilinos y encargados",
      "ADMIN: CRUD de usuarios con asignación de roles many-to-many",
      "Gestión masiva de expensas: generación por consorcio y estados de pago",
      "Gestión de tickets con asignación a encargado y cambio de estado",
      "Avisos con targeting por consorcio/edificio y calendario de eventos",
      "Gestión de documentos y tablero de tareas pendientes/resueltas",
      "Panel OWNER: mis propiedades, tickets de reparación y expensas",
      "Panel TENANT: unidad asignada, contrato con cuenta regresiva de días y expensas",
      "Panel MANAGER: tickets asignados/cerrados con cambio de estado y tareas",
      "Dashboard ADMIN con estadísticas y tema claro/oscuro",
    ],
    challenges: [
      "Coordinar el fetching SSR (middleware de auth, stats) con la carga asíncrona del lado cliente (TanStack Query en las islas)",
      "Mantener consistencia entre la tabla UserRole y las tablas de perfil (Owner, Tenant, Manager) al crear usuarios sin asumir un único rol",
      "Implementar auth con cookie httpOnly y SSR: el middleware debe leer la cookie, consultar el backend y adjuntar el usuario antes de renderizar",
      "Diseñar un sistema de permisos por rol con requireRole() que verifique conjuntos de roles, no uno fijo",
      "Formularios con dependency selects (consorcio → edificio → departamento) dentro de modales sin cerrarlos al elegir",
    ],
    learnings: [
      "SSR con Astro + islas de React requiere cuidar el aislamiento de providers por página (QueryProvider por isla raíz)",
      "La auth JWT en cookie httpOnly mantiene el token fuera del alcance del JavaScript del cliente",
      "Los roles many-to-many permiten usuarios con varios roles y una navegación por sidebar combinada, sin if/else excluyentes",
      "Separar backend y frontend (aunque no se publique el backend) facilita probar roles, permisos y modelo de datos complejo",
    ],
    screenshots: [
      "/assets/Projects/Consolink/login.jpeg",
      "/assets/Projects/Consolink/dashboard-admin.jpeg",
      "/assets/Projects/Consolink/consorcios.jpeg",
      "/assets/Projects/Consolink/edificios.jpeg",
      "/assets/Projects/Consolink/departamentos.jpeg",
      "/assets/Projects/Consolink/dashboard-owner.jpeg",
      "/assets/Projects/Consolink/dashboard-tenant.jpeg",
      "/assets/Projects/Consolink/dashboard-manager.jpeg",
      "/assets/Projects/Consolink/theme-light.jpeg",
    ],
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
