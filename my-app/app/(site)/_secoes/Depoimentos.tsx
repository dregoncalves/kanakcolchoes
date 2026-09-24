import { HOME } from "@/content/home";
import { DEPOIMENTOS } from "@/content/produtos";
import { Container, Secao } from "@/components/ui/Secao";
import { CarrosselDepoimentos } from "@/components/depoimentos/CarrosselDepoimentos";
import { BotaoWhatsApp } from "@/components/whatsapp/BotaoWhatsApp";

/** Seção 5 · Depoimentos. Só avaliações reais, com autorização. */
export function Depoimentos() {
  return (
    <Secao fundo="creme">
      <Container className="flex flex-col gap-6 md:gap-10">
        <h2 className="max-w-[900px] font-display text-display-lg">{HOME.depoimentos.titulo}</h2>
        <div className="grid gap-4 md:grid-cols-2 md:gap-16">
          <p className="text-body text-ink-60">{HOME.depoimentos.paragrafo1}</p>
          <p className="text-body text-ink-60">{HOME.depoimentos.paragrafo2}</p>
        </div>
        <CarrosselDepoimentos depoimentos={DEPOIMENTOS} />
        <BotaoWhatsApp origem="depoimentos" larguraTotal className="md:self-center" />
      </Container>
    </Secao>
  );
}
