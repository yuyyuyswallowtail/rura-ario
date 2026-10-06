import { SectionLabel } from "@/components/editorial/section-label";
import { EditorialHero } from "@/components/editorial/editorial-hero";
import { ContactSection } from "@/components/contact/contact-section";
import { ScrollWords } from "@/components/motion/scroll-words";
import { PracticeList } from "@/components/technology/practice-list";
import { practices } from "@/data/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "RURA Technology — Industrial Systems",
  "Seven areas of industrial technology work at RURA, a fictional company: electrification, process engineering, materials, carbon reduction, energy, automation and scale.",
  "/technology",
);

export default function TechnologyPage() {
  return (
    <>
      <EditorialHero kicker="RURA / Technology" lines={["TECHNOLOGY"]}>
        <p className="mt-10 max-w-xs text-sm text-white/80 md:ml-auto md:mr-[10%]">
          Seven areas of work. Each one ends in the same place: a system a plant
          can actually run.
        </p>
      </EditorialHero>

      <section
        data-theme="dark"
        className="bg-ink pb-32 pt-[clamp(6rem,16vw,16rem)] text-white md:pb-60"
      >
        <div className="edge">
          <SectionLabel dark className="mb-10">
            Practice index
          </SectionLabel>
          <PracticeList practices={practices} />
        </div>
      </section>

      <section
        data-theme="light"
        className="bg-white py-[clamp(8rem,22vw,22rem)] text-ink"
      >
        <div className="edge cols">
          <div className="col-span-4 md:col-span-7 lg:col-span-9 lg:col-start-4">
            <ScrollWords
              text="Seven practices. One system. Built to be installed in the plants that already exist."
              className="text-[clamp(2rem,6vw,6rem)] font-bold leading-[0.98] tracking-[-0.05em]"
            />
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
