import Image from "next/image";
import { HOME } from "@/content/home";
import { Container, Secao } from "@/components/ui/Secao";
import { AoEntrar } from "@/components/motion/AoEntrar";
import { BotaoWhatsApp } from "@/components/whatsapp/BotaoWhatsApp";

/** Seção 7 · Showroom. Única faixa vinho da Home (a 6 não existe no wireframe). */
export function Showroom() {
  return (
    <Secao fundo="vinho">
      <Container className="grid items-center gap-5 md:grid-cols-2 md:gap-20">
        <div className="relative h-60 overflow-hidden rounded-lg md:h-125">
          <AoEntrar gesto="cortina" className="absolute inset-0">
            <Image
              src={HOME.showroom.foto.src}
              alt={HOME.showroom.foto.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </AoEntrar>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="font-display text-display-lg text-apricot-cream">
            {HOME.showroom.titulo}
          </h2>
          <p className="text-body text-on-dark">{HOME.showroom.paragrafo1}</p>
          <p className="text-body text-on-dark-muted">{HOME.showroom.paragrafo2}</p>
          <BotaoWhatsApp
            origem="showroom"
            variante="apricot"
            larguraTotal
            className="mt-1 md:self-start"
          />
        </div>
      </Container>
    </Secao>
  );
}
