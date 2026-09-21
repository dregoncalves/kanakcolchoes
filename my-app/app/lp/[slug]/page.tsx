import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PaginaDeSecoes } from "@/components/PaginaDeSecoes";
import { lerPagina, primeiroParagrafo, tituloDaSecao } from "@/lib/conteudo";
import { imagensDaLp } from "@/lib/imagens";

const LPS: Record<string, { arquivo: string; campanha: string }> = {
  "google-ads": {
    arquivo: "landing-pages/lp-google-ads.md",
    campanha: "google-ads",
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(LPS).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const lp = LPS[slug];
  if (!lp) return {};
  const pagina = lerPagina(lp.arquivo);
  const hero = pagina.secoes.find((s) => s.tag === "hero");
  const imagens = imagensDaLp();
  return {
    title: hero ? tituloDaSecao(hero) : "Kanak Colchões",
    description: hero ? primeiroParagrafo(hero) : undefined,
    alternates: { canonical: `/lp/${slug}` },
    openGraph: imagens.og
      ? {
          images: [
            {
              url: imagens.og.src,
              width: imagens.og.width,
              height: imagens.og.height,
              alt: imagens.og.alt,
            },
          ],
        }
      : undefined,
  };
}

export default async function LandingPage({ params }: Props) {
  const { slug } = await params;
  const lp = LPS[slug];
  if (!lp) notFound();

  const pagina = lerPagina(lp.arquivo);
  const imagens = imagensDaLp();

  return (
    <PaginaDeSecoes
      pagina={pagina}
      tipo="lp"
      origemPagina={`lp/${slug}`}
      campanha={lp.campanha}
      imagens={{
        heroDesktop: imagens.heroDesktop,
        heroMobile: imagens.heroMobile,
        modelos: imagens.modelos,
      }}
    />
  );
}
