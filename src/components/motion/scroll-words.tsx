"use client";

import {
  type MotionValue,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

function Word({
  word,
  progress,
  from,
  to,
}: {
  word: string;
  progress: MotionValue<number>;
  from: number;
  to: number;
}) {
  const opacity = useTransform(progress, [from, to], [0.18, 1]);
  return (
    <span className="mr-[0.25em] inline-block">
      <motion.span className="inline-block" style={{ opacity }}>
        {word}
      </motion.span>
    </span>
  );
}

export function ScrollWords({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.5"],
  });

  if (reduce) return <p className={className}>{text}</p>;

  const words = text
    .split(" ")
    .map((word, i) => ({ word, id: `${i}-${word}` }));
  const n = words.length;
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <Word
          key={w.id}
          word={w.word}
          progress={scrollYProgress}
          from={i / n}
          to={Math.min(1, (i + 4) / n)}
        />
      ))}
    </p>
  );
}
