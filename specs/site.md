# Especificação do site — Kanak Colchões

Fonte de verdade sobre **o que** construir. Visual em `specs/design.md`; histórico de decisões em `memoria.md`. Marcadores `⏳ PENDENTE` indicam dado que o cliente ainda não confirmou — nunca preencher por conta própria.

## 0. Wireframes (Claude Design)

Fonte de verdade da estrutura, da ordem das seções e dos CTAs. Ler antes de construir qualquer seção.

| Canvas | Link | Pranchetas |
| --- | --- | --- |
| Kanak · Home | https://claude.ai/artifact/Cs1NAmG378VSgbpBD1Pibj | Home desktop (1440), Mapa de CTAs do WhatsApp, Mobile parte 1 e parte 2 (390) |
| Kanak · Landing Google Ads | https://claude.ai/artifact/Vh7Ytw12aDvhwuiFmHfRhp | Desktop (1440), Mobile (390), Ajustes de copy |

A copy nas pranchetas é a do cliente (landing com os ajustes aprovados da seção 6.3; Home com os ajustes aprovados da seção 6.4).

## 1. Objetivo

Gerar conversas no WhatsApp com especialistas da Kanak. O site **não vende online**: não há carrinho, checkout, pagamento, login nem área do cliente. O fechamento acontece fora do site (WhatsApp, loja, vendedor).

Métrica principal: cliques em botões de WhatsApp (evento `clique_whatsapp`), segmentados pela `origem` do botão.

## 2. Público

- 25 a 60 anos, classes B− e C+.
- Estados atendidos pelos anúncios: MG, SP, PR, RJ, SC, MS, GO, DF e RS.
- Motivos de troca: desgaste visível, dores e desconforto, sono ruim, fim da vida útil, upgrade de tamanho.
- Objeção principal: decisão a dois — o cliente sempre conversa com o parceiro(a) antes de fechar.
- Horário de maior venda: tarde (14h–18h) e noite (19h–21h30), no celular, em casa, com a família.

## 3. Produto e proposta de valor

Conforto e durabilidade que justificam o preço, com prova técnica visível (densidade, firmeza, Inmetro, garantia). Não é "colchão baratinho" nem luxo inacessível. A Kanak fabrica os colchões (confirmado): "direto da fábrica" pode ser usado.

| Linha | Papel | Observação |
| --- | --- | --- |
| Kits completos (colchão + base box + cabeceira, opção de baú) | Foco de 100% dos anúncios | — |
| Colchões: molas ensacadas, espuma de alta densidade (Anatômico Ortopédico), magnético | Produto central | Garantia (copy do cliente): molas ensacadas 5 anos, Anatômico Ortopédico 8 anos. Magnético: ⏳ PENDENTE |
| Bases box, cabeceiras, baús de pé | Vendidos em kit | Specs por peça: ⏳ PENDENTE |

Tamanhos (medidas em cm):

| Tamanho | Medida | Nota |
| --- | --- | --- |
| Solteiro | 88 x 188 | — |
| Casal | 138 x 188 | — |
| Queen | 158 x 198 | — |
| King | 193 x 203 | Maior margem. Possivelmente o mais vendido (cliente não tem certeza) — selo "Mais vendido" só com confirmação |

Dados técnicos por modelo (densidade, firmeza, peso suportado por pessoa, tecido/tratamentos, Inmetro): em espera por decisão do cliente. Não exibir nada que não tenha sido fornecido. Onde o wireframe prevê dado técnico (ex.: espessura das camadas em "A Ciência do Conforto"), a interface deve funcionar sem ele.

## 4. Idioma

Português do Brasil em todo o site, nos metadados, nos `alt` e nas mensagens pré-preenchidas.

## 5. Páginas

| Página | Rota proposta | Layout | Status nesta entrega |
| --- | --- | --- | --- |
| Home institucional | `/` | Layout do site | Dentro do escopo |
| Landing Google Ads | `/lp/[slug]` | Layout próprio, sem menu do site; rodapé igual ao da Home | Dentro do escopo |
| Páginas de produto/categoria | — | Layout do site | **Fora desta entrega** (fica para depois) |
| Blog | `/blog`, `/blog/[slug]` | Layout do site; conteúdo vindo do WordPress (CMS headless) | **Dentro do escopo** (reaberto em 2026-09-24, escopo base: lista + artigo, sem categorias/tags/busca/autor) |
| Landing pages futuras | `/lp/[slug]` | Mesmo layout da landing | Estrutura preparada |

