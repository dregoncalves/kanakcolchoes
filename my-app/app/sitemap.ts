import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kanakcolchoes.com.br";
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/colchao-king-size`, changeFrequency: "weekly", priority: 0.9 },
    {
      url: `${base}/colchao-king-size/anatomico-ortopedico`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
