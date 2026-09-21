# imagens.md — Plano de produção de imagens

Plano completo das imagens do site Kanak. Criado em 21/09/2026.
Escopo em @specs/site.md · Verdade visual em @specs/design.md · Regras em @CLAUDE.md · Histórico em @memoria.md

> Este arquivo é a fonte de verdade das imagens. Nenhuma imagem entra no site sem estar listada aqui.

---

## 1. O que foi analisado

| Fonte | Conclusão |
| --- | --- |
| `referencias-site/meus-produtos/imagens colchões Kanak` — 46 arquivos | Banco atual. 30 verticais 9:16, 9 em 3:4, 3 quadradas, 3 em 3:2, 1 em 4:5. Largura máxima **1280 px**. Metade são fotos reais de showroom feitas com celular; a outra metade são renders/ambientações já geradas. |
| `referencias-site/referencia1` — amperos.com | Ritmo de imagem: hero fotográfico com cantos arredondados e overlay para texto, faixa de selos, objetos isolados sobre fundo creme, retrato em bloco de depoimento, cards flutuantes, blocos escuros com imagem à direita, textura orgânica no fim. A profundidade vem da **alternância de escalas**: full-bleed → card grande → objeto pequeno → macro. |
| `referencias-site/referencia2` — get.ru | Organização de catálogo: miniatura por categoria, chip de cor por produto, tile por ambiente. Serve como estrutura para "escolha pelo tamanho" e "escolha a cor". |
| `referencias-site/kanak/homepage.png` e as 16 LPs | O site no ar hoje. As fotos de produto são coerentes, mas as de apoio são banco de imagens genérico (mulher com luz azul, casal idoso com tablet, camadas coloridas de espuma, colchão preto flutuando em gradiente cinza). Nada disso sobrevive ao redesign. |
| `app/` | **O site novo ainda não foi implementado** — o repositório está no boilerplate do create-next-app. Este plano é pré-requisito da implementação, não posterior a ela. |
| @specs/design.md | Recortes, tratamento, overlay obrigatório, paleta e proibições. Este arquivo obedece àquele. |

---

## 2. Inventário do banco existente

### 2.1 Ângulos e cenários disponíveis hoje

| Eixo | O que existe |
| --- | --- |
| Tamanhos | Casal (15), King (16), Queen (11), Solteiro (2) |
| Pillow top | Com pillow top (14), sem pillow top (32) |
| Composição | Com recamier/baú (36), sem recamier (10), base box isolada (1), base com baú frontal (1) |
| Cores do veludo | Bege/cru, cinza, terracota, caramelo, marrom, vinho, vermelho, rosé, azul, azul-marinho, mostarda, verde, preto |
| Cenários | Showroom real (24), suíte decorada (12), parede com quadro de leão (4), boiserie (4), render 3D limpo (2), estúdio com dois leitos (2) |
| Ângulo de câmera | 3/4 a partir do pé da cama, altura dos olhos, quase sempre o mesmo. Nenhum frontal, nenhum lateral puro, nenhum top-down, nenhum macro |
| Proporção | 9:16 (30), 3:4 (9), 1:1 (3), 3:2 (3), 4:5 (1) |

### 2.2 Lacunas — o que **não** existe e precisa ser produzido

1. Qualquer imagem horizontal em resolução de hero (o maior arquivo horizontal tem 1280 × 853).
2. Packshot: colchão, cabeceira, baú, base ou travesseiro isolados sobre fundo neutro.
3. Macro: matelassê, veludo, botão de cristal, pé de madeira, viés do pillow top, dobradiça do baú.
4. Corte/estrutura interna de qualquer linha.
5. Vista superior (top-down) para comparar tamanhos.
6. Comparativo de escala do móvel no quarto.
7. Baú aberto mostrando o armazenamento em uso.
8. Amostras de cor de tecido.
9. Lifestyle humano coerente com a marca.
10. Imagens de blog, OG/compartilhamento e texturas de fundo.

### 2.3 Reaproveitamento aprovado

Estes arquivos entram no site sem regeneração, apenas com recorte, correção de branco e redução de ruído. Todos são pequenos demais para full-bleed: uso **apenas em card, miniatura e galeria**.

| Arquivo do banco | Onde usar | Tratamento obrigatório |
| --- | --- | --- |
| `kingsize com pillow top - cinza render 3d suite com recamier.jpeg` | Card da linha com pillow top, galeria King | Recorte 4:3 e 3:4 |
| `kingsize com pillow top - cinza suite decorada com tapete (widescreen).jpeg` | Card "Kit Kanak" da home | Recorte 4:3 |
| `queensize com pillow top - terracota suite boiserie com recamier.jpeg` | Card Queen, galeria de cor terracota | Recorte 3:4 |
| `queensize com pillow top - vinho suite boiserie com recamier.jpeg` | Galeria de cor vinho | Recorte 3:4 |
| `casal sem pillow top - terracota suite decorada com recamier.jpeg` | Card Casal | Recorte 3:4, remover o letreiro da parede |
| `casal sem pillow top - marrom parede leao com recamier.jpeg` | Galeria de cor marrom | Recorte 3:4, remover o quadro do leão |
| `casal sem pillow top - vinho parede leao com recamier.jpeg` | Galeria de cor vinho | Recorte 3:4, remover o quadro do leão |
| `kingsize sem pillow top - mostarda suite luxo com recamier.jpeg` | Galeria de cor mostarda | Recorte 3:4 |
| `queensize sem pillow top - bege suite lustre anel com recamier.jpeg` | Galeria de cor bege | Recorte 3:4 |
| `casal sem pillow top - bege e terracota studio dois leitos.jpeg` | Bloco "11 cores" da home, versão pequena | Recorte 16:9 |
| `casal sem pillow top - bege showroom box sem recamier.jpeg` | Página `/bases`, prova do produto real | Recorte 4:3, corrigir balanço de branco |
| `casal sem pillow top - bege showroom bau sem recamier.jpeg` | Página `/baus`, prova do produto real | Recorte 4:3, corrigir balanço de branco |
| 6 a 8 fotos de showroom à escolha | Página `/showroom` e `/sobre`, em mosaico | Manter a textura de foto real; é ali que a autenticidade ajuda |

**Não reaproveitar em hero, full-bleed ou qualquer slot acima de 1280 px de largura renderizada.**

---

## 3. Convenções de produção

### 3.1 Nomes e pastas

```
public/images/
  hero/         heroes e blocos full-bleed
  produto/      packshots e composições isoladas
  detalhe/      macros e cortes
  ambiente/     lifestyle e quartos
  comparativo/  tamanhos, linhas, escala
  cores/        amostras de tecido
  institucional/ showroom, atendimento, sobre
  blog/         capas
  og/           imagens de compartilhamento
  textura/      fundos
```

Padrão: `assunto-detalhe-cor-tamanho-dispositivo-proporcao.jpg`
Exemplo: `hero-kit-king-cinza-desktop-21x9.jpg`

### 3.2 Formato, resolução e peso

| Slot | Proporção | Master (px) | Exportações | Peso alvo |
| --- | --- | --- | --- | --- |
| Hero desktop | 21:9 | 2560 × 1097 | 2560 · 1920 · 1280 | ≤ 250 KB |
| Hero desktop alternativo | 16:9 | 2400 × 1350 | 2400 · 1600 · 1200 | ≤ 250 KB |
| Hero mobile | 4:5 | 1080 × 1350 | 1080 · 860 | ≤ 180 KB |
| Card de ambiente | 4:3 | 1200 × 900 | 1200 · 800 | ≤ 120 KB |
| Card vertical | 3:4 | 900 × 1200 | 900 · 600 | ≤ 120 KB |
| Packshot | 1:1 | 1400 × 1400 | 1400 · 900 · 600 | ≤ 140 KB |
| Macro | 3:2 | 1600 × 1067 | 1600 · 1000 | ≤ 110 KB |
| Comparativo | 16:9 | 2000 × 1125 | 2000 · 1400 | ≤ 160 KB |
| Amostra de cor | 1:1 | 600 × 600 | 600 · 300 | ≤ 25 KB |
| Capa de blog | 16:9 | 1600 × 900 | 1600 · 1000 | ≤ 130 KB |
| OG / compartilhamento | 1,91:1 | 1200 × 630 | 1200 | ≤ 120 KB |
| Textura de fundo | variável | 2400 de largura | 2400 · 1400 | ≤ 90 KB |

Master em JPEG qualidade 92, sRGB, sem metadados. A conversão para AVIF/WebP é do `next/image`.

### 3.3 Art direction desktop × celular

- Toda imagem com texto sobreposto tem **duas capturas**, não um recorte automático: 21:9 ou 16:9 no desktop, 4:5 no celular, com o produto reposicionado para caber.
- No celular, o produto ocupa o terço inferior e a área livre fica em cima.
- No desktop, o produto ocupa a direita e a área livre fica à esquerda.
- Card, macro e packshot usam recorte único servido em vários tamanhos.

### 3.4 Área livre para texto

Toda imagem com texto tem **área livre**: região de baixo contraste, sem detalhe importante, onde o texto pousa. Cada ficha abaixo informa a região e a porcentagem. Regra fixa: o overlay de @specs/design.md (`wine-900` de 70% → 0%) cobre a área livre; a área livre não substitui o overlay, ela garante que o overlay não esconda o produto.

---

## 4. PROMPT-BASE DE CONSISTÊNCIA

> Cole este bloco **no início de todos os prompts**, antes do texto específico de cada imagem.
> Em ferramentas que aceitam imagem de referência, anexe também 3 fotos do banco: uma de showroom, uma de suíte decorada e o render 3D em cinza.

```text
KANAK MASTER PROMPT — BRAND AND PRODUCT CONSISTENCY BLOCK

BRAND IDENTITY
Kanak is a Brazilian premium bedroom brand: mattresses, upholstered box bases, tufted headboards and storage benches. The visual identity is editorial, warm, adult and quiet — a showroom bedroom at late afternoon. Never cheap, never clinical, never promotional, never staged like a catalogue discount ad.

PRODUCT — MUST REMAIN IDENTICAL IN EVERY IMAGE
A complete upholstered bed set made of five parts:
1. BOX BASE: rectangular box fully upholstered in matte suede-like velvet with a soft nap; flat smooth panels with no tufting; one continuous horizontal seam running along the side; one small discreet round metal stud on the side panel; crisp square corners.
2. LEGS: turned tapered wooden legs in light honey oak, about 12 cm tall, slightly angled outward, visible under the base and under the bench.
3. HEADBOARD: rectangular, upholstered in the same velvet, diamond capitonê tufting with small crystal-look faceted buttons at each tufting point, softly rounded top corners, standing about 75 cm above the mattress, same width as the bed.
4. STORAGE BENCH (baú): placed at the foot of the bed, same velvet, diamond-tufted lid with the same crystal-look buttons, plain untufted body, same wooden legs, width about two thirds of the bed, hinged lid.
5. MATTRESS: off-white to cream quilted ticking with tone-on-tone diamond stitching and a subtle damask motif, rounded corners, thin champagne piping along the edges, small round side vents. The pillow-top version adds one clearly visible upper band above the main body; the version without pillow top is a single uniform height.
Velvet pillows in the same upholstery color rest against the headboard.
Follow the supplied product references exactly. Preserve the same shape, proportions, material, color, finish and internal details.

LIGHTING
Warm late-afternoon interior light, 3000–3800 K. Soft directional key from a window at roughly 45 degrees, large soft source, long gentle shadows, smooth falloff, open shadows. Optional warm practical lamps in the background. No on-camera flash, no hard speculars, no colored gels, no fluorescent ceiling tubes, no blue rim light.

PHOTOGRAPHIC DIRECTION
Full-frame camera. 35 mm or 50 mm prime for rooms, 85 mm or 100 mm macro for details. Camera at eye level or slightly below, tripod steady, straight verticals, corrected perspective. f/4 to f/8 for rooms, f/2.8 for macro. Composition calm and generous, the product never cropped awkwardly, plenty of negative space.

COLOR
Warm neutral environment: sand #FAF7F2, linen #F3ECE3, warm taupe #E7DCCD, light oak floor, warm white walls, off-white bedding. Upholstery only from the Kanak range: beige, grey, terracotta, caramel, brown, wine, red, rose, blue, navy, mustard, green, black. Deep wine #2E0A0F only for dark scenes. Terracotta #B4623C as the single accent. Slightly desaturated yellows, open shadows, natural contrast, no HDR, no teal-and-orange grade, no oversaturation.

REALISM AND QUALITY
Photorealistic interior photography. Visible velvet nap, real quilting stitches, believable fabric weight and folds, realistic contact shadows under the base and bench, correct scale between bed, bench and room. Sharp where focused, natural grain, print-quality detail. If a 3D render is used it must be indistinguishable from a photograph.

GENERAL RESTRICTIONS
No text, no lettering, no numbers, no logos, no brand signage, no wall signs, no labels, no tags, no price cards, no watermarks.
No people unless the specific prompt asks for them; never a recognizable face presented as a real customer; no pets.
No clutter, no cables, no party flags, no fluorescent ceiling fixtures, no showroom props.
No invented product features: no buttons, screens, sensors, gems, remote controls, LED strips, USB ports, cooling gel panels, extra vents or internal parts that do not exist in the references.
No levitating or floating product unless the prompt explicitly asks for it.
No distorted proportions, no extra or missing legs, no duplicated furniture, no impossible geometry, no collage, no illustration, no cartoon or plastic 3D look, no text overlay, no border, no frame.
```

---

## 5. Regras de consistência do produto

1. **Uma única identidade de produto em todo o site.** Formato, espessura, material, cor, acabamento, detalhes internos e proporções não mudam entre imagens. A cor do veludo muda apenas quando a ficha manda.
2. **Espessuras canônicas:** base ≈ 30 cm, colchão sem pillow top ≈ 25 cm, colchão com pillow top ≈ 32 cm com a faixa superior visível, pé ≈ 12 cm, cabeceira ≈ 75 cm acima do colchão. Manter a mesma relação em todas as imagens.
3. **Nunca inventar:** botão, tela, sensor, pedra, ímã visível, logotipo, etiqueta, selo, controle, LED, entrada USB, camada interna ou tecnologia que não apareça nas referências.
4. **Sem letreiro.** O letreiro KANAK da parede do showroom só aparece nas fotos reais reaproveitadas em `/showroom` e `/sobre`. Nenhuma imagem gerada reproduz o logotipo.
5. **Colchão canônico:** branco/creme matelassê losangular com motivo damasco sutil e viés champanhe. O colchão preto com estampa floral prateada que aparece nas LPs atuais é imagem de fabricante e **não** é o padrão — ver pendência P1.
6. **Cada variação de cor** usa exatamente a mesma cena, o mesmo ângulo e a mesma luz; só o tecido muda. Isso garante que a galeria de cores pareça uma coleção e não um mosaico.
7. **Escala humana:** quando houver pessoa, ela nunca cobre o produto e nunca aparece deitada em pose de catálogo médico.

---

## 6. Restrições globais e limites éticos

- **Proibido gerar depoimento visual falso.** Nenhuma imagem de "cliente real". O bloco de depoimentos usa textura, detalhe de roupa de cama ou nenhuma imagem, até que existam fotos reais autorizadas (pendência de @specs/site.md, item 12).
- **Proibido gerar selo, certificado ou número de registro** — inclusive INMETRO. Selos só entram como arte oficial fornecida pelo cliente.
- **Proibido representar promessa médica:** nada de coluna alinhada com linhas vermelhas, radiografia, mapa de pressão, "antes e depois" de postura.
- **Proibido reproduzir qualquer elemento das referências**: nem composição idêntica, nem objeto característico, nem tratamento proprietário.
- Toda pessoa em cena é figura genérica, sem rosto identificável em primeiro plano, e nunca é apresentada como cliente, médico ou especialista.
- Toda imagem gerada é registrada na coluna "origem" do checklist da seção 12 como `IA` — o cliente precisa saber o que é foto e o que é geração.

