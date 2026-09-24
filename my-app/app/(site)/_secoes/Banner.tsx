import Image from "next/image";
import { HOME } from "@/content/home";
import { TAMANHOS, type Tamanho } from "@/content/produtos";
import { cta } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Secao";
import { EspacoFoto } from "@/components/ui/EspacoFoto";
import { BotaoWhatsApp } from "@/components/whatsapp/BotaoWhatsApp";
import { LinkWhatsApp } from "@/components/whatsapp/LinkWhatsApp";

/**
 * Seção 1 · Banner. Título, apoio e CTA empilhados; abaixo, as quatro camas
 * clicáveis, uma por tamanho. No celular as fotos deslizam para o lado; no
 * desktop dividem a faixa e a escolhida abre no hover (ver .camas em globals.css).
 */
export function Banner() {
  return (
    <section className="relative overflow-hidden bg-surface-100 pt-8 pb-12 md:pt-16 md:pb-20">
      <video
        className="pointer-events-none absolute inset-0 size-full object-cover brightness-[0.72] motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src="/magnific_create-a-scrollstopping-9_3zXqgxhREY.mp4" type="video/mp4" />
      </video>
      <div className="veu-hero pointer-events-none absolute inset-0 motion-reduce:hidden" aria-hidden="true" />
      <Container className="relative flex flex-col gap-8 md:gap-12">
        <div className="flex flex-col gap-5 md:gap-7">
          <h1 className="max-w-[14em] font-display text-display-xl leading-[1.15] text-ink">
            {HOME.banner.tituloInicio}
            <em className="lencol inline-block text-vinho italic">{HOME.banner.tituloRealce}</em>
          </h1>
          <p className="max-w-xl text-body-lg text-ink-60">{HOME.banner.apoio}</p>
          <BotaoWhatsApp origem="banner" larguraTotal className="md:self-start" />
        </div>

        {/*
          Uma lista só para os dois formatos: no celular é trilho com
          encaixe; a partir de md vira a faixa que abre no hover (.camas).
          Renderizar duas vezes faria o navegador baixar as fotos em dobro.
        */}
        <ul
          className="camas trilho -mx-5 h-95 gap-2.5 px-5 pt-2 md:mx-0 md:h-100 md:gap-3 md:overflow-visible md:px-0 md:pt-0"
          style={{ scrollPaddingInline: "1.25rem" }}
        >
          {TAMANHOS.map((tamanho) => (
            <li key={tamanho.nome} className="cama w-60 md:w-auto">
              <CamaDoBanner tamanho={tamanho} prioridade={tamanho.nome === "Queen Size"} />
            </li>
          ))}
        </ul>

        <div className="grid gap-4 border-t border-borda pt-7 md:grid-cols-2 md:gap-16 md:pt-10">
          <p className="text-body-lg text-ink">{HOME.banner.paragrafo1}</p>
          <p className="text-body-lg text-ink-60">
            <strong className="font-display text-[22px] font-semibold text-vinho md:text-2xl">
              {HOME.banner.destaque}
            </strong>{" "}
            {HOME.banner.paragrafo2}
          </p>
        </div>
      </Container>
    </section>
  );
}

function CamaDoBanner({ tamanho, prioridade }: { tamanho: Tamanho; prioridade: boolean }) {
  return (
    <LinkWhatsApp
      origem={tamanho.origemHero}
      rotuloAcessivel={cta(tamanho.origemHero).rotulo}
      className="recuo-no-toque relative flex size-full flex-col justify-end overflow-hidden rounded-[18px] bg-borda p-3 text-ink no-underline md:rounded-lg md:p-3.5"
    >
      {tamanho.foto ? (
        <Image
          src={tamanho.foto.src}
          alt={tamanho.foto.alt}
          fill
          priority={prioridade}
          sizes="(min-width: 768px) 30vw, 240px"
          className="object-cover"
        />
      ) : (
        <EspacoFoto
          legenda={`FOTO · cama ${tamanho.nome} montada no quarto`}
          className="absolute inset-0"
        />
      )}
      {/* .placa e .medida viram vinho quando a cama abre (ver .camas em globals.css) */}
      <span className="placa relative flex w-fit max-w-full flex-col gap-0.5 rounded-[10px] bg-surface-100 px-3 py-2.5">
        <span className="font-display text-xl leading-none break-words md:whitespace-nowrap">
          {tamanho.nome}
        </span>
        <span className="medida text-caption font-semibold whitespace-nowrap text-apricot-700">
          {tamanho.medida}
        </span>
      </span>
    </LinkWhatsApp>
  );
}
