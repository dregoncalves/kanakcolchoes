import { HOME } from "@/content/home";
import { TELEFONES_DUVIDAS } from "@/content/ctas";
import { cta } from "@/lib/whatsapp";
import { Container, Secao } from "@/components/ui/Secao";
import { IconeWhatsApp } from "@/components/ui/IconeWhatsApp";
import { BotaoWhatsApp } from "@/components/whatsapp/BotaoWhatsApp";
import { Revela } from "@/components/motion/Revela";
import { LinkWhatsApp } from "@/components/whatsapp/LinkWhatsApp";

/** Seção 8 · Dúvidas. Âncora do menu: #contato. Os três telefones aparecem aqui. */
export function Duvidas() {
  return (
    <Secao id="contato" fundo="apricot">
      <Container className="flex flex-col gap-4 md:items-center md:gap-5 md:text-center">
        <h2 className="max-w-[820px] font-display text-display-lg">{HOME.duvidas.titulo}</h2>
        <p className="max-w-[760px] text-body-lg text-ink">{HOME.duvidas.paragrafo1}</p>
        <p className="max-w-[760px] text-body text-[color-mix(in_srgb,var(--ink)_82%,var(--apricot-700))]">
          {HOME.duvidas.paragrafo2}
        </p>
        <p className="max-w-[760px] text-body text-[color-mix(in_srgb,var(--ink)_82%,var(--apricot-700))]">
          {HOME.duvidas.paragrafo3}
        </p>

        <p className="mt-2 text-body-sm font-semibold text-ink">{HOME.duvidas.canais}</p>
        <Revela className="flex flex-col gap-2 md:flex-row md:flex-wrap md:justify-center md:gap-4">
          {TELEFONES_DUVIDAS.map((origem) => (
            <LinkWhatsApp
              key={origem}
              origem={origem}
              rotuloAcessivel={`Tirar dúvidas no WhatsApp ${cta(origem).rotulo}`}
              className="recuo-no-toque flex min-h-13 items-center gap-2.5 rounded-full bg-surface-100 px-5 text-base font-semibold text-ink no-underline transition-colors hover:bg-surface-200"
            >
              <IconeWhatsApp />
              {cta(origem).rotulo}
            </LinkWhatsApp>
          ))}
        </Revela>

        <BotaoWhatsApp origem="duvidas" tamanho="destaque" larguraTotal className="mt-3 md:w-auto" />
      </Container>
    </Secao>
  );
}
