import Link from "next/link";
import { CtaWhatsApp } from "@/components/primitivos/CtaWhatsApp";
import { ITENS_MENU } from "@/lib/navegacao";
import { WHATSAPP_DISPLAY } from "@/lib/whatsapp";

type Props = {
  variante?: "completo" | "legal";
};

export function Footer({ variante = "completo" }: Props) {
  if (variante === "legal") {
    return (
      <footer className="bg-bordo-900 text-areia-100 px-5 py-10 md:px-6 lg:px-8">
        <p className="font-subtitulo mx-auto max-w-[1200px] text-sm tracking-[0.02em]">
          Kanak Colchões
        </p>
      </footer>
    );
  }

  return (
    <footer className="border-t border-[rgba(228,190,99,0.35)] bg-bordo-900 text-areia-100">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-16 md:grid-cols-[1fr_2fr] md:px-6 lg:px-8">
        <div>
          <p className="font-titulo text-2xl text-papel">Kanak Colchões</p>
          <p className="mt-6">
            <CtaWhatsApp
              texto={WHATSAPP_DISPLAY}
              origem={{ pagina: "rodape", secao: "contato" }}
              variante="em-bloco-escuro"
            />
          </p>
        </div>
        <nav aria-label="Rodapé">
          <ul className="grid gap-1 sm:grid-cols-2">
            {ITENS_MENU.map((item) => (
              <li key={item.href}>
                {item.disponivel ? (
                  <Link
                    href={item.href}
                    className="font-subtitulo text-areia-100 hover:text-ouro-400 inline-flex min-h-11 items-center text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className="font-subtitulo text-areia-200 inline-flex min-h-11 items-center text-sm font-medium"
                    aria-disabled="true"
                  >
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
