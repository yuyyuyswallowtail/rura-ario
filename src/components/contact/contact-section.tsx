import { Headline } from "../motion/heading-reveal";
import { ContactForm } from "./contact-form";

export function ContactSection({
  as = "h2",
  lines = ["Let's build", "something that", "matters."],
  full = false,
}: {
  as?: "h1" | "h2";
  lines?: string[];
  full?: boolean;
}) {
  return (
    <section id="contact" data-theme="light" className="bg-signal text-ink">
      <div
        className={`edge cols py-24 md:py-40 ${full ? "min-h-svh pt-40 md:pt-48" : ""}`}
      >
        <div className="col-span-4 md:col-span-6 md:col-start-3 lg:col-span-7 lg:col-start-6">
          <Headline
            as={as}
            lines={lines}
            className="text-[clamp(2.25rem,5vw,5rem)] font-bold leading-[0.95] tracking-[-0.045em]"
          />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
