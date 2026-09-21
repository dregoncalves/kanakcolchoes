---
name: Kanak Colchões
description: Quarto de verdade, fotografado com calma, sobre papel claro.
colors:
  kanak-bordo-900: "#3D0609"
  kanak-bordo-800: "#57090C"
  kanak-bordo-700: "#7A1420"
  kanak-bordo-600: "#93202C"
  kanak-areia-100: "#F6F1E7"
  kanak-areia-200: "#E1D3B0"
  kanak-ouro-500: "#C8952A"
  kanak-ouro-400: "#E4BE63"
  kanak-tinta-900: "#1A1614"
  kanak-tinta-700: "#3D3733"
  kanak-tinta-500: "#6B625B"
  kanak-linha: "#E3DCD2"
  kanak-papel: "#FFFFFF"
typography:
  display:
    fontFamily: "Fraunces, serif"
    fontWeight: 600
  title:
    fontFamily: "Archivo, sans-serif"
    fontWeight: 600
  body:
    fontFamily: "Inter, sans-serif"
    fontWeight: 400
rounded:
  sm: "8px"
  md: "16px"
  lg: "24px"
spacing:
  4: "4px"
  8: "8px"
  12: "12px"
  16: "16px"
  24: "24px"
  32: "32px"
  48: "48px"
  64: "64px"
  96: "96px"
  128: "128px"
components:
  button-primary:
    backgroundColor: "{colors.kanak-bordo-700}"
    textColor: "{colors.kanak-papel}"
    rounded: "{rounded.sm}"
  button-secondary:
    textColor: "{colors.kanak-bordo-700}"
    rounded: "{rounded.sm}"
---

# Design System: Kanak Colchões

## Overview

**Creative North Star: "Quarto de verdade, fotografado com calma, sobre papel claro"**

O design do site institucional da Kanak foca no produto como ele vive no ambiente real: uma cama completa e elegante, não um objeto técnico cheio de setas e promessas. O que traz o aspecto premium para a interface não é o excesso de ornamentos, mas o espaço em branco, o ritmo de escala tipográfica (foto grande → texto curto → grade de cards) e o silêncio visual entre as seções. O bordô é tratado com parcimônia, funcionando como assinatura e não como preenchimento massivo de ambiente.

**Key Characteristics:**
- Muito respiro e fundos claros neutros dominantes
- Bordô reservado para detalhes, CTAs e no máximo dois blocos escuros por página
- Tipografia quieta com grandes contrastes de tamanho
- Fotografias reais de quarto/showroom, evitando banco de imagens genérico

## Colors

A paleta é quente e aterrada, equilibrando tons neutros de papel e tinta com o bordô como cor institucional e o ouro para mínimos detalhes de destaque.

