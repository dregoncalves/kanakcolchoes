import Image from "next/image";

/**
 * No fundo claro, a marca é o arquivo `logo.webp`.
 * No rodapé vinho o arquivo não serve: o fundo branco é opaco e não há
 * versão para fundo escuro, então fica o wordmark.
 */
export function Marca({ tom = "claro" }: { tom?: "claro" | "escuro" }) {
  if (tom === "claro") {
    return (
      <Image
        src="/logo.webp"
        alt="Kanak Colchões"
        width={300}
        height={152}
        priority
        className="h-10 w-auto md:h-12"
      />
    );
  }

  return (
    <span className="inline-flex items-baseline gap-2">
      <span className="font-display text-[26px] leading-none font-bold tracking-[-0.045em] text-apricot-cream md:text-[31px]">
        Kanak
      </span>
      <span className="font-sans text-[10px] font-medium tracking-[0.14em] text-on-dark-muted uppercase md:text-xs">
        Colchões
      </span>
    </span>
  );
}
