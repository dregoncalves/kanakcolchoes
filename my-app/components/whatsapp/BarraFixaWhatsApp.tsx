import { BotaoWhatsApp } from "./BotaoWhatsApp";

/**
 * Barra de WhatsApp presa ao pé da tela durante toda a rolagem, só no celular
 * (wireframe da landing). Respeita a área segura do aparelho. Sem JavaScript.
 * O espaço que ela ocupa é reservado pelo padding do <main> no layout da landing.
 */
export function BarraFixaWhatsApp() {
  return (
    <div
      className="barra-fixa-whatsapp fixed inset-x-0 bottom-0 z-30 border-t border-borda bg-surface-100 px-4 pt-3 pb-4 shadow-[0_-8px_24px_rgba(36,21,18,0.10)] md:hidden"
      style={{ paddingBottom: "calc(1rem + env(safe-area-inset-bottom))" }}
    >
      <BotaoWhatsApp origem="lp_barra_fixa" tamanho="compacto" larguraTotal />
    </div>
  );
}
