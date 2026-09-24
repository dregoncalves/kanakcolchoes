import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Imagens destacadas do WordPress headless (specs/site.md §9).
    remotePatterns: [{ protocol: "https", hostname: "cms.kanakcolchoes.com.br" }],
  },
  async redirects() {
    // ⏳ PENDENTE: levantar as URLs do WordPress atual (specs/site.md §10).
    return [{ source: "/lp/55-off", destination: "/lp/5771", permanent: true }];
  },
};

export default nextConfig;
