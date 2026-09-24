"use client";

import { useEffect, useId, useRef, useState } from "react";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { Aparicao } from "@/components/motion/Aparicao";

/**
 * Menu de três linhas do cabeçalho no celular (wireframe Mobile · parte 1).
 * Único trecho interativo do cabeçalho: o resto é HTML estático.
 */
export function MenuMobile({ itens }: { itens: readonly { rotulo: string; href: string }[] }) {
  const [aberto, setAberto] = useState(false);
  const botao = useRef<HTMLButtonElement>(null);
  const idMenu = useId();

  useEffect(() => {
    if (!aberto) return;
    const aoTeclar = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") {
        setAberto(false);
        botao.current?.focus();
      }
    };
    document.addEventListener("keydown", aoTeclar);
    return () => document.removeEventListener("keydown", aoTeclar);
  }, [aberto]);

  return (
    <>
      <button
        ref={botao}
        type="button"
        onClick={() => setAberto((estava) => !estava)}
        aria-label={aberto ? "Fechar menu" : "Abrir menu"}
        aria-expanded={aberto}
        aria-controls={idMenu}
        className="recuo-no-toque flex size-12 items-center justify-center rounded-md text-ink md:hidden"
      >
        {aberto ? (
          <X weight="regular" aria-hidden="true" className="size-6" />
        ) : (
          <List weight="regular" aria-hidden="true" className="size-6" />
        )}
      </button>

      <Aparicao
        aberto={aberto}
        de="topo"
        id={idMenu}
        className="absolute inset-x-0 top-full z-20 flex flex-col border-b border-borda bg-surface-100 px-5 pb-4 md:hidden"
      >
        <nav aria-label="Navegação principal" className="flex flex-col">
          {itens.map((item, indice) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setAberto(false)}
              className={`flex min-h-12 items-center text-[17px] font-medium text-ink no-underline ${
                indice < itens.length - 1 ? "border-b border-borda" : ""
              }`}
            >
              {item.rotulo}
            </a>
          ))}
        </nav>
      </Aparicao>
    </>
  );
}