---

## 7. Home — 15 entradas

### 01 · `hero/hero-home-king-cinza-desktop-21x9.jpg`

- **Seção:** Home → Hero
- **Objetivo:** estabelecer a marca em três segundos: cama completa, luz quente, silêncio visual. É a imagem de LCP do site.
- **Elemento principal:** kit completo King Size em veludo cinza-chumbo, com colchão pillow top.
- **Composição:** cama à direita ocupando 55% do quadro; parede e canto do quarto à esquerda, vazios; tapete claro e piso de madeira entrando pela base.
- **Enquadramento:** plano geral do ambiente, cama inteira visível, com respiro acima da cabeceira.
- **Ângulo do produto:** 3/4 frontal a partir do pé esquerdo da cama, câmera a 110 cm do chão.
- **Cenário:** suíte contemporânea, parede em reboco claro, ripado de madeira atrás da cabeceira, cortina de linho, planta discreta ao fundo.
- **Iluminação:** janela lateral à direita, fim de tarde, sombra longa do baú sobre o tapete, abajur quente aceso ao fundo.
- **Cores:** areia, linho, madeira mel, veludo cinza-chumbo, um ponto terracota na manta.
- **Proporção:** 21:9 · **Resolução:** 2560 × 1097
- **Área livre:** terço esquerdo, 38% da largura, parede lisa sem detalhe.
- **Versão:** desktop (≥ 1024 px)

```text
[PROMPT-BASE] Wide editorial interior photograph of a contemporary Brazilian master bedroom at late afternoon. The complete Kanak bed set in charcoal grey velvet occupies the right 55% of the frame: tufted headboard with crystal-look buttons against a light slatted wood panel, off-white pillow-top mattress with visible upper band, matching storage bench at the foot with a long soft shadow across a pale wool rug, honey oak floor. The left third of the frame is an empty plain warm-white plaster wall with soft light falloff and no objects. A linen curtain filters warm window light from the right; a small warm lamp glows in the background. Three-quarter view from the left foot of the bed, camera at 110 cm, 35 mm, f/5.6, straight verticals. Calm, quiet, premium, generous negative space on the left.
```

- **Evitar:** nenhum objeto, quadro ou interruptor na área livre; sem pessoas; sem brilho na parede; sem cama desarrumada; sem letreiro.

---

### 02 · `hero/hero-home-king-cinza-mobile-4x5.jpg`

- **Seção:** Home → Hero (celular)
- **Objetivo:** mesma promessa do 01 com o produto legível em 390 px de largura.
- **Elemento principal:** o mesmo kit King cinza, reenquadrado — não é recorte do 01.
- **Composição:** cama no terço inferior, ocupando 60% da altura; parede vazia no terço superior.
- **Enquadramento:** plano médio, cabeceira e metade do colchão, baú cortado na borda inferior.
- **Ângulo do produto:** 3/4 frontal, câmera a 130 cm, levemente mais próxima que no 01.
- **Cenário:** o mesmo quarto, recorte mais fechado.
- **Iluminação:** idêntica à 01 — a luz tem de casar entre as duas versões.
- **Cores:** idênticas à 01.
- **Proporção:** 4:5 · **Resolução:** 1080 × 1350
- **Área livre:** faixa superior, 40% da altura.
- **Versão:** celular (< 768 px)

```text
[PROMPT-BASE] Vertical interior photograph of the same contemporary bedroom and the same charcoal grey Kanak bed set, reframed for a phone screen. The bed occupies the lower 60% of the frame, seen three-quarter from the left foot; the tufted headboard and the upper half of the off-white pillow-top mattress are fully visible, the storage bench is cropped by the bottom edge. The upper 40% is an empty warm-white plaster wall with soft gradient light and no objects. Same late-afternoon window light from the right, same warm lamp glow. 50 mm, f/5.6, camera at 130 cm, straight verticals, calm and premium.
```

- **Evitar:** cortar a cabeceira; objeto na faixa superior; luz diferente da versão desktop.

---

### 03 · `produto/kit-completo-bege-packshot-1x1.jpg`

- **Seção:** Home → bloco "Kit Kanak" · reutilizada nas 4 páginas de kit e no cross-sell das páginas de linha
- **Objetivo:** mostrar em uma única imagem que o kit resolve a cama inteira.
- **Elemento principal:** kit completo em veludo bege, isolado: base, cabeceira, colchão, baú e 4 travesseiros.
- **Composição:** conjunto centralizado sobre fundo areia infinito, sombra de contato suave, 4 travesseiros empilhados em par nas laterais da cabeceira.
- **Enquadramento:** produto inteiro com 12% de margem em todos os lados.
- **Ângulo do produto:** 3/4 clássico de catálogo, 20° à esquerda, câmera a 100 cm.
- **Cenário:** fundo infinito cor `sand-100`, sem parede, sem piso desenhado.
- **Iluminação:** estúdio com softbox grande à esquerda e rebatedor à direita, luz quente, sombra de contato curta.
- **Cores:** areia de fundo, veludo bege, colchão creme, madeira mel.
- **Proporção:** 1:1 · **Resolução:** 1400 × 1400
- **Área livre:** não precisa — a imagem não recebe texto.
- **Versão:** desktop e celular (mesmo arquivo)

```text
[PROMPT-BASE] Studio packshot of the complete Kanak bed set in beige velvet on a seamless warm sand background. The set is shown as one composition: box base with honey oak legs, diamond-tufted headboard with crystal-look buttons, off-white quilted mattress without pillow top, matching tufted storage bench at the foot, and four beige velvet pillows — two resting against the headboard, two stacked beside it. Classic three-quarter catalogue angle, 20 degrees to the left, camera at 100 cm, 50 mm, f/8. Large soft key light from the left, subtle fill from the right, short realistic contact shadow under the base and bench. No room, no floor pattern, no props, 12% margin around the product.
```

- **Evitar:** halo branco de recorte; sombra dupla; produto flutuando; qualquer objeto decorativo.

---

### 04 · `ambiente/tamanho-solteiro-verde-card-4x3.jpg`

- **Seção:** Home → "Escolha pelo tamanho" · também em `/kit/solteiro/`
- **Objetivo:** mostrar o tamanho Solteiro em um quarto compatível, sem parecer quarto infantil.
- **Elemento principal:** kit Solteiro em veludo verde-oliva.
- **Composição:** cama encostada na parede à direita, criado-mudo estreito, janela à esquerda, espaço de circulação visível à frente.
- **Enquadramento:** plano médio-geral, cama inteira, um pouco de piso à frente.
- **Ângulo do produto:** 3/4 a partir do pé direito, câmera a 120 cm.
- **Cenário:** quarto pequeno de adulto jovem, parede clara, prateleira simples, cortina de linho.
- **Iluminação:** luz de fim de tarde pela janela à esquerda, sombra suave no piso.
- **Cores:** areia, madeira clara, veludo verde-oliva, roupa de cama creme.
- **Proporção:** 4:3 · **Resolução:** 1200 × 900
- **Área livre:** nenhuma — o texto fica fora da imagem, no card.
- **Versão:** desktop e celular

```text
[PROMPT-BASE] Interior photograph of a small adult bedroom with the Kanak single-size (solteiro) bed set in olive green velvet: tufted headboard with crystal-look buttons, off-white quilted mattress, matching tufted storage bench at the foot, honey oak legs. The bed sits against the right-hand wall; a narrow bedside table, a simple wall shelf and a linen curtain complete the room; free floor space is visible in front of the bed to show the compact footprint. Three-quarter view from the right foot, camera at 120 cm, 35 mm, f/5.6. Warm late-afternoon light from a window on the left, soft shadow on the light oak floor. Calm, adult, uncluttered — not a child's room.
```

- **Evitar:** brinquedo, pôster, beliche, decoração infantil, parede colorida.

---

### 05 · `ambiente/tamanho-casal-terracota-card-4x3.jpg`

- **Seção:** Home → "Escolha pelo tamanho" · também em `/kit/casal/`
- **Objetivo:** apresentar o Casal como a escolha equilibrada para quarto de proporção média.
- **Elemento principal:** kit Casal em veludo terracota.
- **Composição:** cama centralizada com criados-mudos simétricos, boiserie discreta atrás, tapete claro sob o pé da cama.
- **Enquadramento:** plano geral, cama inteira, simetria evidente.
- **Ângulo do produto:** frontal levemente deslocado, 10° à direita, câmera a 125 cm.
- **Cenário:** suíte de casal com boiserie clara, cortina bege, luminária de mesa apagada.
- **Iluminação:** luz difusa de janela à direita, sanca com luz quente indireta.
- **Cores:** areia, bege, madeira mel, veludo terracota.
- **Proporção:** 4:3 · **Resolução:** 1200 × 900
- **Área livre:** nenhuma.
- **Versão:** desktop e celular

```text
[PROMPT-BASE] Interior photograph of a balanced couple's bedroom with the Kanak double-size (casal) bed set in terracotta velvet: diamond-tufted headboard with crystal-look buttons, off-white quilted mattress, matching tufted storage bench at the foot, honey oak legs. Symmetrical composition: matching slim bedside tables on both sides, subtle painted boiserie panelling on the wall behind, pale rug under the foot of the bed, beige curtain. Nearly frontal view offset 10 degrees to the right, camera at 125 cm, 35 mm, f/5.6. Diffused late-afternoon light from the right plus warm indirect cove lighting on the ceiling. Serene and grown-up.
```

- **Evitar:** excesso de almofadas; quadro grande; móvel escuro pesado; simetria perfeita demais que pareça render.

---

### 06 · `ambiente/tamanho-queen-vinho-card-4x3.jpg`

- **Seção:** Home → "Escolha pelo tamanho" · também em `/kit/queen-size/`
- **Objetivo:** mostrar o Queen como o passo de conforto acima do Casal.
- **Elemento principal:** kit Queen Size em veludo vinho.
- **Composição:** cama levemente à esquerda, poltrona de leitura no canto direito, espaço de circulação generoso.
- **Enquadramento:** plano geral com pé-direito visível.
- **Ângulo do produto:** 3/4 a partir do pé esquerdo, câmera a 120 cm.
- **Cenário:** suíte ampla, parede clara, cortina longa, tapete de lã.
- **Iluminação:** entardecer, janela ampla à esquerda, sombra longa do baú.
- **Cores:** areia, creme, madeira mel, veludo vinho profundo.
- **Proporção:** 4:3 · **Resolução:** 1200 × 900
- **Área livre:** nenhuma.
- **Versão:** desktop e celular

```text
[PROMPT-BASE] Interior photograph of a spacious master bedroom with the Kanak queen-size bed set in deep wine velvet: diamond-tufted headboard with crystal-look buttons, off-white quilted mattress, matching tufted storage bench at the foot, honey oak legs. The bed sits slightly left of centre; a simple reading armchair occupies the right corner; a wool rug and a long linen curtain complete the room; generous circulation space in front of the bed. Three-quarter view from the left foot, camera at 120 cm, 35 mm, f/5.6. Late-afternoon light from a wide window on the left, long soft shadow from the bench. Warm, roomy, restrained.
```

- **Evitar:** saturar o vinho até virar vermelho; encher o canto com objetos; parede escura.

---

### 07 · `ambiente/tamanho-king-mostarda-card-4x3.jpg`

- **Seção:** Home → "Escolha pelo tamanho" · também em `/kit/king-size/`
- **Objetivo:** posicionar o King como o topo da linha — é o produto de maior margem.
- **Elemento principal:** kit King Size em veludo mostarda.
- **Composição:** cama dominando o quadro, quarto amplo, pé-direito alto, cortina até o chão.
- **Enquadramento:** plano geral amplo, cama inteira com margem generosa.
- **Ângulo do produto:** 3/4 a partir do pé direito, câmera a 115 cm.
- **Cenário:** suíte grande, ripado de madeira na parede da cabeceira, cortina dupla, tapete grande.
- **Iluminação:** entardecer forte pela janela lateral, luz rasante no veludo revelando a textura.
- **Cores:** areia, madeira, veludo mostarda dessaturado, roupa de cama creme.
- **Proporção:** 4:3 · **Resolução:** 1200 × 900
- **Área livre:** nenhuma.
- **Versão:** desktop e celular

```text
[PROMPT-BASE] Interior photograph of a large master suite with the Kanak king-size bed set in muted mustard velvet: diamond-tufted headboard with crystal-look buttons, off-white quilted mattress, matching tufted storage bench at the foot, honey oak legs. The bed dominates the frame in a high-ceilinged room with a slatted wood panel behind the headboard, floor-length double curtains and a large pale rug. Three-quarter view from the right foot, camera at 115 cm, 35 mm, f/5.6. Strong warm late-afternoon side light grazing the velvet to reveal its nap. Spacious, top-of-the-range, quiet luxury.
```

- **Evitar:** mostarda estourada em amarelo neon; lustre chamativo; simetria de render.

---

### 08 · `produto/linha-molas-ensacadas-1x1.jpg`

- **Seção:** Home → "Escolha pela linha" · também em as páginas `/colchao-…-molas-ensacadas/`
- **Objetivo:** representar a linha Molas Ensacadas sem inventar estrutura interna.
- **Elemento principal:** colchão Molas Ensacadas isolado, faixa única, sem pillow top.
- **Composição:** colchão sozinho sobre fundo areia, apoiado em leve perspectiva, com uma dobra de lençol de linho ao pé para dar escala e textura.
- **Enquadramento:** produto inteiro com 15% de margem.
- **Ângulo do produto:** 3/4, 25° à direita, câmera a 70 cm — altura que mostra o topo e a lateral.
- **Cenário:** fundo infinito `sand-100`.
- **Iluminação:** softbox grande à esquerda, luz rasante para revelar o matelassê.
- **Cores:** areia, colchão creme, viés champanhe.
- **Proporção:** 1:1 · **Resolução:** 1400 × 1400
- **Área livre:** nenhuma.
- **Versão:** desktop e celular

> ⚠️ O acabamento exato do tecido de cada linha é a **pendência P1**. Gerar só depois da confirmação.

```text
[PROMPT-BASE] Studio product photograph of a single Kanak mattress on a seamless warm sand background, no base, no bed frame. Off-white quilted ticking with tone-on-tone diamond stitching and a subtle damask motif, rounded corners, thin champagne piping along the edges, small round side vents, uniform single height with no pillow-top band. A loosely folded linen sheet rests at the foot for scale and texture. Three-quarter view rotated 25 degrees to the right, camera at 70 cm so both the top surface and the side panel are visible, 50 mm, f/8. Large soft key from the left, grazing light revealing the quilting relief, short realistic contact shadow.
```

- **Evitar:** mostrar molas, corte ou interior; estampa floral preta; halo de recorte; colchão flutuando.

---

### 09 · `produto/linha-anatomico-ortopedico-1x1.jpg`

