import Link from "next/link";
import type { PressArticle } from "@/data/types";
import { formatDate } from "@/lib/format";
import { Figure } from "../motion/image-reveal";

export function PressCard({ article }: { article: PressArticle }) {
  return (
    <article className="group">
      <Link href={`/press/${article.slug}`} className="block">
        <Figure
          img={article.image}
          aspect="aspect-[4/5]"
          gray
          showCaption={false}
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
        <div className="caption mt-4 flex justify-between border-t border-ink pt-2">
          <span>{article.category}</span>
          <time dateTime={article.date}>{formatDate(article.date)}</time>
        </div>
        <h3 className="mt-3 text-[clamp(1.4rem,2.2vw,2.1rem)] font-bold uppercase leading-[0.95] tracking-[-0.03em]">
          {article.title}
        </h3>
        <span className="mt-4 inline-block text-sm transition-transform duration-300 group-hover:translate-x-2 motion-reduce:transition-none">
          Read article →
        </span>
      </Link>
    </article>
  );
}
