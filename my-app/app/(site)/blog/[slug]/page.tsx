import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { buscarPost, listarSlugs } from "@/lib/wordpress";
import { INDEXAVEL } from "@/lib/site";
import { Container, Secao } from "@/components/ui/Secao";
import { BotaoWhatsApp } from "@/components/whatsapp/BotaoWhatsApp";

// ISR de 5 min (memoria.md, 2026-09-24). dynamicParams: true — post
// publicado depois do build ainda é servido, sem esperar o próximo deploy.
export const revalidate = 300;
export const dynamicParams = true;

const FORMATADOR_DATA = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export async function generateStaticParams() {
  const slugs = await listarSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = await buscarPost(slug);
  if (!post) return {};

  return {
    title: post.meta.titulo,
    description: post.meta.descricao ?? undefined,
    alternates: { canonical: `/blog/${slug}` },
    robots: INDEXAVEL ? undefined : { index: false, follow: false },
    openGraph: {
      title: post.meta.titulo,
      description: post.meta.descricao ?? undefined,
      type: "article",
      images: post.meta.imagemOg ? [{ url: post.meta.imagemOg }] : undefined,
    },
  };
}

export default async function PaginaPost(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = await buscarPost(slug);
  if (!post) notFound();

  return (
    <Secao fundo="creme">
      <Container className="flex flex-col gap-8 md:mx-auto md:max-w-3xl md:gap-10">
        <header className="flex flex-col gap-3">
          <span className="text-caption text-ink-60">
            {FORMATADOR_DATA.format(new Date(post.data))}
          </span>
          <h1
            className="font-display text-display-lg"
            dangerouslySetInnerHTML={{ __html: post.titulo }}
          />
        </header>

        {post.imagemDestacada ? (
          <div className="relative aspect-16/9 overflow-hidden rounded-lg bg-borda">
            <Image
              src={post.imagemDestacada.src}
              alt={post.imagemDestacada.alt || post.titulo.replace(/<[^>]+>/g, "")}
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              priority
              className="object-cover"
            />
          </div>
        ) : null}

        <div
          className="prose-kanak"
          dangerouslySetInnerHTML={{ __html: post.conteudoHtml }}
        />

        <BotaoWhatsApp origem="blog_artigo" larguraTotal className="md:self-center" />
      </Container>
    </Secao>
  );
}
