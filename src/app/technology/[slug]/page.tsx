import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionLabel } from "@/components/editorial/section-label";
import { ContactSection } from "@/components/contact/contact-section";
import { Headline } from "@/components/motion/heading-reveal";
import { Figure } from "@/components/motion/image-reveal";
import { Reveal } from "@/components/motion/reveal";
import { practices, processTitles } from "@/data/site";
import { pageMeta } from "@/lib/meta";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return practices.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = practices.find((x) => x.slug === slug);
  if (!p) return {};
  return pageMeta(
    `${p.title} — RURA Technology`,
    p.summary,
    `/technology/${p.slug}`,
  );
}

export default async function PracticePage({ params }: Params) {
  const { slug } = await params;
  const idx = practices.findIndex((x) => x.slug === slug);
  if (idx === -1) notFound();
  const p = practices[idx];
  const next = practices[(idx + 1) % practices.length];

  return (
    <>
      <section data-theme="dark" className="bg-ink text-white">
        <div className="edge flex min-h-[78svh] flex-col justify-end pb-8 pt-32 md:pb-12">
          <p className="caption mb-6 flex gap-6 text-white/65">
            <span className="tabular-nums">{p.number}</span>
            <span>RURA Technology</span>
          </p>
          <Headline
            as="h1"
            lines={p.lines}
            className="text-[clamp(1.75rem,9vw,9rem)] font-bold leading-[0.88] tracking-[-0.055em]"
          />
        </div>
      </section>

      <section
        data-theme="dark"
        className="bg-ink pb-[clamp(6rem,16vw,16rem)] text-white"
      >
        <div className="edge cols gap-y-8">
          <Figure
            img={p.image}
            aspect="aspect-[16/10]"
            gray
            dark
            sizes="100vw"
            className="group col-span-4 md:col-span-8 lg:col-span-9 lg:col-start-4"
          />
          <p className="col-span-4 max-w-[16rem] self-end text-sm text-white/80 md:col-span-3 lg:col-span-3 lg:col-start-1 lg:row-start-1">
            {p.summary}
          </p>
        </div>
      </section>

      <section
        data-theme="light"
        className="bg-white py-[clamp(8rem,20vw,20rem)] text-ink"
      >
        <div className="edge">
          <SectionLabel>Illustrative portfolio figure</SectionLabel>
          <Reveal>
            <p className="mt-6 text-[clamp(7rem,32vw,34rem)] font-bold leading-[0.78] tracking-[-0.07em]">
              {p.stat.value}
            </p>
          </Reveal>
          <p className="mt-10 max-w-sm text-lg md:ml-auto md:mr-[8%]">
            {p.stat.label}
          </p>
          <p className="mt-4 text-xs text-ink/60 md:ml-auto md:mr-[8%] md:max-w-sm">
            Fictional demo metric for a portfolio project, not a real RURA
            result.
          </p>
        </div>
      </section>

      <section
        data-theme="light"
        className="bg-paper pb-[clamp(8rem,18vw,18rem)] pt-[clamp(6rem,14vw,14rem)] text-ink"
      >
        <div className="edge">
          <SectionLabel>Areas of application</SectionLabel>
          <ol className="mt-12 border-t border-ink">
            {p.applications.map((a, i) => (
              <li
                key={a}
                className="flex items-baseline gap-6 border-b border-ink py-6 md:gap-16 md:py-10"
              >
                <span className="caption tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[clamp(1.75rem,5vw,5rem)] font-bold leading-none tracking-[-0.05em]">
                  {a}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        data-theme="dark"
        className="bg-ink py-[clamp(8rem,18vw,18rem)] text-white"
      >
        <div className="edge">
          <SectionLabel dark>How it works</SectionLabel>
          <ol className="cols mt-14 gap-y-14">
            {p.steps.map((s, i) => (
              <li key={s} className="col-span-4 md:col-span-4 lg:col-span-4">
                <span className="text-[clamp(4rem,10vw,10rem)] font-bold leading-[0.85] tracking-[-0.06em] text-white/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-3xl font-bold tracking-[-0.03em]">
                  {processTitles[i]}
                </h3>
                <p className="mt-3 max-w-xs text-sm text-white/80">{s}</p>
              </li>
            ))}
          </ol>
          <Link
            href={`/technology/${next.slug}`}
            className="mt-28 block border-t border-white/30 pt-6 text-[clamp(1.5rem,4vw,4rem)] font-bold tracking-[-0.04em]"
          >
            <span className="caption block text-white/65">Next</span>
            {next.title} →
          </Link>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
