# specs/conteudo.md — mapeamento da copy do cliente → componentes React

Escopo e rotas em @specs/site.md · Verdade visual em @specs/design.md · Imagens em @imagens.md · Histórico em @memoria.md
Criado em 21/09/2026 · Mapeamento completo dos 19 arquivos de copy + `TAXONOMIA.md`.

> A copy é imutável. Este arquivo diz **onde cada texto entra**, nunca o que ele diz.
> Quando o texto não couber no layout, **o layout se adapta**. Repetição do cliente é decisão do cliente: não se funde, não se remove.

---

## 1. Onde a copy vive

```
conteudo/
├── TAXONOMIA.md                       16 tags de seção e o que cada uma significa
├── institucional/    home.md · por-que-comprar.md
├── produtos/
│   ├── kingsize/     kit.md · molas-ensacadas.md · anatomico-ortopedico.md · magnetico.md
│   ├── queensize/    (idem)
│   ├── casal/        (idem)
│   └── solteiro/     (idem)
└── landing-pages/    lp-google-ads.md
```

19 arquivos de copy. 150 CTAs. 149 seções. `referencias-site/kanak/` guarda só os prints do site atual e o briefing em PDF.

## 2. Gramática dos arquivos

Todos os 19 seguem a mesma marcação:

| Marca no `.md` | Vira | Renderiza? |
| --- | --- | --- |
| `# Título` (linha 1) | nome interno da página | não |
| `> Fonte original: …` / `> Tipos de seção…` | metadado | não |
| `## [tag]` | seção → componente | — |
| `## [tag] Texto` (`## [especificacoes] Especificações`, `## [faq] FAQ`) | o texto após a tag é o heading visível | sim |
| `**Heading:**` | `h1` no `hero`, `h2` nas demais | sim |
| `**Apoio:**` | corpo da seção (1 a 8 parágrafos) | sim |
| `### Texto` | `h3`, subgrupo dentro da seção | sim |
| `**Rótulo**` + parágrafo seguinte | **bloco rotulado** (card, passo, item de lista de definição) | sim |
| `- item` | lista | sim |
| `\| … \|` | tabela chave/valor | sim |
| `**CTA:**` / `**CTA secundário:**` | botão `CtaWhatsApp` **dentro daquela seção** | sim |
| `` `[CARROSSEL …]` `` | ponto de inserção de componente interativo | sim (como componente) |
| `📱 (41) …` | telefone | sim |
| `> **Nota de conteúdo:**` | nota do projeto | **nunca** |
| `## Checklist …` / `## Notas do briefing …` (fim do arquivo) | nota do projeto | **nunca** |

**Bloco rotulado** é o padrão estrutural mais importante do projeto: `**Rótulo**` sozinho numa linha, seguido de um parágrafo. Aparece como card de produto (`vitrine-produtos`), passo numerado (`como-comprar`), item de valor (`fechamento`) e pergunta de FAQ. Um único primitivo cobre os quatro casos.

**Parser:** `my-app/lib/conteudo.ts`, módulo único, executado em build (Server Component). Divide por `## [tag]`, descarta blockquotes de nota e tudo a partir do primeiro `##` que não seja tag, e devolve:

```ts
type Secao = {
  tag: Tag                  // 16 valores da TAXONOMIA
  headingVisivel?: string   // texto após a tag, quando existe
  heading: string           // **Heading:**
  corpo: Bloco[]            // parágrafo | lista | tabela | blocoRotulado | subtitulo | telefone | placeholder
  ctas: { texto: string; secundario: boolean }[]
}
```

Nenhum componente lê arquivo direto. Nenhum texto é reescrito, resumido, cortado ou traduzido. Ordem das seções = ordem do arquivo.

**Legenda de volume** usada nas tabelas abaixo: **P** ≤ 90 palavras · **M** 91–140 · **G** 141–200 · **GG** > 200.

---

## 3. Mapa página × seções

### 3.1 `/` — Home · `conteudo/institucional/home.md`

