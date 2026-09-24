"use client";

import { useSyncExternalStore } from "react";
import { EVENTO_CONSENTIMENTO, lerConsentimento, type Consentimento } from "./consent";

function assinar(aoMudar: () => void) {
  window.addEventListener(EVENTO_CONSENTIMENTO, aoMudar);
  // outra aba pode responder o aviso
  window.addEventListener("storage", aoMudar);
  return () => {
    window.removeEventListener(EVENTO_CONSENTIMENTO, aoMudar);
    window.removeEventListener("storage", aoMudar);
  };
}

/**
 * Lê o consentimento como estado externo (localStorage + evento), em vez de
 * copiar para dentro do React num efeito. No servidor devolve `null`: o aviso
 * e as tags só aparecem depois da hidratação, no navegador.
 */
export function useConsentimento(): Consentimento {
  return useSyncExternalStore(assinar, lerConsentimento, () => null);
}
