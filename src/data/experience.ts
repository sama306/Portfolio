// Timeline de Trayectoria (desarrollo + audiovisual + educación).
// Renderizado por src/components/Trajectory.astro — se separa por `type`
// para armar las dos columnas sin duplicar arrays (ver 01-arquitectura-tecnica.md §experience).
// Agregar una entrada nueva = agregar un objeto acá, sin tocar el componente.

export interface ExperienceItem {
  period: string; // ej: "2025 — Actualidad"
  title: string;
  organization?: string;
  description: string;
  type: "experiencia" | "educacion";
  linkToVideos?: boolean; // si aplica, agrega el link a /videos
  details?: string[]; // lista expandible (accordion) — ej. responsabilidades del trabajo
}

export const experience: ExperienceItem[] = [
  {
    period: "2026 — Actualidad",
    title: "Desarrollo de proyectos personales",
    description:
      " Desarrollo software con React, TypeScript, Astro 6, TailwindCSS, C, Python, SQL Server, HTML, CSS y PostgreSQL. Interesado en aplicar tecnologías modernas para resolver problemas reales y en el aprendizaje continuo.",
    type: "experiencia",
  },
  {
    period: "Mayo 2024 — Febrero 2026",
    title: "Editor de Video",
    organization: "Inmobiliaria",
    description:
      "Edición y postproducción de contenido audiovisual para redes sociales y presentaciones institucionales.",
    type: "experiencia",
    linkToVideos: true,
    details: [
      "Edición de videos de propiedades.",
      "Preparación de contenido para redes sociales.",
      "Corrección y montaje de material.",
      "Selección de tomas.",
      "Incorporación de música y transiciones.",
      "Adaptación de videos a diferentes formatos.",
    ],
  },
  {
    period: "En curso",
    title: "Tecnicatura en Programación Informática",
    organization: "Universidad Nacional de San Martin",
    description: "Formación técnica en desarrollo de software.",
    type: "educacion",
  },
];