| # | Tag | Heading | CTA | Estrutura | Vol. |
| --- | --- | --- | --- | --- | --- |
| 1 | `hero` | Seu descanso começa com a escolha certa | 1 | 3 parágrafos | M (108) |
| 2 | `diferenciais` | A Ciência do Conforto: Tecnologia e Inovação para o Seu Descanso Profundo | 1 | 2 parágrafos, prosa corrida | G (144) |
| 3 | `tecnologia` | Qual colchão combina com você? | 1 | 6 parágrafos, termos em negrito no meio da frase | M (130) |
| 4 | `vitrine-produtos` | Conheça nossos colchões | 1 | **2 carrosséis** + 2 `###` + **7 blocos rotulados** (4 tamanhos, 3 modelos) | GG (250) |
| 5 | `prova-social` | O Que Nossos Clientes Dizem: Histórias de Quem Voltou a Sonhar Acordado | 1 | 2 parágrafos + `[CARROSSEL DE DEPOIMENTOS]` | M (115) |
| 6 | `como-comprar` | Faça seu pedido e acompanhe sua entrega | **2** (1 + 1 secundário) | 2 blocos rotulados ("Quer fazer um pedido?" / "Já fez seu pedido?") + 3 telefones | M (128) |
| 7 | `diferenciais` | Do Nosso Showroom para a Sua Casa: Atendimento Personalizado | 1 | 2 parágrafos, prosa corrida | M (91) |
| 8 | `contato` | Ainda ficou com alguma dúvida? Estamos aqui para ajudar. | 1 | 4 parágrafos + 3 telefones | M (99) |

Único lugar do site com `**CTA secundário:**` (seção 6).

### 3.2 `/por-que-comprar` · `conteudo/institucional/por-que-comprar.md`

| # | Tag | Heading | CTA | Estrutura | Vol. |
| --- | --- | --- | --- | --- | --- |
| 1 | `hero` | Mais do que colchões: uma empresa que acredita em uma forma mais segura de comprar | 1 | 5 parágrafos | G (141) |
| 2 | `historia` | A história da Kanak: uma empresa construída para transformar a experiência de comprar um colchão | 1 | prosa longa | G (161) |
| 3 | `diferenciais` | Responsabilidade: Cuidar de cada etapa também é cuidar de quem compra | 1 | prosa corrida | M (138) |
| 4 | `garantia-entrega` | Garantia: Seu colchão acompanhado depois da compra | 1 | prosa + **lista de 3 garantias por modelo** (5 anos / 8 anos / conforme o modelo) | M (131) |
| 5 | `tecnologia` | Qualidade, Tecnologia, acabamento e atenção aos detalhes | 1 | prosa + **3 blocos rotulados** (os 3 modelos) | G (164) |
| 6 | `como-comprar` | Como comprar na Kanak? | 1 | **5 blocos rotulados numerados** (1. Fale com nossa equipe … 5. Pague somente na entrega) | G (186) |
| 7 | `garantia-entrega` | Pague somente na entrega — Você escolhe. A Kanak entrega. E o pagamento acontece na chegada. | 1 | pergunta destacada + **linha de fluxo** ("Você escolhe → a Kanak entrega → você confere → paga na entrega.") | G (153) |
| 8 | `garantia-entrega` | Entrega que chega até você. Seu novo colchão sem precisar sair de casa | 1 | prosa + **os 9 estados** em linha corrida | M (134) |
| 9 | `fechamento` | Por que comprar na Kanak? Uma escolha baseada em confiança | 1 | **6 blocos rotulados** (Atendimento consultivo, Qualidade, Garantia, Entrega, Pagamento na entrega, Possibilidade de devolução) | G (141) |

`garantia-entrega` aparece **3 vezes**, com estruturas diferentes (lista → fluxo → cobertura). São três variantes do mesmo componente, não três cópias.

### 3.3 `/lp/[slug]` — landing page de anúncio · `conteudo/landing-pages/lp-google-ads.md`

