import type { Origem } from "./ctas";

/**
 * Tamanhos e modelos. Textos copiados das pranchetas (a copy do cliente é
 * imutável). Nenhum dado técnico entra aqui sem confirmação do cliente:
 * densidade, firmeza por modelo, peso suportado, Inmetro e a garantia do
 * magnético seguem ⏳ PENDENTES (specs/site.md §3).
 */

export interface Tamanho {
  nome: string;
  /** Medidas em cm, usadas no rótulo e no desenho da cama vista de cima. */
  larguraCm: number;
  comprimentoCm: number;
  medida: string;
  descricao: string;
  /** Quantas almofadas o desenho mostra. */
  travesseiros: 1 | 2;
  origemHero: Origem;
  origemCard: Origem;
  /** Foto vertical do banner. `null` mostra o espaço reservado. */
  foto: { src: string; alt: string } | null;
}

export const TAMANHOS: Tamanho[] = [
  {
    nome: "Queen Size",
    larguraCm: 158,
    comprimentoCm: 198,
    medida: "158 x 198 cm",
    descricao:
      "Uma escolha para quem busca mais espaço para dormir, sem abrir mão de uma boa proporção para o ambiente. Disponível com nível de firmeza intermediário.",
    travesseiros: 2,
    origemHero: "hero_queen",
    origemCard: "tamanho_queen",
    foto: {
      src: "/images/home/banner-queen.png",
      alt: "Cama Queen Size montada em um quarto, com cabeceira capitonê bege, colchão de tampo branco e baú de veludo bege ao pé da cama.",
    },
  },
  {
    nome: "King Size",
    larguraCm: 193,
    comprimentoCm: 203,
    medida: "193 x 203 cm",
    descricao:
      "Mais espaço para aproveitar a cama com conforto. Uma opção para quem valoriza uma área maior para dormir e quer transformar o quarto em um verdadeiro espaço de descanso.",
    travesseiros: 2,
    origemHero: "hero_king",
    origemCard: "tamanho_king",
    foto: {
      src: "/images/home/banner-king.png",
      alt: "Cama King Size montada em um quarto, com cabeceira capitonê grafite, colchão com pillow top creme e baú de veludo grafite ao pé da cama.",
    },
  },
  {
    nome: "Casal",
    larguraCm: 138,
    comprimentoCm: 188,
    medida: "138 x 188 cm",
    descricao:
      "Uma medida tradicional para quartos de casal, equilibrando espaço para duas pessoas e aproveitamento do ambiente.",
    travesseiros: 2,
    origemHero: "hero_casal",
    origemCard: "tamanho_casal",
    foto: {
      src: "/images/home/banner-casal.png",
      alt: "Cama de casal montada em um quarto, com cabeceira capitonê vinho, colchão de tampo branco e baú de veludo vinho ao pé da cama.",
    },
  },
  {
    nome: "Solteiro",
    larguraCm: 88,
    comprimentoCm: 188,
    medida: "88 x 188 cm",
    descricao:
      "Uma alternativa prática para quartos individuais, dormitórios e ambientes que precisam aproveitar melhor cada espaço.",
    travesseiros: 1,
    origemHero: "hero_solteiro",
    origemCard: "tamanho_solteiro",
    // Foto real do showroom. Ainda não é a frontal da família do banner
    // (memoria.md, pendência 12).
    foto: {
      src: "/images/home/banner-solteiro.jpg",
      alt: "Cama Solteiro no showroom, com cabeceira capitonê verde, colchão com pillow top branco, uma almofada e baú de veludo verde ao pé da cama.",
    },
  },
];

export interface Modelo {
  nome: string;
  /** Texto da Home (seção 4). */
  descricaoHome: string;
  /** Texto da landing (seção 3), com o nome comercial usado no anúncio. */
  nomeLanding: string;
  descricaoLanding: string;
  origemHome: Origem;
  origemLanding: Origem;
  foto: { src: string; alt: string };
}

