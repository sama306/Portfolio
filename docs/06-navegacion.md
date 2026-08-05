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

## Mobile: menú hamburguesa

Se mantiene igual que en la v1 (ver también `08-responsive-mobile.md`). El menú desplegado debe:
- Ocupar overlay completo o panel lateral (decidir en implementación).
- Cerrarse al tocar un link o al tocar fuera del menú.
- Ser navegable por teclado y con foco visible.
- El botón "Contactarme" se mantiene visible/destacado incluso colapsado el menú (puede quedar siempre visible en el header mobile, con el ícono de hamburguesa aparte).

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
