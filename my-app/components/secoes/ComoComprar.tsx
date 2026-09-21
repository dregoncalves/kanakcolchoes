import { CtasDaSecao } from "@/components/primitivos/CtasDaSecao";
import { type FundoSecao, SecaoLayout } from "@/components/primitivos/SecaoLayout";
import { ProseCliente, TextoRico } from "@/components/primitivos/ProseCliente";
import { ListaTelefones } from "@/components/transversais/ListaTelefones";
import { blocosPorTipo, prosaDaSecao, tituloDaSecao, type Secao } from "@/lib/conteudo";
import type { OrigemWhatsApp } from "@/lib/whatsapp";

type Props = {
  secao: Secao;
  origem: OrigemWhatsApp;
  fundo?: FundoSecao;
};

export function ComoComprar({ secao, origem, fundo = "claro" }: Props) {
  const rotulados = blocosPorTipo(secao, "blocoRotulado");
  const prosa = prosaDaSecao(secao).filter((b) => b.tipo !== "telefone");
  const modoPassos = rotulados.length >= 4;

  return (
    <SecaoLayout fundo={fundo}>
      <h2 className="titulo-secao">{tituloDaSecao(secao)}</h2>
      <div className="mt-4">
        <ProseCliente blocos={prosa} />
      </div>
      {rotulados.length > 0 ? (
        modoPassos ? (
          <ol className="mt-8 grid gap-6">
            {rotulados.map((bloco, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-titulo text-bordo-700 w-8 shrink-0 text-2xl" aria-hidden>
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg md:text-xl">{bloco.rotulo}</h3>
                  <div className="mt-2 max-w-[68ch] space-y-3">
                    {bloco.corpo.map((p, j) => (
                      <p key={j}>
                        <TextoRico trechos={p} />
                      </p>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {rotulados.map((bloco, i) => (
              <article key={i} className="border-linha rounded-md border bg-papel p-5">
                <h3 className="text-lg md:text-xl">{bloco.rotulo}</h3>
                <div className="mt-2 space-y-3">
                  {bloco.corpo.map((p, j) => (
                    <p key={j}>
                      <TextoRico trechos={p} />
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )
      ) : null}
      <ListaTelefones blocos={secao.corpo} />
      <CtasDaSecao ctas={secao.ctas} origem={origem} />
    </SecaoLayout>
  );
}
