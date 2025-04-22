import { getCollection } from "astro:content";

export async function getOrganizationContent(slug: string, lang = "mk") {
  const organizations = await getCollection("organizations");
  const entry = organizations.find((org) => org.data.slug === slug && org.data.lang === lang);

  if (!entry) {
    throw new Error(`Organization with slug "${slug}" and language ${lang} was not found`);
  }

  return entry.data;
}

export async function getOrganizationLanguages(slug: string) {
  const organizations = await getCollection("organizations");

  const languageSet = new Set<string>();

  for (const org of organizations) {
    if (org.data.slug === slug) {
      languageSet.add(org.data.lang);
    }
  }

  return Array.from(languageSet);
}
