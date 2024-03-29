import { defineConfig } from 'tinacms';

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'master';

export default defineConfig({
  branch,
  clientId: "39f3fee0-947c-479c-b2c8-6f0635335a79",
  token: "3daee86cfc6e921f041a2856c3b8229880541a62",
  // client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    loadCustomStore: async () => {
      const pack = await import("next-tinacms-cloudinary");
      return pack.TinaCloudCloudinaryMediaStore;
    },
  },
  search: {
    tina: {
      indexerToken: 'f02fd1c201ee3b8d815d2ad880a57cd90a1e906d',
      stopwordLanguages: ['fra']
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100
  },
  schema: {
    collections: [

      {
        name: "homepage",
        label: "Accueil",
        path: "content",
        ui: {
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
            label: 'Titre',
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            ui: {
              component: 'textarea', 
            },
          },
          // {
          //   type: 'image',
          //   name: 'image',
          //   label: 'Main Image',
          // },
          {
            type: 'object',
            name: 'hero',
            label: 'Le Hero Header',
            fields: [
              { type: 'image', name: 'image', label: 'Image' },
              { type: 'string', name: 'heading', label: 'Titre', ui: {component: 'textarea'} },
              { type: 'string', name: 'subheading', label: 'Sous-titre', ui: {component: 'textarea'} },
            ],
          },


          {
            type: 'object',
            name: 'hero_links',
            label: 'Liens',
            fields: [
              {
                type: 'object',
                label: 'Liens',
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
                    label: 'Titre',
                    name: 'heading',
                  },
                  {
                    type: 'string',
                    label: 'Icône',
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
                    label: 'Texte du Lien',
                    name: 'link',
                  },
                  {
                    type: 'string',
                    label: 'URL du Lien',
                    name: 'link_url',
                  },
                ],
              },
            ],
          },



          {
            type: 'object',
            name: 'partners',
            label: 'Partenaires',
            fields: [
              { type: 'string', name: 'heading', label: 'Titre' },
              { type: 'string', name: 'subheading', label: 'Sous-titre', ui: {component: 'textarea'} },
              {
                type: 'object',
                name: 'companies',
                label: 'Entreprises',
                list: true, 
                ui: {
                  itemProps: (item) => {
                    return { label: item?.heading };
                  },
                },
                fields: [
                  { type: 'string', name: 'heading', label: 'Nom de l\'Entreprise' },
                  { type: 'string', name: 'subheading', label: 'Description', ui: {component: 'textarea'} },
                  { type: 'image', name: 'image', label: 'Image' },
                  { type: 'string', name: 'link', label: 'URL du Lien' },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'testimonials',
            label: 'Témoignages',
            fields: [
              { type: 'string', name: 'heading', label: 'Titre' },
              { type: 'string', name: 'subheading', label: 'Sous-titre', ui: {component: 'textarea'} },
              {
                type: 'object',
                name: 'testimonials',
                label: 'Témoignages',
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.name };
                  },
                },
                fields: [
                  { type: 'string', name: 'name', label: 'Nom', },
                  { type: 'string', name: 'company', label: 'Entreprise' },
                  { type: 'string', name: 'position', label: 'Poste' },
                  { type: 'rich-text', name: 'quote', label: 'Citation' },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'references',
            label: 'Références',
            fields: [
              { type: 'string', name: 'heading', label: 'Titre' },
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
                  { type: 'string', name: 'name', label: 'Nom', },
                  { type: 'image', name: 'logo', label: 'Logo' },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'contact',
            label: 'Contact',
            fields: [
              { type: 'string', name: 'heading', label: 'Titre' },
              { type: 'string', name: 'phone', label: 'Numéro de Téléphone' },
              { type: 'string', name: 'phone_link', label: 'Lien Téléphonique', description: 'Telephone link in the format tel:+123456789' },
              { type: 'string', name: 'email', label: 'Adresse Email' },
              { type: 'string', name: 'address', label: 'Adresse Physique', ui: { component: 'textarea' } },
              { type: 'string', name: 'address_link', label: 'Lien Google Maps', description: 'Lien Google Maps vers l\'adresse' },
            ],
          },
          {
            type: 'object',
            name: 'coach',
            label: 'Coach',
            fields: [
              { type: 'string', name: 'id', label: 'ID' },
              { type: 'string', name: 'heading', label: 'Titre' },
              { type: 'string', name: 'subheading', label: 'Sous-titre' },
              { type: 'image', name: 'image', label: 'Image' },
              { type: 'rich-text', name: 'copy', label: 'Description' },
            ],
          },
          {
            type: 'object',
            name: 'faq',
            label: 'FAQ',
            fields: [
              { type: 'string', name: 'heading', label: 'Titre' },
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
                  { type: 'rich-text', name: 'answer', label: 'Réponse' },
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
            label: 'Titre',
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
                    label: 'Titre',
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
                label: 'Titre',
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
                    label: 'Réponse',
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
                label: 'Titre',
                name: 'heading',
              },
              {
                type: 'string',
                label: 'Sous-titre',
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
            name: 'draft',
            label: 'Draft',
            type: 'boolean',
            required: true,
            description: 'Si cela est coché, l\'article ne sera pas publié.',
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Date',
            required: true,
          },
          {
            type: 'string',
            name: 'title',
            label: 'Titre',
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
            name: 'image',
            label: 'Image',
          },
          {
            type: 'string',
            name: 'categories',
            label: 'Catégories',
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
            label: 'Corps',
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
            name: 'draft',
            label: 'Draft',
            type: 'boolean',
            required: true,
            description: 'Si cela est coché, l\'article ne sera pas publié.',
          },
          {
            type: 'string',
            name: 'category',
            label: 'Catégorie',
            required: true,
          },
          {
            type: 'string',
            name: 'title',
            label: 'Titre',
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
            label: 'Thème',
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
                label: 'Sur-titre',
              },
              {
                type: 'string',
                name: 'heading',
                label: 'Titre',
              },
              {
                type: 'string',
                name: 'duration',
                label: 'Durée',
              },
              {
                type: 'string',
                name: 'public',
                label: 'Public',
              },
              {
                type: 'string',
                name: 'prerequisites',
                label: 'Prérequis',
              },
            ],
          },
          {
            type: 'string',
            name: 'goals',
            label: 'Objectifs',
            ui: {
              component: 'textarea', 
            },
          },
          // {
          //   type: 'object',
          //   name: 'strategies',
          //   label: 'Stratégies',
          //   list: true,
          //   fields: [
          //     {
          //       type: 'string',
          //       name: 'strategy',
          //       label: 'Stratégie',
          //     },
          //   ],
          // },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Corps',
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
            label: 'Titre',
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
            label: 'Titre',
            name: 'heading',
          },
          {
            type: 'string', 
            label: 'Sous-titre',
            name: 'subheading',
            ui: {
              component: "textarea"
            }
          },
          {
            type: 'object',
            label: 'Détails des Tarifs',
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
                label: 'Titre',
                name: 'heading',
              },
              {
                type: 'rich-text', 
                label: 'Items',
                name: 'items',
              },
              {
                type: 'string',
                label: 'Texte du Lien',
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
            label: 'Titre',
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
            type: 'object',
            label: 'Informations de Contact',
            name: 'contact',
            fields: [
              {
                type: 'string',
                label: 'Titre',
                name: 'heading',
              },
              {
                type: 'string',
                label: 'Téléphone',
                name: 'phone',
              },
              {
                type: 'string',
                label: 'Lien Téléphonique',
                name: 'phone_link',
              },
              {
                type: 'string',
                label: 'Email',
                name: 'email',
              },
              {
                type: 'string',
                label: 'Addresse',
                name: 'address',
                ui: {
                  component: 'textarea', // Use a textarea for multiline address
                },
              },
              {
                type: 'string',
                label: 'Lien Google Maps pour l\'adresse',
                name: 'address_link',
              },
            ],
          },
        ],
      },

      {
        label: 'Autres Pages',
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
            label: 'Titre',
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
            label: 'Corps',
            isBody: true,
          },
        ],
      },


    ],
  },
});

