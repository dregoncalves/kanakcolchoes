import { ComoComprar } from "@/components/secoes/ComoComprar";
import { ComposicaoKit } from "@/components/secoes/ComposicaoKit";
import { Contato } from "@/components/secoes/Contato";
import { Dimensoes } from "@/components/secoes/Dimensoes";
import { Especificacoes } from "@/components/secoes/Especificacoes";
import { Faq } from "@/components/secoes/Faq";
import { Hero } from "@/components/secoes/Hero";
import { ProvaSocial } from "@/components/secoes/ProvaSocial";
import { SecaoTexto } from "@/components/secoes/SecaoTexto";
import { VariantesCor } from "@/components/secoes/VariantesCor";
import { VitrineProdutos } from "@/components/secoes/VitrineProdutos";
import type { FundoSecao } from "@/components/primitivos/SecaoLayout";
import type { PaginaConteudo } from "@/lib/conteudo-modelo";
import type { ImagemSlot } from "@/lib/imagens-modelo";

export type TipoPagina = "home" | "kit" | "modelo" | "lp";

type ImagensPagina = {
  heroDesktop?: ImagemSlot | null;
  heroMobile?: ImagemSlot | null;
  composicao?: ImagemSlot | null;
  dimensoes?: ImagemSlot | null;
  tecnologia?: ImagemSlot | null;
  tamanhos?: Record<string, ImagemSlot | null>;
  modelos?: Record<string, ImagemSlot | null>;
};

type Props = {
  pagina: PaginaConteudo;
  tipo: TipoPagina;
  origemPagina: string;
  campanha?: string;
  imagens?: ImagensPagina;
  tamanhoBase?: string;
};

function alinhamentoDaSecao(tag: string, fundo: FundoSecao): "inicio" | "centro" {
  if (fundo === "escuro") return "centro";
  if (
    tag === "diferenciais" ||
    tag === "problema" ||
    tag === "prova-social" ||
    tag === "fechamento"
  ) {
    return "centro";
  }
  return "inicio";
}

function fundoDaSecao(
  tipo: TipoPagina,
  tag: string,
  ocorrencia: number,
): FundoSecao {
  if (tipo === "home") {
    if (tag === "diferenciais") return ocorrencia === 0 ? "claro" : "areia";
    if (tag === "tecnologia" || tag === "prova-social" || tag === "contato") {
      return "areia";
    }
    if (tag === "vitrine-produtos") return "escuro";
    return "claro";
  }
  if (tipo === "lp") {
    if (tag === "problema" || tag === "fechamento") return "escuro";
    if (tag === "prova-social") return "areia";
    return "claro";
  }
  if (tag === "fechamento") return "escuro";
  if (tag === "dimensoes" || tag === "variantes-cor") return "areia";
  if (tipo === "modelo" && tag === "faq") return "areia";
  return "claro";
}

export function PaginaDeSecoes({
  pagina,
  tipo,
  origemPagina,
  campanha,
  imagens,
  tamanhoBase = "/colchao-king-size",
}: Props) {
  const ocorrencias = new Map<string, number>();

  return (
    <>
      {pagina.secoes.map((secao) => {
        const n = ocorrencias.get(secao.tag) ?? 0;
        ocorrencias.set(secao.tag, n + 1);
        const origem = {
          pagina: origemPagina,
          secao: n > 0 ? `${secao.tag}-${n + 1}` : secao.tag,
          campanha,
        };
        const fundo = fundoDaSecao(tipo, secao.tag, n);
        const alinhamento = alinhamentoDaSecao(secao.tag, fundo);
        const key = `${secao.tag}-${n}`;

        switch (secao.tag) {
          case "hero":
            return (
              <Hero
                key={key}
                secao={secao}
                origem={origem}
                variante={tipo === "lp" ? "lp" : tipo === "home" ? "institucional" : "produto"}
                desktop={imagens?.heroDesktop}
                mobile={imagens?.heroMobile}
              />
            );
          case "vitrine-produtos":
            return (
              <VitrineProdutos
                key={key}
                secao={secao}
                origem={origem}
                fundo={fundo}
                variante={tipo === "home" ? "home" : tipo === "lp" ? "lp" : "por-modelo"}
                imagensTamanho={imagens?.tamanhos}
                imagensModelo={imagens?.modelos}
                tamanhoBase={tamanhoBase}
              />
            );
          case "prova-social":
            return (
              <ProvaSocial key={key} secao={secao} origem={origem} fundo={fundo} />
            );
          case "como-comprar":
            return (
              <ComoComprar key={key} secao={secao} origem={origem} fundo={fundo} />
            );
          case "contato":
            return <Contato key={key} secao={secao} origem={origem} fundo={fundo} />;
          case "composicao-kit":
            return (
              <ComposicaoKit
                key={key}
                secao={secao}
                origem={origem}
                fundo={fundo}
                imagem={imagens?.composicao}
              />
            );
          case "dimensoes":
            return (
              <Dimensoes
                key={key}
                secao={secao}
                origem={origem}
                fundo={fundo}
                imagem={imagens?.dimensoes}
              />
            );
          case "variantes-cor":
            return (
              <VariantesCor key={key} secao={secao} origem={origem} fundo={fundo} />
            );
          case "especificacoes":
            return (
              <Especificacoes key={key} secao={secao} origem={origem} fundo={fundo} />
            );
          case "faq":
            return <Faq key={key} secao={secao} origem={origem} fundo={fundo} />;
          default:
            return (
              <SecaoTexto
                key={key}
                secao={secao}
                origem={origem}
                fundo={fundo}
                compacta={tipo === "lp"}
                fechamento={secao.tag === "fechamento"}
                alinhamento={alinhamento}
                imagem={secao.tag === "tecnologia" ? imagens?.tecnologia : undefined}
              />
            );
        }
      })}
    </>
  );
}
