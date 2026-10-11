import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  compressHTML: true,
  vite: { plugins: [tailwindcss()] },
  site: 'https://FabianHerreraC.github.io',
  base: '/cognicion-aumentada',
});
