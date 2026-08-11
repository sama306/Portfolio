// Trabajos audiovisuales (Fase 4, ver 05-audiovisual.md).
// Content-driven: agregar un video nuevo = agregar un objeto acá, sin tocar componentes.
// `featured: true` = aparece en la preview "Cinematic Editing" del Home (03-secciones-home.md §5).
// `category` alimenta los filtros de /videos; `tag` es el label visual de la card.
// `youtubeUrl` es el video publicado; `video` es el archivo local de respaldo.
// Las thumbnails apuntan a los frames reales en /assets/Videos/Frames.

export interface VideoWork {
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  video: string;
  youtubeUrl: string;
  duration: string; // metadata corta, ej. "02:26"
  tag: string; // label visual en la card, ej. "Recorrido Inmobiliario"
  role: string;
  software: string[];
  category: "inmobiliaria" | "social-media" | "edicion" | "otros";
  location?: string; // contexto real de la propiedad, ej. barrio/ciudad
  featured: boolean;
}

export const videos: VideoWork[] = [
  {
    title: "Aizpurua",
    slug: "recorrido-al-atardecer",
    description:
      "Recorrido inmobiliario editado al atardecer para publicación en redes sociales.",
    thumbnail: "/assets/Videos/Frames/Aizpurua.jpg",
    video: "/assets/Videos/Aizpurua.mp4",
    youtubeUrl: "https://www.youtube.com/watch?v=0_xlRwUmX-s",
    duration: "02:26",
    tag: "Producción completa",
    role: "Editor de video",
    software: ["Premiere Pro"],
    category: "inmobiliaria",
    featured: true,
  },
  {
    title: "Olazbal",
    slug: "villa-en-horas-azules",
    description:
      "Villa presentada en horas azules, editada con corrección de color y ritmo cinematográfico.",
    thumbnail: "/assets/Videos/Frames/Propiedad.jpg",
    video: "/assets/Videos/Propiedad.mp4",
    youtubeUrl: "https://www.youtube.com/watch?v=lvEfl8VTi8E&t=21s",
    duration: "03:29",
    tag: "Producción completa",
    role: "Editor de video",
    software: ["Premiere Pro"],
    category: "inmobiliaria",
    featured: true,
  },
  {
    title: "Alvarez Thomas",
    slug: "residencias-slate",
    description:
      "Video inmobiliario de residencias, con selección de tomas y montaje para redes.",
    thumbnail: "/assets/Videos/Frames/Alvarez-Thomas.jpg",
    video: "/assets/Videos/Alvarez-Thomas.mp4",
    youtubeUrl: "https://www.youtube.com/watch?v=dSdtwgsCW3I",
    duration: "02:29",
    tag: "Producción completa",
    role: "Editor de video",
    software: ["Premiere Pro"],
    category: "inmobiliaria",
    featured: true,
  },
];