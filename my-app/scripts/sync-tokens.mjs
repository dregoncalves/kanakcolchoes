// Copia os tokens aprovados do design system para dentro do app.
// Fonte de verdade: design-system/tokens.css (raiz do repositório).
// Rodar depois de qualquer mudança aprovada nos tokens: pnpm sync:tokens
import { copyFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");
const origem = resolve(raiz, "design-system", "tokens.css");
const destino = resolve(raiz, "my-app", "app", "tokens.css");

copyFileSync(origem, destino);
console.log(`tokens.css copiado de ${origem} para ${destino}`);
