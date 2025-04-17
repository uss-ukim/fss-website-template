import { defineConfig } from "tinacms";
import { OrganizationCollection } from "./collections";

export default defineConfig({
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [OrganizationCollection],
  },
  search: {
    tina: {}, // Won't use cloud
  },
});
