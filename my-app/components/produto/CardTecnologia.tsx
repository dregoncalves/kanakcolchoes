import Image from "next/image";

/**
 * Card horizontal da seção "Qual colchão combina com você?".
 * No wireframe é conteúdo, não link: o CTA da seção é o botão logo abaixo.
 */
export function CardTecnologia({
  nome,
  descricao,
  foto,
}: {
  nome: string;
  descricao: string;
  foto: { src: string; alt: string };
}) {
  return (
    <article className="grid grid-cols-[88px_minmax(0,1fr)] items-center gap-4 rounded-2xl border border-borda bg-surface-200 p-3.5 md:grid-cols-[120px_minmax(0,1fr)] md:gap-6 md:p-5 md:pr-7">
      <Image
        src={foto.src}
        alt={foto.alt}
        width={120}
        height={120}
        sizes="(min-width: 768px) 120px, 88px"
        className="size-22 rounded-xl object-cover md:size-30"
      />
      <div className="flex flex-col gap-1 md:gap-2">
        <h3 className="font-display text-display-sm">{nome}</h3>
        <p className="text-body-sm text-ink-60">{descricao}</p>
      </div>
    </article>
  );
}
