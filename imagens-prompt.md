# imagens-prompt.md — Todos os prompts de geração

Gerado a partir de @imagens.md em 21/09/2026, na mesma ordem das fichas.
Cada prompt já vem com o **PROMPT-BASE DE CONSISTÊNCIA** embutido no início — nenhum prompt depende de outro trecho deste arquivo. Copie um bloco inteiro e cole no gerador.

As fichas completas (objetivo, composição, área livre, restrições, pendências) continuam em @imagens.md. Aqui ficam só os prompts.

---

## Como usar

### Para gerar em lote

Envie esta instrução antes de colar os prompts:

```text
Gere todas as imagens descritas abaixo.

Cada resultado deve ser gerado como uma imagem separada, seguindo sua própria proporção e composição.

Não monte colagens e não coloque várias imagens dentro do mesmo arquivo.

Siga fielmente as referências visuais do produto anexadas.
```

Anexe sempre as mesmas três referências de produto, para que o gerador tenha o mesmo ponto de partida em todas as imagens:

1. `referencias-site/meus-produtos/imagens colchões Kanak/casal sem pillow top - vinho parede leao com recamier.jpeg` — kit completo, cores e capitonê
2. `referencias-site/meus-produtos/imagens colchões Kanak/kingsize com pillow top - cinza render 3d suite com recamier.jpeg` — padrão de acabamento e ambientação
3. `referencias-site/meus-produtos/imagens colchões Kanak/casal sem pillow top - bege showroom com recamier.jpeg` — proporções reais e detalhes da base

### Quando o produto sair diferente da referência

```text
Follow the supplied product references exactly.

Correct the product so it matches the reference images in shape, proportions, material, color, finish, sensor placement and internal details.

Do not redesign, stylize or add new details to the product.
```

> Observação: o produto Kanak **não tem sensores**. A menção a *sensor placement* vem do texto padrão de correção — no caso da Kanak ela simplesmente não se aplica, e nenhum sensor deve ser adicionado. Ver @imagens.md, seção 5.

### Regras que valem para todas as gerações

- Uma imagem por arquivo. Nunca colagem, nunca grade de variações dentro do mesmo arquivo.
- A proporção declarada em cada prompt é obrigatória; a resolução é o mínimo aceitável.
- Imagens de um mesmo par desktop/celular precisam ter a **mesma luz, a mesma cor de veludo e o mesmo produto**. Gere-as na mesma sessão.
- Imagens de uma mesma família (25, 32, 34, 40, 48) precisam ser geradas na mesma sessão, com a mesma semente sempre que a ferramenta permitir.
- Nada de texto, logotipo, letreiro, etiqueta, selo ou número dentro da imagem.
- Sete pendências ainda bloqueiam parte da produção — ver @imagens.md, seção 22. As mais críticas: **P1** (acabamento oficial do colchão de cada linha) afeta 08, 09, 10, 20, 22, 29, 32 e 34; **P2** (lista oficial das 11 cores) afeta a família 40, cujas cores abaixo são hipótese de trabalho.

---

## Índice

| # | Arquivo | Proporção | Resolução |
| --- | --- | --- | --- |
| 01 | `hero/hero-home-king-cinza-desktop-21x9.jpg` | 21:9 | 2560 × 1097 |
| 02 | `hero/hero-home-king-cinza-mobile-4x5.jpg` | 4:5 | 1080 × 1350 |
| 03 | `produto/kit-completo-bege-packshot-1x1.jpg` | 1:1 | 1400 × 1400 |
| 04 | `ambiente/tamanho-solteiro-verde-card-4x3.jpg` | 4:3 | 1200 × 900 |
| 05 | `ambiente/tamanho-casal-terracota-card-4x3.jpg` | 4:3 | 1200 × 900 |
| 06 | `ambiente/tamanho-queen-vinho-card-4x3.jpg` | 4:3 | 1200 × 900 |
| 07 | `ambiente/tamanho-king-mostarda-card-4x3.jpg` | 4:3 | 1200 × 900 |
| 08 | `produto/linha-molas-ensacadas-1x1.jpg` | 1:1 | 1400 × 1400 |
| 09 | `produto/linha-anatomico-ortopedico-1x1.jpg` | 1:1 | 1400 × 1400 |
| 10 | `produto/linha-magnetico-1x1.jpg` | 1:1 | 1400 × 1400 |
| 11 | `ambiente/cores-trio-bege-terracota-cinza-16x9.jpg` | 16:9 | 2000 × 1125 |
| 12 | `textura/roupa-de-cama-manha-3x2.jpg` | 3:2 | 1600 × 1067 |
| 13 | `institucional/showroom-panoramico-4x3.jpg` | 4:3 | 1200 × 900 |
| 14 | `hero/cta-final-quarto-entardecer-desktop-21x9.jpg` | 21:9 | 2560 × 1097 |
| 15 | `hero/cta-final-quarto-entardecer-mobile-4x5.jpg` | 4:5 | 1080 × 1350 |
| 16 | `hero/lp-kit-king-terracota-desktop-16x9.jpg` | 16:9 | 2400 × 1350 |
| 17 | `hero/lp-kit-king-terracota-mobile-4x5.jpg` | 4:5 | 1080 × 1350 |
| 18 | `produto/kit-composicao-explodida-terracota-1x1.jpg` | 1:1 | 1400 × 1400 |
| 19 | `detalhe/bau-aberto-terracota-4x3.jpg` | 4:3 | 1200 × 900 |
| 20 | `comparativo/tamanhos-topdown-16x9.jpg` | 16:9 | 2000 × 1125 |
| 21 | `comparativo/espaco-no-quarto-king-16x9.jpg` | 16:9 | 2000 × 1125 |
| 22 | `comparativo/pillow-top-vs-sem-pillow-top-3x2.jpg` | 3:2 | 1600 × 1067 |
| 23 | `detalhe/macro-pillow-top-vies-3x2.jpg` | 3:2 | 1600 × 1067 |
| 24 | `og/og-lp-kit-1200x630.jpg` | 1,91:1 | 1200 × 630 |
| 25.1 | `hero/lp-kit-queen-vinho-desktop-16x9.jpg` | 16:9 | 2400 × 1350 |
| 25.2 | `hero/lp-kit-queen-vinho-mobile-4x5.jpg` | 4:5 | 1080 × 1350 |
| 25.3 | `hero/lp-kit-casal-bege-desktop-16x9.jpg` | 16:9 | 2400 × 1350 |
| 25.4 | `hero/lp-kit-casal-bege-mobile-4x5.jpg` | 4:5 | 1080 × 1350 |
| 25.5 | `hero/lp-kit-solteiro-verde-desktop-16x9.jpg` | 16:9 | 2400 × 1350 |
| 25.6 | `hero/lp-kit-solteiro-verde-mobile-4x5.jpg` | 4:5 | 1080 × 1350 |
| 26 | `detalhe/macro-capitone-botao-cristal-3x2.jpg` | 3:2 | 1600 × 1067 |
| 27 | `detalhe/macro-veludo-terracota-3x2.jpg` | 3:2 | 1600 × 1067 |
| 28 | `detalhe/macro-pe-madeira-3x2.jpg` | 3:2 | 1600 × 1067 |
| 29 | `detalhe/macro-matelasse-colchao-3x2.jpg` | 3:2 | 1600 × 1067 |
| 30 | `detalhe/macro-acabamento-base-3x2.jpg` | 3:2 | 1600 × 1067 |
| 31 | `detalhe/macro-tampa-bau-3x2.jpg` | 3:2 | 1600 × 1067 |
| 32.1 | `comparativo/topdown-solteiro-3x2.jpg` | 3:2 | 1600 × 1067 |
| 32.2 | `comparativo/topdown-casal-3x2.jpg` | 3:2 | 1600 × 1067 |
| 32.3 | `comparativo/topdown-queen-3x2.jpg` | 3:2 | 1600 × 1067 |
| 32.4 | `comparativo/topdown-king-3x2.jpg` | 3:2 | 1600 × 1067 |
| 33 | `comparativo/casal-vs-queen-mesmo-quarto-16x9.jpg` | 16:9 | 2000 × 1125 |
| 34.1 | `hero/linha-molas-ensacadas-16x9.jpg` | 16:9 | 2400 × 1350 |
| 34.2 | `hero/linha-anatomico-ortopedico-16x9.jpg` | 16:9 | 2400 × 1350 |
| 34.3 | `hero/linha-magnetico-16x9.jpg` | 16:9 | 2400 × 1350 |
| 35 | `produto/base-box-cinza-packshot-1x1.jpg` | 1:1 | 1400 × 1400 |
| 36 | `produto/base-com-bau-frontal-3x2.jpg` | 3:2 | 1600 × 1067 |
| 37 | `produto/cabeceira-vinho-packshot-1x1.jpg` | 1:1 | 1400 × 1400 |
| 38 | `ambiente/cabeceira-aplicada-parede-3x4.jpg` | 3:4 | 900 × 1200 |
| 39 | `produto/bau-bege-packshot-1x1.jpg` | 1:1 | 1400 × 1400 |
| 40.1 | `cores/swatch-bege-1x1.jpg` | 1:1 | 600 × 600 |
| 40.2 | `cores/swatch-cinza-1x1.jpg` | 1:1 | 600 × 600 |
| 40.3 | `cores/swatch-terracota-1x1.jpg` | 1:1 | 600 × 600 |
| 40.4 | `cores/swatch-caramelo-1x1.jpg` | 1:1 | 600 × 600 |
| 40.5 | `cores/swatch-marrom-1x1.jpg` | 1:1 | 600 × 600 |
| 40.6 | `cores/swatch-vinho-1x1.jpg` | 1:1 | 600 × 600 |
| 40.7 | `cores/swatch-vermelho-1x1.jpg` | 1:1 | 600 × 600 |
| 40.8 | `cores/swatch-rose-1x1.jpg` | 1:1 | 600 × 600 |
| 40.9 | `cores/swatch-mostarda-1x1.jpg` | 1:1 | 600 × 600 |
| 40.10 | `cores/swatch-verde-1x1.jpg` | 1:1 | 600 × 600 |
| 40.11 | `cores/swatch-azul-1x1.jpg` | 1:1 | 600 × 600 |
| 41 | `cores/aplicacao-cabeceiras-trio-3x2.jpg` | 3:2 | 1600 × 1067 |
| 42 | `ambiente/casal-escolhendo-quarto-16x9.jpg` | 16:9 | 2000 × 1125 |
| 43 | `detalhe/mao-testando-firmeza-3x2.jpg` | 3:2 | 1600 × 1067 |
| 44 | `ambiente/pes-descalcos-tapete-manha-3x2.jpg` | 3:2 | 1600 × 1067 |
| 45 | `institucional/atendimento-showroom-4x3.jpg` | 4:3 | 1200 × 900 |
| 46 | `institucional/showroom-corredor-cores-3x4.jpg` | 3:4 | 900 × 1200 |
| 47 | `ambiente/quarto-vazio-luz-404-4x3.jpg` | 4:3 | 1200 × 900 |
| 48.1 | `blog/capa-como-escolher-colchao-16x9.jpg` | 16:9 | 1600 × 900 |
| 48.2 | `blog/capa-tamanho-ideal-quarto-16x9.jpg` | 16:9 | 1600 × 900 |
| 48.3 | `blog/capa-cuidados-colchao-16x9.jpg` | 16:9 | 1600 × 900 |
| 48.4 | `blog/capa-quarto-acolhedor-16x9.jpg` | 16:9 | 1600 × 900 |
| 49 | `og/og-default-1200x630.jpg` | 1,91:1 | 1200 × 630 |
| 50 | `textura/linho-areia-2400.jpg` | livre | 2400 de largura |
| 51 | `textura/veludo-vinho-2400.jpg` | livre | 2400 de largura |
| 52.1 | `hero/linha-molas-ensacadas-mobile-4x5.jpg` | 4:5 | 1080 × 1350 |
| 52.2 | `hero/linha-anatomico-ortopedico-mobile-4x5.jpg` | 4:5 | 1080 × 1350 |
| 52.3 | `hero/linha-magnetico-mobile-4x5.jpg` | 4:5 | 1080 × 1350 |
| 53.1 | `cores/swatch-creme-1x1.jpg` | 1:1 | 600 × 600 |
| 53.2 | `cores/swatch-preto-1x1.jpg` | 1:1 | 600 × 600 |
| 54.1 | `hero/lp-campanha-marrom-desktop-16x9.jpg` | 16:9 | 2400 × 1350 |
| 54.2 | `hero/lp-campanha-marrom-mobile-4x5.jpg` | 4:5 | 1080 × 1350 |
| 55.1 | `detalhe/firmeza-macio-4x3.jpg` | 4:3 | 1200 × 900 |
| 55.2 | `detalhe/firmeza-intermediario-4x3.jpg` | 4:3 | 1200 × 900 |
| 55.3 | `detalhe/firmeza-firme-4x3.jpg` | 4:3 | 1200 × 900 |
| 55.4 | `detalhe/firmeza-extrafirme-4x3.jpg` | 4:3 | 1200 × 900 |
| 56.1 | `ambiente/rotina-noite-desktop-3x2.jpg` | 3:2 | 1600 × 1067 |
| 56.2 | `ambiente/rotina-noite-mobile-4x5.jpg` | 4:5 | 1080 × 1350 |
| 57.1 | `ambiente/acordar-cansado-4x3.jpg` | 4:3 | 1200 × 900 |

