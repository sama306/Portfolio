# Diseño visual — Sistema "Obsidian Slate"

> **Este documento reemplaza cualquier decisión de paleta/tipografía anterior.** El sistema visual del portfolio quedó definido a partir de un mockup de referencia (`docs/reference/DESIGN.md` y `docs/reference/videos-page-reference.html`). Ante cualquier duda de un valor exacto (color, spacing, radius), **consultar esos dos archivos como fuente de verdad** en vez de reinventar el valor — `videos-page-reference.html` ya trae el `tailwind.config` completo, copiarlo literal como base de la config de Tailwind del proyecto.

## Concepto

Brand personality: preciso, autoritativo, sofisticado. Apunta a un público que valora profundidad técnica con restricción estética — el sitio tiene que sentirse como un portfolio físico premium: pesado, deliberado, "caro". Minimalismo estructural: nada de decoración innecesaria, la jerarquía se construye con espacio (oscuro) y contraste, no con adornos.

**No es un dark theme genérico de portfolio de dev.** Evitar el cliché de card con sombra + gradiente violeta + hover que "levanta". Este sistema es plano (flat), con profundidad tonal (capas de superficie cada vez más claras) y bordes que reaccionan al accent, no sombras.

## Colores

Fuente de verdad: bloque `colors` de `docs/reference/DESIGN.md` (formato Material Design tonal — surface/on-surface/tertiary/etc.) **y** el objeto `colors` del `tailwind.config` en `videos-page-reference.html`, que son la misma paleta expresada como tokens de Tailwind. Usar los nombres de Tailwind tal cual están en ese archivo (`bg-surface`, `text-on-surface`, `border-outline-variant`, `text-tertiary`, etc.) — no renombrarlos.

Resumen funcional (no memorizar los hex, usar el archivo de referencia):

| Rol | Token Tailwind | Uso |
|---|---|---|
| Fondo base | `surface` / `background` | Fondo general del sitio, casi negro con tinte azulado (`#051424`) |
| Fondo de cards/paneles | `surface-container`, `surface-container-low/high/highest` | Cards, bloques estructurales — capas tonales, no sombras |
| Texto principal | `on-surface` | Texto de alto contraste |
| Texto secundario | `on-surface-variant` | Descripciones, texto de apoyo |
| Bordes | `outline-variant` | Borde sutil default de cards, inputs, badges |
| Bordes en hover/focus | `tertiary` | Todo estado interactivo activo transiciona el borde a este color |
| **Acento (Electric Cyan)** | `tertiary` (`#00dce5` en el token; `#00F5FF` mencionado como "Electric Cyan" en el brand text — usar el token real `tertiary` del config, no el valor suelto del texto) | CTAs primarios, links activos, hover states, highlights críticos. **Uso exclusivo para elementos de alta prioridad** — no pintar todo de cyan. |
| Error | `error` / `error-container` | Validación de formularios únicamente |

> Nota: hay una pequeña inconsistencia entre el hex mencionado en el texto de marca de `DESIGN.md` (`#00F5FF`) y el token real `tertiary: #00dce5` de la config de Tailwind. **Usar el token de la config (`#00dce5`) como valor real implementado**, ya que es el que efectivamente se usa en el HTML de referencia.

Los fondos deben ser planos o con gradientes lineales muy sutiles (top-to-bottom, sugiriendo luz cayendo desde arriba) — nunca gradientes saturados ni radiales tipo "glow" grande.

## Tipografía

Tres familias, cada una con un rol fijo (no intercambiar):

- **Montserrat** — Headings/display. Peso 600–700, tracking negativo (`-0.01em` a `-0.02em`), line-height ajustado (1.1–1.3). Es el peso "impactante" del sitio.
- **Inter** — Body copy. Peso 400, line-height generoso (1.6) para que el texto no "halate" (glow) contra el fondo oscuro.
- **Geist** — Labels técnicos, metadata, tags, badges, bloques de código/proceso. Siempre en **uppercase** con tracking amplio (`0.1em`) cuando se usa como `label-caps`.

Escala tipográfica (tomar literal de `DESIGN.md` → bloque `typography`):

```
display-lg          64px / 700 / line-height 1.1 / tracking -0.02em   (Montserrat)
display-lg-mobile    40px / 700 / line-height 1.2 / tracking -0.01em   (Montserrat)
headline-md          32px / 600 / line-height 1.3                     (Montserrat)
body-lg               18px / 400 / line-height 1.6                    (Inter)
body-md                16px / 400 / line-height 1.6                    (Inter)
label-caps            12px / 600 / line-height 1 / tracking 0.1em      (Geist, uppercase)
mono-code            14px / 400 / line-height 1.5                     (Geist)
```

Fuentes vía Google Fonts (ver `<link>` de `videos-page-reference.html`): Montserrat (600, 700), Inter (400), Geist (400, 600). Íconos: **Material Symbols Outlined** (también Google Fonts), usados con `font-variation-settings: 'FILL' 1` cuando el ícono debe verse relleno (ej. el ícono de play sobre los videos).

## Layout y espaciado

Modelo **Fixed-Fluid Hybrid**: contenido dentro de un grid de max-width 1200px, pero columnas internas fluidas.

