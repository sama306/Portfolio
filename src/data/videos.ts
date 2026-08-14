// Trabajos audiovisuales (Fase 4, ver 05-audiovisual.md).
// Content-driven: agregar un video nuevo = agregar un objeto acá, sin tocar componentes.
// `featured: true` = aparece en la preview "Cinematic Editing" del Home (03-secciones-home.md §5).
// `category` alimenta los filtros de /videos; `tag` es el label visual de la card.
// `youtubeUrl` es el video publicado (los archivos .mp4 se hospedan en YouTube,
// no en el repo — ver .gitignore y 09-seo-accesibilidad-performance.md).
// Las thumbnails apuntan a los frames reales en /assets/Videos/Frames.

export interface VideoWork {
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  youtubeUrl: string;
  duration: string; // metadata corta, ej. "02:26"
  tag: string; // label visual en la card, ej. "Recorrido Inmobiliario"
  role: string;
  software: string[];
  category: "inmobiliaria" | "social-media" | "edicion" | "otros";
  location?: string; // contexto real de la propiedad, ej. barrio/ciudad
  featured: boolean;
  objective?: string; // Objetivo (Información de la página individual, ver 05-audiovisual.md)
  process?: string[]; // pasos del proceso, bloques ">" (fallback al genérico si no se define)
  result?: string; // Resultado: explicación breve final
}

// Proceso genérico por defecto para la página individual (05-audiovisual.md §"Página individual de video").
const DEFAULT_PROCESS = [
  "Selección del material",
  "Organización de tomas",
  "Edición",
  "Música y transiciones",
  "Corrección final",
  "Exportación",
];

export const videos: VideoWork[] = [
  {
    title: "Aizpurua",
    slug: "recorrido-al-atardecer",
    description:
      "Recorrido inmobiliario editado al atardecer para publicación en redes sociales.",
    thumbnail: "/assets/Videos/Frames/Aizpurua.webp",
    youtubeUrl: "https://www.youtube.com/watch?v=0_xlRwUmX-s",
    duration: "02:26",
    tag: "Producción completa",
    role: "Editor de video",
    software: ["Premiere Pro", "Sony Vegas"],
    category: "inmobiliaria",
    featured: true,
    objective:
      "Presentar la propiedad en su mejor momento de luz —el atardecer— y publicar el recorrido en redes sociales como pieza de difusión.",
    process: [
      "Selección del material filmado al atardecer",
      "Organización de tomas por planta y ambiente",
      "Edición del recorrido",
      "Música y transiciones",
      "Corrección de color",
      "Exportación para redes",
    ],
    result:
      "Un recorrido corto que destaca la ambientación vespertina de la propiedad, listo para captar atención en el feed.",
  },
  {
    title: "Olazbal",
    slug: "villa-en-horas-azules",
    description:
      "Villa presentada en horas azules, editada con corrección de color y ritmo cinematográfico.",
    thumbnail: "/assets/Videos/Frames/Propiedad.webp",
    youtubeUrl: "https://www.youtube.com/watch?v=lvEfl8VTi8E&t=21s",
    duration: "03:29",
    tag: "Producción completa",
    role: "Editor de video",
    software: ["Premiere Pro", "Sony Vegas"],
    category: "inmobiliaria",
    featured: true,
    objective:
      "Mostrar la villa en horas azules con una corrección de color que busca un tono cinematográfico y de alta gama.",
    process: [
      "Selección de tomas clave de la villa",
      "Organización del material por ambientes",
      "Edición con ritmo pausado",
      "Música y transiciones",
      "Corrección de color en horas azules",
      "Exportación final",
    ],
    result:
      "Una pieza cinematográfica que resalta la escala y el exterior de la villa, pensada para el público de la inmobiliaria.",
  },
  {
    title: "Alvarez Thomas",
    slug: "residencias-slate",
    description:
      "Video inmobiliario de residencias, con selección de tomas y montaje para redes.",
    thumbnail: "/assets/Videos/Frames/Alvarez-Thomas.webp",
    youtubeUrl: "https://www.youtube.com/watch?v=dSdtwgsCW3I",
    duration: "02:29",
    tag: "Producción completa",
    role: "Editor de video",
    software: ["Premiere Pro", "Sony Vegas"],
    category: "inmobiliaria",
    featured: true,
    objective:
      "Comunicar la distribución y el estilo de las residencias a través de una selección de tomas que guíen la mirada de forma natural.",
    process: [
      "Selección de tomas de las residencias",
      "Organización del material",
      "Edición y montaje",
      "Música y transiciones",
      "Corrección final",
      "Exportación para redes",
    ],
    result:
      "Un montaje ágil y ordenado de las residencias, listo para difusión en redes con ritmo sostenido de principio a fin.",
  },
];