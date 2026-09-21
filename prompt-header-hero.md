# Prompt — Header + Hero da Home (Fase 1)

> Gerado em 21/09/2026 a partir da inspeção técnica ao vivo de `eightsleep.com` (referência única aprovada em @memoria.md).
> **Uso da referência:** só mecânica de layout, proporção e comportamento. Nenhum texto, imagem, cor, fonte, logo ou elemento de marca do Eight Sleep entra aqui. A identidade é 100% Kanak, vinda de @specs/design.md.

---

## O que foi medido na referência (dados reais, não estimativa)

Inspeção em 1440×900 e em 737×910, com `getComputedStyle` e `getBoundingClientRect`:

| Elemento | Valor medido |
| --- | --- |
| Barra de aviso (topo) | 42 px de altura, faixa de cor cheia, texto centralizado, rola junto com a página (não é fixa) |
| Barra de navegação | 69–70 px de altura, `position: fixed`, `z-index: 301` |
| Fundo da barra | branco a 98% de opacidade — sólido, **não** translúcido sobre a foto |
| Transição da barra | `background-color .3s ease-in-out, transform .5s cubic-bezier(.65,0,.35,1)` |
| Mecânica de scroll | a barra é empurrada para cima em `translateY(-42px)` (a altura exata da barra de aviso) e a navegação fica colada no topo |
| Layout interno | `flex`, `justify-content: space-between`, `align-items: center`, `gap: 25px`, `padding: 0 32px`, `max-width: 1504px` |
| Links do menu | 12 px, peso 500, `letter-spacing: 1.6px`, **caixa alta** |
| Logo | centralizado no eixo horizontal (x≈672 de 1440), 82×35 px |
| Grupo à direita | link de conta (12 px, caixa alta) + seletor de região + carrinho + botão sólido |
| Botão do header | 132×40 px, raio 8 px, 14 px peso 500 |
| Hero: altura | 900 px = 100% da viewport (`100vh`), full-bleed |
| Hero: mídia | `<video>` full-bleed, `object-fit: cover`, `loop`, `muted`, `playsinline`, sem poster, 3 fontes (h265/webm/h264) |
| Hero: `h1` | 56 px, peso 400, entrelinha 61,6 px (1,1), `letter-spacing: 0.45px`, **branco, alinhado à esquerda**, `max-width: 622px` (≈43% da largura) |
| Hero: posição do texto | x=64 px (gutter), bloco ancorado na **base** do hero (`justify-content: flex-end`) |
| Hero: CTA | 199×57 px, `padding: 16px 32px`, raio 8 px, fundo claro sólido, texto escuro |
| Hero: link secundário | logo abaixo do CTA, texto pequeno sublinhado |
| Mobile (737 px) | `h1` cai para 43,8 px, texto passa a **centralizado**, menu vira hambúrguer à esquerda, logo permanece centralizado |

**A leitura estrutural:** barra de aviso rolável + nav fixa de ~70 px com logo centralizado e menu em caixa alta miúda de um lado; hero de viewport inteira com mídia full-bleed, texto grande de peso leve ancorado embaixo à esquerda, e um único botão sólido claro.

---

## PROMPT — cole a partir daqui

```
Leia @CLAUDE.md, @specs/site.md, @specs/design.md, @specs/conteudo.md, @memoria.md e @imagens.md antes de escrever qualquer linha.

Construa o **header** e o **hero da Home** do site da Kanak em `my-app/`, como os dois primeiros componentes do design system da Fase 1.

## Regras que valem acima de tudo

- A copy é do cliente e é imutável. O texto do hero vem literalmente de `conteudo/institucional/home.md`, seção `## [hero]`: heading, apoio e o `**CTA:**` daquela seção, com a pontuação exata que ele escreveu. Não reescreva, não resuma, não corte, não traduza.
- Não invente item de menu, headline, subtítulo, selo, número, badge nem CTA.
- Nenhuma dependência nova. Next.js App Router + TypeScript strict + Tailwind v4 + pnpm, tudo em `my-app/`.
- Cores, fontes, escala tipográfica, raios, sombra, overlay e botões saem de @specs/design.md. Nenhum valor visual novo.
- Verde é proibido (exceto dentro do ícone do WhatsApp).
- Celular primeiro de verdade: projete em 360–430 px e cresça a partir daí. Confira em 360, 390, 430, 768, 1024 e 1440.

## Header

Estrutura em duas faixas, uma acima da outra:

1. **Faixa de âncora** (faixa superior fina) — altura 40–44 px, fundo `--kanak-bordo-800`, texto centralizado em Archivo caixa alta 12 px com tracking largo, cor `--kanak-areia-100`. **Só use esta faixa se houver texto real do cliente para ela.** Se não houver, não renderize a faixa e o header começa direto na navegação — não invente frase de garantia, frete ou prazo.
2. **Barra de navegação** — altura 64 px no celular / 72 px no desktop, `position: fixed`, `z-index` acima de todo o conteúdo, fundo `--kanak-papel` sólido (nunca translúcido sobre a foto).

**Comportamento de scroll:** ao rolar para baixo, a barra inteira desliza para cima exatamente a altura da faixa de âncora, deixando só a navegação colada no topo; ao voltar ao topo, a faixa reaparece. Transição: `background-color .3s ease-in-out, transform .5s cubic-bezier(.65,0,.35,1)`. Respeite `prefers-reduced-motion` — com movimento reduzido, a faixa simplesmente some sem animar.

