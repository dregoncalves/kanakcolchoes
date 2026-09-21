# Taxonomia de seções — copy Kanak

Cada seção dos arquivos `.md` desta pasta é marcada com `## [tag]`, identificando seu tipo estrutural. A ideia é que cada tag possa, mais adiante, virar um componente reutilizável no Next.js (ex: `<Hero />`, `<Especificacoes />`).

| Tag | O que é | Onde aparece |
| ------------------ | --------------------------------------------------------------------------- | ---------------------------------- |
| `hero` | Banner/abertura da página | Toda página |
| `historia` | História/origem da marca | Institucional |
| `diferenciais` | Blocos de proposta de valor ("por que a Kanak") | Institucional |
| `problema` | Bloco de dor/agitação (estilo anúncio: "acordar cansado não é normal") | Landing pages de anúncio |
| `tecnologia` | Explicação da estrutura/tecnologia do colchão (molas, anatômico, magnético) | Produto, institucional |
| `dimensoes` | Medidas e tamanho do colchão | Produto |
| `variantes-cor` | Cores disponíveis | Produto |
| `composicao-kit` | O que vem no kit (colchão + cabeceira + baú + travesseiros) | Produto |
| `vitrine-produtos` | Carrossel/listagem comparando modelos ou tamanhos | Home, kits genéricos, landing page |
| `prova-social` | Depoimentos de clientes | Home, landing page |
| `garantia-entrega` | Garantia, política de entrega, pagamento na entrega, devolução | Institucional |
| `como-comprar` | Passo a passo do processo de compra | Institucional |
| `especificacoes` | Tabela técnica resumida do produto | Produto |
| `faq` | Perguntas frequentes | Produto |
| `fechamento` | Bloco de reforço/resumo antes do encerramento da página | Produto, institucional |
| `contato` | Chamada final para falar com a equipe | Institucional |

## Observação sobre CTAs

Praticamente toda seção já termina com sua própria linha `**CTA:**` — isso é proposital e reflete como o cliente pediu (vários CTAs pelo site, não só um no final). Por isso não existe uma tag `cta-final`: o CTA é um campo dentro de cada seção, não um tipo de seção à parte.

## Padrões observados por tipo de página

**Página de modelo único** (ex: Colchão Solteiro Magnético):
`hero → composicao-kit → dimensoes → tecnologia → variantes-cor → fechamento → especificacoes → faq`

**Página de kit genérico** (reúne os 3 modelos, ex: Kit Colchão de Casal):
`hero → composicao-kit → dimensoes → vitrine-produtos → variantes-cor → especificacoes → fechamento → [faq]`
(o Kit Queen Size não tem seção de FAQ no conteúdo original)

**Home institucional:**
`hero → diferenciais → tecnologia → vitrine-produtos → prova-social → como-comprar → diferenciais → contato`

**Por que Comprar na Kanak:**
`hero → historia → diferenciais → garantia-entrega → tecnologia → como-comprar → garantia-entrega → garantia-entrega → fechamento`

**Landing page de anúncio (Google Ads):**
`hero → problema → vitrine-produtos → prova-social → fechamento`
