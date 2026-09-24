/**
 * Consentimento de cookies (LGPD). GA4 e Meta Pixel só carregam depois do
 * "Aceitar" — antes disso nenhuma requisição sai para terceiros.
 */

export const CHAVE_CONSENTIMENTO = "kanak_consent";
export const EVENTO_CONSENTIMENTO = "kanak:consentimento";

export type Consentimento = "aceito" | "recusado" | null;

export function lerConsentimento(): Consentimento {
  if (typeof window === "undefined") return null;
  try {
    const valor = window.localStorage.getItem(CHAVE_CONSENTIMENTO);
    return valor === "aceito" || valor === "recusado" ? valor : null;
  } catch {
    // Navegação anônima ou armazenamento bloqueado: trata como sem resposta.
    return null;
  }
}

export function salvarConsentimento(valor: Exclude<Consentimento, null>) {
  try {
    window.localStorage.setItem(CHAVE_CONSENTIMENTO, valor);
  } catch {
    // Sem armazenamento, a escolha vale só para esta visita.
  }
  window.dispatchEvent(new CustomEvent(EVENTO_CONSENTIMENTO, { detail: valor }));
}

/**
 * Apaga a resposta e faz o aviso voltar. A LGPD exige que a escolha possa ser
 * revista com a mesma facilidade com que foi dada — daí o link no rodapé.
 * Quem já tinha aceitado continua com as tags carregadas nesta visita; elas
 * não voltam a carregar na próxima sem um novo "Aceitar".
 */
export function limparConsentimento() {
  try {
    window.localStorage.removeItem(CHAVE_CONSENTIMENTO);
  } catch {
    // Sem armazenamento: o aviso reaparece de qualquer forma.
  }
  window.dispatchEvent(new CustomEvent(EVENTO_CONSENTIMENTO, { detail: null }));
}
