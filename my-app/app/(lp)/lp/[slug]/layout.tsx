import { CabecalhoLanding } from "@/components/layout/CabecalhoLanding";
import { Rodape } from "@/components/layout/Rodape";
import { BarraFixaWhatsApp } from "@/components/whatsapp/BarraFixaWhatsApp";
import { TELEFONES_RODAPE_LP } from "@/content/ctas";

/**
 * Layout da landing de anúncio: separado do site, sem menu de navegação.
 * O padding inferior reserva o espaço da barra fixa do celular, para que ela
 * nunca cubra o último conteúdo nem o rodapé.
 */
export default function LayoutLanding({ children }: LayoutProps<"/lp/[slug]">) {
  return (
    <div className="pb-24 md:pb-0">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-vinho focus:px-4 focus:py-3 focus:text-label focus:text-surface-200"
      >
        Pular para o conteúdo
      </a>
      <CabecalhoLanding />
      <main id="conteudo">{children}</main>
      <Rodape origensTelefone={TELEFONES_RODAPE_LP} />
      <BarraFixaWhatsApp />
    </div>
  );
}
