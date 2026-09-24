import Image from "next/image";
import type { Origem } from "@/content/ctas";
import { cta } from "@/lib/whatsapp";
import { LinkWhatsApp } from "@/components/whatsapp/LinkWhatsApp";

/** Card de modelo (tecnologia). O mesmo componente serve à Home e à landing. */
export function CardModelo({
  nome,
  descricao,
  foto,
  origem,
  alturaFoto = "h-55 md:h-65",
}: {
  nome: string;
  descricao: string;
  foto: { src: string; alt: string };
  origem: Origem;
  alturaFoto?: string;
}) {
  return (
    <LinkWhatsApp
      origem={origem}
      rotuloAcessivel={cta(origem).rotulo}
      className="recuo-no-toque group flex flex-col gap-2.5 text-ink no-underline md:gap-3.5"
    >
      <div className={`relative overflow-hidden rounded-lg bg-borda ${alturaFoto}`}>
        <Image
          src={foto.src}
          alt={foto.alt}
          fill
          sizes="(min-width: 1024px) 378px, (min-width: 768px) 45vw, 280px"
          className="object-cover transition-transform duration-[var(--duracao-foco)] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
        />
      </div>
      <span className="font-display text-display-sm break-words">{nome}</span>
      <p className="text-body-sm text-ink-60">{descricao}</p>
    </LinkWhatsApp>
  );
}