- **Seção:** Home → "Escolha pela linha" · também em as páginas `/colchao-…-anatomico-ortopedico/`
- **Objetivo:** diferenciar visualmente a linha pelo pillow top, que é a diferença declarada no site atual.
- **Elemento principal:** colchão Anatômico Ortopédico isolado, com pillow top visível.
- **Composição:** idêntica à 08 — mesma posição, mesma luz, mesma margem. A única diferença é a faixa do pillow top.
- **Enquadramento:** produto inteiro com 15% de margem.
- **Ângulo do produto:** 3/4, 25° à direita, câmera a 70 cm.
- **Cenário:** fundo infinito `sand-100`.
- **Iluminação:** idêntica à 08.
- **Cores:** idênticas à 08.
- **Proporção:** 1:1 · **Resolução:** 1400 × 1400
- **Área livre:** nenhuma.
- **Versão:** desktop e celular

```text
[PROMPT-BASE] Studio product photograph of a single Kanak pillow-top mattress on a seamless warm sand background, framed exactly like the previous mattress image: same position, same 25-degree three-quarter rotation to the right, same camera height of 70 cm, same lighting, same 15% margin. Off-white quilted ticking with tone-on-tone diamond stitching, rounded corners, thin champagne piping, small round side vents, and one clearly visible pillow-top band along the upper edge that distinguishes it from the single-height version. 50 mm, f/8, large soft key from the left, grazing light on the quilting, short contact shadow.
```

- **Evitar:** mudar ângulo, luz ou escala em relação à 08; exagerar a espessura do pillow top.

---

### 10 · `produto/linha-magnetico-1x1.jpg`

- **Seção:** Home → "Escolha pela linha" · também em as páginas `/colchao-…-magnetico/`
- **Objetivo:** representar a linha Magnético mantendo a mesma família visual.
- **Elemento principal:** colchão Magnético isolado, com pillow top.
- **Composição:** idêntica às 08 e 09.
- **Enquadramento:** produto inteiro com 15% de margem.
- **Ângulo do produto:** 3/4, 25° à direita, câmera a 70 cm.
- **Cenário:** fundo infinito `sand-100`, com um leve degradê terracota no canto inferior direito para diferenciar a linha sem alterar o produto.
- **Iluminação:** idêntica às 08 e 09.
- **Cores:** areia, creme, um sopro de terracota no fundo.
- **Proporção:** 1:1 · **Resolução:** 1400 × 1400
- **Área livre:** nenhuma.
- **Versão:** desktop e celular

> ⚠️ Nenhum ímã, campo magnético, linha de força ou brilho azul pode aparecer. A diferença da linha é comunicada por texto, não por efeito visual.

```text
[PROMPT-BASE] Studio product photograph of a single Kanak pillow-top mattress on a seamless warm sand background with a very subtle terracotta gradient in the lower right corner. Framed exactly like the two previous mattress images: same 25-degree three-quarter rotation to the right, same camera height of 70 cm, same soft key from the left, same 15% margin. Off-white quilted ticking with tone-on-tone diamond stitching, rounded corners, thin champagne piping, small round side vents, one visible pillow-top band. 50 mm, f/8, grazing light on the quilting, short contact shadow.
```

- **Evitar:** qualquer representação de magnetismo, ímã, onda, aura, brilho azul ou ícone científico.

---

### 11 · `ambiente/cores-trio-bege-terracota-cinza-16x9.jpg`

- **Seção:** Home → "11 cores" · também na LP
- **Objetivo:** provar que a mesma cama muda de personalidade com a cor, sem precisar de 11 fotos grandes.
- **Elemento principal:** três kits idênticos em bege, terracota e cinza, lado a lado.
- **Composição:** três camas em fila, ligeiramente escalonadas em profundidade, mesma altura de cabeceira, espaçamento igual.
- **Enquadramento:** plano geral horizontal, as três camas inteiras.
- **Ângulo do produto:** 3/4 leve, 15° à esquerda, câmera a 130 cm.
- **Cenário:** showroom limpo e amplo, parede clara, piso de madeira, sem divisórias.
- **Iluminação:** luz difusa e uniforme de fim de tarde, sem sombra dura entre as camas.
- **Cores:** areia, madeira, veludo bege + terracota + cinza.
- **Proporção:** 16:9 · **Resolução:** 2000 × 1125
- **Área livre:** faixa superior de 20% para um título curto.
- **Versão:** desktop; no celular, recorte para 4:3 mostrando duas camas.

```text
[PROMPT-BASE] Wide interior photograph of a clean, spacious showroom floor with three identical Kanak bed sets standing in a row — one in beige velvet, one in terracotta velvet, one in charcoal grey velvet. Each set is complete: tufted headboard with crystal-look buttons, off-white quilted mattress, matching tufted storage bench at the foot, honey oak legs. The beds are staggered slightly in depth with equal spacing, all headboards at the same height, against a plain warm-white wall on a light oak floor. Slight three-quarter view, 15 degrees to the left, camera at 130 cm, 35 mm, f/8. Even, diffused late-afternoon light with no hard shadows between the beds. Upper 20% of the frame is empty wall.
```

- **Evitar:** letreiro, placa, etiqueta de preço, bandeirinha, luminária fluorescente, cores fora da paleta da marca.

---

### 12 · `textura/roupa-de-cama-manha-3x2.jpg`

- **Seção:** Home → bloco de depoimentos (fundo/apoio) · também em `/blog`
- **Objetivo:** dar ao bloco de depoimentos uma imagem humana sem inventar clientes.
- **Elemento principal:** roupa de cama amassada com a luz da manhã, sem pessoas.
- **Composição:** diagonal de lençol e manta atravessando o quadro, travesseiro marcado, canto do colchão visível.
- **Enquadramento:** plano detalhe aberto, sem mostrar o quarto.
- **Ângulo do produto:** alto, 45° para baixo, sobre a cama.
- **Cenário:** cama desfeita depois de uma boa noite; nada de cenário construído.
- **Iluminação:** luz de manhã entrando de lado, suave, com pequenas áreas estouradas controladas.
- **Cores:** creme, areia, branco quente, um pedaço de veludo terracota na borda.
- **Proporção:** 3:2 · **Resolução:** 1600 × 1067
- **Área livre:** 50% do lado esquerdo, para a citação.
- **Versão:** desktop e celular

```text
[PROMPT-BASE] Close editorial photograph of rumpled off-white bed linen in warm morning light, no people. A cream sheet and a soft knitted throw fall diagonally across the frame; a pillow still holds a gentle indentation; the corner of the off-white quilted Kanak mattress and a strip of terracotta velvet from the base are visible at the right edge. High angle, about 45 degrees down, 50 mm, f/2.8, shallow depth of field on the far side. Soft side light from a window with small controlled highlights. The left half of the frame is calm, low-contrast fabric with room for text.
```

- **Evitar:** pessoa, parte do corpo, animal, café da manhã na cama, objeto de cena.

---

### 13 · `institucional/showroom-panoramico-4x3.jpg`

- **Seção:** órfã — ver seção 19.1
- **Objetivo:** mostrar que existe loja física e atendimento presencial.
- **Elemento principal:** salão de showroom com várias camas Kanak.
- **Composição:** perspectiva em profundidade, quatro a cinco camas em cores diferentes recuando no quadro.
- **Enquadramento:** plano geral do salão.
- **Ângulo do produto:** 3/4 a partir do corredor central, câmera a 150 cm.
- **Cenário:** showroom amplo e organizado, piso de madeira, paredes claras, iluminação quente embutida.
- **Iluminação:** mistura de luz natural pela vitrine e luz embutida quente; sem fluorescente.
- **Cores:** areia, madeira, veludos bege, terracota, cinza, vinho e verde.
- **Proporção:** 4:3 · **Resolução:** 1200 × 900
- **Área livre:** nenhuma.
- **Versão:** desktop e celular

```text
[PROMPT-BASE] Interior photograph of a spacious, tidy bed showroom with four or five complete Kanak bed sets receding in perspective — beige, terracotta, charcoal grey, wine and green velvet — each with tufted headboard, off-white quilted mattress and matching storage bench. Wide central aisle, light oak floor, warm white walls, warm recessed ceiling lighting and daylight coming from a shop window at the far end. Three-quarter view down the aisle, camera at 150 cm, 28 mm, f/8, straight verticals. Calm, professional, uncluttered.
```

- **Evitar:** letreiro, placa de preço, bandeirinha, caixa de papelão, lâmpada fluorescente, pessoa em primeiro plano.

---

### 14 · `hero/cta-final-quarto-entardecer-desktop-21x9.jpg`

- **Seção:** Home → bloco de conversão final · reutilizada em todas as páginas institucionais
- **Objetivo:** fundo do CTA final; a imagem não compete com o texto, ela aquece o bloco.
- **Elemento principal:** canto de quarto ao entardecer, cama parcialmente visível e desfocada.
- **Composição:** cama à direita, fora de foco; parede e luz à esquerda.
- **Enquadramento:** plano geral com forte desfoque de fundo.
- **Ângulo do produto:** 3/4 distante, câmera a 140 cm.
- **Cenário:** suíte ao anoitecer, abajur aceso, cortina fechada pela metade.
- **Iluminação:** última luz do dia mais abajur quente; contraste baixo, tudo em meio-tom.
- **Cores:** vinho profundo nas sombras, areia nos meios-tons, ponto quente do abajur.
- **Proporção:** 21:9 · **Resolução:** 2560 × 1097
- **Área livre:** 60% central, com o overlay `wine-900` por cima.
- **Versão:** desktop

```text
[PROMPT-BASE] Wide atmospheric photograph of a bedroom corner at dusk, intentionally soft and low in contrast, meant to sit behind text. A complete Kanak bed set in wine velvet is visible on the right, clearly out of focus; the left side is a warm plaster wall catching the last daylight. A warm bedside lamp is lit; a linen curtain is half drawn. 35 mm, f/2.8, focus on the wall, strong background blur, camera at 140 cm. Deep warm shadows, muted mid-tones, no bright highlights, no detail competing for attention in the central 60% of the frame.
```

- **Evitar:** foco no produto; qualquer elemento de alto contraste no centro; pessoas.

---

### 15 · `hero/cta-final-quarto-entardecer-mobile-4x5.jpg`

- **Seção:** Home → bloco de conversão final (celular)
- **Objetivo:** mesma função da 14 em formato vertical.
- **Elemento principal:** o mesmo canto de quarto, recomposto.
- **Composição:** cama desfocada na faixa inferior, parede e luz acima.
- **Enquadramento:** plano médio vertical.
- **Ângulo do produto:** 3/4 distante, câmera a 140 cm.
- **Cenário:** o mesmo da 14.
- **Iluminação:** idêntica à 14.
- **Cores:** idênticas à 14.
- **Proporção:** 4:5 · **Resolução:** 1080 × 1350
- **Área livre:** 65% superior.
- **Versão:** celular

```text
[PROMPT-BASE] Vertical atmospheric photograph of the same bedroom corner at dusk, same wine velvet Kanak bed set, same warm bedside lamp, recomposed for a phone screen: the out-of-focus bed occupies the lower third, the upper two thirds are a warm plaster wall with soft gradient light and no detail. 35 mm, f/2.8, camera at 140 cm, deep warm shadows, muted mid-tones, nothing high-contrast in the upper area.
```

- **Evitar:** o mesmo da 14.

---

## 8. Landing page do Kit — 9 entradas

A LP é a página que sustenta o tráfego pago. Todas as imagens aqui são prioridade máxima.

### 16 · `hero/lp-kit-king-terracota-desktop-16x9.jpg`

- **Seção:** Páginas de kit → Hero
- **Objetivo:** entregar a promessa da campanha acima da dobra: cama completa, pronta, sem esforço.
- **Elemento principal:** kit King Size completo em veludo terracota, cama arrumada.
- **Composição:** cama à direita ocupando 60%; parede vazia à esquerda; baú em primeiro plano com a tampa fechada.
- **Enquadramento:** plano geral levemente mais fechado que o hero da home.
- **Ângulo do produto:** 3/4 frontal a partir do pé esquerdo, câmera a 115 cm.
- **Cenário:** suíte com boiserie clara, cortina de linho, tapete claro, criado-mudo com planta pequena.
- **Iluminação:** fim de tarde, janela à direita, luz quente rasante no veludo.
- **Cores:** areia, linho, madeira mel, veludo terracota, roupa de cama creme.
- **Proporção:** 16:9 · **Resolução:** 2400 × 1350
- **Área livre:** 40% à esquerda, parede lisa.
- **Versão:** desktop

```text
[PROMPT-BASE] Wide interior photograph of a warm master bedroom with the complete Kanak king-size bed set in terracotta velvet, made up and ready: diamond-tufted headboard with crystal-look buttons, off-white pillow-top mattress with cream bedding, matching tufted storage bench closed at the foot, honey oak legs. The bed occupies the right 60% of the frame against subtle painted boiserie panelling; the left 40% is an empty warm-white wall. Linen curtain, pale rug, small bedside plant. Three-quarter view from the left foot, camera at 115 cm, 35 mm, f/5.6. Late-afternoon window light from the right grazing the velvet nap. Inviting, complete, premium.
```

- **Evitar:** cama desarrumada; objeto na área livre; cor terracota virando laranja; qualquer texto.

---

### 17 · `hero/lp-kit-king-terracota-mobile-4x5.jpg`

- **Seção:** Páginas de kit → Hero (celular) — **é a imagem mais importante do projeto**, já que o tráfego chega pelo celular à noite
- **Objetivo:** o mesmo da 16, legível em 390 px, com CTA logo abaixo.
- **Elemento principal:** kit King terracota, recomposto.
- **Composição:** cabeceira e metade do colchão na faixa inferior; parede vazia acima.
- **Enquadramento:** plano médio vertical.
- **Ângulo do produto:** 3/4 frontal, câmera a 125 cm.
- **Cenário:** o mesmo da 16.
- **Iluminação:** idêntica à 16.
- **Cores:** idênticas à 16.
- **Proporção:** 4:5 · **Resolução:** 1080 × 1350
- **Área livre:** 45% superior.
- **Versão:** celular

```text
[PROMPT-BASE] Vertical interior photograph of the same terracotta velvet Kanak king-size bed set in the same boiserie bedroom, recomposed for a phone screen: the tufted headboard, the pillows and the upper half of the off-white pillow-top mattress fill the lower 55% of the frame; the storage bench is cropped at the bottom edge; the upper 45% is an empty warm-white wall with soft gradient light. Three-quarter view, camera at 125 cm, 50 mm, f/5.6, same late-afternoon light from the right.
```

- **Evitar:** cortar a cabeceira ao meio; detalhe na faixa superior; luz diferente da 16.

---

### 18 · `produto/kit-composicao-explodida-terracota-1x1.jpg`

- **Seção:** Páginas de kit → "O que vem no kit"
- **Objetivo:** mostrar os quatro itens do kit de uma vez, com clareza de inventário.
- **Elemento principal:** colchão, cabeceira, baú e 4 travesseiros dispostos separadamente.
- **Composição:** arranjo organizado sobre fundo areia: cabeceira em pé ao fundo, colchão deitado em perspectiva à esquerda, baú fechado à direita, travesseiros empilhados na frente. Espaço entre as peças para caber rótulos numerados no HTML.
- **Enquadramento:** conjunto inteiro com 10% de margem.
- **Ângulo do produto:** 3/4 elevado, câmera a 160 cm, olhando levemente para baixo.
- **Cenário:** fundo infinito `sand-100`.
- **Iluminação:** estúdio, softbox grande no alto à esquerda, sombras de contato realistas.
- **Cores:** areia, veludo terracota, colchão creme, madeira mel.
- **Proporção:** 1:1 · **Resolução:** 1400 × 1400
- **Área livre:** espaços entre as peças, para numeração via HTML.
- **Versão:** desktop e celular

