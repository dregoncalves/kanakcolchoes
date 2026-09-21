import fs from "node:fs";
import path from "node:path";
import "server-only";
import {
  ehTag,
  parseTrechos,
  type Bloco,
  type PaginaConteudo,
  type Secao,
  type Tag,
  type TipoPlaceholder,
  type Trecho,
} from "@/lib/conteudo-modelo";

export * from "@/lib/conteudo-modelo";

const RE_SECAO = /^##\s+\[([^\]]+)\](?:\s+(.*))?$/;
const RE_CAMPO =
  /^\*\*(Heading|Apoio|CTA secundário|CTA):\*\*\s*(.*)$/;
const RE_NEGRITO_LINHA = /^\*\*(.+)\*\*\s*$/;
const RE_PLACEHOLDER = /`?\[CARROSSEL[^\]]*\]`?(?:\s*—\s*exemplo:)?/gi;
const RE_PLACEHOLDER_SOLO =
  /^`?\[CARROSSEL[^\]]*\]`?(?:\s*—\s*exemplo:)?\s*$/i;
const RE_NOTA_PROJETO =
  /^(Fonte original:|\*\*Tipos de seção|\*\*Nota de conteúdo:|Nota:)/i;

function pastaConteudo(): string {
  return path.resolve(process.cwd(), "..", "conteudo");
}

function classificarCarrossel(bruto: string): TipoPlaceholder {
  const t = bruto.toUpperCase();
  if (t.includes("COR")) return "cores";
  if (t.includes("DEPOIMENTO")) return "depoimentos";
  if (t.includes("MODELO")) return "modelos";
  return "produtos";
}

function ehNotaProjeto(texto: string): boolean {
  return RE_NOTA_PROJETO.test(texto.trim());
}

function celulasTabela(linha: string): string[] {
  const miolo = linha.trim().replace(/^\|/, "").replace(/\|$/, "");
  return miolo.split("|").map((c) => c.trim());
}

function ehSeparadorTabela(linha: string): boolean {
  return /^\|[\s:|-]+\|$/.test(linha.trim()) || /^[\s:|-]+$/.test(linha.trim());
}

function extrairPlaceholdersDoParagrafo(texto: string): Bloco[] {
  const trimmed = texto.trim();
  if (RE_PLACEHOLDER_SOLO.test(trimmed)) {
    return [
      {
        tipo: "placeholder",
        kind: classificarCarrossel(trimmed),
        bruto: trimmed,
      },
    ];
  }

  const blocos: Bloco[] = [];
  const re = new RegExp(RE_PLACEHOLDER.source, "gi");
  let ultimo = 0;
  let match: RegExpExecArray | null;
  let encontrou = false;
  while ((match = re.exec(texto)) !== null) {
    encontrou = true;
    const antes = texto.slice(ultimo, match.index).trim();
    if (antes) {
      blocos.push({ tipo: "paragrafo", trechos: parseTrechos(antes) });
    }
    blocos.push({
      tipo: "placeholder",
      kind: classificarCarrossel(match[0]),
      bruto: match[0],
    });
    ultimo = match.index + match[0].length;
  }
  if (!encontrou) {
    return [{ tipo: "paragrafo", trechos: parseTrechos(texto) }];
  }
  const resto = texto.slice(ultimo).trim();
  if (resto) {
    blocos.push({ tipo: "paragrafo", trechos: parseTrechos(resto) });
  }
  return blocos;
}

