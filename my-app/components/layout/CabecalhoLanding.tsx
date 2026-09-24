import { cta } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Secao";
import { IconeWhatsApp } from "@/components/ui/IconeWhatsApp";
import { LinkWhatsApp } from "@/components/whatsapp/LinkWhatsApp";
import { Marca } from "./Marca";

/** Cabeçalho da landing: só marca e CTA. Sem menu — todo clique vai ao WhatsApp. */
export function CabecalhoLanding() {
  return (
    <header className="cabecalho-lp sticky top-0 z-40 border-b border-borda bg-surface-200">
      <Container className="flex h-16 items-center justify-between gap-4 md:h-20">
        <Marca />

        <LinkWhatsApp
          origem="lp_header"
          rotuloAcessivel={`${cta("lp_header").rotulo} no WhatsApp`}
          className="lp-toque flex size-12 items-center justify-center gap-2 rounded-full border-[1.5px] border-vinho font-semibold text-vinho no-underline hover:bg-vinho hover:text-surface-200 md:w-auto md:rounded-md md:px-5 md:text-label"
        >
          <IconeWhatsApp className="size-[18px]" />
          <span className="hidden md:inline">{cta("lp_header").rotulo}</span>
        </LinkWhatsApp>
      </Container>
    </header>
  );
}
