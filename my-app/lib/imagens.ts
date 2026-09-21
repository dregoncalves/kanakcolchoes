import fs from "node:fs";
import path from "node:path";
import "server-only";
import type { ImagemSlot } from "@/lib/imagens-modelo";

export type { ImagemSlot } from "@/lib/imagens-modelo";

function existePublica(relativo: string): boolean {
  return fs.existsSync(path.join(process.cwd(), "public", "img", relativo));
}

export function imagemPublica(
  relativo: string,
  alt: string,
  width: number,
  height: number,
): ImagemSlot | null {
  if (!existePublica(relativo)) return null;
  return {
    src: `/img/${relativo.replace(/\\/g, "/")}`,
    alt,
    width,
    height,
  };
}

export const CORES_VELUDO = [
  { id: "bege", nome: "Bege", hex: "#D6C4A8" },
  { id: "cinza", nome: "Cinza", hex: "#8A8680" },
  { id: "terracota", nome: "Terracota", hex: "#C4623A" },
  { id: "caramelo", nome: "Caramelo", hex: "#C4A06A" },
  { id: "marrom", nome: "Marrom", hex: "#6B3E2E" },
  { id: "vinho", nome: "Vinho", hex: "#6B1D2A" },
  { id: "vermelho", nome: "Vermelho", hex: "#A31F24" },
  { id: "rose", nome: "Rosé", hex: "#C98990" },
  { id: "azul", nome: "Azul", hex: "#3D5A7A" },
  { id: "mostarda", nome: "Mostarda", hex: "#C4A035" },
  { id: "verde", nome: "Verde", hex: "#5A6B4A" },
] as const;

export function imagensDaHome() {
  return {
    heroDesktop: imagemPublica(
      "hero/hero-home-king-cinza-desktop-21x9.jpg",
      "Kit completo King Size em veludo cinza-chumbo, com colchão pillow top, em suíte contemporânea",
      2560,
      1097,
    ),
    heroMobile: imagemPublica(
      "hero/hero-home-king-cinza-mobile-4x5.jpg",
      "Kit completo King Size em veludo cinza-chumbo, com colchão pillow top, enquadramento vertical",
      1080,
      1350,
    ),
    tamanhos: {
      "Queen Size — 158 x 198 cm": imagemPublica(
        "ambiente/tamanho-queen-vinho-card-4x3.jpg",
        "Kit Queen Size em veludo vinho em suíte ampla",
        1200,
        900,
      ),
      "King Size — 193 x 203 cm": imagemPublica(
        "ambiente/tamanho-king-mostarda-card-4x3.jpg",
        "Kit King Size em veludo mostarda em suíte grande",
        1200,
        900,
      ),
      "Casal — 138 x 188 cm": imagemPublica(
        "ambiente/tamanho-casal-terracota-card-4x3.jpg",
        "Kit Casal em veludo terracota em suíte de casal",
        1200,
        900,
      ),
      "Solteiro — 88 x 188 cm": imagemPublica(
        "ambiente/tamanho-solteiro-verde-card-4x3.jpg",
        "Kit Solteiro em veludo verde-oliva em quarto de adulto",
        1200,
        900,
      ),
    } as Record<string, ImagemSlot | null>,
    modelos: {
      "Molas Ensacadas": imagemPublica(
        "produto/linha-molas-ensacadas-1x1.jpg",
        "Colchão Molas Ensacadas isolado, faixa única, sem pillow top",
        1400,
        1400,
      ),
      "Anatômico Ortopédico": imagemPublica(
        "produto/linha-anatomico-ortopedico-1x1.jpg",
        "Colchão Anatômico Ortopédico isolado, com pillow top visível",
        1400,
        1400,
      ),
      Magnético: imagemPublica(
        "produto/linha-magnetico-1x1.jpg",
        "Colchão Magnético isolado, com pillow top",
        1400,
        1400,
      ),
    } as Record<string, ImagemSlot | null>,
    fechamentoDesktop: imagemPublica(
      "hero/cta-final-quarto-entardecer-desktop-21x9.jpg",
      "Canto de quarto ao entardecer, cama parcialmente visível",
      2560,
      1097,
    ),
    fechamentoMobile: imagemPublica(
      "hero/cta-final-quarto-entardecer-mobile-4x5.jpg",
      "Canto de quarto ao entardecer, enquadramento vertical",
      1080,
      1350,
    ),
  };
}

