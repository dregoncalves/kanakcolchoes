# imagens-prompt.md — Plano de produção das imagens

Versão 2.6 · 23/09/2026 (baú ainda saindo estreito mesmo com texto explícito: reintroduzida a imagem-guia de proporção — referencias-site/geradas/guia-banner-*.png — como referência extra só de largura, anexada junto das fotos reais; adicionado fallback de esticar o baú na edição). Versão 2.5 · 23/09/2026 (baú: caixa estofada com a largura total da base; pezinhos pequenos e recuados, sem estreitar a caixa). Versão 2.4 · 23/09/2026 (baú: mesma largura da base, mas com pezinhos de madeira visíveis, erguido do chão, nunca colado nela). Versão 2.2 · 23/09/2026 (baú com a mesma largura da cama em todos os prompts; pillow top integrado). Versão 2.1 · 23/09/2026 (revisão da família A, banner da Home: escala e fidelidade). Versão 2 · 23/09/2026. Substitui a versão de 21/09/2026 (88 imagens, muitas fora dos wireframes). Uma cópia dela ficou em `referencias-site/_arquivo/imagens-prompt-v1-2026-09-21.md`.

Este plano cobre **só o que os wireframes pedem** (Home e Landing, desktop e celular), mais uma pequena reserva opcional (seção 7). Nada aqui foi gerado. Nada aqui foi programado.

> **Bloqueio de uso:** `specs/design.md` §8 e `memoria.md` (pendência 12) dizem que o uso de imagens geradas por IA é **decisão futura** e que, até lá, só entram fotos reais. Este arquivo é o plano para quando essa decisão for tomada. Nenhuma imagem gerada vai ao ar antes de você aprovar o uso de IA e registrar em `memoria.md`.

---

## 1. Fontes analisadas

| Fonte | O que foi usado |
| --- | --- |
| `CLAUDE.md`, `specs/site.md`, `specs/design.md`, `memoria.md` | Seções, ordem, público, paleta, regras de fotografia, pendências |
| Wireframe "Kanak · Home" (Claude Design): Home desktop 1440, Mobile parte 1 e parte 2 (390) | Cada espaço de foto, com tamanho em px, posição e fundo |
| Wireframe "Kanak · Landing Google Ads": desktop 1440 e mobile 390 | Idem |
| `referencias-site/eight-sleep/` (print de página inteira) | Direção: foto grande, muito respiro, cards de foto ocupando o card inteiro |
| `referencias-site/meus-produtos/imagens colchões Kanak/` | 44 arquivos, 42 únicos (2 cópias exatas: "(copia)") |
| `referencias-site/kanak/` (briefing) | Público B−/C+, foco em kit, o que não comunicar |

`referencias-site/wireframes` não existe no computador. Os wireframes foram lidos direto dos canvases (links em `specs/site.md` §0), como já registrado em `memoria.md`.

---

## 2. Diagnóstico das fotos reais

### 2.1 O que existe

| Tamanho | Com pillow top | Sem pillow top |
| --- | --- | --- |
| Solteiro | verde | vinho |
| Casal | azul (ripado), vinho | bege (4 fotos), caramelo, cinza, cinza ripado, marrom (2), terracota (2), verde, vermelho, vinho (2) |
| Queen | marrom, rosé, terracota (2), vinho | bege, rosé, verde |
| King | cinza (5, incluindo render e variações), marrom, vinho | azul (2), bege (render), mostarda (3), preto (2) |

Cores de tecido que aparecem: bege, caramelo, terracota, rosé, vermelho, vinho, marrom, mostarda, verde, azul-marinho, cinza, preto (12). A lista oficial precisa ser confirmada com o cliente.

### 2.2 O produto, como ele é de verdade

Isto corrige a descrição da versão anterior (que falava em cantos arredondados na cabeceira, pés inclinados e colchão todo creme):

- **Cabeceira:** painel retangular alto, **cantos retos**, capitonê em losango no painel inteiro, **botão de cristal** em cada ponto. Existe também uma cabeceira **ripada** (canais verticais), vista no casal azul e no casal cinza ripado.
- **Colchão:** tampo branco/off-white acolchoado, com desenho damasco/floral tom sobre tom dentro do matelassê em losango; **debrum branco** na borda superior; **a lateral do colchão é revestida no mesmo veludo da cor do kit**; um **ilhós metálico redondo** na lateral. Com pillow top: uma camada creme a mais em cima, com faixa lateral creme e debrum próprio. Exceção: o kit preto tem tampo preto/cinza com estampa floral.
- **Base box:** caixa de veludo liso na cor do kit, sem capitonê; linha branca de debrum na junção colchão/base; **pés de madeira cônicos, retos, marrom-médio**. Queen e King às vezes aparecem bipartidos.
- **Baú (recamier):** caixa de veludo na cor do kit, corpo liso, tampa em capitonê com os mesmos botões de cristal, bem baixa, quase no chão. **Mesma largura da cama em todos os tamanhos**: as laterais do baú alinham com as laterais da base. Os renders do King cinza mostram um baú mais estreito; isso é erro do render, não seguir.
- **Almofadas:** duas pequenas, de veludo, na cor do kit.
- **Não há** logotipo, etiqueta, bordado ou selo visível no produto.

### 2.3 Por que as fotos reais não resolvem sozinhas

1. **Resolução baixa:** a maior tem 1200 × 1600. A maioria tem 720–900 px de largura. Os espaços do site pedem até 2880 px de largura (retina).
2. **Ângulo e luz inconsistentes:** celular, grande-angular com distorção, luz de tubo fluorescente no teto, alturas de câmera diferentes. O wireframe exige "mesma luz e ângulo" nas quatro camas.
3. **Elementos que não podem aparecer:** letreiro "KANAK" na parede (texto na imagem), bandeirinhas de festa junina (`casal sem pillow top - bege showroom com recamier.jpeg`), quadro de leão, cortina lilás.
4. **Parte do acervo parece render ou foto tratada**, não foto de produto: os dois arquivos marcados "render 3d" e, pelo aspecto, `caramelo suite prateleira`, `terracota suite decorada`, `cinza e terracota suite dois leitos`, `cinza suite decorada com tapete` (3 versões), `mostarda suite luxo`, `terracota suite boiserie` (2), `vinho suite boiserie`, `bege suite lustre anel`, `bege e terracota studio dois leitos`. Confirmar com o cliente. Alguns desses ambientes (lustre, boiserie, "suíte luxo") são mais luxuosos do que o público B−/C+ pede.
5. **Nenhuma foto** mostra o interior do colchão, molas, espuma, o magnético, atendimento no showroom ou macro de tecido.
6. **Nenhuma foto identifica o modelo** (molas, anatômico, magnético). O nome dos arquivos só diz tamanho, cor e pillow top.

**Conclusão:** as fotos reais são a **referência obrigatória de produto** para todas as imagens geradas, e servem como **substituto provisório** onde indicado. Nenhuma atende sozinha aos espaços dos wireframes com a qualidade pedida.

---

## 3. Inventário — tudo o que os wireframes pedem

Legenda da coluna Origem: **REAL** = foto real que já serve · **GERAR** = gerar por IA · **PLACEHOLDER** = gerar só para montar o layout, marcado para substituir por foto real · **NÃO É IMAGEM** = resolvido em código ou com outro tipo de conteúdo.

### 3.1 Home

| Seção | Espaço no wireframe (desktop / celular) | Foto real que serve? | Origem | Nº |
| --- | --- | --- | --- | --- |
| 1 Banner · base de cena | — | — | GERAR (quarto vazio, só referência de trabalho) | 00 |
| 1 Banner · Queen | coluna vertical 155–294 × 600 px (expande no hover) / card 240 × 380, carrossel | Não (ver 2.3). Referência: `queensize com pillow top - terracota suite boiserie com recamier.jpeg` | GERAR | 01 |
| 1 Banner · King | idem | Não. Referência: `kingsize com pillow top - cinza suite decorada com tapete (1024x1024).jpeg` | GERAR | 02 |
| 1 Banner · Casal | idem | Não. Referência: `casal sem pillow top - bege showroom com recamier.jpeg` | GERAR | 03 |
| 1 Banner · Solteiro | idem | Não. Referência: `solteiro sem pillow top - vinho showroom com recamier.jpeg` | GERAR | 04 |
| 2 Ciência do Conforto | hoje é um **desenho em código** das 3 camadas (≈ 560 × 340 / 350 × 220). A foto de corte é pedida no plano, não no wireframe | Não existe | PLACEHOLDER (substituir por foto real do corte) | 05 |
| 3 Qual colchão · Molas ensacadas | miniatura 120 × 120 / 88 × 88 | Não existe | GERAR | 06 |
| 3 Qual colchão · Espuma de alta densidade | idem | Não existe | GERAR | 07 |
| 3 Qual colchão · Magnético | idem | Não existe | PLACEHOLDER (substituir) | 08 |
| 4 Conheça · Cards de tamanho (4) | **desenho vetorial** da cama vista de cima, em código | — | NÃO É IMAGEM | — |
| 4 Conheça · Modelo Molas Ensacadas | 378 × 260 / 280 × 220 | Não (nenhuma foto identifica o modelo) | GERAR | 09 |
| 4 Conheça · Modelo Anatômico Ortopédico | idem | Não | GERAR | 10 |
| 4 Conheça · Modelo Magnético | idem | Não | PLACEHOLDER parcial (substituir) | 11 |
| 5 Depoimentos (6) | avatar redondo 40 px | — | NÃO É IMAGEM GERADA: fotos reais do Google, com autorização. **Nunca gerar rostos de clientes** | — |
| 7 Showroom com atendimento | 560 × 500 sobre fundo vinho / 350 × 240 | Parcial: o showroom aparece em várias fotos, mas sem atendimento e com letreiro, fluorescente e bandeirinhas | PLACEHOLDER (substituir por foto real) | 12 |
| 9 Rodapé · mapa | 160 px de altura | — | NÃO É IMAGEM (mapa incorporado) | — |

### 3.2 Landing Google Ads

| Seção | Espaço no wireframe (desktop / celular) | Foto real que serve? | Origem | Nº |
| --- | --- | --- | --- | --- |
| 1 Banner da campanha | metade direita de um banner de 1360 × 600 (arte prevista em 1440 × 600) / 366 × 280 no topo de um card vertical | Não. Provisório possível: `kingsize com pillow top - cinza suite decorada com tapete (widescreen).jpeg`, só em 1x | GERAR, **trocado a cada campanha** | 13 (desktop), 14 (celular) |
| 2 Acordar cansado | sem imagem (número "1/3" em tipografia) | — | NÃO É IMAGEM | — |
| 3 Cards de tamanho (3) | desenho vetorial em código | — | NÃO É IMAGEM | — |
| 3 Modelos (3) | 378 × 300 / 290 × 240 | — | Reaproveita **09, 10, 11** | — |
| 4 Por que a Kanak | sem imagem; depoimentos reais | — | NÃO É IMAGEM | — |
| 5 Fechamento | sem imagem | — | — | — |
| 6 Rodapé · mapa | igual à Home | — | NÃO É IMAGEM | — |

### 3.3 Itens citados no pedido que não estão nos wireframes

| Item | Situação | Onde está no plano |
| --- | --- | --- |
| Kits completos (colchão + base + cabeceira + baú) | Os kits já aparecem inteiros nas imagens 01–04 e 13–14. Não há espaço próprio para foto de kit nos wireframes | Reserva R1 (seção 7) |
| Detalhes de acabamento (tecido, costura, pillow top) | Sem espaço nos wireframes. Úteis para as páginas de produto (fora desta entrega) | Reserva R2–R4 |
| Swatches de cor | Sem espaço nos wireframes. O ideal é foto real das amostras de tecido, não IA (cor gerada não é confiável) | Reserva R5 |
| Fundos e texturas | **Não são necessários.** O design separa seções por cor sólida dos tokens e por espaço (`specs/design.md` §5) | — |

### 3.4 Resumo

- **Produzir para o layout:** 14 imagens (01–14). Destas, 4 são placeholders marcados para substituir (05, 08, 11 parcial, 12).
- **Reserva opcional:** R1–R5.
- **Não gerar:** depoimentos, cards de tamanho, mapa, fundos.

---

## 4. Tamanhos: de onde vêm as resoluções

Resolução mínima = maior tamanho de exibição × 2 (retina; × 3 no celular). Cada imagem tem **um arquivo-mestre** que serve desktop e celular, com recorte feito no código (`object-fit: cover` + `object-position`). Por isso cada ficha define uma **zona segura** onde o assunto principal precisa ficar.

| Nº | Maior exibição | Proporções de recorte usadas | Arquivo-mestre |
| --- | --- | --- | --- |
| 01–04 | 294 × 600 (desktop, hover) · 240 × 380 (celular) | de 0,26:1 a 0,63:1 (muito vertical) | 2:3 · 1400 × 2100 |
| 05 | 560 × 340 | 5:3 e 4:3 | 3:2 · 1800 × 1200 |
| 06–08 | 120 × 120 | 1:1 | 1:1 · 800 × 800 |
| 09–11 | 378 × 300 | 1,45:1 (Home desktop) · 1,26:1 (Landing) · 1,21–1,27:1 (celular) | 3:2 · 1800 × 1200 |
| 12 | 560 × 500 | 9:8 (desktop) · 3:2 (celular) | 4:3 · 1600 × 1200 |
| 13 | 1360 × 600 (ou 1440 × 600 sangrado) | 12:5 inteira ou metade direita ≈ 9:8 | 12:5 · 2880 × 1200 |
| 14 | 366 × 280 | ≈ 4:3 | 4:3 · 1200 × 900 |

Entrega: JPG qualidade 85–90, sRGB. O `next/image` gera os tamanhos menores e o WebP/AVIF.

Pasta sugerida: `my-app/public/images/` com subpastas `home/`, `lp/` e `shared/`.

---

## 5. PROMPT-BASE DE CONSISTÊNCIA

Este bloco abre **todos** os prompts da seção 6 — já está colado dentro de cada um, para que qualquer prompt funcione sozinho. Está aqui inteiro para consulta.

```text
PROMPT-BASE DE CONSISTÊNCIA — KANAK

BRAND
Kanak is a Brazilian mattress manufacturer that sells complete upholstered bed sets: mattress, box base, headboard and a storage bench for the foot of the bed. Visual identity: warm, calm, adult, trustworthy, editorial. Brand palette: cream (#FBF3E8), deep wine (#680B0E), apricot cream (#FFD29D), light natural wood, warm natural daylight. Premium product photography with a lot of breathing room — like a good furniture store, never a clearance ad, never a luxury hotel.

AUDIENCE AND SETTING
Brazilian families, ages 25 to 60, middle class. Rooms must feel real and attainable: an ordinary Brazilian apartment or house bedroom of about 10 to 14 square meters, smooth painted walls, light-wood laminate floor, a simple sheer linen curtain, at most one simple bedside table and one lamp. No chandeliers, no marble, no gold fixtures, no ornate wall moulding, no walk-in closets, no skyline views, no hotel suites, no mansion interiors.

PRODUCT — FOLLOW THE ATTACHED KANAK REFERENCES EXACTLY
The Kanak bed set has four parts, all upholstered in the same short-pile suede-like velvet, in one solid color per set:
1. HEADBOARD: tall rectangular panel with square corners, deep diamond capitonê tufting across the whole panel, a small clear crystal-look button at every tufting point, same width as the bed.
2. MATTRESS: flat white to off-white quilted top panel with a tone-on-tone damask floral pattern inside diamond quilting; thin white piping along the top edge; the side border of the mattress is upholstered in the same colored velvet as the set, with one small round metal eyelet on the side. Pillow-top version: one extra cream quilted layer sewn onto the top, with its own cream side band and piping, clearly thicker — part of the mattress, never a loose topper or folded quilt. Version without pillow top: a single flat quilted top.
3. BOX BASE: plain velvet box, no tufting, same color as the set, a thin white piping line where the mattress meets the base, short straight tapered wooden legs in medium brown.
4. STORAGE BENCH (baú): low rectangular velvet box at the foot of the bed. THE UPHOLSTERED BOX ITSELF, not the legs, spans the FULL width of the box base — its left and right edges sit directly above the left and right edges of the box base, never narrower, exactly like the mattress is never narrower than the base under it. It has its own short, thin tapered wooden legs in the same medium brown wood as the base legs, set inward from the box corners (much narrower than the box itself), lifting the box about 10 cm off the floor with a visible gap and contact shadow underneath. The legs are a small detail at the bottom corners; they must never make the box above them look narrower — the box is a separate piece of furniture from the base, not fused to it, but matches its full width. Plain body, capitonê-tufted lid with the same crystal-look buttons, hinged lid.
Two small velvet throw pillows in the set color lean against the headboard.
Follow the supplied product references exactly. Preserve the same shape, proportions, material, color, finish and internal details.
Do not invent logos, labels, tags, embroidery, extra seams, handles, buttons, legs, lights or any detail that is not visible in the references.

LIGHT
Soft warm natural daylight, about 3500 to 4500 K, from a side window through a sheer linen curtain. Gentle falloff, open soft shadows, realistic contact shadows under the furniture. No fluorescent ceiling tubes, no flash, no harsh highlights, no colored light, no blue cast.

PHOTOGRAPHIC DIRECTION
Editorial premium product photography: calm, uncluttered, generous empty space around the subject. Full-frame camera; 35 to 50 mm lens for rooms, 90 to 100 mm macro lens for details. Straight verticals, corrected perspective, no wide-angle distortion. Natural color, gentle contrast, fine grain, no HDR look, no heavy color grading, no oversaturation.

REALISM AND QUALITY
Photorealistic and indistinguishable from a real photograph. Visible velvet nap, real quilting stitches, believable fabric weight and folds, correct scale between bed, bench and room. High resolution, sharp focus on the product.

RESTRICTIONS
No text, letters, numbers, logos, brand signs, wall lettering, labels, price tags or watermarks anywhere in the image.
No people unless the image brief explicitly asks for them; never a close or recognizable face; nothing that looks like a customer testimonial portrait.
No pets, no clutter, no party decorations, no cables, no screens.
No luxury excess (see setting). No collage, no split screen, no multiple variations in one file, no illustration, no cartoon or plastic 3D look, no border, no frame.
```

---

## 6. Fichas e prompts

