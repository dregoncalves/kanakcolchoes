# KANAK COLCHÕES — DOCUMENTO DE IMPLEMENTAÇÃO

> Revisado em 21/09/2026 para a etapa de **construção do site**. As etapas de descoberta (cérebro do projeto, mapeamento da copy, plano de imagens) estão concluídas — ver Anexo C e `memoria.md`.
> **Ferramenta de código desta fase:** Grok 4.6.

**O projeto em uma frase:** redesign do site da Kanak Colchões — hoje no ar em WordPress — reconstruído em Next.js dentro de `my-app/`, mantendo **100% da copy escrita pelo cliente**, com o blog em WordPress headless no mesmo domínio.

---

## LEIA ANTES DE COMEÇAR — as 6 travas deste projeto

1. **A copy não é minha e não se reescreve.** Todos os textos são do cliente e vivem em `conteudo/`. Reorganizar em seções e componentes, sim; reescrever, resumir, "melhorar" ou cortar, nunca. Se o texto não couber no layout, **o layout muda**.
2. **Não se inventa especificação de produto.** Densidade, firmeza, suporte de peso, certificações e tratamentos do tecido não existem na copy. Campo sem dado real **fica de fora** — não recebe traço, "consulte-nos" nem valor genérico.
3. **O tom é adulto e editorial.** O briefing proíbe apelo de preço baixo, promessa de cura para dor de coluna, urgência agressiva, tom panfletário e poluição visual.
4. **Mobile primeiro, de verdade.** Pico de vendas 14h–18h e 19h–21h30, cliente em casa, no celular, decidindo junto com o parceiro(a). O desktop é a adaptação.
5. **Nenhuma imagem nova nesta fase.** Usa-se **só** o que já está em `my-app/public/img` (74 arquivos). Ver seção 4.
6. **Escopo reduzido.** Fase 1 são 4 páginas, não 19. Ver seção 3.

---

## 1. ESTADO ATUAL DO REPOSITÓRIO

```
kanakcolchoes/
├── CLAUDE.md · AGENTS.md · .cursor/rules/project.mdc   arquivos-ponte (mesmo conteúdo)
├── memoria.md                  decisões, pendências, histórico
├── imagens.md                  plano de imagens (57 fichas, 88 arquivos previstos)
├── imagens-prompt.md           88 prompts de geração — NÃO usar nesta fase
├── prompts-website-kanak.md    este documento
├── specs/
│   ├── site.md                 objetivo, rotas, stack, escopo, acessibilidade, SEO
│   ├── design.md               paleta, tipografia, espaçamento, overlay, LP, o que evitar
│   └── conteudo.md             19 páginas × 149 seções → 21 componentes
├── conteudo/                   COPY DO CLIENTE — IMUTÁVEL
│   ├── TAXONOMIA.md
│   ├── institucional/          home.md · por-que-comprar.md
│   ├── produtos/<tamanho>/     kit.md · molas-ensacadas.md · anatomico-ortopedico.md · magnetico.md
│   └── landing-pages/          lp-google-ads.md
├── referencias-site/
│   ├── eight-sleep/            referência visual única aprovada
│   ├── kanak/                  prints do site atual + Briefing Kanak (1).pdf
│   └── meus-produtos/          46 fotos reais do produto
└── my-app/                     Next.js 16.3.5 · React 19 · TS · Tailwind 4 · pnpm
    ├── app/                    ainda no boilerplate — nada construído
    └── public/img/             74 imagens prontas
```

**Já decidido** (detalhe em `memoria.md`): referência visual única (Eight Sleep) · paleta bordô + amarelo herdada do site atual · tipografia Fraunces / Archivo / Inter · LP com layout próprio e mesma paleta · copy imutável, afirmações fortes mantidas · URLs antigas não precisam ser preservadas · dados técnicos do Anexo B adiados · Node não roda na Hostinger.

**Ainda aberto:** publicação (export estático × plataforma separada) · endereço do WordPress do blog · copy de `/a-kanak` · depoimentos reais · confirmação de que hub de tamanho = página de kit.

---

## 2. STACK E REGRAS TÉCNICAS

