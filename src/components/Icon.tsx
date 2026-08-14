import type { SVGProps } from 'react';
import { ICONS, type IconName } from './icons';

/*
  Icon (React) — para usar DENTRO de islas de React. En templates .astro usar
  Icon.astro (el renderer de @astrojs/react elimina el prop `class` en server
  render, así que allá el class se maneja con el componente Astro nativo).
*/

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}

export default function Icon({ name, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {ICONS[name].map((part, i) =>
        part.type === 'circle' ? (
          <circle key={i} {...part.attrs} />
        ) : (
          <path key={i} {...part.attrs} />
        )
      )}
    </svg>
  );
}