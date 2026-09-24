import { HOME } from "@/content/home";
import { TECNOLOGIAS } from "@/content/produtos";
import { Container, Secao } from "@/components/ui/Secao";
import { CardTecnologia } from "@/components/produto/CardTecnologia";
import { EscalaFirmeza } from "@/components/produto/EscalaFirmeza";
import { BotaoWhatsApp } from "@/components/whatsapp/BotaoWhatsApp";
import { Revela } from "@/components/motion/Revela";

/** Seção 3 · Qual colchão combina com você? Âncora do menu: #como-escolher. */
export function ComoEscolher() {
  return (
    <Secao id="como-escolher" fundo="creme">
      <Container className="grid gap-8 md:grid-cols-2 md:gap-20">
        <div className="flex flex-col gap-4 md:gap-5">
          <h2 className="font-display text-display-lg">{HOME.comoEscolher.titulo}</h2>
          <p className="text-body text-ink-60">{HOME.comoEscolher.paragrafo1}</p>
          <p className="text-body text-ink-60">{HOME.comoEscolher.paragrafo2}</p>

          {/* no celular os cards vêm antes da escala, como na prancheta mobile */}
          <Revela className="flex flex-col gap-3 md:hidden">
            {TECNOLOGIAS.map((tecnologia) => (
              <CardTecnologia key={tecnologia.nome} {...tecnologia} />
            ))}
          </Revela>

          <div className="flex flex-col gap-3.5 rounded-2xl border border-borda bg-surface-200 p-5 md:mt-3 md:gap-4 md:p-7">
            <p className="text-body-sm text-ink md:text-body">{HOME.comoEscolher.firmezaIntro}</p>
            <EscalaFirmeza />
          </div>

          <p className="font-display text-[26px] leading-8 md:mt-3 md:text-display-md">
            {HOME.comoEscolher.fecho}
          </p>
          <BotaoWhatsApp origem="como_escolher" larguraTotal className="md:self-start" />
        </div>

        <Revela className="hidden flex-col justify-center gap-5 md:flex">
          {TECNOLOGIAS.map((tecnologia) => (
            <CardTecnologia key={tecnologia.nome} {...tecnologia} />
          ))}
        </Revela>
      </Container>
    </Secao>
  );
}
