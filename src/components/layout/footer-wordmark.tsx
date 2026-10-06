"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

export function FooterWordmark() {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden="true" className="relative overflow-hidden">
      <motion.div
        initial={reduce ? { opacity: 0 } : { y: "35%" }}
        whileInView={reduce ? { opacity: 1 } : { y: "0%" }}
        viewport={{ once: true, margin: "0px 0px -5% 0px" }}
        transition={{ duration: 1, ease: EASE }}
        className="relative left-1/2 w-max -translate-x-1/2 whitespace-nowrap text-[clamp(9rem,39vw,46rem)] font-bold leading-[0.74] tracking-[-0.06em] text-white"
      >
        RURA
      </motion.div>
    </div>
  );
}
