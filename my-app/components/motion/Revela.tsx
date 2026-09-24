"use client";

import { type ReactNode } from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";

/**
 * Entrada em série para conteúdo que É uma lista (trilhos de tamanhos,
 * modelos, argumentos, depoimentos, telefones). Cada filho entra um pouco
 * depois do anterior, com o atraso limitado a quatro passos.
 *
 * `eixo="y"` assenta o item. `eixo="x"` entra pela lateral — usado na grade
 * de argumentos, que se alinha em duas colunas e não é um trilho.
 *
 * `LazyMotion` + `domAnimation` carrega só o subconjunto de animação de DOM
 * (~18 kB em vez dos ~30 kB do pacote completo): a landing vem de anúncio no
 * celular e cada kB antes do primeiro CTA é dinheiro.
 *
 * Os filhos chegam prontos do servidor via `children`: o HTML continua
 * renderizado no build, só o envelope de animação é cliente.
 */
export function Revela({
  children,
  className = "",
  classeItem = "",
  como: Como = "ul",
  eixo = "y",
}: {
  children: ReactNode[];
  className?: string;
  /** Classes de cada item (largura do card no trilho, por exemplo). */
  classeItem?: string;
  /** `ul` por padrão; `div` quando o contexto não for lista. */
  como?: "ul" | "div";
  /** `y` assenta; `x` entra pela lateral. */
  eixo?: "y" | "x";
}) {
  const semMovimento = useReducedMotion();
  const Item = Como === "ul" ? m.li : m.div;
  const inicial = semMovimento
    ? { opacity: 0 }
    : eixo === "x"
      ? { opacity: 0, x: 18 }
      : { opacity: 0, y: 12 };
  const visivel = semMovimento ? { opacity: 1 } : eixo === "x" ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 };

  return (
    <LazyMotion features={domAnimation} strict>
      <Como className={className}>
        {children.map((filho, indice) => (
          <Item
            key={indice}
            className={classeItem}
            initial={inicial}
            whileInView={visivel}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: semMovimento ? 0.22 : 0.45,
              delay: semMovimento ? 0 : Math.min(indice, 3) * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {filho}
          </Item>
        ))}
      </Como>
    </LazyMotion>
  );
}
