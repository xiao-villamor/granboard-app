import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  prefetch: {
    defaultStrategy: 'viewport',
  },
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'font-awesome': ['@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons'],
          },
        },
      },
    },
    esbuild: {
      drop: process.env.NODE_ENV === 'production' ? ['console'] : [],
    },
  },
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
});
