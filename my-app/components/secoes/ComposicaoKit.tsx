import { CtasDaSecao } from "@/components/primitivos/CtasDaSecao";
import { ImagemKanak } from "@/components/primitivos/ImagemKanak";
import { type FundoSecao, SecaoLayout } from "@/components/primitivos/SecaoLayout";
import { ProseCliente, TextoRico } from "@/components/primitivos/ProseCliente";
import { blocosPorTipo, prosaDaSecao, tituloDaSecao, type Secao } from "@/lib/conteudo";
import type { ImagemSlot } from "@/lib/imagens-modelo";
import type { OrigemWhatsApp } from "@/lib/whatsapp";

type Props = {
  secao: Secao;
  origem: OrigemWhatsApp;
  fundo?: FundoSecao;
  imagem?: ImagemSlot | null;
};

export function ComposicaoKit({ secao, origem, fundo = "claro", imagem }: Props) {
  const listas = blocosPorTipo(secao, "lista");
  const prosa = prosaDaSecao(secao).filter((b) => b.tipo !== "lista");

  return (
    <SecaoLayout fundo={fundo}>
      <div className={`grid items-start gap-10 md:gap-16 ${imagem ? "md:grid-cols-2" : ""}`}>
        <div>
          <h2 className="titulo-secao">{tituloDaSecao(secao)}</h2>
          <div className="mt-4">
            <ProseCliente blocos={prosa} />
          </div>
          {listas.map((lista, i) =>
            lista.tipo === "lista" ? (
              <ul key={i} className="mt-8 grid gap-3 sm:grid-cols-2">
                {lista.itens.map((item, j) => (
                  <li
                    key={j}
                    className="border-linha flex gap-3 rounded-md border bg-papel p-4"
                  >
                    <span
                      className="font-titulo text-bordo-700 w-6 shrink-0 text-xl leading-none"
                      aria-hidden
                    >
                      {j + 1}
                    </span>
                    <span className="font-subtitulo text-tinta-900 text-[15px] font-medium">
                      <TextoRico trechos={item} />
                    </span>
                  </li>
                ))}
              </ul>
            ) : null,
          )}
          <CtasDaSecao ctas={secao.ctas} origem={origem} />
        </div>
        {imagem ? (
          <ImagemKanak
            imagem={imagem}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-lg w-full"
          />
        ) : null}
      </div>
    </SecaoLayout>
  );
}
