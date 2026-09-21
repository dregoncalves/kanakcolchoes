import { IconeWhatsApp } from "@/components/primitivos/IconeWhatsApp";
import { urlWhatsApp } from "@/lib/whatsapp";

export function BotaoFlutuanteWhatsapp() {
  return (
    // ── Outer shell (Double-Bezel) ─────────────────────────────
    <div className="group fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 rounded-full p-1.5 ring-1 ring-black/[0.07] bg-white/90 shadow-[0_4px_20px_rgba(26,22,20,0.1)] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:ring-bordo-700/20 hover:shadow-[0_10px_32px_rgba(122,20,32,0.18)] motion-reduce:transition-none">
      {/* ── Inner core ─────────────────────────────────────────── */}
      <a
        href={urlWhatsApp({ pagina: "flutuante", secao: "botao" })}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-[3.25rem] items-center rounded-full bg-papel shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] focus-visible:outline-2 focus-visible:outline-ouro-500 focus-visible:outline-offset-2 active:scale-95 motion-reduce:transition-none md:h-[56px] px-3 md:px-3.5"
        aria-label="Falar com a Kanak no WhatsApp"
      >
        <IconeWhatsApp className="size-8 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105 motion-reduce:transform-none" />
        <span className="font-subtitulo text-tinta-900 hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold tracking-wide transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:ml-2.5 group-hover:mr-1 group-hover:max-w-[180px] md:inline-block">
          Atendimento Kanak
        </span>
      </a>
    </div>
  );
}
