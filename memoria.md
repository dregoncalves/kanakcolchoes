# memoria.md — histórico de decisões do projeto Kanak Colchões

Escopo em @specs/site.md · Verdade visual em @specs/design.md · Mapa de conteúdo em @specs/conteudo.md · Regras em @CLAUDE.md

---

## Decisões aprovadas

### Referências visuais — REFERÊNCIA ÚNICA DEFINIDA
Referência final, única, em `referencias-site/eight-sleep/` (https://www.eightsleep.com/) — mesmo nicho (colchão premium), storytelling técnico forte. Print (`image.png`) já está na pasta.

Vibe confirmada pelo cliente: **venda direta** (estrutura clara, comparativo, prova social, CTA repetido), não editorial-minimalista puro — a aplicar sobre a base do Eight Sleep.

### Direção do redesign
Manter do site atual **apenas**: paleta de cores (bordô + amarelo) e a copy do cliente. Layout, tipografia, tratamento fotográfico e componentes seguem a referência aprovada, adaptados à identidade Kanak (nunca copiados).

### Paleta (21/09/2026)
Bordô e areia amostrados dos prints do site atual: bordô de marca `#57090C`, bordô de botão `#7A1420`, areia `#E1D3B0`, ouro `#C8952A`. Escala completa em @specs/design.md §3.
**Verde proibido** no site inteiro (é a cor dos botões do WordPress atual, não pertence à marca) — exceção única: o verde dentro do ícone do WhatsApp.

### Tipografia — provisória aprovada (21/09/2026)
Três famílias, todas Google Fonts: **Fraunces** (título) · **Archivo** (subtítulo, rótulo, botão, UI) · **Inter** (texto corrido).
Considerado de baixo risco trocar depois: é mudança pontual em @specs/design.md + tokens, não estrutural.

### Landing pages (Google Ads) vs. institucional
Mesma paleta (bordô + amarelo) em ambos. O que diferencia a LP é o **layout**, não a cor: layout próprio, focado 100% em conversão via WhatsApp, sem menu/navegação do institucional, pensado para tráfego pago do Google Ads. Diferenças detalhadas em @specs/design.md §11 (inclusive: título da LP em Archivo, não em Fraunces).

### Copy do cliente
Copy foi escrita por terceiro (não o cliente final nem quem está conduzindo o projeto) e **não é opção alterá-la agora**. Copy é imutável: não se reescreve, resume ou corta. Afirmações fortes ("testado, certificado", "milhares de famílias", "alinham sua coluna", "alinhamento postural cirúrgico") ficam como estão — registrado aqui como fato conhecido, **sem ação**.

### URLs do site atual / SEO
**Não é necessário preservar URLs do site no ar.** Site atual é recente, sem histórico de SEO relevante a proteger. Rotas definidas livremente em @specs/site.md §5, sem plano de 301 obrigatório.

### Dados técnicos ausentes (Anexo B do documento mestre)
Adiado. Por enquanto **não** buscar com o cliente densidade, firmeza, suporte de peso, tratamentos de tecido, certificações, garantia do Magnético, specs de cabeceira/baú/base, depoimentos reais, preços/condições. Campos correspondentes ficam vazios/fora do site até segunda ordem — nunca preenchidos com valor genérico ou inventado.

### Blog WordPress headless
Seguir a opção recomendada do prompt 7.1 (REST `/wp-json/wp/v2`, já que WPGraphQL provavelmente não está instalado) sem levantamento adicional por enquanto.

### Hospedagem/publicação
**Node não vai rodar na Hostinger.** Descartada a opção de SSR/ISR completo via Node na Hostinger. Restam export estático do Next (com blog buscando WordPress no cliente ou rebuild a cada publicação) ou plataforma de deploy separada apontando por DNS — decisão final ainda em aberto.

### Escopo inicial de construção — REDUZIDO
Fase 1 cobre só: Home · 1 landing page (Google Ads) · 1 página de produto · 1 página de kit. Demais páginas ficam para depois, reaproveitando os componentes da fase 1. Motivo: economizar tokens.

### Fase 1 — tamanho e modelo definidos (21/09/2026)
**King Size.** Página de kit/hub: `/colchao-king-size` (de `conteudo/produtos/kingsize/kit.md`). Página de produto: `/colchao-king-size/anatomico-ortopedico`. Motivo: King é o de maior margem e o foco do tráfego pago.

### Pasta da copy (21/09/2026)
`conteudo/` é a fonte oficial da copy, conforme o documento mestre. Os 19 arquivos `.md` + `TAXONOMIA.md` foram movidos de `referencias-site/kanak/` para `conteudo/institucional/`, `conteudo/produtos/<tamanho>/` e `conteudo/landing-pages/`. `referencias-site/kanak/` guarda agora apenas os prints do site atual e o briefing em PDF.

### Destino dos CTAs (21/09/2026)
Todo CTA e o botão flutuante levam a um número único: **(41) 99842-5771**, com mensagem pré-preenchida e parâmetro de origem (página + seção; + campanha na LP). Os outros dois números — (41) 98726-5068 e (41) 98410-1101 — continuam visíveis no texto do cliente, **sem virar link**. Rodízio entre os três foi descartado por quebrar o rastreio de origem.

### Hub de tamanho = página de kit (21/09/2026) — proposta, aguarda confirmação
A planilha de arquitetura prevê hub **e** página de kit separados, mas o cliente só entregou 4 arquivos por tamanho (`kit` + 3 modelos). Para não inventar copy, `/colchao-king-size` renderiza `kit.md` e os 3 modelos são rotas filhas. Ver pendências.

---

## Decisões rejeitadas

| O que | Por quê |
| --- | --- |
| Referências Luuna, Cama In Box, Guldi (citadas no briefing) e Oura | Substituídas pelo Eight Sleep, mesmo nicho e storytelling mais forte |
| Referências Helix Sleep e Purple | Descartadas após reconsideração; pastas removidas |
| SSR/ISR em Node na Hostinger | Node não roda na hospedagem atual |
| Construir as ~17–20 páginas de uma vez | Custo de tokens; fase 1 reduzida |
| Rodízio dos 3 telefones nos CTAs | Quebra rastreio de origem e complica teste |
| Corrigir as afirmações fortes da copy | Copy é imutável e a alteração não está disponível agora |
| Verde de e-commerce (herdado do WordPress) | Não pertence à paleta da marca |

---

## Alterações realizadas

- **21/09/2026** — Criada a estrutura documental do projeto: `CLAUDE.md`, `AGENTS.md`, `.cursor/rules/project.mdc` (arquivos-ponte, mesmo conteúdo), `specs/site.md`, `specs/design.md`, `specs/conteudo.md` e este `memoria.md` reescrito.
- **21/09/2026** — `specs/conteudo.md` reescrito com o mapeamento completo: 19 páginas, 149 seções, 150 CTAs, heading e volume de texto por seção, 4 padrões de página e o conjunto mínimo de 21 componentes (4 primitivos + 12 seções + 5 transversais).
- **21/09/2026** — Copy do cliente movida de `referencias-site/kanak/` para `conteudo/` (19 `.md` + `TAXONOMIA.md`), com verificação de integridade por hash antes da remoção dos originais. Prints e briefing permanecem em `referencias-site/kanak/`.
- **21/09/2026** — Fase 1 implementada em `my-app/`: parser `lib/conteudo.ts`, tokens em `globals.css`, 21 componentes, rotas `/`, `/colchao-king-size`, `/colchao-king-size/anatomico-ortopedico` e `/lp/google-ads`. `pnpm lint` e `pnpm build` passaram. Copy do cliente conferida nos 4 HTMLs (h1, CTAs, sem notas de projeto).
- **21/09/2026** — Ritmo visual aproximado da referência Eight Sleep, sem copiar layout: seções de autoridade centralizadas, medida King em Fraunces com `×`, grade 4:5 nos cards, amostras das 11 cores com hex provisório até existirem recortes de veludo, overlay de hero conforme @specs/design.md §8. Identidade continua Kanak (bordô, copy longa, 1 CTA por seção).
- **21/09/2026** — Auditoria visual completa (skill `design-taste-frontend`, modo auditoria, contra @specs/design.md e referência Eight Sleep). Achado crítico corrigido: `body`, `h1`–`h4` e `.titulo-lp` em `globals.css` estavam fora de qualquer `@layer`, então venciam qualquer utilitário Tailwind (`@layer utilities`) por regra de cascade layers — independente de especificidade. Efeito real: `text-papel` nunca aplicava em h1/h2/h3, deixando título do hero e headings dos blocos escuros em `--kanak-tinta-900` (quase preto) sobre foto escura/fundo bordô, falha de contraste sitewide. Corrigido envolvendo esse bloco em `@layer base { }`. Confirmado via computed style (branco em vez de tinta-900) em hero da Home, hero do kit King e bloco escuro "Do Nosso Showroom". `pnpm lint` e `pnpm build` passaram após a correção.
- **21/09/2026** — Confirmado nesta auditoria: `my-app/public/img/` já existe com 74 arquivos (contradiz a pendência abaixo "pasta ainda não existe"). Cards de tamanho e de modelo na Home renderizam com foto real. Faltam ainda: 8 das 11 amostras de cor (só bege/cinza/terracota têm swatch), e os itens já listados em @imagens.md §22 (fichas 52–57).
- **21/09/2026** — Skill `/redesign-existing-projects` rodado em modo auditoria (não no modo "fix" padrão dele), porque o modo fix do skill contradiz regras do projeto (fonte/paleta/layout já decididos, sem libs novas). Auditoria filtrada pelas specs, achados aplicados: 8 micro-interações — active/press state no `CtaWhatsApp`, hover+disabled nos botões do `Carrossel`, hover no hambúrguer do `Header`, hover/press no `BotaoFlutuanteWhatsapp`, hover na pergunta do `Faq`, remoção de `width`/`height` fixos redundantes no `IconeWhatsApp`, `z-[100]` do skip-link trocado por `z-50` (escala do projeto), `<cite>` na atribuição de citação em `ProseCliente`. `pnpm lint` e `pnpm build` passaram. Nenhuma dependência nova, nenhuma mudança de fonte/cor/layout speced.
- **21/09/2026** — Execução do `/impeccable delight` e aproximação com a referência Eight Sleep:
  - `SecaoLayout`: removida a opacidade zero inicial e dependência de JS (`IntersectionObserver`) que travavam o carregamento; renderização imediata e estável no SSR.
  - `globals.css`: H1 desktop ampliado para 72px com tracking mais compacto (-0.03em) e line-height 1, aproximando do peso editorial e monumental do Eight Sleep.
  - `PaginaDeSecoes`: vitrine de produtos da Home alternada para fundo escuro (`bordo-900`) com borda de card sutil em ouro (`rgba(228,190,99,0.35)`), trazendo o contraste e atmosfera noturna de galeria da referência.
  - `BotaoFlutuanteWhatsapp`: transformado em micro-interação de concierge, com expansão horizontal elegante exibindo "Atendimento Kanak" no hover desktop e sombra tátil acolhedora.
  - `CtaWhatsApp`: elevação com sombra profunda de veludo bordô/ouro e micro-movimento/rotação do ícone ao passar o mouse.
  - `VitrineProdutos`: zoom suave de 500ms na foto do card (`scale-[1.04]`), transição de cor no título e indicador de seta animada para kits navegáveis.
  - `Carrossel`: barra de progresso em fio dourado rastreando a rolagem no mobile com botões de resposta tátil.
  - `Faq`: ícone giratório SVG de precisão (alternando entre + e × com rotação de 45° e preenchimento bordô).
  - `VariantesCor`: criado `SeletorDeCores.tsx` interativo permitindo selecionar e inspecionar cada um dos 11 veludos com anel em ouro, feedback tátil e rótulo do tecido ativo.
  - `pnpm lint` e `pnpm build` passaram com 0 erros e 0 avisos.
- **21/09/2026** — Aplicado `prompt-header-hero.md` (mecânica Eight Sleep, identidade Kanak):
  - **Header:** `position: fixed`, fundo `--kanak-papel` sólido, 64/72 px, logo wordmark centralizado, menu em Archivo 12 px caixa alta tracking +6%. Sem faixa de âncora — não existe texto do cliente para ela. Itens sem rota na Fase 1 visíveis e `aria-disabled`, sem `href`. CTA compacto (número) no desktop; ícone 44×44 no celular. Drawer de tela cheia com foco preso, Esc e botão visível de fechar.
  - **Hero da Home:** `min-height: 88svh` / `100svh`, imagem full-bleed atrás da barra, overlay da esquerda→direita no desktop e de baixo→cima no celular. Heading, os 3 parágrafos de apoio e o CTA literais. Apoio em `--kanak-areia-100`, CTA variante `sobre-foto`.
  - **H1** voltou a 32→56 px, tracking −1,5%, entrelinha 1,08 — como em @specs/design.md. O 72 px do `/impeccable delight` foi revertido neste ponto.
  - **Overlay** na origem do texto em `0.86` (não `0.72`): a parede clara do hero não atinge 4,5:1 com 0,72; §8.3 manda aumentar. Destino do gradiente permanece `0.15`.
  - **Header sem `max-width: 1200px`:** os 8 itens em caixa alta não cabem na medida de conteúdo com logo central e CTA à direita. A barra usa a viewport (gutter 20/32 px); o conteúdo das seções continua em 1200 px. Menu horizontal a partir de 1440 px; abaixo disso, hambúrguer.
  - Sem logo gráfico no banco: wordmark "Kanak Colchões" em Fraunces. Skip-link `z-[110]` para ficar acima do header `z-[100]`.
- **21/09/2026** — Aplicado `/high-end-visual-design` em modo de **elevação seletiva** (sem quebrar paleta, fontes, copy, stack ou motion discreto):
  - `globals.css`: `.secao-entrada/.secao-visivel` com `cubic-bezier(0.22,1,0.36,1)` 500ms; `.badge-eyebrow` pill de rótulo de seção; bloco `prefers-reduced-motion` reforçado com `transition: none !important`.
  - `SecaoLayout.tsx`: convertido para `"use client"` com `IntersectionObserver` (threshold 8%). Anima `.secao-entrada → .secao-visivel` ao entrar na viewport; respeita `prefers-reduced-motion`.
  - `CtaWhatsApp.tsx`: padrão **Button-in-Button** — ícone do WhatsApp dentro de wrapper circular `size-8 rounded-full bg-black/10` com kinetic hover (`translate-x-0.5 -translate-y-px scale-105`). Transições: `cubic-bezier(0.32,0.72,0,1)` 220ms. Aplicado às variantes `primario`, `sobre-foto` e `em-bloco-escuro`.
  - `VitrineProdutos.tsx`: **Double-Bezel** nos `CardProduto` — outer shell `p-1.5 rounded-[20px] ring-1`, inner core `rounded-[14px] shadow-[inset...]`. Foto herda raio superior. Hover muda ring + sombra. Prop `escuro` propagado de `fundo="escuro"`.
  - `Header.tsx`: **hamburger morph** — 1 único botão, as 3 linhas rotacionam com `cubic-bezier(0.32,0.72,0,1)` formando X. Drawer ganha `fadeInDrawer` 220ms. Itens animam com `staggerItem` @keyframes (10px→0, delay 60ms + 55ms por item), respeitando `motion-safe`.
  - `BotaoFlutuanteWhatsapp.tsx`: Double-Bezel — outer shell `p-1.5 rounded-full ring-1 ring-black/7 bg-white/90` eleva com sombra bordô no hover; inner `<a>` mantém `shadow-[inset...]`.
  - `SecaoTexto.tsx`: prop `eyebrow?: string` — quando fornecido, exibe `.badge-eyebrow` acima do h2.
  - `pnpm lint` e `pnpm build` passaram com 0 erros e 0 avisos novos.
- **21/09/2026** — Header reescrito com mecânica do Eight Sleep:
  - **Fundo transparente flutuante** sobre o hero quando a página tem full-bleed (`/`, `/colchao-king-size*`, `/lp/*`). Transição suave para fundo `--kanak-papel` sólido + `border-b` + `shadow` após 80 px de scroll (`cubic-bezier(0.22,1,0.36,1) 300ms`).
  - **Desktop:** logo Fraunces centralizado (posição absoluta), nav links à esquerda (itens 0–3) e à direita (itens 4–7) divididos simetricamente, CTA "Falar pelo WhatsApp" botão bordô à extrema direita. Links em Archivo 12 px caixa alta, transparência adaptada (branco/translúcido sobre hero, bordô sobre fundo claro).
  - **Mobile:** hamburger SVG de 2 linhas (estilo Eight Sleep), logo centralizado, ícone WhatsApp à direita. Drawer de tela cheia com stagger reveal e focus trap.
  - `HamburgerIcon` e `CloseIcon` movidos para escopo de módulo (corrige lint `react-hooks/static-components`). Scroll listener consolidado em um único `useEffect([pathname])` com `setTimeout(handler, 0)` (corrige `react-hooks/set-state-in-effect`).
  - `pnpm lint` e `pnpm build` passaram com 0 erros e 0 avisos novos.
- **21/09/2026 (continuação)** — Header ajustado com base em referências do cliente:
  - **Barra de Anúncio:** Adicionada no topo (`bg-bordo-800`), com texto provisório (pois não constava na copy oficial) e botão de fechar.
  - **Pill flutuante no Desktop:** Header transparente flutuante sobre hero (1240px de largura) com blur e sombra (`bg-white/30 backdrop-blur-[10px]`). Logo deslocado à esquerda e nav links centralizados.
  - **CTA Header:** Texto do botão alterado para "Fale com um especialista".
  - **Substituição da Logo:** Trocado o wordmark de texto pela imagem original do cliente (`logo.webp`) usando `next/image`. Aplicado `brightness-0 invert` para manter o logotipo branco quando no modo transparente.
  - `pnpm lint` e `pnpm build` rodados com sucesso, com 0 erros.

---

## Problemas encontrados

1. **A copy não tinha página para `/a-kanak`.** A arquitetura confirmada pelo cliente prevê a página; não existe arquivo de texto para ela.
2. **Não existe copy de hub de tamanho** separada da copy de kit — só 4 arquivos por tamanho.
3. **`produtos/queensize/kit.md` não tem seção `faq`**, ao contrário dos outros três kits.
4. **`produtos/casal/magnetico.md` não traz o disclaimer** sobre falta de comprovação científica dos ímãs, que existe na versão Solteiro do mesmo produto.
5. **Depoimentos:** a copy pede carrossel de depoimentos na Home e na LP, mas só existe **um** depoimento escrito (Juliana M., na LP).
6. **Banco de fotos limitado:** 46 arquivos, largura máxima 1280 px, nenhuma horizontal em resolução de hero, ângulo quase sempre o mesmo (3/4 a partir do pé da cama), metade com luz mista de celular (dominante roxo/azul).
7. **`imagens.md` está desatualizado:** cita `referencias-site/referencia1` (amperos.com) e `referencia2` (get.ru) — pastas que não existem mais — e aponta o projeto Next em `app/`, quando ele está em `my-app/`.
8. **A copy tem 150 CTAs** em 149 seções — uma por seção, sem exceção. É intencional, mas exige um componente de CTA padronizado e um layout que aguente a repetição sem parecer panfleto.
9. **A tabela de `especificacoes` não tem esquema fixo.** Os rótulos mudam de arquivo para arquivo (`Dimensões` × `Dimensões do colchão` × `Tamanho do colchão`; `Modelo` × `Sistema` × `Tecnologia`), e os kits usam linhas separadas de garantia por modelo. De 8 a 12 linhas por página.
10. **`variantes-cor` aparece em duas formas:** 14 arquivos trazem `[CARROSSEL COM AS CORES]`; `casal/kit.md` e `solteiro/kit.md` descrevem as 11 cores só em texto.
11. **Volume de texto muito desigual entre páginas do mesmo tipo.** Solteiro Anatômico Ortopédico tem ~1295 palavras (FAQ de 10 itens, `tecnologia` de 226 palavras); King Magnético tem ~755. O layout de produto precisa ser elástico, sem altura fixa de seção.
12. **A grafia dos placeholders de carrossel varia** (`[CARROSSEL COM OS MODELOS]` × `[CARROSSEL COM MODELOS]` × `[CARROSSEL DE PRODUTOS]`). O parser precisa aceitar as variações.

---

## Soluções aplicadas

| Problema | Solução |
| --- | --- |
| 1 — sem copy de `/a-kanak` | Página fica fora do escopo até o cliente entregar o texto. Registrada como pendência |
| 2 — sem copy de hub | Hub = página de kit; 3 modelos como rotas filhas (@specs/site.md §5) |
| 3 — Queen sem FAQ | A página Queen termina em `fechamento`. Nenhuma FAQ é criada para preencher a lacuna |
| 4 — disclaimer ausente | Cada página mostra o que o arquivo dela diz. Padronizar é decisão do cliente |
| 5 — sem depoimentos | `prova-social` renderiza só o texto do cliente, sem cards inventados |
| 6 — banco de fotos | Direção fotográfica desenhada para a limitação (@specs/design.md §7): render sustenta hero, showroom sustenta card vertical; tratamento uniforme para corrigir a luz; lacunas listadas em `imagens.md` |
| 8 — 150 CTAs | Componente único `CtaWhatsApp`, um por seção, com origem parametrizada (@specs/conteudo.md §6) |
| 9 — tabela sem esquema | `Especificacoes` renderiza os pares chave/valor que o arquivo trouxer, na ordem do arquivo. Sem schema tipado por campo, sem linha fixa |
| 10 — duas formas de `variantes-cor` | Duas variantes do mesmo componente: `com-carrossel` e `so-texto` |
| 11 — volume desigual | Seções sem altura fixa; FAQ em acordeão; `SecaoLayout` controla ritmo por padding, não por altura |
| 12 — grafia dos placeholders | Parser casa por expressão regular `\[CARROSSEL[^\]]*\]` e classifica pelo conteúdo (produtos / modelos / cores / depoimentos) |

---

## Pendências

### (a) Afirmações fortes na copy — conflito com o briefing
Levantadas no mapeamento de 21/09/2026 (@specs/conteudo.md). O briefing proíbe promessa de cura, tom apelativo e comunicação panfletária. **A copy é imutável e nada aqui será alterado sem ordem do cliente** — esta lista existe para ser levada a ele, com a localização exata de cada trecho.

| Arquivo:linha | Trecho | Conflito |
| --- | --- | --- |
| `institucional/home.md:26` | "testado, certificado e projetado por especialistas em saúde postural e conforto de alto padrão" | Certificação e autoria técnica não comprovadas; Inmetro não aparece em nenhuma copy |
| `institucional/home.md:93,101` | "milhares de famílias" / "milhares de clientes" | Número sem lastro |
| `institucional/home.md:95` | "referência em qualidade, durabilidade e satisfação garantida" | Superlativo; "satisfação garantida" é promessa |
| `landing-pages/lp-google-ads.md:14` | "Até 55% OFF nos Melhores Colchões do Brasil + Frete Especial!" | Preço baixo como apelo + superlativo absoluto |
| `landing-pages/lp-google-ads.md:24` | "Os colchões Kanak alinham sua coluna, aliviam os pontos de pressão" | **Promessa de cura para dor de coluna — proibição explícita do briefing** |
| `landing-pages/lp-google-ads.md:42` | "Tecnologia Zero Movimento — se um se mexe, o outro não sente nada" | Absoluto ("nada") |
| `landing-pages/lp-google-ads.md:43` | "Alinhamento postural cirúrgico" | Linguagem médica |
| `landing-pages/lp-google-ads.md:44` | "Conforto com ação relaxante muscular" | Efeito terapêutico; contradiz o disclaimer dos ímãs que existe em `solteiro/magnetico.md` |
| `landing-pages/lp-google-ads.md:58` | "Garantia Blindada de até 8 Anos" | Termo apelativo |
| `landing-pages/lp-google-ads.md:60` | "12x sem juros… desconto máximo exclusivo para pagamento via PIX" | Condição comercial não confirmada pelo cliente |
| `landing-pages/lp-google-ads.md:65-66` | "a dor simplesmente sumiu" — "Juliana M., Cliente Verificada Kanak" | Depoimento de exemplo com promessa de cura e selo de verificação inexistente |
| `landing-pages/lp-google-ads.md:80` | "Nossos lotes de fábrica têm alta rotatividade" | Escassez artificial |

Decisão vigente: **mantidas como o cliente escreveu**, sem ação. @specs/design.md reforça que nada disso ganha selo, contador, cor de urgência ou destaque visual extra.

### (b) Placeholders que precisam de conteúdo real
| Placeholder | Onde | Falta |
| --- | --- | --- |
| `[CARROSSEL DE PRODUTOS]` ×2 | `home.md` §vitrine-produtos | Fotos dos 4 tamanhos e dos 3 modelos. Os textos dos cards já existem na copy |
| `[CARROSSEL COM OS MODELOS]` / `[CARROSSEL COM MODELOS]` | `lp-google-ads.md`, 4 `kit.md` | Fotos dos 3 modelos. Grafia do placeholder varia entre arquivos — o parser aceita as duas |
| `[CARROSSEL COM AS CORES]` (14 arquivos) | `variantes-cor` | Amostra de veludo das 11 cores, com o nome batendo com a amostra. `casal/kit.md` e `solteiro/kit.md` descrevem as cores só em texto, sem placeholder |
| `[CARROSSEL DE DEPOIMENTOS]` | `home.md` §prova-social | **Nenhum depoimento real existe.** Enquanto não houver, a seção renderiza só o texto do cliente, sem cards |
| `[CARROSSEL COM DEPOIMENTOS]` | `lp-google-ads.md` §prova-social | Existe **um** depoimento de exemplo (Juliana M.). É o único do projeto |

### (c) Informações do briefing ausentes em toda a copy
Agregado dos "Checklist" no fim dos 19 arquivos. Nenhum destes pode ser inventado; campo sem dado real não aparece na página.

| Informação | Páginas afetadas |
| --- | --- |
| Certificações de qualidade (Inmetro) | 17 |
| Composição do tecido e tratamentos (antiácaro / antifungo / antialérgico) | 17 |
| Densidade da espuma, nível de firmeza, suporte de peso por pessoa (kg) | 17 |
| Informações da cabeceira e do baú (dimensões, fixação/dobradiça, tecido) | 10 |
| Garantia repetida na própria página do modelo (hoje só aparece em "Por que comprar") | 8 |
| Disclaimer sobre falta de comprovação científica dos ímãs | 2 (`casal/magnetico.md`, e a LP que afirma "ação relaxante muscular") |
| Vídeos de detalhe do produto | 1 |

**Para levar ao cliente**
- [ ] Confirmar: hub de tamanho = página de kit (ou o cliente escreve copy de hub?).
- [ ] Copy da página `/a-kanak`.
- [ ] Depoimentos reais (nome, cidade, modelo, autorização de uso).
- [ ] Padronizar o disclaimer dos ímãs nas 4 páginas do modelo Magnético.
- [ ] Quantas landing pages, e qual campanha cada uma atende.
- [ ] Endereço do WordPress do blog e como ele fica exposto (subdomínio, subpasta, `/wp`).
- [ ] Confirmar se as landing pages devem receber `noindex`.
- [ ] Anexo B (densidade, firmeza, suporte de peso, tecido, certificações, garantia do Magnético) — **adiado por decisão do cliente**, reabrir quando ele quiser especificações na página.

**Do projeto**
- [ ] Decidir entre export estático × plataforma de deploy separada para publicação (Node na Hostinger descartado).
- [ ] Atualizar `imagens.md`: trocar as referências a `referencia1`/`referencia2` pela referência única (Eight Sleep) e corrigir `app/` → `my-app/`.
- [ ] Corrigir `imagens.md` §22–23: contagem de "faltam 14 arquivos" está errada — os 88 prompts (fichas 1–57, com sub-numeração) **já existem** em `imagens-prompt.md`, verificado texto a texto em 21/09/2026. Nenhum prompt ficou faltando.
- [ ] `imagens.md` usa rotas antigas (`/kit/king-size/`, `/lp/5771/`, `/privacidade/`) que não batem com @specs/site.md §5 (`/colchao-king-size`, `/lp/[slug]`). Precisa realinhar quando o arquivo for revisado.
- [ ] Confirmar a tipografia provisória (Fraunces / Archivo / Inter) quando houver a primeira tela pronta.
- [ ] Produzir as imagens que faltam (horizontal de hero, packshot, macro de acabamento, ângulo alternativo).
- [ ] Colocar os arquivos planejados em `my-app/public/img/` — a pasta ainda não existe; o site omite o slot quando o arquivo não está lá. Sem essas fotos o ritmo Eight Sleep (hero full-bleed, grade foto+legenda) não fecha.
- [ ] Trocar o hex provisório das 11 amostras de veludo pelos recortes reais listados em @imagens.md. O verde da amostra é cor de produto, não de interface.
- [ ] Rotas do menu ainda sem página na Fase 1 (Queen, Casal, Solteiro, Por que comprar, A Kanak, Blog) caem no 404.

---

## Próximos passos

1. ~~Colocar as imagens da Fase 1 em `my-app/public/img/`~~ — feito (74 arquivos no lugar, confirmado na auditoria de 21/09/2026). Falta só completar as 8 amostras de cor restantes e as fichas 52–57 de @imagens.md.
2. ~~Header + hero da Home~~ — feito a partir de `prompt-header-hero.md`. Conferir visualmente em 360, 390, 430, 768, 1024 e 1440.
3. Atualizar `imagens.md` (referência Eight Sleep, `app/` → `my-app/`, rotas).
4. Fases seguintes: os outros 3 tamanhos, `/por-que-comprar`, blog, demais LPs — reaproveitando os componentes da Fase 1.
