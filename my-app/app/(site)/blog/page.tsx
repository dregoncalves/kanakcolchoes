import type { Metadata } from "next";
import { listarPosts } from "@/lib/wordpress";
import { INDEXAVEL, SITE } from "@/lib/site";
import { Container, Secao } from "@/components/ui/Secao";
import { CardPost } from "@/components/blog/CardPost";
import { Paginacao } from "@/components/blog/Paginacao";
import { BotaoWhatsApp } from "@/components/whatsapp/BotaoWhatsApp";
import { Revela } from "@/components/motion/Revela";

// ISR de 5 min: post novo aparece sozinho, sem rebuild (memoria.md, 2026-09-24).
export const revalidate = 300;

export const metadata: Metadata = {
  title: "Blog",
  description: `Conteúdo sobre sono, colchões e conforto, do blog da ${SITE.nome}.`,
  alternates: { canonical: "/blog" },
  robots: INDEXAVEL ? undefined : { index: false, follow: false },
};

const POR_PAGINA = 9;

export default async function PaginaBlog({
  searchParams,
}: PageProps<"/blog">) {
  const params = await searchParams;
  const paginaParam = Array.isArray(params?.pagina) ? params.pagina[0] : params?.pagina;
  const paginaAtual = Math.max(1, Number(paginaParam) || 1);

  const { posts, totalPaginas } = await listarPosts({ pagina: paginaAtual, porPagina: POR_PAGINA });

  return (
    <Secao fundo="creme">
      <Container className="flex flex-col gap-10 md:gap-14">
        <div className="flex flex-col gap-3 text-center md:mx-auto md:max-w-2xl">
          <h1 className="font-display text-display-lg">Blog</h1>
          <p className="text-body-lg text-ink-60">
            Conteúdo sobre sono, colchões e conforto, direto da Kanak.
          </p>
        </div>

        {posts.length > 0 ? (
          <>
            <Revela className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <CardPost key={post.id} post={post} />
              ))}
            </Revela>
            <Paginacao paginaAtual={paginaAtual} totalPaginas={totalPaginas} />
          </>
        ) : (
          <p className="text-center text-body-lg text-ink-60">
            Ainda não publicamos nenhum artigo. Volte em breve.
          </p>
        )}

        <BotaoWhatsApp origem="blog_lista" larguraTotal className="md:self-center" />
      </Container>
    </Secao>
  );
}
