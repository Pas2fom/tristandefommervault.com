import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main';

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: 'admin',
    publicFolder: 'static',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'static',
    },
  },
  schema: {
    collections: [
      {
        name: 'article',
        label: 'Articles',
        path: 'content/articles',
        fields: [
          {
            type: 'datetime',
            name: 'date',
            label: 'Date',
            required: true,
          },
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string', 
            name: 'description',
            label: 'Description',
            ui: {
              component: 'textarea', 
            },
          },
          {
            type: 'image',
            name: 'images',
            label: 'Images',
            list: true, 
          },
          {
            type: 'string',
            name: 'categories',
            label: 'Categories',
          },
          {
            type: 'string',
            name: '_template',
            label: 'Template',
          },
          {
            type: 'string', 
            name: 'tags',
            label: 'Tags',
            list: true, 
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },
    ],
  },
});