Como usar cada ficha:

1. Anexe ao gerador as **referências** listadas na ficha (fotos reais de `referencias-site/meus-produtos/imagens colchões Kanak/`).
2. Cole o prompt inteiro.
3. Uma imagem por arquivo. Nunca colagem.
4. Confira o resultado com o checklist da seção 8.

Se o produto sair diferente das referências, use este complemento:

```text
Follow the supplied product references exactly.
Correct the product so it matches the reference images in shape, proportions, material, color, finish and details: square-cornered capitonê headboard with crystal-look buttons, mattress with white quilted top and side border in the same colored velvet, round metal eyelet on the mattress side, white piping at the mattress-base joint, plain velvet box base on short straight tapered wooden legs, low capitonê storage bench.
Do not redesign, stylize or add new details to the product.
```

---

### Família A — Banner da Home (00–04) · revisão 2, 23/09/2026

#### O que deu errado na primeira geração

Resultado da primeira geração (Magnific): as quatro camas saíram **do mesmo tamanho** e **pouco fiéis** ao produto. Três causas, duas delas do próprio plano:

1. **Referências misturadas.** Com fotos de vários tamanhos e cores anexadas ao mesmo tempo, o gerador faz uma "média" das camas: perde a largura certa, a cor exata e os detalhes de cada kit.
2. **A imagem 02 (King) servia de referência de cena para as outras.** O plano anterior mandava anexá-la ao gerar a 01, a 03 e a 04, e o gerador copiou a cama King junto com o quarto.
3. **Faltava uma medida de escala.** O prompt dizia "cama centralizada" e "aparece mais parede dos lados", mas sem nenhum número. Sem medida, o gerador enquadra a cama para ocupar o quadro, e as quatro ficam com o mesmo tamanho.

#### Como gerar agora

1. **Gere primeiro o quarto vazio (imagem 00)**, sem cama. É a única referência de cena da família. Aprove antes de seguir.
2. Para cada cama, anexe **três coisas**:
   - o quarto vazio 00 (se o Magnific tiver um campo de referência de estrutura ou composição, use-o para o quarto);
   - **uma ou duas fotos do mesmo tamanho e da mesma cor** daquela cama, listadas na ficha;
   - a **imagem-guia** `referencias-site/geradas/guia-banner-<tamanho>.png` — um desenho técnico chapado (sem cor real, sem material), só para o gerador copiar a proporção certa entre a largura da base e a largura do baú. Se o Magnific tiver um campo separado para referência de estrutura/composição, coloque a guia ali; senão, anexe junto e confie no texto do prompt para o gerador saber o que é o quê.
3. **Nunca anexe** fotos de outros tamanhos, de outras cores ou outra imagem de banner já gerada. A imagem-guia é a única exceção: é chapada, sem cor, então não contamina a referência de cor/material.
4. Gere as quatro na mesma proporção (2:3), sem pedir ao gerador para "ajustar ao enquadramento" ou "preencher o quadro", e sem recortar nem ampliar depois.
5. Confira a largura com a régua abaixo. Se passar de 3 pontos percentuais para mais ou para menos, gere de novo.
6. **Se mesmo assim o baú sair mais estreito que a base**, o ajuste mais rápido é na edição: selecione só o baú e estique na horizontal até alinhar com a base (Ctrl+T no Photoshop ou no Photopea). Ele é liso e simétrico, então o ajuste não aparece.

#### Régua de escala (igual para as quatro)

A câmera não muda de lugar. O quadro mostra sempre **2,80 m de largura de parede** na altura da cabeceira. Assim a largura da cama no quadro é proporcional à medida real:

| Imagem | Tamanho | Largura real | Largura da cama no quadro (na cabeceira) | Posição em 1400 px |
| --- | --- | --- | --- | --- |
| 01 | Queen | 158 cm | **56%** | de 308 a 1092 px |
| 02 | King | 193 cm | **69%** | de 217 a 1183 px |
| 03 | Casal | 138 cm | **49%** | de 357 a 1043 px |
| 04 | Solteiro | 88 cm | **31%** | de 483 a 917 px |

Âncoras que não mudam: altura do topo do colchão (cerca de 60 cm do chão) a **52% da altura do quadro, de cima para baixo**; frente do baú em torno de 80%; os 18% de baixo são chão livre; cortina de linho na borda esquerda, de 0 a 7% da largura; rodapé de madeira clara visível na parede. A altura da cabeceira **não** é fixa: segue a foto de referência de cada kit (a do Queen é larga e baixa; a do Solteiro é alta e estreita).

No desktop o espaço mostra só uma fatia central do mestre (26% a 49% da largura). Ali o Solteiro aparece inteiro e o King aparece cortado nas laterais, o que também comunica o tamanho. No celular (≈ 63%) a diferença fica evidente.

---

#### 00 · Quarto vazio — referência de cena (não vai ao site)

| Campo | Definição |
| --- | --- |
| Número | 00 |
| Arquivo | `referencias-site/geradas/banner-quarto-vazio-2x3.jpg` (referência de trabalho, não publicar) |
| Seção | Base das imagens 01–04 |
| Foto real existente | Não se aplica |
| Origem | GERAR |
| Referências a anexar | **Nenhuma.** Quarto sem cama |
| Objetivo | Fixar parede, piso, luz, câmera e escala antes de colocar qualquer cama |
| Elemento principal | Parede de fundo lisa com 2,80 m visíveis, piso de madeira clara |
| Composição | Parede ocupando a metade de cima; piso em perspectiva na metade de baixo; cortina na borda esquerda |
| Enquadramento | Parede de ponta a ponta, sem cantos do quarto visíveis; teto fora do quadro |
| Ângulo | Frontal, câmera a 110 cm de altura, a 4,1 m da parede, levemente inclinada para baixo; 35 mm (com 50 mm não caberiam 2,80 m de parede num quarto comum) |
| Cenário | Parede off-white quente lisa, rodapé de madeira clara, laminado de madeira clara, cortina de linho translúcida |
| Iluminação | Luz natural quente pela esquerda |
| Cores | Creme, madeira clara, linho |
| Proporção | 2:3 |
| Resolução | 1400 × 2100 px |
| Área livre para texto | Não se aplica |
| Versão | Referência de trabalho |
| Restrições | Nenhum móvel, nenhum objeto, nenhum quadro, tomada ou interruptor |

```text
PROMPT-BASE DE CONSISTÊNCIA — KANAK

BRAND
Kanak is a Brazilian mattress manufacturer that sells complete upholstered bed sets: mattress, box base, headboard and a storage bench for the foot of the bed. Visual identity: warm, calm, adult, trustworthy, editorial. Brand palette: cream (#FBF3E8), deep wine (#680B0E), apricot cream (#FFD29D), light natural wood, warm natural daylight. Premium product photography with a lot of breathing room — like a good furniture store, never a clearance ad, never a luxury hotel.

AUDIENCE AND SETTING
Brazilian families, ages 25 to 60, middle class. Rooms must feel real and attainable: an ordinary Brazilian apartment or house bedroom of about 10 to 14 square meters, smooth painted walls, light-wood laminate floor, a simple sheer linen curtain, at most one simple bedside table and one lamp. No chandeliers, no marble, no gold fixtures, no ornate wall moulding, no walk-in closets, no skyline views, no hotel suites, no mansion interiors.

PRODUCT — FOLLOW THE ATTACHED KANAK REFERENCES EXACTLY
The Kanak bed set has four parts, all upholstered in the same short-pile suede-like velvet, in one solid color per set:
1. HEADBOARD: tall rectangular panel with square corners, deep diamond capitonê tufting across the whole panel, a small clear crystal-look button at every tufting point, same width as the bed.
2. MATTRESS: flat white to off-white quilted top panel with a tone-on-tone damask floral pattern inside diamond quilting; thin white piping along the top edge; the side border of the mattress is upholstered in the same colored velvet as the set, with one small round metal eyelet on the side. Pillow-top version: one extra cream quilted layer sewn onto the top, with its own cream side band and piping, clearly thicker — part of the mattress, never a loose topper or folded quilt. Version without pillow top: a single flat quilted top.
3. BOX BASE: plain velvet box, no tufting, same color as the set, a thin white piping line where the mattress meets the base, short straight tapered wooden legs in medium brown.
4. STORAGE BENCH (baú): low rectangular velvet box at the foot of the bed. THE UPHOLSTERED BOX ITSELF, not the legs, spans the FULL width of the box base — its left and right edges sit directly above the left and right edges of the box base, never narrower, exactly like the mattress is never narrower than the base under it. It has its own short, thin tapered wooden legs in the same medium brown wood as the base legs, set inward from the box corners (much narrower than the box itself), lifting the box about 10 cm off the floor with a visible gap and contact shadow underneath. The legs are a small detail at the bottom corners; they must never make the box above them look narrower — the box is a separate piece of furniture from the base, not fused to it, but matches its full width. Plain body, capitonê-tufted lid with the same crystal-look buttons, hinged lid.
Two small velvet throw pillows in the set color lean against the headboard.
Follow the supplied product references exactly. Preserve the same shape, proportions, material, color, finish and internal details.
Do not invent logos, labels, tags, embroidery, extra seams, handles, buttons, legs, lights or any detail that is not visible in the references.

LIGHT
Soft warm natural daylight, about 3500 to 4500 K, from a side window through a sheer linen curtain. Gentle falloff, open soft shadows, realistic contact shadows under the furniture. No fluorescent ceiling tubes, no flash, no harsh highlights, no colored light, no blue cast.

PHOTOGRAPHIC DIRECTION
Editorial premium product photography: calm, uncluttered, generous empty space around the subject. Full-frame camera; 35 to 50 mm lens for rooms, 90 to 100 mm macro lens for details. Straight verticals, corrected perspective, no wide-angle distortion. Natural color, gentle contrast, fine grain, no HDR look, no heavy color grading, no oversaturation.

REALISM AND QUALITY
Photorealistic and indistinguishable from a real photograph. Visible velvet nap, real quilting stitches, believable fabric weight and folds, correct scale between bed, bench and room. High resolution, sharp focus on the product.

RESTRICTIONS
No text, letters, numbers, logos, brand signs, wall lettering, labels, price tags or watermarks anywhere in the image.
No people unless the image brief explicitly asks for them; never a close or recognizable face; nothing that looks like a customer testimonial portrait.
No pets, no clutter, no party decorations, no cables, no screens.
No luxury excess (see setting). No collage, no split screen, no multiple variations in one file, no illustration, no cartoon or plastic 3D look, no border, no frame.

IMAGE BRIEF — 00 — Empty room scene plate for a set of four banner images — vertical 2:3, 1400 x 2100 px
An empty ordinary bedroom, with no furniture at all. This image will be used as the fixed scene for four later images, so it must be simple, symmetrical and exactly measurable.
Frontal view straight at the back wall. Camera at 110 cm height, 4.1 m from the back wall, tilted slightly down, 35 mm lens, perfectly straight verticals, no wide-angle distortion. The frame shows exactly 2.80 m of back wall width from edge to edge; no room corners and no ceiling are visible.
The back wall is smooth warm off-white painted plaster with a low light-wood skirting board. The floor is light-wood laminate with planks running toward the camera, filling roughly the lower half of the frame in perspective. A sheer linen curtain hangs at the far left edge, occupying only the first 7% of the frame width. Soft warm daylight comes from the left.
Completely empty: no bed, no furniture, no rug, no plants, no frames, no lamps, no sockets, no switches, no objects.
```

---

#### 01 · Banner Home — Queen

| Campo | Definição |
| --- | --- |
| Número | 01 |
| Arquivo | `my-app/public/images/home/banner-queen-terracota.jpg` |
| Seção | Home · 1 Banner · primeira foto vertical (`hero_queen`) |
| Foto real existente | Nenhuma adequada (ver 2.3). Referências de produto abaixo |
| Origem | GERAR |
| Referências a anexar | **Só estas:** imagem 00 (cena) · `queensize com pillow top - terracota suite boiserie com recamier.jpeg` · `queensize com pillow top - terracota suite boiserie sem recamier.jpeg` · `referencias-site/geradas/guia-banner-queen.png` (guia só de proporção: usar para o gerador acertar a largura do baú, nunca copiar as cores ou o material dela) |
| Objetivo | Mostrar o Queen montado como kit, com largura proporcional às outras camas |
| Elemento principal | Kit Queen terracota com pillow top |
| Composição | Cama no eixo vertical, **56% da largura do quadro na cabeceira (308–1092 px)**; topo do colchão a 52% da altura; baú à frente |
| Enquadramento | O da imagem 00, sem mudar |
| Ângulo | Frontal, câmera a 110 cm, 35 mm (o da 00). As referências mostram a cama em ângulo: girar para frontal mantendo todos os detalhes |
| Cenário | O quarto vazio 00 |
| Iluminação | A da 00 |
| Cores | Terracota (laranja-queimado aveludado), tampo branco, madeira clara |
| Proporção | 2:3 |
| Resolução | 1400 × 2100 px |
| Área livre para texto | Canto inferior esquerdo, chão liso ("Queen Size · 158 x 198 cm") |
| Versão | Desktop e celular no mesmo arquivo |
| Detalhes do kit (da referência) | Cabeceira larga e relativamente baixa, capitonê com botões de cristal; **base bipartida** (duas metades, junta vertical no centro da lateral e dos pés); baú **com exatamente a mesma largura da base, mas com pezinhos de madeira visíveis** (laterais alinhadas com a base, porém erguido do chão, não colado nela); duas almofadas terracota |
| Restrições | Sem boiserie, sem quadro de leão, sem luz de sanca, sem mesinha; cama exatamente na largura indicada |

```text
PROMPT-BASE DE CONSISTÊNCIA — KANAK

BRAND
Kanak is a Brazilian mattress manufacturer that sells complete upholstered bed sets: mattress, box base, headboard and a storage bench for the foot of the bed. Visual identity: warm, calm, adult, trustworthy, editorial. Brand palette: cream (#FBF3E8), deep wine (#680B0E), apricot cream (#FFD29D), light natural wood, warm natural daylight. Premium product photography with a lot of breathing room — like a good furniture store, never a clearance ad, never a luxury hotel.

AUDIENCE AND SETTING
Brazilian families, ages 25 to 60, middle class. Rooms must feel real and attainable: an ordinary Brazilian apartment or house bedroom of about 10 to 14 square meters, smooth painted walls, light-wood laminate floor, a simple sheer linen curtain, at most one simple bedside table and one lamp. No chandeliers, no marble, no gold fixtures, no ornate wall moulding, no walk-in closets, no skyline views, no hotel suites, no mansion interiors.

PRODUCT — FOLLOW THE ATTACHED KANAK REFERENCES EXACTLY
The Kanak bed set has four parts, all upholstered in the same short-pile suede-like velvet, in one solid color per set:
1. HEADBOARD: tall rectangular panel with square corners, deep diamond capitonê tufting across the whole panel, a small clear crystal-look button at every tufting point, same width as the bed.
2. MATTRESS: flat white to off-white quilted top panel with a tone-on-tone damask floral pattern inside diamond quilting; thin white piping along the top edge; the side border of the mattress is upholstered in the same colored velvet as the set, with one small round metal eyelet on the side. Pillow-top version: one extra cream quilted layer sewn onto the top, with its own cream side band and piping, clearly thicker — part of the mattress, never a loose topper or folded quilt. Version without pillow top: a single flat quilted top.
3. BOX BASE: plain velvet box, no tufting, same color as the set, a thin white piping line where the mattress meets the base, short straight tapered wooden legs in medium brown.
4. STORAGE BENCH (baú): low rectangular velvet box at the foot of the bed. THE UPHOLSTERED BOX ITSELF, not the legs, spans the FULL width of the box base — its left and right edges sit directly above the left and right edges of the box base, never narrower, exactly like the mattress is never narrower than the base under it. It has its own short, thin tapered wooden legs in the same medium brown wood as the base legs, set inward from the box corners (much narrower than the box itself), lifting the box about 10 cm off the floor with a visible gap and contact shadow underneath. The legs are a small detail at the bottom corners; they must never make the box above them look narrower — the box is a separate piece of furniture from the base, not fused to it, but matches its full width. Plain body, capitonê-tufted lid with the same crystal-look buttons, hinged lid.
Two small velvet throw pillows in the set color lean against the headboard.
Follow the supplied product references exactly. Preserve the same shape, proportions, material, color, finish and internal details.
Do not invent logos, labels, tags, embroidery, extra seams, handles, buttons, legs, lights or any detail that is not visible in the references.

LIGHT
Soft warm natural daylight, about 3500 to 4500 K, from a side window through a sheer linen curtain. Gentle falloff, open soft shadows, realistic contact shadows under the furniture. No fluorescent ceiling tubes, no flash, no harsh highlights, no colored light, no blue cast.

PHOTOGRAPHIC DIRECTION
Editorial premium product photography: calm, uncluttered, generous empty space around the subject. Full-frame camera; 35 to 50 mm lens for rooms, 90 to 100 mm macro lens for details. Straight verticals, corrected perspective, no wide-angle distortion. Natural color, gentle contrast, fine grain, no HDR look, no heavy color grading, no oversaturation.

REALISM AND QUALITY
Photorealistic and indistinguishable from a real photograph. Visible velvet nap, real quilting stitches, believable fabric weight and folds, correct scale between bed, bench and room. High resolution, sharp focus on the product.

RESTRICTIONS
No text, letters, numbers, logos, brand signs, wall lettering, labels, price tags or watermarks anywhere in the image.
No people unless the image brief explicitly asks for them; never a close or recognizable face; nothing that looks like a customer testimonial portrait.
No pets, no clutter, no party decorations, no cables, no screens.
No luxury excess (see setting). No collage, no split screen, no multiple variations in one file, no illustration, no cartoon or plastic 3D look, no border, no frame.

IMAGE BRIEF — 01 — Home banner, Queen size — vertical 2:3, 1400 x 2100 px
SCENE: use the attached empty room (image 00) exactly as it is — same wall, floor, curtain, light, camera position and framing. Do not zoom, crop or reframe. Add only the bed set.
WIDTH GUIDE — READ THIS FIRST: a second attached image is a flat, colorless technical diagram, not a photo. Use ONLY its measurements: it shows exactly how wide the box base is and exactly how wide the storage bench is in the same frame, and the two are the same width, edge to edge. Copy that exact width relationship for the bench: whatever fraction of the base's width the bench spans in the diagram, use the same fraction here. Never make the photographed bench narrower than the base just because the bench in the diagram is a plain flat shape. Ignore the diagram's colors, materials and background completely — those come only from the product photos.
PRODUCT: follow ONLY the attached terracotta Queen references. The references show the bed at an angle; turn it to a straight frontal view and keep every detail. A Kanak Queen size bed set in terracotta (burnt-orange) velvet, with an integrated pillow top: a wide, relatively low rectangular headboard with square corners and capitonê tufting with small crystal-look buttons, exactly as in the reference; mattress with white quilted damask top and a sewn-on cream pillow-top layer (not a loose topper), terracotta velvet side border with a small round metal eyelet, white piping at the mattress-base joint; a split terracotta box base made of two halves, with the vertical joint visible in the middle of the foot side, on short straight tapered wooden legs; a low capitonê terracotta storage bench at the foot: the upholstered box is the full width of the box base, its left and right edges aligned with the box base's edges, on short thin tapered wooden legs set inward from the corners (much narrower than the box, never reducing the box's width), lifted clearly off the floor; two small terracotta velvet pillows.
SIZE — THIS IS CRITICAL: this is a Queen bed, 158 cm wide. The frame shows 2.80 m of wall, so at the headboard the bed occupies 56% of the frame width, from 22% to 78% of the width. Do not enlarge the bed to fill the frame. Plain wall remains visible on both sides of the headboard.
POSITION: bed centered on the vertical center line. Top surface of the mattress at 52% of the frame height from the top. Front of the storage bench at about 80% of the frame height. The lowest 18% of the frame is plain empty floor, with nothing in the lower left corner.
Nothing else in the room: no bedside tables, no lamps, no rug, no plants, no frames.
```

