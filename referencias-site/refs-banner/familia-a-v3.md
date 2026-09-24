### Família A — Banner da Home (01–04) · revisão 3, 23/09/2026 (refeita do zero)

#### Por que a revisão 2 falhava

1. **Prompt enorme e contraditório.** Cada prompt tinha ~60 linhas; o gerador pega só parte do texto e mistura o resto.
2. **Baú com pé.** A revisão 2 mandava o baú ter pezinhos de madeira. **Errado: o baú não tem pé nenhum, ele é apoiado direto no chão.** Só a base box tem pés.
3. **Imagem-guia e quarto 00 como referências extras.** Anexar desenho técnico + quarto vazio + fotos faz o gerador “fazer a média” e se afastar do produto. Saem os dois.
4. **Pedir para girar a cama para frontal.** Obriga o gerador a reinventar o produto. Agora cada prompt usa o ângulo da foto de referência.

#### Como gerar agora

1. Anexe **só as fotos listadas na ficha** (pasta `referencias-site/refs-banner/`). Nada de quarto 00, imagem-guia ou banner já gerado.
2. Cole o prompt da ficha inteiro. Ele é curto de propósito — não acrescente o prompt-base da seção 5.
3. As fotos são do showroom: o prompt manda trocar o fundo por um quarto e **tirar o letreiro da Kanak**. Se o letreiro insistir, apague na edição.
4. Confira com o checklist abaixo antes de aprovar.

#### Mapa de cores (as refs só têm vinho e verde)

| Imagem | Tamanho | Cor | Pillow top | Refs |
| --- | --- | --- | --- | --- |
| 01 | Queen | Vinho | Sim | `ref-vinho-pillowtop-frontal.jpg` + `ref-vinho-pillowtop-angulo.jpg` |
| 02 | King | Verde-musgo | Não | `ref-verde-sem-pillowtop-angulo.jpg` |
| 03 | Casal | Vinho | Não | `ref-vinho-sem-pillowtop-frente.jpg` |
| 04 | Solteiro | Verde-musgo | Sim | `ref-verde-solteiro-pillowtop.jpg` |

Vinho e verde alternados no banner. Arquivos: `my-app/public/images/home/banner-queen-vinho.jpg`, `banner-king-verde.jpg`, `banner-casal-vinho.jpg`, `banner-solteiro-verde.jpg` (atualizar os caminhos no código se ainda apontam para terracota/cinza/bege).

#### Como o produto é (tirado das fotos reais)

- **Cabeceira:** painel retangular de veludo, cantos retos, largura da cama, presa na parede; capitonê em losango com botões de cristal só na faixa de cima (2–3 fileiras), parte de baixo escondida atrás do colchão.
- **Colchão:** tampo branco matelassê com floral tom sobre tom e vivo branco. Com pillow top: camada extra com faixa lateral **bege/creme** e vivo branco, costurada no colchão. Sem pillow top: tampo branco direto sobre a lateral de veludo.
- **Base box:** laterais lisas de veludo da cor do kit, vivo branco na junta com o colchão, ilhoses redondos cromados pequenos na lateral, **pés curtos de madeira** (só a base tem pé).
- **Baú:** caixa de veludo com a **largura da base**, altura mais ou menos até o topo da base; **sem pés, sem rodízio, sem vão — o tecido desce até o chão e encosta no piso**. Tampo acolchoado e fofo, capitonê fundo com alguns botões de cristal; frente lisa com uma **alcinha pequena de tecido** no centro, logo abaixo do tampo.

#### Checklist

- [ ] Baú encostado no chão, sem nenhum pé ou vão embaixo
- [ ] Baú com a largura da base (nem mais estreito, nem mais largo)
- [ ] Pés de madeira aparecem só na base box
- [ ] Cor igual à da ref (vinho é bordô escuro, não vermelho vivo; verde é musgo escuro)
- [ ] Pillow top só no 01 e no 04, faixa bege
- [ ] Botões de cristal na cabeceira e no baú; nenhum logo, letreiro ou texto
- [ ] Tamanho relativo certo: King > Queen > Casal > Solteiro (régua abaixo)

#### Régua de escala

Largura da cama no quadro (2:3, 1400 × 2100 px), na altura da cabeceira: Queen **56%**, King **69%**, Casal **49%**, Solteiro **31%**. Se passar de 3 pontos para mais ou menos, gere de novo ou ajuste no recorte.

---

#### 01 · Banner Home — Queen vinho

Anexar: `ref-vinho-pillowtop-frontal.jpg` (principal) · `ref-vinho-pillowtop-angulo.jpg`

```text
Photorealistic interior photo, vertical 2:3, 1400 x 2100 px.
Recreate EXACTLY the bed set in the attached reference photos — same product, same deep burgundy wine velvet, same details. Do not redesign it.

PRODUCT (Queen size, 158 cm wide, with pillow top):
- Headboard: rectangular burgundy velvet panel with square corners, same width as the bed, mounted on the wall; diamond capitonê tufting with small clear crystal buttons in the upper part.
- Mattress: white quilted top with tone-on-tone floral pattern and white piping; pillow-top layer with a beige side band sewn on top.
- Box base: plain burgundy velvet sides, thin white piping at the mattress joint, small round chrome eyelets on the side, short wooden legs.
- Storage bench (baú) at the foot of the bed: burgundy velvet box exactly as wide as the bed base, puffy deep capitonê lid with crystal buttons, plain front with a small fabric pull tab under the lid. THE BENCH HAS NO LEGS: it sits directly on the floor, fabric touching the floor, no gap underneath.
- Two small burgundy velvet throw pillows against the headboard.

SCENE: replace the showroom with a simple, calm Brazilian bedroom: smooth warm off-white wall, light wood laminate floor, sheer linen curtain on the left edge, soft warm daylight from the left. Nothing else in the room.
CAMERA: frontal, same angle as the main reference, eye level about 110 cm, 35 mm, straight verticals. Bed centered, 56% of the frame width. Empty floor in the bottom 18%.

Do not add legs, feet or casters to the storage bench. No logos, no wall sign, no letters, no text, no people.
```

