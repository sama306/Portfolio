# Secciones del Home

> Cambio de estructura respecto a la v1 de esta documentación: el Home ya no es una sucesión larga de secciones desconectadas (Hero → Sobre mí → Experiencia → Educación → Skills → Proyectos → Audiovisual → Contacto). Ahora sigue el flujo del mockup de referencia (captura "About"), que es más compacto, tipo "galería": **Hero → Trayectoria → Skills → Featured Work → Cinematic Editing (preview audiovisual) → Contacto → Footer**. Separación entre secciones: 120px+ (`section-gap`, ver `02-diseño-visual.md`) — no comprimir.

**La sección/página de Experiencia como entidad separada queda eliminada.** Se fusiona con Educación dentro de "Trayectoria".

---

## 1. Hero (`Hero.astro`)

Estructura tomada de la captura de referencia (imagen "About"):

- Texto grande decorativo opcional detrás/arriba del headline (en el mockup aparece "Cinematic Editing" tenue como fondo tipográfico — es un detalle de textura, no contenido funcional; evaluar si suma o si conviene omitirlo para no confundir con la sección real de audiovisual).
- **Headline principal** en `display-lg` (Montserrat 700), dos líneas. En el mockup: *"Engineering Precision. Designing Impact."* — adaptar a Dante en español, ejemplo:

```
Precisión técnica.
Impacto real.
```
o
```
Construyo con lógica.
Diseño con intención.
```

(Terminar de definir el copy exacto con el usuario — el mockup usa dos líneas cortas y contundentes, mantener ese ritmo.)

- **Párrafo de presentación** en `body-lg`, 2-3 líneas, similar en función al "Sobre mí" que ya teníamos:

```
Soy estudiante de Tecnicatura en Programación
Informática y desarrollador enfocado en crear
soluciones digitales — combinando lógica de
software con producción audiovisual.
```

- **Status dot:** punto pulsante en `tertiary` + texto `label-caps`, ej:

```
● Disponible para nuevos proyectos
```

- **Imagen lateral (opcional):** el mockup usa una foto editorial en blanco y negro de la persona trabajando. Definir con el usuario si quiere usar una foto real (recomendado para el tono "premium" del sistema) o si se reemplaza por un elemento gráfico (ver opciones A/B/C que ya estaban documentadas para el Hero, adaptándolas a blanco y negro / desaturado para que combine con el resto del sitio). **No asumir una foto que no fue provista.**

- CTAs: mantener `[ Ver proyectos ]` y `[ Contactarme ]` (botón primario cyan + botón secundario ghost, ver `02-diseño-visual.md`).

---

## 2. Trayectoria (`Trajectory.astro`)

Reemplaza lo que antes eran las secciones separadas de Experiencia y Educación. Layout de **dos columnas** (según captura de referencia):

```
Trayectoria

┌─────────────────────────┐    ┌─────────────────────────┐
│ 2025 — Actualidad        │    │ [Año institución]        │
│ ● Desarrollo de          │    │ Tecnicatura en           │
│   proyectos personales   │    │ Programación Informática │
│   [descripción breve]    │    │ [Institución]             │
│                          │    │ [descripción breve]       │
│ 2025                     │    │                          │
│ ● Editor de Video         │    │                          │
│   Inmobiliaria            │    │                          │
│   [descripción breve +    │    │                          │
│    link a /videos]        │    │                          │
└─────────────────────────┘    └─────────────────────────┘
   ↑ EXPERIENCIA (dev + audiovisual)     ↑ EDUCACIÓN
```

Reglas:
- Columna izquierda: timeline de experiencia, orden cronológico descendente (más reciente arriba), con línea vertical conectando los puntos (bullet en `tertiary`).
- Columna derecha: educación. Con una sola entrada activa (Tecnicatura en curso) puede verse "corta" al lado de la columna de experiencia — está bien, no rellenar con contenido inventado. Si el usuario agrega más formación (cursos, certificaciones) en el futuro, esta columna crece.
- El item de "Editor de Video — Inmobiliaria" debe incluir el link `[ Ver trabajos audiovisuales → ]` que lleva a `/videos`, igual que en la v1 de este documento.
- En mobile, las dos columnas se apilan (Experiencia primero, Educación después) — ver `08-responsive-mobile.md`.
- Fuente de datos: `src/data/experience.ts` (ver `01-arquitectura-tecnica.md`), con un campo `type: "experiencia" | "educacion"` para separar en columnas sin duplicar arrays.

