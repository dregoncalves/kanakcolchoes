# specs/design.md — fonte de verdade visual

Escopo e rotas em @specs/site.md · Mapa copy→componente em @specs/conteudo.md · Imagens em @imagens.md · Histórico em @memoria.md
Criado em 21/09/2026.

> Nenhuma decisão visual entra no código sem estar aqui. Se o layout e o texto do cliente brigarem, **o layout muda**.

---

## 1. O que foi analisado antes de escrever este arquivo

| Fonte | O que ficou |
| --- | --- |
| `referencias-site/eight-sleep/` (eightsleep.com) — referência única aprovada | Fundo claro neutro dominante, hero fotográfico full-bleed com texto no canto superior esquerdo, seções alternando claro/escuro, grades de cards foto+legenda, tipografia quieta, muito respiro, blocos escuros reservados para autoridade e prova. Ritmo: foto grande → grade de 3 → bloco de texto curto centralizado → prova → fechamento. |
| `referencias-site/kanak/homepage.png` + prints das 16 páginas atuais | O que **não** repetir: botão verde-limão de e-commerce, selo promocional circular ("8 ANOS" em vermelho), foto de banco genérica (mulher com luz azul, casal idoso com tablet, camadas coloridas de espuma), gradiente cinza de marketplace, blocos empilhados sem hierarquia, excesso de exclamação em botão. O que **fica**: a paleta bordô + amarelo e o uso de faixas de cor cheia para separar seções. |
| `referencias-site/kanak/landing-page/landing-page.png` | A LP atual já nasce com barra de garantias no topo e vitrine por tamanho — estrutura correta, execução poluída. Mantém-se a estrutura, refaz-se a execução. |
| `referencias-site/meus-produtos/imagens colchões Kanak` — 46 arquivos | Metade é foto real de showroom feita com celular (vertical 9:16, luz mista, cortina roxa, teto de PVC, sala apertada); a outra metade é render/ambientação limpa (suíte decorada, tapete, planta, luz quente). **O render sustenta hero; a foto de showroom sustenta card vertical e prova de acabamento.** Ângulo disponível é quase sempre o mesmo 3/4 a partir do pé da cama — o layout não pode depender de variedade de ângulo que não existe. Largura máxima do banco: 1280 px. |
| Briefing do cliente | Proíbe apelo de preço baixo, promessa de cura, tom agressivo/panfletário e poluição visual. Referências citadas por ele (Luuna, Cama In Box, Guldi) foram **rejeitadas** em favor do Eight Sleep — ver @memoria.md. |

**Uso das referências:** direção de estrutura e atmosfera, nada mais. Não copiar texto, logo, nome, identidade, imagem, elemento de marca nem layout idêntico do Eight Sleep. A identidade final é da Kanak.

## 2. Direção visual

**Uma frase:** quarto de verdade, fotografado com calma, sobre papel claro — com o bordô entrando como cor de marca, não como fundo de anúncio.

Três princípios:

1. **Silêncio entre blocos.** O conteúdo do cliente é longo. O que dá ar premium aqui não é ornamento, é espaço em branco e ritmo de escala (foto grande → texto curto → grade → texto curto).
2. **Bordô é assinatura, não ambiente.** No site atual o bordô ocupa seções inteiras e o resultado fica pesado. Aqui ele é botão, detalhe, faixa de âncora e um bloco escuro por página, no máximo dois.
3. **O produto é um quarto, não um objeto técnico.** Kanak vende a cama montada. A foto mostra a cama no ambiente; o corte macro existe só para provar acabamento (capitonê, botão, veludo).

## 3. Paleta

Herdada do site atual (bordô + amarelo), amostrada dos prints e normalizada para contraste AA.

### Principal

| Token | Hex | Uso |
| --- | --- | --- |
| `--kanak-bordo-900` | `#3D0609` | Fundo de bloco escuro, rodapé |
| `--kanak-bordo-800` | `#57090C` | Bordô de marca (amostrado do rodapé atual). Fundo de faixa, logo |
| `--kanak-bordo-700` | `#7A1420` | Botão primário |
| `--kanak-bordo-600` | `#93202C` | Hover do botão primário |
| `--kanak-areia-100` | `#F6F1E7` | Fundo de seção alternada |
| `--kanak-areia-200` | `#E1D3B0` | Faixa de destaque (amostrada do site atual) |
| `--kanak-ouro-500` | `#C8952A` | Amarelo da marca: detalhe, ícone, sublinhado, borda de card em bloco escuro |
| `--kanak-ouro-400` | `#E4BE63` | Ouro claro, **só** sobre fundo escuro (texto, borda, ícone) |

