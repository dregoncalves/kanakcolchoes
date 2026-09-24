import type { Metadata } from "next";
import { Banner } from "./_secoes/Banner";
import { Ciencia } from "./_secoes/Ciencia";
import { ComoEscolher } from "./_secoes/ComoEscolher";
import { Colchoes } from "./_secoes/Colchoes";
import { Depoimentos } from "./_secoes/Depoimentos";
import { Showroom } from "./_secoes/Showroom";
import { Duvidas } from "./_secoes/Duvidas";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    images: [
      {
        url: "/images/home/banner-king.png",
        width: 1248,
        height: 1872,
        alt: "Cama King Size da Kanak montada em um quarto, com cabeceira capitonê grafite.",
      },
    ],
  },
};

/**
 * Home. A ordem das seções segue a prancheta e é obrigatória:
 * 1 Banner · 2 Ciência · 3 Como escolher · 4 Colchões · 5 Depoimentos ·
 * 7 Showroom · 8 Dúvidas. Não existe seção 6.
 */
export default function PaginaHome() {
  return (
    <>
      <Banner />
      <Ciencia />
      <ComoEscolher />
      <Colchoes />
      <Depoimentos />
      <Showroom />
      <Duvidas />
    </>
  );
}
