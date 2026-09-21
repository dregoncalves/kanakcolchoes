import Link from "next/link";
import { CtaWhatsApp } from "@/components/primitivos/CtaWhatsApp";
import { WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export default function NotFound() {
  return (
    <main
      id="conteudo"
      className="mx-auto flex min-h-[70svh] max-w-[720px] flex-col justify-center px-5 py-24 pt-32 md:pt-36"
    >
      <h1 className="titulo-secao">Página não encontrada</h1>
      <p className="mt-8">
        <Link href="/" className="font-subtitulo text-bordo-700 font-semibold">
          Home
        </Link>
      </p>
      <div className="mt-6">
        <CtaWhatsApp
          texto={WHATSAPP_DISPLAY}
          origem={{ pagina: "404", secao: "nao-encontrada" }}
        />
      </div>
    </main>
  );
}
