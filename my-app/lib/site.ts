/**
 * Constantes do site. Nada aqui pode ser inventado: dado não confirmado
 * fica como `null` e a interface omite o bloco correspondente.
 */

export const SITE = {
  nome: "Kanak Colchões",
  descricao:
    "Colchões, bases box, cabeceiras e baús fabricados pela Kanak, em Curitiba. Fale com um especialista no WhatsApp e escolha o colchão certo para você.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kanakcolchoes.com.br",
  locale: "pt_BR",
} as const;

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
