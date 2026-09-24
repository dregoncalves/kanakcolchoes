import sanitizeHtml from "sanitize-html";
import { WORDPRESS_API_URL } from "./site";

/**
 * Camada de dados do blog: lê o WordPress headless em cms.kanakcolchoes.com.br
 * pela REST API (specs/site.md §9). O WordPress não é usado para nada além
 * disso — nenhuma página pública do site é renderizada por ele.
 *
 * Revalidação: ISR de 5 min (memoria.md, 2026-09-24). Sem webhook: o post
 * publicado aparece sozinho em até 300s, sem mexer no WordPress.
 *
 * Se o WordPress estiver fora do ar, as funções devolvem listas/valores
 * vazios em vez de lançar — o blog não pode derrubar o resto do site.
 */

const REVALIDATE_SEGUNDOS = 300;
const TAG_POSTS = "wp-posts";

const OPCOES_SANITIZACAO: sanitizeHtml.IOptions = {
  allowedTags: [
    "p", "br", "strong", "b", "em", "i", "u", "s", "mark", "small", "sub", "sup",
    "h2", "h3", "h4", "h5", "h6",
    "ul", "ol", "li",
    "blockquote", "hr",
    "a", "img", "figure", "figcaption",
    "table", "thead", "tbody", "tr", "th", "td",
    "iframe",
  ],
  allowedAttributes: {
    a: ["href", "target", "rel"],
    img: ["src", "alt", "width", "height", "loading"],
    iframe: ["src", "width", "height", "title", "allow", "allowfullscreen", "frameborder"],
    "*": ["class"],
  },
  allowedIframeHostnames: ["www.youtube.com", "youtube.com", "player.vimeo.com"],
  transformTags: {
    a: sanitizeHtml.simpleTransform("a", { rel: "noopener noreferrer" }, true),
  },
};

/** Limpa HTML vindo do WordPress antes de chegar a qualquer componente. */
function sanitizarHtml(html: string): string {
  return sanitizeHtml(html, OPCOES_SANITIZACAO);
}

interface RenderizadoWP {
  rendered: string;
}

interface MidiaWP {
  source_url: string;
  alt_text: string;
  media_details?: { width?: number; height?: number };
}

interface PostBrutoWP {
  id: number;
  slug: string;
  date: string;
  title: RenderizadoWP;
  excerpt: RenderizadoWP;
  content: RenderizadoWP;
  yoast_head_json?: {
    title?: string;
    description?: string;
    og_image?: { url: string }[];
  };
  _embedded?: {
    "wp:featuredmedia"?: MidiaWP[];
  };
}

export interface Post {
  id: number;
  slug: string;
  data: string;
  titulo: string;
  resumoHtml: string;
  conteudoHtml: string;
  imagemDestacada: { src: string; alt: string; largura?: number; altura?: number } | null;
  meta: { titulo: string; descricao: string | null; imagemOg: string | null };
}

const CAMPOS =
  "id,slug,date,title,excerpt,content,yoast_head_json,_links,_embedded";

function mapearPost(bruto: PostBrutoWP): Post {
  const midia = bruto._embedded?.["wp:featuredmedia"]?.[0];

  return {
    id: bruto.id,
    slug: bruto.slug,
    data: bruto.date,
    titulo: sanitizarHtml(bruto.title.rendered),
    resumoHtml: sanitizarHtml(bruto.excerpt.rendered),
    conteudoHtml: sanitizarHtml(bruto.content.rendered),
    imagemDestacada: midia
      ? {
          src: midia.source_url,
          alt: midia.alt_text || "",
          largura: midia.media_details?.width,
          altura: midia.media_details?.height,
        }
      : null,
    meta: {
      titulo: bruto.yoast_head_json?.title ?? bruto.title.rendered.replace(/<[^>]+>/g, ""),
      descricao: bruto.yoast_head_json?.description ?? null,
      imagemOg: bruto.yoast_head_json?.og_image?.[0]?.url ?? null,
    },
  };
}

async function buscarWP<T>(caminho: string): Promise<{ dados: T; totalPaginas: number } | null> {
  try {
    const resposta = await fetch(`${WORDPRESS_API_URL}/wp/v2${caminho}`, {
      next: { revalidate: REVALIDATE_SEGUNDOS, tags: [TAG_POSTS] },
    });
    if (!resposta.ok) return null;
    const dados = (await resposta.json()) as T;
    const totalPaginas = Number(resposta.headers.get("X-WP-TotalPages") ?? "1");
    return { dados, totalPaginas };
  } catch {
    // WordPress fora do ar ou inacessível: o blog não pode derrubar o site.
    return null;
  }
}

export async function listarPosts(
  { pagina = 1, porPagina = 9 }: { pagina?: number; porPagina?: number } = {},
): Promise<{ posts: Post[]; totalPaginas: number }> {
  const resultado = await buscarWP<PostBrutoWP[]>(
    `/posts?page=${pagina}&per_page=${porPagina}&_embed=wp:featuredmedia&_fields=${CAMPOS}`,
  );
  if (!resultado) return { posts: [], totalPaginas: 0 };
  return { posts: resultado.dados.map(mapearPost), totalPaginas: resultado.totalPaginas };
}

export async function buscarPost(slug: string): Promise<Post | null> {
  const resultado = await buscarWP<PostBrutoWP[]>(
    `/posts?slug=${encodeURIComponent(slug)}&_embed=wp:featuredmedia&_fields=${CAMPOS}`,
  );
  const bruto = resultado?.dados[0];
  return bruto ? mapearPost(bruto) : null;
}

export async function listarSlugs(): Promise<string[]> {
  const resultado = await buscarWP<{ slug: string }[]>(
    "/posts?per_page=100&_fields=slug",
  );
  return resultado?.dados.map((post) => post.slug) ?? [];
}
