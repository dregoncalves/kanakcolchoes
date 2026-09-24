import { CAMADAS } from "@/content/produtos";
import { Empilha } from "@/components/motion/Empilha";

/**
 * As três camadas da seção "A Ciência do Conforto", desenhadas em código
 * como no wireframe. A espessura de cada camada é ⏳ PENDENTE: enquanto o
 * dado não vier, o bloco funciona sem número — nada de valor inventado.
 *
 * Os nomes das camadas são conteúdo, não decoração: ficam legíveis para
 * leitor de tela. Só o desenho (as barras) é escondido.
 */
export function DiagramaCamadas() {
  const [termica, anatomico, resiliencia] = CAMADAS;

  return (
    <Empilha className="flex flex-col gap-3 md:gap-5">
      <div className="mr-6 flex min-h-13 items-center justify-between gap-3 rounded-[14px] bg-apricot-cream px-4 py-2.5 text-body-sm font-semibold text-ink md:mr-10 md:min-h-18 md:px-6">
        <span className="min-w-0 break-words">{termica.nome}</span>
        {termica.espessura && (
          <span className="shrink-0 font-medium text-ink-60">{termica.espessura}</span>
        )}
      </div>

      <div className="mx-3 flex min-h-24 flex-col justify-center gap-2.5 rounded-[14px] border border-borda bg-[color-mix(in_srgb,var(--surface-100)_60%,white)] px-4 py-3 text-body-sm font-semibold text-ink md:mx-5 md:min-h-35 md:gap-3.5 md:px-6">
        <span className="min-w-0 break-words">{anatomico.nome}</span>
        <span aria-hidden="true" className="grid grid-cols-8 gap-1.5 md:grid-cols-9">
          {Array.from({ length: 9 }, (_, indice) => (
            <span
              key={indice}
              className={`h-9 rounded-[10px] border-[1.5px] border-apricot-700 md:h-14 ${
                indice === 8 ? "hidden md:block" : ""
              }`}
            />
          ))}
        </span>
      </div>

      <div className="ml-6 flex min-h-14 items-center justify-between gap-3 rounded-[14px] bg-vinho px-4 py-2.5 text-body-sm font-semibold text-surface-200 md:ml-10 md:min-h-20 md:px-6">
        <span className="min-w-0 break-words">{resiliencia.nome}</span>
        {resiliencia.espessura && (
          <span className="shrink-0 font-medium text-on-dark">{resiliencia.espessura}</span>
        )}
      </div>
    </Empilha>
  );
}
