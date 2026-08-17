import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://peterrk.github.io',
  output: 'static',
  build: {
    format: 'file',
  },
});
