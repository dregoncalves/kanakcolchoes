import type { Origem } from "@/content/ctas";
import { cta } from "@/lib/whatsapp";
import { LinkWhatsApp } from "@/components/whatsapp/LinkWhatsApp";
import { CamaVistaSuperior } from "./CamaVistaSuperior";

/** Card de tamanho: o card inteiro abre a conversa (Mapa de CTAs, §7.3). */
export function CardTamanho({
  nome,
  medida,
  descricao,
  camas,
  origem,
}: {
  nome: string;
  medida: string;
  descricao: string;
  camas: { larguraCm: number; comprimentoCm: number; travesseiros: 1 | 2 }[];
  origem: Origem;
}) {
  return (
    <LinkWhatsApp
      origem={origem}
      rotuloAcessivel={cta(origem).rotulo}
      className="recuo-no-toque flex flex-col gap-2.5 rounded-lg border border-borda bg-surface-100 p-5 text-ink no-underline transition-colors hover:border-apricot-700 md:gap-3 md:p-6"
    >
      <div className="flex h-33 items-end justify-center gap-2 md:h-43">
        {camas.map((cama, indice) => (
          <CamaVistaSuperior key={indice} {...cama} alturaMax={122} />
        ))}
      </div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1">
        <span className="min-w-0 font-display text-display-sm break-words">{nome}</span>
        <span className="text-caption font-semibold whitespace-nowrap text-apricot-700">
          {medida}
        </span>
      </div>
      <p className="text-body-sm text-ink-60">{descricao}</p>
    </LinkWhatsApp>
  );
}
