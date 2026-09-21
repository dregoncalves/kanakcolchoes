import { CtasDaSecao } from "@/components/primitivos/CtasDaSecao";
import { ImagemKanak } from "@/components/primitivos/ImagemKanak";
import { type FundoSecao, SecaoLayout } from "@/components/primitivos/SecaoLayout";
import { ProseCliente } from "@/components/primitivos/ProseCliente";
import { prosaDaSecao, tituloDaSecao, type Secao } from "@/lib/conteudo";
import type { ImagemSlot } from "@/lib/imagens-modelo";
import { extrairMedida } from "@/lib/tipografia";
import type { OrigemWhatsApp } from "@/lib/whatsapp";

type Props = {
  secao: Secao;
  origem: OrigemWhatsApp;
  fundo?: FundoSecao;
  imagem?: ImagemSlot | null;
};

export function Dimensoes({ secao, origem, fundo = "areia", imagem }: Props) {
  const titulo = tituloDaSecao(secao);
  const medida = extrairMedida(titulo) ?? extrairMedida(secao.corpo.map((b) =>
    b.tipo === "paragrafo" ? b.trechos.map((t) => t.valor).join("") : "",
  ).join(" "));

  return (
    <SecaoLayout fundo={fundo}>
      <div
        className={`grid items-center gap-10 md:gap-16 ${imagem ? "md:grid-cols-2" : ""}`}
      >
        <div>
          {medida ? (
            <p className="font-titulo text-bordo-800 mb-6 text-[2.75rem] leading-none tracking-[-0.03em] md:text-7xl">
              {medida}
            </p>
          ) : null}
          <h2 className="titulo-secao">{titulo}</h2>
          <div className="mt-4">
            <ProseCliente blocos={prosaDaSecao(secao)} />
          </div>
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
