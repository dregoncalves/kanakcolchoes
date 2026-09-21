import { IconeWhatsApp } from "@/components/primitivos/IconeWhatsApp";
import { urlWhatsApp, type OrigemWhatsApp } from "@/lib/whatsapp";

export type VarianteCta =
  | "primario"
  | "secundario"
  | "sobre-foto"
  | "em-bloco-escuro"
  | "compacto"
  | "icone";

type Props = {
  texto: string;
  origem: OrigemWhatsApp;
  variante?: VarianteCta;
  comIcone?: boolean;
  className?: string;
};

// Estilo base do botão (sem o ícone wrapper — adicionado abaixo)
const ESTILO: Record<VarianteCta, string> = {
  primario:
    "bg-bordo-700 text-papel shadow-[0_4px_14px_rgba(122,20,32,0.22)] hover:bg-bordo-600 hover:shadow-[0_6px_20px_rgba(122,20,32,0.32)] hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0",
  secundario:
    "border-[1.5px] border-bordo-700 bg-transparent text-bordo-700 hover:bg-areia-100 hover:border-bordo-800 hover:-translate-y-0.5 active:scale-[0.98]",
  "sobre-foto":
    "bg-papel text-bordo-800 shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:bg-areia-100 hover:-translate-y-0.5 active:scale-[0.98]",
  "em-bloco-escuro":
    "bg-ouro-500 text-bordo-900 shadow-[0_4px_14px_rgba(200,149,42,0.25)] hover:bg-ouro-400 hover:shadow-[0_6px_20px_rgba(200,149,42,0.35)] hover:-translate-y-0.5 active:scale-[0.98]",
  compacto:
    "bg-bordo-700 text-papel hover:bg-bordo-600 hover:-translate-y-px active:scale-[0.98]",
  icone:
    "bg-bordo-700 text-papel hover:bg-bordo-600 active:scale-[0.98]",
};

// Wrapper circular do ícone por variante (Double-Bezel miniatura / Button-in-Button)
const ICONE_WRAPPER: Partial<Record<VarianteCta, string>> = {
  primario: "bg-black/10 group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105",
  "sobre-foto": "bg-bordo-800/8 group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105",
  "em-bloco-escuro": "bg-bordo-900/10 group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105",
};

function classesTamanho(variante: VarianteCta): string {
  if (variante === "icone") {
    return "size-11 min-h-11 w-11 shrink-0 px-0";
  }
  if (variante === "compacto") {
    return "h-10 min-h-10 w-auto shrink-0 px-4 text-[14px]";
  }
  return "min-h-12 w-full px-6 text-[15px] md:min-h-[52px] md:w-auto md:text-base";
}

export function CtaWhatsApp({
  texto,
  origem,
  variante = "primario",
  comIcone = true,
  className = "",
}: Props) {
  const soIcone = variante === "icone";
  const wrapperClasses = ICONE_WRAPPER[variante];

  return (
    <a
      href={urlWhatsApp(origem)}
      target="_blank"
      rel="noopener noreferrer"
      className={`font-subtitulo group inline-flex items-center justify-center gap-2.5 rounded-sm font-semibold tracking-[0.02em] transition-all duration-[220ms] ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none ${classesTamanho(variante)} ${ESTILO[variante]} ${className}`}
      aria-label={soIcone ? `WhatsApp ${texto}` : undefined}
    >
      {(comIcone || soIcone) && (
        wrapperClasses ? (
          <span
            className={`inline-flex size-8 shrink-0 items-center justify-center rounded-full transition-all duration-[220ms] ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none ${wrapperClasses}`}
            aria-hidden
          >
            <IconeWhatsApp className="size-4" />
          </span>
        ) : (
          <IconeWhatsApp className="size-5 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 motion-reduce:transform-none" />
        )
      )}
      {soIcone ? <span className="sr-only">{texto}</span> : <span>{texto}</span>}
    </a>
  );
}