| # | Tag | Heading | CTA | Estrutura | Vol. |
| --- | --- | --- | --- | --- | --- |
| 1 | `hero` | A Noite de Sono Perfeita Começa Aqui | 1 | 1 linha de apoio. Nota do cliente no arquivo: **"para promoções, deve ser só banner trocável"** | P (25) |
| 2 | `problema` | Acordar Cansado Não É Normal. O Seu Colchão Pode Estar Lhe Tirando a Saúde. | 1 | 2 parágrafos | P (70) |
| 3 | `vitrine-produtos` | MODELOS & TECNOLOGIAS: O Tamanho Certo para o Seu Quarto, a Tecnologia Certa para a Sua Coluna | 1 | **2 listas** (4 tamanhos + 3 tecnologias) + `[CARROSSEL COM OS MODELOS]` | M (102) |
| 4 | `prova-social` | POR QUE A KANAK É A ESCOLHA CERTA? | 1 | **lista de 4 garantias** + `[CARROSSEL COM DEPOIMENTOS]` + **1 depoimento de exemplo já escrito** (Juliana M.) | M (132) |
| 5 | `fechamento` | SUA NOVA ROTINA DE SONO COMEÇA HOJE! | 1 | 4 parágrafos | M (125) |

Sem header, sem menu, sem link de saída. Rodapé legal mínimo. Botão flutuante sempre visível.

### 3.4 Hubs de tamanho — `kit.md` de cada tamanho

Rotas: `/colchao-king-size` · `/colchao-queen-size` · `/colchao-de-casal` · `/colchao-de-solteiro` (decisão "hub = página de kit" em @specs/site.md §5).

**`produtos/kingsize/kit.md`**

| # | Tag | Heading | CTA | Estrutura | Vol. |
| --- | --- | --- | --- | --- | --- |
| 1 | `hero` | Kit Colchão King Size: mais espaço para transformar suas noites | 1 | 5 parágrafos | M (138) |
| 2 | `composicao-kit` | Uma cama completa em uma única escolha | 1 | lista de 4 itens do kit | M (108) |
| 3 | `dimensoes` | King Size 193 x 203 cm: quando espaço também é conforto | 1 | prosa + medida | M (120) |
| 4 | `vitrine-produtos` | Qual modelo de colchão King Size combina com você? | 1 | `[CARROSSEL COM OS MODELOS]` + **3 blocos rotulados** (os 3 modelos) | M (135) |
| 5 | `variantes-cor` | 11 cores para criar uma cama com a sua personalidade | 1 | `[CARROSSEL COM AS CORES]` + ressalva de disponibilidade | P (78) |
| 6 | `especificacoes` (heading visível: **Especificações**) | — | 1 | **tabela, 11 linhas** | M (105) |
| 7 | `fechamento` | King Size: para quem quer mais espaço para viver a cama | 1 | prosa | P (78) |
| 8 | `faq` (heading visível: **FAQ**) | — | 1 | **6 perguntas** | G (199) |

**`produtos/queensize/kit.md`**

| # | Tag | Heading | CTA | Estrutura | Vol. |
| --- | --- | --- | --- | --- | --- |
| 1 | `hero` | Kit Colchão Queen Size Kanak: mais espaço para transformar suas noites | 1 | prosa | G (141) |
| 2 | `composicao-kit` | Um kit completo para renovar o seu quarto | 1 | lista de 4 itens | M (114) |
| 3 | `dimensoes` | Queen Size 158 x 198 cm: mais espaço para o seu descanso | 1 | prosa + medida | M (108) |
| 4 | `vitrine-produtos` | Escolha o modelo que combina com a sua experiência de descanso | 1 | `[CARROSSEL COM OS MODELOS]` + blocos rotulados | G (165) |
| 5 | `variantes-cor` | 11 cores para combinar com o seu estilo | 1 | `[CARROSSEL COM AS CORES]` | P (76) |
| 6 | `especificacoes` **Especificações** | — | 1 | **tabela, 12 linhas** (a maior do site) | M (116) |
| 7 | `fechamento` | Seu quarto novo pode começar por uma escolha | 1 | prosa | P (87) |

**Exceção: não tem `faq`.** A página termina em `fechamento`. Nenhuma FAQ é criada para preencher a lacuna.

**`produtos/casal/kit.md`**