**Total: 88 imagens.**

---

# BLOCO A — PROMPT-BASE DE CONSISTÊNCIA

Este bloco já está embutido no início de cada um dos prompts abaixo. Está reproduzido aqui inteiro para consulta e para o caso de você querer enviá-lo uma única vez, antes do lote.

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

# BLOCO B — OS PROMPTS

---

## 01 · `hero/hero-home-king-cinza-desktop-21x9.jpg`

- **Número:** 01
- **Nome do arquivo:** `hero/hero-home-king-cinza-desktop-21x9.jpg`
- **Proporção:** 21:9
- **Resolução:** 2560 × 1097

**Prompt completo:**

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

IMAGE 01 — hero/hero-home-king-cinza-desktop-21x9.jpg — aspect ratio 21:9 — 2560×1097 px

Wide editorial interior photograph of a contemporary Brazilian master bedroom at late afternoon. The complete Kanak bed set in charcoal grey velvet occupies the right 55% of the frame: tufted headboard with crystal-look buttons against a light slatted wood panel, off-white pillow-top mattress with visible upper band, matching storage bench at the foot with a long soft shadow across a pale wool rug, honey oak floor. The left third of the frame is an empty plain warm-white plaster wall with soft light falloff and no objects. A linen curtain filters warm window light from the right; a small warm lamp glows in the background. Three-quarter view from the left foot of the bed, camera at 110 cm, 35 mm, f/5.6, straight verticals. Calm, quiet, premium, generous negative space on the left.
```

---

## 02 · `hero/hero-home-king-cinza-mobile-4x5.jpg`

- **Número:** 02
- **Nome do arquivo:** `hero/hero-home-king-cinza-mobile-4x5.jpg`
- **Proporção:** 4:5
- **Resolução:** 1080 × 1350

**Prompt completo:**

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

IMAGE 02 — hero/hero-home-king-cinza-mobile-4x5.jpg — aspect ratio 4:5 — 1080×1350 px

Vertical interior photograph of the same contemporary bedroom and the same charcoal grey Kanak bed set, reframed for a phone screen. The bed occupies the lower 60% of the frame, seen three-quarter from the left foot; the tufted headboard and the upper half of the off-white pillow-top mattress are fully visible, the storage bench is cropped by the bottom edge. The upper 40% is an empty warm-white plaster wall with soft gradient light and no objects. Same late-afternoon window light from the right, same warm lamp glow. 50 mm, f/5.6, camera at 130 cm, straight verticals, calm and premium.
```

---

## 03 · `produto/kit-completo-bege-packshot-1x1.jpg`

- **Número:** 03
- **Nome do arquivo:** `produto/kit-completo-bege-packshot-1x1.jpg`
- **Proporção:** 1:1
- **Resolução:** 1400 × 1400

**Prompt completo:**

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

IMAGE 03 — produto/kit-completo-bege-packshot-1x1.jpg — aspect ratio 1:1 — 1400×1400 px

Studio packshot of the complete Kanak bed set in beige velvet on a seamless warm sand background. The set is shown as one composition: box base with honey oak legs, diamond-tufted headboard with crystal-look buttons, off-white quilted mattress without pillow top, matching tufted storage bench at the foot, and four beige velvet pillows — two resting against the headboard, two stacked beside it. Classic three-quarter catalogue angle, 20 degrees to the left, camera at 100 cm, 50 mm, f/8. Large soft key light from the left, subtle fill from the right, short realistic contact shadow under the base and bench. No room, no floor pattern, no props, 12% margin around the product.
```

---

## 04 · `ambiente/tamanho-solteiro-verde-card-4x3.jpg`

- **Número:** 04
- **Nome do arquivo:** `ambiente/tamanho-solteiro-verde-card-4x3.jpg`
- **Proporção:** 4:3
- **Resolução:** 1200 × 900

**Prompt completo:**

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

IMAGE 04 — ambiente/tamanho-solteiro-verde-card-4x3.jpg — aspect ratio 4:3 — 1200×900 px

Interior photograph of a small adult bedroom with the Kanak single-size (solteiro) bed set in olive green velvet: tufted headboard with crystal-look buttons, off-white quilted mattress, matching tufted storage bench at the foot, honey oak legs. The bed sits against the right-hand wall; a narrow bedside table, a simple wall shelf and a linen curtain complete the room; free floor space is visible in front of the bed to show the compact footprint. Three-quarter view from the right foot, camera at 120 cm, 35 mm, f/5.6. Warm late-afternoon light from a window on the left, soft shadow on the light oak floor. Calm, adult, uncluttered — not a child's room.
```

---

## 05 · `ambiente/tamanho-casal-terracota-card-4x3.jpg`

- **Número:** 05
- **Nome do arquivo:** `ambiente/tamanho-casal-terracota-card-4x3.jpg`
- **Proporção:** 4:3
- **Resolução:** 1200 × 900

**Prompt completo:**

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

IMAGE 05 — ambiente/tamanho-casal-terracota-card-4x3.jpg — aspect ratio 4:3 — 1200×900 px

Interior photograph of a balanced couple's bedroom with the Kanak double-size (casal) bed set in terracotta velvet: diamond-tufted headboard with crystal-look buttons, off-white quilted mattress, matching tufted storage bench at the foot, honey oak legs. Symmetrical composition: matching slim bedside tables on both sides, subtle painted boiserie panelling on the wall behind, pale rug under the foot of the bed, beige curtain. Nearly frontal view offset 10 degrees to the right, camera at 125 cm, 35 mm, f/5.6. Diffused late-afternoon light from the right plus warm indirect cove lighting on the ceiling. Serene and grown-up.
```

---

## 06 · `ambiente/tamanho-queen-vinho-card-4x3.jpg`

- **Número:** 06
- **Nome do arquivo:** `ambiente/tamanho-queen-vinho-card-4x3.jpg`
- **Proporção:** 4:3
- **Resolução:** 1200 × 900

**Prompt completo:**

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

IMAGE 06 — ambiente/tamanho-queen-vinho-card-4x3.jpg — aspect ratio 4:3 — 1200×900 px

Interior photograph of a spacious master bedroom with the Kanak queen-size bed set in deep wine velvet: diamond-tufted headboard with crystal-look buttons, off-white quilted mattress, matching tufted storage bench at the foot, honey oak legs. The bed sits slightly left of centre; a simple reading armchair occupies the right corner; a wool rug and a long linen curtain complete the room; generous circulation space in front of the bed. Three-quarter view from the left foot, camera at 120 cm, 35 mm, f/5.6. Late-afternoon light from a wide window on the left, long soft shadow from the bench. Warm, roomy, restrained.
```

---

## 07 · `ambiente/tamanho-king-mostarda-card-4x3.jpg`

- **Número:** 07
- **Nome do arquivo:** `ambiente/tamanho-king-mostarda-card-4x3.jpg`
- **Proporção:** 4:3
- **Resolução:** 1200 × 900

**Prompt completo:**

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

IMAGE 07 — ambiente/tamanho-king-mostarda-card-4x3.jpg — aspect ratio 4:3 — 1200×900 px

Interior photograph of a large master suite with the Kanak king-size bed set in muted mustard velvet: diamond-tufted headboard with crystal-look buttons, off-white quilted mattress, matching tufted storage bench at the foot, honey oak legs. The bed dominates the frame in a high-ceilinged room with a slatted wood panel behind the headboard, floor-length double curtains and a large pale rug. Three-quarter view from the right foot, camera at 115 cm, 35 mm, f/5.6. Strong warm late-afternoon side light grazing the velvet to reveal its nap. Spacious, top-of-the-range, quiet luxury.
```

---

## 08 · `produto/linha-molas-ensacadas-1x1.jpg`

- **Número:** 08
- **Nome do arquivo:** `produto/linha-molas-ensacadas-1x1.jpg`
- **Proporção:** 1:1
- **Resolução:** 1400 × 1400

**Prompt completo:**

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

IMAGE 08 — produto/linha-molas-ensacadas-1x1.jpg — aspect ratio 1:1 — 1400×1400 px

Studio product photograph of a single Kanak mattress on a seamless warm sand background, no base, no bed frame. Off-white quilted ticking with tone-on-tone diamond stitching and a subtle damask motif, rounded corners, thin champagne piping along the edges, small round side vents, uniform single height with no pillow-top band. A loosely folded linen sheet rests at the foot for scale and texture. Three-quarter view rotated 25 degrees to the right, camera at 70 cm so both the top surface and the side panel are visible, 50 mm, f/8. Large soft key from the left, grazing light revealing the quilting relief, short realistic contact shadow.
```

---

## 09 · `produto/linha-anatomico-ortopedico-1x1.jpg`

- **Número:** 09
- **Nome do arquivo:** `produto/linha-anatomico-ortopedico-1x1.jpg`
- **Proporção:** 1:1
- **Resolução:** 1400 × 1400

**Prompt completo:**

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

IMAGE 09 — produto/linha-anatomico-ortopedico-1x1.jpg — aspect ratio 1:1 — 1400×1400 px

Studio product photograph of a single Kanak pillow-top mattress on a seamless warm sand background, framed exactly like the previous mattress image: same position, same 25-degree three-quarter rotation to the right, same camera height of 70 cm, same lighting, same 15% margin. Off-white quilted ticking with tone-on-tone diamond stitching, rounded corners, thin champagne piping, small round side vents, and one clearly visible pillow-top band along the upper edge that distinguishes it from the single-height version. 50 mm, f/8, large soft key from the left, grazing light on the quilting, short contact shadow.
```

---

## 10 · `produto/linha-magnetico-1x1.jpg`

- **Número:** 10
- **Nome do arquivo:** `produto/linha-magnetico-1x1.jpg`
- **Proporção:** 1:1
- **Resolução:** 1400 × 1400

**Prompt completo:**

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

IMAGE 10 — produto/linha-magnetico-1x1.jpg — aspect ratio 1:1 — 1400×1400 px

Studio product photograph of a single Kanak pillow-top mattress on a seamless warm sand background with a very subtle terracotta gradient in the lower right corner. Framed exactly like the two previous mattress images: same 25-degree three-quarter rotation to the right, same camera height of 70 cm, same soft key from the left, same 15% margin. Off-white quilted ticking with tone-on-tone diamond stitching, rounded corners, thin champagne piping, small round side vents, one visible pillow-top band. 50 mm, f/8, grazing light on the quilting, short contact shadow.
```

---

