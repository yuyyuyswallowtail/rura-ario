"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import type { PressArticle } from "@/data/types";
import { useIsDesktop } from "@/lib/use-desktop";
import { PressCard } from "./press-card";

export function FeaturedNews({ articles }: { articles: PressArticle[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const desktop = useIsDesktop();
  const fx = desktop && !reduce;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const rotL = useTransform(scrollYProgress, [0, 1], [42, 0]);
  const rotR = useTransform(scrollYProgress, [0, 1], [-42, 0]);
  const rotC = useTransform(scrollYProgress, [0, 1], [26, 0]);
  const yL = useTransform(scrollYProgress, [0, 1], [140, 0]);
  const yC = useTransform(scrollYProgress, [0, 1], [260, 0]);
  const yR = useTransform(scrollYProgress, [0, 1], [90, 0]);

  const [a, b, c] = articles;

  return (
    <div ref={ref} className="cols gap-y-20 [perspective:1400px]">
      <motion.div
        className="col-span-4 md:col-span-5 lg:col-span-4"
        style={
          fx
            ? { rotateY: rotL, y: yL, transformOrigin: "left center" }
            : undefined
        }
      >
        <PressCard article={a} />
      </motion.div>
      <motion.div
        className="col-span-4 md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-5 lg:mt-56"
        style={fx ? { rotateX: rotC, y: yC } : undefined}
      >
        <PressCard article={b} />
      </motion.div>
      <motion.div
        className="col-span-4 md:col-span-5 md:col-start-2 lg:col-span-4 lg:col-start-9 lg:mt-24"
        style={
          fx
            ? { rotateY: rotR, y: yR, transformOrigin: "right center" }
            : undefined
        }
      >
        <PressCard article={c} />
      </motion.div>
    </div>
  );
}
