import type { ReactNode } from "react";
import { Headline } from "../motion/heading-reveal";

export function EditorialHero({
  kicker,
  lines,
  className = "display-lg",
  children,
}: {
  kicker: string;
  lines: string[];
  className?: string;
  children?: ReactNode;
}) {
  return (
    <section data-theme="dark" className="bg-ink text-white">
      <div className="edge flex min-h-[78svh] flex-col justify-end pb-8 pt-32 md:min-h-[88svh] md:pb-12">
        <p className="caption mb-6 text-white/65">{kicker}</p>
        <Headline as="h1" lines={lines} className={className} />
        {children}
      </div>
    </section>
  );
}
