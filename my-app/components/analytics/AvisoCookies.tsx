"use client";

import { useEffect, useRef } from "react";
import { salvarConsentimento } from "@/lib/consent";
import { useConsentimento } from "@/lib/useConsentimento";
import { Aparicao } from "@/components/motion/Aparicao";

/**
 * Aviso de cookies (LGPD). Discreto, no pé da tela, com aceitar e recusar.
 * Na landing do celular ele sobe para não cobrir a barra fixa de WhatsApp —
 * a regra fica em globals.css (body:has(.barra-fixa-whatsapp)).
 *
 * É uma região anunciada, não um diálogo: não interrompe a navegação nem
 * prende o foco. Entra e sai deslizando do pé da tela, de onde ele pertence.
 */
export function AvisoCookies() {
  const resposta = useConsentimento();
  const regiao = useRef<HTMLDivElement>(null);
  /** Se o aviso voltou pelo link do rodapé, o foco vai para ele. */
  const jaRespondeu = useRef(false);

  useEffect(() => {
    if (resposta !== null) {
      jaRespondeu.current = true;
      return;
    }
    if (jaRespondeu.current) regiao.current?.focus();
  }, [resposta]);

  return (
    <Aparicao
      aberto={resposta === null}
      de="pe"
      ref={regiao}
      role="region"
      tabIndex={-1}
      aria-label="Aviso de cookies"
      className="aviso-cookies fixed inset-x-0 bottom-0 z-40 border-t border-borda bg-surface-200 px-5 py-4 shadow-[0_-8px_24px_rgba(36,21,18,0.10)]"
      style={{ paddingBottom: "calc(1rem + env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-8">
        <p className="text-body-sm text-ink-60">
          Usamos cookies para entender como o site é usado e melhorar a sua experiência. Você
          escolhe se aceita essa medição.
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => salvarConsentimento("recusado")}
            className="recuo-no-toque min-h-11 grow rounded-md border-[1.5px] border-vinho px-5 text-label text-vinho transition-colors hover:bg-vinho hover:text-surface-200 md:grow-0"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={() => salvarConsentimento("aceito")}
            className="recuo-no-toque min-h-11 grow rounded-md bg-vinho px-5 text-label text-surface-200 transition-colors hover:bg-vinho-700 md:grow-0"
          >
            Aceitar
          </button>
        </div>
      </div>
    </Aparicao>
  );
}
