import type { Metadata } from "next";
import { Archivo, Fraunces, Inter } from "next/font/google";
import { BotaoFlutuanteWhatsapp } from "@/components/transversais/BotaoFlutuanteWhatsapp";
import { ogPadrao } from "@/lib/imagens";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-fraunces",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-archivo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
  display: "swap",
});

const og = ogPadrao();

export const metadata: Metadata = {
  metadataBase: new URL("https://kanakcolchoes.com.br"),
  title: {
    default: "Kanak Colchões",
    template: "%s · Kanak Colchões",
  },
  description:
    "Conjuntos completos de cama Kanak. Fale com a equipe pelo WhatsApp.",
  openGraph: og
    ? {
        images: [{ url: og.src, width: og.width, height: og.height, alt: og.alt }],
      }
    : undefined,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${archivo.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="font-texto min-h-full bg-papel text-tinta-700">
        <a
          href="#conteudo"
          className="bg-bordo-700 text-papel sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[110] focus:rounded-sm focus:px-4 focus:py-3"
        >
          Ir para o conteúdo
        </a>
        {children}
        <BotaoFlutuanteWhatsapp />
      </body>
    </html>
  );
}
