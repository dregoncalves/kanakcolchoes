"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Um único listener delegado mede todos os botões de WhatsApp do site.
 * É o que permite manter cada botão como Server Component, sem JavaScript
 * próprio. O parâmetro `origem` vem do atributo data-origem (specs/site.md §7.2).
 */
export function RastreioCliques() {
  useEffect(() => {
    const aoClicar = (evento: MouseEvent) => {
      const alvo = evento.target;
      if (!(alvo instanceof Element)) return;

      const link = alvo.closest<HTMLAnchorElement>("a[data-origem]");
      const origem = link?.dataset.origem;
      if (!origem) return;

      window.gtag?.("event", "clique_whatsapp", { origem });
      window.fbq?.("track", "Contact", { origem });
    };

    document.addEventListener("click", aoClicar);
    return () => document.removeEventListener("click", aoClicar);
  }, []);

  return null;
}
