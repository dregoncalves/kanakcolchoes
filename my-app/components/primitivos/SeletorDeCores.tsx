"use client";

import { useState } from "react";
import { ImagemKanak } from "@/components/primitivos/ImagemKanak";
import type { ImagemSlot } from "@/lib/imagens-modelo";

export type AmostraCor = {
  id: string;
  nome: string;
  hex: string;
  imagem: ImagemSlot | null;
};

type Props = {
  amostras: AmostraCor[];
};

export function SeletorDeCores({ amostras }: Props) {
  const [selecionada, setSelecionada] = useState<string>(amostras[0]?.id ?? "");

  const ativa = amostras.find((c) => c.id === selecionada) ?? amostras[0];

  return (
    <div className="mt-8">
      {ativa ? (
        <div className="mb-4 flex items-center justify-between text-sm">
          <span className="font-subtitulo text-tinta-500 text-xs tracking-[0.06em] uppercase">
            Toque para selecionar o veludo:
          </span>
          <span className="font-subtitulo border-linha bg-papel text-tinta-900 inline-flex items-center gap-2 rounded border px-3 py-1 text-xs font-semibold shadow-xs">
            <span
              className="border-linha size-3 rounded-full border shadow-xs"
              style={{ backgroundColor: ativa.hex }}
              aria-hidden
            />
            <span>Veludo {ativa.nome}</span>
          </span>
        </div>
      ) : null}

      <ul className="flex snap-x snap-mandatory gap-3.5 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-6 md:overflow-visible lg:grid-cols-11">
        {amostras.map((cor) => {
          const isAtiva = cor.id === selecionada;
          return (
            <li key={cor.id} className="w-[4.5rem] shrink-0 snap-start md:w-auto">
              <button
                type="button"
                onClick={() => setSelecionada(cor.id)}
                aria-pressed={isAtiva}
                className={`focus-visible:outline-ouro-500 group flex w-full flex-col items-center gap-2 rounded-sm p-1 transition-all duration-200 ${
                  isAtiva
                    ? "scale-105"
                    : "opacity-85 hover:scale-[1.03] hover:opacity-100"
                }`}
              >
                <div
                  className={`relative size-[4.25rem] overflow-hidden rounded-sm transition-all duration-200 ${
                    isAtiva
                      ? "ring-ouro-500 ring-offset-areia-100 shadow-md ring-2 ring-offset-2"
                      : "border-linha group-hover:border-bordo-700/50 border"
                  }`}
                >
                  {cor.imagem ? (
                    <ImagemKanak
                      imagem={cor.imagem}
                      sizes="70px"
                      className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <span
                      className="block size-full"
                      style={{ backgroundColor: cor.hex }}
                      aria-hidden
                    />
                  )}
                </div>
                <span
                  className={`font-subtitulo text-center text-xs transition-colors duration-150 ${
                    isAtiva
                      ? "text-bordo-700 font-semibold"
                      : "text-tinta-500 group-hover:text-tinta-700"
                  }`}
                >
                  {cor.nome}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
