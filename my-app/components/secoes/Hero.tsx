import { CtaWhatsApp, type VarianteCta } from "@/components/primitivos/CtaWhatsApp";
import { ImagemKanak } from "@/components/primitivos/ImagemKanak";
import { ImageAccordion } from "@/components/primitivos/ImageAccordion";
import { ProseCliente, TextoRico } from "@/components/primitivos/ProseCliente";
import type { Secao } from "@/lib/conteudo";
import { prosaDaSecao, tituloDaSecao } from "@/lib/conteudo";
import type { ImagemSlot } from "@/lib/imagens-modelo";
import type { OrigemWhatsApp } from "@/lib/whatsapp";

type Variante = "institucional" | "produto" | "lp";

type Props = {
  secao: Secao;
  origem: OrigemWhatsApp;
  variante?: Variante;
  desktop?: ImagemSlot | null;
  mobile?: ImagemSlot | null;
};

function MidiaHero({
  desktop,
  mobile,
}: {
  desktop: ImagemSlot | null;
  mobile: ImagemSlot | null;
}) {
  const unica = desktop ?? mobile;
  const duas = Boolean(desktop && mobile && desktop.src !== mobile.src);

  if (duas && desktop && mobile) {
    return (
      <>
        <ImagemKanak
          imagem={mobile}
          sizes="100vw"
          priority
          fill
          className="object-cover md:hidden"
          objectPosition="center top"
        />
        <ImagemKanak
          imagem={desktop}
          sizes="(min-width: 768px) 100vw, 0"
          priority
          fill
          className="hidden object-cover md:block"
          objectPosition="right center"
        />
      </>
    );
  }

  if (!unica) return null;

  return (
    <ImagemKanak
      imagem={unica}
      sizes="100vw"
      priority
      fill
      className="object-cover"
      objectPosition="right center"
    />
  );
}

export function Hero({
  secao,
  origem,
  variante = "institucional",
  desktop,
  mobile,
}: Props) {
  const titulo = tituloDaSecao(secao);
  const prosa = prosaDaSecao(secao);
  const paragrafos = prosa.filter((b) => b.tipo === "paragrafo");
  const cta = secao.ctas[0];
  const temFoto = Boolean(desktop || mobile);
  const ctaVariante: VarianteCta = temFoto ? "sobre-foto" : "primario";
  const lp = variante === "lp";

  const tituloClass = [
    "text-balance",
    lp ? "font-subtitulo tracking-normal" : "tracking-[-0.015em]",
    temFoto ? "text-papel" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const texto = (
    <>
      <h1 className={tituloClass}>{titulo}</h1>
      {lp ? (
        <div
          className={`mt-4 text-[18px] leading-[1.55] md:text-[20px] ${
            temFoto ? "[&_p]:text-areia-100" : ""
          }`}
        >
          <ProseCliente blocos={prosa} className="max-w-none" />
        </div>
      ) : (
        <div
          className={`mt-4 max-w-[60ch] space-y-4 text-[18px] leading-[1.55] md:text-[20px] ${
            temFoto ? "text-areia-100" : ""
          }`}
        >
          {paragrafos.map((bloco, i) =>
            bloco.tipo === "paragrafo" ? (
              <p key={i}>
                <TextoRico trechos={bloco.trechos} />
              </p>
            ) : null,
          )}
        </div>
      )}
      {cta ? (
        <div className="mt-8">
          <CtaWhatsApp texto={cta.texto} origem={origem} variante={ctaVariante} />
        </div>
      ) : null}
    </>
  );

  const altura = lp
    ? "min-h-[70svh] md:min-h-[min(80svh,640px)]"
    : "min-h-[88svh] md:min-h-[100svh]";

  if (!temFoto) {
    return (
      <section className="bg-areia-100 text-tinta-700">
        <div
          className={`mx-auto flex max-w-[1200px] items-end px-5 pb-16 lg:px-8 ${
            lp ? "py-16 md:px-6 md:py-24" : `${altura} pt-24 md:px-6 md:pb-24`
          }`}
        >
          <div className="w-full md:max-w-[55%]">{texto}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="text-papel">
      <div className={`relative overflow-hidden ${altura}`}>
        {variante === "institucional" ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/magnific_create-a-scrollstopping-9_3zXqgxhREY.mp4" type="video/mp4" />
          </video>
        ) : (
          <MidiaHero desktop={desktop ?? null} mobile={mobile ?? null} />
        )}
        <div className={`overlay-hero absolute inset-0 ${variante === "institucional" ? "bg-black/40" : ""}`} aria-hidden />
        <div
          className={`relative mx-auto flex h-full max-w-[1200px] items-center md:items-end justify-between px-5 pb-16 md:px-6 md:pb-24 lg:px-8 ${altura}`}
        >
          <div className="w-full md:max-w-[55%]">{texto}</div>
          {variante === "institucional" && (
            <div className="hidden md:block">
              <ImageAccordion />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
