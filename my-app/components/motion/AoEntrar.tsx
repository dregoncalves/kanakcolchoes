"use client";

import { type ReactNode } from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";

type Gesto = "cortina" | "numero";

const EASE = [0.16, 1, 0.3, 1] as const;

const CHEIO = {
  cortina: {
    initial: { clipPath: "inset(10% 10% 10% 10%)" },
    animate: { clipPath: "inset(0% 0% 0% 0%)" },
    duration: 0.75,
  },
  numero: {
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    duration: 0.7,
  },
} as const;

/**
 * Entrada de um bloco que não é lista. O gesto diz o que a seção está
 * fazendo: a foto do showroom abre (`cortina`) e o 1/3 assenta (`numero`).
 * O lençol do fechamento fica no CSS (`.lencol-ao-rolar`): pelo script o
 * recorte aplicava o estado inicial e a animação não disparava.
 *
 * Com redução de movimento some o deslocamento e o recorte; fica uma
 * opacidade curta. Se o script não rodar, o estado inicial não existe e o
 * conteúdo permanece visível.
 */
export function AoEntrar({
  gesto,
  children,
  className = "",
}: {
  gesto: Gesto;
  children: ReactNode;
  className?: string;
}) {
  const semMovimento = useReducedMotion();
  const cheio = CHEIO[gesto];

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        className={className}
        initial={semMovimento ? { opacity: gesto === "cortina" ? 0.65 : 0 } : cheio.initial}
        whileInView={semMovimento ? { opacity: 1 } : cheio.animate}
        viewport={{ once: true, amount: 0.01 }}
        transition={{
          duration: semMovimento ? 0.22 : cheio.duration,
          ease: EASE,
        }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