**Responsabilidades del trabajo en la inmobiliaria** (contenido a mostrar al expandir ese item, igual que en la v1):
```
• Edición de videos de propiedades.
• Preparación de contenido para redes sociales.
• Corrección y montaje de material.
• Selección de tomas.
• Incorporación de música y transiciones.
• Adaptación de videos a diferentes formatos.
```

---

## 3. Skills / Tecnologías (`Skills.astro`)

Se mantiene igual que en la v1 — categorizado, no una lista plana. Ubicación en el flujo: después de Trayectoria, antes de Featured Work (el mockup de referencia no muestra esta sección explícitamente, pero el usuario la pidió desde el inicio y sigue siendo relevante — se integra con la misma identidad visual: badges con borde `outline-variant` que pasan a `tertiary` en hover, igual que los badges de herramientas en "The Toolkit" de la página de Videos).

**Lenguajes:** Python, C, SQL, Assembly 8086, HTML, CSS, JavaScript
**Frameworks / Tecnologías:** Astro, React, .NET, Kivy
**Bases de datos:** PostgreSQL, SQL Server
**Herramientas:** Git, GitHub, Visual Studio, VS Code, SSMS
**Diseño / Multimedia:** Photoshop, Illustrator, Premiere Pro, Edición audiovisual

---

## 4. Featured Work (`FeaturedWork.astro`)

Preview de proyectos destacados dentro del Home (no es el listado completo, eso vive en `/projects` — ver `04-proyectos.md`).

Según la captura de referencia: 2 columnas, cada card con:
- Imagen (screenshot del proyecto en un mockup de escritorio/monitor, estilo fotográfico — no un screenshot plano pegado sin contexto).
- Título + año (badge `label-caps` en `tertiary`, ej. `2023`).
- Categoría corta (ej. "Enterprise Architecture").
- Descripción breve (2-3 líneas).
- Botón `[ View Details ]` → `[ Ver proyecto ]`, estilo ghost, ancho completo dentro de la card.

Mostrar los 2 proyectos con `featured: true` de `src/data/projects.ts` (ver `04-proyectos.md`). Debajo, no hace falta botón "Ver todos" en esta sección si el nav ya tiene el link a Proyectos — evaluar en implementación si conviene agregarlo para no depender solo del nav.

---

## 5. Cinematic Editing — preview audiovisual (`AudiovisualPreview.astro`)

Preview de la sección de Videos dentro del Home, mismo patrón que Featured Work pero para el lado audiovisual.

```
Cinematic Editing                         [ View More → ]
Producción audiovisual inmobiliaria.
```

Grid de 3 cards chicas (no las 2 grandes de Featured Work), cada una con:
- Thumbnail en escala de grises que vuelve a color en hover (ver `07-animaciones.md`).
- Título del trabajo.
- Metadata corta: duración + tipo (ej. `02:14 • Color Grading & Edit`).

`[ View More → ]` lleva a `/videos`.

---

## 6. Contacto (`Contact.astro`)

Se mantiene el contenido de la v1 — el mockup de referencia no incluye esta sección explícitamente en las capturas provistas, pero es un requisito funcional del sitio (no se elimina, a diferencia de Experiencia). Se adapta al sistema visual: inputs con fondo `surface` inset, borde `outline-variant`, focus a `tertiary` con glow (ver `02-diseño-visual.md`).

```
¿Tenés un proyecto en mente?
Hablemos.

Estoy abierto a nuevas oportunidades,
proyectos y colaboraciones.

Si querés trabajar conmigo,
no dudes en contactarme.
```

**Links directos:** Email, LinkedIn, GitHub (WhatsApp opcional, confirmar con el usuario).

**Formulario:** Nombre, Email, Asunto, Mensaje, `[ Enviar mensaje ]` (botón primario cyan). Con validaciones. Definir servicio de envío (Formspree/Resend/backend propio) en la sesión de implementación.

---

## 7. Footer (`Footer.astro`)

Estructura tomada literal del HTML de referencia (adaptar wordmark y links):

```
DANTE                    LinkedIn  GitHub  Twitter  Email     © 2026 Dante Samacoits. Construido con precisión.
```

- Wordmark a la izquierda en `display-lg` reducido (24-32px), no el tamaño completo del hero.
- Links horizontales al centro/derecha en `body-md`, hover a `tertiary`.
- Fondo `surface`, borde superior `outline-variant`, sin sombra. En el HTML de referencia el footer tiene `opacity-80` con `hover:opacity-100` — evaluar si se replica ese detalle o si conviene footer siempre a opacidad completa por legibilidad; no es crítico, decidir en implementación.
- En mobile: todo se apila centrado (wordmark → links → copyright).
