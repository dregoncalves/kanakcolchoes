/**
 * Logotipo em texto, como nas pranchetas (specs/design.md §8).
 * `logo.webp` volta quando existir SVG ou PNG transparente em alta resolução.
 * Com a Instrument Sans o wordmark usa o peso 700 e tracking fechado, para
 * não se confundir com um título comum.
 */
export function Marca({ tom = "claro" }: { tom?: "claro" | "escuro" }) {
  const nome = tom === "claro" ? "text-vinho" : "text-apricot-cream";
  const complemento = tom === "claro" ? "text-ink-60" : "text-on-dark-muted";

  return (
    <span className="inline-flex items-baseline gap-2">
      <span className={`font-display text-[26px] leading-none font-bold tracking-[-0.045em] md:text-[31px] ${nome}`}>
        Kanak
      </span>
      <span
        className={`font-sans text-[10px] font-medium tracking-[0.14em] uppercase md:text-xs ${complemento}`}
      >
        Colchões
      </span>
    </span>
  );
}
