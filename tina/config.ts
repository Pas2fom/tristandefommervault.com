import { defineConfig } from 'tinacms';

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main';

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
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

      // {
      //   name: "homepage",
      //   label: "Homepage",
      //   path: "content",
      //   match: {
      //     include: '_index',
      //   },
      //   format: 'md',
      //   fields: [
      //     {
      //       type: 'string',
      //       name: 'title',
      //       label: 'Page Title',
      //     },
      //     {
      //       type: 'string',
      //       name: 'description',
      //       label: 'Page Description',
      //     },
      //     {
      //       type: 'image',
      //       name: 'image',
      //       label: 'Main Image',
      //     },
      //     {
      //       type: 'object',
      //       name: 'hero',
      //       label: 'Hero Section',
      //       fields: [
      //         { type: 'string', name: 'layout', label: 'Layout' },
      //         { type: 'image', name: 'image', label: 'Hero Image' },
      //         { type: 'string', name: 'heading', label: 'Heading', ui: {component: 'textarea'} },
      //         { type: 'string', name: 'subheading', label: 'Subheading', ui: {component: 'textarea'} },
      //       ],
      //     },
      //     {
      //       type: 'object',
      //       name: 'hero_links',
      //       label: 'Hero Links',
      //       list: true,
      //       fields: [
      //         { type: 'string', name: 'heading', label: 'Heading' },
      //         { type: 'string', name: 'icon', label: 'Icon' },
      //         { type: 'string', name: 'text', label: 'Text', ui: {component: 'textarea'} },
      //         { type: 'string', name: 'link', label: 'Link Text' },
      //         { type: 'string', name: 'link_url', label: 'Link URL' },
      //       ],
      //     },
      //     {
      //       type: 'object',
      //       name: 'partners',
      //       label: 'Partners Section',
      //       fields: [
      //         { type: 'string', name: 'heading', label: 'Heading' },
      //         { type: 'string', name: 'subheading', label: 'Subheading', ui: {component: 'textarea'} },
      //         {
      //           type: 'object',
      //           name: 'companies',
      //           label: 'Companies',
      //           list: true,
      //           fields: [
      //             { type: 'string', name: 'heading', label: 'Company Name' },
      //             { type: 'string', name: 'subheading', label: 'Description', ui: {component: 'textarea'} },
      //             { type: 'image', name: 'image', label: 'Image' },
      //             { type: 'string', name: 'link', label: 'Link URL' },
      //           ],
      //         },
      //       ],
      //     },
      //     {
      //       type: 'object',
      //       name: 'testimonials',
      //       label: 'Testimonials Section',
      //       fields: [
      //         { type: 'string', name: 'heading', label: 'Heading' },
      //         { type: 'string', name: 'subheading', label: 'Subheading', ui: {component: 'textarea'} },
      //         {
      //           type: 'object',
      //           name: 'testimonials',
      //           label: 'Testimonials',
      //           list: true,
      //           fields: [
      //             { type: 'string', name: 'name', label: 'Name' },
      //             { type: 'string', name: 'company', label: 'Company' },
      //             { type: 'string', name: 'position', label: 'Position' },
      //             { type: 'rich-text', name: 'quote', label: 'Quote' },
      //           ],
      //         },
      //       ],
      //     },
      //     {
      //       type: 'object',
      //       name: 'references',
      //       label: 'References Section',
      //       fields: [
      //         { type: 'string', name: 'heading', label: 'Heading' },
      //         {
      //           type: 'object',
      //           name: 'logos',
      //           label: 'Logos',
      //           list: true,
      //           fields: [
      //             { type: 'string', name: 'name', label: 'Name' },
      //             { type: 'image', name: 'logo', label: 'Logo' },
      //           ],
      //         },
      //       ],
      //     },
      //     {
      //       type: 'object',
      //       name: 'contact',
      //       label: 'Contact Section',
      //       fields: [
      //         { type: 'string', name: 'heading', label: 'Heading' },
      //         { type: 'string', name: 'phone', label: 'Phone Number' },
      //         { type: 'string', name: 'phone_link', label: 'Phone Link', description: 'Telephone link in the format tel:+123456789' },
      //         { type: 'string', name: 'email', label: 'Email Address' },
      //         { type: 'string', name: 'address', label: 'Physical Address', ui: { component: 'textarea' } },
      //         { type: 'string', name: 'address_link', label: 'Google Maps Link', description: 'Google Maps link to the address' },
      //       ],
      //     },
      //     {
      //       type: 'object',
      //       name: 'coach',
      //       label: 'Coach Section',
      //       fields: [
      //         { type: 'string', name: 'id', label: 'ID' },
      //         { type: 'string', name: 'heading', label: 'Heading' },
      //         { type: 'string', name: 'subheading', label: 'Subheading' },
      //         { type: 'image', name: 'image', label: 'Image' },
      //         { type: 'rich-text', name: 'copy', label: 'Description' },
      //       ],
      //     },
      //     {
      //       type: 'object',
      //       name: 'faq',
      //       label: 'FAQ Section',
      //       fields: [
      //         { type: 'string', name: 'heading', label: 'Heading' },
      //         {
      //           type: 'object',
      //           name: 'questions',
      //           label: 'Questions',
      //           list: true,
      //           fields: [
      //             { type: 'string', name: 'question', label: 'Question' },
      //             { type: 'rich-text', name: 'answer', label: 'Answer' },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      // },


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


      {
        name: 'formation',
        label: 'Formations',
        path: 'content/formations',
        fields: [
          {
            type: 'string',
            name: 'category',
            label: 'Category',
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
            type: 'string',
            name: 'theme',
            label: 'Theme',
          },
          {
            type: 'image',
            name: 'image',
            label: 'Image',
          },
          {
            type: 'object',
            name: 'infobox',
            label: 'Infobox',
            fields: [
              {
                type: 'string',
                name: 'superheading',
                label: 'Superheading',
              },
              {
                type: 'string',
                name: 'heading',
                label: 'Heading',
              },
              {
                type: 'string',
                name: 'duration',
                label: 'Duration',
              },
              {
                type: 'string',
                name: 'public',
                label: 'Public',
              },
              {
                type: 'string',
                name: 'prerequisites',
                label: 'Prerequisites',
              },
            ],
          },
          {
            type: 'rich-text',
            name: 'goals',
            label: 'Goals',
          },
          {
            type: 'object',
            name: 'strategies',
            label: 'Strategies',
            list: true,
            fields: [
              {
                type: 'string',
                name: 'strategy',
                label: 'Strategy',
              },
            ],
          },
        ],
      },
      
      
    ],
  },
});
