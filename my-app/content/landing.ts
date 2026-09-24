/**
 * Copy da landing de anúncio. É a copy do cliente com os ajustes aprovados
 * no quadro "Ajustes de copy" da prancheta (specs/site.md §6.3).
 * Só o bloco do banner muda de campanha para campanha (content/campanhas/).
 */

export const LANDING = {
  problema: {
    tituloInicio: "Acordar Cansado Não É Normal. ",
    tituloRealce: "O Seu Colchão Pode Estar Atrapalhando o Seu Sono.",
    numero: "1/3",
    legendaNumero: "Passamos 1/3 da vida dormindo.",
    paragrafo1:
      "Se você acorda com dores na lombar ou desperta toda vez que seu parceiro se mexe, pode ser hora de trocar de colchão.",
    paragrafo2:
      "Os colchões Kanak ajudam a manter a coluna alinhada e aliviam os pontos de pressão, para um sono mais profundo e contínuo.",
  },

  modelos: {
    sobretitulo: "Modelos & Tecnologias",
    titulo: "O Tamanho Certo para o Seu Quarto, a Tecnologia Certa para a Sua Coluna",
    tituloTecnologia: "Escolha a Tecnologia",
  },

  porQue: {
    titulo: "Por Que a Kanak É a Escolha Certa?",
    apoio: "A Segurança de Quem Não Vende Apenas Colchões, Mas Noites Melhores de Sono",
    argumentos: [
      {
        icone: "escudo",
        titulo: "Garantia de até 8 Anos",
        texto:
          "Compre direto da fábrica, sem intermediários. Se o seu colchão deformar dentro da garantia, a Kanak resolve.",
      },
      {
        icone: "conversa",
        titulo: "Consultoria do Sono sob Medida",
        texto:
          "Não compre no escuro! Nossos especialistas analisam suas necessidades e gostos para indicar o melhor colchão para você via WhatsApp.",
      },
      {
        icone: "cartao",
        titulo: "Facilidade Real no Seu Bolso",
        texto:
          "Parcele em até 12x sem juros no cartão ou aproveite nosso desconto máximo exclusivo para pagamento via PIX.",
      },
      {
        icone: "entrega",
        titulo: "Logística Ágil e Segura",
        texto:
          "Seu novo colchão sai da fábrica e vai direto para o seu quarto, protegido e pronto para uso.",
      },
    ],
  },

  fechamento: {
    tituloInicio: "Sua Nova Rotina de Sono ",
    tituloRealce: "Começa Hoje!",
    apoio: "Diga Adeus às Noites Mal Dormidas e Comece a Acordar Mais Disposto",
    paragrafo1:
      "Se o seu colchão já está gasto, cada noite conta. Adiar a troca é continuar aceitando desconforto, indisposição e dias arrastados.",
    /** `{prazo}` recebe a data de fim da campanha; sem data, fica o marcador. */
    paragrafo2:
      "Investir no seu descanso é o primeiro passo para ter mais energia e qualidade de vida. As condições desta campanha são válidas até {prazo}.",
    paragrafo3:
      "Toque no botão abaixo para falar com nossos especialistas, receber vídeos detalhados dos modelos, fotos do acabamento e uma consultoria personalizada para descobrir o colchão perfeito para você!",
  },
} as const;
