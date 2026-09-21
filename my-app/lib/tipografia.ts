const RE_MEDIDA = /(\d+)\s*[x×]\s*(\d+)\s*cm/i;

export function extrairMedida(texto: string): string | null {
  const m = texto.match(RE_MEDIDA);
  if (!m) return null;
  return `${m[1]} × ${m[2]} cm`;
}

export function partesComMedida(texto: string): { texto: string; medida: boolean }[] {
  const partes: { texto: string; medida: boolean }[] = [];
  const re = /(\d+\s*[x×]\s*\d+\s*cm)/gi;
  let ultimo = 0;
  let match: RegExpExecArray | null;
  while ((match = re.exec(texto)) !== null) {
    if (match.index > ultimo) {
      partes.push({ texto: texto.slice(ultimo, match.index), medida: false });
    }
    const nums = match[0].match(/(\d+)\s*[x×]\s*(\d+)/i);
    partes.push({
      texto: nums ? `${nums[1]} × ${nums[2]} cm` : match[0],
      medida: true,
    });
    ultimo = match.index + match[0].length;
  }
  if (ultimo < texto.length) {
    partes.push({ texto: texto.slice(ultimo), medida: false });
  }
  if (partes.length === 0) {
    partes.push({ texto, medida: false });
  }
  return partes;
}
