import { useMemo, useState } from 'react';
import type { VideoWork } from '../data/videos';

interface Props {
  videos: VideoWork[];
  initialCount?: number;
}

const CATEGORY_LABELS: Record<VideoWork['category'], string> = {
  inmobiliaria: 'Inmobiliaria',
  'social-media': 'Social Media',
  edicion: 'Edición',
  otros: 'Otros',
};

/*
  VideoGrid — listado de /videos (ver 05-audiovisual.md).
  Grid de 2 columnas (1 en mobile) + filtros por categoría.
  Card según videos-page-reference.html: imagen aspect-video grayscale(80%) → color
  + scale(1.02) en hover, overlay de play (FILL cyan), título + ubicación (mono-code)
  a la izquierda, badge de tag (borde tertiary) a la derecha.
  Toda la card es clickeable → /videos/[slug] (página individual, fase posterior del roadmap).
  Borde outline-variant → tertiary en hover, sin sombras (02-diseño-visual.md).
  Isla React por client:load (00-overview.md — filtros = caso de uso de React).
*/

function VideoGridCard({ video }: { video: VideoWork }) {
  const href = `/videos/${video.slug}`;
  return (
    <a
      href={href}
      className="group mb-gutter flex break-inside-avoid flex-col rounded-lg border border-outline-variant bg-surface-variant p-5 transition-colors duration-300 hover:border-tertiary"
    >
      <div className="relative mb-5 aspect-video overflow-hidden rounded-lg border border-outline-variant bg-surface-container">
        <img
          className="h-full w-full object-cover grayscale-[80%] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.02]"
          src={video.thumbnail}
          alt={`Vista previa de ${video.title}`}
          loading="lazy"
          decoding="async"
        />
        <div
          className="absolute inset-0 flex items-center justify-center bg-primary-container/30 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden="true"
        >
          <span
            className="material-symbols-outlined text-5xl text-tertiary"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            play_circle
          </span>
        </div>
      </div>

      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-body-lg text-body-lg font-semibold text-on-surface transition-colors duration-300 group-hover:text-tertiary">
            {video.title}
          </h2>
          {video.location && (
            <p className="mt-1 font-mono-code text-mono-code text-on-surface-variant">
              {video.location}
            </p>
          )}
        </div>
        <span className="shrink-0 rounded border border-tertiary px-2 py-1 font-label-caps text-label-caps text-tertiary">
          {video.tag}
        </span>
      </div>
    </a>
  );
}

export default function VideoGrid({ videos, initialCount = 6 }: Props) {
  const [active, setActive] = useState<'all' | VideoWork['category']>('all');
  const [visible, setVisible] = useState(initialCount);

  const categories = useMemo(() => {
    const present = videos
      .map((video) => video.category)
      .filter((category, index, all) => all.indexOf(category) === index);
    return present.length > 0
      ? present
      : (Object.keys(CATEGORY_LABELS) as VideoWork['category'][]);
  }, [videos]);

  const filtered = useMemo(
    () => (active === 'all' ? videos : videos.filter((video) => video.category === active)),
    [videos, active]
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
      <div className="flex flex-wrap gap-3" role="group" aria-label="Filtrar videos por categoría">
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

      {/* Grid */}
      <div className="mt-element-gap grid grid-cols-1 gap-element-gap md:grid-cols-2">
        {shown.map((video) => (
          <VideoGridCard key={video.slug} video={video} />
        ))}
      </div>

      {/* Ver más trabajos (solo si hay más de los que entran en la vista inicial) */}
      {hasMore && (
        <div className="mt-section-gap flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((count) => count + initialCount)}
            className="cursor-pointer rounded border border-outline-variant px-12 py-3 min-h-11 font-label-caps text-label-caps text-on-surface transition-colors duration-300 hover:border-tertiary hover:text-tertiary"
          >
            Ver más trabajos
          </button>
        </div>
      )}
    </section>
  );
}