---

#### 02 · Banner Home — King

| Campo | Definição |
| --- | --- |
| Número | 02 |
| Arquivo | `my-app/public/images/home/banner-king-cinza.jpg` |
| Seção | Home · 1 Banner · segunda foto vertical (`hero_king`) |
| Foto real existente | Nenhuma adequada (ver 2.3) |
| Origem | GERAR |
| Referências a anexar | **Só estas:** imagem 00 (cena) · `kingsize com pillow top - cinza suite decorada com tapete (1024x1024).jpeg` · `kingsize com pillow top - cinza suite decorada com tapete (widescreen).jpeg` · `referencias-site/geradas/guia-banner-king.png` (guia só de proporção: usar para o gerador acertar a largura do baú, nunca copiar as cores ou o material dela) |
| Objetivo | Mostrar o King (maior margem) como kit, visivelmente o maior dos quatro |
| Elemento principal | Kit King cinza grafite com pillow top |
| Composição | Cama no eixo vertical, **69% da largura do quadro na cabeceira (217–1183 px)**; topo do colchão a 52% da altura |
| Enquadramento / Ângulo / Cenário / Iluminação | Os da imagem 00 |
| Cores | Cinza grafite, pillow top creme, tampo branco, madeira clara |
| Proporção | 2:3 |
| Resolução | 1400 × 2100 px |
| Área livre para texto | Canto inferior esquerdo, chão liso ("King Size · 193 x 203 cm") |
| Versão | Desktop e celular no mesmo arquivo |
| Detalhes do kit (da referência) | Cabeceira larga com capitonê em várias fileiras e botões de cristal; pillow top creme bem visível; ilhós metálico na lateral; baú **com exatamente a mesma largura da base, mas com pezinhos de madeira visíveis** (os renders de referência mostram um baú mais estreito e sem pé: ignorar); duas almofadas cinza |
| Restrições | Sem a cama laranja do fundo das referências, sem tapete, sem criado-mudo, sem abajur |

```text
PROMPT-BASE DE CONSISTÊNCIA — KANAK

BRAND
Kanak is a Brazilian mattress manufacturer that sells complete upholstered bed sets: mattress, box base, headboard and a storage bench for the foot of the bed. Visual identity: warm, calm, adult, trustworthy, editorial. Brand palette: cream (#FBF3E8), deep wine (#680B0E), apricot cream (#FFD29D), light natural wood, warm natural daylight. Premium product photography with a lot of breathing room — like a good furniture store, never a clearance ad, never a luxury hotel.

AUDIENCE AND SETTING
Brazilian families, ages 25 to 60, middle class. Rooms must feel real and attainable: an ordinary Brazilian apartment or house bedroom of about 10 to 14 square meters, smooth painted walls, light-wood laminate floor, a simple sheer linen curtain, at most one simple bedside table and one lamp. No chandeliers, no marble, no gold fixtures, no ornate wall moulding, no walk-in closets, no skyline views, no hotel suites, no mansion interiors.

PRODUCT — FOLLOW THE ATTACHED KANAK REFERENCES EXACTLY
The Kanak bed set has four parts, all upholstered in the same short-pile suede-like velvet, in one solid color per set:
1. HEADBOARD: tall rectangular panel with square corners, deep diamond capitonê tufting across the whole panel, a small clear crystal-look button at every tufting point, same width as the bed.
2. MATTRESS: flat white to off-white quilted top panel with a tone-on-tone damask floral pattern inside diamond quilting; thin white piping along the top edge; the side border of the mattress is upholstered in the same colored velvet as the set, with one small round metal eyelet on the side. Pillow-top version: one extra cream quilted layer sewn onto the top, with its own cream side band and piping, clearly thicker — part of the mattress, never a loose topper or folded quilt. Version without pillow top: a single flat quilted top.
3. BOX BASE: plain velvet box, no tufting, same color as the set, a thin white piping line where the mattress meets the base, short straight tapered wooden legs in medium brown.
4. STORAGE BENCH (baú): low rectangular velvet box at the foot of the bed. THE UPHOLSTERED BOX ITSELF, not the legs, spans the FULL width of the box base — its left and right edges sit directly above the left and right edges of the box base, never narrower, exactly like the mattress is never narrower than the base under it. It has its own short, thin tapered wooden legs in the same medium brown wood as the base legs, set inward from the box corners (much narrower than the box itself), lifting the box about 10 cm off the floor with a visible gap and contact shadow underneath. The legs are a small detail at the bottom corners; they must never make the box above them look narrower — the box is a separate piece of furniture from the base, not fused to it, but matches its full width. Plain body, capitonê-tufted lid with the same crystal-look buttons, hinged lid.
Two small velvet throw pillows in the set color lean against the headboard.
Follow the supplied product references exactly. Preserve the same shape, proportions, material, color, finish and internal details.
Do not invent logos, labels, tags, embroidery, extra seams, handles, buttons, legs, lights or any detail that is not visible in the references.

LIGHT
Soft warm natural daylight, about 3500 to 4500 K, from a side window through a sheer linen curtain. Gentle falloff, open soft shadows, realistic contact shadows under the furniture. No fluorescent ceiling tubes, no flash, no harsh highlights, no colored light, no blue cast.

PHOTOGRAPHIC DIRECTION
Editorial premium product photography: calm, uncluttered, generous empty space around the subject. Full-frame camera; 35 to 50 mm lens for rooms, 90 to 100 mm macro lens for details. Straight verticals, corrected perspective, no wide-angle distortion. Natural color, gentle contrast, fine grain, no HDR look, no heavy color grading, no oversaturation.

REALISM AND QUALITY
Photorealistic and indistinguishable from a real photograph. Visible velvet nap, real quilting stitches, believable fabric weight and folds, correct scale between bed, bench and room. High resolution, sharp focus on the product.

RESTRICTIONS
No text, letters, numbers, logos, brand signs, wall lettering, labels, price tags or watermarks anywhere in the image.
No people unless the image brief explicitly asks for them; never a close or recognizable face; nothing that looks like a customer testimonial portrait.
No pets, no clutter, no party decorations, no cables, no screens.
No luxury excess (see setting). No collage, no split screen, no multiple variations in one file, no illustration, no cartoon or plastic 3D look, no border, no frame.

IMAGE BRIEF — 02 — Home banner, King size — vertical 2:3, 1400 x 2100 px
SCENE: use the attached empty room (image 00) exactly as it is — same wall, floor, curtain, light, camera position and framing. Do not zoom, crop or reframe. Add only the bed set.
WIDTH GUIDE — READ THIS FIRST: a second attached image is a flat, colorless technical diagram, not a photo. Use ONLY its measurements: it shows exactly how wide the box base is and exactly how wide the storage bench is in the same frame, and the two are the same width, edge to edge. Copy that exact width relationship for the bench: whatever fraction of the base's width the bench spans in the diagram, use the same fraction here. Never make the photographed bench narrower than the base just because the bench in the diagram is a plain flat shape. Ignore the diagram's colors, materials and background completely — those come only from the product photos.
PRODUCT: follow ONLY the attached charcoal grey King references. The references show the bed at an angle, next to other furniture; turn it to a straight frontal view, keep every detail of the grey bed set and ignore everything else in those photos. A Kanak King size bed set in charcoal grey velvet, with pillow top: a wide rectangular headboard with square corners and several rows of capitonê tufting with small crystal-look buttons; mattress with white quilted damask top and a clearly visible sewn-on cream pillow-top layer (not a loose topper), charcoal velvet side border with a small round metal eyelet, white piping at the mattress-base joint; charcoal box base on short straight tapered wooden legs; a low capitonê charcoal storage bench at the foot: the upholstered box is the full width of the box base, its left and right edges aligned with the box base's edges, on short thin tapered wooden legs set inward from the corners (much narrower than the box, never reducing the box's width), lifted clearly off the floor (the attached references are renders in which the bench looks narrower and legless — do not copy that); two small charcoal velvet pillows.
SIZE — THIS IS CRITICAL: this is a King bed, 193 cm wide. The frame shows 2.80 m of wall, so at the headboard the bed occupies 69% of the frame width, from 15.5% to 84.5% of the width. Plain wall remains visible on both sides of the headboard.
POSITION: bed centered on the vertical center line. Top surface of the mattress at 52% of the frame height from the top. Front of the storage bench at about 80% of the frame height. The lowest 18% of the frame is plain empty floor, with nothing in the lower left corner.
Only this one bed. Nothing else in the room: no second bed, no bedside tables, no lamps, no rug, no plants, no frames.
```

---

#### 03 · Banner Home — Casal

| Campo | Definição |
| --- | --- |
| Número | 03 |
| Arquivo | `my-app/public/images/home/banner-casal-bege.jpg` |
| Seção | Home · 1 Banner · terceira foto vertical (`hero_casal`) |
| Foto real existente | Nenhuma adequada (ver 2.3) |
| Origem | GERAR |
| Referências a anexar | **Só estas:** imagem 00 (cena) · `casal sem pillow top - bege showroom com recamier.jpeg` · `casal sem pillow top - bege showroom box sem recamier.jpeg` · `referencias-site/geradas/guia-banner-casal.png` (guia só de proporção: usar para o gerador acertar a largura do baú, nunca copiar as cores ou o material dela) |
| Objetivo | Mostrar o Casal como kit, visivelmente menor que Queen e King |
| Elemento principal | Kit Casal bege claro |
| Composição | Cama no eixo vertical, **49% da largura do quadro na cabeceira (357–1043 px)**; topo do colchão a 52% da altura |
| Enquadramento / Ângulo / Cenário / Iluminação | Os da imagem 00 |
| Cores | Bege-claro acinzentado (quase areia), tampo branco, madeira clara. O kit precisa se destacar da parede pela luz e sombra |
| Proporção | 2:3 |
| Resolução | 1400 × 2100 px |
| Área livre para texto | Canto inferior esquerdo, chão liso ("Casal · 138 x 188 cm") |
| Versão | Desktop e celular no mesmo arquivo |
| Detalhes do kit (da referência) | Cabeceira de altura média, capitonê no painel inteiro, botões de cristal; baú **com exatamente a mesma largura da base, mas com pezinhos de madeira visíveis**, com capitonê na tampa e alça de abertura discreta na frente; duas almofadas bege |
| Restrições | Sem letreiro, sem bandeirinhas, sem a cama amarela ao lado; kit bege não pode sumir na parede |

```text
PROMPT-BASE DE CONSISTÊNCIA — KANAK

BRAND
Kanak is a Brazilian mattress manufacturer that sells complete upholstered bed sets: mattress, box base, headboard and a storage bench for the foot of the bed. Visual identity: warm, calm, adult, trustworthy, editorial. Brand palette: cream (#FBF3E8), deep wine (#680B0E), apricot cream (#FFD29D), light natural wood, warm natural daylight. Premium product photography with a lot of breathing room — like a good furniture store, never a clearance ad, never a luxury hotel.

AUDIENCE AND SETTING
Brazilian families, ages 25 to 60, middle class. Rooms must feel real and attainable: an ordinary Brazilian apartment or house bedroom of about 10 to 14 square meters, smooth painted walls, light-wood laminate floor, a simple sheer linen curtain, at most one simple bedside table and one lamp. No chandeliers, no marble, no gold fixtures, no ornate wall moulding, no walk-in closets, no skyline views, no hotel suites, no mansion interiors.

PRODUCT — FOLLOW THE ATTACHED KANAK REFERENCES EXACTLY
The Kanak bed set has four parts, all upholstered in the same short-pile suede-like velvet, in one solid color per set:
1. HEADBOARD: tall rectangular panel with square corners, deep diamond capitonê tufting across the whole panel, a small clear crystal-look button at every tufting point, same width as the bed.
2. MATTRESS: flat white to off-white quilted top panel with a tone-on-tone damask floral pattern inside diamond quilting; thin white piping along the top edge; the side border of the mattress is upholstered in the same colored velvet as the set, with one small round metal eyelet on the side. Pillow-top version: one extra cream quilted layer sewn onto the top, with its own cream side band and piping, clearly thicker — part of the mattress, never a loose topper or folded quilt. Version without pillow top: a single flat quilted top.
3. BOX BASE: plain velvet box, no tufting, same color as the set, a thin white piping line where the mattress meets the base, short straight tapered wooden legs in medium brown.
4. STORAGE BENCH (baú): low rectangular velvet box at the foot of the bed. THE UPHOLSTERED BOX ITSELF, not the legs, spans the FULL width of the box base — its left and right edges sit directly above the left and right edges of the box base, never narrower, exactly like the mattress is never narrower than the base under it. It has its own short, thin tapered wooden legs in the same medium brown wood as the base legs, set inward from the box corners (much narrower than the box itself), lifting the box about 10 cm off the floor with a visible gap and contact shadow underneath. The legs are a small detail at the bottom corners; they must never make the box above them look narrower — the box is a separate piece of furniture from the base, not fused to it, but matches its full width. Plain body, capitonê-tufted lid with the same crystal-look buttons, hinged lid.
Two small velvet throw pillows in the set color lean against the headboard.
Follow the supplied product references exactly. Preserve the same shape, proportions, material, color, finish and internal details.
Do not invent logos, labels, tags, embroidery, extra seams, handles, buttons, legs, lights or any detail that is not visible in the references.

LIGHT
Soft warm natural daylight, about 3500 to 4500 K, from a side window through a sheer linen curtain. Gentle falloff, open soft shadows, realistic contact shadows under the furniture. No fluorescent ceiling tubes, no flash, no harsh highlights, no colored light, no blue cast.

PHOTOGRAPHIC DIRECTION
Editorial premium product photography: calm, uncluttered, generous empty space around the subject. Full-frame camera; 35 to 50 mm lens for rooms, 90 to 100 mm macro lens for details. Straight verticals, corrected perspective, no wide-angle distortion. Natural color, gentle contrast, fine grain, no HDR look, no heavy color grading, no oversaturation.

REALISM AND QUALITY
Photorealistic and indistinguishable from a real photograph. Visible velvet nap, real quilting stitches, believable fabric weight and folds, correct scale between bed, bench and room. High resolution, sharp focus on the product.

RESTRICTIONS
No text, letters, numbers, logos, brand signs, wall lettering, labels, price tags or watermarks anywhere in the image.
No people unless the image brief explicitly asks for them; never a close or recognizable face; nothing that looks like a customer testimonial portrait.
No pets, no clutter, no party decorations, no cables, no screens.
No luxury excess (see setting). No collage, no split screen, no multiple variations in one file, no illustration, no cartoon or plastic 3D look, no border, no frame.

IMAGE BRIEF — 03 — Home banner, Casal (double) size — vertical 2:3, 1400 x 2100 px
SCENE: use the attached empty room (image 00) exactly as it is — same wall, floor, curtain, light, camera position and framing. Do not zoom, crop or reframe. Add only the bed set.
WIDTH GUIDE — READ THIS FIRST: a second attached image is a flat, colorless technical diagram, not a photo. Use ONLY its measurements: it shows exactly how wide the box base is and exactly how wide the storage bench is in the same frame, and the two are the same width, edge to edge. Copy that exact width relationship for the bench: whatever fraction of the base's width the bench spans in the diagram, use the same fraction here. Never make the photographed bench narrower than the base just because the bench in the diagram is a plain flat shape. Ignore the diagram's colors, materials and background completely — those come only from the product photos.
PRODUCT: follow ONLY the attached light beige Casal references. The references show the bed at an angle in a showroom with other beds, a sign and decorations; turn the bed to a straight frontal view, keep every detail of the beige bed set and ignore everything else in those photos. A Kanak Casal size bed set in light greyish-beige (sand) velvet: a medium-height rectangular headboard with square corners, capitonê tufting over the whole panel with small crystal-look buttons; mattress with white quilted damask top, beige velvet side border with a small round metal eyelet, white piping at the mattress-base joint; beige box base on short straight tapered wooden legs; a low capitonê beige storage bench at the foot: the upholstered box is the full width of the box base, its left and right edges aligned with the box base's edges, on short thin tapered wooden legs set inward from the corners (much narrower than the box, never reducing the box's width), lifted clearly off the floor, with a discreet opening pull on its front; two small beige velvet pillows.
Separate the beige set from the off-white wall through soft side light and shadow, not by changing its color.
SIZE — THIS IS CRITICAL: this is a Casal bed, 138 cm wide, clearly narrower than a Queen or King. The frame shows 2.80 m of wall, so at the headboard the bed occupies 49% of the frame width, from 25.5% to 74.5% of the width. Do not enlarge the bed to fill the frame. Wide areas of plain wall remain visible on both sides of the headboard.
POSITION: bed centered on the vertical center line. Top surface of the mattress at 52% of the frame height from the top. Front of the storage bench at about 80% of the frame height. The lowest 18% of the frame is plain empty floor, with nothing in the lower left corner.
Only this one bed. Nothing else in the room: no second bed, no bedside tables, no lamps, no rug, no plants, no frames, no signs, no flags.
```