function parsearSecao(tag: Tag, headingVisivel: string | undefined, corpoBruto: string): Secao {
  const linhas = corpoBruto.replace(/\r\n/g, "\n").split("\n");
  const secao: Secao = {
    tag,
    headingVisivel: headingVisivel || undefined,
    heading: "",
    corpo: [],
    ctas: [],
  };

  let i = 0;
  while (i < linhas.length) {
    const linha = linhas[i];
    const trimmed = linha.trim();

    if (!trimmed) {
      i += 1;
      continue;
    }

    if (trimmed === "---") {
      i += 1;
      continue;
    }

    if (trimmed.startsWith(">")) {
      const texto = trimmed.replace(/^>\s?/, "");
      if (ehNotaProjeto(texto)) {
        i += 1;
        while (i < linhas.length && linhas[i].trim().startsWith(">")) {
          const cont = linhas[i].trim().replace(/^>\s?/, "");
          if (ehNotaProjeto(cont) || cont.startsWith("**Nota")) {
            i += 1;
            continue;
          }
          break;
        }
        continue;
      }
      const citacao: string[] = [texto];
      i += 1;
      while (i < linhas.length && linhas[i].trim().startsWith(">")) {
        citacao.push(linhas[i].trim().replace(/^>\s?/, ""));
        i += 1;
      }
      secao.corpo.push({
        tipo: "citacao",
        linhas: citacao.filter((l) => l.length > 0),
      });
      continue;
    }

    const campo = trimmed.match(RE_CAMPO);
    if (campo) {
      const nome = campo[1];
      const valor = campo[2] ?? "";
      if (nome === "Heading") {
        secao.heading = valor;
        i += 1;
        continue;
      }
      if (nome === "CTA" || nome === "CTA secundário") {
        if (valor.trim()) {
          secao.ctas.push({
            texto: valor.trim(),
            secundario: nome === "CTA secundário",
          });
        }
        i += 1;
        continue;
      }
      if (nome === "Apoio") {
        if (valor.trim()) {
          secao.corpo.push(...extrairPlaceholdersDoParagrafo(valor.trim()));
        }
        i += 1;
        continue;
      }
    }

    if (trimmed.startsWith("### ")) {
      secao.corpo.push({ tipo: "subtitulo", texto: trimmed.slice(4).trim() });
      i += 1;
      continue;
    }

    if (trimmed.startsWith("📱")) {
      secao.corpo.push({ tipo: "telefone", texto: trimmed });
      i += 1;
      continue;
    }

    if (trimmed.startsWith("|")) {
      const linhasTabela: string[] = [];
      while (i < linhas.length && linhas[i].trim().startsWith("|")) {
        linhasTabela.push(linhas[i].trim());
        i += 1;
      }
      const pares: { rotulo: string; valor: string }[] = [];
      for (const lt of linhasTabela) {
        if (ehSeparadorTabela(lt)) continue;
        const cells = celulasTabela(lt);
        if (cells.length < 2) continue;
        const rotulo = cells[0] ?? "";
        const valor = cells.slice(1).join(" | ");
        if (!rotulo || !valor) continue;
        if (/^campo$/i.test(rotulo) && /^valor$/i.test(valor)) continue;
        pares.push({ rotulo, valor });
      }
      if (pares.length > 0) {
        secao.corpo.push({ tipo: "tabela", pares });
      }
      continue;
    }

    if (trimmed.startsWith("- ")) {
      const itens: Trecho[][] = [];
      while (i < linhas.length && linhas[i].trim().startsWith("- ")) {
        itens.push(parseTrechos(linhas[i].trim().slice(2)));
        i += 1;
      }
      secao.corpo.push({ tipo: "lista", itens });
      continue;
    }

    const negritoLinha = trimmed.match(RE_NEGRITO_LINHA);
    if (negritoLinha && !RE_CAMPO.test(trimmed)) {
      const rotulo = negritoLinha[1];
      i += 1;
      const paragrafos: Trecho[][] = [];
      while (i < linhas.length) {
        const prox = linhas[i].trim();
        if (!prox) {
          if (paragrafos.length > 0) break;
          i += 1;
          continue;
        }
        if (
          prox.startsWith("##") ||
          prox.startsWith("### ") ||
          prox.startsWith("|") ||
          prox.startsWith("- ") ||
          prox.startsWith("📱") ||
          prox.startsWith(">") ||
          prox.startsWith("---") ||
          RE_CAMPO.test(prox) ||
          RE_NEGRITO_LINHA.test(prox) ||
          RE_PLACEHOLDER_SOLO.test(prox)
        ) {
          break;
        }
        paragrafos.push(parseTrechos(prox));
        i += 1;
      }
      secao.corpo.push({
        tipo: "blocoRotulado",
        rotulo,
        corpo: paragrafos.length > 0 ? paragrafos : [],
      });
      continue;
    }

    secao.corpo.push(...extrairPlaceholdersDoParagrafo(trimmed));
    i += 1;
  }

  return secao;
}

export function parsearMarkdown(fonte: string, arquivo: string): PaginaConteudo {
  const texto = fonte.replace(/\r\n/g, "\n");
  const linhas = texto.split("\n");
  const secoes: Secao[] = [];

  let i = 0;
  while (i < linhas.length) {
    const match = linhas[i].match(RE_SECAO);
    if (!match) {
      i += 1;
      continue;
    }
    const tagBruta = match[1].trim();
    if (!ehTag(tagBruta)) {
      break;
    }
    const headingVisivel = match[2]?.trim() || undefined;
    i += 1;
    const corpoLinhas: string[] = [];
    while (i < linhas.length) {
      const prox = linhas[i];
      if (prox.startsWith("## ")) {
        break;
      }
      corpoLinhas.push(prox);
      i += 1;
    }
    secoes.push(parsearSecao(tagBruta, headingVisivel, corpoLinhas.join("\n")));
  }

  return { arquivo, secoes };
}

export function lerPagina(arquivoRelativo: string): PaginaConteudo {
  const absoluto = path.join(pastaConteudo(), arquivoRelativo);
  const fonte = fs.readFileSync(absoluto, "utf8");
  return parsearMarkdown(fonte, arquivoRelativo);
}
