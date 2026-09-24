import type { Origem } from "@/content/ctas";
import { cta } from "@/lib/whatsapp";
import { LinkWhatsApp } from "@/components/whatsapp/LinkWhatsApp";
import { CamaVistaSuperior } from "./CamaVistaSuperior";

/**
 * Card de tamanho da landing: desenho à esquerda, texto à direita
 * (o wireframe da landing usa layout horizontal, diferente da Home).
 */
export function CardTamanhoLanding({
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
      className="recuo-no-toque grid h-full grid-cols-[130px_minmax(0,1fr)] items-center gap-5 rounded-lg border border-borda bg-surface-100 p-5 text-ink no-underline transition-colors hover:border-apricot-700 md:p-6"
    >
      <div className="flex h-33 items-end justify-center gap-2 md:h-38">
        {camas.map((cama, indice) => (
          <CamaVistaSuperior key={indice} {...cama} alturaMax={114} />
        ))}
      </div>
      <div className="flex min-w-0 flex-col gap-1.5">
        <span className="font-display text-display-sm leading-8 break-words">{nome}</span>
        <span className="text-caption font-semibold text-apricot-700">{medida}</span>
        <span className="text-body-sm text-ink-60">{descricao}</span>
      </div>
    </LinkWhatsApp>
  );
}