Links do cabeçalho: Colchões → `/#colchoes` (seção 4), Como escolher → `/#como-escolher` (seção 3), Blog → `/blog`, Contato → `/#contato` (Dúvidas). Âncoras absolutas (com `/` na frente): o cabeçalho também aparece no blog, fora da Home — substitui a decisão de 2026-09-23 de cabeçalho só com âncoras relativas (memoria.md, 2026-09-24). "Blog" entra também no rodapé.

## 6. Seções por página (ordem dos wireframes)

A ordem abaixo é obrigatória. A numeração segue a dos wireframes.

### 6.1 Home

0. **Cabeçalho** — logo (`my-app/public/logo.webp`); links Colchões, Como escolher, Contato; botão "Falar com especialista". No celular, menu pelo ícone de três linhas.
1. **Banner** — título "Seu descanso começa com a *escolha certa*", apoio, CTA "Melhore seu sono com a Kanak!" e quatro fotos verticais clicáveis, uma por tamanho (Queen, King, Casal, Solteiro), com nome e medida. Abaixo, dois parágrafos restantes da copy. No celular, as 4 fotos deslizam para o lado.
2. **A Ciência do Conforto** — ilustração de camadas (Regulação térmica, Suporte anatômico, Alta resiliência; espessuras ⏳ PENDENTE) + texto + CTA.
3. **Qual colchão combina com você?** (`#como-escolher`) — texto, escala de firmeza (Macio, Intermediário, Firme, Extrafirme), CTA, três cards com foto: Molas ensacadas, Espuma de alta densidade, Magnético.
4. **Conheça nossos colchões** (`#colchoes`) — "Escolha pelo tamanho ideal" (4 cards clicáveis) e "Encontre o modelo que combina com você" (3 cards clicáveis com foto e garantia) + CTA. No celular, tamanhos e modelos deslizam para o lado.
5. **Depoimentos** — 6 depoimentos reais do Google (nome, cidade, foto, autorização), carrossel de 3 por página no desktop, deslizante no celular. Até receber, espaços reservados — nunca texto inventado.
6. *(sem seção — a seção "Faça seu pedido e acompanhe sua entrega" da copy original não está no wireframe)*
7. **Showroom** — foto do showroom com atendimento + texto + CTA.
8. **Dúvidas** (`#contato`) — texto, três telefones como botões de WhatsApp, CTA principal.
9. **Rodapé** — marca, endereço, horário, redes, três telefones, mapa do showroom, CNPJ e razão social (dados ficam para depois; manter espaços reservados).

### 6.2 Landing Google Ads (layout separado, versão mobile própria)

0. **Cabeçalho mínimo** — logo + "Falar com especialista". Sem menu: todo clique leva ao WhatsApp.
1. **Banner trocável da campanha** — a seção inteira (arte, título, oferta, CTA) muda a cada campanha. Arte 1440×600 no desktop e versão vertical no celular. O banner inteiro é um link de WhatsApp.
2. **Acordar Cansado Não É Normal** — destaque "1/3", texto, CTA.
3. **Modelos & Tecnologias** (sobretítulo) / "O Tamanho Certo para o Seu Quarto, a Tecnologia Certa para a Sua Coluna" — 3 cards de tamanho (Queen, King, Casal & Solteiro) + "Escolha a Tecnologia" com 3 cards de modelo + CTA. No celular, modelos deslizam.
4. **Por Que a Kanak É a Escolha Certa?** — 4 argumentos (Garantia de até 8 Anos, Consultoria do Sono sob Medida, Facilidade Real no Seu Bolso, Logística Ágil e Segura) + carrossel de depoimentos reais + CTA.
5. **Sua Nova Rotina de Sono Começa Hoje!** — fechamento com prazo da campanha "[DATA]" + CTA.
6. **Rodapé** — o mesmo da Home (empilhado no celular).
- **Celular:** barra "Falar com especialista" fixa no pé da tela durante toda a rolagem.

