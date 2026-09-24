import { HOME } from "@/content/home";
import { Container, Secao } from "@/components/ui/Secao";
import { DiagramaCamadas } from "@/components/produto/DiagramaCamadas";
import { BotaoWhatsApp } from "@/components/whatsapp/BotaoWhatsApp";

/** Seção 2 · A Ciência do Conforto. Camadas desenhadas + texto + CTA. */
export function Ciencia() {
  return (
    <Secao fundo="branco">
      <Container className="grid items-center gap-8 md:grid-cols-2 md:gap-20">
        <DiagramaCamadas />
        <div className="flex flex-col gap-5">
          <h2 className="font-display text-display-lg">{HOME.ciencia.titulo}</h2>
          <p className="text-body text-ink-60">{HOME.ciencia.paragrafo1}</p>
          <p className="text-body text-ink-60">{HOME.ciencia.paragrafo2}</p>
          <BotaoWhatsApp origem="ciencia" larguraTotal className="mt-1 md:self-start" />
        </div>
      </Container>
    </Secao>
  );
}
