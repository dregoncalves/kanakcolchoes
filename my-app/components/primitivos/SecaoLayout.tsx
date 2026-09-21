"use client";

import { useEffect, useRef, type ReactNode } from "react";

export type FundoSecao = "claro" | "areia" | "escuro";

type Alinhamento = "inicio" | "centro";

type Props = {
  id?: string;
  fundo?: FundoSecao;
  compacta?: boolean;
  fechamento?: boolean;
  animar?: boolean;
  alinhamento?: Alinhamento;
  children: ReactNode;
  className?: string;
};

const FUNDO: Record<FundoSecao, string> = {
  claro: "bg-papel text-tinta-700",
  areia: "bg-areia-100 text-tinta-700",
  escuro: "bg-bordo-900 text-areia-100",
};

export function SecaoLayout({
  id,
  fundo = "claro",
  compacta = false,
  fechamento = false,
  animar = true,
  alinhamento = "inicio",
  children,
  className = "",
}: Props) {
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = innerRef.current;
    if (!el || !animar) return;

    // Respeita prefers-reduced-motion — CSS já garante visibilidade,
    // mas evitamos o observer também para não adicionar a classe desnecessariamente
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    el.classList.add("secao-entrada");

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("secao-visivel");
            obs.unobserve(el);
          }
        }
      },
      { threshold: 0.08 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [animar]);

  const padding = compacta
    ? "py-12 md:py-20"
    : fechamento
      ? "py-24 md:py-40"
      : "py-16 md:py-28";

  return (
    <section
      id={id}
      className={`${FUNDO[fundo]} ${padding} px-5 md:px-6 lg:px-8 ${className}`}
    >
      <div
        ref={innerRef}
        className={`mx-auto max-w-[1200px] ${fundo === "escuro" ? "escuro-secao [&_h1]:text-papel [&_h2]:text-papel [&_h3]:text-papel" : ""} ${
          alinhamento === "centro" ? "secao-centro flex flex-col items-center text-center" : ""
        }`}
      >
        {children}
      </div>
    </section>
  );
}
