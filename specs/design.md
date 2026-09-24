# Especificação visual — Kanak Colchões

Fonte de verdade de **como** o site deve parecer. Base: `design-system/DESIGN_SYSTEM.md`, `design-system/tokens.css` e `design-system/tokens.json`. Em caso de conflito, os tokens mandam; mudanças nos tokens exigem aprovação e registro em `memoria.md`.

## 1. Referência: eightsleep.com

Referência única aprovada. Usar **só como direção de estrutura e atmosfera**.

O que a análise do print mostra e vale adaptar:

- **Respiro:** seções curtas, com um título, uma ou duas linhas de apoio e muito espaço vazio em volta. Poucas informações por tela.
- **Fotografia grande:** banner em foto de largura total, com o texto sobre a área calma da imagem; cards com foto ocupando o card inteiro e legenda sobre a foto.
- **Hierarquia limpa:** um título grande centralizado por seção, apoio em corpo pequeno, um único link ou botão por bloco.
- **Ritmo:** alternância de blocos texto + imagem (esquerda/direita), grades de 3 cards, faixas de fundo com cor de seção para marcar mudança de assunto, uma faixa escura pontual para prova social.
- **Fechamento emocional:** foto grande com frase curta perto do fim, antes do rodapé.
- **Rodapé escuro e organizado** em colunas.

O que **não** fazer: copiar textos, logotipo, nome, imagens, identidade proprietária ou layouts idênticos. Não reproduzir elementos de produto tecnológico (painéis de temperatura, gráficos, telas de app, UI "glass"). A Eight Sleep é fria e neutra; a Kanak é quente (vinho, creme, veludo, madeira). A identidade final é da Kanak.

## 2. Direção visual

Sério, confiável, acolhedor, com muito respiro — o oposto do site atual, poluído. Parece loja de móveis de qualidade, não liquidação. O produto (veludo, capitonê, acabamento) é o protagonista; a interface fica quieta em volta dele.

## 3. Paleta

| Token | Valor | Uso |
| --- | --- | --- |
| `vinho` | `#680B0E` | Marca. CTA principal (WhatsApp), links ativos, títulos de destaque pontuais |
| `vinho-700` | `#4A0709` | Hover/pressed de botões e links em vinho |
| `apricot-cream` | `#FFD29D` | Realces e selos, fundo de seção de destaque, hover suave de card |
| `apricot-700` | `#A85A16` | Texto/ícone de realce sobre fundo claro (selo, link secundário) |
| `surface-100` | `#FBF3E8` | Fundo de página. Nunca branco puro como fundo de página |
| `surface-200` | `#FFFFFF` | Cards, formulários, blocos elevados sobre `surface-100` |
| `ink` | `#241512` | Texto principal |
| `ink-60` | `#6B5850` | Texto secundário, legendas, metadados |
| `border` | `#E8DDD0` | Divisores e bordas em repouso (decorativo, não carrega informação) |
| `surface-900` | `#171310` | **Só** banners e tarjas promocionais pontuais. Não é tema escuro |
| `on-dark` / `on-dark-muted` | `#F5EDE1` / `#C9B8A8` | Texto sobre `surface-900` |
| `ouro` | `#D9A653` | Título/selo sobre `surface-900`. Nunca sobre fundo claro |
| `success` / `error` | `#2F6B3A` / `#B3261E` | Estados |

Contraste conferido (WCAG): `ink`/`surface-100` 16:1 · `ink-60`/`surface-100` 6,1:1 · `vinho`/`surface-100` 11,6:1 · `apricot-700`/`surface-100` 4,6:1 (AA texto normal, sem folga — usar em peso 600 ou tamanho ≥ 14px) · `ink`/`apricot-cream` 12,6:1 · `vinho`/`apricot-cream` 9,1:1 · `on-dark`/`surface-900` 15,9:1 · `on-dark-muted`/`surface-900` 9,6:1 · `ouro`/`surface-900` 8,4:1.

Proporção de uso aproximada: creme domina; vinho em pontos de ação; apricot em poucos realces por tela; `surface-900` no máximo uma faixa por página.

Fundos por seção, conforme os wireframes:

| Seção | Fundo | Título | CTA |
| --- | --- | --- | --- |
| Home · cabeçalho, banner, 3, 5 | `surface-100` | `ink` | `vinho` |
| Home · 2 Ciência do Conforto, 4 Conheça | `surface-200` (branco) em blocos/cards | `ink` | `vinho` |
| Home · 7 Showroom | `vinho` | `apricot-cream` | fundo `apricot-cream`, texto `vinho` |
| Home · 8 Dúvidas | `apricot-cream` | `ink` | `vinho`; telefones em pills `surface-100` |
| Rodapé (Home e landing) | `vinho-700` | marca em `apricot-cream`, texto `on-dark` | — |

