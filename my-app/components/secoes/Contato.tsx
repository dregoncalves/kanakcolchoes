import { CtasDaSecao } from "@/components/primitivos/CtasDaSecao";
import { type FundoSecao, SecaoLayout } from "@/components/primitivos/SecaoLayout";
import { ProseCliente } from "@/components/primitivos/ProseCliente";
import { ListaTelefones } from "@/components/transversais/ListaTelefones";
import { prosaDaSecao, tituloDaSecao, type Secao } from "@/lib/conteudo";
import type { OrigemWhatsApp } from "@/lib/whatsapp";

type Props = {
  secao: Secao;
  origem: OrigemWhatsApp;
  fundo?: FundoSecao;
};

export function Contato({ secao, origem, fundo = "areia" }: Props) {
  const prosa = prosaDaSecao(secao).filter((b) => b.tipo !== "telefone");
  return (
    <SecaoLayout fundo={fundo} fechamento>
      <h2 className="titulo-secao">{tituloDaSecao(secao)}</h2>
      <div className="mt-4">
        <ProseCliente blocos={prosa} />
      </div>
      <ListaTelefones blocos={secao.corpo} />
      <CtasDaSecao ctas={secao.ctas} origem={origem} />
    </SecaoLayout>
  );
}
