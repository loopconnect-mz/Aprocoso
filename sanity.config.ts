import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/schemas';

export default defineConfig({
  name: 'default',
  title: 'APROCOSO Studio',

  projectId: 's7ek0e64',
  dataset: 'artigos',
  basePath: '/studio',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
