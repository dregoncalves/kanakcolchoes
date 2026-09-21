import type { Bloco } from "@/lib/conteudo";

export function ListaTelefones({ blocos }: { blocos: Bloco[] }) {
  const telefones = blocos.filter((b) => b.tipo === "telefone");
  if (telefones.length === 0) return null;
  return (
    <ul className="mt-6 space-y-2">
      {telefones.map((tel, i) =>
        tel.tipo === "telefone" ? (
          <li key={i} className="font-subtitulo min-h-11 tracking-[0.01em]">
            {tel.texto}
          </li>
        ) : null,
      )}
    </ul>
  );
}
