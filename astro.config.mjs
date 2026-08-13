// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  /*
    Site: URL de producción (requerida por sitemap, canonicals y URLs absolutas
    de Open Graph). Placeholder de Vercel — TODO: reemplazar por el dominio real
    cuando esté definido (09-seo-accesibilidad-performance.md).
  */
  site: 'https://dante-samacoits.vercel.app',
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
