import type { ReactNode } from "react";

type Fundo = "creme" | "branco" | "vinho" | "apricot";

const FUNDOS: Record<Fundo, string> = {
  creme: "bg-surface-100 text-ink",
  branco: "bg-surface-200 text-ink",
  vinho: "sobre-vinho bg-vinho text-on-dark",
  apricot: "bg-apricot-cream text-ink",
};

/**
 * Faixa de seção: cor de fundo + respiro vertical.
 * Padding de seção: 64px no celular, 96px no desktop (specs/design.md §5).
 *
 * A faixa não anima por conta própria. O gesto de cada seção fica no que
 * ela mostra (lençol, camadas, escala, série, cortina) — specs/design.md §9.
 */
export function Secao({
  id,
  fundo = "creme",
  className = "",
  children,
}: {
  id?: string;
  fundo?: Fundo;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`${FUNDOS[fundo]} py-16 md:py-24 ${className}`}>
      {children}
    </section>
  );
}

/** Largura máxima de leitura (~1200px) e margem lateral de 20px no celular. */
export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 md:px-10 ${className}`}>{children}</div>;
}
