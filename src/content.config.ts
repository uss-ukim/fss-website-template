import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { organizationSchema } from "tina/collections";

const organizations = defineCollection({
  loader: glob({
    pattern: "**/*.yaml",
    base: "./content/organizations",
    generateId: (entry) => `${entry.data.slug}-${entry.data.lang}`,
  }),
  schema: organizationSchema,
});

export const collections = { organizations };
