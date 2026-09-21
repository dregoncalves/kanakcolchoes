import { BlocosRotulados } from "@/components/primitivos/BlocosRotulados";
import { CtasDaSecao } from "@/components/primitivos/CtasDaSecao";
import { ImagemKanak } from "@/components/primitivos/ImagemKanak";
import { type FundoSecao, SecaoLayout } from "@/components/primitivos/SecaoLayout";
import { ProseCliente } from "@/components/primitivos/ProseCliente";
import { blocosPorTipo, prosaDaSecao, tituloDaSecao, type Secao } from "@/lib/conteudo";
import type { ImagemSlot } from "@/lib/imagens-modelo";
import type { OrigemWhatsApp } from "@/lib/whatsapp";

type Props = {
  secao: Secao;
  origem: OrigemWhatsApp;
  fundo?: FundoSecao;
  compacta?: boolean;
  fechamento?: boolean;
  alinhamento?: "inicio" | "centro";
  imagem?: ImagemSlot | null;
  /** Se fornecido, exibe um eyebrow pill acima do h2 */
  eyebrow?: string;
};

export function SecaoTexto({
  secao,
  origem,
  fundo = "claro",
  compacta,
  fechamento,
  alinhamento = "inicio",
  imagem,
  eyebrow,
}: Props) {
  const rotulados = blocosPorTipo(secao, "blocoRotulado");
  const ctaVariante = fundo === "escuro" ? "em-bloco-escuro" : "primario";
  const centro = alinhamento === "centro";

  return (
    <SecaoLayout
      fundo={fundo}
      compacta={compacta}
      fechamento={fechamento}
      alinhamento={alinhamento}
    >
      {eyebrow ? (
        <span className="badge-eyebrow">{eyebrow}</span>
      ) : null}
      <h2 className="titulo-secao">{tituloDaSecao(secao)}</h2>
      <div className="mt-4">
        <ProseCliente blocos={prosaDaSecao(secao)} />
      </div>
      {imagem ? (
        <div className={`mt-8 ${centro ? "w-full max-w-[720px]" : "max-w-[720px]"}`}>
          <ImagemKanak
            imagem={imagem}
            sizes="(max-width: 768px) 100vw, 720px"
            className="rounded-lg w-full"
          />
        </div>
      ) : null}
      {rotulados.length > 0 ? (
        <div className="w-full">
          <BlocosRotulados
            blocos={rotulados}
            modo="definicoes"
            headingLevel={3}
          />
        </div>
      ) : null}
      <CtasDaSecao ctas={secao.ctas} origem={origem} variante={ctaVariante} />
    </SecaoLayout>
  );
}

