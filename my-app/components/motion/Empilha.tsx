"use client";

import { Children, type ReactNode } from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * As camadas do colchão assentam de baixo para cima: a base chega primeiro,
 * a cobertura por último. O atraso cabe em três passos.
 */
export function Empilha({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const semMovimento = useReducedMotion();
  const itens = Children.toArray(children);
  const ultimo = Math.max(itens.length - 1, 0);

  return (
    <LazyMotion features={domAnimation} strict>
      <ul className={className}>
        {itens.map((filho, indice) => (
          <m.li
            key={indice}
            initial={semMovimento ? { opacity: 0 } : { opacity: 0, y: 16 }}
            whileInView={semMovimento ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: semMovimento ? 0.22 : 0.55,
              delay: semMovimento ? 0 : Math.min(ultimo - indice, 3) * 0.1,
              ease: EASE,
            }}
          >
            {filho}
          </m.li>
        ))}
      </ul>
    </LazyMotion>
  );
}