| Item | Decisão |
| --- | --- |
| Framework | Next.js 16.3.5, App Router |
| Local | `my-app/` — **não recriar o projeto** |
| Linguagem | TypeScript 5, `strict`, sem `any` |
| Estilo | Tailwind v4 + tokens CSS de `specs/design.md` |
| Gerenciador | pnpm 12.3.4 |
| Conteúdo | `.md` de `conteudo/`, lidos em build por `lib/conteudo.ts` |
| Fontes | `next/font` (Fraunces, Archivo, Inter), só os pesos usados |

Regras: nenhuma dependência nova sem autorização · não trocar gerenciador · não migrar versão · não apagar o bloco `nextjs-agent-rules` de `my-app/AGENTS.md` (o `next dev` o recria) · `pnpm lint` e `pnpm build` limpos ao fim de cada etapa.

---

## 3. ESCOPO DA FASE 1 — 4 páginas

| Rota | Fonte da copy |
| --- | --- |
| `/` | `conteudo/institucional/home.md` |
| `/colchao-king-size` | `conteudo/produtos/kingsize/kit.md` (hub = página de kit) |
| `/colchao-king-size/anatomico-ortopedico` | `conteudo/produtos/kingsize/anatomico-ortopedico.md` |
| `/lp/[slug]` | `conteudo/landing-pages/lp-google-ads.md` |

Mais: design system, header, footer, botão flutuante de WhatsApp e o componente de CTA.

King Size porque é o produto de maior margem e o foco do tráfego pago.

**Fora da Fase 1:** os outros 3 tamanhos, os demais modelos, `/por-que-comprar`, `/a-kanak`, blog headless, demais LPs. Tudo reaproveita os componentes da Fase 1 depois.

---

## 4. REGRA DE IMAGENS DESTA FASE

**Não gere imagem nenhuma. Não use `imagens-prompt.md`.** Use só os 74 arquivos já existentes em `my-app/public/img`, organizados em `hero/ ambiente/ comparativo/ cores/ detalhe/ produto/ institucional/ blog/ og/ textura/`.

Cobertura confirmada para a Fase 1:

| Slot | Arquivo |
| --- | --- |
| Hero Home | `hero/hero-home-king-cinza-desktop-21x9.jpg` + `hero/hero-home-king-cinza-mobile-4x5.jpg` |
| Vitrine por tamanho (Home) | `ambiente/tamanho-{solteiro-verde,casal-terracota,queen-vinho,king-mostarda}-card-4x3.jpg` |
| Vitrine por modelo (Home e kit) | `produto/linha-{molas-ensacadas,anatomico-ortopedico,magnetico}-1x1.jpg` |
| Kit completo | `produto/kit-completo-bege-packshot-1x1.jpg` · `produto/kit-composicao-explodida-terracota-1x1.jpg` |
| Fechamento / CTA final | `hero/cta-final-quarto-entardecer-{desktop-21x9,mobile-4x5}.jpg` |
| Hero do kit King | `comparativo/espaco-no-quarto-king-16x9.jpg` ou `ambiente/tamanho-king-mostarda-card-4x3.jpg` |
| Dimensões King | `comparativo/topdown-king-3x2.jpg` |
| Hero da página de modelo | `hero/linha-anatomico-ortopedico-16x9.jpg` |
| Tecnologia (pillow top) | `detalhe/macro-pillow-top-vies-3x2.jpg` · `comparativo/pillow-top-vs-sem-pillow-top-3x2.jpg` |
| Acabamento | `detalhe/macro-{capitone-botao-cristal,matelasse-colchao,veludo-terracota,pe-madeira}-3x2.jpg` |
| 11 cores | `cores/swatch-{bege,cinza,terracota,caramelo,marrom,vinho,vermelho,rose,azul,mostarda,verde}-1x1.jpg` — batem exatamente com as 11 cores da copy |
| Hero da LP | `hero/lp-kit-king-terracota-{desktop-16x9,mobile-4x5}.jpg` |
| Open Graph | `og/og-default-1200x630.jpg` · `og/og-lp-kit-1200x630.jpg` |
| Prova social | **sem foto** — não existe depoimento real. A seção renderiza só o texto do cliente |

Falta de par desktop/celular: só o hero da Home e o da LP têm as duas versões. Nas demais, use a mesma imagem com recorte por CSS (`object-position`), nunca esticada.

Se um slot não tiver imagem adequada, **a seção sai sem imagem** ou reaproveita a mais próxima desta lista. Nunca placeholder cinza, nunca banco de imagens, nunca foto de outra marca.

