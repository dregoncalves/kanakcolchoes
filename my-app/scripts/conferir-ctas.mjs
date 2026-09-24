/**
 * Confere o Mapa de CTAs contra o código.
 *
 * 1. Todo `origem="..."` usado nas páginas existe em content/ctas.ts.
 * 2. Todo CTA declarado é realmente usado em alguma página.
 * 3. Só as linhas de telefone usam os números 2 e 3; o resto vai para o principal.
 *
 * Rodar: pnpm conferir:ctas
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";

const app = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const fonte = readFileSync(join(app, "content", "ctas.ts"), "utf8");

// chaves do objeto CTAS
const corpo = fonte.slice(fonte.indexOf("export const CTAS = {"), fonte.indexOf("} as const satisfies"));
const declarados = [...corpo.matchAll(/^ {2}([a-z0-9_]+):/gm)].map((m) => m[1]);

function arquivos(pasta) {
  return readdirSync(pasta).flatMap((nome) => {
    const caminho = join(pasta, nome);
    if (nome === "node_modules" || nome.startsWith(".")) return [];
    if (statSync(caminho).isDirectory()) return arquivos(caminho);
    return /\.tsx?$/.test(nome) ? [caminho] : [];
  });
}

const usados = new Set();
for (const pasta of ["app", "components", "content"]) {
  for (const caminho of arquivos(join(app, pasta))) {
    const texto = readFileSync(caminho, "utf8");
    if (caminho.endsWith("ctas.ts")) continue;
    // pega tanto origem="x" no JSX quanto origem: "x" / origemHero: "x" nos dados
    for (const [, origem] of texto.matchAll(/origem[A-Za-z]*\s*[:=]\s*["']([a-z0-9_]+)["']/g)) {
      usados.add(origem);
    }
    for (const [, lista] of texto.matchAll(/TELEFONES_([A-Z_]+)/g)) {
      const grupo = { DUVIDAS: "duvidas_fone", RODAPE: "rodape_fone", RODAPE_LP: "lp_rodape_fone" }[lista];
      if (grupo) for (const n of [1, 2, 3]) usados.add(`${grupo}_${n}`);
    }
  }
}

const problemas = [];

for (const origem of usados) {
  if (!declarados.includes(origem)) problemas.push(`origem usada mas não declarada: ${origem}`);
}
for (const origem of declarados) {
  if (!usados.has(origem)) problemas.push(`CTA declarado mas não usado: ${origem}`);
}

// números: só as linhas de telefone podem sair do principal
for (const [, chave, bloco] of corpo.matchAll(/^ {2}([a-z0-9_]+): \{([\s\S]*?)^ {2}\},/gm)) {
  const usaOutro = /NUMEROS\.(segundo|terceiro)/.test(bloco);
  if (usaOutro && !/_fone_[23]$/.test(chave)) {
    problemas.push(`CTA ${chave} não deveria usar um número secundário`);
  }
}

if (problemas.length) {
  console.error("Mapa de CTAs com divergências:");
  for (const problema of problemas) console.error(` - ${problema}`);
  process.exit(1);
}

console.log(`Mapa de CTAs conferido: ${declarados.length} CTAs, todos declarados e usados.`);