## 11 · `ambiente/cores-trio-bege-terracota-cinza-16x9.jpg`

- **Número:** 11
- **Nome do arquivo:** `ambiente/cores-trio-bege-terracota-cinza-16x9.jpg`
- **Proporção:** 16:9
- **Resolução:** 2000 × 1125

**Prompt completo:**

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

IMAGE 11 — ambiente/cores-trio-bege-terracota-cinza-16x9.jpg — aspect ratio 16:9 — 2000×1125 px

Wide interior photograph of a clean, spacious showroom floor with three identical Kanak bed sets standing in a row — one in beige velvet, one in terracotta velvet, one in charcoal grey velvet. Each set is complete: tufted headboard with crystal-look buttons, off-white quilted mattress, matching tufted storage bench at the foot, honey oak legs. The beds are staggered slightly in depth with equal spacing, all headboards at the same height, against a plain warm-white wall on a light oak floor. Slight three-quarter view, 15 degrees to the left, camera at 130 cm, 35 mm, f/8. Even, diffused late-afternoon light with no hard shadows between the beds. Upper 20% of the frame is empty wall.
```

---

## 12 · `textura/roupa-de-cama-manha-3x2.jpg`

- **Número:** 12
- **Nome do arquivo:** `textura/roupa-de-cama-manha-3x2.jpg`
- **Proporção:** 3:2
- **Resolução:** 1600 × 1067

**Prompt completo:**

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

IMAGE 12 — textura/roupa-de-cama-manha-3x2.jpg — aspect ratio 3:2 — 1600×1067 px

Close editorial photograph of rumpled off-white bed linen in warm morning light, no people. A cream sheet and a soft knitted throw fall diagonally across the frame; a pillow still holds a gentle indentation; the corner of the off-white quilted Kanak mattress and a strip of terracotta velvet from the base are visible at the right edge. High angle, about 45 degrees down, 50 mm, f/2.8, shallow depth of field on the far side. Soft side light from a window with small controlled highlights. The left half of the frame is calm, low-contrast fabric with room for text.
```

---

## 13 · `institucional/showroom-panoramico-4x3.jpg`

- **Número:** 13
- **Nome do arquivo:** `institucional/showroom-panoramico-4x3.jpg`
- **Proporção:** 4:3
- **Resolução:** 1200 × 900

**Prompt completo:**

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

IMAGE 13 — institucional/showroom-panoramico-4x3.jpg — aspect ratio 4:3 — 1200×900 px

Interior photograph of a spacious, tidy bed showroom with four or five complete Kanak bed sets receding in perspective — beige, terracotta, charcoal grey, wine and green velvet — each with tufted headboard, off-white quilted mattress and matching storage bench. Wide central aisle, light oak floor, warm white walls, warm recessed ceiling lighting and daylight coming from a shop window at the far end. Three-quarter view down the aisle, camera at 150 cm, 28 mm, f/8, straight verticals. Calm, professional, uncluttered.
```

---

## 14 · `hero/cta-final-quarto-entardecer-desktop-21x9.jpg`

- **Número:** 14
- **Nome do arquivo:** `hero/cta-final-quarto-entardecer-desktop-21x9.jpg`
- **Proporção:** 21:9
- **Resolução:** 2560 × 1097

**Prompt completo:**

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

IMAGE 14 — hero/cta-final-quarto-entardecer-desktop-21x9.jpg — aspect ratio 21:9 — 2560×1097 px

Wide atmospheric photograph of a bedroom corner at dusk, intentionally soft and low in contrast, meant to sit behind text. A complete Kanak bed set in wine velvet is visible on the right, clearly out of focus; the left side is a warm plaster wall catching the last daylight. A warm bedside lamp is lit; a linen curtain is half drawn. 35 mm, f/2.8, focus on the wall, strong background blur, camera at 140 cm. Deep warm shadows, muted mid-tones, no bright highlights, no detail competing for attention in the central 60% of the frame.
```

---

## 15 · `hero/cta-final-quarto-entardecer-mobile-4x5.jpg`

- **Número:** 15
- **Nome do arquivo:** `hero/cta-final-quarto-entardecer-mobile-4x5.jpg`
- **Proporção:** 4:5
- **Resolução:** 1080 × 1350

**Prompt completo:**

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

IMAGE 15 — hero/cta-final-quarto-entardecer-mobile-4x5.jpg — aspect ratio 4:5 — 1080×1350 px

Vertical atmospheric photograph of the same bedroom corner at dusk, same wine velvet Kanak bed set, same warm bedside lamp, recomposed for a phone screen: the out-of-focus bed occupies the lower third, the upper two thirds are a warm plaster wall with soft gradient light and no detail. 35 mm, f/2.8, camera at 140 cm, deep warm shadows, muted mid-tones, nothing high-contrast in the upper area.
```

---

## 16 · `hero/lp-kit-king-terracota-desktop-16x9.jpg`

- **Número:** 16
- **Nome do arquivo:** `hero/lp-kit-king-terracota-desktop-16x9.jpg`
- **Proporção:** 16:9
- **Resolução:** 2400 × 1350

**Prompt completo:**

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

IMAGE 16 — hero/lp-kit-king-terracota-desktop-16x9.jpg — aspect ratio 16:9 — 2400×1350 px

Wide interior photograph of a warm master bedroom with the complete Kanak king-size bed set in terracotta velvet, made up and ready: diamond-tufted headboard with crystal-look buttons, off-white pillow-top mattress with cream bedding, matching tufted storage bench closed at the foot, honey oak legs. The bed occupies the right 60% of the frame against subtle painted boiserie panelling; the left 40% is an empty warm-white wall. Linen curtain, pale rug, small bedside plant. Three-quarter view from the left foot, camera at 115 cm, 35 mm, f/5.6. Late-afternoon window light from the right grazing the velvet nap. Inviting, complete, premium.
```

---

## 17 · `hero/lp-kit-king-terracota-mobile-4x5.jpg`

- **Número:** 17
- **Nome do arquivo:** `hero/lp-kit-king-terracota-mobile-4x5.jpg`
- **Proporção:** 4:5
- **Resolução:** 1080 × 1350

**Prompt completo:**

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

IMAGE 17 — hero/lp-kit-king-terracota-mobile-4x5.jpg — aspect ratio 4:5 — 1080×1350 px

Vertical interior photograph of the same terracotta velvet Kanak king-size bed set in the same boiserie bedroom, recomposed for a phone screen: the tufted headboard, the pillows and the upper half of the off-white pillow-top mattress fill the lower 55% of the frame; the storage bench is cropped at the bottom edge; the upper 45% is an empty warm-white wall with soft gradient light. Three-quarter view, camera at 125 cm, 50 mm, f/5.6, same late-afternoon light from the right.
```

---

## 18 · `produto/kit-composicao-explodida-terracota-1x1.jpg`

- **Número:** 18
- **Nome do arquivo:** `produto/kit-composicao-explodida-terracota-1x1.jpg`
- **Proporção:** 1:1
- **Resolução:** 1400 × 1400

**Prompt completo:**

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

IMAGE 18 — produto/kit-composicao-explodida-terracota-1x1.jpg — aspect ratio 1:1 — 1400×1400 px

Studio composition on a seamless warm sand background showing the four parts of the Kanak kit laid out separately, like an organised inventory: the diamond-tufted terracotta velvet headboard standing upright at the back, the off-white pillow-top mattress lying in perspective on the left, the closed tufted storage bench on the right, and four terracotta velvet pillows stacked at the front. Clear empty space between the pieces. Elevated three-quarter view, camera at 160 cm looking slightly down, 50 mm, f/8. Large soft key from the upper left, realistic contact shadows under each piece. No text, no numbers, no labels.
```

---

## 19 · `detalhe/bau-aberto-terracota-4x3.jpg`

- **Número:** 19
- **Nome do arquivo:** `detalhe/bau-aberto-terracota-4x3.jpg`
- **Proporção:** 4:3
- **Resolução:** 1200 × 900

**Prompt completo:**

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

IMAGE 19 — detalhe/bau-aberto-terracota-4x3.jpg — aspect ratio 4:3 — 1200×900 px

Interior photograph of the Kanak storage bench in terracotta velvet with its diamond-tufted lid lifted open, revealing a neatly folded stack of cream and beige bed linen inside. The bench stands on a pale rug at the foot of the bed; the base of the bed is visible and out of focus behind it. Three-quarter front view, camera at 90 cm, 50 mm, f/4. Warm side window light falling into the open compartment without blowing out the light linen. Honest, functional, tidy.
```

---

## 20 · `comparativo/tamanhos-topdown-16x9.jpg`

- **Número:** 20
- **Nome do arquivo:** `comparativo/tamanhos-topdown-16x9.jpg`
- **Proporção:** 16:9
- **Resolução:** 2000 × 1125

**Prompt completo:**

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

IMAGE 20 — comparativo/tamanhos-topdown-16x9.jpg — aspect ratio 16:9 — 2000×1125 px

Perfectly flat top-down studio photograph of four Kanak mattresses on a seamless warm sand background, lined up side by side from smallest to largest and aligned along their bottom edge, with equal gaps between them and correct relative scale. All four share the same off-white quilted ticking with tone-on-tone diamond stitching and thin champagne piping. Orthographic 90-degree overhead view with no perspective distortion, even diffused lighting, minimal contact shadow, no background gradient. Lower 15% of the frame left empty.
```

---

## 21 · `comparativo/espaco-no-quarto-king-16x9.jpg`

- **Número:** 21
- **Nome do arquivo:** `comparativo/espaco-no-quarto-king-16x9.jpg`
- **Proporção:** 16:9
- **Resolução:** 2000 × 1125

**Prompt completo:**

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

IMAGE 21 — comparativo/espaco-no-quarto-king-16x9.jpg — aspect ratio 16:9 — 2000×1125 px

Elevated wide interior photograph of a nearly empty neutral bedroom seen from a high corner, showing the complete Kanak king-size bed set in charcoal grey velvet placed against the far wall with clear free floor space on both sides and at the foot of the bed. Minimal furniture so the room reads as space, not decoration: light oak floor, warm white walls, one window with a linen curtain. Camera at 220 cm tilted 30 degrees down, 24 mm with corrected perspective and straight verticals, f/8. Soft diffused daylight, gentle shadows marking the free floor area. Upper left corner left empty.
```

---

## 22 · `comparativo/pillow-top-vs-sem-pillow-top-3x2.jpg`

- **Número:** 22
- **Nome do arquivo:** `comparativo/pillow-top-vs-sem-pillow-top-3x2.jpg`
- **Proporção:** 3:2
- **Resolução:** 1600 × 1067

**Prompt completo:**

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

IMAGE 22 — comparativo/pillow-top-vs-sem-pillow-top-3x2.jpg — aspect ratio 3:2 — 1600×1067 px

Straight side-profile studio photograph of two Kanak mattresses standing side by side on a seamless warm sand background, aligned along their bottom edge with an equal gap between them. The left one is a single-height quilted mattress; the right one is the same mattress with one clearly visible pillow-top band along the upper edge, making it taller. Both share identical off-white quilted ticking, rounded corners, champagne piping and side vents. Exact 0-degree profile view, camera level with the middle of the mattresses, 85 mm, f/8. Soft side light separating the layers, no hard shadow between the two, lower 18% of the frame empty.
```

---

## 23 · `detalhe/macro-pillow-top-vies-3x2.jpg`

- **Número:** 23
- **Nome do arquivo:** `detalhe/macro-pillow-top-vies-3x2.jpg`
- **Proporção:** 3:2
- **Resolução:** 1600 × 1067

**Prompt completo:**

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

IMAGE 23 — detalhe/macro-pillow-top-vies-3x2.jpg — aspect ratio 3:2 — 1600×1067 px

