import { LANDING } from "@/content/landing";
import { MODELOS, TAMANHOS_LANDING } from "@/content/produtos";
import { Container, Secao } from "@/components/ui/Secao";
import { CardModelo } from "@/components/produto/CardModelo";
import { CardTamanhoLanding } from "@/components/produto/CardTamanhoLanding";
import { BotaoWhatsApp } from "@/components/whatsapp/BotaoWhatsApp";
import { Revela } from "@/components/motion/Revela";

/** Seção 3 · Modelos & Tecnologias. No celular, os modelos deslizam. */
export function ModelosTecnologias() {
  return (
    <Secao fundo="branco">
      <Container className="flex flex-col gap-8 md:gap-12">
        <div className="flex max-w-[900px] flex-col gap-3.5">
          <p className="text-caption font-semibold tracking-[0.1em] uppercase text-apricot-700">
            {LANDING.modelos.sobretitulo}
          </p>
          <h2 className="font-display text-display-lg">{LANDING.modelos.titulo}</h2>
        </div>

        <Revela className="grid gap-4 md:grid-cols-3 md:gap-6">
          {TAMANHOS_LANDING.map((tamanho) => (
            <CardTamanhoLanding key={tamanho.nome} {...tamanho} />
          ))}
        </Revela>

        <div className="flex flex-col gap-4 md:gap-6">
          <h3 className="font-display text-display-md">{LANDING.modelos.tituloTecnologia}</h3>
          <Revela
            className="trilho grade -mx-5 gap-3 px-5 md:mx-0 md:grid md:grid-cols-3 md:gap-8 md:px-0"
            classeItem="w-[290px] md:w-auto"
          >
            {MODELOS.map((modelo) => (
              <CardModelo
                key={modelo.nome}
                nome={modelo.nomeLanding}
                descricao={modelo.descricaoLanding}
                foto={modelo.foto}
                origem={modelo.origemLanding}
                alturaFoto="h-60 md:h-75"
              />
            ))}
          </Revela>
        </div>

        <BotaoWhatsApp origem="lp_modelos" larguraTotal className="md:self-center" />
      </Container>
    </Secao>
  );
}
