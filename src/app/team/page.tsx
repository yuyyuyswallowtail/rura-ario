import { SectionLabel } from "@/components/editorial/section-label";
import { ContactSection } from "@/components/contact/contact-section";
import { Headline } from "@/components/motion/heading-reveal";
import { Figure } from "@/components/motion/image-reveal";
import { TeamCollage } from "@/components/team/team-collage";
import { IMG } from "@/data/images";
import { team } from "@/data/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "The RURA Team",
  "The fictional people behind RURA: engineers, chemists and operators. Portraits are stock photos used as placeholders.",
  "/team",
);

export default function TeamPage() {
  return (
    <>
      <section data-theme="dark" className="bg-ink text-white">
        <div className="edge pb-12 pt-32 md:pb-20">
          <SectionLabel dark className="mb-8">
            RURA / Team
          </SectionLabel>
          <Headline
            as="h1"
            lines={[
              "RURA assembles chemists,",
              "engineers and plant",
              "operators who would",
              "rather prove an idea",
              "than present it.",
            ]}
            className="text-[clamp(1.6rem,5.2vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.045em]"
          />
          <div className="cols mt-20 items-end gap-y-8 md:mt-32">
            <p className="col-span-3 max-w-[16rem] text-sm text-white/80 md:col-span-3 md:col-start-2 lg:col-start-3">
              Everyone in this collage is fictional. Hover or tap a portrait to
              bring someone forward.
            </p>
            <Figure
              img={IMG.lab2}
              aspect="aspect-[4/3]"
              gray
              dark
              className="group col-span-4 md:col-span-4 md:col-start-5 lg:col-span-4 lg:col-start-6"
            />
          </div>
        </div>
      </section>

      <section
        data-theme="light"
        className="bg-white py-[clamp(8rem,22vw,22rem)] text-ink"
      >
        <TeamCollage members={team} />
      </section>

      <ContactSection />
    </>
  );
}