Macro photograph of the edge of a Kanak pillow-top mattress: the junction between the pillow-top band and the main body, showing the thin champagne piping, the stitch line and the tone-on-tone quilting texture of the off-white ticking. The piping runs diagonally across the frame from lower left to upper right. About 20 cm of product fills the frame. 100 mm macro, f/2.8, camera level with the piping, strong grazing light from the left at 80 degrees revealing the relief of every stitch, warm soft shadow, shallow depth of field falling off to the right.
```

---

## 24 · `og/og-lp-kit-1200x630.jpg`

- **Número:** 24
- **Nome do arquivo:** `og/og-lp-kit-1200x630.jpg`
- **Proporção:** 1,91:1
- **Resolução:** 1200 × 630

**Prompt completo:**

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

IMAGE 24 — og/og-lp-kit-1200x630.jpg — aspect ratio 1,91:1 — 1200×630 px

Horizontal photograph optimised for a small social preview: the complete Kanak king-size bed set in terracotta velvet fills about 70% of the frame, closer than a hero shot, with the tufted headboard, the made-up off-white pillow-top mattress and the closed storage bench all clearly readable. Simplified background: warm-white wall, linen curtain, pale rug, nothing else. Three-quarter front view, camera at 120 cm, 50 mm, f/5.6, warm late-afternoon light, slightly brighter and more contrasted than a normal interior shot so it survives compression. Lower left area kept simple.
```

---

## 25.1 · `hero/lp-kit-queen-vinho-desktop-16x9.jpg`

- **Número:** 25.1
- **Nome do arquivo:** `hero/lp-kit-queen-vinho-desktop-16x9.jpg`
- **Proporção:** 16:9
- **Resolução:** 2400 × 1350

**Prompt completo:**

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

IMAGE 25.1 — hero/lp-kit-queen-vinho-desktop-16x9.jpg — aspect ratio 16:9 — 2400×1350 px

Interior photograph of a spacious master bedroom with the complete Kanak queen-size bed set in deep wine velvet, made up and ready: diamond-tufted headboard with crystal-look buttons, off-white pillow-top mattress with cream bedding, matching tufted storage bench closed at the foot, honey oak legs. The bed occupies the right 60% of the frame; the left 40% is an empty warm-white wall. Three-quarter view from the left foot of the bed, camera at 115 cm, 35 mm, f/5.6, straight verticals. Late-afternoon window light from the right grazing the velvet nap, warm and soft, identical to the other bed images in the series.
```

---

## 25.2 · `hero/lp-kit-queen-vinho-mobile-4x5.jpg`

- **Número:** 25.2
- **Nome do arquivo:** `hero/lp-kit-queen-vinho-mobile-4x5.jpg`
- **Proporção:** 4:5
- **Resolução:** 1080 × 1350

**Prompt completo:**

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

IMAGE 25.2 — hero/lp-kit-queen-vinho-mobile-4x5.jpg — aspect ratio 4:5 — 1080×1350 px

Interior photograph of a spacious master bedroom with the complete Kanak queen-size bed set in deep wine velvet, made up and ready: diamond-tufted headboard with crystal-look buttons, off-white pillow-top mattress with cream bedding, matching tufted storage bench closed at the foot, honey oak legs. The headboard and the upper half of the mattress fill the lower 55% of the frame, the bench is cropped at the bottom edge, and the upper 45% is an empty warm-white wall. Three-quarter view from the left foot of the bed, camera at 125 cm, 50 mm, f/5.6, straight verticals. Late-afternoon window light from the right grazing the velvet nap, warm and soft, identical to the other bed images in the series.
```

---

## 25.3 · `hero/lp-kit-casal-bege-desktop-16x9.jpg`

- **Número:** 25.3
- **Nome do arquivo:** `hero/lp-kit-casal-bege-desktop-16x9.jpg`
- **Proporção:** 16:9
- **Resolução:** 2400 × 1350

**Prompt completo:**

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

IMAGE 25.3 — hero/lp-kit-casal-bege-desktop-16x9.jpg — aspect ratio 16:9 — 2400×1350 px

Interior photograph of a medium symmetrical bedroom with the complete Kanak double-size (casal) bed set in beige velvet, made up and ready: diamond-tufted headboard with crystal-look buttons, off-white pillow-top mattress with cream bedding, matching tufted storage bench closed at the foot, honey oak legs. The bed occupies the right 60% of the frame; the left 40% is an empty warm-white wall. Three-quarter view from the left foot of the bed, camera at 115 cm, 35 mm, f/5.6, straight verticals. Late-afternoon window light from the right grazing the velvet nap, warm and soft, identical to the other bed images in the series.
```

---

## 25.4 · `hero/lp-kit-casal-bege-mobile-4x5.jpg`

- **Número:** 25.4
- **Nome do arquivo:** `hero/lp-kit-casal-bege-mobile-4x5.jpg`
- **Proporção:** 4:5
- **Resolução:** 1080 × 1350

**Prompt completo:**

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

IMAGE 25.4 — hero/lp-kit-casal-bege-mobile-4x5.jpg — aspect ratio 4:5 — 1080×1350 px

Interior photograph of a medium symmetrical bedroom with the complete Kanak double-size (casal) bed set in beige velvet, made up and ready: diamond-tufted headboard with crystal-look buttons, off-white pillow-top mattress with cream bedding, matching tufted storage bench closed at the foot, honey oak legs. The headboard and the upper half of the mattress fill the lower 55% of the frame, the bench is cropped at the bottom edge, and the upper 45% is an empty warm-white wall. Three-quarter view from the left foot of the bed, camera at 125 cm, 50 mm, f/5.6, straight verticals. Late-afternoon window light from the right grazing the velvet nap, warm and soft, identical to the other bed images in the series.
```

---

## 25.5 · `hero/lp-kit-solteiro-verde-desktop-16x9.jpg`

- **Número:** 25.5
- **Nome do arquivo:** `hero/lp-kit-solteiro-verde-desktop-16x9.jpg`
- **Proporção:** 16:9
- **Resolução:** 2400 × 1350

**Prompt completo:**

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

IMAGE 25.5 — hero/lp-kit-solteiro-verde-desktop-16x9.jpg — aspect ratio 16:9 — 2400×1350 px

Interior photograph of a compact adult bedroom with the complete Kanak single-size (solteiro) bed set in olive green velvet, made up and ready: diamond-tufted headboard with crystal-look buttons, off-white pillow-top mattress with cream bedding, matching tufted storage bench closed at the foot, honey oak legs. The bed occupies the right 60% of the frame; the left 40% is an empty warm-white wall. Three-quarter view from the left foot of the bed, camera at 115 cm, 35 mm, f/5.6, straight verticals. Late-afternoon window light from the right grazing the velvet nap, warm and soft, identical to the other bed images in the series.
```

---

## 25.6 · `hero/lp-kit-solteiro-verde-mobile-4x5.jpg`

- **Número:** 25.6
- **Nome do arquivo:** `hero/lp-kit-solteiro-verde-mobile-4x5.jpg`
- **Proporção:** 4:5
- **Resolução:** 1080 × 1350

**Prompt completo:**

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

IMAGE 25.6 — hero/lp-kit-solteiro-verde-mobile-4x5.jpg — aspect ratio 4:5 — 1080×1350 px

Interior photograph of a compact adult bedroom with the complete Kanak single-size (solteiro) bed set in olive green velvet, made up and ready: diamond-tufted headboard with crystal-look buttons, off-white pillow-top mattress with cream bedding, matching tufted storage bench closed at the foot, honey oak legs. The headboard and the upper half of the mattress fill the lower 55% of the frame, the bench is cropped at the bottom edge, and the upper 45% is an empty warm-white wall. Three-quarter view from the left foot of the bed, camera at 125 cm, 50 mm, f/5.6, straight verticals. Late-afternoon window light from the right grazing the velvet nap, warm and soft, identical to the other bed images in the series.
```

---

## 26 · `detalhe/macro-capitone-botao-cristal-3x2.jpg`

- **Número:** 26
- **Nome do arquivo:** `detalhe/macro-capitone-botao-cristal-3x2.jpg`
- **Proporção:** 3:2
- **Resolução:** 1600 × 1067

**Prompt completo:**

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

IMAGE 26 — detalhe/macro-capitone-botao-cristal-3x2.jpg — aspect ratio 3:2 — 1600×1067 px

Macro photograph of the diamond capitonê tufting on a Kanak headboard in terracotta velvet: three small faceted crystal-look buttons running diagonally from lower left to upper right, with the deep radial folds of velvet pulling into each button. About 15 cm of product fills the frame. 100 mm macro, f/2.8, camera tilted 20 degrees to the surface, strong grazing side light revealing the nap of the velvet and one small controlled sparkle on a crystal facet, warm soft shadows, shallow depth of field.
```

---

## 27 · `detalhe/macro-veludo-terracota-3x2.jpg`

- **Número:** 27
- **Nome do arquivo:** `detalhe/macro-veludo-terracota-3x2.jpg`
- **Proporção:** 3:2
- **Resolução:** 1600 × 1067

**Prompt completo:**

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

IMAGE 27 — detalhe/macro-veludo-terracota-3x2.jpg — aspect ratio 3:2 — 1600×1067 px

Macro photograph of matte suede-like terracotta velvet upholstery with a single soft diagonal fold crossing the frame. The nap of the fabric shifts tone where the fold turns, two thirds of the frame in light and one third falling into warm shadow. About 25 cm of fabric fills the frame. 100 mm macro, f/4, camera almost parallel to the surface, grazing light at 85 degrees revealing the texture of every fibre. No stitching, no buttons, no seams — pure material.
```

---

## 28 · `detalhe/macro-pe-madeira-3x2.jpg`

- **Número:** 28
- **Nome do arquivo:** `detalhe/macro-pe-madeira-3x2.jpg`
- **Proporção:** 3:2
- **Resolução:** 1600 × 1067

**Prompt completo:**

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

IMAGE 28 — detalhe/macro-pe-madeira-3x2.jpg — aspect ratio 3:2 — 1600×1067 px

Low-angle detail photograph of one turned tapered honey oak leg of a Kanak box base, slightly angled outward, where it meets the charcoal grey velvet of the base. The leg sits in the right third of the frame on a light oak floor, with a soft elongated contact shadow; the floor behind is out of focus. Camera 20 cm above the floor tilted slightly up, 85 mm, f/2.8, warm side light. The left third is soft, low-contrast blur.
```

---

## 29 · `detalhe/macro-matelasse-colchao-3x2.jpg`

- **Número:** 29
- **Nome do arquivo:** `detalhe/macro-matelasse-colchao-3x2.jpg`
- **Proporção:** 3:2
- **Resolução:** 1600 × 1067

**Prompt completo:**

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

IMAGE 29 — detalhe/macro-matelasse-colchao-3x2.jpg — aspect ratio 3:2 — 1600×1067 px

Macro photograph of the top surface of a Kanak mattress: off-white quilted ticking with tone-on-tone diamond stitching and a subtle damask motif, the stitch lines running in a soft diagonal across the frame. About 30 cm of fabric fills the frame. 100 mm macro, f/4, camera at 30 degrees to the surface, strong grazing light at 80 degrees maximising the quilted relief without blowing out the white, warm soft shadows in the valleys of the quilting.
```

---

## 30 · `detalhe/macro-acabamento-base-3x2.jpg`

- **Número:** 30
- **Nome do arquivo:** `detalhe/macro-acabamento-base-3x2.jpg`
- **Proporção:** 3:2
- **Resolução:** 1600 × 1067

**Prompt completo:**

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

IMAGE 30 — detalhe/macro-acabamento-base-3x2.jpg — aspect ratio 3:2 — 1600×1067 px