---

#### 04 · Banner Home — Solteiro

| Campo | Definição |
| --- | --- |
| Número | 04 |
| Arquivo | `my-app/public/images/home/banner-solteiro-vinho.jpg` |
| Seção | Home · 1 Banner · quarta foto vertical (`hero_solteiro`) |
| Foto real existente | Nenhuma adequada (ver 2.3) |
| Origem | GERAR |
| Referências a anexar | **Só estas:** imagem 00 (cena) · `solteiro sem pillow top - vinho showroom com recamier.jpeg` (é a única foto do Solteiro vinho; não completar com fotos de casal) · `referencias-site/geradas/guia-banner-solteiro.png` (guia só de proporção: usar para o gerador acertar a largura do baú, nunca copiar as cores ou o material dela) |
| Objetivo | Mostrar o Solteiro como kit, claramente a cama mais estreita |
| Elemento principal | Kit Solteiro vinho |
| Composição | Cama no eixo vertical, **31% da largura do quadro na cabeceira (483–917 px)**; topo do colchão a 52% da altura; muita parede livre dos dois lados |
| Enquadramento / Ângulo / Cenário / Iluminação | Os da imagem 00 |
| Cores | Vinho profundo (bordô), não vermelho vivo; tampo off-white com damasco; madeira clara |
| Proporção | 2:3 |
| Resolução | 1400 × 2100 px |
| Área livre para texto | Canto inferior esquerdo, chão liso ("Solteiro · 88 x 188 cm") |
| Versão | Desktop e celular no mesmo arquivo |
| Detalhes do kit (da referência) | Cabeceira **alta e estreita** (mais alta do que larga), capitonê com botões de cristal; baú **com exatamente a mesma largura da base, mas com pezinhos de madeira visíveis**, capitonê com botões de cristal na tampa; **uma** almofada vinho |
| Restrições | Sem cortina estampada, sem painel de madeira; a cama não pode ser alargada |

```text
PROMPT-BASE DE CONSISTÊNCIA — KANAK

BRAND
Kanak is a Brazilian mattress manufacturer that sells complete upholstered bed sets: mattress, box base, headboard and a storage bench for the foot of the bed. Visual identity: warm, calm, adult, trustworthy, editorial. Brand palette: cream (#FBF3E8), deep wine (#680B0E), apricot cream (#FFD29D), light natural wood, warm natural daylight. Premium product photography with a lot of breathing room — like a good furniture store, never a clearance ad, never a luxury hotel.

AUDIENCE AND SETTING
Brazilian families, ages 25 to 60, middle class. Rooms must feel real and attainable: an ordinary Brazilian apartment or house bedroom of about 10 to 14 square meters, smooth painted walls, light-wood laminate floor, a simple sheer linen curtain, at most one simple bedside table and one lamp. No chandeliers, no marble, no gold fixtures, no ornate wall moulding, no walk-in closets, no skyline views, no hotel suites, no mansion interiors.

PRODUCT — FOLLOW THE ATTACHED KANAK REFERENCES EXACTLY
The Kanak bed set has four parts, all upholstered in the same short-pile suede-like velvet, in one solid color per set:
1. HEADBOARD: tall rectangular panel with square corners, deep diamond capitonê tufting across the whole panel, a small clear crystal-look button at every tufting point, same width as the bed.
2. MATTRESS: flat white to off-white quilted top panel with a tone-on-tone damask floral pattern inside diamond quilting; thin white piping along the top edge; the side border of the mattress is upholstered in the same colored velvet as the set, with one small round metal eyelet on the side. Pillow-top version: one extra cream quilted layer sewn onto the top, with its own cream side band and piping, clearly thicker — part of the mattress, never a loose topper or folded quilt. Version without pillow top: a single flat quilted top.
3. BOX BASE: plain velvet box, no tufting, same color as the set, a thin white piping line where the mattress meets the base, short straight tapered wooden legs in medium brown.
4. STORAGE BENCH (baú): low rectangular velvet box at the foot of the bed. THE UPHOLSTERED BOX ITSELF, not the legs, spans the FULL width of the box base — its left and right edges sit directly above the left and right edges of the box base, never narrower, exactly like the mattress is never narrower than the base under it. It has its own short, thin tapered wooden legs in the same medium brown wood as the base legs, set inward from the box corners (much narrower than the box itself), lifting the box about 10 cm off the floor with a visible gap and contact shadow underneath. The legs are a small detail at the bottom corners; they must never make the box above them look narrower — the box is a separate piece of furniture from the base, not fused to it, but matches its full width. Plain body, capitonê-tufted lid with the same crystal-look buttons, hinged lid.
Two small velvet throw pillows in the set color lean against the headboard.
Follow the supplied product references exactly. Preserve the same shape, proportions, material, color, finish and internal details.
Do not invent logos, labels, tags, embroidery, extra seams, handles, buttons, legs, lights or any detail that is not visible in the references.

LIGHT
Soft warm natural daylight, about 3500 to 4500 K, from a side window through a sheer linen curtain. Gentle falloff, open soft shadows, realistic contact shadows under the furniture. No fluorescent ceiling tubes, no flash, no harsh highlights, no colored light, no blue cast.

PHOTOGRAPHIC DIRECTION
Editorial premium product photography: calm, uncluttered, generous empty space around the subject. Full-frame camera; 35 to 50 mm lens for rooms, 90 to 100 mm macro lens for details. Straight verticals, corrected perspective, no wide-angle distortion. Natural color, gentle contrast, fine grain, no HDR look, no heavy color grading, no oversaturation.

REALISM AND QUALITY
Photorealistic and indistinguishable from a real photograph. Visible velvet nap, real quilting stitches, believable fabric weight and folds, correct scale between bed, bench and room. High resolution, sharp focus on the product.

RESTRICTIONS
No text, letters, numbers, logos, brand signs, wall lettering, labels, price tags or watermarks anywhere in the image.
No people unless the image brief explicitly asks for them; never a close or recognizable face; nothing that looks like a customer testimonial portrait.
No pets, no clutter, no party decorations, no cables, no screens.
No luxury excess (see setting). No collage, no split screen, no multiple variations in one file, no illustration, no cartoon or plastic 3D look, no border, no frame.

IMAGE BRIEF — 04 — Home banner, Solteiro (single) size — vertical 2:3, 1400 x 2100 px
SCENE: use the attached empty room (image 00) exactly as it is — same wall, floor, curtain, light, camera position and framing. Do not zoom, crop or reframe. Add only the bed set.
WIDTH GUIDE — READ THIS FIRST: a second attached image is a flat, colorless technical diagram, not a photo. Use ONLY its measurements: it shows exactly how wide the box base is and exactly how wide the storage bench is in the same frame, and the two are the same width, edge to edge. Copy that exact width relationship for the bench: whatever fraction of the base's width the bench spans in the diagram, use the same fraction here. Never make the photographed bench narrower than the base just because the bench in the diagram is a plain flat shape. Ignore the diagram's colors, materials and background completely — those come only from the product photos.
PRODUCT: follow ONLY the attached wine single-bed reference. The reference shows the bed at an angle in a showroom; turn it to a straight frontal view, keep every detail of the bed set and ignore everything else in the photo. A Kanak Solteiro size bed set in deep wine (dark burgundy, close to #680B0E, not bright red) velvet: a tall, narrow rectangular headboard with square corners, taller than it is wide, with capitonê tufting and small crystal-look buttons; mattress with off-white quilted damask top, wine velvet side border with a small round metal eyelet, white piping at the mattress-base joint; wine box base on short straight tapered wooden legs; a low capitonê wine storage bench at the foot: the upholstered box is the full width of the box base, its left and right edges aligned with the box base's edges, on short thin tapered wooden legs set inward from the corners (much narrower than the box, never reducing the box's width), lifted clearly off the floor, with crystal-look buttons on the lid; one small wine velvet pillow.
SIZE — THIS IS CRITICAL: this is a single bed, only 88 cm wide, the narrowest of all. The frame shows 2.80 m of wall, so at the headboard the bed occupies only 31% of the frame width, from 34.5% to 65.5% of the width. Do not enlarge the bed to fill the frame. Large areas of plain wall and floor remain visible on both sides.
POSITION: bed centered on the vertical center line. Top surface of the mattress at 52% of the frame height from the top. Front of the storage bench at about 80% of the frame height. The lowest 18% of the frame is plain empty floor, with nothing in the lower left corner.
Only this one bed. Nothing else in the room: no bedside tables, no lamps, no rug, no plants, no frames, no patterned curtains, no wood wall panels.
```

---

### 05 · Ciência do Conforto — corte do colchão (PLACEHOLDER · SUBSTITUIR)

| Campo | Definição |
| --- | --- |
| Número | 05 |
| Arquivo | `my-app/public/images/home/ciencia-corte-camadas-PLACEHOLDER.jpg` (o sufixo sai quando chegar a foto real) |
| Seção | Home · 2 A Ciência do Conforto |
| Foto real existente | Não existe. **Pedir ao cliente:** foto de um colchão real cortado (amostra de fábrica), de lado, com as camadas visíveis e a espessura de cada uma medida |
| Origem | PLACEHOLDER — serve só para montar o layout. **Não publicar como definitiva**: mostraria uma estrutura interna que o cliente não confirmou |
| Observação de layout | O wireframe hoje resolve esta seção com um **desenho em código** das três camadas (Regulação térmica, Suporte anatômico, Alta resiliência, espessuras ⏳ PENDENTE). A foto é uma alternativa ou um complemento ao desenho — decisão sua antes de implementar |
| Referências a anexar | `kingsize com pillow top - cinza suite decorada com tapete (1024x1024).jpeg` (lateral do colchão, debrum, ilhós) |
| Objetivo | Tornar visível que o colchão tem camadas com funções diferentes |
| Elemento principal | Seção transversal de um colchão de molas ensacadas (as nove "células" do desenho do wireframe sugerem molas ensacadas) |
| Composição | Colchão cortado atravessando o quadro na horizontal, camadas bem separadas de cima para baixo; fundo creme liso |
| Enquadramento | Seção inteira na altura, com o corte ocupando 80% da largura |
| Ângulo | Lateral, na altura do corte, levemente de cima (10°); 90 mm |
| Cenário | Estúdio, fundo infinito creme `#FBF3E8` |
| Iluminação | Luz suave lateral de janela grande, sombra de contato leve |
| Cores | Creme, branco do tampo, veludo vinho na lateral, molas metálicas foscas em sacos de TNT branco, espuma off-white |
| Proporção | 3:2 |
| Resolução | 1800 × 1200 px |
| Área livre para texto | Nenhuma dentro da imagem (legendas das camadas ficam no HTML, fora da foto) |
| Versão | Desktop (recorte 5:3) e celular (recorte 4:3) do mesmo arquivo |
| Restrições | Sem números, setas, legendas ou medidas na imagem; não sugerir espessuras; sem gel colorido, sem camadas "tecnológicas" azuis |

```text
PROMPT-BASE DE CONSISTÊNCIA — KANAK

BRAND
Kanak is a Brazilian mattress manufacturer that sells complete upholstered bed sets: mattress, box base, headboard and a storage bench for the foot of the bed. Visual identity: warm, calm, adult, trustworthy, editorial. Brand palette: cream (#FBF3E8), deep wine (#680B0E), apricot cream (#FFD29D), light natural wood, warm natural daylight. Premium product photography with a lot of breathing room — like a good furniture store, never a clearance ad, never a luxury hotel.

AUDIENCE AND SETTING
Brazilian families, ages 25 to 60, middle class. Rooms must feel real and attainable: an ordinary Brazilian apartment or house bedroom of about 10 to 14 square meters, smooth painted walls, light-wood laminate floor, a simple sheer linen curtain, at most one simple bedside table and one lamp. No chandeliers, no marble, no gold fixtures, no ornate wall moulding, no walk-in closets, no skyline views, no hotel suites, no mansion interiors.

PRODUCT — FOLLOW THE ATTACHED KANAK REFERENCES EXACTLY
The Kanak bed set has four parts, all upholstered in the same short-pile suede-like velvet, in one solid color per set:
1. HEADBOARD: tall rectangular panel with square corners, deep diamond capitonê tufting across the whole panel, a small clear crystal-look button at every tufting point, same width as the bed.
2. MATTRESS: flat white to off-white quilted top panel with a tone-on-tone damask floral pattern inside diamond quilting; thin white piping along the top edge; the side border of the mattress is upholstered in the same colored velvet as the set, with one small round metal eyelet on the side. Pillow-top version: one extra cream quilted layer sewn onto the top, with its own cream side band and piping, clearly thicker — part of the mattress, never a loose topper or folded quilt. Version without pillow top: a single flat quilted top.
3. BOX BASE: plain velvet box, no tufting, same color as the set, a thin white piping line where the mattress meets the base, short straight tapered wooden legs in medium brown.
4. STORAGE BENCH (baú): low rectangular velvet box at the foot of the bed. THE UPHOLSTERED BOX ITSELF, not the legs, spans the FULL width of the box base — its left and right edges sit directly above the left and right edges of the box base, never narrower, exactly like the mattress is never narrower than the base under it. It has its own short, thin tapered wooden legs in the same medium brown wood as the base legs, set inward from the box corners (much narrower than the box itself), lifting the box about 10 cm off the floor with a visible gap and contact shadow underneath. The legs are a small detail at the bottom corners; they must never make the box above them look narrower — the box is a separate piece of furniture from the base, not fused to it, but matches its full width. Plain body, capitonê-tufted lid with the same crystal-look buttons, hinged lid.
Two small velvet throw pillows in the set color lean against the headboard.
Follow the supplied product references exactly. Preserve the same shape, proportions, material, color, finish and internal details.
Do not invent logos, labels, tags, embroidery, extra seams, handles, buttons, legs, lights or any detail that is not visible in the references.

LIGHT
Soft warm natural daylight, about 3500 to 4500 K, from a side window through a sheer linen curtain. Gentle falloff, open soft shadows, realistic contact shadows under the furniture. No fluorescent ceiling tubes, no flash, no harsh highlights, no colored light, no blue cast.

PHOTOGRAPHIC DIRECTION
Editorial premium product photography: calm, uncluttered, generous empty space around the subject. Full-frame camera; 35 to 50 mm lens for rooms, 90 to 100 mm macro lens for details. Straight verticals, corrected perspective, no wide-angle distortion. Natural color, gentle contrast, fine grain, no HDR look, no heavy color grading, no oversaturation.

REALISM AND QUALITY
Photorealistic and indistinguishable from a real photograph. Visible velvet nap, real quilting stitches, believable fabric weight and folds, correct scale between bed, bench and room. High resolution, sharp focus on the product.

RESTRICTIONS
No text, letters, numbers, logos, brand signs, wall lettering, labels, price tags or watermarks anywhere in the image.
No people unless the image brief explicitly asks for them; never a close or recognizable face; nothing that looks like a customer testimonial portrait.
No pets, no clutter, no party decorations, no cables, no screens.
No luxury excess (see setting). No collage, no split screen, no multiple variations in one file, no illustration, no cartoon or plastic 3D look, no border, no frame.

IMAGE BRIEF — 05 — Mattress cross-section, layout placeholder — landscape 3:2, 1800 x 1200 px
Studio product photograph of a Kanak mattress section, without headboard, base or bench, cut cleanly straight through so the inside is visible from the side, like a factory sample cut with a blade. The cut face runs horizontally across the frame and shows three clearly separated horizontal layers, top to bottom:
1. a comfort layer: the white quilted top panel with its tone-on-tone diamond quilting and white piping, over a soft off-white foam layer;
2. a support core of individually pocketed steel springs, each spring wrapped in its own white non-woven fabric pocket, standing in a neat row;
3. a dense, firm, off-white foam base layer with fine uniform cells.
The outer side border of the mattress, visible at the ends of the cut, is deep wine velvet with a thin white piping line, as in the references.
Side view at the height of the cut, camera tilted down about 10 degrees, 90 mm lens, the cut section filling about 80% of the frame width, centered. Seamless plain cream background (#FBF3E8), soft large window light from the left, light contact shadow under the section.
Clean, factual, calm. The layers must look like real materials, not a diagram.
No labels, arrows, numbers, measurement marks or callouts. No colored gel, no blue or glowing layers, no floating exploded parts.
```

---

### Família B — Qual colchão combina com você (06–08)

Três miniaturas quadradas (120 px no desktop, 88 px no celular). Precisam ser legíveis minúsculas: um único material, grande, fundo creme. Gerar as três na mesma sessão, com a mesma luz e o mesmo fundo.

#### 06 · Detalhe — Molas ensacadas

| Campo | Definição |
| --- | --- |
| Número | 06 |
| Arquivo | `my-app/public/images/home/tecnologia-molas-ensacadas.jpg` |
| Seção | Home · 3 Qual colchão combina com você · card "Molas ensacadas" |
| Foto real existente | Não existe. Ideal: foto de fábrica das molas ensacadas da Kanak |
| Origem | GERAR (troca por foto real se o cliente enviar) |
| Referências a anexar | Nenhuma de produto (estrutura interna não aparece nas fotos) |
| Objetivo | Identificar a tecnologia num relance |
| Elemento principal | Molas ensacadas em sacos de TNT branco |
| Composição | Três a quatro molas ensacadas em primeiro plano, fileira saindo de foco para trás |
| Enquadramento | Macro, molas ocupando 70% do quadro, centralizadas |
| Ângulo | Três-quartos, levemente de cima (30°), 100 mm macro |
| Cenário | Fundo creme liso |
| Iluminação | Luz lateral suave, realçando a textura do tecido |
| Cores | Branco, creme, cinza fosco do aço aparecendo pelo tecido |
| Proporção | 1:1 |
| Resolução | 800 × 800 px |
| Área livre para texto | Nenhuma |
| Versão | Desktop e celular (mesmo arquivo) |
| Restrições | Sem molas nuas cromadas brilhantes, sem marca no TNT, sem mola azul |