```text
[PROMPT-BASE] Studio composition on a seamless warm sand background showing the four parts of the Kanak kit laid out separately, like an organised inventory: the diamond-tufted terracotta velvet headboard standing upright at the back, the off-white pillow-top mattress lying in perspective on the left, the closed tufted storage bench on the right, and four terracotta velvet pillows stacked at the front. Clear empty space between the pieces. Elevated three-quarter view, camera at 160 cm looking slightly down, 50 mm, f/8. Large soft key from the upper left, realistic contact shadows under each piece. No text, no numbers, no labels.
```

- **Evitar:** número, seta, rótulo ou ícone desenhado na imagem; peças sobrepostas; produto flutuando.

---

### 19 · `detalhe/bau-aberto-terracota-4x3.jpg`

- **Seção:** Páginas de kit → "O que vem no kit"
- **Objetivo:** provar a função do baú — armazenamento real, não enfeite.
- **Elemento principal:** baú aberto com roupa de cama dobrada dentro.
- **Composição:** baú em 3/4 com a tampa erguida, interior visível, pilha organizada de lençóis e cobertores; pé da cama ao fundo, desfocado.
- **Enquadramento:** plano médio do móvel, tampa inteira no quadro.
- **Ângulo do produto:** 3/4 frontal, câmera a 90 cm.
- **Cenário:** quarto real, tapete claro sob o móvel.
- **Iluminação:** luz de janela lateral entrando no interior do baú, sem estourar o tecido claro.
- **Cores:** areia, veludo terracota, roupa de cama creme e bege.
- **Proporção:** 4:3 · **Resolução:** 1200 × 900
- **Área livre:** nenhuma.
- **Versão:** desktop e celular

```text
[PROMPT-BASE] Interior photograph of the Kanak storage bench in terracotta velvet with its diamond-tufted lid lifted open, revealing a neatly folded stack of cream and beige bed linen inside. The bench stands on a pale rug at the foot of the bed; the base of the bed is visible and out of focus behind it. Three-quarter front view, camera at 90 cm, 50 mm, f/4. Warm side window light falling into the open compartment without blowing out the light linen. Honest, functional, tidy.
```

- **Evitar:** interior vazio; objetos aleatórios dentro; mecanismo, pistão ou dobradiça inventada em destaque.

---

### 20 · `comparativo/tamanhos-topdown-16x9.jpg`

- **Seção:** páginas de kit e de linha → "Qual tamanho escolher"
- **Objetivo:** comparar os quatro tamanhos de forma objetiva, para o casal decidir junto.
- **Elemento principal:** quatro colchões vistos de cima, lado a lado, em escala relativa correta.
- **Composição:** os quatro colchões alinhados pela base, do menor ao maior, com espaço igual entre eles; escala real respeitada (88, 138, 158 e 193 cm de largura).
- **Enquadramento:** top-down absoluto, os quatro colchões inteiros, margem de 8%.
- **Ângulo do produto:** vista superior, 90°, sem perspectiva.
- **Cenário:** fundo areia infinito.
- **Iluminação:** luz difusa e uniforme, sombra de contato mínima, sem gradiente no fundo.
- **Cores:** areia, colchão creme, viés champanhe.
- **Proporção:** 16:9 · **Resolução:** 2000 × 1125
- **Área livre:** faixa inferior de 15% para os rótulos de medida em HTML.
- **Versão:** desktop; no celular vira uma coluna, recorte 4:5 com dois colchões por vez.

```text
[PROMPT-BASE] Perfectly flat top-down studio photograph of four Kanak mattresses on a seamless warm sand background, lined up side by side from smallest to largest and aligned along their bottom edge, with equal gaps between them and correct relative scale. All four share the same off-white quilted ticking with tone-on-tone diamond stitching and thin champagne piping. Orthographic 90-degree overhead view with no perspective distortion, even diffused lighting, minimal contact shadow, no background gradient. Lower 15% of the frame left empty.
```

- **Evitar:** perspectiva; escala errada entre os tamanhos; qualquer número, régua ou cota desenhada na imagem.

---

### 21 · `comparativo/espaco-no-quarto-king-16x9.jpg`

- **Seção:** Páginas de kit → "O tamanho e o seu quarto"
- **Objetivo:** responder à dúvida real do cliente: "cabe no meu quarto?".
- **Elemento principal:** quarto visto de um canto alto, com a cama King e a circulação livre ao redor.
- **Composição:** ponto de vista elevado no canto oposto; cama ao centro; faixas de piso livre visíveis dos dois lados e ao pé.
- **Enquadramento:** plano geral amplo mostrando as quatro paredes parcialmente.
- **Ângulo do produto:** vista elevada, câmera a 220 cm, inclinada 30° para baixo.
- **Cenário:** quarto neutro, quase sem mobília, para que a leitura seja de espaço e não de decoração.
- **Iluminação:** luz difusa de janela, sombras suaves que marcam o piso livre.
- **Cores:** areia, madeira clara, veludo cinza.
- **Proporção:** 16:9 · **Resolução:** 2000 × 1125
- **Área livre:** canto superior esquerdo, 25%.
- **Versão:** desktop e celular (recorte 4:5 mantendo a cama e uma faixa de piso)

```text
[PROMPT-BASE] Elevated wide interior photograph of a nearly empty neutral bedroom seen from a high corner, showing the complete Kanak king-size bed set in charcoal grey velvet placed against the far wall with clear free floor space on both sides and at the foot of the bed. Minimal furniture so the room reads as space, not decoration: light oak floor, warm white walls, one window with a linen curtain. Camera at 220 cm tilted 30 degrees down, 24 mm with corrected perspective and straight verticals, f/8. Soft diffused daylight, gentle shadows marking the free floor area. Upper left corner left empty.
```

- **Evitar:** distorção de grande angular nas bordas; cota, seta ou planta baixa desenhada; quarto decorado demais.

---

### 22 · `comparativo/pillow-top-vs-sem-pillow-top-3x2.jpg`

- **Seção:** páginas de kit e de linha → comparação das linhas
- **Objetivo:** mostrar em uma imagem a única diferença visual declarada entre as linhas.
- **Elemento principal:** dois colchões lado a lado em vista lateral pura: um com pillow top, outro sem.
- **Composição:** os dois colchões alinhados pela base, vistos de lado, com espaço igual; a faixa do pillow top fica evidente na comparação de altura.
- **Enquadramento:** lateral pura, os dois produtos inteiros, margem de 10%.
- **Ângulo do produto:** 0°, perfil exato, câmera na altura do meio do colchão.
- **Cenário:** fundo areia infinito.
- **Iluminação:** luz lateral suave que separa as camadas sem criar sombra dura entre os dois.
- **Cores:** areia, creme, viés champanhe.
- **Proporção:** 3:2 · **Resolução:** 1600 × 1067
- **Área livre:** faixa inferior de 18% para rótulos em HTML.
- **Versão:** desktop e celular

```text
[PROMPT-BASE] Straight side-profile studio photograph of two Kanak mattresses standing side by side on a seamless warm sand background, aligned along their bottom edge with an equal gap between them. The left one is a single-height quilted mattress; the right one is the same mattress with one clearly visible pillow-top band along the upper edge, making it taller. Both share identical off-white quilted ticking, rounded corners, champagne piping and side vents. Exact 0-degree profile view, camera level with the middle of the mattresses, 85 mm, f/8. Soft side light separating the layers, no hard shadow between the two, lower 18% of the frame empty.
```

- **Evitar:** perspectiva; espessura exagerada; corte ou camada interna visível; rótulo desenhado.

---

### 23 · `detalhe/macro-pillow-top-vies-3x2.jpg`

- **Seção:** Páginas de kit → especificações · páginas de linha
- **Objetivo:** dar prova material do acabamento; é o "zoom" que sustenta a percepção de qualidade.
- **Elemento principal:** encontro da faixa do pillow top com o corpo do colchão, com o viés champanhe e a costura.
- **Composição:** diagonal do viés atravessando o quadro do canto inferior esquerdo ao superior direito.
- **Enquadramento:** macro, cerca de 20 cm de produto no quadro.
- **Ângulo do produto:** lateral em leve 3/4, câmera na altura do viés.
- **Cenário:** apenas o produto; fundo é a própria continuação do colchão, desfocada.
- **Iluminação:** luz rasante de 80° à esquerda, revelando relevo da costura e a textura do tecido.
- **Cores:** creme, champanhe, sombra quente.
- **Proporção:** 3:2 · **Resolução:** 1600 × 1067
- **Área livre:** nenhuma.
- **Versão:** desktop e celular

```text
[PROMPT-BASE] Macro photograph of the edge of a Kanak pillow-top mattress: the junction between the pillow-top band and the main body, showing the thin champagne piping, the stitch line and the tone-on-tone quilting texture of the off-white ticking. The piping runs diagonally across the frame from lower left to upper right. About 20 cm of product fills the frame. 100 mm macro, f/2.8, camera level with the piping, strong grazing light from the left at 80 degrees revealing the relief of every stitch, warm soft shadow, shallow depth of field falling off to the right.
```

- **Evitar:** mostrar interior, espuma ou mola; fiapo, sujeira ou marca; brilho sintético.

---

### 24 · `og/og-lp-kit-1200x630.jpg`

- **Seção:** Páginas de kit → compartilhamento (Open Graph, WhatsApp, Meta Ads)
- **Objetivo:** sobreviver à miniatura: a cama precisa ser reconhecível a 300 px de largura.
- **Elemento principal:** kit King terracota, plano mais fechado que o hero.
- **Composição:** cama ocupando 70% do quadro, cabeceira e baú visíveis, fundo simplificado.
- **Enquadramento:** plano médio horizontal.
- **Ângulo do produto:** 3/4 frontal, câmera a 120 cm.
- **Cenário:** o mesmo quarto da 16, simplificado.
- **Iluminação:** idêntica à 16, um pouco mais clara para vencer a compressão.
- **Cores:** idênticas à 16.
- **Proporção:** 1,91:1 · **Resolução:** 1200 × 630
- **Área livre:** faixa inferior esquerda de 30%, caso o cliente queira aplicar o logo.
- **Versão:** única

```text
[PROMPT-BASE] Horizontal photograph optimised for a small social preview: the complete Kanak king-size bed set in terracotta velvet fills about 70% of the frame, closer than a hero shot, with the tufted headboard, the made-up off-white pillow-top mattress and the closed storage bench all clearly readable. Simplified background: warm-white wall, linen curtain, pale rug, nothing else. Three-quarter front view, camera at 120 cm, 50 mm, f/5.6, warm late-afternoon light, slightly brighter and more contrasted than a normal interior shot so it survives compression. Lower left area kept simple.
```

- **Evitar:** detalhe fino que some na miniatura; texto; moldura.

---

## 9. LPs dos demais tamanhos — 1 entrada, 6 arquivos

### 25 · Família `hero/lp-kit-[tamanho]-[cor]-[dispositivo].jpg`

Mesma receita do par 16/17, trocando tamanho, cor e quarto. Produzir as três variações com a **mesma luz, a mesma altura de câmera e o mesmo ângulo** — é isso que faz as quatro LPs parecerem a mesma marca.

| Arquivo | Tamanho | Cor | Proporção | Resolução |
| --- | --- | --- | --- | --- |
| `lp-kit-queen-vinho-desktop-16x9.jpg` | Queen | vinho | 16:9 | 2400 × 1350 |
| `lp-kit-queen-vinho-mobile-4x5.jpg` | Queen | vinho | 4:5 | 1080 × 1350 |
| `lp-kit-casal-bege-desktop-16x9.jpg` | Casal | bege | 16:9 | 2400 × 1350 |
| `lp-kit-casal-bege-mobile-4x5.jpg` | Casal | bege | 4:5 | 1080 × 1350 |
| `lp-kit-solteiro-verde-desktop-16x9.jpg` | Solteiro | verde-oliva | 16:9 | 2400 × 1350 |
| `lp-kit-solteiro-verde-mobile-4x5.jpg` | Solteiro | verde-oliva | 4:5 | 1080 × 1350 |

- **Seção:** hero de `/kit/queen-size/`, `/kit/casal/` e `/kit/solteiro/`
- **Objetivo:** entregar a promessa da campanha do tamanho correspondente acima da dobra.
- **Elemento principal:** kit completo do tamanho indicado, cama arrumada.
- **Composição:** desktop — cama à direita com 60%, parede vazia à esquerda; celular — cabeceira e metade do colchão embaixo, parede vazia em cima.
- **Enquadramento:** plano geral no desktop, plano médio no celular.
- **Ângulo do produto:** 3/4 frontal a partir do pé esquerdo; 115 cm no desktop, 125 cm no celular.
- **Cenário:** quarto proporcional ao tamanho — Queen em suíte ampla, Casal em quarto médio simétrico, Solteiro em quarto compacto de adulto.
- **Iluminação:** fim de tarde, janela à direita, luz rasante no veludo. Idêntica nas seis imagens.
- **Cores:** base areia/linho/madeira mel + o veludo da variação.
- **Área livre:** 40% à esquerda no desktop, 45% em cima no celular.
- **Versão:** um arquivo desktop e um celular por tamanho.

```text
[PROMPT-BASE] Interior photograph of a {AMBIENTE} bedroom with the complete Kanak {TAMANHO} bed set in {COR} velvet, made up and ready: diamond-tufted headboard with crystal-look buttons, off-white pillow-top mattress with cream bedding, matching tufted storage bench closed at the foot, honey oak legs. {ENQUADRAMENTO}. Three-quarter view from the left foot of the bed, camera at {ALTURA} cm, {LENTE}, f/5.6, straight verticals. Late-afternoon window light from the right grazing the velvet nap, warm and soft, identical to the other bed images in the series.

Variáveis:
  Queen    → AMBIENTE "spacious master"      COR "deep wine"     
  Casal    → AMBIENTE "medium symmetrical"   COR "beige"         
  Solteiro → AMBIENTE "compact adult"        COR "olive green"   
  desktop  → ENQUADRAMENTO "The bed occupies the right 60% of the frame; the left 40% is an empty warm-white wall"   ALTURA 115   LENTE "35 mm"
  celular  → ENQUADRAMENTO "The headboard and the upper half of the mattress fill the lower 55% of the frame, the bench is cropped at the bottom edge, and the upper 45% is an empty warm-white wall"   ALTURA 125   LENTE "50 mm"
```

- **Evitar:** mudar a luz entre as variações; decorar demais o quarto do Solteiro; objeto na área livre; texto.

---

## 10. Detalhes e macros — 6 entradas

Este é o bloco que cria a **profundidade** que a referência tem: depois de uma imagem grande de ambiente, uma imagem pequena e muito próxima do material. Sempre alternar.

### 26 · `detalhe/macro-capitone-botao-cristal-3x2.jpg`

- **Seção:** páginas de kit → acabamento · também como imagem de respiro entre blocos
- **Objetivo:** provar o acabamento artesanal do capitonê.
- **Elemento principal:** três botões de cristal do capitonê e as dobras de veludo entre eles.
- **Composição:** diagonal dos botões da esquerda inferior para a direita superior, dobras radiais do tecido.
- **Enquadramento:** macro, cerca de 15 cm de produto no quadro.
- **Ângulo do produto:** 3/4 muito próximo, câmera perpendicular à superfície inclinada em 20°.
- **Cenário:** só o produto.
- **Iluminação:** luz rasante lateral, um pequeno brilho controlado no cristal, sem estourar.
- **Cores:** veludo terracota, brilho frio discreto do cristal.
- **Proporção:** 3:2 · **Resolução:** 1600 × 1067 · **Área livre:** nenhuma · **Versão:** desktop e celular

