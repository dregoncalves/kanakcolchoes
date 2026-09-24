import { LANDING } from "@/content/landing";
import { DEPOIMENTOS } from "@/content/produtos";
import { Container, Secao } from "@/components/ui/Secao";
import { CarrosselDepoimentos } from "@/components/depoimentos/CarrosselDepoimentos";
import { BotaoWhatsApp } from "@/components/whatsapp/BotaoWhatsApp";
import { IconeArgumento } from "@/components/ui/IconeArgumento";
import { Revela } from "@/components/motion/Revela";

/** Seção 4 · Por Que a Kanak É a Escolha Certa? Quatro argumentos + prova social. */
export function PorQueKanak() {
  return (
    <Secao fundo="creme">
      <Container className="flex flex-col gap-8 md:gap-12">
        <div className="flex max-w-[900px] flex-col gap-4">
          <h2 className="font-display text-display-lg">{LANDING.porQue.titulo}</h2>
          <p className="text-body-lg font-medium text-apricot-700 md:text-xl md:leading-[30px]">
            {LANDING.porQue.apoio}
          </p>
        </div>

        <Revela className="grid gap-4 overflow-x-clip md:grid-cols-2 md:gap-6" classeItem="h-full" eixo="x">
          {LANDING.porQue.argumentos.map((argumento) => (
            <div
              key={argumento.titulo}
              className="grid h-full grid-cols-[56px_minmax(0,1fr)] gap-5 rounded-lg border border-borda bg-surface-200 p-6 md:p-8"
            >
              <span className="flex size-14 items-center justify-center rounded-full bg-surface-100 text-vinho">
                <IconeArgumento nome={argumento.icone} />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-display-sm">{argumento.titulo}</h3>
                <p className="text-body-sm text-ink-60">{argumento.texto}</p>
              </div>
            </div>
          ))}
        </Revela>

        <CarrosselDepoimentos depoimentos={DEPOIMENTOS} variante="landing" />

        <BotaoWhatsApp origem="lp_especialistas" larguraTotal className="md:self-center" />
      </Container>
    </Secao>
  );
}
