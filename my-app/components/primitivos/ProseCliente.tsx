import type { Bloco, Trecho } from "@/lib/conteudo-modelo";
import { partesComMedida } from "@/lib/tipografia";

function TextoComMedida({ valor }: { valor: string }) {
  const partes = partesComMedida(valor);
  if (partes.length === 1 && !partes[0].medida) return <>{valor}</>;
  return (
    <>
      {partes.map((p, i) =>
        p.medida ? (
          <span key={i} className="font-titulo tracking-[-0.02em]">
            {p.texto}
          </span>
        ) : (
          <span key={i}>{p.texto}</span>
        ),
      )}
    </>
  );
}

export function TextoRico({ trechos }: { trechos: Trecho[] }) {
  return (
    <>
      {trechos.map((t, i) =>
        t.tipo === "negrito" ? (
          <strong key={i}>
            <TextoComMedida valor={t.valor} />
          </strong>
        ) : (
          <span key={i}>
            <TextoComMedida valor={t.valor} />
          </span>
        ),
      )}
    </>
  );
}

type Props = {
  blocos: Bloco[];
  className?: string;
};

export function ProseCliente({ blocos, className = "" }: Props) {
  return (
    <div className={`max-w-[68ch] space-y-4 ${className}`}>
      {blocos.map((bloco, i) => {
        switch (bloco.tipo) {
          case "paragrafo":
            return (
              <p key={i}>
                <TextoRico trechos={bloco.trechos} />
              </p>
            );
          case "lista":
            return (
              <ul key={i} className="list-disc space-y-2 pl-5">
                {bloco.itens.map((item, j) => (
                  <li key={j}>
                    <TextoRico trechos={item} />
                  </li>
                ))}
              </ul>
            );
          case "subtitulo":
            return (
              <h3 key={i} className="pt-4">
                {bloco.texto}
              </h3>
            );
          case "telefone":
            return (
              <p key={i} className="font-subtitulo tracking-[0.01em]">
                {bloco.texto}
              </p>
            );
          case "citacao":
            return (
              <blockquote
                key={i}
                className="border-ouro-500 font-titulo text-tinta-900 border-l-2 pl-5 text-xl leading-snug"
              >
                {bloco.linhas.map((linha, j) =>
                  j > 0 ? (
                    <cite key={j} className="mt-3 block text-base font-normal not-italic">
                      {linha}
                    </cite>
                  ) : (
                    <p key={j}>{linha}</p>
                  ),
                )}
              </blockquote>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
