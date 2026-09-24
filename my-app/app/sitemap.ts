import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/** Só a Home entra. As landings de anúncio são noindex (specs/site.md §10). */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