---

## 5. PROMPT — PLANO DE IMPLEMENTAÇÃO *(rode este primeiro)*

```
Leia @CLAUDE.md, @specs/site.md, @specs/design.md, @specs/conteudo.md, @memoria.md e @prompts-website-kanak.md.

Faça o plano de implementação da Fase 1 (4 páginas, seção 3 do documento). Não escreva código ainda.

Contexto técnico obrigatório:
- Next.js App Router já existe em my-app/. Não recrie, não troque de gerenciador, não migre versão.
- A copy vem de arquivos .md do cliente em conteudo/, um por página, com seções marcadas por ## [tag].
- As páginas de produto têm a mesma estrutura de 8 seções com textos diferentes por arquivo. Proponha a estratégia (rota dinâmica lendo o .md, rotas estáticas, ou componentes com props) e justifique, lembrando que a Fase 2 adiciona mais 15 páginas iguais em estrutura.
- Todo CTA leva ao WhatsApp (41) 99842-5771, por um componente único com mensagem pré-preenchida e parâmetro de origem (página + seção; + campanha na LP).
- As landing pages são um site à parte: sem menu, sem links de saída, rodapé legal mínimo.
- Use apenas as imagens já existentes em my-app/public/img, conforme a seção 4 do documento.

Entregue:
1. Árvore de rotas e arquivos em my-app/app/ e my-app/components/;
2. Assinatura do parser lib/conteudo.ts (tipos de saída e como trata blocos rotulados, tabelas, listas, telefones e placeholders de carrossel);
3. Os 21 componentes de @specs/conteudo.md §5 com as props e variantes de cada um;
4. Ordem das seções de cada uma das 4 páginas, com a imagem de cada slot;
5. Tokens de design em CSS (cores, tipografia, espaçamento, raios) a partir de @specs/design.md;
6. Estratégia mobile-first, de desempenho e de acessibilidade;
7. Riscos e o que ainda falta de conteúdo.

Se alguma decisão contradisser as specs ou a memoria, pare e me avise antes.
```

---

## 6. PROMPT — CONSTRUIR *(depois do plano aprovado)*

```
Execute o plano aprovado. Construa a Fase 1 por etapas, nesta ordem:

1. Tokens de design + layout base (Header, Footer, BotaoFlutuanteWhatsapp, CtaWhatsApp) e o parser lib/conteudo.ts
2. Home (/)
3. Hub do King (/colchao-king-size)
4. Página de modelo (/colchao-king-size/anatomico-ortopedico)
5. Landing page (/lp/[slug])

Regras inegociáveis:
- TODO texto visível vem de conteudo/, palavra por palavra, com a pontuação e as maiúsculas do cliente. Nenhuma headline, bullet ou CTA escrito por você.
- A ordem das seções é a ordem do arquivo .md. Tag repetida na mesma página é intencional: vira variante visual, nunca some.
- Cada **CTA:** pertence à seção em que aparece. São 150 no site inteiro — não consolide, não normalize a redação.
- Nenhuma imagem nova. Só os arquivos de my-app/public/img, com next/image, sizes correto e priority só no hero.
- HTML semântico, um <h1> por página, hierarquia de headings sem pulo.
- Contraste AA inclusive sobre foto — aplique a regra de overlay de @specs/design.md §8 e verifique contra a região mais clara da imagem.
- Animação discreta, respeitando prefers-reduced-motion. Sem autoplay, parallax ou pop-up.
- Foco visível em tudo que é clicável. Área de toque mínima 44x44.
- Campo de especificação sem dado real não aparece. A tabela renderiza só os pares que existem no .md — os rótulos variam de arquivo para arquivo, não crie schema fixo.
- Não instale dependência sem autorização.

Ao fim de cada etapa: pnpm lint, pnpm build, corrija o que for evidente e atualize @memoria.md só com decisão ou aprendizado relevante.

Ao terminar: rode local, confira o console, teste em 390px e 1440px, e liste o que ficou dependendo de conteúdo real do cliente.
```

---

## 7. ARMADILHAS CONHECIDAS DA COPY

Levantadas no mapeamento. O código precisa aguentar cada uma sem quebrar:

