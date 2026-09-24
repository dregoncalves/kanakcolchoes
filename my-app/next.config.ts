import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // ⏳ PENDENTE: levantar as URLs do WordPress atual (specs/site.md §10).
    return [];
  },
};

export default nextConfig;
