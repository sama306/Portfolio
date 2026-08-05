// Redes sociales / canales de contacto.
// Renderizado por src/components/Contacto.astro — agregar una red nueva
// = agregar un objeto acá (y su logo SVG en el componente), sin tocar el layout.

export interface Social {
  name: "LinkedIn" | "Instagram" | "GitHub";
  url: string;
}

export const socials: Social[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/dante-valentin-samacoits",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/valen_sama1/",
  },
  {
    name: "GitHub",
    url: "https://github.com/sama306",
  },
];