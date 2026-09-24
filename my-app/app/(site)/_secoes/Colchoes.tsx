import { HOME } from "@/content/home";
import { MODELOS, TAMANHOS } from "@/content/produtos";
import { Container, Secao } from "@/components/ui/Secao";
import { CardModelo } from "@/components/produto/CardModelo";
import { CardTamanho } from "@/components/produto/CardTamanho";
import { BotaoWhatsApp } from "@/components/whatsapp/BotaoWhatsApp";
import { Revela } from "@/components/motion/Revela";

/**
 * Seção 4 · Conheça nossos colchões. Âncora do menu: #colchoes.
 * No celular, tamanhos e modelos deslizam para o lado.
 */
export function Colchoes() {
  return (
    <Secao id="colchoes" fundo="branco">
      <Container className="flex flex-col gap-10 md:gap-14">
        <div className="grid gap-4 md:grid-cols-[1fr_1.3fr] md:items-end md:gap-16">
          <h2 className="font-display text-display-lg">{HOME.colchoes.titulo}</h2>
          <div className="flex flex-col gap-3">
            <p className="text-body text-ink-60">{HOME.colchoes.paragrafo1}</p>
            <p className="text-body text-ink-60">{HOME.colchoes.paragrafo2}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-6">
          <h3 className="font-display text-display-md">{HOME.colchoes.tituloTamanhos}</h3>
          <Revela
            className="trilho grade -mx-5 gap-3 px-5 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:px-0 lg:grid-cols-4"
            classeItem="w-[270px] md:w-auto"
          >
            {TAMANHOS.map((tamanho) => (
              <CardTamanho
                  key={tamanho.nome}
                  nome={tamanho.nome}
                  medida={tamanho.medida}
                  descricao={tamanho.descricao}
                  camas={[
                    {
                      larguraCm: tamanho.larguraCm,
                      comprimentoCm: tamanho.comprimentoCm,
                      travesseiros: tamanho.travesseiros,
                    },
                  ]}
                  origem={tamanho.origemCard}
                />
            ))}
          </Revela>
        </div>

        <div className="flex flex-col gap-4 md:gap-6">
          <h3 className="font-display text-display-md">{HOME.colchoes.tituloModelos}</h3>
          <Revela
            className="trilho grade -mx-5 gap-3 px-5 md:mx-0 md:grid md:grid-cols-2 md:gap-8 md:px-0 lg:grid-cols-3"
            classeItem="w-[280px] md:w-auto"
          >
            {MODELOS.map((modelo) => (
              <CardModelo
                key={modelo.nome}
                nome={modelo.nome}
                descricao={modelo.descricaoHome}
                foto={modelo.foto}
                origem={modelo.origemHome}
              />
            ))}
          </Revela>
        </div>

        <BotaoWhatsApp origem="colchoes" larguraTotal className="md:self-center" />
      </Container>
    </Secao>
  );
}
