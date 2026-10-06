"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import type { TechnologyPractice } from "@/data/types";
import { EASE } from "@/lib/motion";
import { Photo } from "../ui/photo";

export function PracticeList({
  practices,
}: {
  practices: TechnologyPractice[];
}) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState<number | null>(null);
  const cur = practices[active];

  return (
    <div>
      {/* Desktop: interactive list + changing preview */}
      <div className="cols hidden items-end md:grid">
        <div className="md:col-span-3 lg:col-span-5">
          <motion.div
            key={cur.slug}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="flex max-w-[34rem]"
          >
            <div className="flex w-[42%] flex-col justify-between bg-white p-4 text-ink">
              <span className="text-[clamp(4rem,8vw,8rem)] font-bold leading-[0.85] tracking-[-0.06em]">
                {cur.number}
              </span>
              <span className="caption mt-8 block">{cur.title}</span>
            </div>
            <div className="relative aspect-[4/5] w-[58%] bg-white/10">
              <Photo
                img={cur.image}
                sizes="20vw"
                className="grayscale contrast-125"
              />
            </div>
          </motion.div>
        </div>
        <ul className="md:col-span-5 md:col-start-4 lg:col-span-6 lg:col-start-7">
          {practices.map((p, i) => (
            <li key={p.slug}>
              <Link
                href={`/technology/${p.slug}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={`flex items-center justify-between gap-6 py-2 text-[clamp(1.5rem,2.6vw,2.75rem)] font-semibold tracking-[-0.03em] transition-all duration-500 motion-reduce:transition-none ${
                  i === active ? "translate-x-3 text-white" : "text-white/40"
                }`}
              >
                <span className="flex items-baseline gap-4">
                  <span className="caption tabular-nums">{p.number}</span>
                  {p.title}
                </span>
                <span
                  aria-hidden="true"
                  className={`text-4xl font-light transition-all duration-500 ${i === active ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
                >
                  +
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile: accordion */}
      <ul className="border-t border-white/25 md:hidden">
        {practices.map((p, i) => (
          <li key={p.slug} className="border-b border-white/25">
            <h3>
              <button
                type="button"
                aria-expanded={open === i}
                aria-controls={`practice-${p.slug}`}
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left text-2xl font-semibold tracking-tight"
              >
                <span>
                  <span className="caption mr-3 tabular-nums text-white/65">
                    {p.number}
                  </span>
                  {p.title}
                </span>
                <span aria-hidden="true" className="text-3xl font-light">
                  {open === i ? "−" : "+"}
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  id={`practice-${p.slug}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="overflow-hidden"
                >
                  <div className="pb-8">
                    <div className="relative aspect-[4/3] bg-white/10">
                      <Photo
                        img={p.image}
                        sizes="100vw"
                        className="grayscale contrast-125"
                      />
                    </div>
                    <p className="mt-4 text-sm text-white/80">{p.summary}</p>
                    <Link
                      href={`/technology/${p.slug}`}
                      className="mt-4 inline-block text-sm underline underline-offset-4"
                    >
                      Explore ↗
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </div>
  );
}
