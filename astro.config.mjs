// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  image: {
    domains: ['storage.googleapis.com'],
    remotePatterns: [{ protocol: 'https' }]
  },
  vite: {
    build: {
      // Force all CSS to be inlined to eliminate network requests
      assetsInlineLimit: 0, // Inline everything
      cssCodeSplit: false // Single CSS bundle
    }
  },
  build: {
    // Force inline ALL stylesheets to eliminate critical path
    inlineStylesheets: 'always'
  }
});