```text
PROMPT-BASE DE CONSISTÊNCIA — KANAK

BRAND
Kanak is a Brazilian mattress manufacturer that sells complete upholstered bed sets: mattress, box base, headboard and a storage bench for the foot of the bed. Visual identity: warm, calm, adult, trustworthy, editorial. Brand palette: cream (#FBF3E8), deep wine (#680B0E), apricot cream (#FFD29D), light natural wood, warm natural daylight. Premium product photography with a lot of breathing room — like a good furniture store, never a clearance ad, never a luxury hotel.

AUDIENCE AND SETTING
Brazilian families, ages 25 to 60, middle class. Rooms must feel real and attainable: an ordinary Brazilian apartment or house bedroom of about 10 to 14 square meters, smooth painted walls, light-wood laminate floor, a simple sheer linen curtain, at most one simple bedside table and one lamp. No chandeliers, no marble, no gold fixtures, no ornate wall moulding, no walk-in closets, no skyline views, no hotel suites, no mansion interiors.

PRODUCT — FOLLOW THE ATTACHED KANAK REFERENCES EXACTLY
The Kanak bed set has four parts, all upholstered in the same short-pile suede-like velvet, in one solid color per set:
1. HEADBOARD: tall rectangular panel with square corners, deep diamond capitonê tufting across the whole panel, a small clear crystal-look button at every tufting point, same width as the bed.
2. MATTRESS: flat white to off-white quilted top panel with a tone-on-tone damask floral pattern inside diamond quilting; thin white piping along the top edge; the side border of the mattress is upholstered in the same colored velvet as the set, with one small round metal eyelet on the side. Pillow-top version: one extra cream quilted layer sewn onto the top, with its own cream side band and piping, clearly thicker — part of the mattress, never a loose topper or folded quilt. Version without pillow top: a single flat quilted top.
3. BOX BASE: plain velvet box, no tufting, same color as the set, a thin white piping line where the mattress meets the base, short straight tapered wooden legs in medium brown.
4. STORAGE BENCH (baú): low rectangular velvet box at the foot of the bed. THE UPHOLSTERED BOX ITSELF, not the legs, spans the FULL width of the box base — its left and right edges sit directly above the left and right edges of the box base, never narrower, exactly like the mattress is never narrower than the base under it. It has its own short, thin tapered wooden legs in the same medium brown wood as the base legs, set inward from the box corners (much narrower than the box itself), lifting the box about 10 cm off the floor with a visible gap and contact shadow underneath. The legs are a small detail at the bottom corners; they must never make the box above them look narrower — the box is a separate piece of furniture from the base, not fused to it, but matches its full width. Plain body, capitonê-tufted lid with the same crystal-look buttons, hinged lid.
Two small velvet throw pillows in the set color lean against the headboard.
Follow the supplied product references exactly. Preserve the same shape, proportions, material, color, finish and internal details.
Do not invent logos, labels, tags, embroidery, extra seams, handles, buttons, legs, lights or any detail that is not visible in the references.

LIGHT
Soft warm natural daylight, about 3500 to 4500 K, from a side window through a sheer linen curtain. Gentle falloff, open soft shadows, realistic contact shadows under the furniture. No fluorescent ceiling tubes, no flash, no harsh highlights, no colored light, no blue cast.

PHOTOGRAPHIC DIRECTION
Editorial premium product photography: calm, uncluttered, generous empty space around the subject. Full-frame camera; 35 to 50 mm lens for rooms, 90 to 100 mm macro lens for details. Straight verticals, corrected perspective, no wide-angle distortion. Natural color, gentle contrast, fine grain, no HDR look, no heavy color grading, no oversaturation.

REALISM AND QUALITY
Photorealistic and indistinguishable from a real photograph. Visible velvet nap, real quilting stitches, believable fabric weight and folds, correct scale between bed, bench and room. High resolution, sharp focus on the product.

RESTRICTIONS
No text, letters, numbers, logos, brand signs, wall lettering, labels, price tags or watermarks anywhere in the image.
No people unless the image brief explicitly asks for them; never a close or recognizable face; nothing that looks like a customer testimonial portrait.
No pets, no clutter, no party decorations, no cables, no screens.
No luxury excess (see setting). No collage, no split screen, no multiple variations in one file, no illustration, no cartoon or plastic 3D look, no border, no frame.

IMAGE BRIEF — 06 — Pocket springs detail — square 1:1, 800 x 800 px
Macro studio photograph of mattress pocket springs: three or four individual steel coil springs, each fully wrapped in its own soft white non-woven fabric pocket, standing upright side by side in a row that recedes softly out of focus. The coil shape is visible through the thin fabric; the steel is matte, not chrome.
Three-quarter view from about 30 degrees above, 100 mm macro lens, f/5.6, springs filling about 70% of the frame and centered. Plain seamless cream background (#FBF3E8). Soft warm side light from the left that reveals the fabric texture, gentle contact shadows.
This image is displayed very small, so keep a single clear subject with strong, simple shapes.
No bare shiny springs, no blue or colored springs, no printing on the fabric, no mattress cover, no hands.
```

---

#### 07 · Detalhe — Espuma de alta densidade

| Campo | Definição |
| --- | --- |
| Número | 07 |
| Arquivo | `my-app/public/images/home/tecnologia-espuma.jpg` |
| Seção | Home · 3 Qual colchão combina com você · card "Espuma de alta densidade" |
| Foto real existente | Não existe. Ideal: foto da espuma usada pela Kanak (a cor real da espuma pode variar) |
| Origem | GERAR (troca por foto real se o cliente enviar) |
| Referências a anexar | Nenhuma |
| Objetivo | Identificar a tecnologia num relance |
| Elemento principal | Bloco de espuma com a face de corte à mostra |
| Composição | Bloco em canto (três-quartos), face de corte ocupando a maior parte do quadro |
| Enquadramento | Macro, bloco ocupando 70% do quadro |
| Ângulo | Três-quartos, 30° de cima, 100 mm macro |
| Cenário / Iluminação | Iguais à 06 |
| Cores | Off-white / creme claro; fundo creme |
| Proporção | 1:1 |
| Resolução | 800 × 800 px |
| Área livre para texto | Nenhuma |
| Versão | Desktop e celular (mesmo arquivo) |
| Restrições | Sem valor de densidade, sem espuma colorida (azul, rosa, cinza-gel), sem mão pressionando |

```text
PROMPT-BASE DE CONSISTÊNCIA — KANAK

BRAND
Kanak is a Brazilian mattress manufacturer that sells complete upholstered bed sets: mattress, box base, headboard and a storage bench for the foot of the bed. Visual identity: warm, calm, adult, trustworthy, editorial. Brand palette: cream (#FBF3E8), deep wine (#680B0E), apricot cream (#FFD29D), light natural wood, warm natural daylight. Premium product photography with a lot of breathing room — like a good furniture store, never a clearance ad, never a luxury hotel.

AUDIENCE AND SETTING
Brazilian families, ages 25 to 60, middle class. Rooms must feel real and attainable: an ordinary Brazilian apartment or house bedroom of about 10 to 14 square meters, smooth painted walls, light-wood laminate floor, a simple sheer linen curtain, at most one simple bedside table and one lamp. No chandeliers, no marble, no gold fixtures, no ornate wall moulding, no walk-in closets, no skyline views, no hotel suites, no mansion interiors.

PRODUCT — FOLLOW THE ATTACHED KANAK REFERENCES EXACTLY
The Kanak bed set has four parts, all upholstered in the same short-pile suede-like velvet, in one solid color per set:
1. HEADBOARD: tall rectangular panel with square corners, deep diamond capitonê tufting across the whole panel, a small clear crystal-look button at every tufting point, same width as the bed.
2. MATTRESS: flat white to off-white quilted top panel with a tone-on-tone damask floral pattern inside diamond quilting; thin white piping along the top edge; the side border of the mattress is upholstered in the same colored velvet as the set, with one small round metal eyelet on the side. Pillow-top version: one extra cream quilted layer sewn onto the top, with its own cream side band and piping, clearly thicker — part of the mattress, never a loose topper or folded quilt. Version without pillow top: a single flat quilted top.
3. BOX BASE: plain velvet box, no tufting, same color as the set, a thin white piping line where the mattress meets the base, short straight tapered wooden legs in medium brown.
4. STORAGE BENCH (baú): low rectangular velvet box at the foot of the bed. THE UPHOLSTERED BOX ITSELF, not the legs, spans the FULL width of the box base — its left and right edges sit directly above the left and right edges of the box base, never narrower, exactly like the mattress is never narrower than the base under it. It has its own short, thin tapered wooden legs in the same medium brown wood as the base legs, set inward from the box corners (much narrower than the box itself), lifting the box about 10 cm off the floor with a visible gap and contact shadow underneath. The legs are a small detail at the bottom corners; they must never make the box above them look narrower — the box is a separate piece of furniture from the base, not fused to it, but matches its full width. Plain body, capitonê-tufted lid with the same crystal-look buttons, hinged lid.
Two small velvet throw pillows in the set color lean against the headboard.
Follow the supplied product references exactly. Preserve the same shape, proportions, material, color, finish and internal details.
Do not invent logos, labels, tags, embroidery, extra seams, handles, buttons, legs, lights or any detail that is not visible in the references.

LIGHT
Soft warm natural daylight, about 3500 to 4500 K, from a side window through a sheer linen curtain. Gentle falloff, open soft shadows, realistic contact shadows under the furniture. No fluorescent ceiling tubes, no flash, no harsh highlights, no colored light, no blue cast.

PHOTOGRAPHIC DIRECTION
Editorial premium product photography: calm, uncluttered, generous empty space around the subject. Full-frame camera; 35 to 50 mm lens for rooms, 90 to 100 mm macro lens for details. Straight verticals, corrected perspective, no wide-angle distortion. Natural color, gentle contrast, fine grain, no HDR look, no heavy color grading, no oversaturation.

REALISM AND QUALITY
Photorealistic and indistinguishable from a real photograph. Visible velvet nap, real quilting stitches, believable fabric weight and folds, correct scale between bed, bench and room. High resolution, sharp focus on the product.

RESTRICTIONS
No text, letters, numbers, logos, brand signs, wall lettering, labels, price tags or watermarks anywhere in the image.
No people unless the image brief explicitly asks for them; never a close or recognizable face; nothing that looks like a customer testimonial portrait.
No pets, no clutter, no party decorations, no cables, no screens.
No luxury excess (see setting). No collage, no split screen, no multiple variations in one file, no illustration, no cartoon or plastic 3D look, no border, no frame.

IMAGE BRIEF — 07 — High-density foam detail — square 1:1, 800 x 800 px
Macro studio photograph of a block of high-density mattress foam, seen at a three-quarter angle so one clean cut face fills most of the frame. The foam is off-white to very light cream, with a fine, tight, uniform cell structure that reads as dense and firm; the cut edges are crisp and square.
Three-quarter view from about 30 degrees above, 100 mm macro lens, f/5.6, the block filling about 70% of the frame and centered. Plain seamless cream background (#FBF3E8). Same soft warm side light from the left as the matching pocket-spring image, gentle contact shadow.
This image is displayed very small, so keep a single clear subject with a strong simple shape.
No colored foam (no blue, pink, green or grey gel), no hands pressing, no density numbers, no layered diagram.
```

---

#### 08 · Detalhe — Magnético (PLACEHOLDER · SUBSTITUIR)

| Campo | Definição |
| --- | --- |
| Número | 08 |
| Arquivo | `my-app/public/images/home/tecnologia-magnetico-PLACEHOLDER.jpg` |
| Seção | Home · 3 Qual colchão combina com você · card "Magnético" |
| Foto real existente | Não existe. **Pedir ao cliente:** foto de detalhe do colchão magnético (tampo, tecido ou o elemento que o diferencia) e a descrição da estrutura |
| Origem | PLACEHOLDER — a estrutura do magnético não foi informada; inventar ímãs, placas ou "campos" seria informação técnica falsa e aproximaria o site de promessa terapêutica (proibida em `specs/design.md` §11) |
| Referências a anexar | `casal sem pillow top - vinho parede leao sem recamier.jpeg` (tampo acolchoado real) |
| Objetivo | Manter o card com imagem enquanto a foto real não chega |
| Elemento principal | Macro do tampo acolchoado branco do colchão |
| Composição / Ângulo / Cenário / Iluminação | Iguais à 06 e à 07 |
| Cores | Branco, off-white, creme |
| Proporção | 1:1 |
| Resolução | 800 × 800 px |
| Área livre para texto | Nenhuma |
| Versão | Desktop e celular (mesmo arquivo) |
| Restrições | **Sem ímãs visíveis**, sem brilho, linhas de energia, ondas, aura ou qualquer efeito "terapêutico" |

```text
PROMPT-BASE DE CONSISTÊNCIA — KANAK

BRAND
Kanak is a Brazilian mattress manufacturer that sells complete upholstered bed sets: mattress, box base, headboard and a storage bench for the foot of the bed. Visual identity: warm, calm, adult, trustworthy, editorial. Brand palette: cream (#FBF3E8), deep wine (#680B0E), apricot cream (#FFD29D), light natural wood, warm natural daylight. Premium product photography with a lot of breathing room — like a good furniture store, never a clearance ad, never a luxury hotel.

AUDIENCE AND SETTING
Brazilian families, ages 25 to 60, middle class. Rooms must feel real and attainable: an ordinary Brazilian apartment or house bedroom of about 10 to 14 square meters, smooth painted walls, light-wood laminate floor, a simple sheer linen curtain, at most one simple bedside table and one lamp. No chandeliers, no marble, no gold fixtures, no ornate wall moulding, no walk-in closets, no skyline views, no hotel suites, no mansion interiors.

PRODUCT — FOLLOW THE ATTACHED KANAK REFERENCES EXACTLY
The Kanak bed set has four parts, all upholstered in the same short-pile suede-like velvet, in one solid color per set:
1. HEADBOARD: tall rectangular panel with square corners, deep diamond capitonê tufting across the whole panel, a small clear crystal-look button at every tufting point, same width as the bed.
2. MATTRESS: flat white to off-white quilted top panel with a tone-on-tone damask floral pattern inside diamond quilting; thin white piping along the top edge; the side border of the mattress is upholstered in the same colored velvet as the set, with one small round metal eyelet on the side. Pillow-top version: one extra cream quilted layer sewn onto the top, with its own cream side band and piping, clearly thicker — part of the mattress, never a loose topper or folded quilt. Version without pillow top: a single flat quilted top.
3. BOX BASE: plain velvet box, no tufting, same color as the set, a thin white piping line where the mattress meets the base, short straight tapered wooden legs in medium brown.
4. STORAGE BENCH (baú): low rectangular velvet box at the foot of the bed. THE UPHOLSTERED BOX ITSELF, not the legs, spans the FULL width of the box base — its left and right edges sit directly above the left and right edges of the box base, never narrower, exactly like the mattress is never narrower than the base under it. It has its own short, thin tapered wooden legs in the same medium brown wood as the base legs, set inward from the box corners (much narrower than the box itself), lifting the box about 10 cm off the floor with a visible gap and contact shadow underneath. The legs are a small detail at the bottom corners; they must never make the box above them look narrower — the box is a separate piece of furniture from the base, not fused to it, but matches its full width. Plain body, capitonê-tufted lid with the same crystal-look buttons, hinged lid.
Two small velvet throw pillows in the set color lean against the headboard.
Follow the supplied product references exactly. Preserve the same shape, proportions, material, color, finish and internal details.
Do not invent logos, labels, tags, embroidery, extra seams, handles, buttons, legs, lights or any detail that is not visible in the references.

LIGHT
Soft warm natural daylight, about 3500 to 4500 K, from a side window through a sheer linen curtain. Gentle falloff, open soft shadows, realistic contact shadows under the furniture. No fluorescent ceiling tubes, no flash, no harsh highlights, no colored light, no blue cast.

PHOTOGRAPHIC DIRECTION
Editorial premium product photography: calm, uncluttered, generous empty space around the subject. Full-frame camera; 35 to 50 mm lens for rooms, 90 to 100 mm macro lens for details. Straight verticals, corrected perspective, no wide-angle distortion. Natural color, gentle contrast, fine grain, no HDR look, no heavy color grading, no oversaturation.

REALISM AND QUALITY
Photorealistic and indistinguishable from a real photograph. Visible velvet nap, real quilting stitches, believable fabric weight and folds, correct scale between bed, bench and room. High resolution, sharp focus on the product.

RESTRICTIONS
No text, letters, numbers, logos, brand signs, wall lettering, labels, price tags or watermarks anywhere in the image.
No people unless the image brief explicitly asks for them; never a close or recognizable face; nothing that looks like a customer testimonial portrait.
No pets, no clutter, no party decorations, no cables, no screens.
No luxury excess (see setting). No collage, no split screen, no multiple variations in one file, no illustration, no cartoon or plastic 3D look, no border, no frame.

IMAGE BRIEF — 08 — Magnetic mattress card, layout placeholder — square 1:1, 800 x 800 px
Macro studio photograph of the corner of a Kanak mattress top: the white quilted top panel with its tone-on-tone damask floral pattern inside diamond quilting and the thin white piping along the edge, exactly as in the attached reference. The quilted surface fills most of the frame; the rounded piping edge crosses the lower part of the frame diagonally.
Three-quarter view from about 30 degrees above, 100 mm macro lens, f/5.6. Plain seamless cream background (#FBF3E8) visible only at one corner. Same soft warm side light from the left as the matching pocket-spring and foam images, so the three small images read as one set.
Nothing that suggests magnets or therapy: no visible magnets, no metal discs, no glow, no energy lines, no waves, no aura, no sparkles, no medical imagery.
```

---

### Família C — Modelos (09–11) · Home e Landing

Mesmos três arquivos na Home (seção 4) e na Landing (seção 3). Os espaços variam de 1,21:1 a 1,45:1, então o mestre é 3:2 com o assunto dentro de uma **zona segura central 5:4** (1500 × 1200 no centro do mestre).

Por que um colchão sozinho com corte de canto: por fora os três modelos parecem iguais (e as fotos reais não dizem qual é qual). O corte no canto mostra a diferença sem inventar dados. Todos na mesma cor (bege claro, neutra e próxima do creme), para que a cor não pareça indicar o modelo.

