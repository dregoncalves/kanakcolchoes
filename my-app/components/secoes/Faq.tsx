"use client";

import { useState, useSyncExternalStore } from "react";
import { CtasDaSecao } from "@/components/primitivos/CtasDaSecao";
import { type FundoSecao, SecaoLayout } from "@/components/primitivos/SecaoLayout";
import { TextoRico } from "@/components/primitivos/ProseCliente";
import { blocosPorTipo, tituloDaSecao, type Secao } from "@/lib/conteudo-modelo";
import type { OrigemWhatsApp } from "@/lib/whatsapp";

type Props = {
  secao: Secao;
  origem: OrigemWhatsApp;
  fundo?: FundoSecao;
};

function subscribeDesktop(onStoreChange: () => void) {
  const mql = window.matchMedia("(min-width: 768px)");
  mql.addEventListener("change", onStoreChange);
  return () => mql.removeEventListener("change", onStoreChange);
}

export function Faq({ secao, origem, fundo = "claro" }: Props) {
  const perguntas = blocosPorTipo(secao, "blocoRotulado");
  const desktop = useSyncExternalStore(
    subscribeDesktop,
    () => window.matchMedia("(min-width: 768px)").matches,
    () => false,
  );
  const [manuais, setManuais] = useState<Record<number, boolean>>({});

  function aberto(i: number) {
    if (Object.prototype.hasOwnProperty.call(manuais, i)) return manuais[i];
    return desktop && i === 0;
  }

  function alternar(i: number) {
    setManuais((atual) => ({ ...atual, [i]: !aberto(i) }));
  }

  return (
    <SecaoLayout fundo={fundo}>
      <h2 className="titulo-secao">{tituloDaSecao(secao)}</h2>
      <div className="divide-linha mt-8 w-full max-w-[720px] divide-y border-y border-linha">
        {perguntas.map((item, i) => {
          const estaAberto = aberto(i);
          const painelId = `faq-painel-${i}`;
          const botaoId = `faq-botao-${i}`;
          return (
            <div key={i}>
              <h3>
                <button
                  type="button"
                  id={botaoId}
                  aria-expanded={estaAberto}
                  aria-controls={painelId}
                  className="font-subtitulo group text-tinta-900 hover:text-bordo-700 flex min-h-12 w-full items-center justify-between gap-4 py-4 text-left text-base font-semibold transition-colors duration-200 md:text-lg"
                  onClick={() => alternar(i)}
                >
                  <span>{item.rotulo}</span>
                  <span
                    aria-hidden
                    className={`inline-flex size-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      estaAberto
                        ? "border-bordo-700 bg-bordo-700 text-papel rotate-45"
                        : "border-linha text-bordo-700 group-hover:border-bordo-700 group-hover:bg-areia-100"
                    }`}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                    >
                      <line x1="6" y1="1.5" x2="6" y2="10.5" />
                      <line x1="1.5" y1="6" x2="10.5" y2="6" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                className={`grid motion-safe:transition-[grid-template-rows] motion-safe:duration-[250ms] ${
                  estaAberto ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div
                    id={painelId}
                    role="region"
                    aria-labelledby={botaoId}
                    className="max-w-[68ch] space-y-3 pb-4"
                  >
                    {item.corpo.map((p, j) => (
                      <p key={j}>
                        <TextoRico trechos={p} />
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <CtasDaSecao ctas={secao.ctas} origem={origem} />
    </SecaoLayout>
  );
}