```text
[PROMPT-BASE] Macro photograph of the diamond capitonê tufting on a Kanak headboard in terracotta velvet: three small faceted crystal-look buttons running diagonally from lower left to upper right, with the deep radial folds of velvet pulling into each button. About 15 cm of product fills the frame. 100 mm macro, f/2.8, camera tilted 20 degrees to the surface, strong grazing side light revealing the nap of the velvet and one small controlled sparkle on a crystal facet, warm soft shadows, shallow depth of field.
```

- **Evitar:** brilho estourado; botão de plástico liso; pedra colorida; poeira ou fiapo.

---

### 27 · `detalhe/macro-veludo-terracota-3x2.jpg`

- **Seção:** blocos de cor e fundos de card
- **Objetivo:** vender o material pelo toque visual.
- **Elemento principal:** superfície de veludo com uma dobra suave.
- **Composição:** dobra diagonal única atravessando o quadro, dois terços em luz, um terço em sombra.
- **Enquadramento:** macro, cerca de 25 cm de tecido.
- **Ângulo do produto:** quase paralelo à superfície, para o pelo do veludo aparecer.
- **Cenário:** só o tecido.
- **Iluminação:** rasante de 85°, revelando o pelo e a mudança de tom quando o veludo dobra.
- **Cores:** terracota em dois tons por causa da luz.
- **Proporção:** 3:2 · **Resolução:** 1600 × 1067 · **Área livre:** o terço em sombra aceita texto claro · **Versão:** desktop e celular

```text
[PROMPT-BASE] Macro photograph of matte suede-like terracotta velvet upholstery with a single soft diagonal fold crossing the frame. The nap of the fabric shifts tone where the fold turns, two thirds of the frame in light and one third falling into warm shadow. About 25 cm of fabric fills the frame. 100 mm macro, f/4, camera almost parallel to the surface, grazing light at 85 degrees revealing the texture of every fibre. No stitching, no buttons, no seams — pure material.
```

- **Evitar:** trama de tecido errada (linho, sarja); brilho de cetim; costura; etiqueta.

---

### 28 · `detalhe/macro-pe-madeira-3x2.jpg`

- **Seção:** especificações das páginas de kit
- **Objetivo:** mostrar o pé de madeira como detalhe de acabamento, não como peça genérica.
- **Elemento principal:** um pé torneado de madeira mel, encaixado na base de veludo.
- **Composição:** pé no terço direito, piso de madeira desfocado atrás, sombra de contato visível.
- **Enquadramento:** macro aberto, pé inteiro e 10 cm da base acima dele.
- **Ângulo do produto:** câmera baixa, a 20 cm do chão, levemente para cima.
- **Cenário:** canto de quarto real, piso claro.
- **Iluminação:** luz lateral quente, sombra alongada do pé no piso.
- **Cores:** madeira mel, veludo cinza, piso claro.
- **Proporção:** 3:2 · **Resolução:** 1600 × 1067 · **Área livre:** terço esquerdo desfocado · **Versão:** desktop e celular

```text
[PROMPT-BASE] Low-angle detail photograph of one turned tapered honey oak leg of a Kanak box base, slightly angled outward, where it meets the charcoal grey velvet of the base. The leg sits in the right third of the frame on a light oak floor, with a soft elongated contact shadow; the floor behind is out of focus. Camera 20 cm above the floor tilted slightly up, 85 mm, f/2.8, warm side light. The left third is soft, low-contrast blur.
```

- **Evitar:** pé metálico, cromado, plástico ou com rodízio; parafuso aparente; madeira escura.

---

### 29 · `detalhe/macro-matelasse-colchao-3x2.jpg`

- **Seção:** especificações do colchão, páginas de linha
- **Objetivo:** mostrar a qualidade do tecido do colchão sem abrir o produto.
- **Elemento principal:** superfície do colchão em luz rasante, com o relevo do matelassê losangular e o damasco tom sobre tom.
- **Composição:** superfície plana preenchendo o quadro, linha de costura em diagonal suave.
- **Enquadramento:** macro, cerca de 30 cm de tecido.
- **Ângulo do produto:** 30° em relação à superfície.
- **Cenário:** só o produto.
- **Iluminação:** rasante de 80°, relevo máximo, sem estourar o branco.
- **Cores:** creme e off-white, sombras quentes.
- **Proporção:** 3:2 · **Resolução:** 1600 × 1067 · **Área livre:** nenhuma · **Versão:** desktop e celular

```text
[PROMPT-BASE] Macro photograph of the top surface of a Kanak mattress: off-white quilted ticking with tone-on-tone diamond stitching and a subtle damask motif, the stitch lines running in a soft diagonal across the frame. About 30 cm of fabric fills the frame. 100 mm macro, f/4, camera at 30 degrees to the surface, strong grazing light at 80 degrees maximising the quilted relief without blowing out the white, warm soft shadows in the valleys of the quilting.
```

- **Evitar:** branco estourado; estampa floral preta; marca, mancha ou vinco.

---

### 30 · `detalhe/macro-acabamento-base-3x2.jpg`

- **Seção:** especificações das páginas de kit
- **Objetivo:** mostrar o acabamento da base: costura contínua e o pequeno detalhe metálico.
- **Elemento principal:** trecho da lateral da base com a costura horizontal e o botão metálico discreto.
- **Composição:** linha de costura horizontal cortando o quadro no terço inferior; botão metálico à direita.
- **Enquadramento:** macro, cerca de 35 cm de produto.
- **Ângulo do produto:** frontal à lateral da base, câmera a 40 cm do chão.
- **Cenário:** só o produto, piso desfocado na borda inferior.
- **Iluminação:** lateral quente, brilho contido no metal.
- **Cores:** veludo bege, metal fosco, sombra quente.
- **Proporção:** 3:2 · **Resolução:** 1600 × 1067 · **Área livre:** nenhuma · **Versão:** desktop e celular

```text
[PROMPT-BASE] Macro photograph of the side panel of a Kanak box base in beige velvet, showing the single continuous horizontal seam that runs along the panel and one small discreet round matte metal stud set into the fabric on the right. About 35 cm of product fills the frame; a sliver of out-of-focus light oak floor appears at the very bottom edge. 100 mm macro, f/4, camera 40 cm above the floor facing the panel straight on, warm side light with a contained highlight on the metal.
```

- **Evitar:** inventar logotipo, letra ou símbolo no metal; zíper em destaque; puxador; etiqueta.

---

### 31 · `detalhe/macro-tampa-bau-3x2.jpg`

- **Seção:** páginas de kit
- **Objetivo:** mostrar a espessura e o acabamento da tampa do baú.
- **Elemento principal:** borda da tampa capitonê entreaberta, com o forro interno claro aparecendo.
- **Composição:** tampa cruzando o quadro na horizontal, fresta escura entre tampa e corpo, forro claro visível na fresta.
- **Enquadramento:** macro aberto, cerca de 40 cm de produto.
- **Ângulo do produto:** 3/4 lateral, câmera a 70 cm.
- **Cenário:** só o produto.
- **Iluminação:** luz lateral entrando na fresta, sem estourar o forro.
- **Cores:** veludo vinho, forro cru.
- **Proporção:** 3:2 · **Resolução:** 1600 × 1067 · **Área livre:** nenhuma · **Versão:** desktop e celular

```text
[PROMPT-BASE] Macro photograph of the edge of a Kanak storage bench lid in wine velvet, lifted just a few centimetres so a narrow gap appears between the diamond-tufted lid and the plain body, revealing a glimpse of the pale natural interior lining. The lid crosses the frame horizontally. About 40 cm of product fills the frame. 100 mm macro, f/4, three-quarter side view, camera at 70 cm, warm side light reaching into the gap without blowing out the lining.
```

- **Evitar:** mostrar pistão, mola, dobradiça de detalhe ou mecanismo que não esteja confirmado; interior escuro e ilegível.

---

## 11. Páginas de tamanho — 2 entradas, 5 arquivos

### 32 · Família `comparativo/topdown-[tamanho]-3x2.jpg`

| Arquivo | Tamanho | Resolução |
| --- | --- | --- |
| `topdown-solteiro-3x2.jpg` | Solteiro | 1600 × 1067 |
| `topdown-casal-3x2.jpg` | Casal | 1600 × 1067 |
| `topdown-queen-3x2.jpg` | Queen | 1600 × 1067 |
| `topdown-king-3x2.jpg` | King | 1600 × 1067 |

- **Seção:** páginas de produto → bloco de medidas · base para o overlay de cotas em HTML
- **Objetivo:** servir de suporte neutro para as medidas, sem cota desenhada na imagem.
- **Elemento principal:** um colchão visto exatamente de cima, centralizado.
- **Composição:** colchão centralizado com margem igual nos quatro lados; a proporção do retângulo muda conforme o tamanho.
- **Enquadramento:** top-down absoluto, colchão inteiro, margem de 12%.
- **Ângulo do produto:** 90°, sem perspectiva.
- **Cenário:** fundo areia infinito.
- **Iluminação:** difusa e uniforme, sombra de contato mínima.
- **Cores:** areia e creme.
- **Área livre:** as margens de 12%, onde o HTML desenha as cotas.
- **Versão:** desktop e celular

```text
[PROMPT-BASE] Perfectly flat top-down studio photograph of a single Kanak {TAMANHO} mattress centred on a seamless warm sand background with equal margins on all four sides. Off-white quilted ticking with tone-on-tone diamond stitching, rounded corners, thin champagne piping. Orthographic 90-degree overhead view with no perspective distortion, even diffused lighting, minimal contact shadow, no gradient, no props, nothing else in the frame.

Variáveis: TAMANHO → "single (88 × 188 cm)" | "double (138 × 188 cm)" | "queen (158 × 198 cm)" | "king (193 × 203 cm)" — manter a proporção do retângulo fiel à medida.
```

- **Evitar:** régua, cota, número, seta ou legenda na imagem; perspectiva; proporção errada.

---

### 33 · `comparativo/casal-vs-queen-mesmo-quarto-16x9.jpg`

- **Seção:** páginas de produto → "comparação com os tamanhos vizinhos"
- **Objetivo:** resolver a dúvida mais comum da decisão — a diferença real entre Casal e Queen.
- **Elemento principal:** duas camas idênticas, uma Casal e uma Queen, no mesmo quarto neutro.
- **Composição:** as duas camas lado a lado, alinhadas pela cabeceira, mesma cor, com a diferença de largura evidente.
- **Enquadramento:** plano geral elevado.
- **Ângulo do produto:** vista elevada, câmera a 200 cm, 20° para baixo.
- **Cenário:** quarto neutro vazio, piso claro, parede clara.
- **Iluminação:** difusa e uniforme, sem sombra dura entre as camas.
- **Cores:** areia, madeira clara, veludo cinza nas duas camas.
- **Proporção:** 16:9 · **Resolução:** 2000 × 1125 · **Área livre:** faixa superior de 20% · **Versão:** desktop; celular recorta em 4:5 com as duas camas ainda visíveis

```text
[PROMPT-BASE] Elevated interior photograph of an empty neutral room with two complete Kanak bed sets side by side, both in the same charcoal grey velvet and both fully made up: on the left a double (casal) size, on the right a queen size, headboards aligned against the same wall so the difference in width is immediately readable. Light oak floor, warm white walls, no other furniture. Camera at 200 cm tilted 20 degrees down, 28 mm with corrected perspective, f/8, even diffused daylight with no hard shadow between the beds. Upper 20% of the frame left empty.
```

- **Evitar:** cores diferentes entre as duas camas; perspectiva que distorça a comparação; cota desenhada.

---

## 12. Páginas de linha — 1 entrada, 3 arquivos

### 34 · Família `hero/linha-[linha]-16x9.jpg`

| Arquivo | Linha | Produto em cena |
| --- | --- | --- |
| `linha-molas-ensacadas-16x9.jpg` | Molas Ensacadas | colchão sem pillow top, faixa única |
| `linha-anatomico-ortopedico-16x9.jpg` | Anatômico Ortopédico | colchão com pillow top |
| `linha-magnetico-16x9.jpg` | Magnético | colchão com pillow top |

- **Seção:** hero das 12 páginas de linha
- **Objetivo:** dar identidade a cada linha sem inventar tecnologia visível.
- **Elemento principal:** colchão da linha sobre a base, sem roupa de cama, em quarto neutro.
- **Composição:** cama à direita com 55%; parede lisa à esquerda; o colchão aparece nu, mostrando o acabamento.
- **Enquadramento:** plano médio-geral, cabeceira e colchão inteiros.
- **Ângulo do produto:** 3/4 a partir do pé esquerdo, câmera a 110 cm — idêntico nas três.
- **Cenário:** o mesmo quarto neutro nas três imagens; muda apenas o colchão e a cor do veludo (cinza, bege, vinho).
- **Iluminação:** idêntica nas três: janela à direita, fim de tarde, luz rasante.
- **Cores:** areia, madeira mel, veludo da variação, colchão creme.
- **Proporção:** 16:9 · **Resolução:** 2400 × 1350 · **Área livre:** 40% à esquerda · **Versão:** desktop; celular usa recorte 4:5 com a área livre em cima

```text
[PROMPT-BASE] Interior photograph of a neutral, quietly furnished bedroom with a Kanak bed set in {COR} velvet, shown without bedding so the mattress finish is fully visible: diamond-tufted headboard with crystal-look buttons, {COLCHAO}, matching tufted storage bench at the foot, honey oak legs. The bed occupies the right 55% of the frame; the left 40% is an empty warm-white wall. Three-quarter view from the left foot, camera at 110 cm, 35 mm, f/5.6, straight verticals. Late-afternoon window light from the right, identical across the series.

Variáveis:
  Molas Ensacadas       → COR "charcoal grey"  COLCHAO "a single-height off-white quilted mattress with no pillow-top band"
  Anatômico Ortopédico  → COR "beige"          COLCHAO "an off-white quilted mattress with one clearly visible pillow-top band"
  Magnético             → COR "wine"           COLCHAO "an off-white quilted mattress with one clearly visible pillow-top band"
```

- **Evitar:** qualquer símbolo de tecnologia, ímã, onda, luz azul, corte interno; mudar ângulo ou luz entre as três.

---

## 13. Bases, cabeceiras e baús — 5 entradas

### 35 · `produto/base-box-cinza-packshot-1x1.jpg`

- **Seção:** bloco "o que vem no kit" das páginas de kit
- **Objetivo:** apresentar a base como produto próprio.
- **Elemento principal:** base box isolada, sem colchão.
- **Composição:** base centralizada, pés visíveis, sombra de contato; 15% de margem.
- **Enquadramento:** produto inteiro.
- **Ângulo do produto:** 3/4, 25° à esquerda, câmera a 80 cm.
- **Cenário:** fundo infinito `sand-100`.
- **Iluminação:** softbox à esquerda, rebatedor à direita, luz rasante no veludo.
- **Cores:** areia, veludo cinza-chumbo, madeira mel.
- **Proporção:** 1:1 · **Resolução:** 1400 × 1400 · **Área livre:** nenhuma · **Versão:** desktop e celular

```text
[PROMPT-BASE] Studio packshot of a Kanak box base alone, without mattress, on a seamless warm sand background: rectangular box fully upholstered in matte charcoal grey velvet, flat untufted panels, one continuous horizontal seam, one small discreet metal stud on the side, four turned tapered honey oak legs slightly angled outward. Three-quarter view rotated 25 degrees to the left, camera at 80 cm, 50 mm, f/8, large soft key from the left with a reflector on the right, grazing light on the velvet, short realistic contact shadow, 15% margin.
```

