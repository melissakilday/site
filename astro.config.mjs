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
      // EXTREME: Prevent ANY separate files
      assetsInlineLimit: 0,
      cssCodeSplit: false,
      rollupOptions: {
        external: [],
        output: {
          manualChunks: () => 'everything',
          inlineDynamicImports: true,
          entryFileNames: 'entry.js',
          chunkFileNames: 'chunk.js',
          assetFileNames: 'asset.[ext]'
        }
      }
    }
  },
  build: {
    // Force inline everything
    inlineStylesheets: 'always'
  },
  // Disable client-side routing
  output: 'static'
});