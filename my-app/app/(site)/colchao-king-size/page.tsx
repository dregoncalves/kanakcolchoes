import type { Metadata } from "next";
import { PaginaDeSecoes } from "@/components/PaginaDeSecoes";
import { lerPagina, primeiroParagrafo, tituloDaSecao } from "@/lib/conteudo";
import { imagensDoKitKing } from "@/lib/imagens";

const ARQUIVO = "produtos/kingsize/kit.md";

export function generateMetadata(): Metadata {
  const pagina = lerPagina(ARQUIVO);
  const hero = pagina.secoes.find((s) => s.tag === "hero");
  const titulo = hero ? tituloDaSecao(hero) : "Kit Colchão King Size";
  return {
    title: titulo,
    description: hero ? primeiroParagrafo(hero) : undefined,
    alternates: { canonical: "/colchao-king-size" },
  };
}

export default function KitKingPage() {
  const pagina = lerPagina(ARQUIVO);
  const imagens = imagensDoKitKing();
  const hero = imagens.hero ?? imagens.heroFallback;

  return (
    <PaginaDeSecoes
      pagina={pagina}
      tipo="kit"
      origemPagina="colchao-king-size"
      tamanhoBase="/colchao-king-size"
      imagens={{
        heroDesktop: hero,
        heroMobile: hero,
        composicao: imagens.composicao ?? imagens.kitCompleto,
        dimensoes: imagens.dimensoes,
        modelos: imagens.modelos,
      }}
    />
  );
}
