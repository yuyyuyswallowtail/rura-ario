"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

export function Headline({
  lines,
  as: Tag = "h2",
  className = "",
}: {
  lines: string[];
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span
          key={line}
          className="-mb-[0.12em] block overflow-hidden pb-[0.12em]"
        >
          <motion.span
            className="block"
            initial={reduce ? { opacity: 0 } : { y: "105%" }}
            whileInView={reduce ? { opacity: 1 } : { y: "0%" }}
            viewport={{ once: true, margin: "0px 0px -8% 0px" }}
            transition={{
              duration: reduce ? 0.2 : 0.95,
              delay: reduce ? 0 : i * 0.09,
              ease: EASE,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