### Neutros

| Token | Hex | Uso |
| --- | --- | --- |
| `--kanak-tinta-900` | `#1A1614` | Texto de título |
| `--kanak-tinta-700` | `#3D3733` | Texto corrido |
| `--kanak-tinta-500` | `#6B625B` | Texto de apoio, legenda |
| `--kanak-linha` | `#E3DCD2` | Borda de card, divisória |
| `--kanak-papel` | `#FFFFFF` | Fundo padrão |

### Regras de cor

- Fundo padrão é claro. Bloco escuro em bordô: **no máximo dois por página**, e nunca dois seguidos.
- Ouro nunca é fundo de área grande e nunca é cor de botão primário. Ele é detalhe.
- Texto bordô sobre areia só em título grande (≥ 28 px); em corpo de texto, usar `--kanak-tinta-700`.
- **Verde está proibido no site inteiro** — é a cor dos botões do WordPress atual e não pertence à marca. O verde do ícone do WhatsApp é a única exceção, e só dentro do ícone.
- Nenhuma cor nova sem passar por este arquivo.

### Cores de produto (as 11 do veludo)

São **amostras de produto**, não cores de interface. Vivem apenas no seletor de cores, como círculo/retângulo de amostra com rótulo em texto. Nunca pintam fundo, botão ou título.

## 4. Tipografia

Três famílias, todas Google Fonts, carregadas por `next/font`. **Escolha provisória aprovada** — trocar depois é mudança pontual neste arquivo + tokens.

| Papel | Família | Uso |
| --- | --- | --- |
| Título | **Fraunces** | `h1`, `h2`, números grandes de medida |
| Subtítulo / rótulo | **Archivo** | `h3`, `h4`, rótulo de seção, botão, item de menu, tabela |
| Texto | **Inter** | parágrafo, lista, legenda, FAQ |

### Escala (celular → desktop)

| Elemento | Tamanho | Peso | Tracking | Entrelinha |
| --- | --- | --- | --- | --- |
| `h1` | 32 → 56 px | Fraunces 600 | −1,5% | 1,08 |
| `h2` | 26 → 40 px | Fraunces 600 | −1% | 1,15 |
| `h3` | 20 → 24 px | Archivo 600 | 0 | 1,25 |
| Rótulo de seção | 12 → 13 px, caixa alta | Archivo 500 | +6% | 1,2 |
| Corpo | 16 → 17 px | Inter 400 | 0 | 1,65 |
| Corpo grande (apoio de hero) | 18 → 20 px | Inter 400 | 0 | 1,55 |
| Legenda / nota | 13 → 14 px | Inter 400 | 0 | 1,5 |
| Botão | 15 → 16 px | Archivo 600 | +2% | 1 |

Regras: medida de leitura 60–75 caracteres (`max-w-[68ch]`). Nada de texto corrido justificado. Caixa alta só em rótulo de seção e botão — **nunca** em headline (o site e a LP atuais usam headline em caixa alta e é parte do ar panfletário). Números de medida (193 × 203 cm) em Fraunces, com `×` de verdade, não `x`.

## 5. Espaçamento, bordas e raios

**Escala de espaço** (múltiplos de 4): 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.

- Padding vertical de seção: 64 px no celular → 112 px no desktop. Seção de fechamento e hero podem ir a 96 → 160 px.
- Gutter lateral: 20 px no celular, 24 px no tablet, 32 px no desktop.
- Largura máxima de conteúdo: 1200 px; bloco de texto puro, 720 px; hero e faixas, full-bleed.
- Espaço entre título e apoio: 16 px. Entre apoio e CTA: 32 px. Entre cards da mesma grade: 16 → 24 px.

**Raio:** `--r-sm` 8 px (botão, chip, amostra de cor), `--r-md` 16 px (card, foto em card), `--r-lg` 24 px (foto grande, bloco destacado). Hero full-bleed sem raio; hero em container com `--r-lg`.

**Borda:** 1 px `--kanak-linha` em card claro. Em bloco escuro, 1 px `rgba(228,190,99,0.35)`.

**Sombra:** uma só, discreta — `0 2px 8px rgba(26,22,20,0.06)`, usada em card elevado e no botão flutuante. Sem sombra colorida, sem sombra dupla, sem brilho.

## 6. Botões e cards