### 6.3 Ajustes de copy aprovados (landing)

Somente estes trechos diferem da copy original do cliente. Todo o resto da copy fica como veio.

| Seção | Original | Na landing |
| --- | --- | --- |
| 1 Banner | Até 55% OFF nos Melhores Colchões do Brasil + Frete Especial! | Até 55% OFF em Colchões Kanak + Frete Especial! |
| 2 | O Seu Colchão Pode Estar Lhe Tirando a Saúde. | O Seu Colchão Pode Estar Atrapalhando o Seu Sono. |
| 2 | …seu corpo está pedindo socorro. | …pode ser hora de trocar de colchão. |
| 2 | Os colchões Kanak alinham sua coluna, aliviam os pontos de pressão e garantem o sono profundo que você precisa para se regenerar! | Os colchões Kanak ajudam a manter a coluna alinhada e aliviam os pontos de pressão, para um sono mais profundo e contínuo. |
| 2 e 3 | Descubra o colchão ideal aqui!! | Descubra o colchão ideal aqui! |
| 3 | MODELOS & TECNOLOGIAS: O Tamanho Certo… | "Modelos & Tecnologias" vira sobretítulo; o título segue igual |
| 3 | Queen Size (158x198): O mais vendido! Espaço perfeito para casais sem apertos | Queen Size · 158 x 198 cm · Espaço de sobra para casais, sem apertos. |
| 3 | Casal (138x188) & Solteiro (088x188) | Casal & Solteiro · 138 x 188 cm · 88 x 188 cm |
| 3 | Molas Ensacadas: Tecnologia Zero Movimento — se um se mexe, o outro não sente nada. | Isolamento de movimento: quando um se mexe, o outro quase não sente. |
| 3 | Anatômico Ortopédico: Alinhamento postural cirúrgico… | Suporte firme para o alinhamento da coluna, com espuma de alta resiliência. |
| 3 | Linha Magnética: Conforto com ação relaxante muscular. | Conforto para quem procura uma opção diferente das tradicionais. |
| 4 | POR QUE A KANAK É A ESCOLHA CERTA? | Por Que a Kanak É a Escolha Certa? |
| 4 | …Mas A Transformação da Sua Saúde | …Mas Noites Melhores de Sono |
| 4 | Garantia Blindada de até 8 Anos: Tranquilidade absoluta de comprar direto da fábrica… | Garantia de até 8 Anos: Compre direto da fábrica, sem intermediários. Se o seu colchão deformar dentro da garantia, a Kanak resolve. |
| 4 | Depoimento da Juliana M., "Cliente Verificada Kanak" | Espaços reservados para depoimentos reais |
| 5 | SUA NOVA ROTINA DE SONO COMEÇA HOJE! | Sua Nova Rotina de Sono Começa Hoje! |
| 5 | Diga Adeus ao Cansaço Crônico e Acorde Renovado Amanhã | Diga Adeus às Noites Mal Dormidas e Comece a Acordar Mais Disposto |
| 5 | O seu corpo não pode e não deve esperar… aceitando dores… | Se o seu colchão já está gasto, cada noite conta. Adiar a troca é continuar aceitando desconforto… |
| 5 | …transformar sua energia, sua saúde e sua qualidade de vida. | …ter mais energia e qualidade de vida. |
| 5 | Nossos lotes de fábrica têm alta rotatividade e a hora… é agora. | As condições desta campanha são válidas até [DATA]. |

"Zero Movimento" pode voltar se for nome comercial do produto. "Mais vendido" só volta com dado confirmado.

### 6.4 Ajustes de copy da Home — APROVADOS (2026-09-23)

A Home ganha ajustes, com os mesmos critérios da landing (sem promessa de saúde, sem superlativo ou número sem prova, sem "Comprar", sem exclamação dupla). Os dez trechos abaixo foram **aprovados em bloco em 2026-09-23**: a coluna Proposta é a copy vigente da Home. Segue pendente só a confirmação de H3 (se a regulação térmica existe em todos os modelos).

