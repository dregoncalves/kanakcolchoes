import { CtaWhatsApp, type VarianteCta } from "@/components/primitivos/CtaWhatsApp";
import type { Cta } from "@/lib/conteudo-modelo";
import type { OrigemWhatsApp } from "@/lib/whatsapp";

type Props = {
  ctas: Cta[];
  origem: OrigemWhatsApp;
  variante?: VarianteCta;
  className?: string;
};

export function CtasDaSecao({
  ctas,
  origem,
  variante = "primario",
  className = "ctas-da-secao mt-8 flex flex-col gap-3 md:flex-row md:flex-wrap",
}: Props) {
  if (ctas.length === 0) return null;
  return (
    <div className={className}>
      {ctas.map((cta, i) => (
        <CtaWhatsApp
          key={`${cta.texto}-${i}`}
          texto={cta.texto}
          origem={{
            ...origem,
            secao: cta.secundario ? `${origem.secao}-secundario` : origem.secao,
          }}
          variante={cta.secundario ? "secundario" : variante}
        />
      ))}
    </div>
  );
}
