import { LANDING } from "@/content/landing";
import { Container, Secao } from "@/components/ui/Secao";
import { BotaoWhatsApp } from "@/components/whatsapp/BotaoWhatsApp";

/**
 * Seção 5 · Sua Nova Rotina de Sono Começa Hoje!
 * O prazo da campanha entra no lugar de {prazo}. Enquanto o cliente não
 * informar a data, fica o marcador [DATA] — e a landing não pode publicar.
 */
export function Fechamento({ prazo }: { prazo: string | null }) {
  const { fechamento } = LANDING;
  const textoSecundario = "text-[color-mix(in_srgb,var(--ink)_82%,var(--apricot-700))]";

  return (
    <Secao fundo="apricot">
      <Container className="flex flex-col gap-4 md:items-center md:gap-5 md:text-center">
        <h2 className="lencol-ao-rolar max-w-[900px] font-display text-display-xl">
          {fechamento.tituloInicio}
          <em className="text-vinho italic">{fechamento.tituloRealce}</em>
        </h2>
        <p className="max-w-[760px] text-body-lg font-semibold text-vinho md:text-[21px] md:leading-[30px]">
          {fechamento.apoio}
        </p>

        <div className="mt-1 flex max-w-[760px] flex-col gap-3.5">
          <p className={`text-[17px] leading-7 ${textoSecundario}`}>{fechamento.paragrafo1}</p>
          <p className={`text-[17px] leading-7 ${textoSecundario}`}>
            {fechamento.paragrafo2.replace("{prazo}", prazo ?? "[DATA]")}
          </p>
          <p className="text-[17px] leading-7 text-ink">{fechamento.paragrafo3}</p>
        </div>

        <BotaoWhatsApp
          origem="lp_fechamento"
          tamanho="destaque"
          larguraTotal
          className="mt-3 md:w-auto"
        />
      </Container>
    </Secao>
  );
}
