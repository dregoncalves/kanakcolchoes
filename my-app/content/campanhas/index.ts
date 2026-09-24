/**
 * Uma campanha por arquivo. Para colocar outra landing no ar, basta criar o
 * arquivo e listá-lo aqui: a rota /lp/[slug] e o layout já existem.
 */

export interface Campanha {
  slug: string;
  /** Banner trocável: a seção inteira muda a cada campanha (specs/site.md §6.2). */
  banner: {
    tituloInicio: string;
    tituloRealce: string;
    ofertaDestaque: string;
    ofertaComplemento: string;
    arte: {
      desktop: { src: string; alt: string; largura: number; altura: number };
      mobile: { src: string; alt: string; largura: number; altura: number };
    };
  };
  /** Data de fim da campanha. `null` mantém o marcador [DATA] no texto. */
  prazo: string | null;
  meta: { titulo: string; descricao: string };
}

import { campanha55Off } from "./55-off";

export const CAMPANHAS: Campanha[] = [campanha55Off];

export function buscarCampanha(slug: string): Campanha | undefined {
  return CAMPANHAS.find((campanha) => campanha.slug === slug);
}
