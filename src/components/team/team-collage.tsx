"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type CSSProperties, useState } from "react";
import type { TeamMember } from "@/data/types";
import { EASE } from "@/lib/motion";
import { Photo } from "../ui/photo";

type Cell = { c: number; r: number; dy: number; big?: boolean };

const CELLS: Cell[] = [
  { c: 1, r: 1, dy: 0 },
  { c: 3, r: 1, dy: -16, big: true },
  { c: 4, r: 1, dy: 12 },
  { c: 6, r: 1, dy: 0 },
  { c: 2, r: 2, dy: 20 },
  { c: 5, r: 2, dy: -10 },
  { c: 7, r: 2, dy: 0 },
  { c: 1, r: 3, dy: -12 },
  { c: 2, r: 3, dy: 0 },
  { c: 7, r: 3, dy: 14 },
  { c: 3, r: 4, dy: 0 },
  { c: 4, r: 4, dy: -18, big: true },
  { c: 6, r: 4, dy: 10 },
  { c: 1, r: 5, dy: 0 },
  { c: 2, r: 5, dy: 16 },
  { c: 5, r: 5, dy: -8 },
  { c: 7, r: 5, dy: 0 },
];

export function TeamCollage({ members }: { members: TeamMember[] }) {
  const reduce = useReducedMotion();
  const [order, setOrder] = useState(members);
  const featured = order[0];
  const others = order.slice(1, 1 + CELLS.length);

  const swap = (i: number) =>
    setOrder((prev) => {
      const next = [...prev];
      [next[0], next[i + 1]] = [next[i + 1], next[0]];
      return next;
    });

  const items = others.map((m, i) => {
    const cell = CELLS[i];
    return (
      <motion.li
        key={m.name}
        className={`${i % 2 ? "mt-8" : ""} md:mt-0 md:col-start-(--c) md:row-start-(--r) md:translate-y-(--dy) md:p-1.5 lg:p-2.5 ${
          cell.big ? "md:z-10 md:scale-125" : ""
        }`}
        style={
          {
            "--c": cell.c,
            "--r": cell.r,
            "--dy": `${cell.dy}px`,
          } as CSSProperties
        }
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -8% 0px" }}
        transition={{
          duration: 0.7,
          delay: reduce ? 0 : (i % 5) * 0.05,
          ease: EASE,
        }}
      >
        <button
          type="button"
          onClick={() => swap(i)}
          aria-label={`Feature ${m.name}, ${m.role}`}
          className="group relative block w-full text-left"
        >
          <div className="relative aspect-[3/4] overflow-hidden bg-steel/20">
            <Photo
              img={m.image}
              sizes="(min-width: 1024px) 12vw, 45vw"
              className="grayscale contrast-125 transition duration-700 group-hover:scale-105 group-hover:grayscale-0 group-focus-visible:grayscale-0 motion-reduce:transition-none"
            />
          </div>
          <span className="pointer-events-none absolute inset-x-0 bottom-0 hidden bg-ink/85 p-2 text-[10px] uppercase leading-tight tracking-wide text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 md:block">
            <span className="block font-bold">{m.name}</span>
            {m.role}
          </span>
          <span className="mt-1 block text-[10px] uppercase leading-tight tracking-wide md:hidden">
            {m.name}
          </span>
        </button>
      </motion.li>
    );
  });

  const label = (
    <li
      key="label"
      className="col-span-2 flex items-center py-8 md:col-span-4 md:col-start-3 md:row-start-3 md:py-0"
    >
      <p className="text-[clamp(2rem,5vw,5.25rem)] font-bold uppercase leading-[0.88] tracking-[-0.05em]">
        The people
        <br />
        behind
        <br />
        <span className="text-ink/50">RURA +</span>
      </p>
    </li>
  );

  return (
    <div className="edge cols items-start gap-y-10">
      <div className="col-span-4 md:col-span-3 lg:sticky lg:top-24 lg:col-span-4">
        <div aria-live="polite">
          <div
            key={featured.name}
            className="relative aspect-[4/5] overflow-hidden bg-steel/20"
          >
            <Photo
              img={featured.image}
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
          </div>
          <h3 className="mt-3 text-[clamp(1.5rem,2.6vw,2.5rem)] font-bold uppercase leading-none tracking-[-0.02em]">
            {featured.name}
          </h3>
          <p className="mt-3 border-t border-ink pt-2 text-sm">
            {featured.role}
          </p>
          <p className="mt-2 text-[11px] text-ink/60">
            Fictional team member · Stock portrait, photo via Unsplash
          </p>
        </div>
      </div>
      <ul className="col-span-4 grid grid-cols-2 gap-3 md:col-span-5 md:col-start-4 md:grid-cols-7 md:gap-0 lg:col-span-8 lg:col-start-5">
        {items.slice(0, 6)}
        {label}
        {items.slice(6)}
      </ul>
    </div>
  );
}
