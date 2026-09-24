import { CTAS, type Origem } from "@/content/ctas";

/** Monta o link de conversa: wa.me + mensagem pré-preenchida (specs/site.md §7.1). */
export function linkWhatsApp(origem: Origem): string {
  const { numero, mensagem } = CTAS[origem];
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}

export function cta(origem: Origem) {
  return CTAS[origem];
}
