import Image from "next/image";
import type { Depoimento } from "@/content/produtos";

/**
 * Depoimento real, com nome, cidade e foto autorizada. Enquanto os seis não
 * chegarem, o conteúdo é espaço reservado — nunca texto ou rosto inventado.
 */
export function CardDepoimento({
  depoimento,
  variante = "site",
}: {
  depoimento: Depoimento;
  variante?: "site" | "landing";
}) {
  return (
    <figure className="flex min-h-50 flex-col justify-between gap-4 rounded-2xl border border-borda bg-surface-200 p-6 md:min-h-55 md:gap-5 md:p-8">
      {/* Depoimento real do Google: comprimento imprevisível, então quebra
          palavra longa e não estoura o card. */}
      <blockquote
        className={`min-w-0 break-words hyphens-auto ${
          variante === "landing"
            ? "font-display text-[20px] leading-7 text-ink md:text-[22px] md:leading-[30px]"
            : "text-body text-ink"
        }`}
        lang="pt-BR"
      >
        {depoimento.texto}
      </blockquote>
      <figcaption className="flex items-center gap-3">
        {depoimento.foto ? (
          <Image
            src={depoimento.foto.src}
            alt={depoimento.foto.alt}
            width={44}
            height={44}
            className="size-11 shrink-0 rounded-full object-cover"
          />
        ) : (
          <span className="size-10 shrink-0 rounded-full bg-borda md:size-11" aria-hidden="true" />
        )}
        <span className="flex min-w-0 flex-col">
          <span className="text-body-sm font-semibold break-words">{depoimento.nome}</span>
          <span className="text-caption text-ink-60 break-words">{depoimento.cidade}</span>
        </span>
      </figcaption>
    </figure>
  );
}
