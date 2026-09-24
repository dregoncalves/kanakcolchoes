import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/wordpress";

const FORMATADOR_DATA = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

/** Card de post na lista do blog. Foto 4:3, título, resumo e data. */
export function CardPost({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="recuo-no-toque group flex flex-col gap-3 text-ink no-underline"
    >
      <div className="relative aspect-4/3 overflow-hidden rounded-lg bg-borda">
        {post.imagemDestacada ? (
          <Image
            src={post.imagemDestacada.src}
            alt={post.imagemDestacada.alt || post.titulo}
            fill
            sizes="(min-width: 1024px) 380px, (min-width: 768px) 45vw, 90vw"
            className="object-cover transition-transform duration-[var(--duracao-foco)] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
          />
        ) : null}
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-caption text-ink-60">
          {FORMATADOR_DATA.format(new Date(post.data))}
        </span>
        <h3
          className="font-display text-display-sm break-words"
          dangerouslySetInnerHTML={{ __html: post.titulo }}
        />
        <div
          className="line-clamp-3 text-body-sm text-ink-60"
          dangerouslySetInnerHTML={{ __html: post.resumoHtml }}
        />
      </div>
    </Link>
  );
}