**Layout interno no desktop:** `flex`, `justify-content: space-between`, `align-items: center`, gutter de 32 px, largura máxima 1200 px (a do projeto, não a da referência). Três grupos:
- **Esquerda:** itens do menu principal exatamente como definidos em @specs/site.md — Home · Colchão Queen Size · Colchão King Size · Colchão de Casal · Colchão de Solteiro · Por que comprar · A Kanak · Blog. Archivo 500, 12 px, caixa alta, tracking +6%, cor `--kanak-tinta-900`. Nesta fase só Home e King Size têm rota real: os demais ficam visíveis porém inertes (sem `href`, `aria-disabled`), nunca apontando para 404.
- **Centro:** logo da Kanak, altura ~32 px, link para `/`.
- **Direita:** o botão de CTA de WhatsApp (componente único do projeto), variante compacta — 40 px de altura, raio 8 px, Archivo 600, fundo `--kanak-bordo-700`, texto branco.

Sem carrinho, sem busca, sem login, sem seletor de idioma ou região — não existe checkout neste site.

**No celular:** hambúrguer à esquerda (área de toque ≥ 44×44 px), logo centralizado, CTA de WhatsApp à direita reduzido a ícone com rótulo acessível. O menu abre em painel de tela cheia, fundo `--kanak-papel`, itens em Archivo, fechável por Esc e por botão visível, com foco preso dentro enquanto aberto e devolvido ao hambúrguer ao fechar.

Acessibilidade: `<header>` com `<nav aria-label="Principal">`, item da página atual com `aria-current="page"`, foco visível em anel de 2 px `--kanak-ouro-500` com offset de 2 px.

## Hero da Home

Uma seção full-bleed, altura `min-height: 88svh` no celular e `100svh` no desktop (use `svh`, não `vh`, por causa da barra do navegador no celular), com o conteúdo do header sobreposto — ou seja, a imagem começa no topo absoluto da página, atrás da barra fixa.

**Mídia:** imagem, não vídeo — o banco de imagens desta fase não tem vídeo e nenhuma imagem nova pode ser gerada. Use `hero/hero-home-king-cinza-desktop-21x9.jpg` no desktop e `hero/hero-home-king-cinza-mobile-4x5.jpg` no celular, trocadas por `<picture>`/`sizes`, `object-fit: cover`, `priority`, com `alt` real vindo de @imagens.md.

**Overlay:** obrigatório, exatamente como manda a seção 8 de @specs/design.md — gradiente de `rgba(26,22,20,0.72)` na origem do texto até `rgba(26,22,20,0.15)` no lado oposto; no desktop da esquerda para a direita, no celular de baixo para cima. Nunca cortina chapada, nunca caixa translúcida atrás do texto, nunca `text-shadow` no lugar do overlay.

**Conteúdo**, ancorado na base do hero com 96 px de respiro até a borda inferior no desktop e 64 px no celular:
- `h1` com o **Heading** literal do cliente. Fraunces 600, 32 px no celular → 56 px no desktop, entrelinha 1,08, tracking −1,5%, cor `#FFFFFF`. Largura máxima 55% no desktop, 100% no celular.
- Abaixo, 16 px de espaço: o **Apoio** do cliente em Inter 400, 18 → 20 px, entrelinha 1,55, cor `--kanak-areia-100`, medida de leitura no máximo 60ch. O apoio do cliente tem quatro parágrafos: renderize apenas o primeiro no hero e mova os demais para a primeira seção de texto abaixo do hero — nenhum parágrafo pode ser descartado; se essa divisão não couber no ritmo da página, mantenha os quatro e alongue o hero.
- Abaixo, 32 px de espaço: o botão de CTA de WhatsApp com o texto literal do `**CTA:**` daquela seção. Sobre foto ele usa a variante da seção 6 de @specs/design.md: fundo `--kanak-papel`, texto `--kanak-bordo-800`. Largura total no celular, automática a partir de 768 px. Altura 48 px no celular / 52 px no desktop.

**Alinhamento:** à esquerda no desktop (gutter de 32 px), à esquerda também no celular (gutter de 20 px) — não centralize; a centralização no celular é escolha da referência, não da Kanak, e brigaria com o resto das seções.

Contraste: meça, não estime. Texto corrido ≥ 4,5:1 e título ≥ 3:1 contra a **região mais clara** que ele cobre. Se não bater, aumente o overlay ou mude o `object-position` — não aceite "está legível o bastante".

## Entrega

- Componentes em `my-app/components/`, tipados, Server Components por padrão; `"use client"` só no menu mobile e no comportamento de scroll do header.
- Tokens de cor e tipografia declarados como variáveis CSS conforme @specs/design.md, num único lugar reaproveitável pelas próximas seções.
- O componente de CTA de WhatsApp já sai pronto como componente único e reutilizável: centraliza o número (41) 99842-5771, a mensagem pré-preenchida e o parâmetro de origem.
- Ao terminar: `pnpm lint` e `pnpm build` limpos, e um resumo do que foi construído.
- Se qualquer ponto acima contradisser @specs/design.md, @specs/site.md, @specs/conteudo.md ou @memoria.md, **pare e me avise antes de alterar** — diga qual decisão seria afetada.
```

---

## Onde este prompt se afasta de propósito da referência

| Referência | Kanak | Por quê |
| --- | --- | --- |
| Vídeo full-bleed em loop | Imagem com `<picture>` | O banco desta fase não tem vídeo e a Fase 1 proíbe gerar mídia nova |
| Header translúcido/branco sobre a foto | Branco sólido | @specs/design.md proíbe elemento translúcido sobre foto |
| Carrinho, login, seletor de região | Nada disso | Não existe checkout; a conversão é WhatsApp |
| Texto centralizado no celular | Alinhado à esquerda | Consistência com as demais seções do projeto |
| `h1` peso 400 em fonte neo-grotesca | Fraunces 600 | Tipografia aprovada da Kanak |
| Link secundário sublinhado sob o CTA | Não existe | Não há texto do cliente para ele — e inventar CTA é proibido |
