import { defineConfig } from "tinacms";

const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io

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
