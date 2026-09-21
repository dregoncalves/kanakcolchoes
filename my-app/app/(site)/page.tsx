import type { Metadata } from "next";
import { PaginaDeSecoes } from "@/components/PaginaDeSecoes";
import { lerPagina, primeiroParagrafo, tituloDaSecao } from "@/lib/conteudo";
import { imagensDaHome } from "@/lib/imagens";

const ARQUIVO = "institucional/home.md";

export function generateMetadata(): Metadata {
  const pagina = lerPagina(ARQUIVO);
  const hero = pagina.secoes.find((s) => s.tag === "hero");
  const titulo = hero ? tituloDaSecao(hero) : "Kanak Colchões";
  const description = hero ? primeiroParagrafo(hero) : undefined;
  return {
    title: titulo,
    description,
    alternates: { canonical: "/" },
  };
}

export default function HomePage() {
  const pagina = lerPagina(ARQUIVO);
  const imagens = imagensDaHome();

  return (
    <PaginaDeSecoes
      pagina={pagina}
      tipo="home"
      origemPagina="home"
      imagens={{
        heroDesktop: imagens.heroDesktop,
        heroMobile: imagens.heroMobile,
        tamanhos: imagens.tamanhos,
        modelos: imagens.modelos,
      }}
    />
  );
}
