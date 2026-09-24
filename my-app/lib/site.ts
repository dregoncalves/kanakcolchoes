/**
 * Constantes do site. Nada aqui pode ser inventado: dado não confirmado
 * fica como `null` e a interface omite o bloco correspondente.
 */

export const SITE = {
  nome: "Kanak Colchões",
  descricao:
    "Colchões, bases box, cabeceiras e baús fabricados pela Kanak, em Curitiba. Fale com um especialista no WhatsApp e escolha o colchão certo para você.",
  // Domínio temporário até a virada (memoria.md, 2026-09-24). kanakcolchoes.com.br
  // é outro site, em produção, e não é o destino padrão deste projeto.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://beige-octopus-880165.hostingersite.com",
  locale: "pt_BR",
} as const;

/**
 * Indexação por busca. Fica desligada por padrão — só liga com
 * SITE_INDEXAVEL=1, que entra na virada para o domínio final.
 */
export const INDEXAVEL = process.env.SITE_INDEXAVEL === "1";

/** Raiz da REST API do WordPress headless (specs/site.md §9). */
export const WORDPRESS_API_URL =
  process.env.WORDPRESS_API_URL ?? "https://cms.kanakcolchoes.com.br/wp-json";

/** ⏳ PENDENTE — rodapé: endereço, horário, CNPJ, razão social e redes sociais. */
export const EMPRESA = {
  endereco: null,
  horario: null,
  cnpj: null,
  razaoSocial: null,
  mapaEmbedUrl: null,
  redes: [] as { nome: string; url: string }[],
} as const;

export const ANALYTICS = {
  ga4: process.env.NEXT_PUBLIC_GA_ID ?? null,
  metaPixel: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? null,
} as const;