| # | Seção | Original | Proposta | Por quê |
| --- | --- | --- | --- | --- |
| H1 | 1 Banner | …você encontra as melhores opções de colchões, bases, cabeceiras e baús… | …você encontra opções de colchões, bases, cabeceiras e baús… | Superlativo sem prova (mesmo critério do "Melhores Colchões do Brasil" da landing) |
| H2 | 2 Ciência | …estudamos a ergonomia e o suporte anatômico necessário para alinhar perfeitamente a sua coluna durante toda a noite. | …estudamos a ergonomia e o suporte anatômico que ajudam a manter a coluna alinhada durante a noite. | "Alinhar perfeitamente" é promessa de resultado |
| H3 | 2 Ciência | Nossos produtos contam com tecnologia de regulação térmica, garantindo uma temperatura agradável… | Nossos produtos contam com tecnologia de regulação térmica, que contribui para uma temperatura agradável… | "Garantindo" promete resultado. Confirmar com o cliente se a regulação térmica existe em todos os modelos |
| H4 | 2 Ciência | …evita aquele afundamento indesejado ao longo do tempo, mantendo a firmeza e o suporte original por anos. | …ajuda a evitar aquele afundamento indesejado, mantendo a firmeza e o suporte por mais tempo. | Promessa absoluta de durabilidade |
| H5 | 2 Ciência | …um produto testado, certificado e projetado por especialistas em saúde postural e conforto de alto padrão. | …um produto fabricado com cuidado, pensado para o conforto e o suporte do seu corpo. | Certificação e "especialistas em saúde postural" sem comprovação. Se o Inmetro for confirmado, "certificado" volta |
| H6 | 3 Qual colchão | CTA: Compre seu colchão agora! | CTA: Descubra o colchão ideal para você! | Site não vende; "Comprar" dá cara de checkout |
| H7 | 5 Depoimentos | A maior prova da nossa excelência está no sorriso e no alívio de milhares de famílias que mudaram suas vidas após trocar de colchão com a Kanak. Pessoas que sofriam com dores crônicas na lombar, insônia ou cansaço excessivo ao acordar hoje relatam o impacto positivo de noites contínuas de sono reparador. | A maior prova do nosso trabalho está na experiência de quem já trocou de colchão com a Kanak. São clientes que contam como passaram a dormir melhor e a acordar mais dispostos. | "Milhares" sem dado; "dores crônicas" e "insônia" são termos clínicos |
| H8 | 5 Depoimentos | Cada depoimento que recebemos reforça nossa missão: levar saúde, bem-estar e o aconchego que você e sua família merecem. Junte-se a milhares de clientes satisfeitos e descubra por que a Kanak Colchões é referência em qualidade, durabilidade e satisfação garantida. | Cada depoimento que recebemos reforça nossa missão: levar conforto, bem-estar e o aconchego que você e sua família merecem. Conheça as histórias de quem já escolheu a Kanak. | Alegação de saúde, número sem dado, "satisfação garantida" é promessa |
| H9 | 7 Showroom | Não deixe que noites mal dormidas prejudiquem sua rotina, seu humor e sua saúde. | Não deixe que noites mal dormidas prejudiquem sua rotina e seu humor. | Alegação de saúde (mesmo critério da landing) |
| H10 | 7 Showroom | CTA: Fale com nossos especialistas!! | CTA: Fale com nossos especialistas! | Exclamação dupla |

H6 e H10 já estão refletidos no Mapa de CTAs (§7.3). `data-origem` e mensagens não mudaram.

## 7. Funcionalidades

### 7.1 Links de WhatsApp

- Formato: `https://wa.me/55<DDD><número>?text=<mensagem codificada>`.
- Os três números são WhatsApp. Botões principais apontam para o principal, **(41) 99842-5771** (sem rodízio).
- Os três números — (41) 99842-5771, (41) 98726-5068 e (41) 98410-1101 — aparecem em Dúvidas e no rodapé; cada um abre o seu próprio número.
- Cada botão tem mensagem pré-preenchida própria e atributo `data-origem` (tabela 7.3). Manter as frases estáveis: o atendimento identifica a seção pela frase inicial. Se alguma mudar, atualizar a tabela e avisar o atendimento.
- Links abrem em nova aba (`target="_blank" rel="noopener"`).
- Rótulo acessível claro em todo botão.

