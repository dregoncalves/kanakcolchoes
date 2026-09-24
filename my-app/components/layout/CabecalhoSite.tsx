import { HOME } from "@/content/home";
import { cta } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Secao";
import { IconeWhatsApp } from "@/components/ui/IconeWhatsApp";
import { LinkWhatsApp } from "@/components/whatsapp/LinkWhatsApp";
import { Marca } from "./Marca";
import { MenuMobile } from "./MenuMobile";

/** Cabeçalho da Home: marca, âncoras da própria página e CTA de WhatsApp. */
export function CabecalhoSite() {
  return (
    <header className="relative border-b border-borda bg-surface-100">
      <Container className="flex h-16 items-center justify-between gap-4 md:h-22">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-vinho focus:px-4 focus:py-3 focus:text-label focus:text-surface-200"
        >
          Pular para o conteúdo
        </a>

        <Marca />

        <nav aria-label="Navegação principal" className="hidden gap-10 md:flex">
          {HOME.navegacao.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-ink no-underline hover:text-vinho"
            >
              {item.rotulo}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          {/* No celular o CTA é só o ícone; do desktop para cima mostra o texto. */}
          <LinkWhatsApp
            origem="header"
            rotuloAcessivel={`${cta("header").rotulo} no WhatsApp`}
            className="flex size-12 items-center justify-center gap-2 rounded-full bg-vinho text-surface-200 no-underline transition-colors hover:bg-vinho-700 md:w-auto md:rounded-md md:px-5 md:text-label"
          >
            <IconeWhatsApp className="size-[18px]" />
            <span className="hidden md:inline">{cta("header").rotulo}</span>
          </LinkWhatsApp>

          <MenuMobile itens={HOME.navegacao} />
        </div>
      </Container>
    </header>
  );
}