---

#### 02 · Banner Home — King verde

Anexar: `ref-verde-sem-pillowtop-angulo.jpg`

```text
Photorealistic interior photo, vertical 2:3, 1400 x 2100 px.
Recreate EXACTLY the bed set in the attached reference photo — same product, same dark moss green velvet, same details — but in King size (193 cm wide). Do not redesign it.

PRODUCT (King size, no pillow top):
- Headboard: rectangular dark green velvet panel with square corners, same width as the bed, mounted on the wall; diamond capitonê tufting with small clear crystal buttons in the upper part.
- Mattress: flat white quilted top with white piping, no pillow top; side border in dark green velvet.
- Box base: plain dark green velvet sides, thin white piping line, small round chrome eyelets on the side, short tapered wooden legs.
- Storage bench (baú) at the foot of the bed: dark green velvet box exactly as wide as the bed base, puffy deep capitonê lid with a few crystal buttons, plain front with a small fabric pull tab under the lid. THE BENCH HAS NO LEGS: it sits directly on the floor, fabric touching the floor, no gap underneath.
- Two small dark green velvet throw pillows against the headboard.

SCENE: replace the showroom with a simple, calm Brazilian bedroom: smooth warm off-white wall, light wood laminate floor, sheer linen curtain on the left edge, soft warm daylight from the left. Nothing else in the room.
CAMERA: frontal, eye level about 110 cm, 35 mm, straight verticals. Bed centered, 69% of the frame width. Empty floor in the bottom 18%.

Do not add legs, feet or casters to the storage bench. No logos, no wall sign, no letters, no text, no people.
```

> Única ref do verde casal está em ângulo. Se o gerador deformar ao virar para frontal, aceite um leve ângulo de 3/4 igual ao da foto e mantenha a proporção da régua.

---

#### 03 · Banner Home — Casal vinho

Anexar: `ref-vinho-sem-pillowtop-frente.jpg`

```text
Photorealistic interior photo, vertical 2:3, 1400 x 2100 px.
Recreate EXACTLY the bed set in the attached reference photo — same product, same wine red velvet, same details. Do not redesign it.

PRODUCT (Casal / double size, 138 cm wide, no pillow top):
- Headboard: rectangular wine velvet panel with square corners, same width as the bed, mounted on the wall; diamond capitonê tufting with small clear crystal buttons in the upper part.
- Mattress: flat white quilted top with tone-on-tone floral pattern and white piping, no pillow top; side border in wine velvet.
- Box base: plain wine velvet sides, small round chrome eyelets on the side.
- Storage bench (baú) at the foot of the bed: wine velvet box exactly as wide as the bed base, puffy deep capitonê lid with crystal buttons, plain front with a small fabric pull tab under the lid. THE BENCH HAS NO LEGS: it sits directly on the floor, fabric touching the floor, no gap underneath.
- Two small wine velvet throw pillows against the headboard.

SCENE: replace the showroom (remove the lion painting) with a simple, calm Brazilian bedroom: smooth warm off-white wall, light wood laminate floor, sheer linen curtain on the left edge, soft warm daylight from the left. Nothing else in the room.
CAMERA: frontal, same angle as the reference, eye level about 110 cm, 35 mm, straight verticals. Bed centered, 49% of the frame width. Empty floor in the bottom 18%.

Do not add legs, feet or casters to the storage bench. No logos, no wall sign, no letters, no text, no people.
```

---

#### 04 · Banner Home — Solteiro verde

Anexar: `ref-verde-solteiro-pillowtop.jpg`

```text
Photorealistic interior photo, vertical 2:3, 1400 x 2100 px.
Recreate EXACTLY the single bed set in the attached reference photo — same product, same dark moss green velvet, same details. Do not redesign it.

PRODUCT (Solteiro / single size, 88 cm wide, with pillow top):
- Headboard: rectangular dark green velvet panel with square corners, same width as the bed, taller than it is wide, mounted on the wall; diamond capitonê tufting with small clear crystal buttons.
- Mattress: white quilted top with tone-on-tone floral pattern and white piping; pillow-top layer with a beige side band sewn on top.
- Box base: plain dark green velvet sides, thin white piping line, small round chrome eyelets on the side, short wooden legs.
- Storage bench (baú) at the foot of the bed: dark green velvet box exactly as wide as the bed base, puffy deep capitonê lid, plain front with a small fabric pull tab under the lid. THE BENCH HAS NO LEGS: it sits directly on the floor, fabric touching the floor, no gap underneath.
- One small dark green velvet throw pillow against the headboard.

SCENE: replace the showroom with a simple, calm Brazilian bedroom: smooth warm off-white wall, light wood laminate floor, sheer linen curtain on the left edge, soft warm daylight from the left. Nothing else in the room.
CAMERA: frontal, eye level about 110 cm, 35 mm, straight verticals. Bed centered, only 31% of the frame width, lots of empty wall on both sides. Empty floor in the bottom 18%.

Do not add legs, feet or casters to the storage bench. No logos, no wall sign, no letters, no text, no people.
```

---