- **Evitar:** colchão na cena; halo de recorte; pé metálico; gaveta inventada.

---

### 36 · `produto/base-com-bau-frontal-3x2.jpg`

- **Seção:** bloco "o que vem no kit" das páginas de kit
- **Objetivo:** mostrar a versão com baú, que existe nas fotos reais do showroom.
- **Elemento principal:** base com os painéis frontais do baú visíveis.
- **Composição:** base em 3/4 com a lateral e a frente no quadro, painéis do baú legíveis.
- **Enquadramento:** produto inteiro com 12% de margem.
- **Ângulo do produto:** 3/4, 30° à direita, câmera a 70 cm.
- **Cenário:** fundo infinito `sand-100`.
- **Iluminação:** estúdio, luz lateral que marque a divisão dos painéis.
- **Cores:** areia, veludo bege, madeira mel.
- **Proporção:** 3:2 · **Resolução:** 1600 × 1067 · **Área livre:** nenhuma · **Versão:** desktop e celular

> ⚠️ Pendência P3: confirmar com o cliente se a base com baú abre por painéis frontais ou por tampa. Gerar só depois.

```text
[PROMPT-BASE] Studio photograph of a Kanak box base with front storage panels, without mattress, on a seamless warm sand background: rectangular base upholstered in beige velvet with two clearly defined front panels separated by a fine seam, one continuous horizontal seam along the side, turned honey oak legs. Three-quarter view rotated 30 degrees to the right so both the front and the side are readable, camera at 70 cm, 50 mm, f/8, studio side light marking the panel division, short contact shadow, 12% margin.
```

- **Evitar:** puxador, trilho, pistão, gaveta com corrediça ou qualquer mecanismo não confirmado.

---

### 37 · `produto/cabeceira-vinho-packshot-1x1.jpg`

- **Seção:** bloco "o que vem no kit" das páginas de kit
- **Objetivo:** mostrar a cabeceira como peça independente.
- **Elemento principal:** cabeceira capitonê isolada, em pé.
- **Composição:** peça centralizada e frontal, leve rotação de 10° para dar volume.
- **Enquadramento:** peça inteira com 15% de margem.
- **Ângulo do produto:** quase frontal, 10° à esquerda, câmera na metade da altura.
- **Cenário:** fundo infinito `sand-100`.
- **Iluminação:** softbox grande à esquerda, luz rasante revelando o capitonê.
- **Cores:** areia, veludo vinho, brilho discreto dos cristais.
- **Proporção:** 1:1 · **Resolução:** 1400 × 1400 · **Área livre:** nenhuma · **Versão:** desktop e celular

```text
[PROMPT-BASE] Studio packshot of a Kanak headboard alone, standing upright on a seamless warm sand background: rectangular panel upholstered in wine velvet with diamond capitonê tufting, small faceted crystal-look buttons at each tufting point, softly rounded top corners. Almost frontal view rotated 10 degrees to the left for volume, camera at half the height of the piece, 85 mm, f/8, large soft key from the left with grazing light revealing the depth of the tufting, short contact shadow, 15% margin.
```

- **Evitar:** parede atrás; fixação, parafuso ou suporte visível; botão de plástico; halo de recorte.

---

### 38 · `ambiente/cabeceira-aplicada-parede-3x4.jpg`

- **Seção:** órfã — ver seção 19.1
- **Objetivo:** mostrar a cabeceira instalada e a diferença que faz na parede.
- **Elemento principal:** cabeceira montada atrás da cama, com o ripado de madeira ao redor.
- **Composição:** enquadramento vertical centrado na cabeceira; metade do colchão e dois travesseiros abaixo.
- **Enquadramento:** plano médio vertical.
- **Ângulo do produto:** frontal leve, 5° à direita, câmera a 140 cm.
- **Cenário:** parede com ripado claro, arandela apagada ao lado.
- **Iluminação:** luz quente lateral, sombra suave da cabeceira sobre a parede.
- **Cores:** areia, madeira, veludo cinza, roupa de cama creme.
- **Proporção:** 3:4 · **Resolução:** 900 × 1200 · **Área livre:** nenhuma · **Versão:** celular e card no desktop

```text
[PROMPT-BASE] Vertical interior photograph centred on a Kanak headboard in charcoal grey velvet mounted behind the bed: diamond capitonê tufting with crystal-look buttons, softly rounded top corners, set against a light slatted wood wall panel with an unlit wall sconce beside it. The upper half of the off-white mattress and two grey velvet pillows are visible below. Nearly frontal view offset 5 degrees to the right, camera at 140 cm, 50 mm, f/4, warm side light casting a soft shadow of the headboard on the panel.
```

- **Evitar:** quadro grande; luminária acesa apontando para a lente; parede escura.

---

### 39 · `produto/bau-bege-packshot-1x1.jpg`

- **Seção:** bloco "o que vem no kit" das páginas de kit
- **Objetivo:** apresentar o baú como peça independente, fechado.
- **Elemento principal:** baú fechado, isolado.
- **Composição:** peça centralizada, tampa capitonê legível, pés visíveis; 15% de margem.
- **Enquadramento:** peça inteira.
- **Ângulo do produto:** 3/4, 25° à esquerda, câmera a 80 cm.
- **Cenário:** fundo infinito `sand-100`.
- **Iluminação:** softbox à esquerda, luz rasante no capitonê da tampa.
- **Cores:** areia, veludo bege, madeira mel.
- **Proporção:** 1:1 · **Resolução:** 1400 × 1400 · **Área livre:** nenhuma · **Versão:** desktop e celular

```text
[PROMPT-BASE] Studio packshot of a Kanak storage bench alone and closed, on a seamless warm sand background: rectangular bench upholstered in beige velvet, diamond-tufted lid with small faceted crystal-look buttons, plain untufted body, turned tapered honey oak legs. Three-quarter view rotated 25 degrees to the left, camera at 80 cm, 50 mm, f/8, large soft key from the left with grazing light across the tufted lid, short realistic contact shadow, 15% margin.
```

- **Evitar:** cama na cena; almofada em cima; puxador; halo de recorte.

---

## 14. Cores — 2 entradas, 12 arquivos

### 40 · Família `cores/swatch-[cor]-1x1.jpg` — 11 arquivos

- **Seção:** bloco "11 cores" na home, LP, páginas de tamanho e de produto
- **Objetivo:** permitir a escolha de cor com fidelidade, em um componente leve.
- **Elemento principal:** amostra de veludo da cor, com uma dobra suave.
- **Composição:** tecido preenchendo o quadro, uma única dobra diagonal no terço inferior.
- **Enquadramento:** macro, cerca de 12 cm de tecido.
- **Ângulo do produto:** 45° em relação à superfície — **idêntico nas 11**.
- **Cenário:** só o tecido.
- **Iluminação:** exatamente a mesma nas 11 amostras: softbox à esquerda a 45°, sem rebatedor.
- **Cores:** uma por arquivo.
- **Proporção:** 1:1 · **Resolução:** 600 × 600 · **Área livre:** nenhuma · **Versão:** desktop e celular

> ⚠️ Pendência P2: a lista oficial das 11 cores ainda não foi confirmada. As cores abaixo saíram do banco de fotos e servem como hipótese de trabalho.

```text
[PROMPT-BASE] Square macro photograph of a swatch of matte suede-like {COR} velvet upholstery filling the entire frame, with one single soft diagonal fold crossing the lower third. About 12 cm of fabric in frame. 100 mm macro, f/5.6, camera at 45 degrees to the surface, one soft box from the left at 45 degrees and no reflector — identical lighting, identical angle and identical fold across the whole colour series so the swatches read as one collection. No stitching, no buttons, no seams, no background, no props.

Variáveis COR: beige · light grey · charcoal grey · terracotta · caramel · brown · wine · red · rose · mustard · olive green · navy blue · black
(usar apenas as 11 confirmadas pelo cliente)
```

- **Evitar:** balanço de branco diferente entre as amostras; sombra dura; tecido amassado; cor fora da amostra real.

---

### 41 · `cores/aplicacao-cabeceiras-trio-3x2.jpg`

- **Seção:** bloco de cores → imagem de apoio
- **Objetivo:** mostrar como a cor muda a percepção da peça, sem repetir a cama inteira.
- **Elemento principal:** três cabeceiras idênticas em cores diferentes, lado a lado.
- **Composição:** três cabeceiras em fila, mesma altura, espaço igual, levemente sobrepostas em profundidade.
- **Enquadramento:** as três peças inteiras, margem de 10%.
- **Ângulo do produto:** quase frontal, 10° à esquerda.
- **Cenário:** fundo infinito `sand-100`.
- **Iluminação:** estúdio uniforme, sem sombra dura entre as peças.
- **Cores:** bege, vinho e verde-oliva.
- **Proporção:** 3:2 · **Resolução:** 1600 × 1067 · **Área livre:** faixa superior de 15% · **Versão:** desktop e celular

```text
[PROMPT-BASE] Studio photograph of three identical Kanak headboards standing in a row on a seamless warm sand background — one in beige velvet, one in wine velvet, one in olive green velvet — all with the same diamond capitonê tufting, crystal-look buttons and softly rounded top corners, at the same height with equal spacing and a slight overlap in depth. Nearly frontal view rotated 10 degrees to the left, 85 mm, f/8, even studio lighting with no hard shadows between the pieces, upper 15% of the frame empty.
```

- **Evitar:** alturas diferentes; sombras cruzadas; mais de três peças.

---

## 15. Lifestyle humano — 3 entradas

Regra fixa: pessoa em cena é figura genérica, sem rosto em primeiro plano e **nunca** apresentada como cliente, médico ou especialista.

### 42 · `ambiente/casal-escolhendo-quarto-16x9.jpg`

- **Seção:** órfã — ver seção 19.1
- **Objetivo:** refletir a objeção real do público: a decisão é tomada em casal.
- **Elemento principal:** duas pessoas adultas de costas ou de perfil parcial, olhando para a cama.
- **Composição:** casal à esquerda em plano médio, cama à direita; o produto é o assunto, as pessoas são escala e contexto.
- **Enquadramento:** plano geral do quarto.
- **Ângulo do produto:** 3/4 a partir do pé da cama, câmera a 150 cm.
- **Cenário:** quarto em fase de mudança — caixa fechada no canto, cortina ainda sem arremate.
- **Iluminação:** luz de fim de tarde pela janela, pessoas em contraluz suave.
- **Cores:** areia, madeira, veludo bege, roupas neutras.
- **Proporção:** 16:9 · **Resolução:** 2000 × 1125 · **Área livre:** 25% à direita · **Versão:** desktop; celular recorta 4:5 priorizando a cama

```text
[PROMPT-BASE] Wide interior photograph of a couple in their late thirties seen from behind and in partial profile, standing on the left of the frame and looking at a complete Kanak bed set in beige velvet on the right. The room is mid-move-in: one closed cardboard box in a corner, a curtain not yet finished, light oak floor. The people are secondary — no recognisable faces, neutral everyday clothing, relaxed posture, one hand resting on the other's shoulder. Three-quarter view from the foot of the bed, camera at 150 cm, 35 mm, f/4, warm late-afternoon backlight from the window rimming the figures. The product is the subject; the couple gives scale and context.
```

- **Evitar:** rosto nítido em primeiro plano; pose de catálogo; pessoas deitadas; criança; legenda que os apresente como clientes.

---

### 43 · `detalhe/mao-testando-firmeza-3x2.jpg`

- **Seção:** páginas de kit e de linha → conforto e firmeza
- **Objetivo:** comunicar firmeza e resiliência com um gesto humano simples.
- **Elemento principal:** uma mão adulta pressionando o topo do colchão.
- **Composição:** mão no terço direito, superfície do colchão preenchendo o resto; leve afundamento visível.
- **Enquadramento:** macro aberto, cerca de 40 cm de produto.
- **Ângulo do produto:** 30° em relação à superfície, câmera baixa.
- **Cenário:** quarto real desfocado ao fundo.
- **Iluminação:** luz lateral quente, sombra suave sob a mão.
- **Cores:** creme, tom de pele natural, sombra quente.
- **Proporção:** 3:2 · **Resolução:** 1600 × 1067 · **Área livre:** terço esquerdo · **Versão:** desktop e celular

```text
[PROMPT-BASE] Close photograph of one adult hand pressing gently into the top surface of a Kanak mattress, showing a shallow, controlled indentation in the off-white quilted ticking. The hand occupies the right third of the frame; the quilted surface fills the rest; the bedroom behind is out of focus. About 40 cm of product in frame. 85 mm, f/2.8, camera low at 30 degrees to the surface, warm side light with a soft shadow under the hand, natural skin tone, no jewellery, no nail polish.
```

- **Evitar:** afundamento exagerado; luz azul; anel, relógio ou esmalte chamativo; duas mãos.

---

### 44 · `ambiente/pes-descalcos-tapete-manha-3x2.jpg`

- **Seção:** blocos de rotina e bem-estar · blog
- **Objetivo:** sugerir o começo do dia sem prometer resultado de saúde.
- **Elemento principal:** pés descalços tocando o tapete ao lado da cama.
- **Composição:** pés no terço inferior direito, base da cama à direita, tapete e piso ocupando o resto.
- **Enquadramento:** plano detalhe, do joelho para baixo.
- **Ângulo do produto:** câmera a 60 cm do chão, levemente para baixo.
- **Cenário:** quarto de manhã, luz entrando rasante pelo chão.
- **Iluminação:** manhã, contraluz suave, sombras longas no piso.
- **Cores:** areia, madeira clara, veludo terracota na borda, tom de pele natural.
- **Proporção:** 3:2 · **Resolução:** 1600 × 1067 · **Área livre:** metade esquerda · **Versão:** desktop e celular

```text
[PROMPT-BASE] Detail photograph from the knees down of bare adult feet resting on a pale wool rug beside a bed in the morning. The feet are in the lower right third; the terracotta velvet base of the Kanak bed and a corner of cream bed linen are at the right edge; the rug and light oak floor fill the rest. Camera 60 cm above the floor tilted slightly down, 50 mm, f/2.8, low morning light raking across the floor with long soft shadows. Calm, ordinary, unstaged. The left half of the frame is quiet floor with room for text.
```

- **Evitar:** pé em pose; pijama estampado; chinelo; close de pele; qualquer sugestão clínica.

---

## 16. Institucional — 3 entradas

### 45 · `institucional/atendimento-showroom-4x3.jpg`

- **Seção:** órfã — ver seção 19.1
- **Objetivo:** mostrar que existe gente e consultoria por trás da compra.
- **Elemento principal:** uma pessoa da equipe conversando com um casal diante de uma cama.
- **Composição:** três figuras à esquerda em plano médio, cama à direita; gesto de explicar apontando o colchão.
- **Enquadramento:** plano geral do salão.
- **Ângulo do produto:** 3/4, câmera a 150 cm.
- **Cenário:** showroom organizado, o mesmo da 13.
- **Iluminação:** luz natural pela vitrine, quente e difusa.
- **Cores:** areia, madeira, veludos bege e terracota, roupas neutras.
- **Proporção:** 4:3 · **Resolução:** 1200 × 900 · **Área livre:** nenhuma · **Versão:** desktop e celular