| # | Tag | Heading | CTA | Estrutura | Vol. |
| --- | --- | --- | --- | --- | --- |
| 1 | `hero` | Kit Colchão de Casal: o tamanho certo para renovar o seu quarto | 1 | prosa | G (150) |
| 2 | `composicao-kit` | Uma cama completa em uma única escolha | 1 | lista de 4 itens | P (87) |
| 3 | `dimensoes` | Colchão de Casal: 138 x 188 cm, um tamanho pensado para diferentes quartos | 1 | prosa + medida | M (112) |
| 4 | `vitrine-produtos` | Qual modelo de colchão combina com você? | 1 | `[CARROSSEL COM MODELOS]` (grafia diferente) + 3 blocos rotulados | M (138) |
| 5 | `variantes-cor` | 11 cores para deixar a cama com a sua personalidade | 1 | **só texto — sem placeholder de carrossel** | M (117) |
| 6 | `especificacoes` **Especificações** | — | 1 | **tabela, 11 linhas** | M (105) |
| 7 | `fechamento` | Kit Colchão de Casal Kanak: Para quem quer o melhor | 1 | prosa | M (96) |
| 8 | `faq` **FAQ** | — | 1 | **9 perguntas** | GG (275) |

**`produtos/solteiro/kit.md`**

| # | Tag | Heading | CTA | Estrutura | Vol. |
| --- | --- | --- | --- | --- | --- |
| 1 | `hero` | Kit Colchão de Solteiro: uma cama completa para transformar o seu espaço | 1 | prosa | G (146) |
| 2 | `composicao-kit` | Uma cama completa em uma única escolha | 1 | lista de 4 itens | M (107) |
| 3 | `dimensoes` | 88 x 188 cm: o tamanho Solteiro para aproveitar melhor o ambiente | 1 | prosa + medida | M (103) |
| 4 | `vitrine-produtos` | Escolha o modelo que combina com a sua preferência | 1 | `[CARROSSEL COM MODELOS]` + 3 blocos rotulados | M (140) |
| 5 | `variantes-cor` | 11 opções de cores para personalizar o ambiente | 1 | **só texto — sem placeholder de carrossel** | M (112) |
| 6 | `especificacoes` **Especificações** | — | 1 | **tabela, 11 linhas** | M (104) |
| 7 | `fechamento` | Kit Colchão de Solteiro Kanak: Mais praticidade para renovar o quarto | 1 | prosa | M (99) |
| 8 | `faq` **FAQ** | — | 1 | **10 perguntas** | GG (238) |

### 3.5 Páginas de modelo — 12 arquivos

Ordem **idêntica nos 12**: `hero → composicao-kit → dimensoes → tecnologia → variantes-cor → fechamento → especificacoes → faq`.
Repare: aqui `fechamento` vem **antes** de `especificacoes`; nos kits vem depois. É assim no arquivo do cliente e assim fica.

Todas as seções têm exatamente 1 CTA. `composicao-kit` tem lista de 3 ou 4 itens. `variantes-cor` tem `[CARROSSEL COM AS CORES]` nos 12. `especificacoes` é tabela. `faq` é bloco rotulado pergunta/resposta.

**King Size** — `/colchao-king-size/<modelo>`

| Arquivo | Hero | Tecnologia | Fechamento | Tabela | FAQ | Volume total |
| --- | --- | --- | --- | --- | --- | --- |
| `molas-ensacadas.md` | Kit Colchão King Size Molas Ensacadas: mais espaço para descansar do seu jeito (G 158) | Molas Ensacadas: uma estrutura que trabalha de forma individual (P 73) | Mais espaço para descansar. Mais funcionalidade para o quarto. (P 84) | 11 linhas | 6 perguntas (G 186) | ~887 |
| `anatomico-ortopedico.md` | Kit Colchão King Size Anatômico Ortopédico: mais espaço para o seu descanso (M 120) | O que significa escolher um modelo Anatômico Ortopédico? (P 82) | Anatômico Ortopédico com Pillow Top: conheça o acabamento (P 80) | 10 linhas | 6 perguntas (GG 205) | ~866 |
| `magnetico.md` | Kit Colchão King Size Magnético: mais espaço para transformar suas noites (M 130) | Magnético: uma proposta diferenciada dentro da linha Kanak (P 71) | Uma composição pensada para o seu quarto (P 74) | 9 linhas | 5 perguntas (G 146) | ~755 |

**Queen Size** — `/colchao-queen-size/<modelo>`