Pendência que afeta a família: acabamento oficial de cada linha (pillow top ou não, tecido do tampo). Até confirmar, os três saem **sem pillow top** e com o tampo padrão das fotos.

#### 09 · Modelo — Molas Ensacadas

| Campo | Definição |
| --- | --- |
| Número | 09 |
| Arquivo | `my-app/public/images/shared/modelo-molas-ensacadas.jpg` |
| Seção | Home · 4 "Encontre o modelo que combina com você" (`modelo_molas`) · Landing · 3 "Escolha a Tecnologia" (`lp_modelo_molas`) |
| Foto real existente | Nenhuma identifica o modelo. **Pedir ao cliente** quais fotos do acervo são de molas ensacadas |
| Origem | GERAR |
| Referências a anexar | `casal sem pillow top - bege showroom box sem recamier.jpeg`, `casal sem pillow top - bege showroom bau sem recamier.jpeg` (lateral bege, debrum, ilhós) |
| Objetivo | Card clicável do modelo: reconhecer a estrutura e clicar para falar no WhatsApp |
| Elemento principal | Colchão bege sem pillow top, com um corte de canto mostrando molas ensacadas |
| Composição | Colchão em diagonal suave, canto frontal direito recortado em "L" (um quarto removido), mostrando o interior; colchão centralizado na zona 5:4 |
| Enquadramento | Colchão inteiro no quadro, ocupando ~70% da largura; respiro em volta |
| Ângulo | Três-quartos pela frente-direita, 35° de cima, 50 mm |
| Cenário | Estúdio creme; colchão pousado direto sobre uma base baixa creme lisa (plinto), sem cabeceira |
| Iluminação | Janela grande à esquerda, luz quente e suave |
| Cores | Creme, bege claro, branco do tampo, TNT branco das molas |
| Proporção | 3:2 |
| Resolução | 1800 × 1200 px |
| Área livre para texto | Nenhuma (título e texto do card ficam abaixo da foto) |
| Versão | Um arquivo: Home desktop (1,45:1), Home celular (1,27:1), Landing desktop (1,26:1), Landing celular (1,21:1) |
| Restrições | Sem etiqueta, sem camadas coloridas, sem medidas; o corte precisa parecer amostra real, não ilustração explodida |

```text
PROMPT-BASE DE CONSISTÊNCIA — KANAK

BRAND
Kanak is a Brazilian mattress manufacturer that sells complete upholstered bed sets: mattress, box base, headboard and a storage bench for the foot of the bed. Visual identity: warm, calm, adult, trustworthy, editorial. Brand palette: cream (#FBF3E8), deep wine (#680B0E), apricot cream (#FFD29D), light natural wood, warm natural daylight. Premium product photography with a lot of breathing room — like a good furniture store, never a clearance ad, never a luxury hotel.

AUDIENCE AND SETTING
Brazilian families, ages 25 to 60, middle class. Rooms must feel real and attainable: an ordinary Brazilian apartment or house bedroom of about 10 to 14 square meters, smooth painted walls, light-wood laminate floor, a simple sheer linen curtain, at most one simple bedside table and one lamp. No chandeliers, no marble, no gold fixtures, no ornate wall moulding, no walk-in closets, no skyline views, no hotel suites, no mansion interiors.

PRODUCT — FOLLOW THE ATTACHED KANAK REFERENCES EXACTLY
The Kanak bed set has four parts, all upholstered in the same short-pile suede-like velvet, in one solid color per set:
1. HEADBOARD: tall rectangular panel with square corners, deep diamond capitonê tufting across the whole panel, a small clear crystal-look button at every tufting point, same width as the bed.
2. MATTRESS: flat white to off-white quilted top panel with a tone-on-tone damask floral pattern inside diamond quilting; thin white piping along the top edge; the side border of the mattress is upholstered in the same colored velvet as the set, with one small round metal eyelet on the side. Pillow-top version: one extra cream quilted layer sewn onto the top, with its own cream side band and piping, clearly thicker — part of the mattress, never a loose topper or folded quilt. Version without pillow top: a single flat quilted top.
3. BOX BASE: plain velvet box, no tufting, same color as the set, a thin white piping line where the mattress meets the base, short straight tapered wooden legs in medium brown.
4. STORAGE BENCH (baú): low rectangular velvet box at the foot of the bed. THE UPHOLSTERED BOX ITSELF, not the legs, spans the FULL width of the box base — its left and right edges sit directly above the left and right edges of the box base, never narrower, exactly like the mattress is never narrower than the base under it. It has its own short, thin tapered wooden legs in the same medium brown wood as the base legs, set inward from the box corners (much narrower than the box itself), lifting the box about 10 cm off the floor with a visible gap and contact shadow underneath. The legs are a small detail at the bottom corners; they must never make the box above them look narrower — the box is a separate piece of furniture from the base, not fused to it, but matches its full width. Plain body, capitonê-tufted lid with the same crystal-look buttons, hinged lid.
Two small velvet throw pillows in the set color lean against the headboard.
Follow the supplied product references exactly. Preserve the same shape, proportions, material, color, finish and internal details.
Do not invent logos, labels, tags, embroidery, extra seams, handles, buttons, legs, lights or any detail that is not visible in the references.

LIGHT
Soft warm natural daylight, about 3500 to 4500 K, from a side window through a sheer linen curtain. Gentle falloff, open soft shadows, realistic contact shadows under the furniture. No fluorescent ceiling tubes, no flash, no harsh highlights, no colored light, no blue cast.

PHOTOGRAPHIC DIRECTION
Editorial premium product photography: calm, uncluttered, generous empty space around the subject. Full-frame camera; 35 to 50 mm lens for rooms, 90 to 100 mm macro lens for details. Straight verticals, corrected perspective, no wide-angle distortion. Natural color, gentle contrast, fine grain, no HDR look, no heavy color grading, no oversaturation.

REALISM AND QUALITY
Photorealistic and indistinguishable from a real photograph. Visible velvet nap, real quilting stitches, believable fabric weight and folds, correct scale between bed, bench and room. High resolution, sharp focus on the product.

RESTRICTIONS
No text, letters, numbers, logos, brand signs, wall lettering, labels, price tags or watermarks anywhere in the image.
No people unless the image brief explicitly asks for them; never a close or recognizable face; nothing that looks like a customer testimonial portrait.
No pets, no clutter, no party decorations, no cables, no screens.
No luxury excess (see setting). No collage, no split screen, no multiple variations in one file, no illustration, no cartoon or plastic 3D look, no border, no frame.

IMAGE BRIEF — 09 — Model card, Pocket springs (Molas Ensacadas) — landscape 3:2, 1800 x 1200 px
This is the first of three matching model images; the other two must share the exact same framing, light, background and mattress.
Studio product photograph of a single Kanak mattress, without headboard or storage bench, resting on a low plain cream plinth. Mattress without pillow top: flat white quilted top with the tone-on-tone damask pattern, thin white piping, side border in light beige velvet with one small round metal eyelet, exactly as in the attached beige references.
The front right corner of the mattress has a clean quarter cutaway, like a factory display sample: an L-shaped block removed so the inside is visible on both cut faces. Inside: a thin comfort layer of off-white foam under the quilted top, then a core of individually pocketed steel springs, each wrapped in its own white non-woven fabric pocket, then a thin firm off-white foam base.
Three-quarter view from the front right, camera about 35 degrees above, 50 mm lens. The mattress is centered and fills about 70% of the frame width; keep the whole mattress, including the cutaway, inside the central 5:4 area of the frame, with calm empty cream space around it. Seamless cream background (#FBF3E8), soft warm window light from the left, realistic contact shadow.
The cutaway must look like a real cut sample, not an exploded diagram: no floating layers, no labels, no arrows, no colored layers.
```

---

#### 10 · Modelo — Anatômico Ortopédico

| Campo | Definição |
| --- | --- |
| Número | 10 |
| Arquivo | `my-app/public/images/shared/modelo-anatomico-ortopedico.jpg` |
| Seção | Home · 4 (`modelo_anatomico`) · Landing · 3 (`lp_modelo_anatomico`) |
| Foto real existente | Nenhuma identifica o modelo. **Pedir ao cliente** |
| Origem | GERAR, na mesma sessão da 09, com a 09 aprovada anexada como referência de cena |
| Referências a anexar | As mesmas da 09 + imagem 09 aprovada |
| Objetivo | Card clicável do modelo |
| Elemento principal | Mesmo colchão, com corte mostrando espuma densa em camadas (espuma de alta resiliência, conforme copy aprovada da landing) |
| Composição / Enquadramento / Ângulo / Cenário / Iluminação / Cores | Idênticos à 09 |
| Proporção | 3:2 |
| Resolução | 1800 × 1200 px |
| Área livre para texto | Nenhuma |
| Versão | Mesmo uso da 09 |
| Restrições | Sem densidade escrita, sem espuma colorida, sem aparência "hospitalar" ou ortopédica (nada de coluna desenhada) |

```text
PROMPT-BASE DE CONSISTÊNCIA — KANAK

BRAND
Kanak is a Brazilian mattress manufacturer that sells complete upholstered bed sets: mattress, box base, headboard and a storage bench for the foot of the bed. Visual identity: warm, calm, adult, trustworthy, editorial. Brand palette: cream (#FBF3E8), deep wine (#680B0E), apricot cream (#FFD29D), light natural wood, warm natural daylight. Premium product photography with a lot of breathing room — like a good furniture store, never a clearance ad, never a luxury hotel.

AUDIENCE AND SETTING
Brazilian families, ages 25 to 60, middle class. Rooms must feel real and attainable: an ordinary Brazilian apartment or house bedroom of about 10 to 14 square meters, smooth painted walls, light-wood laminate floor, a simple sheer linen curtain, at most one simple bedside table and one lamp. No chandeliers, no marble, no gold fixtures, no ornate wall moulding, no walk-in closets, no skyline views, no hotel suites, no mansion interiors.

PRODUCT — FOLLOW THE ATTACHED KANAK REFERENCES EXACTLY
The Kanak bed set has four parts, all upholstered in the same short-pile suede-like velvet, in one solid color per set:
1. HEADBOARD: tall rectangular panel with square corners, deep diamond capitonê tufting across the whole panel, a small clear crystal-look button at every tufting point, same width as the bed.
2. MATTRESS: flat white to off-white quilted top panel with a tone-on-tone damask floral pattern inside diamond quilting; thin white piping along the top edge; the side border of the mattress is upholstered in the same colored velvet as the set, with one small round metal eyelet on the side. Pillow-top version: one extra cream quilted layer sewn onto the top, with its own cream side band and piping, clearly thicker — part of the mattress, never a loose topper or folded quilt. Version without pillow top: a single flat quilted top.
3. BOX BASE: plain velvet box, no tufting, same color as the set, a thin white piping line where the mattress meets the base, short straight tapered wooden legs in medium brown.
4. STORAGE BENCH (baú): low rectangular velvet box at the foot of the bed. THE UPHOLSTERED BOX ITSELF, not the legs, spans the FULL width of the box base — its left and right edges sit directly above the left and right edges of the box base, never narrower, exactly like the mattress is never narrower than the base under it. It has its own short, thin tapered wooden legs in the same medium brown wood as the base legs, set inward from the box corners (much narrower than the box itself), lifting the box about 10 cm off the floor with a visible gap and contact shadow underneath. The legs are a small detail at the bottom corners; they must never make the box above them look narrower — the box is a separate piece of furniture from the base, not fused to it, but matches its full width. Plain body, capitonê-tufted lid with the same crystal-look buttons, hinged lid.
Two small velvet throw pillows in the set color lean against the headboard.
Follow the supplied product references exactly. Preserve the same shape, proportions, material, color, finish and internal details.
Do not invent logos, labels, tags, embroidery, extra seams, handles, buttons, legs, lights or any detail that is not visible in the references.

LIGHT
Soft warm natural daylight, about 3500 to 4500 K, from a side window through a sheer linen curtain. Gentle falloff, open soft shadows, realistic contact shadows under the furniture. No fluorescent ceiling tubes, no flash, no harsh highlights, no colored light, no blue cast.

PHOTOGRAPHIC DIRECTION
Editorial premium product photography: calm, uncluttered, generous empty space around the subject. Full-frame camera; 35 to 50 mm lens for rooms, 90 to 100 mm macro lens for details. Straight verticals, corrected perspective, no wide-angle distortion. Natural color, gentle contrast, fine grain, no HDR look, no heavy color grading, no oversaturation.

REALISM AND QUALITY
Photorealistic and indistinguishable from a real photograph. Visible velvet nap, real quilting stitches, believable fabric weight and folds, correct scale between bed, bench and room. High resolution, sharp focus on the product.

RESTRICTIONS
No text, letters, numbers, logos, brand signs, wall lettering, labels, price tags or watermarks anywhere in the image.
No people unless the image brief explicitly asks for them; never a close or recognizable face; nothing that looks like a customer testimonial portrait.
No pets, no clutter, no party decorations, no cables, no screens.
No luxury excess (see setting). No collage, no split screen, no multiple variations in one file, no illustration, no cartoon or plastic 3D look, no border, no frame.

IMAGE BRIEF — 10 — Model card, High-density foam (Anatômico Ortopédico) — landscape 3:2, 1800 x 1200 px
Scene reference: keep exactly the same framing, camera angle, plinth, background, light and mattress exterior as the attached pocket-spring model image (image 09). Only the inside of the cutaway changes.
Studio product photograph of a single Kanak mattress, without headboard or storage bench, resting on a low plain cream plinth. Mattress without pillow top: flat white quilted top with the tone-on-tone damask pattern, thin white piping, side border in light beige velvet with one small round metal eyelet.
The front right corner has the same clean quarter cutaway as image 09. Inside, instead of springs: solid foam all the way down — a thin soft off-white comfort layer under the quilted top over a thick core of dense, firm, off-white foam with a fine uniform cell structure, the layers bonded flat and square.
Three-quarter view from the front right, camera about 35 degrees above, 50 mm lens. Mattress centered, about 70% of the frame width, entirely inside the central 5:4 area. Seamless cream background (#FBF3E8), soft warm window light from the left, realistic contact shadow.
The cutaway must look like a real cut sample. No floating layers, labels, arrows, numbers or colored layers. Nothing medical: no drawn spine, no body outline, no clinical look.
```

---

#### 11 · Modelo — Magnético (PLACEHOLDER parcial · SUBSTITUIR)

| Campo | Definição |
| --- | --- |
| Número | 11 |
| Arquivo | `my-app/public/images/shared/modelo-magnetico-PLACEHOLDER.jpg` |
| Seção | Home · 4 (`modelo_magnetico`) · Landing · 3 (`lp_modelo_magnetico`) |
| Foto real existente | Nenhuma. **Pedir ao cliente** foto do colchão magnético e a descrição da estrutura interna |
| Origem | PLACEHOLDER parcial: mesmo enquadramento das 09 e 10, **sem corte** (estrutura desconhecida). Quando o cliente descrever a estrutura, regenerar com corte, na mesma cena |
| Referências a anexar | As mesmas da 09 + imagem 09 aprovada |
| Objetivo | Manter os três cards visualmente iguais enquanto a informação não chega |
| Elemento principal | Mesmo colchão, inteiro, sem corte |
| Composição / Enquadramento / Ângulo / Cenário / Iluminação / Cores | Idênticos à 09 |
| Proporção | 3:2 |
| Resolução | 1800 × 1200 px |
| Área livre para texto | Nenhuma |
| Versão | Mesmo uso da 09 |
| Restrições | Sem ímãs, brilho, ondas ou qualquer efeito que sugira ação terapêutica |

```text
PROMPT-BASE DE CONSISTÊNCIA — KANAK

BRAND
Kanak is a Brazilian mattress manufacturer that sells complete upholstered bed sets: mattress, box base, headboard and a storage bench for the foot of the bed. Visual identity: warm, calm, adult, trustworthy, editorial. Brand palette: cream (#FBF3E8), deep wine (#680B0E), apricot cream (#FFD29D), light natural wood, warm natural daylight. Premium product photography with a lot of breathing room — like a good furniture store, never a clearance ad, never a luxury hotel.

AUDIENCE AND SETTING
Brazilian families, ages 25 to 60, middle class. Rooms must feel real and attainable: an ordinary Brazilian apartment or house bedroom of about 10 to 14 square meters, smooth painted walls, light-wood laminate floor, a simple sheer linen curtain, at most one simple bedside table and one lamp. No chandeliers, no marble, no gold fixtures, no ornate wall moulding, no walk-in closets, no skyline views, no hotel suites, no mansion interiors.

PRODUCT — FOLLOW THE ATTACHED KANAK REFERENCES EXACTLY
The Kanak bed set has four parts, all upholstered in the same short-pile suede-like velvet, in one solid color per set:
1. HEADBOARD: tall rectangular panel with square corners, deep diamond capitonê tufting across the whole panel, a small clear crystal-look button at every tufting point, same width as the bed.
2. MATTRESS: flat white to off-white quilted top panel with a tone-on-tone damask floral pattern inside diamond quilting; thin white piping along the top edge; the side border of the mattress is upholstered in the same colored velvet as the set, with one small round metal eyelet on the side. Pillow-top version: one extra cream quilted layer sewn onto the top, with its own cream side band and piping, clearly thicker — part of the mattress, never a loose topper or folded quilt. Version without pillow top: a single flat quilted top.
3. BOX BASE: plain velvet box, no tufting, same color as the set, a thin white piping line where the mattress meets the base, short straight tapered wooden legs in medium brown.
4. STORAGE BENCH (baú): low rectangular velvet box at the foot of the bed. THE UPHOLSTERED BOX ITSELF, not the legs, spans the FULL width of the box base — its left and right edges sit directly above the left and right edges of the box base, never narrower, exactly like the mattress is never narrower than the base under it. It has its own short, thin tapered wooden legs in the same medium brown wood as the base legs, set inward from the box corners (much narrower than the box itself), lifting the box about 10 cm off the floor with a visible gap and contact shadow underneath. The legs are a small detail at the bottom corners; they must never make the box above them look narrower — the box is a separate piece of furniture from the base, not fused to it, but matches its full width. Plain body, capitonê-tufted lid with the same crystal-look buttons, hinged lid.
Two small velvet throw pillows in the set color lean against the headboard.
Follow the supplied product references exactly. Preserve the same shape, proportions, material, color, finish and internal details.
Do not invent logos, labels, tags, embroidery, extra seams, handles, buttons, legs, lights or any detail that is not visible in the references.

LIGHT
Soft warm natural daylight, about 3500 to 4500 K, from a side window through a sheer linen curtain. Gentle falloff, open soft shadows, realistic contact shadows under the furniture. No fluorescent ceiling tubes, no flash, no harsh highlights, no colored light, no blue cast.

PHOTOGRAPHIC DIRECTION
Editorial premium product photography: calm, uncluttered, generous empty space around the subject. Full-frame camera; 35 to 50 mm lens for rooms, 90 to 100 mm macro lens for details. Straight verticals, corrected perspective, no wide-angle distortion. Natural color, gentle contrast, fine grain, no HDR look, no heavy color grading, no oversaturation.

REALISM AND QUALITY
Photorealistic and indistinguishable from a real photograph. Visible velvet nap, real quilting stitches, believable fabric weight and folds, correct scale between bed, bench and room. High resolution, sharp focus on the product.

RESTRICTIONS
No text, letters, numbers, logos, brand signs, wall lettering, labels, price tags or watermarks anywhere in the image.
No people unless the image brief explicitly asks for them; never a close or recognizable face; nothing that looks like a customer testimonial portrait.
No pets, no clutter, no party decorations, no cables, no screens.
No luxury excess (see setting). No collage, no split screen, no multiple variations in one file, no illustration, no cartoon or plastic 3D look, no border, no frame.

IMAGE BRIEF — 11 — Model card, Magnetic line, layout placeholder — landscape 3:2, 1800 x 1200 px
Scene reference: keep exactly the same framing, camera angle, plinth, background, light and mattress exterior as the attached pocket-spring model image (image 09).
Studio product photograph of a single, complete, uncut Kanak mattress, without headboard or storage bench, resting on a low plain cream plinth. Mattress without pillow top: flat white quilted top with the tone-on-tone damask pattern, thin white piping, side border in light beige velvet with one small round metal eyelet, exactly as in the references. The front right corner is intact — no cutaway.
Three-quarter view from the front right, camera about 35 degrees above, 50 mm lens. Mattress centered, about 70% of the frame width, entirely inside the central 5:4 area. Seamless cream background (#FBF3E8), soft warm window light from the left, realistic contact shadow.
Nothing that suggests magnets or therapy: no visible magnets, no metal discs, no glow, no energy lines, no waves, no aura, no sparkles, no medical imagery.
```

