import { CtasDaSecao } from "@/components/primitivos/CtasDaSecao";
import { type FundoSecao, SecaoLayout } from "@/components/primitivos/SecaoLayout";
import { ProseCliente, TextoRico } from "@/components/primitivos/ProseCliente";
import { prosaDaSecao, tituloDaSecao, type Secao } from "@/lib/conteudo";
import type { OrigemWhatsApp } from "@/lib/whatsapp";

type Props = {
  secao: Secao;
  origem: OrigemWhatsApp;
  fundo?: FundoSecao;
};

export function ProvaSocial({ secao, origem, fundo = "areia" }: Props) {
  const prosa = prosaDaSecao(secao);
  const citacoes = secao.corpo.filter((b) => b.tipo === "citacao");
  const listas = secao.corpo.filter((b) => b.tipo === "lista");
  const resto = prosa.filter((b) => b.tipo !== "lista" && b.tipo !== "citacao");

  return (
    <SecaoLayout fundo={fundo} alinhamento="centro">
      <h2 className="titulo-secao">{tituloDaSecao(secao)}</h2>
      <div className="mt-4">
        <ProseCliente blocos={resto} />
      </div>
      {listas.map((lista, i) =>
        lista.tipo === "lista" ? (
          <ul key={i} className="mt-8 grid w-full gap-4 text-left md:grid-cols-2">
            {lista.itens.map((item, j) => (
              <li key={j} className="border-linha rounded-md border bg-papel p-5">
                <TextoRico trechos={item} />
              </li>
            ))}
          </ul>
        ) : null,
      )}
      {citacoes.map((citacao, i) =>
        citacao.tipo === "citacao" ? (
          <blockquote
            key={i}
            className="border-ouro-500 font-titulo mt-10 max-w-[68ch] border-l-2 pl-5 text-left text-xl leading-snug"
          >
            {citacao.linhas.map((linha, j) => (
              <p key={j} className={j > 0 ? "text-tinta-500 mt-3 font-texto text-base" : undefined}>
                {linha}
              </p>
            ))}
          </blockquote>
        ) : null,
      )}
      <CtasDaSecao ctas={secao.ctas} origem={origem} />
    </SecaoLayout>
  );
}