### Primary
- **Bordô 700 (Botão Primário)** (#7A1420): Usado no CTA principal. É a cor de ação em todo o site.
- **Bordô 800 (Marca)** (#57090C): Usado para fundo de faixas menores e logo.
- **Bordô 900 (Bloco Escuro)** (#3D0609): Usado para fundo de grandes blocos de autoridade e rodapé (restrito a 1 ou 2 por página).
- **Bordô 600 (Hover)** (#93202C): Usado no estado hover do botão primário.

### Secondary
- **Ouro 500 (Detalhe)** (#C8952A): Detalhe, ícone, sublinhado e borda de card sobre fundo escuro. NUNCA usado como fundo de área grande nem como botão primário.
- **Ouro 400 (Destaque Claro)** (#E4BE63): Exclusivo para aplicação sobre fundos escuros.

### Neutral
- **Papel (Fundo Padrão)** (#FFFFFF): O fundo principal e dominante da página.
- **Areia 100 (Fundo Alternado)** (#F6F1E7): Fundo para as seções alternadas (quando não brancas).
- **Areia 200 (Faixa Destaque)** (#E1D3B0): Usado para pequenas quebras de ritmo.
- **Tinta 900 (Título)** (#1A1614): Títulos principais (h1, h2).
- **Tinta 700 (Corpo)** (#3D3733): Texto corrido, listas, FAQs.
- **Tinta 500 (Apoio)** (#6B625B): Texto de apoio e legendas.
- **Linha (Borda)** (#E3DCD2): Usado para divisórias finas e bordas de cards claros.

**The No-Green Rule.** O uso da cor verde está estritamente proibido no site inteiro, com a única exceção do interior do ícone do WhatsApp.

**The Bordeaux Signature Rule.** Fundo padrão é claro. Bloco escuro em bordô: no máximo dois por página, e nunca seguidos.

## Typography

**Display Font:** Fraunces
**Body Font:** Inter
**Label/Mono Font:** Archivo

**Character:** Uma mistura editorial e utilitária. Fraunces confere a personalidade premium e clássica aos títulos. Archivo é a voz utilitária e afiada para UI (rótulos e botões). Inter carrega a legibilidade invisível para parágrafos longos.

### Hierarchy
- **Display** (Fraunces 600, 32-56px, -1.5% tracking, 1.08 lh): Títulos (h1) e números grandes de medida. Nunca em caixa alta.
- **Headline** (Fraunces 600, 26-40px, -1% tracking, 1.15 lh): Subtítulos (h2).
- **Title** (Archivo 600, 20-24px, 0 tracking, 1.25 lh): Sub-seções (h3), rótulos, itens de menu e tabelas.
- **Body** (Inter 400, 16-17px, 0 tracking, 1.65 lh): Parágrafos e listas (máximo de 68 caracteres por linha).
- **Label** (Archivo 500/600, 12-16px, caixa alta quando rótulo de seção, +2-6% tracking): Botões e mini-rótulos.

**The No-Uppercase-Headline Rule.** Caixa alta é estritamente para rótulos de seção e botões — nunca em headlines de hero ou seções, pois isso confere tom panfletário.

## Layout

**Container & Grid:** Largura máxima de conteúdo em 1200px. Blocos de texto puro são limitados a 720px para leitura. Heros e faixas coloridas são full-bleed. Mobile-first como prioridade absoluta, com layouts projetados a partir de 360px.

**Rhythm & Spacing:** Espaçamentos são múltiplos de 4.
- Padding vertical de seção: 64px no celular → 112px no desktop. Seção de hero/fechamento pode ir a 96-160px.
- Espaço título → apoio: 16px. Apoio → CTA: 32px. Cards na mesma grade: 16-24px.
- Breakpoints base: 768px (tablet), 1024px, 1440px. No mobile, tabelas viram listas e carrosséis adotam scroll-snap com arrasto e botão.

## Elevation & Depth

Design eminentemente flat com sombreamento extremamente sutil e estratégico.

### Shadow Vocabulary
- **Elevated Card / Float** (`0 2px 8px rgba(26,22,20,0.06)`): Usado em cards elevados, hover de cards e no botão flutuante. Apenas uma sombra suave, sem uso de sombras coloridas ou múltiplas.

**The Flat-By-Default Rule.** Sem sombra colorida, dupla ou efeitos de brilho/glow. Sombras existem apenas para flutuação de cards, botão flutuante e interações de hover (onde a elevação sobe para +2px e escala vai a 1.01).

## Shapes

O form language baseia-se em raios arredondados variados dependendo da escala visual da superfície.
- `--r-sm` (8px): Elementos de ação pequenos (botões, chips, amostras de cor redondas/arredondadas).
- `--r-md` (16px): Superfícies de conteúdo (cards e fotos internas de cards).
- `--r-lg` (24px): Superfícies macro (fotos grandes que não sejam full-bleed, blocos destacados). Heros full-bleed não têm raio.

## Components

### Botões
- **Shape:** Arredondado suave de 8px, altura de 48px (mobile) a 52px (desktop).
- **Primary:** Fundo Bordô 700 (`#7A1420`), texto branco. Padding lateral de 24px. Hover escurece para Bordô 600 com leve elevação de 1px. Foco com anel de 2px Ouro 500 (offset de 2px).
- **Secondary:** Contorno 1.5px Bordô 700, texto bordô, fundo transparente.
- **Sobre foto:** Fundo branco, texto Bordô 800. Nunca translúcido.
- **Em bloco escuro:** Fundo Ouro 500, texto Bordô 900.

### Cards de Produto/Depoimento
- **Corner Style:** 16px.
- **Background:** Papel (`#FFFFFF`).
- **Border:** Fina de 1px usando Linha (`#E3DCD2`). Em bloco escuro, 1px de `rgba(228,190,99,0.35)`.
- **Content:** Foto no topo em 4:5 ou 3:4. Padding interno de 20px.

## Do's and Don'ts

### Do:
- **Do** aplique overlay medido em todo hero/texto sobre foto: gradiente linear de `rgba(26,22,20,0.72)` para `0.15` cobrindo exatamente a área do texto para garantir contraste AA (4.5:1).
- **Do** tratar fotografias com luz quente e brancos neutralizados, mantendo o tom fotográfico unificado. O texto sobre imagem é sempre Branco ou Areia 100.
- **Do** projetar para celular primeiro: o botão flutuante nunca deve cobrir um CTA nem o último parágrafo (preserve 88px no rodapé).

### Don't:
- **Don't** utilizar banco de imagens genérico de pessoas (ex: médica com luz azul, idosos com tablet) ou renders "tecnológicos" irrealistas flutuando no vazio.
- **Don't** empregar selos promocionais, badges vermelhos de garantia, gradientes e fitas de desconto.
- **Don't** alinhar texto longo justificado (use sempre alinhamento à esquerda).
- **Don't** usar autoplay, parallax ou animações complexas. Movimento deve ser sutil e respeitar `prefers-reduced-motion`.
