import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "48d089d3-b5ed-4784-a821-1c7ebf0dae35", // Get this from tina.io
  token: "b9750f73dac9e66aa977dd5481de3a3f90f79acb", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
  label: "Formations",
  name: "formations",
  path: "content/formations",
  format: "yaml",
  extension: "yml",
  create: true,
  slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
  fields: [
    {
      name: "title",
      label: "Intitulé",
      component: "text",
      required: true,
    },
    {
      name: "goals",
      label: "Objectifs",
      component: "textarea",
    },
    {
      name: "description",
      label: "Description",
      component: "textarea",
    },
    {
      name: "category",
      label: "Thème de formation",
      component: "select",
      options: [
        "Leadership",
        "Management d’équipe",
        "Management transversal",
        "Communication interpersonnelle",
        "Développement des qualités humaines et des compétences relationnelles",
        "Réussir une transition professionnelle",
        "Ateliers",
        "Bilan de compétences",
        "Consultation",
      ],
    },
    {
      name: "theme",
      label: "Ensemble thématique",
      component: "select",
      options: [
        "Développer le management",
        "Construire les équilibres",
        "Relier l'individu à son environnement",
      ],
      required: true,
    },
    {
      name: "body",
      label: "Body of Document",
      component: "markdown",
      required: true,
    },
  ],
}

        label: "Articles",
        name: "articles",
        path: "content/articles",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "string",
            name: "categories",
            label: "Catégorie",
            options: [
              "event",
              "synthèses",
              " CommentFairePour",
              " philolab",
              " food4thought",
              " philOtravail",
              " définir",
              " comprendre",
              " expérimenter",
            ],
          },
        ],
      },
    ],
  },
});
