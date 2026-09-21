import type { Metadata } from "next";
import { PaginaDeSecoes } from "@/components/PaginaDeSecoes";
import { lerPagina, primeiroParagrafo, tituloDaSecao } from "@/lib/conteudo";
import { imagensDoModeloAnatomico } from "@/lib/imagens";

const ARQUIVO = "produtos/kingsize/anatomico-ortopedico.md";

export function generateMetadata(): Metadata {
  const pagina = lerPagina(ARQUIVO);
  const hero = pagina.secoes.find((s) => s.tag === "hero");
  const titulo = hero ? tituloDaSecao(hero) : "Kit Colchão King Size Anatômico Ortopédico";
  return {
    title: titulo,
    description: hero ? primeiroParagrafo(hero) : undefined,
    alternates: { canonical: "/colchao-king-size/anatomico-ortopedico" },
  };
}

export default function ModeloAnatomicoPage() {
  const pagina = lerPagina(ARQUIVO);
  const imagens = imagensDoModeloAnatomico();

  return (
    <PaginaDeSecoes
      pagina={pagina}
      tipo="modelo"
      origemPagina="colchao-king-size/anatomico-ortopedico"
      tamanhoBase="/colchao-king-size"
      imagens={{
        heroDesktop: imagens.hero,
        heroMobile: imagens.hero,
        composicao: imagens.composicao,
        tecnologia: imagens.tecnologia ?? imagens.comparativo,
      }}
    />
  );
}