Macro photograph of the side panel of a Kanak box base in beige velvet, showing the single continuous horizontal seam that runs along the panel and one small discreet round matte metal stud set into the fabric on the right. About 35 cm of product fills the frame; a sliver of out-of-focus light oak floor appears at the very bottom edge. 100 mm macro, f/4, camera 40 cm above the floor facing the panel straight on, warm side light with a contained highlight on the metal.
```

---

## 31 · `detalhe/macro-tampa-bau-3x2.jpg`

- **Número:** 31
- **Nome do arquivo:** `detalhe/macro-tampa-bau-3x2.jpg`
- **Proporção:** 3:2
- **Resolução:** 1600 × 1067

**Prompt completo:**

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

IMAGE 31 — detalhe/macro-tampa-bau-3x2.jpg — aspect ratio 3:2 — 1600×1067 px

Macro photograph of the edge of a Kanak storage bench lid in wine velvet, lifted just a few centimetres so a narrow gap appears between the diamond-tufted lid and the plain body, revealing a glimpse of the pale natural interior lining. The lid crosses the frame horizontally. About 40 cm of product fills the frame. 100 mm macro, f/4, three-quarter side view, camera at 70 cm, warm side light reaching into the gap without blowing out the lining.
```

---

## 32.1 · `comparativo/topdown-solteiro-3x2.jpg`

- **Número:** 32.1
- **Nome do arquivo:** `comparativo/topdown-solteiro-3x2.jpg`
- **Proporção:** 3:2
- **Resolução:** 1600 × 1067

**Prompt completo:**

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

IMAGE 32.1 — comparativo/topdown-solteiro-3x2.jpg — aspect ratio 3:2 — 1600×1067 px

Perfectly flat top-down studio photograph of a single Kanak single (solteiro) mattress centred on a seamless warm sand background with equal margins on all four sides. Off-white quilted ticking with tone-on-tone diamond stitching, rounded corners, thin champagne piping. Orthographic 90-degree overhead view with no perspective distortion, even diffused lighting, minimal contact shadow, no gradient, no props, nothing else in the frame. The proportions of the rectangle must be faithful to the real measurements: 88 × 188 cm.
```

---

## 32.2 · `comparativo/topdown-casal-3x2.jpg`

- **Número:** 32.2
- **Nome do arquivo:** `comparativo/topdown-casal-3x2.jpg`
- **Proporção:** 3:2
- **Resolução:** 1600 × 1067

**Prompt completo:**

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

IMAGE 32.2 — comparativo/topdown-casal-3x2.jpg — aspect ratio 3:2 — 1600×1067 px

Perfectly flat top-down studio photograph of a single Kanak double (casal) mattress centred on a seamless warm sand background with equal margins on all four sides. Off-white quilted ticking with tone-on-tone diamond stitching, rounded corners, thin champagne piping. Orthographic 90-degree overhead view with no perspective distortion, even diffused lighting, minimal contact shadow, no gradient, no props, nothing else in the frame. The proportions of the rectangle must be faithful to the real measurements: 138 × 188 cm.
```

---

## 32.3 · `comparativo/topdown-queen-3x2.jpg`

- **Número:** 32.3
- **Nome do arquivo:** `comparativo/topdown-queen-3x2.jpg`
- **Proporção:** 3:2
- **Resolução:** 1600 × 1067

**Prompt completo:**

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

IMAGE 32.3 — comparativo/topdown-queen-3x2.jpg — aspect ratio 3:2 — 1600×1067 px

Perfectly flat top-down studio photograph of a single Kanak queen mattress centred on a seamless warm sand background with equal margins on all four sides. Off-white quilted ticking with tone-on-tone diamond stitching, rounded corners, thin champagne piping. Orthographic 90-degree overhead view with no perspective distortion, even diffused lighting, minimal contact shadow, no gradient, no props, nothing else in the frame. The proportions of the rectangle must be faithful to the real measurements: 158 × 198 cm.
```

---

## 32.4 · `comparativo/topdown-king-3x2.jpg`

- **Número:** 32.4
- **Nome do arquivo:** `comparativo/topdown-king-3x2.jpg`
- **Proporção:** 3:2
- **Resolução:** 1600 × 1067

**Prompt completo:**

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

IMAGE 32.4 — comparativo/topdown-king-3x2.jpg — aspect ratio 3:2 — 1600×1067 px

Perfectly flat top-down studio photograph of a single Kanak king mattress centred on a seamless warm sand background with equal margins on all four sides. Off-white quilted ticking with tone-on-tone diamond stitching, rounded corners, thin champagne piping. Orthographic 90-degree overhead view with no perspective distortion, even diffused lighting, minimal contact shadow, no gradient, no props, nothing else in the frame. The proportions of the rectangle must be faithful to the real measurements: 193 × 203 cm.
```

---

## 33 · `comparativo/casal-vs-queen-mesmo-quarto-16x9.jpg`

- **Número:** 33
- **Nome do arquivo:** `comparativo/casal-vs-queen-mesmo-quarto-16x9.jpg`
- **Proporção:** 16:9
- **Resolução:** 2000 × 1125

**Prompt completo:**

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

IMAGE 33 — comparativo/casal-vs-queen-mesmo-quarto-16x9.jpg — aspect ratio 16:9 — 2000×1125 px

Elevated interior photograph of an empty neutral room with two complete Kanak bed sets side by side, both in the same charcoal grey velvet and both fully made up: on the left a double (casal) size, on the right a queen size, headboards aligned against the same wall so the difference in width is immediately readable. Light oak floor, warm white walls, no other furniture. Camera at 200 cm tilted 20 degrees down, 28 mm with corrected perspective, f/8, even diffused daylight with no hard shadow between the beds. Upper 20% of the frame left empty.
```

---

## 34.1 · `hero/linha-molas-ensacadas-16x9.jpg`

- **Número:** 34.1
- **Nome do arquivo:** `hero/linha-molas-ensacadas-16x9.jpg`
- **Proporção:** 16:9
- **Resolução:** 2400 × 1350

**Prompt completo:**

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

IMAGE 34.1 — hero/linha-molas-ensacadas-16x9.jpg — aspect ratio 16:9 — 2400×1350 px

Interior photograph of a neutral, quietly furnished bedroom with a Kanak bed set in charcoal grey velvet, shown without bedding so the mattress finish is fully visible: diamond-tufted headboard with crystal-look buttons, a single-height off-white quilted mattress with no pillow-top band, matching tufted storage bench at the foot, honey oak legs. The bed occupies the right 55% of the frame; the left 40% is an empty warm-white wall. Three-quarter view from the left foot, camera at 110 cm, 35 mm, f/5.6, straight verticals. Late-afternoon window light from the right, identical across the series.
```

---

## 34.2 · `hero/linha-anatomico-ortopedico-16x9.jpg`

- **Número:** 34.2
- **Nome do arquivo:** `hero/linha-anatomico-ortopedico-16x9.jpg`
- **Proporção:** 16:9
- **Resolução:** 2400 × 1350

**Prompt completo:**

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

IMAGE 34.2 — hero/linha-anatomico-ortopedico-16x9.jpg — aspect ratio 16:9 — 2400×1350 px

Interior photograph of a neutral, quietly furnished bedroom with a Kanak bed set in beige velvet, shown without bedding so the mattress finish is fully visible: diamond-tufted headboard with crystal-look buttons, an off-white quilted mattress with one clearly visible pillow-top band, matching tufted storage bench at the foot, honey oak legs. The bed occupies the right 55% of the frame; the left 40% is an empty warm-white wall. Three-quarter view from the left foot, camera at 110 cm, 35 mm, f/5.6, straight verticals. Late-afternoon window light from the right, identical across the series.
```

---

## 34.3 · `hero/linha-magnetico-16x9.jpg`

- **Número:** 34.3
- **Nome do arquivo:** `hero/linha-magnetico-16x9.jpg`
- **Proporção:** 16:9
- **Resolução:** 2400 × 1350

**Prompt completo:**

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

IMAGE 34.3 — hero/linha-magnetico-16x9.jpg — aspect ratio 16:9 — 2400×1350 px

Interior photograph of a neutral, quietly furnished bedroom with a Kanak bed set in wine velvet, shown without bedding so the mattress finish is fully visible: diamond-tufted headboard with crystal-look buttons, an off-white quilted mattress with one clearly visible pillow-top band, matching tufted storage bench at the foot, honey oak legs. The bed occupies the right 55% of the frame; the left 40% is an empty warm-white wall. Three-quarter view from the left foot, camera at 110 cm, 35 mm, f/5.6, straight verticals. Late-afternoon window light from the right, identical across the series.
```

---

## 35 · `produto/base-box-cinza-packshot-1x1.jpg`

- **Número:** 35
- **Nome do arquivo:** `produto/base-box-cinza-packshot-1x1.jpg`
- **Proporção:** 1:1
- **Resolução:** 1400 × 1400

**Prompt completo:**

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

IMAGE 35 — produto/base-box-cinza-packshot-1x1.jpg — aspect ratio 1:1 — 1400×1400 px

Studio packshot of a Kanak box base alone, without mattress, on a seamless warm sand background: rectangular box fully upholstered in matte charcoal grey velvet, flat untufted panels, one continuous horizontal seam, one small discreet metal stud on the side, four turned tapered honey oak legs slightly angled outward. Three-quarter view rotated 25 degrees to the left, camera at 80 cm, 50 mm, f/8, large soft key from the left with a reflector on the right, grazing light on the velvet, short realistic contact shadow, 15% margin.
```

---

## 36 · `produto/base-com-bau-frontal-3x2.jpg`

- **Número:** 36
- **Nome do arquivo:** `produto/base-com-bau-frontal-3x2.jpg`
- **Proporção:** 3:2
- **Resolução:** 1600 × 1067

**Prompt completo:**

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

IMAGE 36 — produto/base-com-bau-frontal-3x2.jpg — aspect ratio 3:2 — 1600×1067 px

Studio photograph of a Kanak box base with front storage panels, without mattress, on a seamless warm sand background: rectangular base upholstered in beige velvet with two clearly defined front panels separated by a fine seam, one continuous horizontal seam along the side, turned honey oak legs. Three-quarter view rotated 30 degrees to the right so both the front and the side are readable, camera at 70 cm, 50 mm, f/8, studio side light marking the panel division, short contact shadow, 12% margin.
```

---

## 37 · `produto/cabeceira-vinho-packshot-1x1.jpg`

- **Número:** 37
- **Nome do arquivo:** `produto/cabeceira-vinho-packshot-1x1.jpg`
- **Proporção:** 1:1
- **Resolução:** 1400 × 1400

**Prompt completo:**

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

IMAGE 37 — produto/cabeceira-vinho-packshot-1x1.jpg — aspect ratio 1:1 — 1400×1400 px

Studio packshot of a Kanak headboard alone, standing upright on a seamless warm sand background: rectangular panel upholstered in wine velvet with diamond capitonê tufting, small faceted crystal-look buttons at each tufting point, softly rounded top corners. Almost frontal view rotated 10 degrees to the left for volume, camera at half the height of the piece, 85 mm, f/8, large soft key from the left with grazing light revealing the depth of the tufting, short contact shadow, 15% margin.
```

---

## 38 · `ambiente/cabeceira-aplicada-parede-3x4.jpg`

- **Número:** 38
- **Nome do arquivo:** `ambiente/cabeceira-aplicada-parede-3x4.jpg`
- **Proporção:** 3:4
- **Resolução:** 900 × 1200

**Prompt completo:**

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

IMAGE 38 — ambiente/cabeceira-aplicada-parede-3x4.jpg — aspect ratio 3:4 — 900×1200 px

Vertical interior photograph centred on a Kanak headboard in charcoal grey velvet mounted behind the bed: diamond capitonê tufting with crystal-look buttons, softly rounded top corners, set against a light slatted wood wall panel with an unlit wall sconce beside it. The upper half of the off-white mattress and two grey velvet pillows are visible below. Nearly frontal view offset 5 degrees to the right, camera at 140 cm, 50 mm, f/4, warm side light casting a soft shadow of the headboard on the panel.
```

---

## 39 · `produto/bau-bege-packshot-1x1.jpg`

- **Número:** 39
- **Nome do arquivo:** `produto/bau-bege-packshot-1x1.jpg`
- **Proporção:** 1:1
- **Resolução:** 1400 × 1400

**Prompt completo:**

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

