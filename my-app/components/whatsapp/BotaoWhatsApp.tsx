import { cta } from "@/lib/whatsapp";
import type { Origem } from "@/content/ctas";
import { IconeWhatsApp } from "@/components/ui/IconeWhatsApp";
import { LinkWhatsApp } from "./LinkWhatsApp";

type Variante = "principal" | "apricot" | "contorno";
type Tamanho = "compacto" | "secao" | "destaque";

const VARIANTES: Record<Variante, string> = {
  principal: "bg-vinho text-surface-200 hover:bg-vinho-700",
  apricot: "bg-apricot-cream text-vinho hover:bg-[color-mix(in_srgb,var(--apricot-cream)_88%,var(--ink))]",
  contorno: "border-[1.5px] border-vinho text-vinho hover:bg-vinho hover:text-surface-200",
};

// Alturas dos wireframes (specs/design.md §6).
const TAMANHOS: Record<Tamanho, string> = {
  compacto: "min-h-12 px-5 py-2 text-label",
  secao: "min-h-14 px-7 py-2.5 text-base",
  destaque: "min-h-15 px-8 py-3 text-base md:min-h-16 md:text-lg",
};

/** CTA de WhatsApp. O texto vem do Mapa de CTAs — não passar rótulo solto. */
export function BotaoWhatsApp({
  origem,
  variante = "principal",
  tamanho = "secao",
  larguraTotal = false,
  className = "",
}: {
  origem: Origem;
  variante?: Variante;
  tamanho?: Tamanho;
  /** No celular os CTAs de seção ocupam a largura toda (wireframe mobile). */
  larguraTotal?: boolean;
  className?: string;
}) {
  return (
    <LinkWhatsApp
      origem={origem}
      className={[
        // `text-balance` e o padding no lugar de largura fixa deixam o rótulo
        // crescer sem estourar o botão (rótulos vêm do Mapa de CTAs).
        "recuo-no-toque inline-flex items-center justify-center gap-2.5 rounded-md text-center font-semibold text-balance no-underline transition-colors",
        VARIANTES[variante],
        TAMANHOS[tamanho],
        larguraTotal ? "flex w-full md:inline-flex md:w-auto" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <IconeWhatsApp className={tamanho === "compacto" ? "size-[18px]" : "size-5"} />
      {cta(origem).rotulo}
    </LinkWhatsApp>
  );
}