Os wireframes também usam cores fora dos tokens: `#82282B` e `#641418` (placeholders de foto/mapa sobre vinho), `#4A3A33` (texto sobre apricot), `#F5DCC8` e `#E6CFC0` (texto secundário sobre vinho), `#7A2A2C` (divisor no rodapé). Ao implementar, usar o token mais próximo ou pedir aprovação para novos tokens.

## 4. Tipografia

- **Instrument Sans** (600 nos títulos, 700 no logotipo): títulos, destaques e números de destaque. Itálico **da mesma família** para realçar um trecho do título, como nos wireframes ("a *escolha certa*", "Começa *Aqui*") — nunca uma segunda família dentro do título. Tracking negativo por tamanho: -0,035em no banner, -0,03em em título de seção, -0,02em nos menores. Só os pesos 600 e 700 são carregados: nada de peso 400 sintético em elemento com `font-display`.
- **Inter**: leitura, interface, specs, botões, rótulos.
- Carregar com `next/font` (subset latin, `display: swap`).
- Histórico: Fraunces → Instrument Serif (2026-09-23, alinhamento com os wireframes) → **Instrument Sans (2026-09-23)**. A troca da serif pela sans foi autorizada por você depois da revisão da skill `design-taste-frontend`; as pranchetas do Claude Design seguem desenhadas com a serif e ficam desalinhadas do site nesse ponto. Tokens em `design-system/` atualizados.

Escala (tokens):

| Estilo | Desktop | Celular (aprovada) | Uso |
| --- | --- | --- | --- |
| `display-lg` | 56/60 | 36/42 | Título do banner |
| `display-md` | 40/46 | 30/36 | Título de seção |
| `display-sm` | 30/38 | 24/30 | Subtítulo, título de card grande |
| `body-lg` | 18/28 | 17/26 | Apoio de seção |
| `body` | 15/24 | 15/24 | Texto corrido |
| `body-sm` | 13/20 | 13/20 | Legendas, notas |
| `label` | 14/20 600 | 14/20 600 | Botões, rótulos, chips |
| `caption` | 12/16 | 12/16 | Metadados, créditos |

Regras: títulos em caixa alta-baixa (sem caixa alta longa na interface — a copy do cliente fica como está, ver pendência em `memoria.md`); largura de leitura até ~65 caracteres; no máximo dois tamanhos de título por seção.

## 5. Espaçamento, grade e cantos

- Escala base 4px (`space-1` a `space-24`).
- Padding de seção: `space-16` (64px) no celular, `space-24` (96px) no desktop.
- Entre blocos dentro da seção: `space-12`. Gap entre cards: `space-8` (desktop), `space-4`–`space-6` (celular).
- Conteúdo com largura máxima ~1200px e margem lateral de 20–24px no celular.
- Cantos: `radius-md` (12px) em botões e cards de conteúdo; `radius-lg` (20px) em cards de produto e imagens de destaque; `radius-full` em badges e pills; `radius-sm` em inputs e chips.
- Sombras mínimas ou nenhuma; separar blocos por cor de fundo e espaço, não por borda pesada.

**Ícones:** Phosphor (`@phosphor-icons/react`), peso `regular` em todo o site, importados de `/dist/ssr` para não transformar os botões em Client Components. Decisão de 2026-09-23, que substitui os SVGs desenhados à mão. Exceções que continuam desenhadas em código porque são ilustração de produto, não ícone: a cama vista de cima (`CamaVistaSuperior`, escala derivada das medidas reais em cm) e o diagrama de camadas (`DiagramaCamadas`).

## 6. Botões e CTAs

- **CTA principal (WhatsApp):** fundo `vinho`, texto `surface-100`, `label`, `radius-md`, altura mínima 48px, ícone do WhatsApp à esquerda. Hover `vinho-700`. Foco visível com anel de 2px.
- **CTA secundário:** contorno `vinho` sobre fundo claro, ou link sublinhado.
- **Sempre visível:** no cabeçalho, "Falar com especialista". Na landing mobile, barra "Falar com especialista" fixa no pé da tela durante toda a rolagem (wireframe), respeitando a área segura e sem cobrir o último conteúdo. Na Home mobile o wireframe não prevê barra fixa.
- **Altura no celular:** 56px nos CTAs de seção, 60px no CTA de Dúvidas, 48px na barra fixa e no cabeçalho (wireframes).
- **Sem aparência de checkout:** nada de ícone de carrinho, "Comprar", preço com botão "Adicionar", passos de compra.
- **"Enviar para meu parceiro(a)":** não aparece nos wireframes da Home e da landing; previsto para as páginas de produto (entrega futura). Botão secundário ao lado do CTA principal em cards e seções de produto; abre o compartilhamento (Web Share API, com fallback para `wa.me/?text=` com o link da página).