IMAGE 39 — produto/bau-bege-packshot-1x1.jpg — aspect ratio 1:1 — 1400×1400 px

Studio packshot of a Kanak storage bench alone and closed, on a seamless warm sand background: rectangular bench upholstered in beige velvet, diamond-tufted lid with small faceted crystal-look buttons, plain untufted body, turned tapered honey oak legs. Three-quarter view rotated 25 degrees to the left, camera at 80 cm, 50 mm, f/8, large soft key from the left with grazing light across the tufted lid, short realistic contact shadow, 15% margin.
```

---

## 40.1 · `cores/swatch-bege-1x1.jpg`

- **Número:** 40.1
- **Nome do arquivo:** `cores/swatch-bege-1x1.jpg`
- **Proporção:** 1:1
- **Resolução:** 600 × 600

**Prompt completo:**

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

IMAGE 40.1 — cores/swatch-bege-1x1.jpg — aspect ratio 1:1 — 600×600 px

Square macro photograph of a swatch of matte suede-like beige velvet upholstery filling the entire frame, with one single soft diagonal fold crossing the lower third. About 12 cm of fabric in frame. 100 mm macro, f/5.6, camera at 45 degrees to the surface, one soft box from the left at 45 degrees and no reflector — identical lighting, identical angle and identical fold across the whole colour series so the swatches read as one collection. No stitching, no buttons, no seams, no background, no props.
```

---

## 40.2 · `cores/swatch-cinza-1x1.jpg`

- **Número:** 40.2
- **Nome do arquivo:** `cores/swatch-cinza-1x1.jpg`
- **Proporção:** 1:1
- **Resolução:** 600 × 600

**Prompt completo:**

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

IMAGE 40.2 — cores/swatch-cinza-1x1.jpg — aspect ratio 1:1 — 600×600 px

Square macro photograph of a swatch of matte suede-like charcoal grey velvet upholstery filling the entire frame, with one single soft diagonal fold crossing the lower third. About 12 cm of fabric in frame. 100 mm macro, f/5.6, camera at 45 degrees to the surface, one soft box from the left at 45 degrees and no reflector — identical lighting, identical angle and identical fold across the whole colour series so the swatches read as one collection. No stitching, no buttons, no seams, no background, no props.
```

---

## 40.3 · `cores/swatch-terracota-1x1.jpg`

- **Número:** 40.3
- **Nome do arquivo:** `cores/swatch-terracota-1x1.jpg`
- **Proporção:** 1:1
- **Resolução:** 600 × 600

**Prompt completo:**

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

IMAGE 40.3 — cores/swatch-terracota-1x1.jpg — aspect ratio 1:1 — 600×600 px

Square macro photograph of a swatch of matte suede-like terracotta velvet upholstery filling the entire frame, with one single soft diagonal fold crossing the lower third. About 12 cm of fabric in frame. 100 mm macro, f/5.6, camera at 45 degrees to the surface, one soft box from the left at 45 degrees and no reflector — identical lighting, identical angle and identical fold across the whole colour series so the swatches read as one collection. No stitching, no buttons, no seams, no background, no props.
```

---

## 40.4 · `cores/swatch-caramelo-1x1.jpg`

- **Número:** 40.4
- **Nome do arquivo:** `cores/swatch-caramelo-1x1.jpg`
- **Proporção:** 1:1
- **Resolução:** 600 × 600

**Prompt completo:**

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

IMAGE 40.4 — cores/swatch-caramelo-1x1.jpg — aspect ratio 1:1 — 600×600 px

Square macro photograph of a swatch of matte suede-like caramel velvet upholstery filling the entire frame, with one single soft diagonal fold crossing the lower third. About 12 cm of fabric in frame. 100 mm macro, f/5.6, camera at 45 degrees to the surface, one soft box from the left at 45 degrees and no reflector — identical lighting, identical angle and identical fold across the whole colour series so the swatches read as one collection. No stitching, no buttons, no seams, no background, no props.
```

---

## 40.5 · `cores/swatch-marrom-1x1.jpg`

- **Número:** 40.5
- **Nome do arquivo:** `cores/swatch-marrom-1x1.jpg`
- **Proporção:** 1:1
- **Resolução:** 600 × 600

**Prompt completo:**

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

IMAGE 40.5 — cores/swatch-marrom-1x1.jpg — aspect ratio 1:1 — 600×600 px

Square macro photograph of a swatch of matte suede-like brown velvet upholstery filling the entire frame, with one single soft diagonal fold crossing the lower third. About 12 cm of fabric in frame. 100 mm macro, f/5.6, camera at 45 degrees to the surface, one soft box from the left at 45 degrees and no reflector — identical lighting, identical angle and identical fold across the whole colour series so the swatches read as one collection. No stitching, no buttons, no seams, no background, no props.
```

---

## 40.6 · `cores/swatch-vinho-1x1.jpg`

- **Número:** 40.6
- **Nome do arquivo:** `cores/swatch-vinho-1x1.jpg`
- **Proporção:** 1:1
- **Resolução:** 600 × 600

**Prompt completo:**

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

IMAGE 40.6 — cores/swatch-vinho-1x1.jpg — aspect ratio 1:1 — 600×600 px

Square macro photograph of a swatch of matte suede-like wine velvet upholstery filling the entire frame, with one single soft diagonal fold crossing the lower third. About 12 cm of fabric in frame. 100 mm macro, f/5.6, camera at 45 degrees to the surface, one soft box from the left at 45 degrees and no reflector — identical lighting, identical angle and identical fold across the whole colour series so the swatches read as one collection. No stitching, no buttons, no seams, no background, no props.
```

---

## 40.7 · `cores/swatch-vermelho-1x1.jpg`

- **Número:** 40.7
- **Nome do arquivo:** `cores/swatch-vermelho-1x1.jpg`
- **Proporção:** 1:1
- **Resolução:** 600 × 600

**Prompt completo:**

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

IMAGE 40.7 — cores/swatch-vermelho-1x1.jpg — aspect ratio 1:1 — 600×600 px

Square macro photograph of a swatch of matte suede-like red velvet upholstery filling the entire frame, with one single soft diagonal fold crossing the lower third. About 12 cm of fabric in frame. 100 mm macro, f/5.6, camera at 45 degrees to the surface, one soft box from the left at 45 degrees and no reflector — identical lighting, identical angle and identical fold across the whole colour series so the swatches read as one collection. No stitching, no buttons, no seams, no background, no props.
```

---

## 40.8 · `cores/swatch-rose-1x1.jpg`

- **Número:** 40.8
- **Nome do arquivo:** `cores/swatch-rose-1x1.jpg`
- **Proporção:** 1:1
- **Resolução:** 600 × 600

**Prompt completo:**

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

IMAGE 40.8 — cores/swatch-rose-1x1.jpg — aspect ratio 1:1 — 600×600 px

Square macro photograph of a swatch of matte suede-like dusty rose velvet upholstery filling the entire frame, with one single soft diagonal fold crossing the lower third. About 12 cm of fabric in frame. 100 mm macro, f/5.6, camera at 45 degrees to the surface, one soft box from the left at 45 degrees and no reflector — identical lighting, identical angle and identical fold across the whole colour series so the swatches read as one collection. No stitching, no buttons, no seams, no background, no props.
```

---

## 40.9 · `cores/swatch-mostarda-1x1.jpg`

- **Número:** 40.9
- **Nome do arquivo:** `cores/swatch-mostarda-1x1.jpg`
- **Proporção:** 1:1
- **Resolução:** 600 × 600

**Prompt completo:**

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

IMAGE 40.9 — cores/swatch-mostarda-1x1.jpg — aspect ratio 1:1 — 600×600 px

Square macro photograph of a swatch of matte suede-like mustard velvet upholstery filling the entire frame, with one single soft diagonal fold crossing the lower third. About 12 cm of fabric in frame. 100 mm macro, f/5.6, camera at 45 degrees to the surface, one soft box from the left at 45 degrees and no reflector — identical lighting, identical angle and identical fold across the whole colour series so the swatches read as one collection. No stitching, no buttons, no seams, no background, no props.
```

---

## 40.10 · `cores/swatch-verde-1x1.jpg`

- **Número:** 40.10
- **Nome do arquivo:** `cores/swatch-verde-1x1.jpg`
- **Proporção:** 1:1
- **Resolução:** 600 × 600

**Prompt completo:**

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

IMAGE 40.10 — cores/swatch-verde-1x1.jpg — aspect ratio 1:1 — 600×600 px

Square macro photograph of a swatch of matte suede-like olive green velvet upholstery filling the entire frame, with one single soft diagonal fold crossing the lower third. About 12 cm of fabric in frame. 100 mm macro, f/5.6, camera at 45 degrees to the surface, one soft box from the left at 45 degrees and no reflector — identical lighting, identical angle and identical fold across the whole colour series so the swatches read as one collection. No stitching, no buttons, no seams, no background, no props.
```

---

## 40.11 · `cores/swatch-azul-1x1.jpg`

- **Número:** 40.11
- **Nome do arquivo:** `cores/swatch-azul-1x1.jpg`
- **Proporção:** 1:1
- **Resolução:** 600 × 600

**Prompt completo:**

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

IMAGE 40.11 — cores/swatch-azul-1x1.jpg — aspect ratio 1:1 — 600×600 px

Square macro photograph of a swatch of matte suede-like navy blue velvet upholstery filling the entire frame, with one single soft diagonal fold crossing the lower third. About 12 cm of fabric in frame. 100 mm macro, f/5.6, camera at 45 degrees to the surface, one soft box from the left at 45 degrees and no reflector — identical lighting, identical angle and identical fold across the whole colour series so the swatches read as one collection. No stitching, no buttons, no seams, no background, no props.
```

---

## 41 · `cores/aplicacao-cabeceiras-trio-3x2.jpg`

- **Número:** 41
- **Nome do arquivo:** `cores/aplicacao-cabeceiras-trio-3x2.jpg`
- **Proporção:** 3:2
- **Resolução:** 1600 × 1067

**Prompt completo:**

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

IMAGE 41 — cores/aplicacao-cabeceiras-trio-3x2.jpg — aspect ratio 3:2 — 1600×1067 px

Studio photograph of three identical Kanak headboards standing in a row on a seamless warm sand background — one in beige velvet, one in wine velvet, one in olive green velvet — all with the same diamond capitonê tufting, crystal-look buttons and softly rounded top corners, at the same height with equal spacing and a slight overlap in depth. Nearly frontal view rotated 10 degrees to the left, 85 mm, f/8, even studio lighting with no hard shadows between the pieces, upper 15% of the frame empty.
```

---

## 42 · `ambiente/casal-escolhendo-quarto-16x9.jpg`

- **Número:** 42
- **Nome do arquivo:** `ambiente/casal-escolhendo-quarto-16x9.jpg`
- **Proporção:** 16:9
- **Resolução:** 2000 × 1125

**Prompt completo:**

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

IMAGE 42 — ambiente/casal-escolhendo-quarto-16x9.jpg — aspect ratio 16:9 — 2000×1125 px

Wide interior photograph of a couple in their late thirties seen from behind and in partial profile, standing on the left of the frame and looking at a complete Kanak bed set in beige velvet on the right. The room is mid-move-in: one closed cardboard box in a corner, a curtain not yet finished, light oak floor. The people are secondary — no recognisable faces, neutral everyday clothing, relaxed posture, one hand resting on the other's shoulder. Three-quarter view from the foot of the bed, camera at 150 cm, 35 mm, f/4, warm late-afternoon backlight from the window rimming the figures. The product is the subject; the couple gives scale and context.
```

---

## 43 · `detalhe/mao-testando-firmeza-3x2.jpg`

- **Número:** 43
- **Nome do arquivo:** `detalhe/mao-testando-firmeza-3x2.jpg`
- **Proporção:** 3:2
- **Resolução:** 1600 × 1067

**Prompt completo:**

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

IMAGE 43 — detalhe/mao-testando-firmeza-3x2.jpg — aspect ratio 3:2 — 1600×1067 px

