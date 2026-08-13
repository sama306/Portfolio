import { useMemo, useState } from 'react';
import type { Project } from '../data/projects';

interface Props {
  projects: Project[];
  initialCount?: number;
}

const CATEGORY_LABELS: Record<Project['category'], string> = {
  web: 'Web',
  desktop: 'Desktop',
  mobile: 'Mobile',
  backend: 'Backend',
  database: 'Bases de datos',
  other: 'Otros',
};

/*
  ProjectGrid — listado de /projects (ver 04-proyectos.md).
  Grid asimétrico tipo masonry (2 columnas en desktop, 1 en mobile) + filtros por categoría.
  `layout` controla el aspect de la imagen: wide = 16:9, tall = 3:4.
  Card distinta al ProjectCard del Home: sin badges de tech, sin botón, toda la card clickeable,
  ícono ↗ como afordancia. Borde outline-variant → tertiary en hover, sin sombras (02-diseño-visual.md).
  Isla React por client:load (00-overview.md — filtros = caso de uso de React).
*/

function ProjectGridCard({ project }: { project: Project }) {
  const href = `/projects/${project.slug}`;
  return (
    <a
      href={href}
      className="group mb-gutter flex break-inside-avoid flex-col overflow-hidden rounded-lg border border-outline-variant bg-surface-variant transition-colors duration-300 hover:border-tertiary"
    >
      <div
        className={
          project.layout === 'tall'
            ? 'relative w-full overflow-hidden bg-surface-container aspect-[3/4]'
            : 'relative w-full overflow-hidden bg-surface-container aspect-video'
        }
      >
        <img
          className="h-full w-full object-cover object-top filter grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
          src={project.image}
          alt={`Vista previa de ${project.title}`}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="flex flex-1 flex-col p-8">
        <div className="mb-4 flex items-start justify-between gap-4">
          <h2 className="font-headline-md text-headline-md text-on-surface transition-colors duration-300 group-hover:text-tertiary">
            {project.title}
          </h2>
          <span
            aria-hidden="true"
            className="material-symbols-outlined text-outline-variant transition-colors duration-300 group-hover:text-tertiary"
          >
            open_in_new
          </span>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">
          {project.description}
        </p>
      </div>
    </a>
  );
}

export default function ProjectGrid({ projects, initialCount = 6 }: Props) {
  const [active, setActive] = useState<'all' | Project['category']>('all');
  const [visible, setVisible] = useState(initialCount);

  const categories = useMemo(() => {
    const present = projects
      .map((project) => project.category)
      .filter((category, index, all) => all.indexOf(category) === index);
    return present.length > 0
      ? present
      : (Object.keys(CATEGORY_LABELS) as Project['category'][]);
  }, [projects]);

  const filtered = useMemo(
    () => (active === 'all' ? projects : projects.filter((project) => project.category === active)),
    [projects, active]
  );

  const shown = filtered.slice(0, visible);
  const hasMore = filtered.length > visible;

  const filterBtn = (isActive: boolean) =>
    `cursor-pointer rounded border px-4 py-2 min-h-11 font-label-caps text-label-caps transition-colors duration-300 ${
      isActive
        ? 'border-tertiary bg-tertiary/10 text-tertiary'
        : 'border-outline-variant text-on-surface-variant hover:border-tertiary hover:text-tertiary'
    }`;

  return (
    <section className="mx-auto w-full max-w-[1200px] px-gutter pt-section-gap">
      {/* Filtros */}
      <div className="flex flex-wrap gap-3" role="group" aria-label="Filtrar proyectos por categoría">
        {(['all', ...categories] as const).map((category) => {
          const isActive = active === category;
          const label = category === 'all' ? 'Todos' : CATEGORY_LABELS[category];
          return (
            <button
              key={category}
              type="button"
              aria-pressed={isActive}
              onClick={() => {
                setActive(category);
                setVisible(initialCount);
              }}
              className={filterBtn(isActive)}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Grid masonry */}
      <div className="mt-element-gap columns-1 gap-gutter md:columns-2">
        {shown.map((project) => (
          <ProjectGridCard key={project.slug} project={project} />
        ))}
      </div>

      {/* Ver más proyectos (solo si hay más de los que entran en la vista inicial) */}
      {hasMore && (
        <div className="mt-section-gap flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((count) => count + initialCount)}
            className="cursor-pointer rounded border border-outline-variant px-12 py-3 min-h-11 font-label-caps text-label-caps text-on-surface transition-colors duration-300 hover:border-tertiary hover:text-tertiary"
          >
            Ver más proyectos
          </button>
        </div>
      )}
    </section>
  );
}