### 7.2 Mensuração

- GA4: evento `clique_whatsapp` com parâmetro `origem` (valor de `data-origem`). Marcar como conversão.
- Meta Pixel: evento `Contact` com parâmetro `origem`. Marcar como conversão.
- IDs de GA4 e Pixel: ⏳ PENDENTE (deixar configuráveis por variável de ambiente).
- **Aviso de cookies (LGPD):** obrigatório. Banner discreto no rodapé da tela, com aceitar/recusar. GA4 e Pixel só carregam após consentimento (Consent Mode v2 no GA4). Não cobrir o CTA fixo de WhatsApp.

### 7.3 Mapa de CTAs

Transcrito dos wireframes (prancheta "Mapa de CTAs do WhatsApp" + código dos botões). Somente estes CTAs existem. Número: 99842-5771, salvo nas linhas de telefones.

**Home** (mensagens começam com "Olá! Vim pelo site…")

| Seção | Botão | `data-origem` | Mensagem pré-preenchida |
| --- | --- | --- | --- |
| Cabeçalho | Falar com especialista | `header` | Olá! Vim pelo site e quero falar com um especialista em colchões. |
| 1 Banner | Melhore seu sono com a Kanak! | `banner` | Olá! Vim pelo site e quero ajuda para escolher o colchão certo para mim. |
| 1 Banner | Foto de cada tamanho | `hero_queen`, `hero_king`, `hero_casal`, `hero_solteiro` | Olá! Vim pelo site e quero conhecer as opções de colchão [Tamanho] ([medidas]). |
| 2 Ciência do conforto | Encontre o colchão ideal para o seu descanso! | `ciencia` | Olá! Vim pelo site, li sobre a tecnologia dos colchões Kanak e quero encontrar o ideal para o meu descanso. |
| 3 Qual colchão | Descubra o colchão ideal para você! | `como_escolher` | Olá! Vim pelo site e quero ajuda para escolher entre molas ensacadas, espuma e magnético. |
| 4 Tamanhos | Card de cada tamanho | `tamanho_queen`, `tamanho_king`, `tamanho_casal`, `tamanho_solteiro` | Olá! Vim pelo site e quero conhecer as opções de colchão [Tamanho] ([medidas]). Ex.: "Queen Size (158 x 198 cm)" |
| 4 Modelos | Card de cada modelo | `modelo_molas`, `modelo_anatomico`, `modelo_magnetico` | Olá! Vim pelo site e quero saber mais sobre o colchão [Modelo]. ("de Molas Ensacadas", "Anatômico Ortopédico", "Magnético") |
| 4 Conheça | Escolha seu colchão agora! | `colchoes` | Olá! Vim pelo site e quero escolher meu colchão. Podem me ajudar? |
| 5 Depoimentos | Tenha seu colchão dos sonhos! | `depoimentos` | Olá! Vim pelo site, vi os depoimentos e quero conhecer os colchões Kanak. |
| 7 Showroom | Fale com nossos especialistas! | `showroom` | Olá! Vim pelo site e quero falar com um especialista sobre pagamento, entrega e atendimento. |
| 8 Dúvidas | Fale agora com um especialista Kanak. | `duvidas` | Olá! Vim pelo site e tenho uma dúvida sobre os colchões Kanak. |
| 8 Dúvidas | Os 3 telefones (cada um o seu número) | `duvidas_fone_1`, `_2`, `_3` | Olá! Vim pelo site e tenho uma dúvida sobre os colchões Kanak. |
| Rodapé | Os 3 telefones (cada um o seu número) | `rodape_fone_1`, `_2`, `_3` | Olá! Vim pelo site e quero falar com a Kanak. |
| Blog · lista | Fale com um especialista! | `blog_lista` | Olá! Vim pelo blog da Kanak e quero ajuda para escolher meu colchão. |
| Blog · artigo | Fale com um especialista! | `blog_artigo` | Olá! Vim de um artigo do blog da Kanak e quero ajuda para escolher meu colchão. |

**Landing Google Ads** (mensagens começam com "Olá! Vim pelo anúncio…")

