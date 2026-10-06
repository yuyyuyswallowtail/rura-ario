import { SectionLabel } from "@/components/editorial/section-label";
import { EditorialHero } from "@/components/editorial/editorial-hero";
import { ContactSection } from "@/components/contact/contact-section";
import { Headline } from "@/components/motion/heading-reveal";
import { FeaturedNews } from "@/components/press/featured-news";
import { PressArchive } from "@/components/press/press-archive";
import { articles } from "@/data/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "RURA Press Center",
  "News, recognition, projects, research and industry commentary from RURA, a fictional company. Demo content.",
  "/press",
);

export default function PressPage() {
  const featured = (
    <section
      data-theme="light"
      className="bg-white pt-[clamp(4rem,10vw,10rem)]"
    >
      <div className="edge mb-20 text-center md:mb-32">
        <SectionLabel className="mb-4">Selected stories</SectionLabel>
        <Headline
          lines={["Featured news"]}
          className="text-[clamp(2.25rem,6vw,6rem)] font-bold leading-[0.95] tracking-[-0.05em]"
        />
      </div>
      <div className="edge">
        <FeaturedNews articles={articles.filter((a) => a.featured)} />
      </div>
    </section>
  );

  return (
    <>
      <EditorialHero kicker="RURA / Press" lines={["PRESS", "CENTER"]} />
      <div data-theme="light" className="bg-white text-ink">
        <PressArchive articles={articles} featured={featured} />
      </div>
      <ContactSection />
    </>
  );
}