---

### 12 · Showroom com atendimento (PLACEHOLDER · SUBSTITUIR)

| Campo | Definição |
| --- | --- |
| Número | 12 |
| Arquivo | `my-app/public/images/home/showroom-atendimento-PLACEHOLDER.jpg` |
| Seção | Home · 7 Showroom (fundo vinho, foto à esquerda no desktop, em cima no celular) |
| Foto real existente | O showroom aparece em várias fotos (ex.: `queensize sem pillow top - verde showroom com recamier.jpeg`, `queensize com pillow top - rose showroom com recamier.jpeg`), mas **sem atendimento**, com letreiro, luz fluorescente e resolução de 900 px. **Pedir ao cliente:** foto real do showroom com um vendedor atendendo, luz do dia, com autorização de uso de imagem das pessoas |
| Origem | PLACEHOLDER. Uma cena gerada com "atendente" e "clientes" **não pode ir ao ar** como se fosse a equipe ou a loja real da Kanak |
| Referências a anexar | `queensize sem pillow top - verde showroom com recamier.jpeg`, `casal sem pillow top - terracota showroom com recamier.jpeg` (painel de madeira na parede, fileira de kits) |
| Objetivo | Mostrar que existe loja física e atendimento consultivo |
| Elemento principal | Fileira de kits Kanak de cores diferentes no showroom; vendedor e casal ao fundo, de costas ou de perfil distante |
| Composição | Kits em diagonal, do primeiro plano à esquerda para o fundo à direita; pessoas no terço direito, desfocadas |
| Enquadramento | Plano geral do salão; kit do primeiro plano cortado só na borda |
| Ângulo | Três-quartos, câmera a 140 cm, 35 mm |
| Cenário | Showroom simples: parede branca com meia-parede de painel de madeira clara (como no showroom real), piso laminado claro, sem letreiro |
| Iluminação | Luz do dia difusa de janelas, quente; sem tubo fluorescente |
| Cores | Madeira clara, branco quente, kits em vinho, bege, cinza e terracota. Vai sobre fundo vinho: evitar kit vinho grande no primeiro plano |
| Proporção | 4:3 |
| Resolução | 1600 × 1200 px |
| Área livre para texto | Nenhuma (texto ao lado/abaixo, em HTML) |
| Versão | Desktop recorte 9:8 (zona segura central); celular recorte 3:2 |
| Restrições | Nenhum rosto visível ou nítido; nada de pose de depoimento; sem letreiro, sem bandeirinhas, sem cortina lilás |

```text
PROMPT-BASE DE CONSISTÊNCIA — KANAK

BRAND
Kanak is a Brazilian mattress manufacturer that sells complete upholstered bed sets: mattress, box base, headboard and a storage bench for the foot of the bed. Visual identity: warm, calm, adult, trustworthy, editorial. Brand palette: cream (#FBF3E8), deep wine (#680B0E), apricot cream (#FFD29D), light natural wood, warm natural daylight. Premium product photography with a lot of breathing room — like a good furniture store, never a clearance ad, never a luxury hotel.

AUDIENCE AND SETTING
Brazilian families, ages 25 to 60, middle class. Rooms must feel real and attainable: an ordinary Brazilian apartment or house bedroom of about 10 to 14 square meters, smooth painted walls, light-wood laminate floor, a simple sheer linen curtain, at most one simple bedside table and one lamp. No chandeliers, no marble, no gold fixtures, no ornate wall moulding, no walk-in closets, no skyline views, no hotel suites, no mansion interiors.

PRODUCT — FOLLOW THE ATTACHED KANAK REFERENCES EXACTLY
The Kanak bed set has four parts, all upholstered in the same short-pile suede-like velvet, in one solid color per set:
1. HEADBOARD: tall rectangular panel with square corners, deep diamond capitonê tufting across the whole panel, a small clear crystal-look button at every tufting point, same width as the bed.
2. MATTRESS: flat white to off-white quilted top panel with a tone-on-tone damask floral pattern inside diamond quilting; thin white piping along the top edge; the side border of the mattress is upholstered in the same colored velvet as the set, with one small round metal eyelet on the side. Pillow-top version: one extra cream quilted layer sewn onto the top, with its own cream side band and piping, clearly thicker — part of the mattress, never a loose topper or folded quilt. Version without pillow top: a single flat quilted top.
3. BOX BASE: plain velvet box, no tufting, same color as the set, a thin white piping line where the mattress meets the base, short straight tapered wooden legs in medium brown.
4. STORAGE BENCH (baú): low rectangular velvet box at the foot of the bed. THE UPHOLSTERED BOX ITSELF, not the legs, spans the FULL width of the box base — its left and right edges sit directly above the left and right edges of the box base, never narrower, exactly like the mattress is never narrower than the base under it. It has its own short, thin tapered wooden legs in the same medium brown wood as the base legs, set inward from the box corners (much narrower than the box itself), lifting the box about 10 cm off the floor with a visible gap and contact shadow underneath. The legs are a small detail at the bottom corners; they must never make the box above them look narrower — the box is a separate piece of furniture from the base, not fused to it, but matches its full width. Plain body, capitonê-tufted lid with the same crystal-look buttons, hinged lid.
Two small velvet throw pillows in the set color lean against the headboard.
Follow the supplied product references exactly. Preserve the same shape, proportions, material, color, finish and internal details.
Do not invent logos, labels, tags, embroidery, extra seams, handles, buttons, legs, lights or any detail that is not visible in the references.

LIGHT
Soft warm natural daylight, about 3500 to 4500 K, from a side window through a sheer linen curtain. Gentle falloff, open soft shadows, realistic contact shadows under the furniture. No fluorescent ceiling tubes, no flash, no harsh highlights, no colored light, no blue cast.

PHOTOGRAPHIC DIRECTION
Editorial premium product photography: calm, uncluttered, generous empty space around the subject. Full-frame camera; 35 to 50 mm lens for rooms, 90 to 100 mm macro lens for details. Straight verticals, corrected perspective, no wide-angle distortion. Natural color, gentle contrast, fine grain, no HDR look, no heavy color grading, no oversaturation.

REALISM AND QUALITY
Photorealistic and indistinguishable from a real photograph. Visible velvet nap, real quilting stitches, believable fabric weight and folds, correct scale between bed, bench and room. High resolution, sharp focus on the product.

RESTRICTIONS
No text, letters, numbers, logos, brand signs, wall lettering, labels, price tags or watermarks anywhere in the image.
No people unless the image brief explicitly asks for them; never a close or recognizable face; nothing that looks like a customer testimonial portrait.
No pets, no clutter, no party decorations, no cables, no screens.
No luxury excess (see setting). No collage, no split screen, no multiple variations in one file, no illustration, no cartoon or plastic 3D look, no border, no frame.

IMAGE BRIEF — 12 — Showroom with personal service, layout placeholder — landscape 4:3, 1600 x 1200 px
Photograph of a simple, bright Brazilian mattress showroom, based on the attached real showroom references but cleaned up: white upper walls with a light-wood panelled lower half, light-wood laminate floor, large windows letting in diffuse warm daylight. A row of complete Kanak bed sets stands along the wall, each with capitonê headboard, mattress, box base and capitonê storage bench, each set in a different velvet color: beige in the foreground on the left, then grey, then terracotta, then wine further back. The row recedes diagonally from the left foreground to the right background.
In the right third, in the middle ground and in soft focus, a sales consultant in plain dark clothes talks with a couple beside one of the beds. All three are seen from behind or in distant three-quarter back view; no face is visible or sharp. Natural, relaxed, ordinary body language; nobody poses or looks at the camera.
Three-quarter view, camera at 140 cm, 35 mm lens, straight verticals, focus on the foreground beige set. Keep the main subject inside the central area of the frame so it can be cropped to 9:8 and to 3:2.
No wall lettering or brand sign, no fluorescent tube lights, no party flags, no lilac curtains, no price tags, no posters.
```

---

### Família D — Banner de campanha da Landing (13–14)

- **Trocado a cada campanha.** Esta é a campanha 01. Para as próximas, repita as fichas trocando só a cor/tamanho do kit e o sufixo do arquivo (`campanha-02-…`).
- A oferta, o título e o CTA **ficam no HTML**, nunca dentro da imagem (acessibilidade, copy trocável, texto nítido).
- Kit escolhido: **King** (maior margem; foco de 100% dos anúncios em kit) em **bege claro** contra uma parede **vinho**: contraste forte, cores da marca, e o bege não some no fundo vinho do card (um kit vinho sumiria).
- **Divergência a decidir:** o pedido fala em "versão vertical para mobile". No wireframe, o card do celular é vertical, mas o espaço da foto dentro dele é **366 × 280 (≈ 4:3)**, com o texto embaixo. Este plano segue o wireframe. Se preferir uma arte vertical 4:5 com o texto sobreposto, a 14 precisa ser refeita.

#### 13 · Campanha 01 — desktop

| Campo | Definição |
| --- | --- |
| Número | 13 |
| Arquivo | `my-app/public/images/lp/campanha-01-king-bege-desktop.jpg` |
| Seção | Landing · 1 Banner trocável (`lp_banner`, banner inteiro clicável) |
| Foto real existente | Nenhuma adequada. Provisório em 1x: `kingsize com pillow top - cinza suite decorada com tapete (widescreen).jpeg` (1280 × 853, recortado) |
| Origem | GERAR |
| Referências a anexar | `kingsize sem pillow top - bege render 3d cama posta com recamier.jpeg` (King bege), `casal sem pillow top - bege showroom com recamier.jpeg` (veludo bege real), `kingsize com pillow top - cinza suite decorada com tapete (1024x1024).jpeg` (proporções King e baú) |
| Objetivo | Arte da oferta "Até 55% OFF": produto desejável e ambiente real, deixando a oferta para o texto |
| Elemento principal | Kit King bege, sem pillow top, completo, contra parede vinho |
| Composição | Kit na **metade direita**; metade esquerda = parede vinho lisa e calma. Funciona sangrado em 1440 × 600 (texto sobre a parede) ou recortado só na metade direita (como no wireframe, texto no bloco vinho ao lado) |
| Enquadramento | Kit inteiro, com a borda do baú a ~10% da base do quadro |
| Ângulo | Três-quartos a partir da esquerda, câmera a 100 cm, 35 mm |
| Cenário | Quarto comum com parede de destaque pintada de vinho, piso de madeira clara, um criado-mudo simples e um abajur à direita |
| Iluminação | Luz de janela quente vinda da direita, fora do quadro, iluminando o kit; a metade esquerda da parede cai suavemente para um vinho mais escuro |
| Cores | Parede vinho `#680B0E` a um pouco mais escuro; kit bege claro; tampo branco; madeira clara |
| Proporção | 12:5 |
| Resolução | 2880 × 1200 px |
| Área livre para texto | **Metade esquerda inteira** (0–50% da largura): parede lisa, sem objetos, sem variação forte de luz |
| Versão | Desktop |
| Restrições | Nada de texto, preço, selo de desconto, laço, confete ou "clima de liquidação"; parede sem quadros |

```text
PROMPT-BASE DE CONSISTÊNCIA — KANAK

BRAND
Kanak is a Brazilian mattress manufacturer that sells complete upholstered bed sets: mattress, box base, headboard and a storage bench for the foot of the bed. Visual identity: warm, calm, adult, trustworthy, editorial. Brand palette: cream (#FBF3E8), deep wine (#680B0E), apricot cream (#FFD29D), light natural wood, warm natural daylight. Premium product photography with a lot of breathing room — like a good furniture store, never a clearance ad, never a luxury hotel.

AUDIENCE AND SETTING
Brazilian families, ages 25 to 60, middle class. Rooms must feel real and attainable: an ordinary Brazilian apartment or house bedroom of about 10 to 14 square meters, smooth painted walls, light-wood laminate floor, a simple sheer linen curtain, at most one simple bedside table and one lamp. No chandeliers, no marble, no gold fixtures, no ornate wall moulding, no walk-in closets, no skyline views, no hotel suites, no mansion interiors.

PRODUCT — FOLLOW THE ATTACHED KANAK REFERENCES EXACTLY
The Kanak bed set has four parts, all upholstered in the same short-pile suede-like velvet, in one solid color per set:
1. HEADBOARD: tall rectangular panel with square corners, deep diamond capitonê tufting across the whole panel, a small clear crystal-look button at every tufting point, same width as the bed.
2. MATTRESS: flat white to off-white quilted top panel with a tone-on-tone damask floral pattern inside diamond quilting; thin white piping along the top edge; the side border of the mattress is upholstered in the same colored velvet as the set, with one small round metal eyelet on the side. Pillow-top version: one extra cream quilted layer sewn onto the top, with its own cream side band and piping, clearly thicker — part of the mattress, never a loose topper or folded quilt. Version without pillow top: a single flat quilted top.
3. BOX BASE: plain velvet box, no tufting, same color as the set, a thin white piping line where the mattress meets the base, short straight tapered wooden legs in medium brown.
4. STORAGE BENCH (baú): low rectangular velvet box at the foot of the bed. THE UPHOLSTERED BOX ITSELF, not the legs, spans the FULL width of the box base — its left and right edges sit directly above the left and right edges of the box base, never narrower, exactly like the mattress is never narrower than the base under it. It has its own short, thin tapered wooden legs in the same medium brown wood as the base legs, set inward from the box corners (much narrower than the box itself), lifting the box about 10 cm off the floor with a visible gap and contact shadow underneath. The legs are a small detail at the bottom corners; they must never make the box above them look narrower — the box is a separate piece of furniture from the base, not fused to it, but matches its full width. Plain body, capitonê-tufted lid with the same crystal-look buttons, hinged lid.
Two small velvet throw pillows in the set color lean against the headboard.
Follow the supplied product references exactly. Preserve the same shape, proportions, material, color, finish and internal details.
Do not invent logos, labels, tags, embroidery, extra seams, handles, buttons, legs, lights or any detail that is not visible in the references.

LIGHT
Soft warm natural daylight, about 3500 to 4500 K, from a side window through a sheer linen curtain. Gentle falloff, open soft shadows, realistic contact shadows under the furniture. No fluorescent ceiling tubes, no flash, no harsh highlights, no colored light, no blue cast.

PHOTOGRAPHIC DIRECTION
Editorial premium product photography: calm, uncluttered, generous empty space around the subject. Full-frame camera; 35 to 50 mm lens for rooms, 90 to 100 mm macro lens for details. Straight verticals, corrected perspective, no wide-angle distortion. Natural color, gentle contrast, fine grain, no HDR look, no heavy color grading, no oversaturation.

REALISM AND QUALITY
Photorealistic and indistinguishable from a real photograph. Visible velvet nap, real quilting stitches, believable fabric weight and folds, correct scale between bed, bench and room. High resolution, sharp focus on the product.

RESTRICTIONS
No text, letters, numbers, logos, brand signs, wall lettering, labels, price tags or watermarks anywhere in the image.
No people unless the image brief explicitly asks for them; never a close or recognizable face; nothing that looks like a customer testimonial portrait.
No pets, no clutter, no party decorations, no cables, no screens.
No luxury excess (see setting). No collage, no split screen, no multiple variations in one file, no illustration, no cartoon or plastic 3D look, no border, no frame.

IMAGE BRIEF — 13 — Landing campaign banner 01, desktop — ultra-wide 12:5, 2880 x 1200 px
Wide interior photograph of an ordinary Brazilian bedroom whose back wall is painted a deep matte wine color (#680B0E, falling slightly darker toward the left). A complete Kanak King size bed set (193 x 203 cm) in light beige velvet, without pillow top, exactly as in the attached references: square-cornered capitonê headboard with crystal-look buttons against the wine wall, mattress with flat white quilted top over a beige velvet side border with a round metal eyelet, white piping at the mattress-base joint, beige box base on short straight tapered wooden legs, low capitonê beige storage bench at the foot, two small beige velvet pillows. One simple light-wood bedside table with a plain linen-shade lamp on the far right. Light-wood laminate floor.
The whole bed set sits in the right half of the frame, seen in three-quarter view from the left, camera at 100 cm, 35 mm lens, straight verticals, the front of the bench about 10% above the bottom edge.
The entire left half of the frame is plain, smooth, empty wine-colored wall and a strip of floor — no furniture, no frames, no shelves, no plants, no strong light patches — so text can be placed over it later.
Warm soft daylight from a window off-frame to the right falls on the bed set; the beige velvet glows gently against the wine wall. Calm, adult, desirable, editorial.
No sale signs, price tags, discount badges, ribbons, confetti, gift boxes or promotional props.
```

