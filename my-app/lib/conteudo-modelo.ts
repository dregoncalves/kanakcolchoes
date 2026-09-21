export const TAGS = [
  "hero",
  "historia",
  "diferenciais",
  "problema",
  "tecnologia",
  "dimensoes",
  "variantes-cor",
  "composicao-kit",
  "vitrine-produtos",
  "prova-social",
  "garantia-entrega",
  "como-comprar",
  "especificacoes",
  "faq",
  "fechamento",
  "contato",
] as const;

export type Tag = (typeof TAGS)[number];

export type Trecho =
  | { tipo: "texto"; valor: string }
  | { tipo: "negrito"; valor: string };

export type TipoPlaceholder = "produtos" | "modelos" | "cores" | "depoimentos";

export type Bloco =
  | { tipo: "paragrafo"; trechos: Trecho[] }
  | { tipo: "lista"; itens: Trecho[][] }
  | { tipo: "tabela"; pares: { rotulo: string; valor: string }[] }
  | { tipo: "blocoRotulado"; rotulo: string; corpo: Trecho[][] }
  | { tipo: "subtitulo"; texto: string }
  | { tipo: "telefone"; texto: string }
  | { tipo: "placeholder"; kind: TipoPlaceholder; bruto: string }
  | { tipo: "citacao"; linhas: string[] };

export type Cta = { texto: string; secundario: boolean };

export type Secao = {
  tag: Tag;
  headingVisivel?: string;
  heading: string;
  corpo: Bloco[];
  ctas: Cta[];
};

export type PaginaConteudo = {
  arquivo: string;
  secoes: Secao[];
};

const TAGS_SET = new Set<string>(TAGS);

export function ehTag(valor: string): valor is Tag {
  return TAGS_SET.has(valor);
}

export function parseTrechos(texto: string): Trecho[] {
  const partes: Trecho[] = [];
  const re = /\*\*(.+?)\*\*/g;
  let ultimo = 0;
  let match: RegExpExecArray | null;
  while ((match = re.exec(texto)) !== null) {
    if (match.index > ultimo) {
      partes.push({ tipo: "texto", valor: texto.slice(ultimo, match.index) });
    }
    partes.push({ tipo: "negrito", valor: match[1] });
    ultimo = match.index + match[0].length;
  }
  if (ultimo < texto.length) {
    partes.push({ tipo: "texto", valor: texto.slice(ultimo) });
  }
  if (partes.length === 0) {
    partes.push({ tipo: "texto", valor: texto });
  }
  return partes;
}

export function tituloDaSecao(secao: Secao): string {
  return secao.heading || secao.headingVisivel || "";
}

export function blocosPorTipo<T extends Bloco["tipo"]>(
  secao: Secao,
  tipo: T,
): Extract<Bloco, { tipo: T }>[] {
  return secao.corpo.filter(
    (b): b is Extract<Bloco, { tipo: T }> => b.tipo === tipo,
  );
}

export function textoPlano(trechos: Trecho[]): string {
  return trechos.map((t) => t.valor).join("");
}

export function primeiroParagrafo(secao: Secao): string {
  const p = secao.corpo.find((b) => b.tipo === "paragrafo");
  return p && p.tipo === "paragrafo" ? textoPlano(p.trechos) : "";
}

export function prosaDaSecao(secao: Secao): Bloco[] {
  return secao.corpo.filter(
    (b) =>
      b.tipo === "paragrafo" ||
      b.tipo === "lista" ||
      b.tipo === "subtitulo" ||
      b.tipo === "telefone" ||
      b.tipo === "citacao",
  );
}
