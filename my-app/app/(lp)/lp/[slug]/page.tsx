import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CAMPANHAS, buscarCampanha } from "@/content/campanhas";
import { BannerCampanha } from "./_secoes/BannerCampanha";
import { Problema } from "./_secoes/Problema";
import { ModelosTecnologias } from "./_secoes/ModelosTecnologias";
import { PorQueKanak } from "./_secoes/PorQueKanak";
import { Fechamento } from "./_secoes/Fechamento";

export function generateStaticParams() {
  return CAMPANHAS.map((campanha) => ({ slug: campanha.slug }));
}

export async function generateMetadata(props: PageProps<"/lp/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const campanha = buscarCampanha(slug);
  if (!campanha) return {};

  return {
    title: campanha.meta.titulo,
    description: campanha.meta.descricao,
    // Landing de anúncio não entra em busca orgânica (specs/site.md §10).
    robots: { index: false, follow: false },
    openGraph: {
      title: campanha.meta.titulo,
      description: campanha.meta.descricao,
      url: `/lp/${campanha.slug}`,
      images: [{ url: campanha.banner.arte.desktop.src, alt: campanha.banner.arte.desktop.alt }],
    },
  };
}

/**
 * Landing Google Ads. Ordem das seções conforme a prancheta:
 * 1 Banner · 2 Problema · 3 Modelos & Tecnologias · 4 Por que a Kanak ·
 * 5 Fechamento · 6 Rodapé (no layout).
 */
export default async function PaginaLanding(props: PageProps<"/lp/[slug]">) {
  const { slug } = await props.params;
  const campanha = buscarCampanha(slug);
  if (!campanha) notFound();

  return (
    <>
      <BannerCampanha campanha={campanha} />
      <Problema />
      <ModelosTecnologias />
      <PorQueKanak />
      <Fechamento prazo={campanha.prazo} />
    </>
  );
}