| Seção | Botão | `data-origem` | Mensagem pré-preenchida |
| --- | --- | --- | --- |
| Cabeçalho | Falar com especialista | `lp_header` | Olá! Vim pelo anúncio e quero falar com um especialista da Kanak. |
| Barra fixa (celular) | Falar com especialista | `lp_barra_fixa` | Olá! Vim pelo anúncio e quero falar com um especialista da Kanak. |
| 1 Banner | Tenha o melhor colchão! (banner inteiro clicável) | `lp_banner` | Olá! Vi a promoção de até 55% OFF e quero aproveitar. |
| 2 Problema | Descubra o colchão ideal aqui! | `lp_problema` | Olá! Vim pelo anúncio. Acordo cansado e quero descobrir o colchão ideal para mim. |
| 3 Tamanhos | Card Queen | `lp_tamanho_queen` | Olá! Vim pelo anúncio e quero ver as opções em Queen Size (158 x 198 cm) na promoção. |
| 3 Tamanhos | Card King | `lp_tamanho_king` | Olá! Vim pelo anúncio e quero ver as opções em King Size (193 x 203 cm) na promoção. |
| 3 Tamanhos | Card Casal & Solteiro | `lp_tamanho_casal_solteiro` | Olá! Vim pelo anúncio e quero ver as opções em Casal ou Solteiro na promoção. |
| 3 Tecnologia | Card Molas Ensacadas | `lp_modelo_molas` | Olá! Vim pelo anúncio e quero saber mais sobre o colchão de Molas Ensacadas. |
| 3 Tecnologia | Card Anatômico Ortopédico | `lp_modelo_anatomico` | Olá! Vim pelo anúncio e quero saber mais sobre o colchão Anatômico Ortopédico. |
| 3 Tecnologia | Card Linha Magnética | `lp_modelo_magnetico` | Olá! Vim pelo anúncio e quero saber mais sobre a Linha Magnética. |
| 3 | Descubra o colchão ideal aqui! | `lp_modelos` | Olá! Vim pelo anúncio e quero ajuda para escolher tamanho e tecnologia. |
| 4 Por que a Kanak | Fale com nossos especialistas agora! | `lp_especialistas` | Olá! Vim pelo anúncio e quero uma consultoria para escolher meu colchão. |
| 5 Fechamento | Quero o colchão perfeito! | `lp_fechamento` | Olá! Vim pelo anúncio e quero receber vídeos dos modelos, fotos do acabamento e uma indicação de colchão. |
| Rodapé | Os 3 telefones (cada um o seu número) | `lp_rodape_fone_1`, `_2`, `_3` | Olá! Vim pelo anúncio e quero falar com a Kanak. |

## 8. Ofertas

Desconto, parcelamento, frete e brindes podem aparecer "com critérios": como reforço, nunca como protagonista. Não ganham contador nem cor de urgência. O banner trocável da landing é o único lugar onde a oferta encabeça a seção, por decisão do wireframe.

Condições confirmadas pelo cliente: "até 55% OFF" é real; parcelamento em 12x sem juros no cartão; há desconto no PIX (a copy não cita percentual). Data de fim da campanha: ⏳ PENDENTE — o texto "[DATA]" na seção 5 da landing precisa dela antes de publicar.

## 9. Stack técnica

- Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, pnpm.
- `@phosphor-icons/react` (ícones, import por `/dist/ssr`) e `motion` (animação, sempre via `LazyMotion` + `domAnimation`). Ambos autorizados em 2026-09-23. `sanitize-html` autorizado em 2026-09-24, para limpar o HTML vindo do WordPress antes de renderizar (`lib/wordpress.ts`).
- Projeto em `my-app/`.
- Tokens de `design-system/tokens.css` expostos ao Tailwind v4 via `@theme` no CSS global.
- Fontes com `next/font`, imagens com `next/image`.
- Hospedagem: **Hostinger, app Node (`next start`)**, plano Business. Decidido em 2026-09-24 com dado medido em produção: `next/image` reduziu um banner de 4.159 KB para 63 KB em AVIF — só existe com servidor Node. Exportação estática foi descartada (sem ISR, sem `redirects()`, imagens cruas).
- O site está publicado, provisoriamente, no domínio temporário da Hostinger `https://beige-octopus-880165.hostingersite.com`. **`kanakcolchoes.com.br` é outro site, em produção, e não é tocado por este projeto** até a virada (sem data definida).
- WordPress headless do blog: instalação **nova e dedicada**, em `cms.kanakcolchoes.com.br`, `noindex`. O Next.js lê os posts pela REST API (`/wp-json/wp/v2/`, ver `WORDPRESS_API_URL`). O WordPress de `kanakcolchoes.com.br` (produção) não é usado como CMS.
- Indexação por busca controlada por `SITE_INDEXAVEL` (variável de ambiente): desligada no domínio temporário, liga na virada. Sem ela, toda página sai `noindex, nofollow` e o sitemap fica vazio.
- Alterar a stack exige autorização.

