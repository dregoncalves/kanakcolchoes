import type { MetadataRoute } from "next";
import { INDEXAVEL, SITE } from "@/lib/site";

/**
 * O robots.txt do domínio temporário é sobrescrito pela Hostinger (achado de
 * 2026-09-24: só bloqueia o Googlebot). O controle confiável é a meta tag
 * `robots` em cada página (app/layout.tsx), que segue INDEXAVEL. Este
 * arquivo é o que vale quando o servidor não sobrepõe — mantém a mesma regra.
 */
export default function robots(): MetadataRoute.Robots {
  if (!INDEXAVEL) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/", disallow: "/lp/" },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
