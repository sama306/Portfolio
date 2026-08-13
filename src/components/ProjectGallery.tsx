import { useCallback, useEffect, useRef, useState } from 'react';

interface Props {
  images: string[];
  alt: string;
}

/*
  ProjectGallery — galería de imágenes de la página de proyecto con lightbox.
  Cada screenshot es clicable y abre un modal en pantalla completa con la imagen
  en grande, navegación ←/→ entre vistas y cierre por × / Escape / click en el fondo.
  Accesible: role="dialog", aria-modal, foco al abrir y retorno al cerrar,
  respeta prefers-reduced-motion.
  Isla React por client:load — interactividad real = caso de uso de React (00-overview.md).
*/

export default function ProjectGallery({ images, alt }: Props) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLElement | null>(null);

  const openAt = useCallback(
    (i: number) => {
      lastTriggerRef.current = document.activeElement as HTMLElement;
      setIndex(i);
      setOpen(true);
    },
    []
  );

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i + dir + images.length) % images.length),
    [images.length]
  );

  useEffect(() => {
    if (!open) {
      lastTriggerRef.current?.focus();
      return;
    }
    closeButtonRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, close, go]);

  return (
    <>
      <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => openAt(i)}
            aria-label="Ampliar imagen"
            className="group aspect-video cursor-zoom-in overflow-hidden rounded-lg border border-outline-variant bg-surface-container text-left transition-colors duration-300 hover:border-tertiary"
          >
            <img
              className="h-full w-full object-cover object-top filter grayscale transition-all duration-700 group-hover:grayscale-0"
              src={src}
              alt={`${alt} — vista ${i + 1}`}
              loading="lazy"
              decoding="async"
            />
          </button>
        ))}
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Imagen ampliada"
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-surface/95 p-4 backdrop-blur-md md:p-10"
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={close}
            aria-label="Cerrar"
            className="absolute right-4 top-4 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-outline-variant bg-surface-container text-on-surface transition-colors duration-300 hover:border-tertiary hover:text-tertiary"
          >
            <span className="material-symbols-outlined text-[24px]" aria-hidden="true">
              close
            </span>
          </button>

          {/* Prev */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            aria-label="Vista anterior"
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-outline-variant bg-surface-container text-on-surface transition-colors duration-300 hover:border-tertiary hover:text-tertiary md:left-6"
          >
            <span className="material-symbols-outlined text-[24px]" aria-hidden="true">
              arrow_back
            </span>
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            aria-label="Vista siguiente"
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-outline-variant bg-surface-container text-on-surface transition-colors duration-300 hover:border-tertiary hover:text-tertiary md:right-6"
          >
            <span className="material-symbols-outlined text-[24px]" aria-hidden="true">
              arrow_forward
            </span>
          </button>

          <img
            src={images[index]}
            alt={`${alt} — vista ${index + 1} ampliada`}
            className="max-h-full max-w-full border border-outline-variant object-contain shadow-2xl"
          />

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-label-caps text-label-caps text-on-surface-variant">
            {index + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}