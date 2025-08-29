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
      // Inline small CSS files to reduce render blocking
      assetsInlineLimit: 8192, // 8KB threshold
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          // Bundle CSS efficiently
          assetFileNames: (assetInfo) => {
            if (assetInfo.name?.endsWith('.css')) {
              return 'assets/[name]-[hash][extname]';
            }
            return 'assets/[name]-[hash][extname]';
          }
        }
      }
    }
  },
  build: {
    // Inline critical CSS
    inlineStylesheets: 'auto'
  }
});