import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://libreelec.tv',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss({ tsconfigPaths: true })],
  },
});
