import { defineConfig as e } from "tinacms";
const t = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main", n = e({
  branch: t,
  clientId: "e6837cfb-edf5-4858-82cb-4b82f7f165c5",
  token: null,
  build: {
    outputFolder: "admin",
    publicFolder: "static"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static"
    }
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
            isBody: !0
          },
          {
            type: "string",
            name: "title",
            label: "Intitul\xE9",
            required: !0
          },
          {
            type: "string",
            name: "goals",
            label: "Objectifs",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "description",
            label: "Description"
          },
          {
            type: "string",
            name: "category",
            label: "Th\xE8me de formation",
            options: [
              "Leadership",
              "Management d\u2019\xE9quipe",
              "Management transversal",
              "Communication interpersonnelle",
              "D\xE9veloppement des qualit\xE9s humaines et des comp\xE9tences relationnelles",
              "R\xE9ussir une transition professionnelle",
              "Ateliers",
              "Bilan de comp\xE9tences",
              "Consultation"
            ]
          },
          {
            type: "string",
            name: "theme",
            label: "Ensemble th\xE9matique",
            options: [
              "D\xE9velopper le management",
              "Construire les \xE9quilibres",
              "Relier l'individu \xE0 son environnement"
            ],
            required: !0
          }
        ]
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
            isBody: !0
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            required: !0
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: !0
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: !0
          },
          {
            type: "string",
            name: "categories",
            label: "Cat\xE9gorie",
            options: [
              "event",
              "synth\xE8ses",
              " CommentFairePour",
              " philolab",
              " food4thought",
              " philOtravail",
              " d\xE9finir",
              " comprendre",
              " exp\xE9rimenter"
            ]
          }
        ]
      }
    ]
  }
});
export {
  n as default
};
