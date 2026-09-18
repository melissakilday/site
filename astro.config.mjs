// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://hairbymelissa.co.nz',
  integrations: [
    tailwind(),
    sitemap({
      // The 404 page must never be listed in the sitemap.
      filter: (page) => !/\/404\/?$/.test(page),
      changefreq: 'weekly',
      lastmod: new Date(),
    }),
  ],
  image: {
    domains: ['storage.googleapis.com'],
    remotePatterns: [{ protocol: 'https' }]
  },
  build: {
    inlineStylesheets: 'always'
  },
  // Disable client-side routing
  output: 'static'
});
