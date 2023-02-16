import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "e6837cfb-edf5-4858-82cb-4b82f7f165c5", // Get this from tina.io
  token: null, // Get this from tina.io
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
            label: "Intitulé",
            required: true,
          },
          {
            type: "string",
            name: "goals",
            label: "Objectifs",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: "string",
            name: "category",
            label: "Thème de formation",
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
            type: "string",
            name: "theme",
            label: "Ensemble thématique",
            options: [
              "Développer le management",
              "Construire les équilibres",
              "Relier l'individu à son environnement",
            ],
            required: true,
          },
        ],
      },
      {
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