```text
[PROMPT-BASE] Interior photograph inside a tidy bed showroom: a staff member in plain neutral clothing stands beside a complete Kanak bed set in beige velvet, one hand open towards the mattress, explaining something to a couple in their forties who listen from the left. All three are seen at a respectful distance in partial profile, no recognisable faces in the foreground, natural relaxed posture. Light oak floor, warm white walls, daylight from a shop window. Three-quarter view, camera at 150 cm, 35 mm, f/4, warm diffused light. Professional and calm, not a stock-photo handshake.
```

- **Evitar:** aperto de mão; prancheta; jaleco; uniforme com logotipo; sorriso de banco de imagens; rosto nítido.

---

### 46 · `institucional/showroom-corredor-cores-3x4.jpg`

- **Seção:** órfã — ver seção 19.1
- **Objetivo:** dar profundidade ao mosaico institucional com um enquadramento vertical.
- **Elemento principal:** corredor do showroom com cabeceiras de cores diferentes em perspectiva.
- **Composição:** vertical, fuga em perspectiva, cabeceiras recuando à direita.
- **Enquadramento:** plano geral vertical.
- **Ângulo do produto:** 3/4 do corredor, câmera a 160 cm.
- **Cenário:** o mesmo showroom das 13 e 45.
- **Iluminação:** quente embutida mais luz natural ao fundo.
- **Cores:** areia, madeira, veludos variados.
- **Proporção:** 3:4 · **Resolução:** 900 × 1200 · **Área livre:** nenhuma · **Versão:** celular e card no desktop

```text
[PROMPT-BASE] Vertical interior photograph looking down the aisle of a tidy bed showroom, with a row of Kanak headboards in different velvet colours — beige, terracotta, grey, wine — receding in perspective on the right. Light oak floor, warm white walls, warm recessed lighting and daylight at the far end. Camera at 160 cm, 35 mm, f/5.6, straight verticals, calm and uncluttered.
```

- **Evitar:** letreiro, placa, preço, caixa, escada, pessoa em primeiro plano.

---

### 47 · `ambiente/quarto-vazio-luz-404-4x3.jpg`

- **Seção:** página 404
- **Objetivo:** ilustrar "não encontramos" sem tom de erro nem humor forçado.
- **Elemento principal:** quarto vazio com a luz da janela no piso, sem cama.
- **Composição:** cômodo vazio, retângulo de luz no chão onde a cama estaria.
- **Enquadramento:** plano geral.
- **Ângulo do produto:** sem produto.
- **Cenário:** quarto vazio de paredes claras e piso de madeira.
- **Iluminação:** luz de fim de tarde desenhando o retângulo da janela no piso.
- **Cores:** areia, madeira clara, sombra quente.
- **Proporção:** 4:3 · **Resolução:** 1200 × 900 · **Área livre:** 40% superior · **Versão:** desktop e celular

```text
[PROMPT-BASE] Interior photograph of an empty bedroom with warm white walls and a light oak floor, no furniture at all. Late-afternoon sunlight comes through a window and draws a clean bright rectangle on the floor where a bed would stand. Camera at 140 cm, 35 mm, f/5.6, straight verticals, warm soft shadows, quiet and unsentimental. Upper 40% of the frame is plain wall.
```

- **Evitar:** objeto abandonado; texto; animal; clima melancólico exagerado.

---

## 17. Blog — 1 entrada, 4 arquivos

### 48 · Família `blog/capa-[tema]-16x9.jpg`

| Arquivo | Tema do post | Assunto da imagem |
| --- | --- | --- |
| `capa-como-escolher-colchao-16x9.jpg` | Como escolher o colchão | dois colchões lado a lado em vista lateral, quarto neutro |
| `capa-tamanho-ideal-quarto-16x9.jpg` | Qual tamanho cabe no seu quarto | quarto visto do alto com a cama e o piso livre |
| `capa-cuidados-colchao-16x9.jpg` | Cuidados e vida útil | mãos ajeitando o lençol sobre o colchão |
| `capa-quarto-acolhedor-16x9.jpg` | Como deixar o quarto acolhedor | canto de quarto ao entardecer com abajur e manta |

- **Seção:** `/blog` e posts
- **Objetivo:** dar ao blog um padrão visual reconhecível, sem virar banco de imagens.
- **Elemento principal:** o assunto da coluna acima, sempre com um pedaço do produto em cena.
- **Composição:** assunto deslocado para a direita; lado esquerdo calmo para o título do card.
- **Enquadramento:** plano médio.
- **Ângulo do produto:** o do assunto; sempre com a mesma luz da marca.
- **Cenário:** quarto neutro da família de imagens do site.
- **Iluminação:** fim de tarde, quente, difusa.
- **Cores:** paleta padrão areia/madeira/veludo.
- **Proporção:** 16:9 · **Resolução:** 1600 × 900 · **Área livre:** 35% à esquerda · **Versão:** desktop e celular

```text
[PROMPT-BASE] Editorial horizontal photograph for a blog cover, in the same visual family as the rest of the Kanak site: {ASSUNTO}. Neutral bedroom with warm white walls and light oak floor, a Kanak product always partly present in the frame. The subject sits on the right; the left 35% of the frame is calm and low in contrast for a title. 35 mm or 50 mm, f/4, warm late-afternoon light, soft shadows, natural and unstaged.

Variáveis ASSUNTO:
  "two Kanak mattresses standing side by side in side profile, one single-height and one pillow-top"
  "an elevated view of a bedroom with one Kanak bed and clear free floor space around it"
  "a pair of adult hands smoothing a cream sheet over an off-white quilted Kanak mattress, no faces"
  "a bedroom corner at dusk with a lit bedside lamp, a knitted throw over the corner of a Kanak bed"
```

- **Evitar:** texto na imagem; ícone; colagem; foto que pareça banco de imagens genérico.

---

## 18. Compartilhamento e texturas — 3 entradas

### 49 · `og/og-default-1200x630.jpg`

- **Seção:** Open Graph padrão do site e de todas as páginas institucionais sem imagem própria
- **Objetivo:** representar a marca em qualquer compartilhamento.
- **Elemento principal:** kit completo em veludo cinza, plano médio.
- **Composição:** cama ocupando 70%, fundo simplificado, margem inferior limpa.
- **Enquadramento:** plano médio horizontal.
- **Ângulo do produto:** 3/4 frontal, câmera a 120 cm.
- **Cenário:** quarto neutro simplificado.
- **Iluminação:** fim de tarde, um pouco mais clara para vencer a compressão.
- **Cores:** areia, madeira, veludo cinza.
- **Proporção:** 1,91:1 · **Resolução:** 1200 × 630 · **Área livre:** faixa inferior de 25% · **Versão:** única

```text
[PROMPT-BASE] Horizontal photograph optimised for a small social preview: the complete Kanak bed set in charcoal grey velvet fills about 70% of the frame — tufted headboard, made-up off-white mattress, closed storage bench — in a simplified neutral bedroom with a warm white wall and a light oak floor. Three-quarter front view, camera at 120 cm, 50 mm, f/5.6, warm late-afternoon light, slightly brighter and more contrasted than a normal interior shot. Lower 25% of the frame kept simple and uncluttered.
```

- **Evitar:** texto; moldura; detalhe fino que desaparece na miniatura.

---

### 50 · `textura/linho-areia-2400.jpg`

- **Seção:** fundo sutil de seções claras, cabeçalho de categoria do blog
- **Objetivo:** dar textura a uma seção sem introduzir assunto novo.
- **Elemento principal:** tecido de linho cor areia, plano.
- **Composição:** superfície uniforme, trama visível, sem dobra dominante.
- **Enquadramento:** macro plano, textura contínua e repetível.
- **Ângulo do produto:** perpendicular à superfície.
- **Cenário:** só o tecido.
- **Iluminação:** difusa e uniforme, relevo muito sutil.
- **Cores:** areia `#F3ECE3` com variação mínima.
- **Proporção:** livre · **Resolução:** 2400 de largura · **Área livre:** toda · **Versão:** desktop e celular

```text
[PROMPT-BASE] Flat macro photograph of natural sand-coloured linen fabric filling the entire frame, seen perpendicular to the surface, with a visible even weave and no dominant fold. Very soft diffused lighting, extremely subtle relief, almost flat, uniform tone close to #F3ECE3, no shadows, no seams, no edges — a calm background texture that can sit behind text.
```

- **Evitar:** dobra marcada; vinheta; variação de cor; costura.

---

### 51 · `textura/veludo-vinho-2400.jpg`

- **Seção:** fundo dos blocos escuros e do CTA final
- **Objetivo:** dar profundidade ao bloco vinho sem usar foto de produto.
- **Elemento principal:** veludo vinho profundo, com variação de tom pela luz.
- **Composição:** superfície com uma ondulação larga e suave atravessando o quadro.
- **Enquadramento:** macro aberto.
- **Ângulo do produto:** quase paralelo à superfície.
- **Cenário:** só o tecido.
- **Iluminação:** rasante, criando um degradê natural de claro a escuro.
- **Cores:** vinho `#2E0A0F` a `#45101A`.
- **Proporção:** livre · **Resolução:** 2400 de largura · **Área livre:** toda a metade escura · **Versão:** desktop e celular

```text
[PROMPT-BASE] Macro photograph of deep wine-coloured matte velvet filling the entire frame, with one broad soft undulation crossing it so the nap shifts from a lighter tone to a very dark one. Grazing light creating a natural gradient, no highlights, no sparkle, no stitching, no buttons. Tones between #2E0A0F and #45101A, rich and quiet, suitable as a dark background behind cream text.
```

- **Evitar:** brilho de cetim; textura de tecido errado; padrão repetitivo evidente.

---

## 18b. Complemento da estrutura de 19 rotas — 2 entradas, 5 arquivos

Fichas criadas em 21/09/2026, depois da revisão da estrutura do site.

### 52 · Família `hero/linha-[linha]-mobile-4x5.jpg` — 3 arquivos

| Arquivo | Linha | Cor | Colchão em cena |
| --- | --- | --- | --- |
| `linha-molas-ensacadas-mobile-4x5.jpg` | Molas Ensacadas | cinza-chumbo | sem pillow top, faixa única |
| `linha-anatomico-ortopedico-mobile-4x5.jpg` | Anatômico Ortopédico | bege | com pillow top |
| `linha-magnetico-mobile-4x5.jpg` | Magnético | vinho | com pillow top |

- **Seção:** hero de celular das 12 páginas de linha
- **Objetivo:** dar às páginas de linha o mesmo par desktop/celular que os kits já têm. Sem isso, o celular baixa o master 16:9 e o produto fica minúsculo — e o tráfego chega pelo celular à noite.
- **Elemento principal:** o mesmo conjunto da ficha 34 correspondente, recomposto na vertical.
- **Composição:** cabeceira e metade do colchão na faixa inferior, parede vazia na superior. Sem roupa de cama, para o acabamento do colchão ficar visível.
- **Enquadramento:** plano médio vertical.
- **Ângulo do produto:** 3/4 a partir do pé esquerdo, câmera a 125 cm.
- **Cenário:** o mesmo quarto neutro da ficha 34 — muda só o enquadramento.
- **Iluminação:** idêntica à ficha 34; as duas versões precisam parecer a mesma foto.
- **Cores:** areia, madeira mel, veludo da variação, colchão creme.
- **Proporção:** 4:5 · **Resolução:** 1080 × 1350 · **Área livre:** 45% superior · **Versão:** celular

```text
[PROMPT-BASE] Vertical interior photograph of a neutral, quietly furnished bedroom with a Kanak bed set in {COR} velvet, shown without bedding so the mattress finish is fully visible: diamond-tufted headboard with crystal-look buttons, {COLCHAO}, honey oak legs. The headboard and the upper half of the mattress fill the lower 55% of the frame, the storage bench is cropped at the bottom edge, and the upper 45% is an empty warm-white wall with soft gradient light. Three-quarter view from the left foot, camera at 125 cm, 50 mm, f/5.6, straight verticals. Late-afternoon window light from the right, identical to the desktop version of the same line.

Variáveis:
  Molas Ensacadas      → COR "charcoal grey"  COLCHAO "a single-height off-white quilted mattress with no pillow-top band"
  Anatômico Ortopédico → COR "beige"          COLCHAO "an off-white quilted mattress with one clearly visible pillow-top band"
  Magnético            → COR "wine"           COLCHAO "an off-white quilted mattress with one clearly visible pillow-top band"
```

- **Evitar:** luz diferente da versão desktop; cortar a cabeceira ao meio; qualquer símbolo de tecnologia ou magnetismo.

---

### 53 · Família `cores/swatch-[cor]-1x1.jpg` — 2 arquivos

Completa a lista oficial de 11 cores. Mesma receita da ficha 40: mesma luz, mesmo ângulo, mesma dobra.

| Arquivo | Cor |
| --- | --- |
| `swatch-creme-1x1.jpg` | Creme |
| `swatch-preto-1x1.jpg` | Preto |

- **Seção:** grade de cores das 16 páginas de produto e da home
- **Objetivo:** fechar a coleção de amostras com as duas cores que faltavam.
- **Proporção:** 1:1 · **Resolução:** 600 × 600 · **Área livre:** nenhuma · **Versão:** desktop e celular

```text
[PROMPT-BASE] Square macro photograph of a swatch of matte suede-like {COR} velvet upholstery filling the entire frame, with one single soft diagonal fold crossing the lower third. About 12 cm of fabric in frame. 100 mm macro, f/5.6, camera at 45 degrees to the surface, one soft box from the left at 45 degrees and no reflector — identical lighting, identical angle and identical fold across the whole colour series so the swatches read as one collection. No stitching, no buttons, no seams, no background, no props.

Variáveis COR: warm cream · black
```

- **Evitar:** preto chapado sem leitura de textura; creme confundido com bege; balanço de branco diferente do restante da série.

---

## 18c. Landing pages de campanha — 4 entradas, 9 arquivos

Fichas criadas em 21/09/2026 para a estrutura de 12 blocos do Modelo E de @specs/site.md. As três LPs compartilham exatamente as mesmas imagens: o que muda entre elas é só o número de WhatsApp.

### 54 · Par `hero/lp-campanha-marrom-[dispositivo].jpg` — 2 arquivos

| Arquivo | Proporção | Resolução |
| --- | --- | --- |
| `lp-campanha-marrom-desktop-16x9.jpg` | 16:9 | 2400 × 1350 |
| `lp-campanha-marrom-mobile-4x5.jpg` | 4:5 | 1080 × 1350 |

- **Seção:** LP → bloco 2, hero full-bleed
- **Objetivo:** é a imagem de LCP das três LPs e a primeira coisa que o tráfego pago vê. Precisa entregar quarto acolhedor e cama completa em menos de um segundo.
- **Elemento principal:** kit completo em veludo marrom-taupe, cama arrumada com roupa de cama creme e manta dobrada.
- **Composição:** desktop — cama à direita ocupando 60%, parede e criado-mudo à esquerda vazios para o título; celular — cabeceira e metade do colchão embaixo, parede acima.
- **Enquadramento:** plano geral no desktop, plano médio no celular.
- **Ângulo do produto:** 3/4 frontal a partir do pé esquerdo, câmera a 115 cm no desktop e 125 cm no celular.
- **Cenário:** suíte com ripado de madeira atrás da cabeceira, dois abajures acesos, cortina de linho, piso de madeira clara.
- **Iluminação:** fim de tarde com abajures quentes acesos — mais cálida e um pouco mais escura que os heroes das páginas de produto, porque o texto ocupa mais área.
- **Cores:** areia, madeira mel, veludo marrom-taupe, roupa de cama creme.
- **Área livre:** 40% à esquerda no desktop, 45% em cima no celular.

