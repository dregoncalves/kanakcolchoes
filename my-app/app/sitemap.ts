import type { MetadataRoute } from "next";
import { listarSlugs } from "@/lib/wordpress";
import { INDEXAVEL, SITE } from "@/lib/site";

/**
 * Home + /blog + um item por post. As landings de anúncio são noindex e
 * ficam fora (specs/site.md §10). Lista vazia enquanto INDEXAVEL === false
 * (domínio temporário) — nada a indexar antes da virada.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!INDEXAVEL) return [];

  const slugs = await listarSlugs();

  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE.url}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    ...slugs.map((slug) => ({
      url: `${SITE.url}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