**Primário** — fundo `--kanak-bordo-700`, texto `#FFF`, Archivo 600, raio 8 px, altura 48 px no celular / 52 px no desktop, padding 24 px. Hover: `--kanak-bordo-600` + elevação de 1 px. Foco: anel de 2 px `--kanak-ouro-500` com offset de 2 px. É o botão de todo CTA de WhatsApp.

**Secundário** — contorno 1,5 px `--kanak-bordo-700`, texto bordô, fundo transparente. Usado no "CTA secundário" da Home e em ação de apoio.

**Sobre foto** — fundo `--kanak-papel`, texto `--kanak-bordo-800`. Nunca botão translúcido sobre foto.

**Em bloco escuro** — fundo `--kanak-ouro-500`, texto `--kanak-bordo-900`.

O texto do botão é o texto do cliente, literal, com a pontuação que ele escreveu (inclusive `!!`). Ícone do WhatsApp à esquerda, 20 px, opcional e discreto. Largura total no celular, automática a partir de 768 px.

**Card** — fundo `--kanak-papel`, borda `--kanak-linha`, raio 16 px, foto no topo em 4:5 ou 3:4, padding 20 px. Título em Archivo 600, apoio em Inter, rótulo de medida em `--kanak-tinta-500`. Card inteiro clicável, com foco visível. Sem selo promocional, sem badge circular, sem fita de desconto.

## 7. Direção fotográfica

**Regra maior:** o banco atual não tem foto horizontal em resolução de hero (máximo 1280 × 853) e tem um único ângulo dominante. O layout é desenhado para essa limitação, não contra ela.

| Slot | Origem | Corte |
| --- | --- | --- |
| Hero (desktop) | render/ambientação limpa (suíte decorada, render 3D) | 16:9 ou 3:2, full-bleed |
| Hero (celular) | mesma imagem | 4:5 vertical, foco na cama |
| Card de tamanho/modelo | showroom real | 4:5 |
| Prova de acabamento | corte macro do capitonê, botão, veludo, pillow top | 1:1 ou 3:2 |
| Amostra de cor | recorte do veludo da própria foto | círculo ou 1:1 |
| Bloco escuro | foto em luz baixa, quarto à noite | 3:2 |

**Tratamento uniforme:** luz quente, branco neutralizado (as fotos de showroom têm dominante roxo/azul da cortina e da luz fria — corrigir), contraste médio, sem vinheta, sem HDR, sem saturação alta. Cor do veludo tem de bater com o nome da cor no rótulo. Todas as imagens passam pelo mesmo ajuste para que a página não pareça colagem de fontes diferentes.

**Proibido na foto:** banco de imagens genérico, pessoa em pose de catálogo, colchão flutuando em gradiente, infográfico de camadas coloridas de espuma, seta e balão sobrepostos, marca d'água, logo de terceiro no cenário.

**O que produzir** (detalhado em @imagens.md): horizontais em resolução de hero, packshot isolado de cabeceira/baú/travesseiro, macro de acabamento e ao menos um ângulo que não seja o 3/4 do pé da cama.

## 8. Overlay sobre foto — regra obrigatória

Quase todo hero tem texto sobre imagem. Sem exceção:

1. **Camada de escurecimento obrigatória** entre foto e texto. Gradiente linear de `rgba(26,22,20,0.72)` na origem do texto para `rgba(26,22,20,0.15)` no lado oposto — nunca uma cortina chapada sobre a foto inteira.
2. Direção: no desktop, gradiente da esquerda para a direita (texto à esquerda). No celular, de baixo para cima, com o texto no terço inferior.
3. **Contraste medido, não estimado:** o texto sobre a foto precisa atingir 4,5:1 (corpo) e 3:1 (título ≥ 28 px) contra a região **mais clara** da área que ele cobre. Se não atingir, aumenta-se o overlay ou muda-se o corte — nunca se aceita "está legível o bastante".
4. Texto sobre foto é sempre `#FFFFFF` ou `--kanak-areia-100`. Nunca bordô, nunca ouro.
5. Proibido: caixa de texto translúcida em cima da foto (o site atual faz isso no hero e fica com cara de banner), `text-shadow` como substituto de overlay, texto sobre a região de maior detalhe da imagem.
6. Bloco de texto sobre foto ocupa no máximo 55% da largura no desktop e 100% no celular.

## 9. Movimento e animação

Discreto, por decisão do briefing ("comunicação não poluída").

