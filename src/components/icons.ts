/*
  Iconos del sitio (Fase 7, performance). Fuente de verdad de los 8 glyphs que
  usa el sitio (reemplazan la font Material Symbols). Los paths se comparten
  entre Icon.astro (uso en templates Astro, donde `class` es nativo) e Icon.tsx
  (uso dentro de las islas de React, donde se usa `className`). El renderer de
  @astrojs/react elimina el prop `class` en server render, por eso no se puede
  usar un solo componente React para ambos casos.
*/

export type IconName =
  | 'play_circle'
  | 'open_in_new'
  | 'close'
  | 'menu'
  | 'arrow_back'
  | 'arrow_forward'
  | 'info'
  | 'terminal';

export interface SvgPart {
  type: 'path' | 'circle';
  attrs: Record<string, string | number>;
}

export const ICONS: Record<IconName, SvgPart[]> = {
  play_circle: [
    {
      type: 'circle',
      attrs: { cx: 12, cy: 12, r: 8.5, fill: 'none', stroke: 'currentColor', 'stroke-width': 1.7 },
    },
    { type: 'path', attrs: { d: 'M10 8.8l6 3.2-6 3.2z', fill: 'currentColor', stroke: 'none' } },
  ],
  open_in_new: [
    {
      type: 'path',
      attrs: {
        d: 'M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z',
        fill: 'currentColor',
        stroke: 'none',
      },
    },
  ],
  close: [{ type: 'path', attrs: { d: 'M6 6l12 12M18 6L6 18' } }],
  menu: [{ type: 'path', attrs: { d: 'M4 6.5h16M4 12h16M4 17.5h16' } }],
  arrow_back: [{ type: 'path', attrs: { d: 'M19 12H5m6-6l-6 6 6 6' } }],
  arrow_forward: [{ type: 'path', attrs: { d: 'M5 12h14m-6-6l6 6-6 6' } }],
  info: [
    { type: 'circle', attrs: { cx: 12, cy: 12, r: 8.5 } },
    { type: 'path', attrs: { d: 'M12 11.2v4.6M12 8.1v.05' } },
  ],
  terminal: [{ type: 'path', attrs: { d: 'M4 17.5l6-5.5-6-5.5M12 19h8' } }],
};
