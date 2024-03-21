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

      {
        name: "homepage",
        label: "Accueil",
        path: "content",
        ui: {
          // Don't allow editors to create new navigation items
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: '_index',
        },
        format: 'md',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Page Title',
          },
          {
            type: 'string',
            name: 'description',
            label: 'Page Description',
          },
          // {
          //   type: 'image',
          //   name: 'image',
          //   label: 'Main Image',
          // },
          {
            type: 'object',
            name: 'hero',
            label: 'Hero Section',
            fields: [
              { type: 'image', name: 'image', label: 'Hero Image' },
              { type: 'string', name: 'heading', label: 'Heading', ui: {component: 'textarea'} },
              { type: 'string', name: 'subheading', label: 'Subheading', ui: {component: 'textarea'} },
            ],
          },


          {
            type: 'object',
            name: 'hero_links',
            label: 'Hero Links',
            fields: [
              {
                type: 'object',
                label: 'Links',
                name: 'links',
                list: true, 
                ui: {
                  itemProps: (item) => {
                    return { label: item?.heading };
                  },
                },
                fields: [
                  {
                    type: 'string',
                    label: 'Heading',
                    name: 'heading',
                  },
                  {
                    type: 'string',
                    label: 'Icon',
                    name: 'icon',
                  },
                  {
                    type: 'string',
                    label: 'Text',
                    name: 'text',
                    ui: {
                      component: 'textarea', 
                    },
                  },
                  {
                    type: 'string',
                    label: 'Link Text',
                    name: 'link',
                  },
                  {
                    type: 'string',
                    label: 'Link URL',
                    name: 'link_url',
                  },
                ],
              },
            ],
          },



          {
            type: 'object',
            name: 'partners',
            label: 'Partners Section',
            fields: [
              { type: 'string', name: 'heading', label: 'Heading' },
              { type: 'string', name: 'subheading', label: 'Subheading', ui: {component: 'textarea'} },
              {
                type: 'object',
                name: 'companies',
                label: 'Companies',
                list: true, 
                ui: {
                  itemProps: (item) => {
                    return { label: item?.heading };
                  },
                },
                fields: [
                  { type: 'string', name: 'heading', label: 'Company Name' },
                  { type: 'string', name: 'subheading', label: 'Description', ui: {component: 'textarea'} },
                  { type: 'image', name: 'image', label: 'Image' },
                  { type: 'string', name: 'link', label: 'Link URL' },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'testimonials',
            label: 'Testimonials Section',
            fields: [
              { type: 'string', name: 'heading', label: 'Heading' },
              { type: 'string', name: 'subheading', label: 'Subheading', ui: {component: 'textarea'} },
              {
                type: 'object',
                name: 'testimonials',
                label: 'Testimonials',
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.name };
                  },
                },
                fields: [
                  { type: 'string', name: 'name', label: 'Name' },
                  { type: 'string', name: 'company', label: 'Company' },
                  { type: 'string', name: 'position', label: 'Position' },
                  { type: 'rich-text', name: 'quote', label: 'Quote' },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'references',
            label: 'References Section',
            fields: [
              { type: 'string', name: 'heading', label: 'Heading' },
              {
                type: 'object',
                name: 'logos',
                label: 'Logos',
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.name };
                  },
                },
                fields: [
                  { type: 'string', name: 'name', label: 'Name' },
                  { type: 'image', name: 'logo', label: 'Logo' },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'contact',
            label: 'Contact Section',
            fields: [
              { type: 'string', name: 'heading', label: 'Heading' },
              { type: 'string', name: 'phone', label: 'Phone Number' },
              { type: 'string', name: 'phone_link', label: 'Phone Link', description: 'Telephone link in the format tel:+123456789' },
              { type: 'string', name: 'email', label: 'Email Address' },
              { type: 'string', name: 'address', label: 'Physical Address', ui: { component: 'textarea' } },
              { type: 'string', name: 'address_link', label: 'Google Maps Link', description: 'Google Maps link to the address' },
            ],
          },
          {
            type: 'object',
            name: 'coach',
            label: 'Coach Section',
            fields: [
              { type: 'string', name: 'id', label: 'ID' },
              { type: 'string', name: 'heading', label: 'Heading' },
              { type: 'string', name: 'subheading', label: 'Subheading' },
              { type: 'image', name: 'image', label: 'Image' },
              { type: 'rich-text', name: 'copy', label: 'Description' },
            ],
          },
          {
            type: 'object',
            name: 'faq',
            label: 'FAQ Section',
            fields: [
              { type: 'string', name: 'heading', label: 'Heading' },
              {
                type: 'object',
                name: 'questions',
                label: 'Questions',
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.question };
                  },
                },
                fields: [
                  { type: 'string', name: 'question', label: 'Question' },
                  { type: 'rich-text', name: 'answer', label: 'Answer' },
                ],
              },
            ],
          },
        ],
      },

      {
        label: 'Coaching',
        name: 'coaching',
        path: "content",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: 'coaching',
        },
        format: 'md',
        fields: [
          {
            type: 'string',
            label: 'Layout',
            name: 'layout',
          },
          {
            type: 'string',
            label: 'Title',
            name: 'title',
          },
          {
            type: 'string',
            label: 'Description',
            name: 'description',
          },
          {
            type: 'string', 
            name: 'tags',
            label: 'Tags',
            list: true, 
          },
          {
            type: 'object',
            label: 'Coaching',
            name: 'coaching',
            fields: [
              {
                type: 'object',
                label: 'Tabs',
                name: 'tabs',
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.heading };
                  },
                },
                fields: [
                  {
                    type: 'string',
                    label: 'Heading',
                    name: 'heading',
                  },
                  {
                    type: 'rich-text',
                    label: 'Text',
                    name: 'text',
                  },
                ],
              },
            ],
          },
          {
            type: 'object',
            label: 'FAQ',
            name: 'faq',
            fields: [
              {
                type: 'string',
                label: 'Heading',
                name: 'heading',
              },
              {
                type: 'object',
                label: 'Questions',
                name: 'questions',
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.question };
                  },
                },
                fields: [
                  {
                    type: 'string',
                    label: 'Question',
                    name: 'question',
                  },
                  {
                    type: 'rich-text',
                    label: 'Answer',
                    name: 'answer',
                  },
                ],
              },
            ],
          },
          {
            type: 'object',
            label: 'Coach',
            name: 'coach',
            fields: [
              {
                type: 'string',
                label: 'Heading',
                name: 'heading',
              },
              {
                type: 'string',
                label: 'Subheading',
                name: 'subheading',
              },
              {
                type: 'image',
                label: 'Image',
                name: 'image',
              },
              {
                type: 'rich-text',
                label: 'Copy',
                name: 'copy',
              },
            ],
          },
        ],
      },




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
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },

      {
        label: 'Tarifs',
        name: 'tarifs',
        path: 'content',
        ui: {
          // Don't allow editors to create new navigation items
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: 'tarifs',
        },
        format: 'md', 
        fields: [
          {
            type: 'string',
            label: 'Title',
            name: 'title',
          },
          {
            type: 'string', 
            label: 'Description',
            name: 'description',
            ui: {
              component: "textarea"
            }
          },
          {
            type: 'string',
            label: 'Heading',
            name: 'heading',
          },
          {
            type: 'string', 
            label: 'Subheading',
            name: 'subheading',
            ui: {
              component: "textarea"
            }
          },
          {
            type: 'object',
            label: 'Tarifs Details',
            name: 'tarifs',
            list: true, 
            ui: {
              itemProps: (item) => {
                return { label: item?.heading };
              },
            },
            fields: [
              {
                type: 'string',
                label: 'Heading',
                name: 'heading',
              },
              {
                type: 'rich-text', 
                label: 'Items',
                name: 'items',
              },
              {
                type: 'string',
                label: 'Link Text',
                name: 'link',
              },
              {
                type: 'string',
                label: 'URL',
                name: 'url',
              },
            ],
          },
        ],
      },
      
      {
        label: 'Contact',
        name: 'parlons_de_vous',
        path: 'content',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: 'parlons-de-vous',
        },
        format: 'md', 
        fields: [
          {
            type: 'string',
            label: 'Title',
            name: 'title',
          },
          {
            type: 'string',
            label: 'Description',
            name: 'description',
          },
          {
            type: 'string',
            label: 'Layout',
            name: 'layout',
          },
          {
            type: 'object',
            label: 'Contact Information',
            name: 'contact',
            fields: [
              {
                type: 'string',
                label: 'Heading',
                name: 'heading',
              },
              {
                type: 'string',
                label: 'Phone',
                name: 'phone',
              },
              {
                type: 'string',
                label: 'Phone Link',
                name: 'phone_link',
              },
              {
                type: 'string',
                label: 'Email',
                name: 'email',
              },
              {
                type: 'string',
                label: 'Address',
                name: 'address',
                ui: {
                  component: 'textarea', // Use a textarea for multiline address
                },
              },
              {
                type: 'string',
                label: 'Address Link',
                name: 'address_link',
              },
            ],
          },
        ],
      },

      {
        label: 'Other Pages',
        name: 'other_pages',
        path: 'content',
        match: {
          include: '*',
          exclude: '{_index,tarifs,coaching,parlons-de-vous}',
        },
        format: 'md', 
        fields: [
          {
            type: 'string',
            label: 'Title',
            name: 'title',
          },
          {
            type: 'string',
            label: 'Description',
            name: 'description',
            ui: {
              component: 'textarea',
            },
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

