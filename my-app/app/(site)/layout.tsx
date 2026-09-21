import { Footer } from "@/components/transversais/Footer";
import { Header } from "@/components/transversais/Header";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="conteudo">{children}</main>
      <Footer />
    </>
  );
}
