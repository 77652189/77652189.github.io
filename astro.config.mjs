import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://77652189.github.io',
  integrations: [tailwind()],
});