## 7. Componentes previstos

| Componente | Função | Notas |
| --- | --- | --- |
| Card de produto (colchão/kit) | Apresentar item + CTA de contato | Foto 4:3 ou 1:1, nome, tamanho, 2–3 atributos, CTA WhatsApp + "Enviar para meu parceiro(a)". Sem preço como protagonista |
| Card de tamanho | Escolher por tamanho | Nome + medida em cm; ilustração/foto com mesma luz e ângulo entre os quatro |
| Card de modelo | Escolher por tecnologia | Nome da tecnologia + garantia (só a confirmada) |
| Seletor de tamanho | Alternar Solteiro/Casal/Queen/King | Pills `radius-full`, estado ativo em vinho, acessível por teclado |
| Tabela de specs técnicas | Prova técnica | Linhas com `border`, rótulo em `ink-60`, valor em `ink`; empilha no celular |
| Escala visual de firmeza | Macio → Extrafirme | 4 pontos, posição marcada em vinho; texto sempre junto (não depender só de cor) |
| Seletor de tecido/cor (swatches) | Ver cores de cabeceira/base | Círculos com nome visível; troca a foto quando existir foto real da cor |
| Vista explodida de camadas | Mostrar composição | Imagem + legendas numeradas; só com camadas confirmadas |
| Galeria com vídeo | Fotos e vídeo de detalhe | Vídeo só carrega ao tocar (poster + `preload="none"`) |
| Badge de oferta | Reforço de condição | `apricot-cream` com texto `ink`, `radius-full`, pequeno; nunca maior que o título |
| Banner promocional | Campanha pontual | Fundo `surface-900`, título em `ouro`, texto `on-dark`; trocável por campanha |
| Depoimento | Prova social | Só depoimentos reais com autorização; nome e cidade quando fornecidos |
| Lista de telefones | Dúvidas e rodapé | Três números, cada um como link de WhatsApp/telefone com rótulo |

## 8. Fotografia

- Fotos reais da Kanak (`referencias-site/meus-produtos/imagens colchões Kanak/`, 46 arquivos: Solteiro, Casal, Queen e King, com e sem pillow top, várias cores, showroom e quartos decorados).
- Preferir: alta resolução, detalhe de acabamento (capitonê, botões, veludo, pés, pillow top), quartos montados.
- **Consistência entre tamanhos:** mesma luz e mesmo ângulo nos cards dos quatro tamanhos e dos três modelos.
- Banner com área calma para o texto; texto nunca sobre região com muito detalhe. Se preciso, véu escuro suave para garantir contraste AA.
- Proporções previstas: banner 21:9 / 16:9 no desktop e 4:5 no celular; cards 4:3 ou 1:1; detalhes 3:2.
- Uso de imagens geradas por IA (arquivo `imagens-prompt.md`): **aprovado em 2026-09-23**. As 14 imagens do plano entram no site; as fotos reais de `referencias-site/meus-produtos/` seguem como referência obrigatória de produto. Quatro arquivos vão ao ar marcados como `-PLACEHOLDER` (corte do colchão, magnético em dois lugares, showroom) e trocam por foto real assim que chegarem.
- Logo: **`my-app/public/logo.webp` no cabeçalho** (Home e landing), sobre fundo branco sticky. No rodapé vinho continua o wordmark ("Kanak" em Instrument Sans 700, tracking -0,045em + "COLCHÕES" em Inter, caixa alta): o arquivo tem fundo branco opaco, 300 × 152 px, e não há versão para fundo escuro. O vermelho do logo é mais vivo que o `vinho` da paleta; o logo não altera a paleta.
- `alt` descritivo em português em todas as fotos.

## 9. Movimento

O material é o assentamento: cada coisa chega ao lugar como o corpo no colchão, com `cubic-bezier(0.16, 1, 0.3, 1)`. O momento autoral continua sendo a faixa de camas. As outras seções não repetem o mesmo fade — cada uma tem o gesto do que ela está dizendo.

