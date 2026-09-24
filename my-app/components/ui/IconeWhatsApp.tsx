import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

/**
 * Logo do WhatsApp (Phosphor). Decorativo: o rótulo vem do texto do botão.
 *
 * O import é de `/dist/ssr`: renderiza SVG puro, sem "use client", então os
 * botões continuam Server Components e nenhum ícone leva JavaScript ao cliente.
 * Peso `regular` em todos os ícones do site — um traço só.
 */
export function IconeWhatsApp({ className = "size-5" }: { className?: string }) {
  return <WhatsappLogo weight="regular" aria-hidden="true" className={`shrink-0 ${className}`} />;
}
