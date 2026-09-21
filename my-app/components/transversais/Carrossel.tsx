"use client";

import { useRef, useState, type ReactNode, type UIEvent } from "react";

type Props = {
  children: ReactNode;
  rotulo?: string;
  colunas?: 3 | 4;
};

export function Carrossel({ children, rotulo = "Carrossel", colunas = 3 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [noInicio, setNoInicio] = useState(true);
  const [noFim, setNoFim] = useState(false);
  const [progresso, setProgresso] = useState(0);

  function atualizarLimites(el: HTMLDivElement) {
    const max = el.scrollWidth - el.clientWidth;
    setNoInicio(el.scrollLeft <= 0);
    setNoFim(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
    if (max > 0) {
      setProgresso(Math.min(100, Math.max(0, (el.scrollLeft / max) * 100)));
    }
  }

  function rolar(dir: number) {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  }

  return (
    <div className="relative">
      <div
        ref={ref}
        role="region"
        aria-label={rotulo}
        onScroll={(e: UIEvent<HTMLDivElement>) => atualizarLimites(e.currentTarget)}
        className={`flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:overflow-visible md:pb-0 ${
          colunas === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"
        }`}
      >
        {children}
      </div>
      <div className="mt-5 flex items-center justify-between gap-4 md:hidden">
        <div className="bg-linha/60 h-1 flex-1 overflow-hidden rounded-full" aria-hidden>
          <div
            className="bg-ouro-500 h-full transition-[width] duration-150 ease-out"
            style={{ width: `${Math.max(18, progresso)}%` }}
          />
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="border-linha bg-papel text-tinta-700 hover:border-bordo-700 hover:text-bordo-700 inline-flex size-10 items-center justify-center rounded-sm border text-lg transition-all duration-200 active:scale-95 disabled:pointer-events-none disabled:opacity-30"
            onClick={() => rolar(-1)}
            disabled={noInicio}
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            type="button"
            className="border-linha bg-papel text-tinta-700 hover:border-bordo-700 hover:text-bordo-700 inline-flex size-10 items-center justify-center rounded-sm border text-lg transition-all duration-200 active:scale-95 disabled:pointer-events-none disabled:opacity-30"
            onClick={() => rolar(1)}
            disabled={noFim}
            aria-label="Próximo"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