| Arquivo | Hero | Tecnologia | Fechamento | Tabela | FAQ | Volume total |
| --- | --- | --- | --- | --- | --- | --- |
| `molas-ensacadas.md` | Kit Colchão Queen Size Molas Ensacadas: espaço para descansar do seu jeito (G 149) | Molas Ensacadas: uma estrutura feita para acompanhar seus movimentos (M 106) | Um quarto mais completo começa pela cama (M 97) | 10 linhas | 9 perguntas (GG 275) | ~1045 |
| `anatomico-ortopedico.md` | Kit Colchão Queen Size Anatômico Ortopédico: mais espaço, aconchego e uma cama completa (M 125) | Anatômico Ortopédico com Pillow Top: conheça o modelo (M 119) | Uma composição completa para começar uma nova fase (M 98) | 10 linhas | 9 perguntas (GG 286) | ~1033 |
| `magnetico.md` | Kit Colchão Queen Size Magnético: uma nova experiência para o seu quarto (G 140) | Colchão Queen Size Magnético com Pillow Top (M 102) | Um kit pensado para facilitar a sua escolha (P 82) | 9 linhas | **10 perguntas** (GG 281) | ~986 |

**Casal** — `/colchao-de-casal/<modelo>`

| Arquivo | Hero | Tecnologia | Fechamento | Tabela | FAQ | Volume total |
| --- | --- | --- | --- | --- | --- | --- |
| `molas-ensacadas.md` | Colchão de Casal Molas Ensacadas: espaço para descansar, conforto para aproveitar (M 127) | Molas Ensacadas: cada mola trabalha individualmente (M 108) | Uma cama completa começa pelo colchão (P 82) | 8 linhas | 5 perguntas (G 176) | ~882 |
| `anatomico-ortopedico.md` | Colchão Anatômico Ortopédico: mais espaço para descansar, mais cuidado em cada escolha (M 114) | Colchão Anatômico Ortopédico: Uma estrutura pensada para quem valoriza o suporte (M 103) | Anatômico Ortopédico: uma escolha que começa pelo seu descanso (M 100) | 8 linhas | 5 perguntas (G 159) | ~822 |
| `magnetico.md` | Colchão de Casal Magnético: uma nova experiência começa na sua cama (M 130) | Benefícios de uma experiência de descanso com tecnologia magnética (M 138) | Uma escolha pensada para o seu momento (M 106) | 8 linhas | 5 perguntas (G 170) | ~927 |

**Solteiro** — `/colchao-de-solteiro/<modelo>`

| Arquivo | Hero | Tecnologia | Fechamento | Tabela | FAQ | Volume total |
| --- | --- | --- | --- | --- | --- | --- |
| `molas-ensacadas.md` | Colchão de Solteiro Molas Ensacadas: conforto para o seu espaço, descanso para a sua rotina (G 142) | Molas Ensacadas Individualmente: movimento onde precisa (M 110) | Colchão de Solteiro Molas Ensacadas: uma escolha consciente (P 89) | 8 linhas | 8 perguntas (GG 236) | ~958 |
| `anatomico-ortopedico.md` | Colchão de Solteiro Anatômico Ortopédico: conforto e suporte para o seu espaço (G 168) | Anatômico Ortopédico com Pillow Top: mais conforto para o seu descanso (**GG 226** — a maior seção `tecnologia` do site) | Colchão de Solteiro Anatômico Ortopédico: uma escolha consciente (M 129) | 8 linhas | **10 perguntas** (GG 373 — a maior FAQ do site) | ~1295 |
| `magnetico.md` | Colchão de Solteiro Magnético: tecnologia e conforto para o seu descanso (G 174) | Tecnologia Magnética: uma experiência diferente para o momento de descanso (G 194) | Colchão de Solteiro Magnético: uma escolha consciente (G 141) | 8 linhas | 9 perguntas (GG 342) | ~1271 |

**Consequência de layout:** as páginas Solteiro e Queen são ~40% mais longas que as King. O layout precisa aguentar `tecnologia` de 226 palavras e FAQ de 10 itens sem quebrar o ritmo — a seção não tem altura fixa, e a FAQ nasce em acordeão justamente por isso.

---

## 4. Padrões de página

| Padrão | Páginas | Assinatura |
| --- | --- | --- |
| **Institucional narrativo** | Home, Por que comprar | Sem tabela, sem FAQ. Prosa longa, tags repetidas com estruturas diferentes, telefones no corpo, carrossel só na Home |
| **Kit / hub de tamanho** | 4 `kit.md` | `vitrine-produtos` (3 modelos) no lugar de `tecnologia`. `fechamento` **depois** de `especificacoes`. FAQ em 3 dos 4 |
| **Modelo** | 12 arquivos | Estrutura fixa de 8 seções, `tecnologia` no lugar de `vitrine-produtos`, `fechamento` **antes** de `especificacoes` |
| **Anúncio** | `lp-google-ads.md` | Única com `problema`. Sem `composicao-kit`, sem `dimensoes`, sem `especificacoes`, sem `faq`. Seções curtas, listas em vez de prosa, tom imperativo |

