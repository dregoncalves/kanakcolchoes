import Link from "next/link";
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";

/** Anterior/próximo da lista do blog. Some quando não há mais de uma página. */
export function Paginacao({
  paginaAtual,
  totalPaginas,
}: {
  paginaAtual: number;
  totalPaginas: number;
}) {
  if (totalPaginas <= 1) return null;

  const temAnterior = paginaAtual > 1;
  const temProxima = paginaAtual < totalPaginas;

  return (
    <nav aria-label="Paginação do blog" className="flex items-center justify-center gap-4">
      {temAnterior ? (
        <Link
          href={paginaAtual - 1 === 1 ? "/blog" : `/blog?pagina=${paginaAtual - 1}`}
          className="recuo-no-toque flex min-h-12 items-center gap-1.5 rounded-md px-4 text-label text-vinho no-underline hover:bg-borda"
          aria-label="Página anterior de posts"
        >
          <CaretLeft weight="regular" aria-hidden="true" className="size-4" />
          Anterior
        </Link>
      ) : (
        <span aria-hidden="true" className="min-w-24" />
      )}

      <span className="text-body-sm text-ink-60">
        Página {paginaAtual} de {totalPaginas}
      </span>

      {temProxima ? (
        <Link
          href={`/blog?pagina=${paginaAtual + 1}`}
          className="recuo-no-toque flex min-h-12 items-center gap-1.5 rounded-md px-4 text-label text-vinho no-underline hover:bg-borda"
          aria-label="Próxima página de posts"
        >
          Próxima
          <CaretRight weight="regular" aria-hidden="true" className="size-4" />
        </Link>
      ) : (
        <span aria-hidden="true" className="min-w-24" />
      )}
    </nav>
  );
}
