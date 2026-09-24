/**
 * Mapa de CTAs do WhatsApp — transcrito de specs/site.md §7.3 e da
 * prancheta "Mapa de CTAs do WhatsApp".
 *
 * REGRA: as frases identificam a seção de origem para o atendimento.
 * Mudou uma frase aqui, muda em specs/site.md §7.3 e avisa o atendimento.
 * Somente estes CTAs existem.
 */

export const NUMEROS = {
  /** Recebe todos os botões principais, sem rodízio. */
  principal: "5541998425771",
  segundo: "5541987265068",
  terceiro: "5541984101101",
} as const;

export interface Cta {
  /** Número que recebe a conversa. */
  numero: string;
  /** Mensagem pré-preenchida. Estável: o atendimento lê a origem por ela. */
  mensagem: string;
  /** Texto do botão ou, em cards, o rótulo acessível. */
  rotulo: string;
}

const principal = (mensagem: string, rotulo: string): Cta => ({
  numero: NUMEROS.principal,
  mensagem,
  rotulo,
});

const tamanhoSite = (nome: string, medida: string, rotulo: string): Cta =>
  principal(
    `Olá! Vim pelo site e quero conhecer as opções de colchão ${nome} (${medida}).`,
    rotulo,
  );

const modeloSite = (nome: string, rotulo: string): Cta =>
  principal(`Olá! Vim pelo site e quero saber mais sobre o colchão ${nome}.`, rotulo);