## 10. Requisitos não funcionais

- **Responsividade:** mobile-first. A maior parte do tráfego vem de anúncios no celular, à tarde e à noite.
- **Acessibilidade:** contraste AA (pares de tokens conferidos em `specs/design.md`); foco visível; `alt` descritivo em todas as fotos; botões de WhatsApp com rótulo claro; HTML semântico; navegação por teclado; carrosséis com botões anterior/próximo rotulados.
- **Desempenho:** movimento com `LazyMotion` + `domAnimation` (subconjunto de DOM), nunca o pacote `motion` inteiro; `next/image` com `sizes` corretos e `priority` só na imagem do banner; `next/font` com subset latin e `display: swap`; Core Web Vitals no verde (LCP < 2,5 s, CLS < 0,1, INP < 200 ms). A landing de anúncio precisa carregar rápido: sem bibliotecas pesadas, sem vídeo em autoplay acima da dobra, scripts de mensuração sem bloquear a renderização. Carrosséis com CSS scroll-snap, sem biblioteca.
- **SEO:** metadados por página, Open Graph, `sitemap`, e redirecionamentos das URLs do WordPress atual (⏳ lista de URLs a levantar). Landing de anúncio com `noindex`.

## 11. Escopo

**Dentro:** Home (desktop + mobile), Landing Google Ads (desktop + mobile), estrutura para landing pages futuras, mensuração de cliques no WhatsApp, Blog (lista + artigo, WordPress headless).

**Depois:** páginas de produto/categoria; categorias/tags/busca/autor no blog.

**Blog:** reaberto em 2026-09-24 (a decisão de 2026-09-23 que tirou o blog desta entrega fica substituída). Escopo desta etapa: `/blog` (lista) e `/blog/[slug]` (artigo), sem categorias, tags, busca, autor ou relacionados.

**Fora:** carrinho, checkout, pagamento online, login, área do cliente.

## 12. Informações a definir

1. Data de fim da campanha dos 55% OFF.
2. Confirmação de qual tamanho é o mais vendido (cliente acha que é o King).
3. Densidade, firmeza, peso suportado, Inmetro, tecido por modelo; garantia do magnético; espessura das camadas — em espera por decisão do cliente.
4. Rodapé: endereço, horário, CNPJ, razão social, redes sociais (fica para depois).
5. Volume de artigos do blog (o blog entrou em 2026-09-24; hoje só o post de exemplo do WordPress).
6. ~~Plano da Hostinger e subdomínio do WordPress~~ — resolvido em 2026-09-24: Business, app Node, `cms.kanakcolchoes.com.br`.
7. IDs de GA4 e Meta Pixel.
8. Logo em SVG ou PNG transparente em alta resolução, com versão para fundo escuro (hoje só `my-app/public/logo.webp`, 300 × 152, fundo branco).
9. Fotos pedidas pelo wireframe: 4 camas verticais (mesma luz e ângulo), corte do colchão, uma foto por modelo, showroom com atendimento; 6 depoimentos reais com autorização; arte do banner da campanha (1440×600 + vertical).
10. Nova copy do cliente (vai ser enviada; não restaurar `conteudo/` do commit `0dc9467`).
11. ~~Uso de imagens geradas por IA~~ — **aprovado em 2026-09-23**. As 14 imagens entram no site; 4 seguem marcadas como placeholder para troca por foto real.
12. Confirmar se a regulação térmica existe em todos os modelos (ajuste H3 da Home).