Três observações estruturais que valem para a implementação:

1. **Toda seção do site tem CTA próprio.** 149 seções, 150 CTAs. Nenhuma seção sem botão.
2. **A tabela de `especificacoes` não tem esquema fixo.** Os rótulos variam por arquivo: `Dimensões` × `Dimensões do colchão` × `Tamanho do colchão`; `Modelo` × `Sistema` × `Tecnologia`; kits usam `Garantia Molas Ensacadas` e `Garantia Anatômico Ortopédico` em linhas separadas. O componente renderiza **os pares que o arquivo trouxer**, na ordem do arquivo. Nada de schema tipado por campo, nada de linha fixa.
3. **`variantes-cor` tem duas formas:** 14 arquivos trazem `[CARROSSEL COM AS CORES]`; `casal/kit.md` e `solteiro/kit.md` descrevem as 11 cores só em texto. O componente aceita as duas.

---

## 5. Conjunto mínimo de componentes

### 5.1 Primitivos (4)

| Componente | Função |
| --- | --- |
| `SecaoLayout` | Envelope de toda seção: fundo (claro/areia/escuro), padding vertical, largura, âncora, animação de entrada. É onde vive a variante visual |
| `ProseCliente` | Renderiza os blocos de corpo do parser (parágrafo, negrito inline, `###`, lista, telefone). Único ponto que imprime texto do cliente |
| `BlocosRotulados` | `**Rótulo**` + parágrafo, em `cards` · `passos` · `definicoes` · `acordeao`. Cobre vitrine, como-comprar, fechamento, tecnologia institucional e FAQ |
| `CtaWhatsApp` | Todo `**CTA:**`. Centraliza número, mensagem pré-preenchida e origem. Variantes `primario` · `secundario` · `sobre-foto` · `em-bloco-escuro` |

### 5.2 Seções (12 componentes cobrem as 16 tags)

| Componente | Tags que cobre | Variantes | Onde cada variante aparece |
| --- | --- | --- | --- |
| `Hero` | `hero` | `institucional` · `produto` · `lp` | Home + Por que comprar · 16 páginas de produto · LP (banner trocável) |
| `SecaoTexto` | `historia`, `diferenciais`, `problema`, `tecnologia`, `fechamento` | `claro` · `areia` · `escuro` · `com-blocos` | Absorve as 5 tags que são heading + prosa + CTA, com ou sem blocos rotulados. **A variante alterna quando a tag se repete na mesma página** |
| `ComposicaoKit` | `composicao-kit` | `lista-4` · `lista-3` | 4 itens (kits, King, Queen) · 3 itens (Casal e Solteiro em alguns modelos) |
| `Dimensoes` | `dimensoes` | única | Medida em destaque tipográfico + prosa |
| `VariantesCor` | `variantes-cor` | `com-carrossel` · `so-texto` | 14 arquivos · `casal/kit.md` e `solteiro/kit.md` |
| `VitrineProdutos` | `vitrine-produtos` | `por-tamanho` · `por-modelo` · `lp` | Home (1º carrossel) · Home (2º) + 4 kits · LP |
| `ProvaSocial` | `prova-social` | `depoimentos` · `garantias-e-depoimento` | Home · LP (4 garantias + 1 depoimento de exemplo) |
| `ComoComprar` | `como-comprar` | `dois-caminhos` · `passos` | Home (pedido / acompanhamento + telefones) · Por que comprar (5 passos numerados) |
| `GarantiaEntrega` | `garantia-entrega` | `lista-garantias` · `fluxo` · `cobertura` | Por que comprar §4 · §7 (pagamento na entrega) · §8 (9 estados) |
| `Especificacoes` | `especificacoes` | `tabela` (≥768 px) · `lista-rotulada` (celular) | 16 páginas de produto. Pares chave/valor genéricos |
| `Faq` | `faq` | `acordeao` | 15 páginas (Queen kit não tem). 5 a 10 perguntas |
| `Contato` | `contato` | única | Home §8. Telefones + CTA |

