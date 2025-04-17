import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { organizationSchema } from "tina/collections";

const organizations = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./content/organizations" }),
  schema: organizationSchema,
});

export const collections = { organizations };
