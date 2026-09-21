# specs/site.md — fonte de verdade do que será construído

Projeto: redesign do site da Kanak Colchões (kanakcolchoes.com.br), hoje no ar em WordPress, reconstruído em Next.js.
Criado em 21/09/2026 · Verdade visual em @specs/design.md · Mapa copy→componente em @specs/conteudo.md · Histórico em @memoria.md · Imagens em @imagens.md

---

## 1. Objetivo do site

Levar o visitante a **iniciar uma conversa no WhatsApp com a equipe Kanak**. Não existe checkout, carrinho, preço na página nem formulário de pagamento. O site informa, dá segurança e entrega a conversa.

Objetivo secundário: elevar a percepção da marca. O site atual tem aparência de template de WordPress; o redesign precisa parecer uma marca premium de cama, mantendo exatamente o que a marca já diz.

## 2. Público-alvo

- 25 a 60 anos, classe B- e C+.
- Compra motivada por: desgaste visível do colchão, dores físicas, sono ruim, fim da vida útil, upgrade de tamanho.
- Objeção principal: **decisão compartilhada** — quase ninguém fecha sem conversar com o parceiro(a) antes. O site precisa ser fácil de mostrar para outra pessoa e de retomar depois.
- Pico de acesso: 14h–18h e 19h–21h30, **em casa, no celular**. Celular não é adaptação do desktop neste projeto: é o ponto de partida.

## 3. Produto e proposta de valor

Kanak vende **conjuntos completos de cama**, não colchão avulso. O foco comercial é 100% no kit.

**Composição do kit (igual em todos os tamanhos):** 1 colchão + 1 cabeceira + 1 baú + 4 travesseiros.

| Modelo | Acabamento | Garantia |
| --- | --- | --- |
| Molas Ensacadas | faixa única, **sem** Pillow Top | 5 anos |
| Anatômico Ortopédico | **com** Pillow Top | 8 anos |
| Magnético | **com** Pillow Top, tecnologia magnética | conforme condições específicas do modelo |

| Tamanho | Medida do colchão |
| --- | --- |
| Solteiro | 88 × 188 cm |
| Casal | 138 × 188 cm |
| Queen | 158 × 198 cm |
| King | 193 × 203 cm |

**Cores:** 11 opções de veludo/suede — bege, cinza, terracota, caramelo, marrom, vinho, vermelho, rosé, azul, mostarda, verde. A disponibilidade se confirma na compra.

**Modelo de venda (o coração da marca):** o cliente conversa pelo WhatsApp/telefone, escolhe, recebe em casa e **só paga na entrega**. Se não gostar ao receber, devolve sem pagar, conforme as condições da compra.

**Entrega:** 9 estados — Minas Gerais, São Paulo, Paraná, Rio de Janeiro, Santa Catarina, Mato Grosso do Sul, Goiás, Brasília e Rio Grande do Sul.

**Maior margem:** King Size. Onde a copy não define ordem de vitrine, o King aparece primeiro.

## 4. Idioma

pt-BR, único. `<html lang="pt-BR">`. Sem seletor de idioma, sem tradução de nenhum texto do cliente.

## 5. Arquitetura de páginas e rotas

Base confirmada pelo cliente na planilha "ARQUITETURA DA INFORMAÇÃO" (~17–20 páginas).

```
/                                            Home
/a-kanak                                     A Kanak (sobre, contato, pedidos)     [sem copy — ver §11]
/por-que-comprar                             Por que comprar na Kanak
/colchao-king-size                           hub King  — renderiza produtos/kingsize/kit.md
/colchao-king-size/molas-ensacadas
/colchao-king-size/anatomico-ortopedico
/colchao-king-size/magnetico
/colchao-queen-size                          hub Queen  — renderiza produtos/queensize/kit.md
/colchao-queen-size/{molas-ensacadas|anatomico-ortopedico|magnetico}
/colchao-de-casal                            hub Casal  — renderiza produtos/casal/kit.md
/colchao-de-casal/{molas-ensacadas|anatomico-ortopedico|magnetico}
/colchao-de-solteiro                         hub Solteiro — renderiza produtos/solteiro/kit.md
/colchao-de-solteiro/{molas-ensacadas|anatomico-ortopedico|magnetico}
/blog                                        listagem (WordPress headless)
/blog/[slug]                                 post
/lp/[slug]                                   landing pages de anúncio, fora do menu e do sitemap de navegação
```

**Decisão de rota a confirmar:** a planilha prevê um hub de tamanho **e** uma página de kit separada, mas a copy do cliente tem apenas 4 arquivos por tamanho (`kit`, `molas-ensacadas`, `anatomico-ortopedico`, `magnetico`). Não existe copy de hub. Para não inventar texto, **o hub é a página de kit**: `/colchao-king-size` renderiza `conteudo/produtos/kingsize/kit.md`, e os 3 modelos são rotas filhas. Registrado como pendência em @memoria.md.