### 5.3 Transversais (5)

`Header` (com drawer no celular) · `Footer` (completo no institucional, legal mínimo na LP) · `BotaoFlutuanteWhatsapp` · `Carrossel` (scroll-snap, sem autoplay; consumido por `VitrineProdutos`, `VariantesCor`, `ProvaSocial`) · `ListaTelefones`.

**Total: 21 componentes** para 149 seções e 19 páginas.

### 5.4 Mesma tag, formatos diferentes → variante, nunca componente novo

| Onde | O que muda | Resolução |
| --- | --- | --- |
| Home §2 × §7 (`diferenciais`) | §2 é a seção institucional mais densa (144 palavras, tom técnico); §7 é curta e comercial (91) | `SecaoTexto` `claro` × `escuro` |
| Por que comprar §4 × §7 × §8 (`garantia-entrega`) | lista de garantias × fluxo de pagamento × cobertura de entrega | 3 variantes de `GarantiaEntrega` |
| Home §3 × páginas de modelo (`tecnologia`) | visão geral dos 3 sistemas × um modelo só | `SecaoTexto` `com-blocos` × `claro` |
| Home §4 × kits × LP (`vitrine-produtos`) | 2 carrosséis por tamanho e por modelo × 1 carrossel de modelos × listas + carrossel | 3 variantes de `VitrineProdutos` |
| Home §6 × Por que comprar §6 (`como-comprar`) | 2 caminhos + telefones × 5 passos numerados | 2 variantes de `ComoComprar` |
| `variantes-cor` | com × sem placeholder de carrossel | 2 variantes |
| `fechamento` nos kits × nos modelos | posição na página (depois × antes de `especificacoes`) | mesma variante, ordem vem do arquivo |

---

## 6. CTAs

150 CTAs (149 `**CTA:**` + 1 `**CTA secundário:**`), pelo menos um por seção. Todos levam ao WhatsApp **(41) 99842-5771**, com mensagem pré-preenchida e parâmetro de origem `pagina` + `secao` (+ `campanha` na LP).

O texto do botão é o texto do cliente, literal — inclusive as variações de redação e pontuação ("Fale com nossos especialistas!!", "Fale agora com nossos especialistas.", "Conheça todas as opções!"). Não normalizar, não unificar, não reduzir a quantidade. Os CTAs mais repetidos: "Fale com nossos especialistas agora!" (9×), "Fale agora com nossos especialistas." (9×), "Conheça todas as opções!" (9×).

---

## 7. Conteúdo pendente

| Item | Onde afeta | Situação |
| --- | --- | --- |
| Depoimentos reais | `prova-social` (Home, LP) | Só existe o exemplo da LP (Juliana M.). Sem material real, a seção renderiza o texto do cliente **sem cards**. Nada é inventado |
| Cards dos carrosséis de produto | `vitrine-produtos` | Os textos dos cards existem (blocos rotulados); faltam as fotos — ver @imagens.md |
| Amostras das 11 cores | `variantes-cor` | Falta recorte de veludo por cor. Nome da cor tem de bater com a amostra |
| Copy de `/a-kanak` | página inteira | Não existe arquivo. A página não entra até o cliente entregar o texto |
| Copy de hub separada da de kit | 4 hubs | Não existe. Decisão proposta: hub = página de kit (@specs/site.md §5) |
| FAQ do Kit Queen | `queensize/kit.md` | Ausente. A página termina em `fechamento` |
| Disclaimer dos ímãs | `casal/magnetico.md` | Ausente só nesse arquivo; existe na versão Solteiro |
| Densidade, firmeza, suporte de peso, tecido e tratamentos, certificações (Inmetro) | `especificacoes` | Anexo B. **Adiado por decisão do cliente.** Campo sem dado real não aparece na tabela |
| Garantia do Magnético | tabelas dos 4 `magnetico.md` | "Conforme condições específicas do modelo". Sem número |
| Dados de cabeceira e baú | `composicao-kit`, `especificacoes` | Citados no briefing, ausentes em 8 páginas |
| Quantas landing pages e de qual campanha | `/lp/[slug]` | Existe copy de uma só |
