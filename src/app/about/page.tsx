import { SectionLabel } from "@/components/editorial/section-label";
import { EditorialHero } from "@/components/editorial/editorial-hero";
import { ContactSection } from "@/components/contact/contact-section";
import { Headline } from "@/components/motion/heading-reveal";
import { Reveal } from "@/components/motion/reveal";
import { ScrollWords } from "@/components/motion/scroll-words";
import { timeline } from "@/data/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "About RURA — Industrial Technology",
  "RURA is a fictional industrial technology company. Our work begins where conventional industrial thinking ends.",
  "/about",
);

const chapters = [
  {
    label: "Why",
    title: "Industry emits where it makes things.",
    text: "Heavy industry builds the world, and some of its emissions come from the chemistry itself. That part does not disappear with cleaner fuel.",
  },
  {
    label: "What we believe",
    title: "Retrofit is the real frontier.",
    text: "The plants that matter most are the ones already running. A solution has to arrive in a form they can host.",
  },
  {
    label: "How we work",
    title: "Prove it, then scale it.",
    text: "Every project moves through clear gates: assess, prove, deploy. Results are shared with partners at each one.",
  },
  {
    label: "What we build",
    title: "Systems, not slide decks.",
    text: "Electrified process steps, material formulations, control layers and pilot units. Hardware a plant team can operate.",
  },
  {
    label: "Where we are going",
    title: "From pilot to production line.",
    text: "The next step is a demonstration unit that runs continuously, and then the first full-scale installation.",
  },
];

export default function AboutPage() {
  return (
    <>
      <EditorialHero kicker="About / RURA" lines={["ABOUT", "RURA"]} />

      <section
        data-theme="light"
        className="bg-white py-[clamp(8rem,22vw,22rem)] text-ink"
      >
        <div className="edge cols">
          <div className="col-span-4 md:col-span-7 lg:col-span-9 lg:col-start-3">
            <ScrollWords
              text="Our work begins where conventional industrial thinking ends."
              className="text-[clamp(2.25rem,7vw,7.5rem)] font-bold leading-[0.95] tracking-[-0.05em]"
            />
            <p className="mt-10 text-xs text-ink/60">
              RURA is fictional. All copy on this site is original portfolio
              content.
            </p>
          </div>
        </div>
      </section>

      {chapters.map((c, i) => {
        const dark = i % 2 === 1;
        return (
          <section
            key={c.label}
            data-theme={dark ? "dark" : "light"}
            className={`py-[clamp(6rem,16vw,16rem)] ${dark ? "bg-ink text-white" : "bg-white text-ink"}`}
          >
            <div className="edge cols gap-y-10">
              <SectionLabel
                dark={dark}
                className="col-span-4 md:col-span-2 lg:col-span-3"
              >
                {String(i + 1).padStart(2, "0")} / {c.label}
              </SectionLabel>
              <div className="col-span-4 md:col-span-6 lg:col-span-8 lg:col-start-5">
                <Headline
                  lines={[c.title]}
                  className="text-[clamp(1.9rem,5vw,5rem)] font-bold leading-[0.98] tracking-[-0.045em]"
                />
                <Reveal>
                  <p
                    className={`mt-10 max-w-md text-base md:ml-auto ${dark ? "text-white/80" : "text-ink/75"}`}
                  >
                    {c.text}
                  </p>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      <section
        data-theme="dark"
        className="bg-ink py-[clamp(8rem,18vw,18rem)] text-white"
      >
        <div className="edge">
          <SectionLabel dark>RURA fictional portfolio timeline</SectionLabel>
          <ol className="mt-14 border-t border-white/30">
            {timeline.map((t) => (
              <li
                key={t.year}
                className="cols items-baseline gap-y-3 border-b border-white/30 py-8 md:py-12"
              >
                <span className="col-span-4 text-[clamp(3rem,10vw,10rem)] font-bold leading-[0.85] tracking-[-0.06em] md:col-span-3 lg:col-span-4">
                  {t.year}
                </span>
                <h3 className="col-span-4 text-2xl font-semibold tracking-tight md:col-span-2 md:col-start-4 lg:col-span-3 lg:col-start-6">
                  {t.title}
                </h3>
                <p className="col-span-4 max-w-xs text-sm text-white/75 md:col-span-3 md:col-start-6 lg:col-span-3 lg:col-start-10">
                  {t.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