Close photograph of one adult hand pressing gently into the top surface of a Kanak mattress, showing a shallow, controlled indentation in the off-white quilted ticking. The hand occupies the right third of the frame; the quilted surface fills the rest; the bedroom behind is out of focus. About 40 cm of product in frame. 85 mm, f/2.8, camera low at 30 degrees to the surface, warm side light with a soft shadow under the hand, natural skin tone, no jewellery, no nail polish.
```

---

## 44 · `ambiente/pes-descalcos-tapete-manha-3x2.jpg`

- **Número:** 44
- **Nome do arquivo:** `ambiente/pes-descalcos-tapete-manha-3x2.jpg`
- **Proporção:** 3:2
- **Resolução:** 1600 × 1067

**Prompt completo:**

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

IMAGE 44 — ambiente/pes-descalcos-tapete-manha-3x2.jpg — aspect ratio 3:2 — 1600×1067 px

Detail photograph from the knees down of bare adult feet resting on a pale wool rug beside a bed in the morning. The feet are in the lower right third; the terracotta velvet base of the Kanak bed and a corner of cream bed linen are at the right edge; the rug and light oak floor fill the rest. Camera 60 cm above the floor tilted slightly down, 50 mm, f/2.8, low morning light raking across the floor with long soft shadows. Calm, ordinary, unstaged. The left half of the frame is quiet floor with room for text.
```

---

## 45 · `institucional/atendimento-showroom-4x3.jpg`

- **Número:** 45
- **Nome do arquivo:** `institucional/atendimento-showroom-4x3.jpg`
- **Proporção:** 4:3
- **Resolução:** 1200 × 900

**Prompt completo:**

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

IMAGE 45 — institucional/atendimento-showroom-4x3.jpg — aspect ratio 4:3 — 1200×900 px

Interior photograph inside a tidy bed showroom: a staff member in plain neutral clothing stands beside a complete Kanak bed set in beige velvet, one hand open towards the mattress, explaining something to a couple in their forties who listen from the left. All three are seen at a respectful distance in partial profile, no recognisable faces in the foreground, natural relaxed posture. Light oak floor, warm white walls, daylight from a shop window. Three-quarter view, camera at 150 cm, 35 mm, f/4, warm diffused light. Professional and calm, not a stock-photo handshake.
```

---

## 46 · `institucional/showroom-corredor-cores-3x4.jpg`

- **Número:** 46
- **Nome do arquivo:** `institucional/showroom-corredor-cores-3x4.jpg`
- **Proporção:** 3:4
- **Resolução:** 900 × 1200

**Prompt completo:**

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

IMAGE 46 — institucional/showroom-corredor-cores-3x4.jpg — aspect ratio 3:4 — 900×1200 px

Vertical interior photograph looking down the aisle of a tidy bed showroom, with a row of Kanak headboards in different velvet colours — beige, terracotta, grey, wine — receding in perspective on the right. Light oak floor, warm white walls, warm recessed lighting and daylight at the far end. Camera at 160 cm, 35 mm, f/5.6, straight verticals, calm and uncluttered.
```

---

## 47 · `ambiente/quarto-vazio-luz-404-4x3.jpg`

- **Número:** 47
- **Nome do arquivo:** `ambiente/quarto-vazio-luz-404-4x3.jpg`
- **Proporção:** 4:3
- **Resolução:** 1200 × 900

**Prompt completo:**

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

IMAGE 47 — ambiente/quarto-vazio-luz-404-4x3.jpg — aspect ratio 4:3 — 1200×900 px

Interior photograph of an empty bedroom with warm white walls and a light oak floor, no furniture at all. Late-afternoon sunlight comes through a window and draws a clean bright rectangle on the floor where a bed would stand. Camera at 140 cm, 35 mm, f/5.6, straight verticals, warm soft shadows, quiet and unsentimental. Upper 40% of the frame is plain wall.
```

---

## 48.1 · `blog/capa-como-escolher-colchao-16x9.jpg`

- **Número:** 48.1
- **Nome do arquivo:** `blog/capa-como-escolher-colchao-16x9.jpg`
- **Proporção:** 16:9
- **Resolução:** 1600 × 900

**Prompt completo:**

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

IMAGE 48.1 — blog/capa-como-escolher-colchao-16x9.jpg — aspect ratio 16:9 — 1600×900 px

Editorial horizontal photograph for a blog cover, in the same visual family as the rest of the Kanak site: two Kanak mattresses standing side by side in side profile, one single-height and one pillow-top. Neutral bedroom with warm white walls and light oak floor, a Kanak product always partly present in the frame. The subject sits on the right; the left 35% of the frame is calm and low in contrast for a title. 50 mm, f/4, warm late-afternoon light, soft shadows, natural and unstaged.
```

---

## 48.2 · `blog/capa-tamanho-ideal-quarto-16x9.jpg`

- **Número:** 48.2
- **Nome do arquivo:** `blog/capa-tamanho-ideal-quarto-16x9.jpg`
- **Proporção:** 16:9
- **Resolução:** 1600 × 900

**Prompt completo:**

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

IMAGE 48.2 — blog/capa-tamanho-ideal-quarto-16x9.jpg — aspect ratio 16:9 — 1600×900 px

Editorial horizontal photograph for a blog cover, in the same visual family as the rest of the Kanak site: an elevated view of a bedroom with one Kanak bed and clear free floor space around it. Neutral bedroom with warm white walls and light oak floor, a Kanak product always partly present in the frame. The subject sits on the right; the left 35% of the frame is calm and low in contrast for a title. 35 mm, f/4, warm late-afternoon light, soft shadows, natural and unstaged.
```

---

## 48.3 · `blog/capa-cuidados-colchao-16x9.jpg`

- **Número:** 48.3
- **Nome do arquivo:** `blog/capa-cuidados-colchao-16x9.jpg`
- **Proporção:** 16:9
- **Resolução:** 1600 × 900

**Prompt completo:**

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

IMAGE 48.3 — blog/capa-cuidados-colchao-16x9.jpg — aspect ratio 16:9 — 1600×900 px

Editorial horizontal photograph for a blog cover, in the same visual family as the rest of the Kanak site: a pair of adult hands smoothing a cream sheet over an off-white quilted Kanak mattress, no faces. Neutral bedroom with warm white walls and light oak floor, a Kanak product always partly present in the frame. The subject sits on the right; the left 35% of the frame is calm and low in contrast for a title. 50 mm, f/4, warm late-afternoon light, soft shadows, natural and unstaged.
```

---

## 48.4 · `blog/capa-quarto-acolhedor-16x9.jpg`

- **Número:** 48.4
- **Nome do arquivo:** `blog/capa-quarto-acolhedor-16x9.jpg`
- **Proporção:** 16:9
- **Resolução:** 1600 × 900

**Prompt completo:**

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

IMAGE 48.4 — blog/capa-quarto-acolhedor-16x9.jpg — aspect ratio 16:9 — 1600×900 px

Editorial horizontal photograph for a blog cover, in the same visual family as the rest of the Kanak site: a bedroom corner at dusk with a lit bedside lamp and a knitted throw over the corner of a Kanak bed. Neutral bedroom with warm white walls and light oak floor, a Kanak product always partly present in the frame. The subject sits on the right; the left 35% of the frame is calm and low in contrast for a title. 35 mm, f/4, warm late-afternoon light, soft shadows, natural and unstaged.
```

---

## 49 · `og/og-default-1200x630.jpg`

- **Número:** 49
- **Nome do arquivo:** `og/og-default-1200x630.jpg`
- **Proporção:** 1,91:1
- **Resolução:** 1200 × 630

**Prompt completo:**

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

IMAGE 49 — og/og-default-1200x630.jpg — aspect ratio 1,91:1 — 1200×630 px

Horizontal photograph optimised for a small social preview: the complete Kanak bed set in charcoal grey velvet fills about 70% of the frame — tufted headboard, made-up off-white mattress, closed storage bench — in a simplified neutral bedroom with a warm white wall and a light oak floor. Three-quarter front view, camera at 120 cm, 50 mm, f/5.6, warm late-afternoon light, slightly brighter and more contrasted than a normal interior shot. Lower 25% of the frame kept simple and uncluttered.
```

---

## 50 · `textura/linho-areia-2400.jpg`

- **Número:** 50
- **Nome do arquivo:** `textura/linho-areia-2400.jpg`
- **Proporção:** livre
- **Resolução:** 2400 de largura

**Prompt completo:**

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

IMAGE 50 — textura/linho-areia-2400.jpg — aspect ratio free (seamless texture) — minimum width 2400 px

Flat macro photograph of natural sand-coloured linen fabric filling the entire frame, seen perpendicular to the surface, with a visible even weave and no dominant fold. Very soft diffused lighting, extremely subtle relief, almost flat, uniform tone close to #F3ECE3, no shadows, no seams, no edges — a calm background texture that can sit behind text.
```

---

## 51 · `textura/veludo-vinho-2400.jpg`

- **Número:** 51
- **Nome do arquivo:** `textura/veludo-vinho-2400.jpg`
- **Proporção:** livre
- **Resolução:** 2400 de largura

**Prompt completo:**

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

IMAGE 51 — textura/veludo-vinho-2400.jpg — aspect ratio free (seamless texture) — minimum width 2400 px

Macro photograph of deep wine-coloured matte velvet filling the entire frame, with one broad soft undulation crossing it so the nap shifts from a lighter tone to a very dark one. Grazing light creating a natural gradient, no highlights, no sparkle, no stitching, no buttons. Tones between #2E0A0F and #45101A, rich and quiet, suitable as a dark background behind cream text.
```

---

## 52.1 · `hero/linha-molas-ensacadas-mobile-4x5.jpg`

- **Número:** 52.1
- **Nome do arquivo:** `hero/linha-molas-ensacadas-mobile-4x5.jpg`
- **Proporção:** 4:5
- **Resolução:** 1080 × 1350

**Prompt completo:**

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

IMAGE 52.1 — hero/linha-molas-ensacadas-mobile-4x5.jpg — aspect ratio 4:5 — 1080×1350 px

Vertical interior photograph of a neutral, quietly furnished bedroom with a Kanak bed set in charcoal grey velvet, shown without bedding so the mattress finish is fully visible: diamond-tufted headboard with crystal-look buttons, a single-height off-white quilted mattress with no pillow-top band, honey oak legs. The headboard and the upper half of the mattress fill the lower 55% of the frame, the storage bench is cropped at the bottom edge, and the upper 45% is an empty warm-white wall with soft gradient light. Three-quarter view from the left foot, camera at 125 cm, 50 mm, f/5.6, straight verticals. Late-afternoon window light from the right, identical to the desktop version of the same line.
```

---

## 52.2 · `hero/linha-anatomico-ortopedico-mobile-4x5.jpg`

- **Número:** 52.2
- **Nome do arquivo:** `hero/linha-anatomico-ortopedico-mobile-4x5.jpg`
- **Proporção:** 4:5
- **Resolução:** 1080 × 1350

**Prompt completo:**

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

IMAGE 52.2 — hero/linha-anatomico-ortopedico-mobile-4x5.jpg — aspect ratio 4:5 — 1080×1350 px

Vertical interior photograph of a neutral, quietly furnished bedroom with a Kanak bed set in beige velvet, shown without bedding so the mattress finish is fully visible: diamond-tufted headboard with crystal-look buttons, an off-white quilted mattress with one clearly visible pillow-top band, honey oak legs. The headboard and the upper half of the mattress fill the lower 55% of the frame, the storage bench is cropped at the bottom edge, and the upper 45% is an empty warm-white wall with soft gradient light. Three-quarter view from the left foot, camera at 125 cm, 50 mm, f/5.6, straight verticals. Late-afternoon window light from the right, identical to the desktop version of the same line.
```

---

## 52.3 · `hero/linha-magnetico-mobile-4x5.jpg`