- Entrada de seção: `opacity 0→1` + `translateY 12px→0`, 400 ms, `cubic-bezier(0.22,1,0.36,1)`, uma vez, quando 20% da seção entra na viewport.
- Hover de card: elevação de 2 px e escala de 1,01 na foto interna, 200 ms.
- Carrossel: rolagem com `scroll-snap`, sem autoplay. Autoplay está proibido.
- Acordeão de FAQ: altura animada em 250 ms.
- **Proibido:** parallax, contador animado, texto que digita sozinho, efeito de brilho, pop-up de saída, banner fixo de promoção, marquee.
- `prefers-reduced-motion: reduce` desliga tudo, deixando só opacidade instantânea.

## 10. Desktop × celular

**Celular é o projeto principal** (pico de acesso à noite, em casa, no celular).

| Elemento | Celular | Desktop |
| --- | --- | --- |
| Hero | foto 4:5, texto no terço inferior, CTA em largura total | foto full-bleed 16:9, texto à esquerda em 55% |
| Vitrine | carrossel com `scroll-snap`, 1,15 card visível | grade de 3 ou 4 |
| Especificações | lista de pares rótulo/valor | tabela de 2 colunas |
| FAQ | acordeão, tudo fechado | acordeão, primeiro item aberto |
| Menu | drawer, com CTA de WhatsApp fixo no fim | barra horizontal |
| Botão flutuante | canto inferior direito, 56 px, acima da safe area do iOS | 60 px, mesma posição |
| Cores | fileira rolável de amostras | grade de 11 amostras |

O botão flutuante nunca cobre um CTA da seção nem o último parágrafo da página — reservar 88 px de padding no fim do `body` no celular.

## 11. Landing pages de anúncio — variação isolada

A LP é **um site à parte**. Mesma paleta bordô + amarelo (decisão do cliente), **layout próprio**.

| Eixo | Institucional | Landing page |
| --- | --- | --- |
| Navegação | menu completo, rodapé completo | **sem menu**, sem link de saída; rodapé legal mínimo |
| Densidade | espaçoso, editorial | mais compacto: padding de seção 48 → 80 px |
| Hero | foto grande, headline serif, um CTA | banner trocável (a copy pede isso explicitamente), headline + apoio + CTA acima da dobra, barra de garantias logo abaixo |
| Tipografia | Fraunces no título | **Archivo** no título (mais direta e comercial); Fraunces só em citação de depoimento |
| Blocos escuros | no máximo 2 | até 3, para separar `problema` e `fechamento` |
| Cor | bordô como assinatura | bordô com mais presença: fechamento em bloco bordô cheio |
| CTA | 1 por seção, como na copy | 1 por seção, como na copy, **mais o botão flutuante sempre visível** |
| Foco | conhecer a marca | **100% no kit**. Nada de colchão avulso. King Size primeiro onde a copy não define ordem |
| Peso | normal | mínimo. Hero em `priority`, tudo o mais diferido; sem fonte extra, sem biblioteca extra |

O que a LP **não** herda do institucional: cabeçalho, rodapé de navegação, breadcrumbs, links cruzados entre páginas.
O que ela **não** pode virar: página de apelo de preço. A copy já traz "até 55% OFF" e isso fica como o cliente escreveu — mas desconto não vira eixo visual da página, não ganha selo, não ganha contador, não ganha cor de urgência.

## 12. O que evitar — lista fechada

Derivada do site atual e do briefing. Cada item é um erro que o redesign existe para corrigir.

1. Foto de banco de imagens genérica — a mulher com luz azul, o casal idoso com tablet, o homem de camisa social sentado na cama.
2. Gradiente cinza de e-commerce e colchão recortado flutuando no vazio.
3. Selo promocional circular, badge de anos de garantia em vermelho, fita de desconto.
4. Botão verde-limão de e-commerce (e verde em qualquer lugar fora do ícone do WhatsApp).
5. Exclamação múltipla como recurso visual e headline em caixa alta.
6. Bloco bordô atrás de bloco bordô, página inteira em cor cheia.
7. Infográfico de camadas coloridas de espuma e ícone genérico de "tecnologia".
8. Texto sobre foto sem overlay medido.
9. Caixa translúcida de texto sobre o hero.
10. Tabela de especificações com campo vazio preenchido por traço ou valor genérico — campo sem dado real **não aparece**.
11. Depoimento inventado, nome inventado, número inventado ("milhares de famílias" só existe onde o cliente escreveu, como texto dele).
12. Autoplay, parallax, pop-up, contador regressivo, barra fixa de promoção.
13. Qualquer elemento visual, texto ou foto do Eight Sleep ou de qualquer outra marca.
