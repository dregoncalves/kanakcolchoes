export const WHATSAPP_E164 = "5541998425771";
export const WHATSAPP_DISPLAY = "(41) 99842-5771";

export type OrigemWhatsApp = {
  pagina: string;
  secao: string;
  campanha?: string;
};

export function urlWhatsApp(origem: OrigemWhatsApp): string {
  const partes = [`página ${origem.pagina}`, `seção ${origem.secao}`];
  if (origem.campanha) {
    partes.push(`campanha ${origem.campanha}`);
  }
  const mensagem = `Olá, vim pela ${partes.join(", ")} e gostaria de falar com a equipe Kanak.`;
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(mensagem)}`;
}
