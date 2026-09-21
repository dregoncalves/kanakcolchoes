# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js 16.3.5 (App Router), TypeScript 5, Tailwind CSS v4, pnpm. Blog consumido headless do WordPress.

## Users

Pessoas de 25 a 60 anos, classe B- e C+, que decidem junto com o parceiro(a). Compram motivados por desgaste do colchão, dores físicas, ou necessidade de upgrade. Pico de acesso ocorre à tarde e à noite, pelo celular, em casa.

## Product Purpose

O site é focado em levar o visitante a iniciar uma conversa no WhatsApp para comprar um conjunto completo de cama. O objetivo secundário é elevar a percepção da marca (aparência premium), saindo da cara de template genérico.

## Positioning

A Kanak não vende colchão avulso, apenas kits completos (colchão, base box, cabeceira estofada, baú, 4 travesseiros). O cliente escolhe, recebe em casa (em 9 estados) e só paga na entrega, podendo devolver sem custo se não gostar.

## Operating Context

Os clientes acessam prioritariamente pelo celular, o que dita a hierarquia visual (mobile-first real). Toda a venda acontece via WhatsApp de forma consultiva; não há checkout, preços ou formulários no site. A decisão de compra é compartilhada, exigindo que o site seja fácil de mostrar.

## Capabilities and Constraints

- Sem e-commerce nativo: todos os CTAs abrem o WhatsApp com mensagem pré-preenchida.
- Campos sem dados reais (como algumas especificações técnicas) ficam fora; não se usam placeholders genéricos.
- Responsividade rigorosa: testes focados em quebras a partir de 360px.
- Desempenho crítico, especialmente para tráfego pago via celular (alvo: LCP < 2,5s em 4G).

## Brand Commitments

- A copy do cliente é 100% imutável. O layout deve se adaptar ao texto.
- Tom adulto e editorial: proibido apelo de preço baixo, promessa de cura para coluna, urgência agressiva, selos promocionais ou tom panfletário.
- Nenhuma cor verde no layout, exceto o ícone do WhatsApp.
- Paleta visual ancorada em tons claros, neutros e bordô como cor de assinatura.
- Proibido usar texto, logo ou fotos de marcas concorrentes de referência.

## Evidence on Hand

- Todo o conteúdo escrito do site já está estruturado em Markdown (`conteudo/`).
- 46 imagens disponíveis (`referencias-site/meus-produtos/imagens colchões Kanak`), entre renders e fotos de showroom real.
- Planilha de arquitetura de informação cobrindo de 17 a 20 páginas.

## Product Principles

1. **Celular é o ponto de partida**, não a adaptação do desktop.
2. **Silêncio visual e ritmo de escala** em vez de poluição: as páginas usam espaços em branco e contraste fotográfico para parecerem premium.
3. **A copy comanda**: repetições e decisões do cliente não são removidas.
4. **Venda consultiva, não self-service**: o site cria confiança e direciona para a equipe humana.

## Accessibility & Inclusion

Um único `h1` por página. Contraste mínimo AA (4,5:1 em texto corrido, 3:1 em texto grande) validado mesmo sobre fotos, com uso obrigatório de overlay. Navegação com foco visível; carrosséis navegáveis por botões, além de arraste; suporte a `prefers-reduced-motion`.
