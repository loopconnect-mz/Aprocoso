import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://aprocoso.org',
  integrations: [
    tailwind(),
    sitemap(),
    react(),
    sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 's7ek0e64',
      dataset: process.env.PUBLIC_SANITY_DATASET || 'artigos',
      useCdn: false, // `false` garante que obtemos os dados mais recentes na build
      apiVersion: '2023-05-03',
      studioBasePath: '/studio',
    }),
  ],
});
