import { TELEFONES_RODAPE } from "@/content/ctas";
import { HOME } from "@/content/home";
import { CabecalhoSite } from "@/components/layout/CabecalhoSite";
import { Rodape } from "@/components/layout/Rodape";

/** Layout do site institucional: cabeçalho com menu + rodapé. */
export default function LayoutSite({ children }: LayoutProps<"/">) {
  return (
    <>
      <CabecalhoSite />
      <main id="conteudo">{children}</main>
      <Rodape origensTelefone={TELEFONES_RODAPE} linksInternos={HOME.navegacao} />
    </>
  );
}
