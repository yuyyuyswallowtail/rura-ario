import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactSection } from "@/components/contact/contact-section";
import { Headline } from "@/components/motion/heading-reveal";
import { Figure } from "@/components/motion/image-reveal";
import { PressCard } from "@/components/press/press-card";
import { articles } from "@/data/site";
import { formatDate } from "@/lib/format";
import { pageMeta } from "@/lib/meta";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) return {};
  return pageMeta(`${a.title} — RURA Press`, a.excerpt, `/press/${a.slug}`);
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) notFound();

  const related = articles
    .filter((x) => x.slug !== a.slug)
    .sort(
      (x, y) =>
        Number(y.category === a.category) - Number(x.category === a.category),
    )
    .slice(0, 2);

  return (
    <>
      <article>
        <header data-theme="dark" className="bg-ink text-white">
          <div className="edge flex min-h-[78svh] flex-col justify-end pb-8 pt-32 md:pb-12">
            <p className="caption mb-6 flex gap-6 text-white/65">
              <span>{a.category}</span>
              <time dateTime={a.date}>{formatDate(a.date)}</time>
            </p>
            <Headline
              as="h1"
              lines={[a.title]}
              className="max-w-[95%] text-[clamp(2rem,7vw,7.5rem)] font-bold leading-[0.92] tracking-[-0.055em]"
            />
          </div>
        </header>

        <div
          data-theme="light"
          className="bg-white py-[clamp(6rem,14vw,14rem)] text-ink"
        >
          <div className="edge cols gap-y-14">
            <Figure
              img={a.image}
              aspect="aspect-[16/10]"
              sizes="100vw"
              className="col-span-4 md:col-span-8 lg:col-span-10 lg:col-start-3"
            />

            <div className="col-span-4 space-y-6 text-lg leading-relaxed md:col-span-6 md:col-start-2 lg:col-span-5 lg:col-start-4">
              <p className="text-xl font-medium">{a.excerpt}</p>
              {a.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <blockquote className="col-span-4 mt-10 md:col-span-8 lg:col-span-10 lg:col-start-3 lg:mt-24">
              <p className="text-[clamp(1.9rem,5vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.05em]">
                “{a.quote}”
              </p>
              <footer className="mt-6 text-xs text-ink/60">
                Fictional editorial copy for a portfolio project.
              </footer>
            </blockquote>
          </div>
        </div>
      </article>

      <section
        data-theme="light"
        className="bg-paper py-[clamp(6rem,14vw,14rem)] text-ink"
      >
        <div className="edge">
          <h2 className="caption mb-12 text-ink/60">Related articles</h2>
          <ul className="grid gap-x-6 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <PressCard article={r} />
              </li>
            ))}
          </ul>
          <Link
            href="/press"
            className="mt-16 inline-block text-sm underline underline-offset-4"
          >
            ← Press Center
          </Link>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
