import type { APIRoute } from 'astro';

/*
  robots.txt generado en build (09-seo-accesibilidad-performance.md).
  Endpoint SSG: deriva la URL del sitemap del `site` de astro.config.mjs
  para no duplicar la URL en un archivo estático.
*/

const getRobotsTxt = (sitemapURL: URL) => `User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site);
  return new Response(getRobotsTxt(sitemapURL), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};