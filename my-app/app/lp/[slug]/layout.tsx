import { Footer } from "@/components/transversais/Footer";

export default function LpLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="titulo-lp">
      <main id="conteudo">{children}</main>
      <Footer variante="legal" />
    </div>
  );
}