export function imagensDoKitKing() {
  return {
    hero: imagemPublica(
      "comparativo/espaco-no-quarto-king-16x9.jpg",
      "Quarto visto de um canto alto, com a cama King e a circulação livre ao redor",
      2000,
      1125,
    ),
    heroFallback: imagemPublica(
      "ambiente/tamanho-king-mostarda-card-4x3.jpg",
      "Kit King Size em veludo mostarda em suíte grande",
      1200,
      900,
    ),
    composicao: imagemPublica(
      "produto/kit-composicao-explodida-terracota-1x1.jpg",
      "Colchão, cabeceira, baú e 4 travesseiros dispostos separadamente",
      1400,
      1400,
    ),
    kitCompleto: imagemPublica(
      "produto/kit-completo-bege-packshot-1x1.jpg",
      "Kit completo em veludo bege isolado: base, cabeceira, colchão, baú e 4 travesseiros",
      1400,
      1400,
    ),
    dimensoes: imagemPublica(
      "comparativo/topdown-king-3x2.jpg",
      "Vista superior do colchão King Size",
      1600,
      1067,
    ),
    modelos: imagensDaHome().modelos,
  };
}

export function imagensDoModeloAnatomico() {
  return {
    hero: imagemPublica(
      "hero/linha-anatomico-ortopedico-16x9.jpg",
      "Colchão Anatômico Ortopédico com pillow top sobre a base, em quarto neutro",
      2400,
      1350,
    ),
    composicao: imagemPublica(
      "produto/kit-composicao-explodida-terracota-1x1.jpg",
      "Colchão, cabeceira, baú e 4 travesseiros dispostos separadamente",
      1400,
      1400,
    ),
    tecnologia: imagemPublica(
      "detalhe/macro-pillow-top-vies-3x2.jpg",
      "Encontro da faixa do pillow top com o corpo do colchão, com o viés champanhe e a costura",
      1600,
      1067,
    ),
    comparativo: imagemPublica(
      "comparativo/pillow-top-vs-sem-pillow-top-3x2.jpg",
      "Dois colchões lado a lado em vista lateral: um com pillow top, outro sem",
      1600,
      1067,
    ),
  };
}

export function imagensDaLp() {
  return {
    heroDesktop: imagemPublica(
      "hero/lp-kit-king-terracota-desktop-16x9.jpg",
      "Kit King Size completo em veludo terracota, cama arrumada em suíte com boiserie",
      2400,
      1350,
    ),
    heroMobile: imagemPublica(
      "hero/lp-kit-king-terracota-mobile-4x5.jpg",
      "Kit King Size em veludo terracota, enquadramento vertical para celular",
      1080,
      1350,
    ),
    modelos: imagensDaHome().modelos,
    og: imagemPublica(
      "og/og-lp-kit-1200x630.jpg",
      "Kanak Colchões — kit completo",
      1200,
      630,
    ),
  };
}

export function amostrasDeCor() {
  return CORES_VELUDO.map((cor) => ({
    ...cor,
    imagem: imagemPublica(
      `cores/swatch-${cor.id}-1x1.jpg`,
      `Amostra de veludo na cor ${cor.nome}`,
      600,
      600,
    ),
  }));
}

export function ogPadrao() {
  return imagemPublica(
    "og/og-default-1200x630.jpg",
    "Kanak Colchões",
    1200,
    630,
  );
}