| Seção | Gesto |
|---|---|
| Home · Banner | O realce do título entra sob um lençol (recorte vertical, 1400ms, CSS, no carregamento). No desktop, a cama escolhida abre, 520ms; a foto tem largura fixa, então quem muda é o recorte. |
| Home · Ciência | As três camadas empilham de baixo para cima (`components/motion/Empilha.tsx`). |
| Home · Como escolher | A escala de firmeza cresce da esquerda para a direita. Os cards de tecnologia entram em série. |
| Home · Colchões | Os trilhos entram em série. O desenho da cama vista de cima assenta na proporção real. |
| Home · Depoimentos | No desktop, a troca de página vira a folha (recorte lateral, 220ms). No celular, o trilho entra em série. |
| Home · Showroom | A foto abre do centro para as bordas. |
| Home · Dúvidas | Os três telefones entram em série. |
| Landing · Banner | A oferta entra sob um lençol. A foto e o botão ficam quietos: um é o LCP, o outro é o toque. |
| Landing · Problema | O “1/3” assenta. |
| Landing · Modelos | Grades e trilho em série; o desenho da cama assenta como na Home. |
| Landing · Por que a Kanak | Os quatro argumentos entram pela lateral. O carrossel segue o gesto dos depoimentos. |
| Landing · Fechamento | O título entra sob um lençol quando a seção chega. |

Entrada em série: `components/motion/Revela.tsx`, atraso limitado a quatro passos. `eixo="x"` só na grade de argumentos. Retorno de toque: `.recuo-no-toque`, 120ms. Sobreposições: `components/motion/Aparicao.tsx`. Entradas que não são lista: `components/motion/AoEntrar.tsx`.

Biblioteca: `motion`, sempre por `LazyMotion` + `domAnimation`. Nunca o pacote inteiro. O lençol dos dois banners é CSS, para não esperar o JavaScript acima da dobra. `prefers-reduced-motion` tira deslocamento, recorte e escala; ficam uma opacidade curta, a cor, o foco e o aviso de troca de página. Sem parallax, sem pinagem de scroll, sem desfoque. Vídeo em autoplay acima da dobra só no banner da Home: o arquivo `magnific_create-a-scrollstopping-9_3zXqgxhREY.mp4` fica de fundo, levemente escurecido, e dissolve no `surface-100` do lado do título (véu de `surface-900` só no lado das camas). Some com `prefers-reduced-motion`. Se o script não rodar, nada começa escondido no CSS — o lençol dos banners é a única entrada que existe sem JavaScript, e some com redução de movimento.

Tokens em `app/globals.css`: `--ease-chegada`, `--duracao-toque` 120ms, `--duracao-estado` 220ms, `--duracao-foco` 520ms, `--duracao-entrada` 1400ms. As entradas por script só começam com o bloco já dentro da tela (cerca de metade visível) e duram cerca de 1–1,4 s, para não terminarem enquanto o elemento ainda entra.

## 10. Desktop e celular

- **Mobile-first.** Uma coluna no celular; grades de 2–4 colunas no desktop.
- Cards de tamanhos/modelos: carrossel horizontal com rolagem por toque no celular, grade no desktop.
- Alvos de toque ≥ 48px; CTA de WhatsApp sempre ao alcance do polegar.
- Banner: foto 4:5 no celular com texto no terço inferior e CTA de largura total; foto larga no desktop com texto em uma coluna lateral.
- **Landing:** segue o wireframe mobile próprio no celular. Layout separado do site: sem menu do site, cabeçalho mínimo (logo + CTA), rodapé igual ao da Home.
- Tabelas de specs viram lista empilhada no celular.

## 11. Evitar

- Preço baixo como argumento central; apelo popular.
- Promessa de cura para coluna ou efeito terapêutico do magnético (falar em conforto, alinhamento ergonômico e alívio de pressão).
- Contagem regressiva, "últimas unidades", selos de urgência.
- Exclamações duplas, caixa alta longa, tom panfletário.
- Depoimentos inventados.
- Poluição visual: muitos selos, cores fortes misturadas, textos longos sobre foto.
- Ícone de carrinho ou qualquer linguagem de checkout.
- Branco puro como fundo de página; `ouro` sobre fundo claro; `surface-900` como tema do site inteiro.

Observação: parte da copy do cliente contém itens desta lista. Como a copy é imutável, esses pontos só mudam via quadro "Ajustes de copy" aprovado — ver `memoria.md`.
