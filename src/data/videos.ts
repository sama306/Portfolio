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
    title: "Recorrido al atardecer",
    slug: "recorrido-al-atardecer",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAa-74ajj3mDu3IeJnBye5SW1Ke_rIv32zNEV_L41X_7pd0gu-R6Lyea9H-BR_Bn-zrKUc-5MyZ0MrOz9KlfjA37iyWT6clwkipjZN-3Xr77i4tlXkFD0l-kIMK1ORtSo9I7jys1Y-jjaLsBQtCVv3krd_-tpBLYrR4euk4lmFFQWvmhRVTwVV8i45dkgaFGTBgBdS3hrEdk12-0sjUU6IpLRQw1Q3GDl0_WJLu4bByhR5W88BmMUmB",
    duration: "02:14",
    tag: "Edición y color",
    featured: true,
  },
  {
    title: "Villa en horas azules",
    slug: "villa-en-horas-azules",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDCVL6mHhHFkgESm4Lnr95b9nlwemqtCca0En6kb811cXGp3SvpB_9pie4n_Z0rfNYvdadJzgiNXcmJ4t2lCZAcZXEnntaIK33YDrEVI_H2c1eFsjvsWebcpXS-6lv60tBBnxziJ3BR4xw5QSi1G4vcEjNbaEbcr7ElfD9cg-5cgn2RqRNnQ6lb4e4XO0Gjg_I6XdYWILK2k3h2_svVg_qTIQWJOjtIOjsrd6ZT_5QK0DytxjyEleLB",
    duration: "01:45",
    tag: "Postproducción",
    featured: true,
  },
  {
    title: "Residencias Slate",
    slug: "residencias-slate",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDacGRQ6tP2UX5-dbZED-jAcqd7CbVqOor_s4eBgkdnpSyo6UAcXKphm4NitD7hS9tgo1JRGi6RHFlZtGCNIWd_dxotPRcn9BhUarvmZbXq7dbueDtQKrYUWU7K3NFkOV5qPyPetjSAzFv_y3Up5j3ngSFa3V41bG83axrG2sOPZhi9Pj_z-oJHEtfuhATvIA_d67v-w0cToPoHytwtfPRjfE8mYjg9_Jm-RWn0DzspR51CSl6x3yZB",
    duration: "03:10",
    tag: "Producción completa",
    featured: true,
  },
];