| Situação | Onde | O que fazer |
| --- | --- | --- |
| Tag repetida na mesma página | Home tem `diferenciais` 2×; `por-que-comprar` tem `garantia-entrega` 3× | Variante visual alternada. Não fundir, não remover |
| Dois CTAs na mesma seção | Home, `como-comprar` | `**CTA:**` primário + `**CTA secundário:**`, com mensagens de origem distintas |
| Dois carrosséis na mesma seção | Home, `vitrine-produtos` | Um por tamanho (4 cards), um por modelo (3 cards), e um único CTA fechando os dois |
| Tabela sem esquema fixo | 16 páginas de produto | 8 a 12 linhas, rótulos variam (`Dimensões` × `Dimensões do colchão`). Renderize os pares do arquivo, na ordem do arquivo |
| Seção ausente | `queensize/kit.md` não tem `faq` | A página termina em `fechamento`. Não criar FAQ |
| Ordem invertida entre tipos | Kit: `fechamento` depois de `especificacoes`. Modelo: antes | Ordem vem do arquivo, sempre |
| Grafia variável do placeholder | `[CARROSSEL COM OS MODELOS]` × `[CARROSSEL COM MODELOS]` | Parser casa `\[CARROSSEL[^\]]*\]` e classifica pelo conteúdo |
| Volume desigual | Solteiro Anatômico ~1295 palavras × King Magnético ~755 | Seção sem altura fixa; FAQ em acordeão |
| Afirmações fortes | Home e LP (12 trechos listados em `memoria.md`) | Mantidas como o cliente escreveu. Sem selo, contador, cor de urgência ou destaque extra |
| `variantes-cor` em duas formas | 14 arquivos com placeholder de carrossel, 2 só com texto | Duas variantes do mesmo componente |
| Blocos rotulados | `**Rótulo**` + parágrafo, em vitrine, como-comprar, fechamento e FAQ | Um primitivo só, com modos `cards`, `passos`, `definicoes` e `acordeao` |

---

## 8. DEPOIS DA FASE 1

| Etapa | O que é |
| --- | --- |
| Fase 2 | Os outros 3 tamanhos e os demais modelos, reaproveitando os componentes prontos |
| Fase 3 | `/por-que-comprar` e `/a-kanak` (esta depende de copy do cliente) |
| Fase 4 | Blog WordPress headless — seção 9 |
| Fase 5 | Demais landing pages de campanha |
| Fase 6 | Publicação — seção 10 |

---

## 9. BLOG EM WORDPRESS HEADLESS *(Fase 4)*

O blog continua no WordPress da Hostinger, no mesmo domínio. O Next.js consome pela API; o cliente continua publicando pelo painel que conhece.

**Antes de escrever código, pergunte e aguarde resposta:** qual o endereço do WordPress e como ele fica exposto (subdomínio, subpasta ou `/wp`)? O WordPress deixa de servir HTML ao público?

Decidido: **REST** (`/wp-json/wp/v2`), não WPGraphQL.

Regras: todo acesso passa por `lib/wordpress.ts`, com tipos de Post, Categoria, Autor e Mídia, sem `any` · rotas `/blog` (paginação e filtro por categoria) e `/blog/[slug]` · geração estática com revalidação, intervalo justificado · se a API cair, `/blog` mostra erro discreto e o resto do site continua de pé · HTML do WordPress sanitizado e estilizado com bloco de tipografia próprio · imagens do post por `next/image` com o domínio liberado em `next.config.ts` · `generateMetadata` por post e sitemap com os posts. Fora de escopo: comentários, busca full-text e área de autor.

---

## 10. PUBLICAÇÃO *(Fase 6)*

- **Hospedagem:** Hostinger (mesma conta do WordPress do blog).
- **Domínio:** `kanakcolchoes.com.br`, registrado no Registro.br **por um terceiro**, sem acesso repassado. Prefira soluções que só exijam alterar registros no painel atual; qualquer troca de nameserver é risco a sinalizar antes.
- **Node não roda na Hostinger.** SSR/ISR em Node no servidor atual está descartado.
- **Decisão em aberto entre duas opções:** export estático do Next (blog buscando o WordPress no cliente ou rebuild a cada publicação) × plataforma de deploy separada apontando por DNS.
- URLs antigas **não** precisam ser preservadas — site recente, sem histórico de SEO a proteger. Não há plano obrigatório de 301.

