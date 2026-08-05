# Responsive Design y checklist mobile

La web se diseña principalmente para **Desktop, Tablet y Mobile**, en ese orden de prioridad de diseño inicial, pero **cada sesión de trabajo debe terminar revisando la versión mobile antes de darse por cerrada** — no dejarlo como una fase separada al final del proyecto.

## Breakpoints sugeridos

Definir valores exactos en la sesión de implementación de estilos, pero como referencia de trabajo (alineado con el grid definido en `02-diseño-visual.md`):

```
mobile:   < 640px    (grid de 4 columnas, márgenes 20px)
tablet:   640px – 1024px
desktop:  > 1024px   (grid de 12 columnas, gutter 24px, contenido máx. 1200px)
```

El `display-lg` (64px) del Hero y headers de página se reduce a `display-lg-mobile` (40px) por debajo del breakpoint mobile — no achicar el mismo tamaño con `clamp()` genérico, usar el token específico ya definido en el sistema de tipografía.

## Desktop

Aprovechar el espacio horizontal, ej. grids de 2 columnas para proyectos/videos:

```
┌────────────┬────────────┐
│ Proyecto 1 │ Proyecto 2 │
└────────────┴────────────┘
┌────────────┬────────────┐
│ Proyecto 3 │ Proyecto 4 │
└────────────┴────────────┘
```

## Mobile

Cards en columna única, apiladas verticalmente:

```
┌───────────────┐
│   Proyecto    │
│               │
│   Ver más →   │
└───────────────┘
```

Navbar se transforma en menú hamburguesa (ver `06-navegacion.md`).

## Checklist de revisión mobile (usar al cerrar CUALQUIER sesión que toque UI)

- [ ] ¿El texto es legible sin hacer zoom? (tamaño mínimo de fuente adecuado, no heredado sin ajustar de desktop)
- [ ] ¿Los botones/links tienen un área táctil suficiente (mínimo ~44x44px)?
- [ ] ¿El navbar colapsa correctamente en hamburguesa y el menú es usable con el dedo?
- [ ] ¿Las cards de proyectos/videos se ven bien en una columna, sin overflow horizontal?
- [ ] ¿Las imágenes/videos se adaptan al ancho de pantalla sin desbordar ni recortarse mal?
- [ ] ¿El formulario de contacto es cómodo de completar en mobile (inputs con tamaño adecuado, teclado correcto por tipo de campo)?
- [ ] ¿Las animaciones de scroll no se sienten pesadas o generan jank en un dispositivo de gama media?
- [ ] ¿El cursor personalizado (si existe) está desactivado en touch?
- [ ] ¿Se probó con las devtools en al menos 2 anchos distintos (ej. 375px y 414px) además de un tablet (768px)?
- [ ] ¿La página de detalle de proyecto/video se lee bien en mobile (no hay tablas o layouts de 2 columnas que rompan)?
- [ ] ¿La sección "Trayectoria" apila correctamente las 2 columnas (Experiencia y Educación) en vez de comprimirlas lado a lado?
- [ ] ¿El grid asimétrico de `/projects` (cards altas/anchas) se vuelve una columna simple y prolija en mobile, sin que las cards "altas" queden con espacio muerto raro?

Si alguna sesión de opencode toca layout, estilos o una sección nueva, este checklist se revisa **antes de considerar la tarea terminada**, no como paso opcional.
