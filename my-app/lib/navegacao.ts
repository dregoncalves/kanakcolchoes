export type ItemMenu = {
  href: string;
  label: string;
  disponivel: boolean;
};

export const ITENS_MENU: readonly ItemMenu[] = [
  { href: "/", label: "Home", disponivel: true },
  { href: "/colchao-queen-size", label: "Colchão Queen Size", disponivel: false },
  { href: "/colchao-king-size", label: "Colchão King Size", disponivel: true },
  { href: "/colchao-de-casal", label: "Colchão de Casal", disponivel: false },
  { href: "/colchao-de-solteiro", label: "Colchão de Solteiro", disponivel: false },
  { href: "/por-que-comprar", label: "Por que comprar", disponivel: false },
  { href: "/a-kanak", label: "A Kanak", disponivel: false },
  { href: "/blog", label: "Blog", disponivel: false },
];

export function itemMenuAtivo(pathname: string, item: ItemMenu): boolean {
  if (!item.disponivel) return false;
  if (item.href === "/") return pathname === "/";
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

export function hrefDoRotulo(
  rotulo: string,
  tamanhoBase = "/colchao-king-size",
): string | undefined {
  const r = rotulo.toLowerCase();
  if (r.includes("queen")) return "/colchao-queen-size";
  if (r.includes("king")) return "/colchao-king-size";
  if (r.includes("casal")) return "/colchao-de-casal";
  if (r.includes("solteiro")) return "/colchao-de-solteiro";
  if (r.includes("anatômico") || r.includes("anatomico")) {
    return `${tamanhoBase}/anatomico-ortopedico`;
  }
  if (r.includes("magnético") || r.includes("magnetico") || r.includes("magnética")) {
    return `${tamanhoBase}/magnetico`;
  }
  if (r.includes("molas")) return `${tamanhoBase}/molas-ensacadas`;
  return undefined;
}
