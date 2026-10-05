// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { fileURLToPath } from 'node:url';

// https://astro.build/config
export default defineConfig({
  site: 'https://kommotirio-avdira.gr',
  integrations: [react()],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        webp: { effort: 6 },
      },
    },
  },
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
});
