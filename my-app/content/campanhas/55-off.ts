import type { Campanha } from "./index";

export const campanha55Off: Campanha = {
  slug: "55-off",
  banner: {
    tituloInicio: "A Noite de Sono Perfeita Começa ",
    tituloRealce: "Aqui",
    // Ajuste aprovado: saiu "nos Melhores Colchões do Brasil" (specs/site.md §6.3)
    ofertaDestaque: "Até 55% OFF em Colchões Kanak",
    ofertaComplemento: "+ Frete Especial!",
    arte: {
      desktop: {
        src: "/images/lp/campanha-55off-desktop.png",
        alt: "Kit completo Kanak em veludo bege montado em um quarto com parede vinho: cabeceira capitonê, colchão com pillow top e baú ao pé da cama.",
        largura: 2048,
        altura: 1152,
      },
      mobile: {
        src: "/images/lp/campanha-55off-mobile.png",
        alt: "Kit completo Kanak em veludo bege montado em um quarto com parede vinho, visto de frente.",
        largura: 1760,
        altura: 1328,
      },
    },
  },
  // ⏳ PENDENTE: o cliente ainda não informou a data de fim da campanha.
  // Sem ela, o texto da seção 5 mantém o marcador [DATA] e a landing não publica.
  prazo: null,
  meta: {
    titulo: "Até 55% OFF em colchões Kanak",
    descricao:
      "Colchões Kanak direto da fábrica, com até 55% OFF e frete especial. Fale com um especialista no WhatsApp e escolha o seu.",
  },
};
