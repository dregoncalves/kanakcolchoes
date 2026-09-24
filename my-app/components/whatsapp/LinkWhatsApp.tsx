import type { ReactNode } from "react";
import { cta, linkWhatsApp } from "@/lib/whatsapp";
import type { Origem } from "@/content/ctas";

/**
 * Âncora de WhatsApp. Server Component de propósito: o clique é medido por
 * um único listener delegado (components/analytics/RastreioCliques.tsx),
 * então nenhum botão do site carrega JavaScript próprio.
 */
export function LinkWhatsApp({
  origem,
  className = "",
  rotuloAcessivel,
  children,
}: {
  origem: Origem;
  className?: string;
  /** Use quando o conteúdo visível não descreve o destino sozinho (cards). */
  rotuloAcessivel?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={linkWhatsApp(origem)}
      data-origem={origem}
      target="_blank"
      rel="noopener"
      aria-label={rotuloAcessivel ?? cta(origem).rotulo}
      className={className}
    >
      {children}
    </a>
  );
}
