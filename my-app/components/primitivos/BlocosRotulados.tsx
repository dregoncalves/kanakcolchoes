import { TextoRico } from "@/components/primitivos/ProseCliente";
import type { Bloco } from "@/lib/conteudo-modelo";

type Modo = "cards" | "passos" | "definicoes" | "acordeao";

type Props = {
  blocos: Extract<Bloco, { tipo: "blocoRotulado" }>[];
  modo?: Modo;
  headingLevel?: 3 | 4;
};

export function BlocosRotulados({ blocos, modo = "cards", headingLevel = 3 }: Props) {
  if (blocos.length === 0) return null;
  const Tag = headingLevel === 4 ? "h4" : "h3";

  if (modo === "definicoes") {
    return (
      <dl className="mt-8 grid gap-6">
        {blocos.map((bloco, i) => (
          <div key={i}>
            <dt>
              <Tag className="text-lg md:text-xl">{bloco.rotulo}</Tag>
            </dt>
            <dd className="mt-2 max-w-[68ch] space-y-3">
              {bloco.corpo.map((p, j) => (
                <p key={j}>
                  <TextoRico trechos={p} />
                </p>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    );
  }

  if (modo === "passos") {
    return (
      <ol className="mt-8 grid gap-6">
        {blocos.map((bloco, i) => (
          <li key={i} className="flex gap-4">
            <span
              className="font-titulo text-bordo-700 w-8 shrink-0 text-2xl"
              aria-hidden
            >
              {i + 1}
            </span>
            <div>
              <Tag className="text-lg md:text-xl">{bloco.rotulo}</Tag>
              <div className="mt-2 max-w-[68ch] space-y-3">
                {bloco.corpo.map((p, j) => (
                  <p key={j}>
                    <TextoRico trechos={p} />
                  </p>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <div
      className={
        modo === "cards"
          ? "mt-8 grid gap-4 md:grid-cols-2 md:gap-6"
          : "mt-8 grid gap-6"
      }
    >
      {blocos.map((bloco, i) => (
        <article
          key={i}
          className="border-linha rounded-md border bg-papel p-5"
        >
          <Tag className="text-lg md:text-xl">{bloco.rotulo}</Tag>
          <div className="text-tinta-700 mt-2 space-y-3">
            {bloco.corpo.map((p, j) => (
              <p key={j}>
                <TextoRico trechos={p} />
              </p>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