- **Número:** 52.3
- **Nome do arquivo:** `hero/linha-magnetico-mobile-4x5.jpg`
- **Proporção:** 4:5
- **Resolução:** 1080 × 1350

**Prompt completo:**

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

IMAGE 52.3 — hero/linha-magnetico-mobile-4x5.jpg — aspect ratio 4:5 — 1080×1350 px

Vertical interior photograph of a neutral, quietly furnished bedroom with a Kanak bed set in wine velvet, shown without bedding so the mattress finish is fully visible: diamond-tufted headboard with crystal-look buttons, an off-white quilted mattress with one clearly visible pillow-top band, honey oak legs. The headboard and the upper half of the mattress fill the lower 55% of the frame, the storage bench is cropped at the bottom edge, and the upper 45% is an empty warm-white wall with soft gradient light. Three-quarter view from the left foot, camera at 125 cm, 50 mm, f/5.6, straight verticals. Late-afternoon window light from the right, identical to the desktop version of the same line.
```

---

## 53.1 · `cores/swatch-creme-1x1.jpg`

- **Número:** 53.1
- **Nome do arquivo:** `cores/swatch-creme-1x1.jpg`
- **Proporção:** 1:1
- **Resolução:** 600 × 600

**Prompt completo:**

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

IMAGE 53.1 — cores/swatch-creme-1x1.jpg — aspect ratio 1:1 — 600×600 px

Square macro photograph of a swatch of matte suede-like warm cream velvet upholstery filling the entire frame, with one single soft diagonal fold crossing the lower third. About 12 cm of fabric in frame. 100 mm macro, f/5.6, camera at 45 degrees to the surface, one soft box from the left at 45 degrees and no reflector — identical lighting, identical angle and identical fold across the whole colour series so the swatches read as one collection. No stitching, no buttons, no seams, no background, no props.
```

---

## 53.2 · `cores/swatch-preto-1x1.jpg`

- **Número:** 53.2
- **Nome do arquivo:** `cores/swatch-preto-1x1.jpg`
- **Proporção:** 1:1
- **Resolução:** 600 × 600

**Prompt completo:**

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

IMAGE 53.2 — cores/swatch-preto-1x1.jpg — aspect ratio 1:1 — 600×600 px

Square macro photograph of a swatch of matte suede-like black velvet upholstery filling the entire frame, with one single soft diagonal fold crossing the lower third. About 12 cm of fabric in frame. 100 mm macro, f/5.6, camera at 45 degrees to the surface, one soft box from the left at 45 degrees and no reflector — identical lighting, identical angle and identical fold across the whole colour series so the swatches read as one collection. No stitching, no buttons, no seams, no background, no props.
```

---

## 54.1 · `hero/lp-campanha-marrom-desktop-16x9.jpg`

- **Número:** 54.1
- **Nome do arquivo:** `hero/lp-campanha-marrom-desktop-16x9.jpg`
- **Proporção:** 16:9
- **Resolução:** 2400 × 1350

**Prompt completo:**

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

IMAGE 54.1 — hero/lp-campanha-marrom-desktop-16x9.jpg — aspect ratio 16:9 — 2400×1350 px

Interior photograph of a warm master bedroom at the end of the day, with the complete Kanak bed set in taupe-brown velvet, made up and inviting: diamond-tufted headboard with crystal-look buttons against a slatted wood wall panel, off-white pillow-top mattress with cream bedding and a folded knitted throw, matching tufted storage bench closed at the foot, honey oak legs. Two warm bedside lamps are lit, a linen curtain filters the last daylight, light oak floor. The bed occupies the right 60% of the frame; the left 40% is an empty wall with a bedside table and soft light falloff. Three-quarter view from the left foot of the bed, camera at 115 cm, 35 mm, f/5.6, straight verticals. Slightly warmer and slightly darker than a daytime shot, so cream text can sit over it.
```

---

## 54.2 · `hero/lp-campanha-marrom-mobile-4x5.jpg`

- **Número:** 54.2
- **Nome do arquivo:** `hero/lp-campanha-marrom-mobile-4x5.jpg`
- **Proporção:** 4:5
- **Resolução:** 1080 × 1350

**Prompt completo:**

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

IMAGE 54.2 — hero/lp-campanha-marrom-mobile-4x5.jpg — aspect ratio 4:5 — 1080×1350 px

Interior photograph of a warm master bedroom at the end of the day, with the complete Kanak bed set in taupe-brown velvet, made up and inviting: diamond-tufted headboard with crystal-look buttons against a slatted wood wall panel, off-white pillow-top mattress with cream bedding and a folded knitted throw, matching tufted storage bench closed at the foot, honey oak legs. Two warm bedside lamps are lit, a linen curtain filters the last daylight, light oak floor. The headboard and the upper half of the mattress fill the lower 55% of the frame, and the upper 45% is an empty warm wall with soft gradient light. Three-quarter view from the left foot of the bed, camera at 125 cm, 50 mm, f/5.6, straight verticals. Slightly warmer and slightly darker than a daytime shot, so cream text can sit over it.
```

---

## 55.1 · `detalhe/firmeza-macio-4x3.jpg`

- **Número:** 55.1
- **Nome do arquivo:** `detalhe/firmeza-macio-4x3.jpg`
- **Proporção:** 4:3
- **Resolução:** 1200 × 900

**Prompt completo:**

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

IMAGE 55.1 — detalhe/firmeza-macio-4x3.jpg — aspect ratio 4:3 — 1200×900 px

Close photograph of one adult hand pressing into the top surface of a Kanak mattress, showing a deep, soft indentation where the hand sinks noticeably into the surface in the off-white quilted ticking. The hand occupies the right third of the frame; the quilted surface fills the rest; the bedroom behind is out of focus. About 40 cm of product in frame. 85 mm, f/2.8, camera low at 30 degrees to the surface, warm side light with a soft shadow under the hand, natural skin tone, no jewellery, no nail polish. Framing, angle, lighting and hand position identical across the four firmness images — only the depth of the indentation changes. No text, no numbers, no ruler, no drawn scale.
```

---

## 55.2 · `detalhe/firmeza-intermediario-4x3.jpg`

- **Número:** 55.2
- **Nome do arquivo:** `detalhe/firmeza-intermediario-4x3.jpg`
- **Proporção:** 4:3
- **Resolução:** 1200 × 900

**Prompt completo:**

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

IMAGE 55.2 — detalhe/firmeza-intermediario-4x3.jpg — aspect ratio 4:3 — 1200×900 px

Close photograph of one adult hand pressing into the top surface of a Kanak mattress, showing a moderate indentation, clearly visible but shallower in the off-white quilted ticking. The hand occupies the right third of the frame; the quilted surface fills the rest; the bedroom behind is out of focus. About 40 cm of product in frame. 85 mm, f/2.8, camera low at 30 degrees to the surface, warm side light with a soft shadow under the hand, natural skin tone, no jewellery, no nail polish. Framing, angle, lighting and hand position identical across the four firmness images — only the depth of the indentation changes. No text, no numbers, no ruler, no drawn scale.
```

---

## 55.3 · `detalhe/firmeza-firme-4x3.jpg`

- **Número:** 55.3
- **Nome do arquivo:** `detalhe/firmeza-firme-4x3.jpg`
- **Proporção:** 4:3
- **Resolução:** 1200 × 900

**Prompt completo:**

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

IMAGE 55.3 — detalhe/firmeza-firme-4x3.jpg — aspect ratio 4:3 — 1200×900 px

Close photograph of one adult hand pressing into the top surface of a Kanak mattress, showing a shallow indentation, the surface barely giving way in the off-white quilted ticking. The hand occupies the right third of the frame; the quilted surface fills the rest; the bedroom behind is out of focus. About 40 cm of product in frame. 85 mm, f/2.8, camera low at 30 degrees to the surface, warm side light with a soft shadow under the hand, natural skin tone, no jewellery, no nail polish. Framing, angle, lighting and hand position identical across the four firmness images — only the depth of the indentation changes. No text, no numbers, no ruler, no drawn scale.
```

---

## 55.4 · `detalhe/firmeza-extrafirme-4x3.jpg`

- **Número:** 55.4
- **Nome do arquivo:** `detalhe/firmeza-extrafirme-4x3.jpg`
- **Proporção:** 4:3
- **Resolução:** 1200 × 900

**Prompt completo:**

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

IMAGE 55.4 — detalhe/firmeza-extrafirme-4x3.jpg — aspect ratio 4:3 — 1200×900 px

Close photograph of one adult hand pressing into the top surface of a Kanak mattress, showing almost no indentation, the surface staying essentially flat under the hand in the off-white quilted ticking. The hand occupies the right third of the frame; the quilted surface fills the rest; the bedroom behind is out of focus. About 40 cm of product in frame. 85 mm, f/2.8, camera low at 30 degrees to the surface, warm side light with a soft shadow under the hand, natural skin tone, no jewellery, no nail polish. Framing, angle, lighting and hand position identical across the four firmness images — only the depth of the indentation changes. No text, no numbers, no ruler, no drawn scale.
```

---

## 56.1 · `ambiente/rotina-noite-desktop-3x2.jpg`

- **Número:** 56.1
- **Nome do arquivo:** `ambiente/rotina-noite-desktop-3x2.jpg`
- **Proporção:** 3:2
- **Resolução:** 1600 × 1067

**Prompt completo:**

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

IMAGE 56.1 — ambiente/rotina-noite-desktop-3x2.jpg — aspect ratio 3:2 — 1600×1067 px

Quiet night photograph of an adult sleeping peacefully, seen from a respectful distance and partly covered by cream bed linen, lying on an off-white quilted Kanak mattress. The figure is on the right; the left 45% of the frame falls into warm darkness with no detail, leaving room for text. No recognizable face in the foreground, relaxed natural posture, one arm resting on the duvet. High angle at 30 degrees, camera at 140 cm, 50 mm, f/2.8. Low warm light from an off-frame bedside lamp, soft contrast, no blown highlights in the linen, no cold blue night grade.
```

---

## 56.2 · `ambiente/rotina-noite-mobile-4x5.jpg`

- **Número:** 56.2
- **Nome do arquivo:** `ambiente/rotina-noite-mobile-4x5.jpg`
- **Proporção:** 4:5
- **Resolução:** 1080 × 1350

**Prompt completo:**

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

IMAGE 56.2 — ambiente/rotina-noite-mobile-4x5.jpg — aspect ratio 4:5 — 1080×1350 px

Quiet night photograph of an adult sleeping peacefully, seen from a respectful distance and partly covered by cream bed linen, lying on an off-white quilted Kanak mattress. The figure fills the lower two thirds; the upper third falls into warm darkness with no detail, leaving room for text. No recognizable face in the foreground, relaxed natural posture, one arm resting on the duvet. High angle at 30 degrees, camera at 140 cm, 50 mm, f/2.8. Low warm light from an off-frame bedside lamp, soft contrast, no blown highlights in the linen, no cold blue night grade.
```

---

## 57.1 · `ambiente/acordar-cansado-4x3.jpg`

- **Número:** 57.1
- **Nome do arquivo:** `ambiente/acordar-cansado-4x3.jpg`
- **Proporção:** 4:3
- **Resolução:** 1200 × 900

**Prompt completo:**

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

IMAGE 57.1 — ambiente/acordar-cansado-4x3.jpg — aspect ratio 4:3 — 1200×900 px

Morning photograph of an adult sitting on the edge of a bed, seen from behind and in partial profile, shoulders relaxed forward in a tired posture, one hand resting on the mattress. The figure is on the right; an off-white quilted Kanak mattress with cream bedding is on the left; a half-drawn curtain lets soft morning light in behind. Medium shot, camera at 120 cm, 50 mm, f/4, gentle backlight, calm and ordinary. No recognizable face in the foreground, everyday neutral sleepwear. This is a scene of ordinary routine, never a clinical illustration: no hand on the lower back, no red marks, glows or pain indicators on the body, no x-ray, no drawn spine, no pressure map, no expression of suffering.
```
