# Navegación

## Navbar (`Navbar.astro`)

**Cambio respecto a la v1: no hay link/página de "Experience".** Esa información ahora vive dentro de "Trayectoria" en el Home (ver `03-secciones-home.md`).

Estructura tomada del HTML de referencia:

```
DANTE            Sobre mí   Proyectos   Videos            [ Contactarme ]
```

(en el mockup: `CREATIVE.DEV   About  Experience  Projects  Videos   [Contact Me]` — se remueve "Experience" del set de links)

- Wordmark/logo a la izquierda, `display-lg` reducido, en `primary`/`on-surface`.
- Links centrados/a la derecha del logo, tipografía `label-caps` (uppercase, tracking amplio).
- Botón `Contactarme` a la derecha del todo, **estilo botón primario sólido cyan** (no es un link más de la nav, es un CTA visualmente distinto — así está en las 3 capturas).
- Estado activo: barra de 2px en `tertiary`, 4px debajo del texto del link activo (clase `.nav-link.active` del HTML de referencia — copiar ese comportamiento).
- **Glassmorphism:** navbar fijo (sticky/fixed), `backdrop-filter: blur(12px)` + fondo `surface-container` al 40% de opacidad, para que el contenido se vea pasar detrás con blur (ver `02-diseño-visual.md`).

### Sobre el link "Sobre mí" / "About"

Como el Home **es** la página que contiene Hero + Trayectoria + Skills + Featured Work + preview audiovisual + Contacto (ver `03-secciones-home.md`), el link "Sobre mí" del nav **no es una ruta separada** — apunta a `/` (o hace scroll al tope si ya se está en home). No crear una ruta `/about` redundante con `/`. Si en el futuro el usuario prefiere separar "Sobre mí" del resto del Home en su propia página, se evalúa en esa sesión — por ahora seguimos el principio original del proyecto de navegación vertical en una sola página para el contenido personal/CV.

> **Con View Transitions (Fase 5):** ya en home, el click a `/` es navegación same-page sin hash y el router no hace nada por defecto. `Navbar.astro` maneja ese caso con scroll suave al tope (auto bajo `prefers-reduced-motion`).

## Mobile: menú hamburguesa

Implementado en Fase 6. Decisiones tomadas:

- **Tipo de menú:** overlay **full-screen** debajo del header (`top-20` → `bottom`, la barra queda visible con el wordmark + toggle menu/close). Superficie opaca `primary-container` con `border-t outline-variant` — el glassmorphism queda reservado al navbar persistente (ver `02-diseño-visual.md`).
- **Breakpoint:** hamburguesa por debajo de `md` (768px), igual que el toggle de los mockups de referencia (`md:hidden`). La tablet (768–1024) conserva los links inline del header.
- **CTA "Contactarme":** dentro del drawer, como botón primario cyan full-width anclado al fondo (`mt-auto`). Es visible y destacado apenas se abre el menú. (El wordmark largo "Dante Valentin Samacoits" no deja espacio en 375px para CTA texto + hamburguesa en el header.)
- **Wordmark responsivo (resuelto al cerrar el checklist de `08-responsive-mobile.md`):** el nombre completo "Dante Valentin Samacoits" a 28px no entra en el navbar durante toda la tablet (768–~840px) con los links + CTA, y se truncaba con ellipsis en mobile. Se muestra la versión corta "Dante S." por debajo de `lg` (1024px) y el nombre completo en `lg+`. Un solo link con dos `<span>` (a11y), mantiene `truncate` como red de seguridad.
- **Links del navbar con hit-area ≥44px:** los links desktop y del drawer usan `pt-7 pb-1` (mantiene el gap de 4px del underline activo vía `.nav-link` y alcanza ~44px de altura táctil, verificada en 375/768/1024).
- **Cierre del menú:** al tocar un link (antes de navegar), al tocar fuera del drawer (cualquier click que no sea el toggle), o con la tecla `Esc`. Al cruzar a ≥768px también se cierra (`matchMedia`).
- **Teclado/atención (ver `09-seo-accesibilidad-performance.md`):**
  - `aria-expanded`/`aria-controls`/`aria-label` dinámico en el toggle; drawer con `role="dialog"` + `aria-modal`.
  - Al abrir, el foco va al primer link; `Tab`/`Shift+Tab` quedan atrapados en el drawer mientras esté abierto; al cerrar con `Esc` el foco vuelve al toggle.
  - `inert` aplicado al drawer cerrado (y a `main`/`footer` mientras está abierto) + `aria-hidden`. Foco visible global via `:focus-visible` outline en `tertiary`.
  - Scroll del fondo bloqueado mientras el drawer está abierto (`html[data-menu-open]`).
- **View Transitions:** la navbar es `transition:persist`, así que el drawer se cierra forzado en cada `astro:page-load` para no quedar abierto entre páginas.
- **Sin JS:** el drawer se muestra como nav estática apilada bajo el header en mobile (`<noscript>` + `position: static`), y el toggle se oculta. El estado CSS base (`visibility: hidden`) saca el drawer del orden de foco cuando JS activo aún no lo inertizó.

## Rutas del sitio

```
/                          → Home (Hero, Trayectoria, Skills, Featured Work, preview audiovisual, Contacto)
/projects                  → Listado completo de proyectos (grid asimétrico)
/projects/gurkcrm
/projects/forgestudio
/projects/book-bites
/projects/007-sama
/videos                    → Listado completo de trabajos audiovisuales (hero + Process/Toolkit + grid)
/videos/[slug]              → Página individual de cada video
```

Sin ruta `/about` ni `/experience` separadas.

## Transiciones entre páginas

Igual que v1: fade/slide entre página actual y detalle, usando Astro View Transitions como primera opción antes de armar algo custom (ver `07-animaciones.md`).

## Scroll progress bar

Igual que v1, más relevante en `/` (el más largo) y en `/projects`/`/videos` si el listado crece.
