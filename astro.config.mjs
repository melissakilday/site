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
      // Eliminate ALL separate asset files
      assetsInlineLimit: 0, // Inline everything 
      cssCodeSplit: false, // No CSS splitting
      rollupOptions: {
        external: [], // No external dependencies
        output: {
          // Minimize separate chunks
          manualChunks: undefined,
          inlineDynamicImports: true
        }
      }
    }
  },
  build: {
    // Force inline everything to eliminate critical path
    inlineStylesheets: 'always'
  }
});