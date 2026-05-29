import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// If deploying to https://77652189.github.io (repo named 77652189.github.io), keep base as '/'.
// If deploying to https://77652189.github.io/portfolio (repo named portfolio), set base: '/portfolio'.
export default defineConfig({
  site: 'https://77652189.github.io',
  integrations: [tailwind()],
});
