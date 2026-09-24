# Kanak Colchões — Design System

Design system inicial para o redesign do site institucional da Kanak Colchões (hoje em WordPress, sendo reconstruído em Next.js). Base de posicionamento a partir do briefing de tráfego pago e do público-alvo declarado pelo cliente.

**Importante: este site NÃO é um e-commerce.** Não há carrinho, checkout nem pagamento online — é um site institucional/catálogo, cujo objetivo é levar o visitante a entrar em contato (WhatsApp, formulário, telefone) para fechar a compra na loja ou com um vendedor. Isso muda os CTAs esperados: "Falar com um consultor", "Pedir orçamento", "Chamar no WhatsApp" — nunca "Comprar" ou "Adicionar ao carrinho".

## Posicionamento

Colchões e conjuntos de cama (colchão, base, cabeceira, baú), com foco comercial em **kits** e maior margem em **King Size**. Público de **25 a 60 anos, classes B− e C+** — não é o público de "colchão baratinho", mas também não é luxo inacessível: é conforto e durabilidade justificando o preço, com prova técnica (densidade, firmeza, certificações) dando confiança à decisão.

Trocar de colchão é uma decisão adiada e conversada em casal — as objeções mais comuns são justamente essa demora e a necessidade de alinhar com o parceiro(a) antes de fechar. Como o fechamento acontece fora do site (WhatsApp, loja, vendedor), o site precisa fazer bem duas coisas: reduzir a fricção da decisão (clareza técnica, sensação de qualidade) e facilitar esse contato — nada de esconder o CTA de conversa atrás de um funil de e-commerce que não existe.

## Tom de voz e o que evitar

- **Evitar:** preço baixo como argumento central, apelo popular, promessas de "cura milagrosa" para dor nas costas, linguagem informal ou panfletária, poluição visual.
- **Buscar:** tom sério e confiável, prova técnica visível (specs, densidade, firmeza, certificações como Inmetro), fotos e vídeos em alta resolução mostrando detalhe de acabamento.
- Ofertas (desconto, parcelamento, frete grátis, brindes) podem aparecer, mas como reforço — nunca como protagonista da comunicação.

## Mensagem e argumentos de venda

- **Tom:** profissional, consultivo, transparente, tranquilizador, voltado à família.
- **Gatilhos de compra a destacar:** alívio do desconforto e sono ruim; troca de colchão gasto, afundado ou vencido (higiene); upgrade de tamanho (Casal → Queen/King); confiança técnica (Inmetro, espuma de alta densidade, molas ensacadas, garantia de fábrica).
- **Saúde sem pseudociência:** falar em alinhamento ergonômico, alívio de pressão e conforto — nunca em "curar" coluna. Vale também para o colchão magnético.
- **Sem pressão de venda:** nada de contagem regressiva, "últimas unidades" ou copy barulhenta.

### A objeção do casal

A objeção nº 1 é "preciso conversar com meu parceiro(a)". Como o site não fecha venda, ele pode virar a ferramenta dessa conversa: páginas e comparativos fáceis de **compartilhar** (link de produto limpo no WhatsApp, tabela lado a lado de modelos/tamanhos) e argumentos que falam com os dois que vão dormir na cama — conforto para ambos, isolamento de movimento das molas ensacadas, durabilidade. O CTA natural aqui é "Enviar para meu parceiro(a)" ao lado de "Falar com um consultor".

## Catálogo e informações obrigatórias por produto

| Categoria | Papel | O que a página precisa mostrar |
| --- | --- | --- |
| **Kits completos** (base + colchão + cabeceira, + baú) | Foco total dos anúncios | Composição do kit, tamanhos, opções de tecido/cor, garantia de cada peça |
| **King Size** | Maior margem | Compatibilidade com base bipartida, medidas, espaço necessário no quarto |
| **Colchões** (molas ensacadas, espuma alta densidade, magnético) | Produto central | Tamanhos (Solteiro, Casal, Queen, King); tecnologia; densidade e firmeza (macio, intermediário, firme, extrafirme); peso suportado por pessoa (kg); tecido e acabamento (malha, pillow top, antiácaro/antifungo/antialérgico); Inmetro; garantia; fotos em alta e vídeos de detalhe |
| **Bases box** | Parte do kit | Compatibilidade de tamanho; madeira (pinus/eucalipto tratado); altura da base e dos pés; tecido (suede, linho) e cores; peso suportado; pés fixos ou com rodízio; simples ou bipartida (Queen/King); garantia |
| **Cabeceiras** | Parte do kit | Largura, altura, profundidade; compatibilidade de cama; fixação (parede, acoplada à base, com pés); estofamento; tecidos e cores; modelo (capitonê, ripada, móbile, lisa); limpeza; garantia |
| **Baús de pé** | Upsell / kit | Medidas externas e internas; mecanismo da tampa; carga interna e no assento; revestimento e cores; pés; uso sugerido (roupa de cama, travesseiros, calçados); garantia |

