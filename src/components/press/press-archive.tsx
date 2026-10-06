"use client";

import { type ReactNode, useState } from "react";
import type { PressArticle } from "@/data/types";
import { PressCard } from "./press-card";

const categories = [
  "All",
  "News",
  "Recognition",
  "Projects",
  "Research",
  "Industry",
] as const;

export function PressArchive({
  articles,
  featured,
}: {
  articles: PressArticle[];
  featured: ReactNode;
}) {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const list =
    cat === "All" ? articles : articles.filter((a) => a.category === cat);

  return (
    <div>
      <fieldset className="edge flex min-w-0 flex-wrap justify-center gap-x-7 gap-y-2 py-8">
        <legend className="sr-only">Filter articles by category</legend>
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={cat === c}
            onClick={() => setCat(c)}
            className={`text-sm ${cat === c ? "font-bold underline underline-offset-8" : "text-ink/60 hover:text-ink"}`}
          >
            {c}
          </button>
        ))}
      </fieldset>

      {featured}

      <section className="edge pb-32 pt-[clamp(6rem,14vw,14rem)]">
        <p className="caption mb-10 text-ink/60">
          Archive · {list.length} articles
        </p>
        <ul className="grid gap-x-6 gap-y-24 md:grid-cols-2">
          {list.map((a, i) => (
            <li key={a.slug} className={i % 2 === 1 ? "md:mt-32" : ""}>
              <PressCard article={a} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
