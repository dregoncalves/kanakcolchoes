"use client";

import { limparConsentimento } from "@/lib/consent";
import { useConsentimento } from "@/lib/useConsentimento";

/**
 * Link do rodapé que traz o aviso de cookies de volta. A LGPD pede que a
 * escolha possa ser revista; sem isso, quem clicou em "Recusar" nunca mais
 * consegue aceitar. Só aparece depois de haver uma resposta para rever.
 */
export function BotaoPreferenciasCookies() {
  if (useConsentimento() === null) return null;

  return (
    <button
      type="button"
      onClick={limparConsentimento}
      className="flex min-h-11 items-center text-caption text-on-dark-muted underline underline-offset-4 transition-colors hover:text-apricot-cream md:min-h-0"
    >
      Preferências de cookies
    </button>
  );
}
