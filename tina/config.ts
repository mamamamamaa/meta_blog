import { defineConfig } from "tinacms";

const CLIENT_ID = process.env.TINA_CLIENT_ID || null;
const TINA_TOKEN = process.env.TINA_TOKEN || null;

const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: CLIENT_ID,
  token: TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "cms",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "image",
            name: "post_image",
            label: "Post image",
            required: true,
            ui: {
              validate(value) {
                console.log(value);
              },
            },
          },
          {
            label: "Tags",
            name: "tags",
            type: "string",
            list: true,
            options: [
              {
                value: "linux",
                label: "Linux",
              },
              {
                value: "web",
                label: "Web development",
              },
              {
                value: "crypto",
                label: "Crypto",
              },
              {
                value: "games",
                label: "Games",
              },
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
        ],
      },
    ],
  },
});
