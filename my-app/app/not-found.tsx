import Link from "next/link";
import { BotaoWhatsApp } from "@/components/whatsapp/BotaoWhatsApp";
import { Container } from "@/components/ui/Secao";
import { Marca } from "@/components/layout/Marca";

export const metadata = { title: "Página não encontrada" };

export default function NaoEncontrada() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-surface-100 py-16 text-center">
      <Container className="flex flex-col items-center gap-6">
        <Marca />
        <h1 className="font-display text-display-lg">Não encontramos esta página</h1>
        <p className="max-w-[520px] text-body text-ink-60">
          O endereço pode ter mudado. Volte para a página inicial ou fale com um especialista da
          Kanak.
        </p>
        <div className="flex flex-col items-center gap-4">
          <BotaoWhatsApp origem="header" />
          <Link href="/" className="text-body-sm font-semibold text-vinho underline">
            Ir para a página inicial
          </Link>
        </div>
      </Container>
    </main>
  );
}
