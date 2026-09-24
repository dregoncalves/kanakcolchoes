import { LANDING } from "@/content/landing";
import { Container } from "@/components/ui/Secao";
import { AoEntrar } from "@/components/motion/AoEntrar";
import { BotaoWhatsApp } from "@/components/whatsapp/BotaoWhatsApp";

/** Seção 2 · Acordar Cansado Não É Normal. Sem imagem: o "1/3" é tipografia. */
export function Problema() {
  const { problema } = LANDING;

  return (
    <section className="bg-surface-100 px-0 pt-16 pb-14 md:pt-28 md:pb-24">
      <Container className="flex flex-col gap-7 md:gap-14">
        <h2 className="max-w-[1000px] font-display text-display-lg md:text-[58px] md:leading-[62px]">
          {problema.tituloInicio}
          <em className="text-vinho italic">{problema.tituloRealce}</em>
        </h2>

        <div className="grid gap-7 border-t border-borda pt-6 md:grid-cols-[380px_minmax(0,1fr)] md:items-start md:gap-20 md:pt-10">
          <div className="flex items-center gap-4 border-b border-borda pb-5 md:flex-col md:items-start md:gap-2 md:border-0 md:pb-0">
            <AoEntrar gesto="numero" className="w-fit">
              <span className="font-display text-[88px] leading-20 text-vinho md:text-[160px] md:leading-35">
                {problema.numero}
              </span>
            </AoEntrar>
            <span className="text-base leading-6 font-semibold md:text-body-lg">
              {problema.legendaNumero}
            </span>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-[17px] leading-7 text-ink md:text-[19px] md:leading-[30px]">
              {problema.paragrafo1}
            </p>
            <p className="text-[17px] leading-7 text-ink-60 md:text-[19px] md:leading-[30px]">
              {problema.paragrafo2}
            </p>
            <BotaoWhatsApp origem="lp_problema" larguraTotal className="mt-1 md:self-start" />
          </div>
        </div>
      </Container>
    </section>
  );
}
