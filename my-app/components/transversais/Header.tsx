"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { CtaWhatsApp } from "@/components/primitivos/CtaWhatsApp";
import { ITENS_MENU, itemMenuAtivo, type ItemMenu } from "@/lib/navegacao";
import { urlWhatsApp, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

// ---------------------------------------------------------------------------
// Constante — texto da barra de anúncio
// EDITE AQUI quando o cliente definir o texto definitivo.
// ---------------------------------------------------------------------------
const TEXTO_PROMO =
  "Pague só na entrega · Devolução sem custo · Entrega em 9 estados";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const FOCAVEIS =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

function origemDoHeader(pathname: string) {
  if (pathname === "/") return { pagina: "home", secao: "header" };
  if (pathname.startsWith("/colchao-king-size/anatomico-ortopedico"))
    return { pagina: "king-anatomico", secao: "header" };
  if (pathname.startsWith("/colchao-king-size"))
    return { pagina: "king-size", secao: "header" };
  return { pagina: pathname.replace(/^\//, "") || "home", secao: "header" };
}

function paginaTemHero(pathname: string) {
  return (
    pathname === "/" ||
    pathname.startsWith("/colchao-king-size") ||
    pathname.startsWith("/lp/")
  );
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function LogoKanak({
  className = "",
  transparente = false,
  onClick,
}: {
  className?: string;
  transparente?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href="/"
      className={`shrink-0 transition-opacity duration-300 hover:opacity-80 ${className}`}
      onClick={onClick}
    >
      <Image
        src="/logo.webp"
        alt="Kanak Colchões"
        width={160}
        height={48}
        priority
        className={`w-auto h-[28px] md:h-[34px] object-contain transition-all duration-300 ${
          transparente ? "brightness-0 invert opacity-90" : ""
        }`}
      />
    </Link>
  );
}

function ItemDesktop({
  item,
  pathname,
  transparente,
}: {
  item: ItemMenu;
  pathname: string;
  transparente: boolean;
}) {
  const ativo = itemMenuAtivo(pathname, item);

  const corBase = transparente
    ? ativo
      ? "text-areia-200"
      : "text-papel/80 hover:text-papel"
    : ativo
      ? "text-bordo-800"
      : "text-tinta-700 hover:text-bordo-700";

  const classes = `font-subtitulo inline-flex min-h-11 items-center whitespace-nowrap text-[12px] font-medium tracking-[0.06em] uppercase transition-colors duration-200 ${
    item.disponivel ? corBase : "cursor-not-allowed opacity-40"
  }`;

  if (!item.disponivel)
    return (
      <span className={classes} aria-disabled="true">
        {item.label}
      </span>
    );

  return (
    <Link
      href={item.href}
      className={classes}
      aria-current={ativo ? "page" : undefined}
    >
      {item.label}
    </Link>
  );
}

function ItemDrawer({
  item,
  pathname,
  onNavigate,
  index,
  aberto,
}: {
  item: ItemMenu;
  pathname: string;
  onNavigate: () => void;
  index: number;
  aberto: boolean;
}) {
  const ativo = itemMenuAtivo(pathname, item);
  const classes = `font-subtitulo flex min-h-[52px] items-center rounded-sm px-3 text-base font-medium tracking-[0.06em] uppercase transition-colors duration-200 ${
    item.disponivel
      ? ativo
        ? "text-bordo-800"
        : "text-tinta-900 hover:text-bordo-700 hover:bg-areia-100"
      : "cursor-not-allowed opacity-40"
  }`;

  if (!item.disponivel)
    return (
      <span
        className={classes}
        aria-disabled="true"
        style={{ transitionDelay: aberto ? `${60 + index * 55}ms` : "0ms" }}
      >
        {item.label}
      </span>
    );

  return (
    <Link
      href={item.href}
      className={classes}
      aria-current={ativo ? "page" : undefined}
      onClick={onNavigate}
      style={{ transitionDelay: aberto ? `${60 + index * 55}ms` : "0ms" }}
    >
      {item.label}
    </Link>
  );
}

// ---------------------------------------------------------------------------
// Ícones (fora do render — evita "component created during render")
// ---------------------------------------------------------------------------

function HamburgerIcon({ cor }: { cor: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M2.25 9H21.75"
        stroke={cor}
        strokeWidth="1.5"
        strokeLinecap="square"
      />
      <path
        d="M2.25 15H21.75"
        stroke={cor}
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <span className="flex flex-col gap-1.5" aria-hidden>
      <span className="bg-tinta-900 block h-0.5 w-5 origin-center translate-y-2 rotate-45" />
      <span className="bg-tinta-900 block h-0.5 w-5 opacity-0 scale-x-0" />
      <span className="bg-tinta-900 block h-0.5 w-5 origin-center -translate-y-2 -rotate-45" />
    </span>
  );
}

function IconeWhatsApp() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className="shrink-0"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Header
// ---------------------------------------------------------------------------

export function Header() {
  const pathname = usePathname();
  const [aberto, setAberto] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [promoVisivel, setPromoVisivel] = useState(true);
  const tituloId = useId();
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const painelRef = useRef<HTMLDivElement>(null);
  const estavaAberto = useRef(false);
  const origem = origemDoHeader(pathname);
  const temHero = paginaTemHero(pathname);

  // Flutuante quando: tem hero E ainda não rolou
  const flutuante = temHero && !scrolled;

  // ── Scroll listener ───────────────────────────────────────────────────────
  useEffect(() => {
    const THRESHOLD = 80;
    const handler = () => setScrolled(window.scrollY > THRESHOLD);
    window.addEventListener("scroll", handler, { passive: true });
    const id = setTimeout(handler, 0);
    return () => {
      window.removeEventListener("scroll", handler);
      clearTimeout(id);
    };
  }, [pathname]);

  // ── Lock body scroll quando drawer aberto ─────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [aberto]);

  // ── Retorna foco ao hamburger ao fechar ───────────────────────────────────
  useEffect(() => {
    if (estavaAberto.current && !aberto) {
      hamburgerRef.current?.focus();
    }
    estavaAberto.current = aberto;
  }, [aberto]);

  // ── Focus trap no drawer ──────────────────────────────────────────────────
  useEffect(() => {
    if (!aberto) return;
    const painel = painelRef.current;
    if (!painel) return;

    const itens = () =>
      Array.from(painel.querySelectorAll<HTMLElement>(FOCAVEIS)).filter(
        (el) => !el.hasAttribute("disabled") && el.tabIndex !== -1,
      );

    itens()[0]?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setAberto(false);
        return;
      }
      if (e.key !== "Tab") return;
      const lista = itens();
      if (lista.length === 0) return;
      const primeiro = lista[0];
      const ultimo = lista[lista.length - 1];
      if (e.shiftKey && document.activeElement === primeiro) {
        e.preventDefault();
        ultimo.focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault();
        primeiro.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [aberto]);

  return (
    <>
      {/* ── Skip link ──────────────────────────────────────────────────────── */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[110] focus:rounded focus:bg-bordo-800 focus:px-4 focus:py-2 focus:text-papel focus:outline-none"
      >
        Ir para o conteúdo
      </a>

      {/* ── Wrapper fixo — ocupa largura total, sem fundo próprio ─────────── */}
      <header
        className="fixed inset-x-0 top-0 z-[100]"
        tabIndex={-1}
        id="header"
      >
        {/* ── Barra de anúncio ─────────────────────────────────────────────── */}
        {promoVisivel && (
          <div className="bg-bordo-800 flex items-center justify-center gap-3 px-4 py-2 text-center">
            <p className="font-subtitulo text-[11px] font-medium tracking-[0.07em] uppercase text-papel/90 md:text-[12px]">
              {TEXTO_PROMO}
            </p>
            <button
              type="button"
              onClick={() => setPromoVisivel(false)}
              className="ml-1 shrink-0 text-papel/60 transition-colors hover:text-papel"
              aria-label="Fechar aviso"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 1l12 12M13 1L1 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        )}

        {/* ── Desktop nav (≥ 1024px) ─────────────────────────────────────── */}
        <div className="hidden lg:block">
          {/*
            Pill flutuante quando no topo da página com hero.
            Colapsa para full-width sólido ao rolar.
          */}
          <div
            className={`transition-[background-color,border-radius,margin,width,max-width,backdrop-filter,box-shadow] duration-300 ease-in-out ${
              flutuante
                ? // ── Estado flutuante ─────────────────────────────────────
                  "mx-auto mt-7 w-[calc(100%-4rem)] max-w-[1240px] rounded-[10px] bg-white/30 backdrop-blur-[10px] shadow-[0_4px_24px_rgba(26,22,20,0.12)]"
                : // ── Estado colado ao topo ────────────────────────────────
                  "mx-0 mt-0 w-full max-w-none rounded-none bg-papel shadow-[0_2px_8px_rgba(26,22,20,0.06)] border-b border-linha"
            }`}
          >
            <div
              className={`mx-auto flex h-[62px] items-center gap-6 transition-[padding,max-width] duration-300 ${
                flutuante ? "px-8 max-w-none" : "px-8 max-w-[1240px]"
              }`}
            >
              {/* Logo — sempre à esquerda */}
              <LogoKanak transparente={flutuante} />

              {/* Nav links — flex-1 ocupa o meio */}
              <nav aria-label="Principal" className="flex-1">
                <ul className="flex items-center gap-1 xl:gap-3">
                  {ITENS_MENU.map((item) => (
                    <li key={item.href}>
                      <ItemDesktop
                        item={item}
                        pathname={pathname}
                        transparente={flutuante}
                      />
                    </li>
                  ))}
                </ul>
              </nav>

              {/* CTA "Fale com um especialista" */}
              <a
                href={urlWhatsApp({ ...origem, secao: "header-cta" })}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex shrink-0 h-[38px] items-center gap-2 rounded-[8px] px-4 font-subtitulo text-[12px] font-semibold tracking-[0.03em] uppercase whitespace-nowrap transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ouro-500 ${
                  flutuante
                    ? "bg-papel text-bordo-800 hover:bg-areia-100"
                    : "bg-bordo-700 text-papel hover:bg-bordo-600"
                }`}
                aria-label={`Fale com um especialista pelo WhatsApp ${WHATSAPP_DISPLAY}`}
              >
                <IconeWhatsApp />
                Fale com um especialista
              </a>
            </div>
          </div>
        </div>

        {/* ── Mobile nav (< 1024px) ──────────────────────────────────────── */}
        <div className="lg:hidden">
          <div
            className={`flex h-[58px] items-center px-4 transition-[background-color,box-shadow,border-color] duration-300 ${
              flutuante
                ? "bg-transparent"
                : "bg-papel border-b border-linha shadow-[0_2px_8px_rgba(26,22,20,0.06)]"
            }`}
          >
            {/* Logo à esquerda */}
            <LogoKanak transparente={flutuante} className="flex-1" />

            {/* Ações à direita */}
            <div className="flex items-center gap-1">
              {/* Ícone WhatsApp mobile */}
              <CtaWhatsApp
                texto={WHATSAPP_DISPLAY}
                origem={origem}
                variante="icone"
                className={
                  flutuante ? "text-papel [&_svg]:stroke-papel" : ""
                }
              />

              {/* Hamburger */}
              <button
                ref={hamburgerRef}
                type="button"
                className={`inline-flex size-11 items-center justify-center rounded-sm transition-colors duration-200 ${
                  flutuante ? "hover:bg-white/10" : "hover:bg-areia-100"
                }`}
                aria-expanded={aberto}
                aria-controls={tituloId}
                onClick={() => setAberto((v) => !v)}
              >
                <span className="sr-only">Abrir menu</span>
                <HamburgerIcon
                  cor={flutuante ? "white" : "var(--kanak-tinta-900)"}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Drawer de tela cheia (mobile) ─────────────────────────────────── */}
      {aberto && (
        <div
          ref={painelRef}
          id={tituloId}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${tituloId}-titulo`}
          className="bg-papel fixed inset-0 z-[200] flex flex-col"
          style={{
            animation: "fadeInDrawer 220ms cubic-bezier(0.22,1,0.36,1) forwards",
          }}
        >
          <style>{`
            @keyframes fadeInDrawer {
              from { opacity: 0; }
              to   { opacity: 1; }
            }
            @keyframes staggerItem {
              from { opacity: 0; transform: translateY(10px); }
              to   { opacity: 1; transform: translateY(0); }
            }
          `}</style>

          {/* Cabeçalho do drawer */}
          <div className="relative flex h-[58px] items-center justify-between px-4 border-b border-linha">
            <LogoKanak onClick={() => setAberto(false)} />
            <button
              type="button"
              className="hover:bg-areia-100 inline-flex size-11 items-center justify-center rounded-sm transition-colors duration-200"
              onClick={() => setAberto(false)}
            >
              <span className="sr-only">Fechar menu</span>
              <CloseIcon />
            </button>
            <p
              id={`${tituloId}-titulo`}
              className="sr-only"
            >
              Menu
            </p>
          </div>

          {/* Itens do menu */}
          <nav aria-label="Principal" className="flex-1 overflow-y-auto px-2 py-4">
            <ul className="flex flex-col gap-0.5">
              {ITENS_MENU.map((item, i) => (
                <li
                  key={item.href}
                  className="opacity-0 translate-y-3 motion-safe:[animation:staggerItem_400ms_cubic-bezier(0.22,1,0.36,1)_forwards]"
                  style={{ animationDelay: `${60 + i * 55}ms` }}
                >
                  <ItemDrawer
                    item={item}
                    pathname={pathname}
                    onNavigate={() => setAberto(false)}
                    index={i}
                    aberto={aberto}
                  />
                </li>
              ))}
            </ul>
          </nav>

          {/* Rodapé do drawer — CTA */}
          <div className="border-linha border-t px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <CtaWhatsApp
              texto="Fale com um especialista"
              origem={{ ...origem, secao: "drawer" }}
            />
          </div>
        </div>
      )}
    </>
  );
}
