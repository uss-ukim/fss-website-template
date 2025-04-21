import { getCollection } from "astro:content";

export async function getOrganizationContent(slug: string, lang = "mk") {
  const organizations = await getCollection("organizations");
  const entry = organizations.find((org) => org.data.slug === slug && org.data.lang === lang);

  if (!entry) {
    throw new Error(`Organization with slug "${slug}" and language ${lang} was not found`);
  }

  return entry.data;
}
