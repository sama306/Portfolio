// Trabajos audiovisuales. Interface MÍNIMA para la preview "Cinematic Editing"
// del Home (03-secciones-home.md §5) — se extiende en Fase 4 con los campos
// completos de 05-audiovisual.md (description, video, role, software, category, location).
// `featured: true` = aparece en la preview del Home (3 cards chicas).
// Las `thumbnail` actuales son URLs remotas temporales (mockups de la referencia) —
// reemplazar por thumbnails reales cuando se provean.

export interface VideoWork {
  title: string;
  slug: string;
  thumbnail: string;
  duration: string; // metadata corta, ej. "02:14"
  tag: string; // tipo de trabajo, ej. "Color Grading & Edit"
  featured: boolean;
}

export const videos: VideoWork[] = [
  {
    title: "Aizpurua",
    slug: "recorrido-al-atardecer",
    thumbnail:
      "assets/Videos/Frames/Aizpurua.jpg",
    duration: "02:26",
    tag: "Producción completa",
    featured: true,
  },
  {
    title: "Villa en horas azules",
    slug: "villa-en-horas-azules",
    thumbnail:
      "assets/Videos/Frames/Propiedad.jpg",
    duration: "03:29",
    tag: "Producción completa",
    featured: true,
  },
  {
    title: "Alvarez Thomas",
    slug: "residencias-slate",
    thumbnail:
      "assets/Videos/Frames/Alvarez-Thomas.jpg",
    duration: "02:29",
    tag: "Producción completa",
    featured: true,
  },
];