export const MODELOS: Modelo[] = [
  {
    nome: "Molas Ensacadas",
    descricaoHome:
      "Uma das principais opções da Kanak, com 5 anos de garantia. Ideal para quem deseja conhecer uma estrutura de colchão desenvolvida com molas ensacadas.",
    nomeLanding: "Molas Ensacadas",
    descricaoLanding: "Isolamento de movimento: quando um se mexe, o outro quase não sente.",
    origemHome: "modelo_molas",
    origemLanding: "lp_modelo_molas",
    foto: {
      src: "/images/shared/modelo-molas-ensacadas.png",
      alt: "Corte de um colchão Kanak de molas ensacadas: molas envolvidas em tecido entre camadas de espuma, com lateral em veludo vinho.",
    },
  },
  {
    nome: "Anatômico Ortopédico",
    descricaoHome: "Uma alternativa para quem busca esse tipo de estrutura, com 8 anos de garantia.",
    nomeLanding: "Anatômico Ortopédico",
    descricaoLanding:
      "Suporte firme para o alinhamento da coluna, com espuma de alta resiliência.",
    origemHome: "modelo_anatomico",
    origemLanding: "lp_modelo_anatomico",
    foto: {
      src: "/images/shared/modelo-anatomico.png",
      alt: "Colchão Kanak Anatômico Ortopédico com um corte que mostra o bloco de espuma de alta densidade por dentro.",
    },
  },
  {
    nome: "Magnético",
    descricaoHome:
      "Para quem procura uma opção diferente entre as alternativas de colchões disponíveis na Kanak.",
    nomeLanding: "Linha Magnética",
    descricaoLanding: "Conforto para quem procura uma opção diferente das tradicionais.",
    origemHome: "modelo_magnetico",
    origemLanding: "lp_modelo_magnetico",
    foto: {
      // ⏳ PLACEHOLDER: trocar pela foto real da estrutura do magnético (pedido F3).
      src: "/images/shared/modelo-magnetico-PLACEHOLDER.png",
      alt: "Colchão Kanak da linha magnética visto de três quartos, com tampo branco matelassê e lateral em veludo bege.",
    },
  },
];

/** Cards da seção 3 da Home: como escolher a tecnologia. */
export const TECNOLOGIAS = [
  {
    nome: "Molas ensacadas",
    descricao:
      "Os colchões de molas ensacadas são uma das alternativas disponíveis para quem busca conhecer diferentes estruturas de colchão.",
    foto: {
      src: "/images/home/tec-molas-ensacadas.png",
      alt: "Três molas ensacadas, cada uma envolvida em tecido branco.",
    },
  },
  {
    nome: "Espuma de alta densidade",
    descricao:
      "Já os modelos de espuma permitem considerar características como densidade e nível de firmeza.",
    foto: {
      src: "/images/home/tec-espuma.png",
      alt: "Bloco de espuma de alta densidade cor creme, com a estrutura de células aparente no corte.",
    },
  },
  {
    nome: "Magnético",
    descricao:
      "Também existem opções de colchões magnéticos para quem deseja conhecer essa categoria.",
    foto: {
      // ⏳ PLACEHOLDER: trocar pela foto real da estrutura do magnético (pedido F3).
      src: "/images/home/tec-magnetico-PLACEHOLDER.png",
      alt: "Detalhe do tampo matelassê branco de um colchão Kanak, com o debrum da borda em primeiro plano.",
    },
  },
];

/** Escala de firmeza (seção 3). O texto acompanha a cor: não depender só dela. */
export const FIRMEZA = ["Macio", "Intermediário", "Firme", "Extrafirme"] as const;

/**
 * Camadas da seção 2. A espessura de cada uma é ⏳ PENDENTE: enquanto
 * `espessura` for `null`, a interface simplesmente não mostra o número.
 */
export const CAMADAS = [
  { nome: "Regulação térmica", espessura: null as string | null },
  { nome: "Suporte anatômico", espessura: null as string | null },
  { nome: "Alta resiliência", espessura: null as string | null },
];

/** Tamanhos da landing: o wireframe junta Casal e Solteiro em um card. */
export const TAMANHOS_LANDING = [
  {
    nome: "Queen Size",
    medida: "158 x 198 cm",
    descricao: "Espaço de sobra para casais, sem apertos.",
    origem: "lp_tamanho_queen" as Origem,
    camas: [{ larguraCm: 158, comprimentoCm: 198, travesseiros: 2 as const }],
  },
  {
    nome: "King Size",
    medida: "193 x 203 cm",
    descricao: "O máximo em espaço, luxo e liberdade.",
    origem: "lp_tamanho_king" as Origem,
    camas: [{ larguraCm: 193, comprimentoCm: 203, travesseiros: 2 as const }],
  },
  {
    nome: "Casal & Solteiro",
    medida: "138 x 188 cm · 88 x 188 cm",
    descricao: "Suporte postural compacto e eficiente.",
    origem: "lp_tamanho_casal_solteiro" as Origem,
    camas: [
      { larguraCm: 138, comprimentoCm: 188, travesseiros: 2 as const },
      { larguraCm: 88, comprimentoCm: 188, travesseiros: 1 as const },
    ],
  },
];

/**
 * Depoimentos: seis espaços reservados. ⏳ PENDENTE — só entram avaliações
 * reais do Google, com nome, cidade, foto e autorização. Nunca inventar.
 */
export interface Depoimento {
  texto: string;
  nome: string;
  cidade: string;
  foto: { src: string; alt: string } | null;
}

export const DEPOIMENTOS: Depoimento[] = Array.from({ length: 6 }, (_, i) => ({
  texto: "[Depoimento real do cliente, copiado da avaliação no Google, com autorização.]",
  nome: `[Nome ${i + 1}]`,
  cidade: "[Cidade]",
  foto: null,
}));
