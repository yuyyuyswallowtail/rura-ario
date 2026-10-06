import Link from "next/link";
import { SectionLabel } from "@/components/editorial/section-label";
import { ContactSection } from "@/components/contact/contact-section";
import { Headline } from "@/components/motion/heading-reveal";
import { Figure } from "@/components/motion/image-reveal";
import { PointerShift } from "@/components/motion/pointer-shift";
import { Reveal } from "@/components/motion/reveal";
import { ScrollWords } from "@/components/motion/scroll-words";
import { FeaturedNews } from "@/components/press/featured-news";
import { PracticeList } from "@/components/technology/practice-list";
import { IMG } from "@/data/images";
import { articles, practices, recognitions } from "@/data/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "RURA — Industrial Systems Re-engineered",
  "RURA develops technologies that help heavy industry reduce emissions, improve process efficiency and transition existing infrastructure toward a lower-carbon future. A fictional portfolio project.",
  "/",
);

export default function HomePage() {
  return (
    <>
      {/* HERO: black canvas, small image, enormous wordmark */}
      <section
        data-theme="dark"
        className="relative overflow-hidden bg-ink text-white"
      >
        <div className="edge flex min-h-svh flex-col pb-8 pt-28 md:pb-10">
          <div className="cols items-start">
            <p className="order-2 col-span-4 mt-8 max-w-sm text-sm text-white/80 md:order-1 md:col-span-3 md:mt-0 lg:col-span-3 lg:col-start-6">
              RURA develops technologies that help heavy industry reduce
              emissions, improve process efficiency, and transition existing
              infrastructure toward a lower-carbon future.
            </p>
            <PointerShift className="order-1 col-span-2 col-start-3 md:order-2 md:col-span-2 md:col-start-7 lg:col-span-2 lg:col-start-10">
              <Figure
                img={IMG.hero}
                aspect="aspect-[3/4]"
                gray
                priority
                dark
                sizes="(min-width: 1024px) 18vw, 45vw"
              />
            </PointerShift>
          </div>
          <div className="mt-auto pt-24">
            <Headline
              as="h1"
              lines={["RURA"]}
              className="display-xl -ml-[0.04em]"
            />
            <p className="sr-only">Industrial systems. Re-engineered.</p>
            <div className="caption mt-6 flex justify-between text-white/65">
              <span aria-hidden="true">Industrial systems. Re-engineered.</span>
              <span aria-hidden="true">Scroll ↓</span>
            </div>
          </div>
        </div>
      </section>

      {/* STATEMENT: words brighten with scroll */}
      <section
        data-theme="dark"
        className="bg-ink py-[clamp(10rem,28vw,30rem)] text-white"
      >
        <div className="edge cols">
          <div className="col-span-4 md:col-span-7 lg:col-span-9 lg:col-start-3">
            <SectionLabel dark className="mb-8">
              About
            </SectionLabel>
            <ScrollWords
              text="Our work begins where conventional industrial thinking ends. We design, prove and deploy the systems that heavy industry can actually run."
              className="text-[clamp(2rem,6vw,6rem)] font-semibold leading-[1] tracking-[-0.04em]"
            />
            <Link
              href="/about"
              className="mt-12 inline-block text-sm underline underline-offset-4"
            >
              About RURA ↗
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO: white, asymmetric */}
      <section
        data-theme="light"
        className="bg-white py-[clamp(8rem,22vw,22rem)] text-ink"
      >
        <div className="edge cols">
          <Headline
            lines={[
              "We build technology",
              "for the hardest parts",
              "of industry.",
            ]}
            className="col-span-4 text-[clamp(2rem,6.6vw,7rem)] font-bold leading-[0.95] tracking-[-0.05em] md:col-span-8 lg:col-span-11"
          />
        </div>
        <div className="edge cols mt-24 items-start gap-y-16 md:mt-52">
          <Reveal className="col-span-3 md:col-span-3 lg:col-span-3">
            <p className="max-w-[16rem] text-sm">
              We show how an industrial plant can change without being rebuilt:
              one system at a time, proven before it is scaled.
            </p>
          </Reveal>
          <Figure
            img={IMG.worker}
            aspect="aspect-[4/5]"
            gray
            className="group col-span-4 md:col-span-4 md:col-start-5 lg:col-span-4 lg:col-start-6"
          />
        </div>
      </section>

      {/* TECHNOLOGY: black + interactive list */}
      <section
        data-theme="dark"
        className="bg-ink pb-32 pt-[clamp(8rem,20vw,20rem)] text-white md:pb-60"
      >
        <div className="edge">
          <SectionLabel dark>Technology</SectionLabel>
          <Headline lines={["TECHNOLOGY"]} className="display-lg mt-6" />
          <p className="mt-10 max-w-xs text-sm text-white/80 md:ml-auto md:mr-[10%]">
            Seven areas of work, one idea: move industry off carbon without
            asking it to start again.
          </p>
        </div>
        <div className="edge mt-24 md:mt-40">
          <PracticeList practices={practices} />
        </div>
      </section>

      {/* TEAM TEASER */}
      <section
        data-theme="dark"
        className="bg-ink pb-[clamp(8rem,22vw,24rem)] text-white"
      >
        <div className="edge">
          <SectionLabel dark>Team</SectionLabel>
          <p className="mt-6 text-[clamp(1.5rem,3.4vw,3.5rem)] font-semibold tracking-[-0.03em] text-white/65">
            First and foremost, RURA is a
          </p>
          <Headline lines={["TEAM"]} className="display-lg mt-4 md:ml-[22%]" />
          <Link
            href="/team"
            className="mt-10 inline-block text-sm underline underline-offset-4 md:ml-[22%]"
          >
            Meet the people ↗
          </Link>
        </div>
      </section>

      {/* RECOGNITION: white */}
      <section
        data-theme="light"
        className="bg-white py-[clamp(8rem,20vw,20rem)] text-ink"
      >
        <div className="edge">
          <SectionLabel>Fictional portfolio recognition</SectionLabel>
          <ul className="mt-14 border-t border-ink">
            {recognitions.map((r) => (
              <li
                key={r.title}
                className="flex items-baseline justify-between gap-6 border-b border-ink py-6 md:py-10"
              >
                <span className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-12">
                  <span className="text-[clamp(1.5rem,3vw,3rem)] font-bold tabular-nums tracking-[-0.04em]">
                    {r.year}
                  </span>
                  <span className="text-[clamp(1.5rem,3.6vw,3.75rem)] font-semibold leading-none tracking-[-0.04em]">
                    {r.title}
                  </span>
                </span>
                <span aria-hidden="true" className="text-4xl font-light">
                  +
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PRESS: floating cards */}
      <section
        data-theme="light"
        className="bg-white pb-[clamp(8rem,20vw,20rem)] text-ink"
      >
        <div className="edge mb-20 md:mb-32">
          <SectionLabel>Press</SectionLabel>
          <Headline
            lines={["Featured", "news"]}
            className="mt-6 text-[clamp(2.5rem,8vw,8rem)] font-bold leading-[0.9] tracking-[-0.05em]"
          />
        </div>
        <div className="edge">
          <FeaturedNews articles={articles.filter((a) => a.featured)} />
          <Link
            href="/press"
            className="mt-24 inline-block text-sm underline underline-offset-4"
          >
            All news ↗
          </Link>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
