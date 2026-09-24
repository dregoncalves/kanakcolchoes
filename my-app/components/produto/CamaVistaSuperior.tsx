"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";

/**
 * Cama vista de cima, desenhada em código (o wireframe não usa foto aqui).
 * A escala sai das medidas reais: o King (193 x 203 cm) ocupa a altura máxima
 * e os outros tamanhos encolhem na mesma proporção, então os quatro cards
 * comparam tamanho de verdade.
 *
 * Ao entrar na tela o desenho assenta nessa proporção, a partir da base.
 * O tamanho em layout não muda — só a escala visual — então os cards não pulam.
 */
const REFERENCIA = { larguraCm: 193, comprimentoCm: 203 };
const EASE = [0.16, 1, 0.3, 1] as const;

export function CamaVistaSuperior({
  larguraCm,
  comprimentoCm,
  travesseiros,
  alturaMax,
}: {
  larguraCm: number;
  comprimentoCm: number;
  travesseiros: 1 | 2;
  /** Altura, em px, que o King ocupa neste contexto. */
  alturaMax: number;
}) {
  const semMovimento = useReducedMotion();
  const escala = alturaMax / REFERENCIA.comprimentoCm;
  const largura = Math.round(larguraCm * escala);
  const altura = Math.round(comprimentoCm * escala);

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        aria-hidden="true"
        style={{ width: largura, height: altura, transformOrigin: "center bottom" }}
        className="flex gap-1.5 rounded-lg border-2 border-vinho bg-surface-200 p-1.5"
        initial={semMovimento ? false : { scale: 0.92 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: semMovimento ? 0 : 0.52, ease: EASE }}
      >
        {Array.from({ length: travesseiros }, (_, indice) => (
          <span key={indice} className="h-3.5 grow rounded-sm bg-apricot-cream" />
        ))}
      </m.div>
    </LazyMotion>
  );
}
