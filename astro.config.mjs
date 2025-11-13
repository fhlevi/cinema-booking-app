// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  compressHTML: true,
  server: {
    port: 3125,
  },
  vite: {
    plugins: [tailwindcss()],
  }
});