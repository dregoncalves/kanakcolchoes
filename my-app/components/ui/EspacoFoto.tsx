import { ImageSquare } from "@phosphor-icons/react/dist/ssr";

/**
 * Espaço reservado para foto que ainda não existe. Mantém a proporção do
 * wireframe para o layout não mudar quando a foto real chegar.
 * Nunca usar imagem inventada no lugar.
 */
export function EspacoFoto({
  legenda,
  className = "",
  tom = "claro",
}: {
  legenda: string;
  className?: string;
  tom?: "claro" | "escuro";
}) {
  const cores =
    tom === "claro"
      ? "bg-borda text-ink-60"
      : "bg-[color-mix(in_srgb,var(--vinho)_82%,var(--on-dark))] text-on-dark-muted";

  return (
    <div
      role="img"
      aria-label={`Espaço reservado: ${legenda}`}
      className={`flex flex-col items-center justify-center gap-2 p-4 text-center text-caption ${cores} ${className}`}
    >
      <ImageSquare weight="regular" aria-hidden="true" className="size-7" />
      <span>{legenda}</span>
    </div>
  );
}
