"use client";

import { useId, useState } from "react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Revela } from "@/components/motion/Revela";
import type { Depoimento } from "@/content/produtos";
import { CardDepoimento } from "./CardDepoimento";

const POR_PAGINA = 3;

/**
 * Celular: trilho horizontal em CSS scroll-snap, sem JavaScript.
 * Desktop: três por página, com botões anterior/próximo rotulados.
 *
 * Os seis depoimentos ainda são espaço reservado. Quando os reais chegarem a
 * quantidade pode ser outra: sem nenhum, a seção some; com três ou menos, os
 * controles não aparecem — não existe página para virar.
 */
export function CarrosselDepoimentos({
  depoimentos,
  variante = "site",
}: {
  depoimentos: Depoimento[];
  variante?: "site" | "landing";
}) {
  const [pagina, setPagina] = useState(0);
  const idLista = useId();

  if (depoimentos.length === 0) return null;

  const paginas = Math.ceil(depoimentos.length / POR_PAGINA);
  // Se a lista encurtar entre renderizações, a página corrente pode não existir.
  const atual = Math.min(pagina, paginas - 1);
  const visiveis = depoimentos.slice(atual * POR_PAGINA, atual * POR_PAGINA + POR_PAGINA);

  return (
    <div className="flex flex-col gap-6">
      {/* celular */}
      <Revela className="trilho -mx-5 gap-3 px-5 md:hidden" classeItem="w-[290px]">
        {depoimentos.map((depoimento, indice) => (
          <CardDepoimento key={indice} depoimento={depoimento} variante={variante} />
        ))}
      </Revela>

      {/* desktop */}
      {/* `key` remonta a lista a cada página: a animação de chegada roda de novo */}
      <ul key={atual} id={idLista} className="troca-pagina hidden gap-8 md:grid md:grid-cols-3">
        {visiveis.map((depoimento, indice) => (
          <li key={`${atual}-${indice}`}>
            <CardDepoimento depoimento={depoimento} variante={variante} />
          </li>
        ))}
      </ul>

      {paginas > 1 && (
        <div className="hidden items-center justify-between md:flex">
          <p className="flex gap-2" aria-hidden="true">
            {Array.from({ length: paginas }, (_, indice) => (
              <span
                key={indice}
                className={
                  indice === atual
                    ? "h-2 w-7 rounded-full bg-vinho transition-[width] duration-[var(--duracao-estado)] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
                    : "h-2 w-2 rounded-full bg-ink-60 transition-[width] duration-[var(--duracao-estado)] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
                }
              />
            ))}
          </p>
          <p className="sr-only" aria-live="polite">
            Página {atual + 1} de {paginas}
          </p>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setPagina((indice) => (indice - 1 + paginas) % paginas)}
              aria-label="Depoimentos anteriores"
              aria-controls={idLista}
              className="flex size-12 items-center justify-center rounded-full border-[1.5px] border-vinho bg-surface-200 text-vinho transition-colors hover:bg-vinho hover:text-surface-200"
            >
              <Seta direcao="anterior" />
            </button>
            <button
              type="button"
              onClick={() => setPagina((indice) => (indice + 1) % paginas)}
              aria-label="Próximos depoimentos"
              aria-controls={idLista}
              className="flex size-12 items-center justify-center rounded-full border-[1.5px] border-vinho bg-vinho text-surface-200 transition-colors hover:bg-vinho-700"
            >
              <Seta direcao="proximo" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Seta({ direcao }: { direcao: "anterior" | "proximo" }) {
  const Icone = direcao === "anterior" ? ArrowLeft : ArrowRight;
  return <Icone weight="regular" aria-hidden="true" className="size-5" />;
}
