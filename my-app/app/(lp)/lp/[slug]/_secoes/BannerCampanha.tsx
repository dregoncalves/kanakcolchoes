import type { Campanha } from "@/content/campanhas";
import { cta } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Secao";
import { FotoArteDirigida } from "@/components/ui/FotoArteDirigida";
import { IconeWhatsApp } from "@/components/ui/IconeWhatsApp";
import { LinkWhatsApp } from "@/components/whatsapp/LinkWhatsApp";

/**
 * Seção 1 · Banner trocável da campanha. O bloco inteiro é um link de
 * WhatsApp (origem lp_banner): arte, título, oferta e chamada mudam a cada
 * campanha, o resto da página fica igual.
 *
 * No celular a arte fica no topo do card; no desktop, na metade direita.
 * As duas versões saem de um <picture> só, para o navegador baixar uma.
 */
export function BannerCampanha({ campanha }: { campanha: Campanha }) {
  const { banner } = campanha;

  return (
    <section className="bg-surface-100 px-3 md:px-10">
      <Container className="px-0 md:px-0">
        <LinkWhatsApp
          origem="lp_banner"
          rotuloAcessivel={`${banner.ofertaDestaque}. ${cta("lp_banner").rotulo}`}
          className="sobre-vinho group flex flex-col overflow-hidden rounded-3xl bg-vinho text-on-dark no-underline md:grid md:h-150 md:grid-cols-2 md:rounded-[28px]"
        >
          <div className="relative h-70 md:order-last md:h-auto">
            <FotoArteDirigida
              mobile={{
                src: banner.arte.mobile.src,
                alt: banner.arte.mobile.alt,
                largura: banner.arte.mobile.largura,
                altura: banner.arte.mobile.altura,
              }}
              desktop={{
                src: banner.arte.desktop.src,
                largura: banner.arte.desktop.largura,
                altura: banner.arte.desktop.altura,
              }}
              prioridade
              className="absolute inset-0 size-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center gap-4.5 px-6 py-7 md:gap-7 md:py-0 md:pr-16 md:pl-20">
            <h1 className="font-display text-display-xl text-on-dark">
              {banner.tituloInicio}
              <em className="text-apricot-cream italic">{banner.tituloRealce}</em>
            </h1>
            <p className="flex flex-col gap-0.5">
              <span className="lencol font-display text-[32px] leading-9 text-apricot-cream md:text-[44px] md:leading-12">
                {banner.ofertaDestaque}
              </span>
              <span className="text-[17px] leading-6 font-medium text-on-dark md:text-xl md:leading-7">
                {banner.ofertaComplemento}
              </span>
            </p>
            <span className="lp-toque flex min-h-14 items-center justify-center gap-2.5 rounded-md bg-apricot-cream px-7 font-semibold text-vinho md:min-h-15 md:self-start md:text-[17px]">
              <IconeWhatsApp />
              {cta("lp_banner").rotulo}
            </span>
          </div>
        </LinkWhatsApp>
      </Container>
    </section>
  );
}