---

#### 14 · Campanha 01 — celular

| Campo | Definição |
| --- | --- |
| Número | 14 |
| Arquivo | `my-app/public/images/lp/campanha-01-king-bege-mobile.jpg` |
| Seção | Landing mobile · 1 Banner trocável (foto no topo do card vertical; título, oferta e CTA abaixo, em HTML) |
| Foto real existente | Nenhuma adequada |
| Origem | GERAR, na mesma sessão da 13, com a 13 aprovada anexada |
| Referências a anexar | As mesmas da 13 + imagem 13 aprovada |
| Objetivo | Mesma campanha, lida no celular em 1 segundo |
| Elemento principal | O mesmo kit King bege contra a parede vinho |
| Composição | Kit centralizado, um pouco mais perto; faixa de parede vinho acima da cabeceira |
| Enquadramento | Kit inteiro, ocupando ~75% da largura |
| Ângulo | Três-quartos a partir da esquerda, câmera a 100 cm, 35 mm, mais próxima que na 13 |
| Cenário / Iluminação / Cores | Idênticos à 13 |
| Proporção | 4:3 |
| Resolução | 1200 × 900 px |
| Área livre para texto | Nenhuma (o texto fica abaixo da foto) |
| Versão | Celular |
| Restrições | Mesmas da 13; o kit tem de ser o mesmo, na mesma cor |

```text
PROMPT-BASE DE CONSISTÊNCIA — KANAK

BRAND
Kanak is a Brazilian mattress manufacturer that sells complete upholstered bed sets: mattress, box base, headboard and a storage bench for the foot of the bed. Visual identity: warm, calm, adult, trustworthy, editorial. Brand palette: cream (#FBF3E8), deep wine (#680B0E), apricot cream (#FFD29D), light natural wood, warm natural daylight. Premium product photography with a lot of breathing room — like a good furniture store, never a clearance ad, never a luxury hotel.

AUDIENCE AND SETTING
Brazilian families, ages 25 to 60, middle class. Rooms must feel real and attainable: an ordinary Brazilian apartment or house bedroom of about 10 to 14 square meters, smooth painted walls, light-wood laminate floor, a simple sheer linen curtain, at most one simple bedside table and one lamp. No chandeliers, no marble, no gold fixtures, no ornate wall moulding, no walk-in closets, no skyline views, no hotel suites, no mansion interiors.

PRODUCT — FOLLOW THE ATTACHED KANAK REFERENCES EXACTLY
The Kanak bed set has four parts, all upholstered in the same short-pile suede-like velvet, in one solid color per set:
1. HEADBOARD: tall rectangular panel with square corners, deep diamond capitonê tufting across the whole panel, a small clear crystal-look button at every tufting point, same width as the bed.
2. MATTRESS: flat white to off-white quilted top panel with a tone-on-tone damask floral pattern inside diamond quilting; thin white piping along the top edge; the side border of the mattress is upholstered in the same colored velvet as the set, with one small round metal eyelet on the side. Pillow-top version: one extra cream quilted layer sewn onto the top, with its own cream side band and piping, clearly thicker — part of the mattress, never a loose topper or folded quilt. Version without pillow top: a single flat quilted top.
3. BOX BASE: plain velvet box, no tufting, same color as the set, a thin white piping line where the mattress meets the base, short straight tapered wooden legs in medium brown.
4. STORAGE BENCH (baú): low rectangular velvet box at the foot of the bed. THE UPHOLSTERED BOX ITSELF, not the legs, spans the FULL width of the box base — its left and right edges sit directly above the left and right edges of the box base, never narrower, exactly like the mattress is never narrower than the base under it. It has its own short, thin tapered wooden legs in the same medium brown wood as the base legs, set inward from the box corners (much narrower than the box itself), lifting the box about 10 cm off the floor with a visible gap and contact shadow underneath. The legs are a small detail at the bottom corners; they must never make the box above them look narrower — the box is a separate piece of furniture from the base, not fused to it, but matches its full width. Plain body, capitonê-tufted lid with the same crystal-look buttons, hinged lid.
Two small velvet throw pillows in the set color lean against the headboard.
Follow the supplied product references exactly. Preserve the same shape, proportions, material, color, finish and internal details.
Do not invent logos, labels, tags, embroidery, extra seams, handles, buttons, legs, lights or any detail that is not visible in the references.

LIGHT
Soft warm natural daylight, about 3500 to 4500 K, from a side window through a sheer linen curtain. Gentle falloff, open soft shadows, realistic contact shadows under the furniture. No fluorescent ceiling tubes, no flash, no harsh highlights, no colored light, no blue cast.

PHOTOGRAPHIC DIRECTION
Editorial premium product photography: calm, uncluttered, generous empty space around the subject. Full-frame camera; 35 to 50 mm lens for rooms, 90 to 100 mm macro lens for details. Straight verticals, corrected perspective, no wide-angle distortion. Natural color, gentle contrast, fine grain, no HDR look, no heavy color grading, no oversaturation.

REALISM AND QUALITY
Photorealistic and indistinguishable from a real photograph. Visible velvet nap, real quilting stitches, believable fabric weight and folds, correct scale between bed, bench and room. High resolution, sharp focus on the product.

RESTRICTIONS
No text, letters, numbers, logos, brand signs, wall lettering, labels, price tags or watermarks anywhere in the image.
No people unless the image brief explicitly asks for them; never a close or recognizable face; nothing that looks like a customer testimonial portrait.
No pets, no clutter, no party decorations, no cables, no screens.
No luxury excess (see setting). No collage, no split screen, no multiple variations in one file, no illustration, no cartoon or plastic 3D look, no border, no frame.

IMAGE BRIEF — 14 — Landing campaign banner 01, mobile — landscape 4:3, 1200 x 900 px
Scene reference: same room, same wine wall, same beige King bed set, same light as the attached desktop campaign image (image 13). This is a closer, centered version for a phone screen.
A complete Kanak King size bed set in light beige velvet, without pillow top, exactly as in the references: square-cornered capitonê headboard with crystal-look buttons against the deep matte wine wall (#680B0E), mattress with flat white quilted top over a beige velvet side border with a round metal eyelet, white piping at the mattress-base joint, beige box base on short straight tapered wooden legs, low capitonê beige storage bench at the foot, two small beige velvet pillows. Light-wood laminate floor.
Three-quarter view from the left, camera at 100 cm, 35 mm lens, straight verticals, closer than the desktop version. The bed set is centered and fills about 75% of the frame width, with a band of plain wine wall above the headboard and a little floor in front of the bench.
Warm soft daylight from the right falls on the bed set; the beige velvet glows gently against the wine wall. Calm, adult, desirable, editorial.
No sale signs, price tags, discount badges, ribbons, confetti, gift boxes or promotional props.
```

---

## 7. Reserva — fora dos wireframes (opcional, não produzir agora)

Os wireframes atuais não têm espaço para estas imagens. Elas servem para as páginas de produto (entrega futura), para o blog ou para anúncios. Produzir só quando houver onde usar.

| Nº | Arquivo | Conteúdo | Foto real que serve? | Origem |
| --- | --- | --- | --- | --- |
| R1 | `shared/kit-king-cinza.jpg` | Kit completo King cinza com pillow top, três-quartos, quarto neutro (mesmo quarto da família A) | Referências: `kingsize com pillow top - cinza suite decorada com tapete` (3 versões). Nenhuma com resolução suficiente | GERAR |
| R2 | `detalhe/capitone-botao-cristal.jpg` | Macro do capitonê com um botão de cristal | Recorte de `casal sem pillow top - vinho parede leao com recamier.jpeg` serve em tamanho pequeno | REAL (recorte) ou GERAR |
| R3 | `detalhe/veludo-debrum.jpg` | Macro da junção colchão/base: veludo, debrum branco, ilhós | Recorte de `kingsize com pillow top - cinza suite decorada com tapete (1024x1024).jpeg` em tamanho pequeno | REAL (recorte) ou GERAR |
| R4 | `detalhe/pillow-top.jpg` | Macro do pillow top de lado, mostrando a camada extra | Idem R3 | GERAR |
| R5 | `cores/swatch-{cor}.jpg` | Amostra de tecido por cor (12 cores observadas) | Não. **Pedir ao cliente foto ou amostra física** de cada tecido: cor gerada por IA não é confiável para escolha de cor | REAL (preferível) · GERAR só como placeholder |

Prompt de R1 (os outros seguem o mesmo padrão; escrever quando houver uso definido):

```text
PROMPT-BASE DE CONSISTÊNCIA — KANAK

BRAND
Kanak is a Brazilian mattress manufacturer that sells complete upholstered bed sets: mattress, box base, headboard and a storage bench for the foot of the bed. Visual identity: warm, calm, adult, trustworthy, editorial. Brand palette: cream (#FBF3E8), deep wine (#680B0E), apricot cream (#FFD29D), light natural wood, warm natural daylight. Premium product photography with a lot of breathing room — like a good furniture store, never a clearance ad, never a luxury hotel.

AUDIENCE AND SETTING
Brazilian families, ages 25 to 60, middle class. Rooms must feel real and attainable: an ordinary Brazilian apartment or house bedroom of about 10 to 14 square meters, smooth painted walls, light-wood laminate floor, a simple sheer linen curtain, at most one simple bedside table and one lamp. No chandeliers, no marble, no gold fixtures, no ornate wall moulding, no walk-in closets, no skyline views, no hotel suites, no mansion interiors.

PRODUCT — FOLLOW THE ATTACHED KANAK REFERENCES EXACTLY
The Kanak bed set has four parts, all upholstered in the same short-pile suede-like velvet, in one solid color per set:
1. HEADBOARD: tall rectangular panel with square corners, deep diamond capitonê tufting across the whole panel, a small clear crystal-look button at every tufting point, same width as the bed.
2. MATTRESS: flat white to off-white quilted top panel with a tone-on-tone damask floral pattern inside diamond quilting; thin white piping along the top edge; the side border of the mattress is upholstered in the same colored velvet as the set, with one small round metal eyelet on the side. Pillow-top version: one extra cream quilted layer sewn onto the top, with its own cream side band and piping, clearly thicker — part of the mattress, never a loose topper or folded quilt. Version without pillow top: a single flat quilted top.
3. BOX BASE: plain velvet box, no tufting, same color as the set, a thin white piping line where the mattress meets the base, short straight tapered wooden legs in medium brown.
4. STORAGE BENCH (baú): low rectangular velvet box at the foot of the bed. THE UPHOLSTERED BOX ITSELF, not the legs, spans the FULL width of the box base — its left and right edges sit directly above the left and right edges of the box base, never narrower, exactly like the mattress is never narrower than the base under it. It has its own short, thin tapered wooden legs in the same medium brown wood as the base legs, set inward from the box corners (much narrower than the box itself), lifting the box about 10 cm off the floor with a visible gap and contact shadow underneath. The legs are a small detail at the bottom corners; they must never make the box above them look narrower — the box is a separate piece of furniture from the base, not fused to it, but matches its full width. Plain body, capitonê-tufted lid with the same crystal-look buttons, hinged lid.
Two small velvet throw pillows in the set color lean against the headboard.
Follow the supplied product references exactly. Preserve the same shape, proportions, material, color, finish and internal details.
Do not invent logos, labels, tags, embroidery, extra seams, handles, buttons, legs, lights or any detail that is not visible in the references.

LIGHT
Soft warm natural daylight, about 3500 to 4500 K, from a side window through a sheer linen curtain. Gentle falloff, open soft shadows, realistic contact shadows under the furniture. No fluorescent ceiling tubes, no flash, no harsh highlights, no colored light, no blue cast.

PHOTOGRAPHIC DIRECTION
Editorial premium product photography: calm, uncluttered, generous empty space around the subject. Full-frame camera; 35 to 50 mm lens for rooms, 90 to 100 mm macro lens for details. Straight verticals, corrected perspective, no wide-angle distortion. Natural color, gentle contrast, fine grain, no HDR look, no heavy color grading, no oversaturation.

REALISM AND QUALITY
Photorealistic and indistinguishable from a real photograph. Visible velvet nap, real quilting stitches, believable fabric weight and folds, correct scale between bed, bench and room. High resolution, sharp focus on the product.

RESTRICTIONS
No text, letters, numbers, logos, brand signs, wall lettering, labels, price tags or watermarks anywhere in the image.
No people unless the image brief explicitly asks for them; never a close or recognizable face; nothing that looks like a customer testimonial portrait.
No pets, no clutter, no party decorations, no cables, no screens.
No luxury excess (see setting). No collage, no split screen, no multiple variations in one file, no illustration, no cartoon or plastic 3D look, no border, no frame.

IMAGE BRIEF — R1 — Complete kit, King grey — landscape 3:2, 1800 x 1200 px
Scene reference: the same simple bedroom as the attached King banner image (image 02): warm off-white wall, light-wood laminate floor, sheer linen curtain on the left.
A complete Kanak King size bed set in charcoal grey velvet, with pillow top, exactly as in the attached grey King references: square-cornered capitonê headboard with crystal-look buttons, mattress with cream pillow-top layer over a grey velvet side border with a round metal eyelet, white piping at the mattress-base joint, grey box base on short straight tapered wooden legs, low capitonê grey storage bench at the foot, two small grey velvet pillows. One simple light-wood bedside table with a plain lamp on the right.
Three-quarter view from the front left, camera at 110 cm, 35 mm lens, straight verticals. The full set is centered and fills about 70% of the frame width, with calm empty wall and floor around it. Soft warm daylight from the left.
Only one bed in the room.
```

---

## 8. Checklist de aprovação (cada imagem)

Produto:

- [ ] Cabeceira com **cantos retos**, capitonê em losango, botão de cristal em cada ponto
- [ ] Tampo do colchão branco acolchoado; **lateral do colchão no veludo da cor do kit**; ilhós redondo na lateral
- [ ] Pillow top só onde a ficha pede, com a faixa creme visível
- [ ] Debrum branco na junção colchão/base
- [ ] Base lisa, pés de madeira cônicos retos, marrom-médio, quantidade plausível
- [ ] Baú baixo, tampa em capitonê, mesma cor, **caixa estofada com a largura total da base** (laterais alinhadas) sobre **pezinhos pequenos e recuados** — os pés NÃO podem estreitar a caixa, e a caixa não pode ficar colada no chão. Se sair estreito mesmo com a imagem-guia anexada, corrigir esticando na edição (não publicar sem corrigir)
- [ ] Pillow top costurado ao colchão, não um topper solto
- [ ] Nenhum logo, etiqueta, bordado, puxador ou detalhe inventado
- [ ] Cor do veludo igual à referência (vinho ≠ vermelho; bege ≠ creme)

Cena e marca:

- [ ] Sem texto, número, letreiro ou marca d'água
- [ ] Sem rostos reconhecíveis; nada que pareça depoimento
- [ ] Ambiente de apartamento comum, sem luxo excessivo
- [ ] Luz natural quente, sem fluorescente, sem tom azul
- [ ] Área livre para texto respeitada (quando a ficha pede)
- [ ] Recortes desktop e celular funcionam (testar com `object-fit: cover` nos tamanhos da seção 4)
- [ ] Família consistente (A: mesmo quarto; B e C: mesma luz e fundo; D: mesmo kit)
- [ ] Família A: largura da cama na cabeceira dentro de ±3 pontos da régua (Queen 56%, King 69%, Casal 49%, Solteiro 31%)

Técnica:

- [ ] Proporção e resolução do mestre corretas
- [ ] JPG sRGB, qualidade 85–90
- [ ] Placeholders com `-PLACEHOLDER` no nome do arquivo
- [ ] `alt` em português escrito na implementação (não faz parte da imagem)

---

## 9. Pedidos ao cliente (fotos reais)

| # | Pedido | Substitui |
| --- | --- | --- |
| F1 | Foto de um colchão real cortado, de lado, com as camadas visíveis e a espessura de cada uma | 05 e as espessuras ⏳ da seção 2 |
| F2 | Quais fotos do acervo são de cada modelo (molas ensacadas, anatômico ortopédico, magnético) e o acabamento oficial de cada linha (pillow top, tecido do tampo) | Confirma 09–11 |
| F3 | Foto e descrição da estrutura do colchão magnético | 08 e 11 |
| F4 | Foto real do showroom com um vendedor atendendo, luz do dia, com autorização de uso de imagem | 12 |
| F5 | Foto ou amostra física de cada tecido e a lista oficial de cores | R5 |
| F6 | Fotos das molas e da espuma na fábrica (opcional) | 06 e 07 |
| F7 | Confirmar quais arquivos do acervo são renders/tratados e quais são fotos | Diagnóstico 2.3 |
| F8 | 6 depoimentos reais do Google com foto e autorização (já em `memoria.md`) | Seção 5 da Home e 4 da Landing |

Se houver sessão de fotos no showroom, estas regras tornam as fotos reais consistentes com o plano: luz do dia (apagar os tubos fluorescentes), tirar ou evitar o letreiro no quadro, câmera no tripé a 110 cm, lente equivalente a 50 mm, vista frontal simétrica para as quatro camas (família A), sem bandeirinhas e sem cortina lilás.

---

## 10. Ordem de produção sugerida

1. Aprovar o uso de IA (pendência 12) e registrar em `memoria.md`.
2. 00 (quarto vazio) → aprovar → 01, 02, 03, 04, cada uma só com a 00 e as referências do próprio kit; conferir a régua de escala.
3. 09 → aprovar → 10, 11.
4. 06, 07, 08 na mesma sessão.
5. 13 → aprovar → 14.
6. Placeholders 05 e 12.
7. Enviar ao cliente os pedidos F1–F8 em paralelo.
