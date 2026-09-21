import type { ReactNode } from "react";
import Link from "next/link";
import { CtasDaSecao } from "@/components/primitivos/CtasDaSecao";
import { ImagemKanak } from "@/components/primitivos/ImagemKanak";
import { type FundoSecao, SecaoLayout } from "@/components/primitivos/SecaoLayout";
import { ProseCliente, TextoRico } from "@/components/primitivos/ProseCliente";
import { Carrossel } from "@/components/transversais/Carrossel";
import type { Bloco, Secao } from "@/lib/conteudo";
import { tituloDaSecao } from "@/lib/conteudo";
import type { ImagemSlot } from "@/lib/imagens-modelo";
import { hrefDoRotulo } from "@/lib/navegacao";
import type { OrigemWhatsApp } from "@/lib/whatsapp";

type Variante = "por-tamanho" | "por-modelo" | "home" | "lp";

function CardProduto({
  rotulo,
  corpo,
  href,
  imagem,
  escuro = false,
}: {
  rotulo: string;
  corpo: Extract<Bloco, { tipo: "blocoRotulado" }>["corpo"];
  href?: string;
  imagem?: ImagemSlot | null;
  escuro?: boolean;
}) {
  const inner = (
    // ── Inner core (Double-Bezel) ──────────────────────────────
    <div
      className={`flex h-full flex-col overflow-hidden rounded-[14px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.55)] ${
        escuro ? "bg-bordo-900" : "bg-papel"
      }`}
    >
      {imagem ? (
        <div className="aspect-[4/5] w-full overflow-hidden rounded-t-[14px] bg-areia-100">
          <ImagemKanak
            imagem={imagem}
            sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 25vw"
            className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04] motion-reduce:transform-none"
          />
        </div>
      ) : (
        <div className="aspect-[4/5] w-full rounded-t-[14px] bg-areia-100" aria-hidden />
      )}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <h3
            className={`flex items-center justify-between text-lg font-semibold transition-colors duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] md:text-xl ${
              escuro
                ? "text-areia-100 group-hover:text-ouro-400"
                : "text-tinta-900 group-hover:text-bordo-700"
            }`}
          >
            <span>{rotulo}</span>
            {href ? (
              <span
                className={`text-base opacity-0 transition-all duration-300 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 ${
                  escuro ? "text-ouro-400" : "text-bordo-700"
                }`}
                aria-hidden
              >
                →
              </span>
            ) : null}
          </h3>
          <div
            className={`mt-2 space-y-2 text-[15px] leading-relaxed ${
              escuro ? "text-areia-100/80" : "text-tinta-700"
            }`}
          >
            {corpo.map((p, j) => (
              <p key={j}>
                <TextoRico trechos={p} />
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // ── Outer shell (Double-Bezel) ─────────────────────────────
  const outerClasse = `group block min-w-[78%] snap-start rounded-[20px] p-1.5 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transform-none md:min-w-0 ${
    escuro
      ? "bg-white/[0.03] ring-1 ring-[rgba(228,190,99,0.15)] hover:ring-[rgba(228,190,99,0.3)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
      : "bg-black/[0.02] ring-1 ring-black/[0.06] hover:ring-bordo-700/20 hover:shadow-[0_12px_32px_rgba(26,22,20,0.11)] shadow-[0_2px_8px_rgba(26,22,20,0.04)]"
  }`;

  if (href) {
    return (
      <Link href={href} className={outerClasse}>
        {inner}
      </Link>
    );
  }

  return <article className={outerClasse}>{inner}</article>;
}


function imagemDoCard(
  rotulo: string,
  imagensTamanho?: Record<string, ImagemSlot | null>,
  imagensModelo?: Record<string, ImagemSlot | null>,
): ImagemSlot | null {
  if (imagensTamanho) {
    const direta = imagensTamanho[rotulo];
    if (direta) return direta;
    const chave = Object.keys(imagensTamanho).find((k) => {
      const termo = k.split("—")[0].trim();
      return new RegExp(`\\b${termo}\\b`, "i").test(rotulo);
    });
    if (chave) return imagensTamanho[chave] ?? null;
  }
  if (imagensModelo) {
    const direta = imagensModelo[rotulo];
    if (direta) return direta;
    const chave = Object.keys(imagensModelo).find((k) =>
      new RegExp(`\\b${k}\\b`, "i").test(rotulo),
    );
    if (chave) return imagensModelo[chave] ?? null;
  }
  return null;
}

type GrupoCards = Extract<Bloco, { tipo: "blocoRotulado" }>[];

function Cards({
  cards,
  rotulo,
  imagensTamanho,
  imagensModelo,
  tamanhoBase,
  escuro,
}: {
  cards: GrupoCards;
  rotulo: string;
  imagensTamanho?: Record<string, ImagemSlot | null>;
  imagensModelo?: Record<string, ImagemSlot | null>;
  tamanhoBase: string;
  escuro?: boolean;
}) {
  const pareceTamanho = cards.some((c) =>
    /king|queen|casal|solteiro/i.test(c.rotulo),
  );
  const tamanho = pareceTamanho ? imagensTamanho : undefined;
  const modelo = pareceTamanho ? undefined : imagensModelo;

  return (
    <Carrossel rotulo={rotulo} colunas={cards.length >= 4 ? 4 : 3}>
      {cards.map((card, i) => (
        <CardProduto
          key={i}
          rotulo={card.rotulo}
          corpo={card.corpo}
          href={hrefDoRotulo(card.rotulo, tamanhoBase)}
          imagem={imagemDoCard(card.rotulo, tamanho, modelo)}
          escuro={escuro}
        />
      ))}
    </Carrossel>
  );
}


type Props = {
  secao: Secao;
  origem: OrigemWhatsApp;
  fundo?: FundoSecao;
  variante?: Variante;
  imagensTamanho?: Record<string, ImagemSlot | null>;
  imagensModelo?: Record<string, ImagemSlot | null>;
  tamanhoBase?: string;
};

export function VitrineProdutos({
  secao,
  origem,
  fundo = "claro",
  imagensTamanho,
  imagensModelo,
  tamanhoBase = "/colchao-king-size",
}: Props) {
  const escuro = fundo === "escuro";
  const temRotulados = secao.corpo.some((b) => b.tipo === "blocoRotulado");
  const partes: ReactNode[] = [];
  let bufferCards: GrupoCards = [];
  let bufferLista: Extract<Bloco, { tipo: "lista" }> | null = null;
  let indice = 0;

  function despejarCards() {
    if (bufferCards.length === 0) return;
    const copia = bufferCards;
    bufferCards = [];
    partes.push(
      <div key={`cards-${indice++}`} className="mt-8">
        <Cards
          cards={copia}
          rotulo={tituloDaSecao(secao)}
          imagensTamanho={imagensTamanho}
          imagensModelo={imagensModelo}
          tamanhoBase={tamanhoBase}
          escuro={escuro}
        />
      </div>,
    );
  }

  function despejarLista() {
    if (!bufferLista) return;
    const lista = bufferLista;
    bufferLista = null;
    partes.push(
      <ul key={`lista-${indice++}`} className={`mt-6 grid gap-4 ${lista.itens.length >= 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
        {lista.itens.map((item, j) => (
          <li key={j} className="border-linha rounded-md border bg-papel p-5">
            <TextoRico trechos={item} />
          </li>
        ))}
      </ul>,
    );
  }

  for (const bloco of secao.corpo) {
    if (bloco.tipo === "placeholder") {
      despejarCards();
      despejarLista();
      if (
        (bloco.kind === "modelos" || bloco.kind === "produtos") &&
        !temRotulados &&
        imagensModelo &&
        Object.keys(imagensModelo).length > 0
      ) {
        partes.push(
          <div key={`ph-${indice++}`} className="mt-8">
            <Carrossel rotulo={tituloDaSecao(secao)} colunas={3}>
              {Object.entries(imagensModelo).map(([rotulo, imagem]) => (
                <CardProduto
                  key={rotulo}
                  rotulo={rotulo}
                  corpo={[]}
                  href={hrefDoRotulo(rotulo, tamanhoBase)}
                  imagem={imagem}
                  escuro={escuro}
                />
              ))}
            </Carrossel>
          </div>,
        );
      }
      continue;
    }
    if (bloco.tipo === "blocoRotulado") {
      despejarLista();
      bufferCards.push(bloco);
      continue;
    }
    despejarCards();
    if (bloco.tipo === "lista") {
      bufferLista = bloco;
      continue;
    }
    despejarLista();
    if (bloco.tipo === "subtitulo") {
      partes.push(
        <h3 key={`h-${indice++}`} className="mt-10 mb-2">
          {bloco.texto}
        </h3>,
      );
      continue;
    }
    if (bloco.tipo === "paragrafo" || bloco.tipo === "telefone" || bloco.tipo === "citacao") {
      partes.push(
        <div key={`p-${indice++}`} className="mt-4">
          <ProseCliente blocos={[bloco]} />
        </div>,
      );
    }
  }
  despejarCards();
  despejarLista();

  return (
    <SecaoLayout fundo={fundo}>
      <h2 className="titulo-secao">{tituloDaSecao(secao)}</h2>
      <div className="w-full">{partes}</div>
      <CtasDaSecao ctas={secao.ctas} origem={origem} />
    </SecaoLayout>
  );
}

