"use client";

import { type ReactNode } from "react";
import { AnimatePresence, LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";

type Origem = "pe" | "topo";

const DE = {
  pe: { opacity: 0, y: "100%" },
  topo: { opacity: 0, y: -8 },
} as const;

/**
 * Entrada e saída de sobreposições que aparecem e somem: o aviso de cookies
 * (vem do pé da tela) e o menu do celular (abre a partir do cabeçalho).
 *
 * Com `AnimatePresence` a saída também é animada — antes o elemento era
 * desmontado na hora e o fechamento era seco.
 */
export function Aparicao({
  aberto,
  de,
  className = "",
  children,
  ...resto
}: {
  aberto: boolean;
  de: Origem;
  className?: string;
  children: ReactNode;
} & Record<string, unknown>) {
  const semMovimento = useReducedMotion();
  const oculto = DE[de];

  return (
    <LazyMotion features={domAnimation} strict>
      <AnimatePresence>
        {aberto && (
          <m.div
            className={className}
            initial={semMovimento ? false : oculto}
            animate={{ opacity: 1, y: 0 }}
            exit={semMovimento ? { opacity: 0 } : oculto}
            transition={{
              duration: de === "pe" ? 0.42 : 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            {...resto}
          >
            {children}
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}
