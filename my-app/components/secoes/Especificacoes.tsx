import { CtasDaSecao } from "@/components/primitivos/CtasDaSecao";
import { type FundoSecao, SecaoLayout } from "@/components/primitivos/SecaoLayout";
import { ProseCliente } from "@/components/primitivos/ProseCliente";
import { blocosPorTipo, prosaDaSecao, tituloDaSecao, type Secao } from "@/lib/conteudo";
import type { OrigemWhatsApp } from "@/lib/whatsapp";

type Props = {
  secao: Secao;
  origem: OrigemWhatsApp;
  fundo?: FundoSecao;
};

export function Especificacoes({ secao, origem, fundo = "claro" }: Props) {
  const tabelas = blocosPorTipo(secao, "tabela");
  const pares = tabelas.flatMap((t) => t.pares);

  return (
    <SecaoLayout fundo={fundo}>
      <h2 className="titulo-secao">{tituloDaSecao(secao)}</h2>
      <div className="mt-4">
        <ProseCliente blocos={prosaDaSecao(secao)} />
      </div>
      {pares.length > 0 ? (
        <>
          <dl className="mt-8 divide-linha divide-y md:hidden">
            {pares.map((par) => (
              <div key={par.rotulo} className="grid gap-1 py-4">
                <dt className="font-subtitulo text-tinta-500 text-sm tracking-[0.04em] uppercase">
                  {par.rotulo}
                </dt>
                <dd className="text-tinta-900">{par.valor}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 hidden overflow-hidden rounded-md md:block">
            <table className="w-full max-w-[720px] border-collapse text-left">
              <tbody>
                {pares.map((par) => (
                  <tr key={par.rotulo} className="border-linha border-b">
                    <th
                      scope="row"
                      className="font-subtitulo text-tinta-500 w-[42%] py-3 pr-6 text-sm font-medium tracking-[0.02em]"
                    >
                      {par.rotulo}
                    </th>
                    <td className="text-tinta-900 py-3">{par.valor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : null}
      <CtasDaSecao ctas={secao.ctas} origem={origem} />
    </SecaoLayout>
  );
}