```text
[PROMPT-BASE] Interior photograph of a warm master bedroom at the end of the day, with the complete Kanak bed set in taupe-brown velvet, made up and inviting: diamond-tufted headboard with crystal-look buttons against a slatted wood wall panel, off-white pillow-top mattress with cream bedding and a folded knitted throw, matching tufted storage bench closed at the foot, honey oak legs. Two warm bedside lamps are lit, a linen curtain filters the last daylight, light oak floor. {ENQUADRAMENTO}. Three-quarter view from the left foot of the bed, camera at {ALTURA} cm, {LENTE}, f/5.6, straight verticals. Slightly warmer and slightly darker than a daytime shot, so cream text can sit over it.

Variáveis:
  desktop → ENQUADRAMENTO "The bed occupies the right 60% of the frame; the left 40% is an empty wall with a bedside table and soft light falloff"  ALTURA 115  LENTE "35 mm"
  celular → ENQUADRAMENTO "The headboard and the upper half of the mattress fill the lower 55% of the frame, and the upper 45% is an empty warm wall with soft gradient light"  ALTURA 125  LENTE "50 mm"
```

- **Evitar:** objeto na área livre; luz fria; cama desarrumada; qualquer texto ou letreiro.

---

### 55 · Família `detalhe/firmeza-[nivel]-4x3.jpg` — 4 arquivos

| Arquivo | Nível |
| --- | --- |
| `firmeza-macio-4x3.jpg` | Macio |
| `firmeza-intermediario-4x3.jpg` | Intermediário |
| `firmeza-firme-4x3.jpg` | Firme |
| `firmeza-extrafirme-4x3.jpg` | Extrafirme |

- **Seção:** LP → bloco 6, nível de firmeza
- **Objetivo:** dar quatro tiles visualmente coerentes para uma escolha que hoje é ilustrada com banco de imagens genérico.
- **Elemento principal:** uma mão adulta pressionando o topo do colchão, com a profundidade do afundamento mudando entre os quatro.
- **Composição:** mão no terço direito, superfície do colchão preenchendo o resto. **Idêntica nos quatro** — só o afundamento muda.
- **Enquadramento:** macro aberto, cerca de 40 cm de produto.
- **Ângulo do produto:** 30° em relação à superfície, câmera baixa. Igual nos quatro.
- **Cenário:** só o produto, quarto desfocado ao fundo.
- **Iluminação:** lateral quente, idêntica nos quatro.
- **Cores:** creme, tom de pele natural, sombra quente.
- **Proporção:** 4:3 · **Resolução:** 1200 × 900 · **Área livre:** nenhuma · **Versão:** desktop e celular

> A diferença entre os quatro é **só a profundidade do afundamento**, que é o que a mão realmente revela. Nenhum texto, número, régua ou escala desenhada na imagem — o rótulo é HTML.

```text
[PROMPT-BASE] Close photograph of one adult hand pressing into the top surface of a Kanak mattress, showing {AFUNDAMENTO} in the off-white quilted ticking. The hand occupies the right third of the frame; the quilted surface fills the rest; the bedroom behind is out of focus. About 40 cm of product in frame. 85 mm, f/2.8, camera low at 30 degrees to the surface, warm side light with a soft shadow under the hand, natural skin tone, no jewellery, no nail polish. Framing, angle, lighting and hand position identical across the four firmness images — only the depth of the indentation changes.

Variáveis AFUNDAMENTO:
  Macio         → "a deep, soft indentation where the hand sinks noticeably into the surface"
  Intermediário → "a moderate indentation, clearly visible but shallower"
  Firme         → "a shallow indentation, the surface barely giving way"
  Extrafirme    → "almost no indentation, the surface staying essentially flat under the hand"
```

- **Evitar:** mudar o enquadramento entre os quatro; anel, relógio ou esmalte; régua, número ou seta; duas mãos.

---

### 56 · Par `ambiente/rotina-noite-[dispositivo].jpg` — 2 arquivos

| Arquivo | Proporção | Resolução |
| --- | --- | --- |
| `rotina-noite-desktop-3x2.jpg` | 3:2 | 1600 × 1067 |
| `rotina-noite-mobile-4x5.jpg` | 4:5 | 1080 × 1350 |

- **Seção:** LP → bloco 10, bloco escuro de rotina
- **Objetivo:** ilustrar o sono bem dormido ao lado do texto, dentro de um bloco `wine-900`.
- **Elemento principal:** pessoa adulta dormindo tranquila, enquadrada de longe e parcialmente coberta pela roupa de cama.
- **Composição:** figura à direita, roupa de cama creme dominando; o lado esquerdo escurece para o texto entrar por cima.
- **Enquadramento:** plano médio, do ombro para cima parcialmente coberto.
- **Ângulo do produto:** vista de cima em 30°, câmera a 140 cm.
- **Cenário:** quarto à noite, luz de abajur fora de quadro.
- **Iluminação:** baixa, quente, contraste suave, sem estourar o branco da roupa de cama.
- **Cores:** creme, areia, sombra quente profunda.
- **Área livre:** 45% à esquerda.

```text
[PROMPT-BASE] Quiet night photograph of an adult sleeping peacefully, seen from a respectful distance and partly covered by cream bed linen, lying on an off-white quilted Kanak mattress. The figure is on the right; the left 45% of the frame falls into warm darkness with no detail, leaving room for text. No recognizable face in the foreground, relaxed natural posture, one arm resting on the duvet. High angle at 30 degrees, camera at 140 cm, 50 mm, f/2.8. Low warm light from an off-frame bedside lamp, soft contrast, no blown highlights in the linen.
```

- **Evitar:** rosto nítido; pose de catálogo; luz azul de "noite de cinema"; pessoa em pijama estampado.

---

### 57 · `ambiente/acordar-cansado-4x3.jpg` — 1 arquivo

- **Seção:** LP → bloco 11, bloco de fechamento
- **Objetivo:** ilustrar o desconforto de acordar mal dormido, que é o gatilho de compra número um do público.
- **Elemento principal:** pessoa adulta sentada na beira da cama pela manhã, de costas ou em perfil parcial, postura cansada.
- **Composição:** figura à direita, janela com luz da manhã ao fundo, cama à esquerda.
- **Enquadramento:** plano médio.
- **Ângulo do produto:** altura dos olhos, câmera a 120 cm.
- **Cenário:** quarto de manhã, cortina entreaberta.
- **Iluminação:** manhã suave, contraluz leve.
- **Cores:** areia, madeira clara, roupa de cama creme.
- **Proporção:** 4:3 · **Resolução:** 1200 × 900 · **Área livre:** nenhuma · **Versão:** desktop e celular

> **Regra de tratamento, registrada na seção 12 de @specs/design.md:** esta é uma **cena de rotina**, não uma ilustração clínica. Cansaço comunicado pela postura e pela luz, nunca por indicação de dor.

```text
[PROMPT-BASE] Morning photograph of an adult sitting on the edge of a bed, seen from behind and in partial profile, shoulders relaxed forward in a tired posture, one hand resting on the mattress. The figure is on the right; an off-white quilted Kanak mattress with cream bedding is on the left; a half-drawn curtain lets soft morning light in behind. Medium shot, camera at 120 cm, 50 mm, f/4, gentle backlight, calm and ordinary. No recognizable face in the foreground, everyday neutral sleepwear.
```

- **Evitar:** mão na lombar; marca vermelha, halo ou indicação de dor sobre o corpo; radiografia, coluna desenhada, mapa de pressão; expressão de sofrimento; qualquer sugestão clínica ou de tratamento.

---

## 19. Mapa por página

| Página | Imagens |
| --- | --- |
Revisado em 21/09/2026 para a estrutura de 19 rotas da seção 5 de @specs/site.md.

| Home `/` | 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 48 (capas), 14, 15, 49 |
| `/kit/king-size/` | 16, 17, 18, 19, 20, 21, 22, 23, 26, 27, 32.4, 40, 43, 14, 15, 24 |
| `/kit/queen-size/` · `/kit/casal/` · `/kit/solteiro/` | 25 (par do tamanho), 18, 19, 22, 23, 26, 27, 32.x, 40, 43, 14, 15, 24 |
| `/colchao-[tamanho]-molas-ensacadas/` | 34.1 + 52.1, 08, 22, 29, 32.x, 40, 03, 14, 15, 49 |
| `/colchao-[tamanho]-anatomico-ortopedico/` | 34.2 + 52.2, 09, 22, 23, 29, 32.x, 40, 03, 14, 15, 49 |
| `/colchao-[tamanho]-magnetico/` | 34.3 + 52.3, 10, 22, 23, 29, 32.x, 40, 03, 14, 15, 49 |
| `/lp/5771/` · `/lp/5068/` · `/lp/1101/` | 54 (par), 04, 05, 06, 07, 40 + 53, 55 (4 tiles), 08, 09, 10, 12, 56 (par), 57, 24 |
| `/blog/` e posts | 48 (4 capas), 12, 44, 50 |
| `/privacidade/` | nenhuma |
| 404 | 47 |
| Open Graph | 24 nos kits e nas LPs, 49 no resto, capa do post no blog |

As 12 páginas de linha compartilham o hero da sua linha e comunicam o tamanho pelo título, pelo top-down (32.x) e pela seção de espaço no quarto. As 4 páginas de kit têm hero próprio.

### 19.1 Imagens órfãs

A estrutura nova eliminou as páginas que usavam estas cinco. Ficam arquivadas, sem uso previsto, e nenhuma precisa ser regerada:

| Imagem | Era para |
| --- | --- |
| 13 `institucional/showroom-panoramico-4x3` | `/showroom` e home |
| 45 `institucional/atendimento-showroom-4x3` | `/sobre` e `/showroom` |
| 46 `institucional/showroom-corredor-cores-3x4` | `/showroom` |
| 42 `ambiente/casal-escolhendo-quarto-16x9` | home e `/sobre` |
| 38 `ambiente/cabeceira-aplicada-parede-3x4` | `/cabeceiras` |

### 19.2 O que ainda falta

| Ficha | Qtd. | Motivo |
| --- | --- | --- |
| 52 | 3 | Versão 4:5 de celular dos heroes de linha — só existe o 16:9 de desktop |
| 53 | 2 | Amostras de Creme e Preto, ausentes na lista oficial de 11 cores |
| 54 | 2 | Hero próprio das três LPs, desktop e celular |
| 55 | 4 | Tiles de nível de firmeza — existe só um macro de mão, e a série precisa dos quatro |
| 56 | 2 | Imagem do bloco escuro de rotina da LP, desktop e celular |
| 57 | 1 | Imagem do bloco de fechamento da LP |
| 47 | 1 | Regerar: veio com cama, a ficha pede cômodo vazio |

**Total: 14 arquivos novos e 1 regeração.**

Duas amostras geradas **não** constam da lista oficial e saem de uso: `cores/swatch-vermelho-1x1` e `cores/swatch-mostarda-1x1`.

A ficha 43 (`detalhe/mao-testando-firmeza-3x2`) é substituída pela série 55 nas LPs, mas continua em uso nas páginas de kit e de linha.

---

## 20. Ordem de produção

**Fase 1 — Piloto da LP (9 arquivos + 2 amostras).** Fichas 54 (2), 55 (4), 56 (2), 57 (1) e as duas amostras da ficha 53. É o conjunto que falta para a `/lp/5771/` existir.

**Fase 2 — Piloto de kit: nenhum arquivo novo.** `/kit/king-size/` está 100% coberta pelas 74 existentes.

**Fase 3 — Completar (4 arquivos).** Fichas 52 (3) para as páginas de linha e a regeração da 47.

Regra: nenhuma fase começa antes de a anterior passar pelo checklist da seção 21.

---

## 21. Checklist de QA por imagem

Antes de aprovar qualquer arquivo:

1. O produto está idêntico ao canônico? Base lisa, costura horizontal, botão metálico discreto, pés de madeira mel, capitonê com botões de cristal, colchão creme matelassê com viés champanhe.
2. As proporções entre base, colchão, cabeceira e baú batem com as das outras imagens?
3. A luz é de fim de tarde, quente e lateral? A temperatura bate com as imagens vizinhas na mesma página?
4. Nenhum texto, logotipo, letreiro, etiqueta, selo ou número apareceu?
5. Nenhum recurso inventado — sensor, botão, tela, ímã, pedra, LED, gaveta?
6. As verticais estão retas e não há distorção de grande angular nas bordas?
7. A área livre declarada está realmente livre e em baixo contraste?
8. Há par desktop/celular quando a ficha exige?
9. O arquivo está no tamanho, proporção e peso da tabela 3.2?
10. O `alt` foi escrito descrevendo tamanho, linha, cor e ambiente?
11. A imagem é geração de IA? Registrar no controle de origem.
12. Se houver pessoa: rosto não identificável, sem pose de catálogo, sem sugestão de que é cliente real.

---

## 22. Pendências que bloqueiam a produção

| # | Pendência | Bloqueia | Por quê |
| --- | --- | --- | --- |
| P1 | Qual é o tecido/acabamento oficial de cada linha? O site atual mostra colchão preto com estampa floral prateada; todas as fotos reais mostram colchão branco matelassê | 08, 09, 10, 20, 22, 29, 32, 34 | Definir o colchão canônico antes de gerar qualquer packshot |
| ~~P2~~ | **Resolvida em 21/09/2026.** A `/landing-page-1/` do site no ar lista as 11 cores: Verde, Creme, Azul, Bordô, Bege, Cinza, Caramelo, Terra Cota, Marrom, Preto e Rosê. Falta só o cliente confirmar | 40, 41, 11 | Vermelho e mostarda saem; creme e preto entram (ficha 53) |
| P3 | A base com baú abre por painéis frontais ou por tampa? Existe base bipartida em Queen e King? | 36, 35 | Não inventar mecanismo |
| ~~P4~~ | **Resolvida em 21/09/2026.** O site no ar afirma "direto da fábrica sem intermediários" — a Kanak fabrica | — | Imagem de produção segue fora do escopo, já que não há página institucional |
| P5 | Existem fotos reais de clientes com autorização? | bloco de depoimentos | Enquanto não houver, o bloco usa a 12 e nenhuma pessoa |
| P6 | Quais selos e certificações podem ser exibidos e em que arte oficial? | qualquer selo | Selo não se gera, se recebe |
| P7 | Ferramenta de geração aprovada e orçamento de imagens | toda a produção | Define resolução máxima real e número de variações por imagem |

---

## 23. Resumo

- **57 fichas de imagem**, produzindo **88 arquivos**. As 74 primeiras já estão em `public/img`; faltam 14 (fichas 52 a 57) e a regeração da 47.
- **13 arquivos do banco atual** aprovados para reaproveitamento em card e galeria — nenhum serve para hero.
- **5 imagens ficaram órfãs** com a revisão da estrutura do site (seção 19.1) e **2 amostras de cor saem de uso** por não constarem da lista oficial.
- **5 pendências** seguem abertas; P2 e P4 foram resolvidas em 21/09/2026. O piloto da LP depende das fichas 54 a 57; o piloto de kit não depende de nenhuma imagem nova.
- Todos os prompts começam pelo mesmo **PROMPT-BASE DE CONSISTÊNCIA** da seção 4, que é o que mantém o produto idêntico em todas as imagens.
- Os 74 prompts prontos para colar no gerador, já com o prompt-base embutido em cada um, estão em @imagens-prompt.md. Aquele arquivo é derivado deste: quando uma ficha mudar aqui, o prompt correspondente precisa ser regerado lá.

