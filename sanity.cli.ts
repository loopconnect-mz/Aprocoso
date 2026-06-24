import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 's7ek0e64',
    dataset: process.env.PUBLIC_SANITY_DATASET || 'artigos'
  }
});
