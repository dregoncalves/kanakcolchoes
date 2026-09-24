import type { Metadata } from "next";
import { Instrument_Sans, Inter } from "next/font/google";
import { ANALYTICS, SITE } from "@/lib/site";
import { AvisoCookies } from "@/components/analytics/AvisoCookies";
import { Medicao } from "@/components/analytics/Medicao";
import { RastreioCliques } from "@/components/analytics/RastreioCliques";
import "./globals.css";

// Instrument Sans nos títulos: o realce é o itálico da mesma família, nunca
// uma segunda família enfiada no meio do título.
const display = Instrument_Sans({
  weight: ["600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--fonte-instrument-sans",
});

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--fonte-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.nome} — colchões, bases, cabeceiras e baús`,
    template: `%s · ${SITE.nome}`,
  },
  description: SITE.descricao,
  openGraph: {
    type: "website",
    locale: SITE.locale,
    siteName: SITE.nome,
    title: `${SITE.nome} — colchões, bases, cabeceiras e baús`,
    description: SITE.descricao,
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-dvh">
        {children}
        <AvisoCookies />
        <RastreioCliques />
        <Medicao ga4={ANALYTICS.ga4} metaPixel={ANALYTICS.metaPixel} />
      </body>
    </html>
  );
}
