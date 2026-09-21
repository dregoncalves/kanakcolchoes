import { CtasDaSecao } from "@/components/primitivos/CtasDaSecao";
import { SeletorDeCores } from "@/components/primitivos/SeletorDeCores";
import { type FundoSecao, SecaoLayout } from "@/components/primitivos/SecaoLayout";
import { ProseCliente } from "@/components/primitivos/ProseCliente";
import { blocosPorTipo, prosaDaSecao, tituloDaSecao, type Secao } from "@/lib/conteudo";
import { amostrasDeCor } from "@/lib/imagens";
import type { OrigemWhatsApp } from "@/lib/whatsapp";

type Props = {
  secao: Secao;
  origem: OrigemWhatsApp;
  fundo?: FundoSecao;
};

export function VariantesCor({ secao, origem, fundo = "areia" }: Props) {
  const temCarrossel = blocosPorTipo(secao, "placeholder").some((p) => p.kind === "cores");
  const amostras = temCarrossel ? amostrasDeCor() : [];

  return (
    <SecaoLayout fundo={fundo}>
      <h2 className="titulo-secao">{tituloDaSecao(secao)}</h2>
      <div className="mt-4">
        <ProseCliente blocos={prosaDaSecao(secao)} />
      </div>
      {temCarrossel ? <SeletorDeCores amostras={amostras} /> : null}
      <CtasDaSecao ctas={secao.ctas} origem={origem} />
    </SecaoLayout>
  );
}