**Menu principal:** Home · Colchão Queen Size · Colchão King Size · Colchão de Casal · Colchão de Solteiro · Por que comprar · A Kanak · Blog. Landing pages nunca aparecem no menu.

**Rodapé:** presente em todas as páginas institucionais e de produto. Nas landing pages, apenas rodapé legal mínimo, sem navegação.

## 6. Seções de cada página

A ordem das seções de cada página vem da copy do cliente e está mapeada, arquivo por arquivo, em @specs/conteudo.md. Resumo dos padrões:

| Tipo de página | Ordem das seções |
| --- | --- |
| Home | hero → diferenciais → tecnologia → vitrine-produtos → prova-social → como-comprar → diferenciais → contato |
| Por que comprar | hero → historia → diferenciais → garantia-entrega → tecnologia → como-comprar → garantia-entrega → garantia-entrega → fechamento |
| Hub/kit de tamanho | hero → composicao-kit → dimensoes → vitrine-produtos → variantes-cor → especificacoes → fechamento → faq |
| Página de modelo | hero → composicao-kit → dimensoes → tecnologia → variantes-cor → fechamento → especificacoes → faq |
| Landing page | hero → problema → vitrine-produtos → prova-social → fechamento |

Exceção conhecida: o Kit Queen Size **não tem** seção `faq` no conteúdo original. O layout não preenche a lacuna com texto inventado.

## 7. Funcionalidades

1. **CTA de WhatsApp** — componente único, usado por todo CTA do site. Centraliza número, mensagem pré-preenchida e parâmetro de origem.
2. **Botão flutuante de WhatsApp** — em todas as páginas, inclusive landing pages.
3. **Carrossel de produtos** — usado onde a copy escreve `[CARROSSEL DE PRODUTOS]` / `[CARROSSEL COM OS MODELOS]`.
4. **Carrossel/seletor de cores** — onde a copy escreve `[CARROSSEL COM AS CORES]`. 11 cores, com a ressalva de disponibilidade que já está na copy.
5. **Carrossel de depoimentos** — onde a copy escreve `[CARROSSEL DE DEPOIMENTOS]`. **Bloqueado:** não existe depoimento real fornecido pelo cliente, exceto o exemplo único que já está na copy da landing page. Ver §11.
6. **FAQ em acordeão** — conteúdo integral da seção `faq` do arquivo da página.
7. **Tabela de especificações** — apenas com os campos que existem na copy.
8. **Blog headless** — `/blog` e `/blog/[slug]` consumindo o WordPress atual via REST (`/wp-json/wp/v2`), por um único módulo `lib/wordpress.ts`.
9. **Pontos de inserção** de tag do Google Ads e GA4 nas landing pages, **sem instalar nada** antes de autorização.

Fora: carrinho, checkout, cálculo de frete, login, busca full-text, comentários de blog, newsletter.

## 8. CTAs e para onde levam

- **Todo CTA leva ao WhatsApp.** Nenhum CTA leva a carrinho, formulário de pagamento ou e-mail.
- Número único de destino: **(41) 99842-5771**. Os outros dois números — (41) 98726-5068 e (41) 98410-1101 — continuam visíveis no texto do cliente onde ele os escreveu, sem virar link de CTA.
- Cada CTA carrega mensagem pré-preenchida e parâmetro de origem (página + seção; nas landing pages, também a campanha), para identificar de onde veio o contato.
- **Cada `**CTA:**` da copy pertence à seção em que aparece.** O cliente pediu vários CTAs ao longo da página. Não consolide, não remova, não mova para o rodapé.
- O texto do botão é o texto do cliente, palavra por palavra, incluindo pontuação e maiúsculas.
- Exceção de comportamento: na Home, a seção `como-comprar` tem `**CTA:**` e `**CTA secundário:**` — dois botões, hierarquia visual diferente, ambos para WhatsApp com mensagens de origem distintas.

## 9. Stack técnica

| Item | Decisão |
| --- | --- |
| Framework | Next.js 16.3.5, App Router |
| Local | `my-app/` (já existe — **não recriar**) |
| Linguagem | TypeScript 5, `strict`. Sem `any` na fronteira de dados |
| React | 19.2.8 |
| Estilo | Tailwind CSS v4 com tokens do design system em CSS |
| Gerenciador | pnpm 12.3.4 |
| Conteúdo | arquivos `.md` do cliente em `conteudo/`, lidos em build |
| Blog | WordPress headless (Hostinger), REST, ISR |
| Imagens | `next/image`, arquivos em `my-app/public/img/`, plano em @imagens.md |
| Fontes | Google Fonts via `next/font` (self-host automático) |