Antes de publicar: `pnpm build` limpo, console sem erro, teste no celular, conferência de imagens/fontes/CSS, remoção de arquivos temporários.

---

## 11. PROMPT — CORRIGIR UMA ÁREA DO SITE

```
Analise o elemento indicado e corrija o problema.

Antes de alterar: identifique a causa; verifique se a correção afeta outras páginas que usam o mesmo componente; preserve o resto do layout; não altere a identidade visual; não mude a stack.

Problema: [DESCREVA]
Resultado esperado: [DESCREVA]

Depois: teste em 390px e 1440px, confirme que as outras páginas com esse componente continuam corretas e explique em duas linhas o que mudou.
```

---

## 12. PROMPT — PAGESPEED

```
Analise o relatório anexado. Leia @specs/design.md e @memoria.md.

Melhore o desempenho sem prejudicar design, legibilidade ou funcionalidade. Priorize LCP, CLS, INP, peso das imagens, JavaScript desnecessário, CSS não usado, fontes e carregamento abaixo da dobra.

Teste a versão celular primeiro — é lá que está o pico de vendas, em rede móvel. Teste também uma landing page, não só a home.

Antes de alterar: liste os problemas por impacto e avise se alguma otimização muda a aparência. Depois: teste de novo, mostre os arquivos modificados e atualize @memoria.md.
```

---

## ANEXO A — FICHA DO PRODUTO *(cole em qualquer prompt novo)*

> Kanak Colchões vende conjuntos completos de cama — colchão, base box, cabeceira estofada, baú/recamier e 4 travesseiros — em 3 modelos (Molas Ensacadas, faixa única sem pillow top, 5 anos de garantia; Anatômico Ortopédico, com pillow top, 8 anos; Magnético, com pillow top e tecnologia magnética, garantia conforme o modelo) e 4 tamanhos (Solteiro 88×188, Casal 138×188, Queen 158×198, King 193×203), com 11 opções de cor de veludo. O foco comercial é 100% no kit; o King é o de maior margem. Não existe checkout: o cliente fala com a equipe pelo WhatsApp, recebe em casa, **paga só na entrega** e pode devolver sem pagar se não gostar. Entrega em 9 estados. Público de 25 a 60 anos, classe B-/C+, que acessa à tarde e à noite, pelo celular, e costuma decidir junto com o parceiro(a). Tom adulto e editorial: nada de preço baixo, promessa de cura, urgência agressiva ou visual panfletário.

## ANEXO B — O QUE FALTA CONFIRMAR COM O CLIENTE

Pedido no briefing, ausente em toda a copy. **Nenhum destes pode ser inventado** — e a busca está **adiada por decisão do cliente**, então os campos ficam fora do site até segunda ordem.

1. Densidade da espuma, por modelo · 2. Nível de firmeza de cada modelo · 3. Suporte de peso por pessoa, em kg · 4. Composição do tecido e tratamentos · 5. Certificações (Inmetro) · 6. Garantia do Magnético, em anos · 7. Dimensões, fixação e estilo da cabeceira · 8. Dimensões, mecanismo e capacidade do baú · 9. Altura, madeira e tipo de pés da base · 10. Depoimentos reais e autorizados · 11. Copy da página `/a-kanak` · 12. Preços e condições, se forem aparecer no site.

## ANEXO C — ETAPAS JÁ CONCLUÍDAS

Não precisam ser refeitas. Ficam registradas para quem pegar o projeto no meio.

| Etapa | Resultado |
| --- | --- |
| Cérebro do projeto | `CLAUDE.md`, `AGENTS.md`, `.cursor/rules/project.mdc`, `specs/site.md`, `specs/design.md`, `specs/conteudo.md`, `memoria.md` |
| Ingestão e trava da copy | 19 `.md` + `TAXONOMIA.md` em `conteudo/`; mapeamento de 149 seções e 150 CTAs em `specs/conteudo.md` |
| Cruzamento briefing × copy | Lacunas listadas no Anexo B e nas pendências de `memoria.md` |
| Plano de imagens | `imagens.md` (57 fichas) e `imagens-prompt.md` (88 prompts prontos) |
| Geração de imagens | 74 arquivos em `my-app/public/img` — suficientes para a Fase 1 inteira |
