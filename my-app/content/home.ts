/**
 * Copy da Home. É a copy do cliente, transcrita das pranchetas, já com os
 * dez ajustes H1–H10 aprovados em 2026-09-23 (specs/site.md §6.4).
 * Não editar sem passar pelo quadro de ajustes.
 */

export const HOME = {
  navegacao: [
    { rotulo: "Colchões", href: "#colchoes" },
    { rotulo: "Como escolher", href: "#como-escolher" },
    { rotulo: "Contato", href: "#contato" },
  ],

  banner: {
    tituloInicio: "Seu descanso começa com a ",
    tituloRealce: "escolha certa",
    apoio:
      "Dormir bem começa muito antes de deitar. Começa na escolha de um colchão que faça sentido para você, para o seu espaço e para a forma como você gosta de descansar.",
    // H1: saiu "as melhores opções" (superlativo sem prova)
    paragrafo1:
      "Na Kanak Colchões, você encontra opções de colchões, bases, cabeceiras e baús para transformar o quarto em um ambiente mais confortável, funcional e acolhedor.",
    destaque: "Seu sono é parte dos seus melhores dias.",
    paragrafo2:
      "Dormir bem muda o jeito como você vive o dia. Por isso, seu colchão precisa fazer mais do que compor o quarto: precisa cuidar do seu descanso.",
  },

  ciencia: {
    titulo: "A Ciência do Conforto: Tecnologia e Inovação para o Seu Descanso Profundo",
    // H2 e H3
    paragrafo1:
      "Por trás de cada costura e cada camada de um colchão Kanak, existe um compromisso inegociável com a ciência do sono. Nós não apenas criamos colchões; estudamos a ergonomia e o suporte anatômico que ajudam a manter a coluna alinhada durante a noite. Nossos produtos contam com tecnologia de regulação térmica, que contribui para uma temperatura agradável tanto nos dias quentes quanto nas noites mais frias.",
    // H4 e H5
    paragrafo2:
      "Além disso, a durabilidade dos materiais de alta resiliência ajuda a evitar aquele afundamento indesejado, mantendo a firmeza e o suporte por mais tempo. Quando você escolhe a Kanak Colchões, você escolhe a tranquilidade de levar para casa um produto fabricado com cuidado, pensado para o conforto e o suporte do seu corpo.",
  },

  comoEscolher: {
    titulo: "Qual colchão combina com você?",
    paragrafo1:
      "Nem todo colchão oferece a mesma experiência. Por isso, conhecer a estrutura e as características de cada modelo é uma etapa importante antes da compra.",
    paragrafo2:
      "Na Kanak, você encontra opções com molas ensacadas, espuma de alta densidade e colchões magnéticos.",
    firmezaIntro:
      "Além da estrutura, vale observar o nível de firmeza que melhor corresponde às suas preferências: macio, intermediário, firme ou extrafirme.",
    fecho:
      "A escolha fica muito mais segura quando você sabe exatamente o que está procurando.",
  },

  colchoes: {
    titulo: "Conheça nossos colchões",
    paragrafo1:
      "O colchão ideal começa pela escolha que combina com o seu espaço, sua preferência de conforto e a experiência que você busca para suas noites.",
    paragrafo2:
      "Na Kanak Colchões, você encontra diferentes tamanhos e modelos para escolher com mais segurança. Explore as opções e encontre o colchão que faz sentido para o seu quarto.",
    tituloTamanhos: "Escolha pelo tamanho ideal",
    tituloModelos: "Encontre o modelo que combina com você",
  },

  depoimentos: {
    titulo: "O Que Nossos Clientes Dizem: Histórias de Quem Voltou a Sonhar Acordado",
    // H7
    paragrafo1:
      "A maior prova do nosso trabalho está na experiência de quem já trocou de colchão com a Kanak. São clientes que contam como passaram a dormir melhor e a acordar mais dispostos.",
    // H8
    paragrafo2:
      "Cada depoimento que recebemos reforça nossa missão: levar conforto, bem-estar e o aconchego que você e sua família merecem. Conheça as histórias de quem já escolheu a Kanak.",
  },

  showroom: {
    titulo: "Do Nosso Showroom para a Sua Casa: Atendimento Personalizado",
    paragrafo1:
      "Sabemos que comprar um colchão envolve confiança. Por isso, na Kanak Colchões, colocamos a experiência do cliente em primeiro lugar desde o primeiro contato.",
    // H9: saiu "e sua saúde"
    paragrafo2:
      "Oferecemos condições especiais de pagamento, entrega ágil e segura, e um atendimento focado em entender exatamente o que você e sua família precisam para dormir melhor. Não deixe que noites mal dormidas prejudiquem sua rotina e seu humor. A transformação que a sua rotina precisa começa no seu quarto.",
    foto: {
      // ⏳ PLACEHOLDER: trocar pela foto real do showroom com atendimento (pedido F4).
      src: "/images/home/showroom-atendimento.png",
      alt: "Showroom da Kanak com várias camas montadas em cores diferentes e dois vendedores conversando ao fundo.",
    },
  },

  duvidas: {
    titulo: "Ainda ficou com alguma dúvida? Estamos aqui para ajudar.",
    paragrafo1:
      "Escolher um colchão fica muito mais fácil quando você pode conversar com quem entende do assunto.",
    paragrafo2:
      "Se você quer conhecer melhor os modelos Kanak, tirar dúvidas sobre tamanhos, cores, tecnologias, kits, condições de compra ou entrega, fale diretamente com nossa equipe.",
    paragrafo3:
      "Nosso atendimento é consultivo e personalizado, para ajudar você a encontrar a opção que mais combina com o seu espaço e com as suas preferências.",
    canais: "Entre em contato pelos nossos canais:",
  },
} as const;