Isso define os componentes que o sistema vai precisar: tabela de specs, escala visual de firmeza, seletor de tamanho, seletor de tecido/cor (os swatches já estão nos assets), vista explodida de camadas e galeria com vídeo.

## Atendimento

Central de atendimento (DDD 41, Curitiba/PR): (41) 99842-5771 · (41) 98726-5068 · (41) 98410-1101. São o destino dos CTAs de WhatsApp/telefone do site.

## Paleta

Ponto de partida: **vinho** (`#680B0E`) como cor de marca — transmite seriedade e um pouco de calor, sem cair em vermelho "queima de estoque" — e **apricot cream** (`#FFD29D`) como contraponto quente para realces e selos, evitando que o site fique frio ou genérico. Fundo em creme claro (`surface-100`) no lugar de branco puro, para manter esse aconchego sem perder legibilidade; texto em `ink`, um marrom quase preto, mais suave que preto puro.

Ainda não há paleta de marca formal — os nomes acima (Vinho, Apricot Cream) foram o ponto de partida definido; o restante da paleta (superfícies, texto, estados) foi construído em torno deles para fechar contraste e uso consistente.

Conferindo o print do Instagram da Kanak: a paleta bate com o que já existe organicamente no acervo de fotos — cabeceiras estofadas em tons de vinho/bordô e colchões em tecido cru/creme aparecem direto nos produtos, sem precisar "inventar" marca do zero. Além disso, boa parte dos posts promocionais usa tarjas pretas com texto dourado/creme (ex.: "Dia do Cliente", "Independência"). Para não perder esse repertório visual, adicionei `surface-900` (preto quente) como fundo de banners e tarjas promocionais pontuais — não um tema escuro do site inteiro — com `ouro` e `on-dark` para o texto sobre ele.

## Tipografia

**Instrument Sans** (peso 600 nos títulos, 700 no logotipo, com itálico da mesma família para realçar trechos do título) para títulos e destaques. Tracking negativo por tamanho: -0,035em no banner, -0,03em em título de seção, -0,02em nos menores. Substituiu a Instrument Serif em 2026-09-23; o histórico da família é Fraunces → Instrument Serif → Instrument Sans. **Inter** para todo o texto de leitura e interface — neutra, muito legível em specs técnicas e listas de características.

## Espaçamento e cantos

Escala generosa (referência: eightsleep.com, aprovada como direção visual do redesign) — o site atual é descrito como poluído; aqui o objetivo é dar respiro entre blocos de conteúdo e specs. Cantos suavemente arredondados (`radius-md`/`radius-lg`) em cards e botões, mantendo o calor da paleta sem parecer infantil.

## Como usar

1. Importe `tokens.css` em seu layout principal:
   ```html
   <link rel="stylesheet" href="/design-system/tokens.css">
   ```

2. Use variáveis CSS nos seus componentes:
   ```css
   background: var(--surface-100);
   color: var(--ink);
   padding: var(--space-6);
   border-radius: var(--radius-md);
   font-family: var(--font-sans);
   ```

3. Ou importe `tokens.json` em JavaScript/TypeScript para consumir os valores programaticamente.

## Próximos passos

- Definir componentes: card de produto (colchão/kit) com CTA de contato, seletor de tamanho, tabela de specs técnicas, badge de oferta, banner promocional em surface-900.
- Definir qual dos três números recebe o CTA de WhatsApp ou se há rodízio entre vendedores.
- Bater paleta e tipografia contra eightsleep.com lado a lado antes de aplicar no site.
- Se surgir identidade oficial da Kanak, revistar paleta contra ela.
