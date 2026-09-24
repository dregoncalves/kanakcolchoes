import { ChatCircleText, CreditCard, ShieldCheck, Truck } from "@phosphor-icons/react/dist/ssr";

/** Ícones dos quatro argumentos da landing (seção 4). Phosphor, peso regular. */
const ICONES = {
  escudo: ShieldCheck,
  conversa: ChatCircleText,
  cartao: CreditCard,
  entrega: Truck,
} as const;

export type NomeIcone = keyof typeof ICONES;

export function IconeArgumento({ nome }: { nome: string }) {
  const Icone = ICONES[nome as NomeIcone];
  if (!Icone) return null;

  return <Icone weight="regular" aria-hidden="true" className="size-6.5" />;
}
