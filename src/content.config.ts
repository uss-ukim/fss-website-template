import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const organizations = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/organizations" }),
  schema: z.object({
    name: z.string(),
    long_name: z.string(),
    description: z.string(),
    url: z.string(),
    logo: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { organizations };