- **Desktop:** grid de 12 columnas, gutter 24px.
- **Mobile:** grid de 4 columnas, márgenes de 20px.
- **Unidad base:** 8px estricto para todo spacing.
- **Separación entre secciones:** 120px+ (`section-gap`). Es intencionalmente agresivo — cada sección debe sentirse como una sala de galería separada, forzando al visitante a enfocarse en una sola cosa a la vez. No comprimir esto para "que entre más arriba del fold".
- **element-gap:** 32px, para separación entre elementos dentro de una misma sección/grid.
- **Alineación:** mezclar hero centrado con contenido de cuerpo alineado a la izquierda — no todo centrado, no todo alineado a la izquierda. Genera interés visual.

## Elevación y profundidad

**Este sistema rechaza sombras pesadas.** Se usa **layering tonal** + **bordes de bajo contraste** en su lugar.

1. **Nivel 0 (base):** color `surface`.
2. **Nivel 1 (cards/secciones):** `surface-container` (o variantes `-low/-high/-highest` según cuánta jerarquía se necesite) con borde 1px sólido en `outline-variant`.
3. **Profundidad interactiva:** en hover, los elementos **no se "levantan" con sombra**. En cambio, el borde transiciona a `tertiary` (cyan) o el fondo aclara levemente un nivel tonal. Esto aplica a botones secundarios, cards, badges, inputs en focus.
4. **Glassmorphism:** reservado únicamente para el navbar persistente. `backdrop-filter: blur(12px)` con `surface-container` al 40% de opacidad, para mantener contexto del contenido scrolleando debajo.

Esta regla anula cualquier mención anterior de "sombra + elevación" en documentación previa — **no usar `box-shadow` para indicar hover en cards**, usar transición de borde.

## Formas (border-radius)

Lenguaje de forma: **arquitectónico y soft-grotesque**. Radios suaves (no 0px puro, no muy redondeado) para que se sienta ingenierizado, no "bubbly".

```
sm:      0.125rem
DEFAULT: 0.25rem   ← botones, inputs
md:      0.375rem
lg:      0.5rem    ← project/video cards (para enmarcar imágenes)
xl:      0.75rem
full:    9999px    ← elementos circulares (status dot, avatares)
```

> **Resuelto en Fase 1:** en `videos-page-reference.html` el `tailwind.config` real usado tiene radios distintos a los de `DESIGN.md` (`DEFAULT: 0.125rem`, `lg: 0.25rem`, `xl: 0.5rem`, `full: 0.75rem`). Se decidió usar **los valores de `videos-page-reference.html`** (los del HTML, no los de la tabla de arriba), ya implementados en `src/styles/global.css`. No volver a preguntarlo — si se necesita cambiar, es una decisión de diseño nueva a discutir con el usuario, no un default a resolver solo.

## Componentes

### Botones
- **Primario:** sólido en `tertiary` (cyan), texto oscuro/negro encima (`on-primary` o similar de alto contraste sobre cyan). Sin sombra.
- **Secundario:** ghost — borde 1px `outline-variant`, transiciona a `tertiary` en hover, sin relleno.
- **Terciario:** solo texto, con subrayado animado que se expande desde el centro en hover.

### Cards (proyectos/videos)
- Fondo: `surface-container` (o variante según contexto).
- Borde: 1px `outline-variant`, transiciona a `tertiary` en hover.
- Imagen: aspect ratio 16:9, **desaturada por default (`grayscale`)**, vuelve a color completo en hover — ver `07-animaciones.md` para el detalle de implementación. Esto reemplaza el efecto de "zoom + overlay" que estaba documentado antes; ahora es grayscale → color como efecto principal, y puede combinarse con un ícono de play centrado que aparece en hover (ver videos).

### Inputs y formularios
- Fondo: `surface` (efecto inset).
- Borde: 1px `outline-variant`.
- Focus: borde pasa a `tertiary` + glow sutil de 2px del mismo color alrededor.

### Navegación
- Barra flotante superior con efecto glass (blur + surface-container al 40%).
- Links con tipografía `label-caps` (uppercase, tracking amplio).
- Estado activo: barra horizontal de 2px en `tertiary`, posicionada 4px debajo del texto del link (no un fondo de pill ni bold, solo esa línea).

### Otros componentes
- **Code block / bloque de proceso:** fondo `surface-container`, borde izquierdo de 4px en `tertiary` (`code-block-border` en el HTML de referencia). Se usa tanto para bloques de código real como para listas tipo "> Paso 1 / > Paso 2" (ver sección de Proceso en `05-audiovisual.md`).
- **Status dot:** círculo pequeño en `tertiary`, con animación de pulso, usado junto a texto como "Disponible para nuevos proyectos" (ver `03-secciones-home.md`).
- **Badges/tags:** borde 1px `outline-variant`, tipografía `label-caps`, hover cambia borde a `tertiary`. Se usan para tecnologías, herramientas, y tags de categoría en cards de video (ej. "Cinematic Tour").

## Principio general

Si al implementar algo el resultado se ve "genérico" o parecido a una plantilla, comparar contra `videos-page-reference.html` — ese archivo es el estándar de calidad visual a igualar, no solo una guía de colores.