export const CTAS = {
  // ----------------------------------------------------------------- Home
  header: principal(
    "Olá! Vim pelo site e quero falar com um especialista em colchões.",
    "Falar com especialista",
  ),
  banner: principal(
    "Olá! Vim pelo site e quero ajuda para escolher o colchão certo para mim.",
    "Melhore seu sono com a Kanak!",
  ),
  hero_queen: tamanhoSite("Queen Size", "158 x 198 cm", "Ver colchões Queen Size, 158 x 198 cm"),
  hero_king: tamanhoSite("King Size", "193 x 203 cm", "Ver colchões King Size, 193 x 203 cm"),
  hero_casal: tamanhoSite("Casal", "138 x 188 cm", "Ver colchões Casal, 138 x 188 cm"),
  hero_solteiro: tamanhoSite("Solteiro", "88 x 188 cm", "Ver colchões Solteiro, 88 x 188 cm"),
  ciencia: principal(
    "Olá! Vim pelo site, li sobre a tecnologia dos colchões Kanak e quero encontrar o ideal para o meu descanso.",
    "Encontre o colchão ideal para o seu descanso!",
  ),
  // rótulo ajustado pelo item H6 de specs/site.md §6.4 (aprovado em 2026-09-23)
  como_escolher: principal(
    "Olá! Vim pelo site e quero ajuda para escolher entre molas ensacadas, espuma e magnético.",
    "Descubra o colchão ideal para você!",
  ),
  tamanho_queen: tamanhoSite(
    "Queen Size",
    "158 x 198 cm",
    "Falar sobre o colchão Queen Size, 158 x 198 cm",
  ),
  tamanho_king: tamanhoSite(
    "King Size",
    "193 x 203 cm",
    "Falar sobre o colchão King Size, 193 x 203 cm",
  ),
  tamanho_casal: tamanhoSite("Casal", "138 x 188 cm", "Falar sobre o colchão Casal, 138 x 188 cm"),
  tamanho_solteiro: tamanhoSite(
    "Solteiro",
    "88 x 188 cm",
    "Falar sobre o colchão Solteiro, 88 x 188 cm",
  ),
  modelo_molas: modeloSite("de Molas Ensacadas", "Falar sobre o colchão de Molas Ensacadas"),
  modelo_anatomico: modeloSite("Anatômico Ortopédico", "Falar sobre o colchão Anatômico Ortopédico"),
  modelo_magnetico: modeloSite("Magnético", "Falar sobre o colchão Magnético"),
  colchoes: principal(
    "Olá! Vim pelo site e quero escolher meu colchão. Podem me ajudar?",
    "Escolha seu colchão agora!",
  ),
  depoimentos: principal(
    "Olá! Vim pelo site, vi os depoimentos e quero conhecer os colchões Kanak.",
    "Tenha seu colchão dos sonhos!",
  ),
  // Blog: origens novas, aprovadas em 2026-09-24 (memoria.md).
  blog_lista: principal(
    "Olá! Vim pelo blog da Kanak e quero ajuda para escolher meu colchão.",
    "Fale com um especialista!",
  ),
  blog_artigo: principal(
    "Olá! Vim de um artigo do blog da Kanak e quero ajuda para escolher meu colchão.",
    "Fale com um especialista!",
  ),
  // rótulo ajustado pelo item H10 de specs/site.md §6.4 (aprovado em 2026-09-23)
  showroom: principal(
    "Olá! Vim pelo site e quero falar com um especialista sobre pagamento, entrega e atendimento.",
    "Fale com nossos especialistas!",
  ),
  duvidas: principal(
    "Olá! Vim pelo site e tenho uma dúvida sobre os colchões Kanak.",
    "Fale agora com um especialista Kanak.",
  ),

  duvidas_fone_1: {
    numero: NUMEROS.principal,
    mensagem: "Olá! Vim pelo site e tenho uma dúvida sobre os colchões Kanak.",
    rotulo: "(41) 99842-5771",
  },
  duvidas_fone_2: {
    numero: NUMEROS.segundo,
    mensagem: "Olá! Vim pelo site e tenho uma dúvida sobre os colchões Kanak.",
    rotulo: "(41) 98726-5068",
  },
  duvidas_fone_3: {
    numero: NUMEROS.terceiro,
    mensagem: "Olá! Vim pelo site e tenho uma dúvida sobre os colchões Kanak.",
    rotulo: "(41) 98410-1101",
  },
  rodape_fone_1: {
    numero: NUMEROS.principal,
    mensagem: "Olá! Vim pelo site e quero falar com a Kanak.",
    rotulo: "(41) 99842-5771",
  },
  rodape_fone_2: {
    numero: NUMEROS.segundo,
    mensagem: "Olá! Vim pelo site e quero falar com a Kanak.",
    rotulo: "(41) 98726-5068",
  },
  rodape_fone_3: {
    numero: NUMEROS.terceiro,
    mensagem: "Olá! Vim pelo site e quero falar com a Kanak.",
    rotulo: "(41) 98410-1101",
  },

  // -------------------------------------------------------------- Landing
  lp_header: principal(
    "Olá! Vim pelo anúncio e quero falar com um especialista da Kanak.",
    "Falar com especialista",
  ),
  lp_barra_fixa: principal(
    "Olá! Vim pelo anúncio e quero falar com um especialista da Kanak.",
    "Falar com especialista",
  ),
  lp_banner: principal(
    "Olá! Vi a promoção de até 55% OFF e quero aproveitar.",
    "Tenha o melhor colchão!",
  ),
  lp_problema: principal(
    "Olá! Vim pelo anúncio. Acordo cansado e quero descobrir o colchão ideal para mim.",
    "Descubra o colchão ideal aqui!",
  ),
  lp_tamanho_queen: principal(
    "Olá! Vim pelo anúncio e quero ver as opções em Queen Size (158 x 198 cm) na promoção.",
    "Ver opções em Queen Size, 158 x 198 cm",
  ),
  lp_tamanho_king: principal(
    "Olá! Vim pelo anúncio e quero ver as opções em King Size (193 x 203 cm) na promoção.",
    "Ver opções em King Size, 193 x 203 cm",
  ),
  lp_tamanho_casal_solteiro: principal(
    "Olá! Vim pelo anúncio e quero ver as opções em Casal ou Solteiro na promoção.",
    "Ver opções em Casal & Solteiro",
  ),
  lp_modelo_molas: principal(
    "Olá! Vim pelo anúncio e quero saber mais sobre o colchão de Molas Ensacadas.",
    "Falar sobre o colchão de Molas Ensacadas",
  ),
  lp_modelo_anatomico: principal(
    "Olá! Vim pelo anúncio e quero saber mais sobre o colchão Anatômico Ortopédico.",
    "Falar sobre o colchão Anatômico Ortopédico",
  ),
  lp_modelo_magnetico: principal(
    "Olá! Vim pelo anúncio e quero saber mais sobre a Linha Magnética.",
    "Falar sobre a Linha Magnética",
  ),
  lp_modelos: principal(
    "Olá! Vim pelo anúncio e quero ajuda para escolher tamanho e tecnologia.",
    "Descubra o colchão ideal aqui!",
  ),
  lp_especialistas: principal(
    "Olá! Vim pelo anúncio e quero uma consultoria para escolher meu colchão.",
    "Fale com nossos especialistas agora!",
  ),
  lp_fechamento: principal(
    "Olá! Vim pelo anúncio e quero receber vídeos dos modelos, fotos do acabamento e uma indicação de colchão.",
    "Quero o colchão perfeito!",
  ),
  lp_rodape_fone_1: {
    numero: NUMEROS.principal,
    mensagem: "Olá! Vim pelo anúncio e quero falar com a Kanak.",
    rotulo: "(41) 99842-5771",
  },
  lp_rodape_fone_2: {
    numero: NUMEROS.segundo,
    mensagem: "Olá! Vim pelo anúncio e quero falar com a Kanak.",
    rotulo: "(41) 98726-5068",
  },
  lp_rodape_fone_3: {
    numero: NUMEROS.terceiro,
    mensagem: "Olá! Vim pelo anúncio e quero falar com a Kanak.",
    rotulo: "(41) 98410-1101",
  },
} as const satisfies Record<string, Cta>;

export type Origem = keyof typeof CTAS;

/** Os três telefones, na ordem em que aparecem em Dúvidas e no rodapé. */
export const TELEFONES_DUVIDAS = ["duvidas_fone_1", "duvidas_fone_2", "duvidas_fone_3"] as const;
export const TELEFONES_RODAPE = ["rodape_fone_1", "rodape_fone_2", "rodape_fone_3"] as const;
export const TELEFONES_RODAPE_LP = [
  "lp_rodape_fone_1",
  "lp_rodape_fone_2",
  "lp_rodape_fone_3",
] as const;
