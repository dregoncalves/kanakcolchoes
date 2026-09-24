"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
import { FIRMEZA } from "@/content/produtos";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Macio → Extrafirme. A barra cresce da esquerda; o texto acompanha a cor. */
export function EscalaFirmeza() {
  const semMovimento = useReducedMotion();
  const cores = ["bg-apricot-cream", "bg-apricot-700", "bg-vinho", "bg-vinho-700"];

  return (
    <LazyMotion features={domAnimation} strict>
      <ul className="grid grid-cols-4 gap-1.5">
        {FIRMEZA.map((nivel, indice) => (
          <li key={nivel} className="flex flex-col gap-2">
            <m.span
              aria-hidden="true"
              className={`h-2.5 origin-left rounded-full ${cores[indice]}`}
              initial={semMovimento ? { opacity: 0.45 } : { scaleX: 0 }}
              whileInView={semMovimento ? { opacity: 1 } : { scaleX: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{
                duration: semMovimento ? 0.22 : 0.5,
                delay: semMovimento ? 0 : indice * 0.07,
                ease: EASE,
              }}
            />
            <span className="text-[11px] font-semibold md:text-[13px]">{nivel}</span>
          </li>
        ))}
      </ul>
    </LazyMotion>
  );
}