Regras: nenhuma dependência nova sem autorização. Não trocar gerenciador de pacotes. Não migrar versão de framework. O bloco `nextjs-agent-rules` de `my-app/AGENTS.md` é recriado pelo `next dev` — não apagar.

**Publicação:** Hostinger. **Node não roda na Hostinger** — SSR/ISR em Node no servidor atual está descartado. Decisão em aberto entre export estático (blog consumido no cliente ou rebuild a cada publicação) e plataforma de deploy separada apontando por DNS. Ver @memoria.md.

## 10. Regras de responsividade, acessibilidade e desempenho

**Responsividade** — mobile-first de verdade. Breakpoints Tailwind padrão; o layout é projetado em 360–430 px e cresce a partir daí. Alvo de conferência: 360, 390, 430, 768, 1024, 1440. Área de toque mínima 44 × 44 px. Nenhuma tabela de especificações com rolagem horizontal escondida: no celular ela vira lista rotulada. Carrossel navegável por arrasto e por botão, nunca só por arrasto.

**Acessibilidade** — um único `<h1>` por página; hierarquia de headings sem pulo. Contraste mínimo AA (4,5:1 em texto corrido, 3:1 em texto grande), **inclusive sobre foto** — ver a regra de overlay em @specs/design.md. Foco visível em tudo que é clicável. `alt` real vindo de @imagens.md, nunca "imagem de colchão". `prefers-reduced-motion` respeitado. Acordeão de FAQ operável por teclado. Botão flutuante de WhatsApp com rótulo acessível e sem cobrir conteúdo clicável.

**Desempenho** — alvo: LCP < 2,5 s em 4G no celular. Hero com `priority`, o resto `lazy`. `sizes` correto em toda imagem. AVIF/WebP. Fontes via `next/font` com `display: swap` e subset latin; no máximo os pesos efetivamente usados. Componentes de cliente só onde há interação (carrossel, acordeão, menu); o resto é Server Component. Nas landing pages o peso é prioridade máxima: tráfego pago, celular, rede móvel, à noite.

**SEO** — `generateMetadata` por rota, canonical, Open Graph. Sitemap cobrindo institucional, hubs, produtos e posts; landing pages fora do sitemap e com `noindex` quando o cliente confirmar. **Não é necessário preservar as URLs do site atual** (site recente, sem histórico de SEO a proteger) — não há plano obrigatório de 301.

## 11. O que ainda precisa ser definido

1. **`/a-kanak` não tem copy.** A arquitetura prevê a página; o cliente não entregou texto para ela. A página não entra até existir copy.
2. **Hub de tamanho = página de kit** — decisão proposta em §5, aguardando confirmação.
3. **Depoimentos reais** — a copy pede carrossel de depoimentos, mas só existe um depoimento de exemplo (na landing page). Sem depoimento real, a seção `prova-social` renderiza apenas o texto do cliente, sem cards inventados.
4. **Dados técnicos ausentes** (Anexo B): densidade da espuma, nível de firmeza por modelo, suporte de peso em kg, composição e tratamentos do tecido, certificações, garantia exata do Magnético, especificações de cabeceira/baú/base. **Adiado por decisão do cliente.** Campo sem dado real fica fora da página; nunca recebe valor genérico.
5. **Publicação**: export estático × plataforma separada.
6. **Endereço do WordPress** do blog e como ele fica exposto (subdomínio, subpasta, `/wp`).
7. **Landing pages**: quantas, e qual campanha cada uma atende. Hoje existe copy de uma só.
8. **Preços e condições** (parcelamento, desconto PIX, frete) — só entram se o cliente fornecer; a copy da landing page já cita "até 55% OFF", "12x sem juros" e "desconto via PIX" e isso permanece como o cliente escreveu.

## 12. Escopo

**Dentro — Fase 1** (escopo reduzido por decisão registrada em @memoria.md, para economizar tokens):

1. Design system e layout base (header, rodapé, botão flutuante, componente de CTA).
2. **Home** (`/`).
3. **Uma landing page** de Google Ads (`/lp/[slug]`, a partir de `conteudo/landing-pages/lp-google-ads.md`).
4. **Uma página de kit/hub**: `/colchao-king-size`.
5. **Uma página de produto**: `/colchao-king-size/anatomico-ortopedico`.

King Size escolhido por ser o produto de maior margem e o foco do tráfego pago.

**Dentro — fases seguintes:** os outros 3 tamanhos, os demais modelos, `/por-que-comprar`, `/a-kanak` (quando houver copy), blog headless, demais landing pages. Tudo reaproveitando os componentes da Fase 1.

**Fora do escopo:** e-commerce e pagamento online, integração com ERP/estoque, área do cliente, rastreio de pedido automatizado (a copy manda falar com a equipe), tradução, redesign do painel WordPress, produção de fotografia nova em estúdio (o plano de imagens está em @imagens.md), reescrita de qualquer texto do cliente.
