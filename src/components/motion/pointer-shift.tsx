"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { type ReactNode, useEffect } from "react";

export function PointerShift({
  children,
  strength = 14,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 80, damping: 30 });
  const sy = useSpring(y, { stiffness: 80, damping: 30 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: PointerEvent) => {
      x.set((e.clientX / window.innerWidth - 0.5) * strength * 2);
      y.set((e.clientY / window.innerHeight - 0.5) * strength * 2);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce, strength, x, y]);

  return (
    <motion.div
      className={className}
      style={reduce ? undefined : { x: sx, y: sy }}
    >
      {children}
    </motion.div>
  );
}
