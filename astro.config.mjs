import { defineConfig } from 'astro/config';

const onVercel = Boolean(process.env.VERCEL);

export default defineConfig({
  // GitHub Pages project site keeps /jesus-daily-blog/; Vercel serves from domain root.
  site: onVercel
    ? process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'https://walking-with-jesus.vercel.app'
    : 'https://lennoxx2703-collab.github.io',
  base: onVercel ? '/' : '/jesus-daily-blog/',
  output: 'static',
});
