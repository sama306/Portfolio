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
    period: "2025 — Actualidad",
    title: "Desarrollo de proyectos personales",
    description:
      "Sigo desarrollando proyectos propios mientras me formo, aplicando lo aprendido y explorando nuevas herramientas.",
    type: "experiencia",
  },
  {
    period: "2025",
    title: "Editor de Video",
    organization: "Inmobiliaria",
    description:
      "Edición y preparación del material audiovisual de propiedades para su publicación en redes sociales.",
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
    organization: "[Nombre de la institución]",
    description: "Formación técnica en desarrollo de software.",
    type: "educacion",
  },
];
