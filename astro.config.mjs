import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://77652189.github.io',
  integrations: [
    tailwind(),
    sitemap(),
  ],
});
