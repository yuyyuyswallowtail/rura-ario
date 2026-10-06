"use client";

import { motion, useAnimationControls, useReducedMotion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { type ReactNode, useEffect, useRef } from "react";
import { EASE } from "@/lib/motion";

const HIDDEN = "inset(100% 0% 0% 0%)";
const COVER = "inset(0% 0% 0% 0%)";
const GONE = "inset(0% 0% 100% 0%)";

// A black layer wipes up over the current page on click (exit),
// then wipes away upward once the new route has rendered (enter).
export function PageTransition({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const controls = useAnimationControls();
  const busy = useRef(false);

  useEffect(() => {
    document.documentElement.dataset.route = pathname;
    if (!busy.current) return;
    let cancelled = false;
    controls
      .start({ clipPath: GONE, transition: { duration: 0.65, ease: EASE } })
      .then(() => {
        if (!cancelled) {
          controls.set({ clipPath: HIDDEN });
          busy.current = false;
        }
      });
    return () => {
      cancelled = true;
    };
  }, [pathname, controls]);

  useEffect(() => {
    if (reduce) return;
    const onClick = (e: MouseEvent) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey ||
        busy.current
      )
        return;
      if (!(e.target instanceof Element)) return;
      const a = e.target.closest("a");
      if (!a) return;
      const href = a.getAttribute("href");
      if (
        !href?.startsWith("/") ||
        a.target === "_blank" ||
        a.hasAttribute("download")
      )
        return;
      const url = new URL(href, window.location.href);
      if (url.pathname === window.location.pathname) return;

      e.preventDefault();
      busy.current = true;
      controls
        .start({ clipPath: COVER, transition: { duration: 0.4, ease: EASE } })
        .then(() => router.push(href));
      // Safety net: never leave the page covered.
      window.setTimeout(() => {
        if (busy.current && window.location.pathname !== url.pathname) {
          controls
            .start({
              clipPath: GONE,
              transition: { duration: 0.5, ease: EASE },
            })
            .then(() => controls.set({ clipPath: HIDDEN }));
          busy.current = false;
        }
      }, 5000);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [reduce, router, controls]);

  return (
    <>
      {children}
      {!reduce && (
        <motion.div
          aria-hidden="true"
          initial={{ clipPath: HIDDEN }}
          animate={controls}
          className="pointer-events-none fixed inset-0 z-[90] flex items-center justify-center bg-ink"
        >
          <span className="text-4xl font-bold tracking-[0.35em] text-white md:text-6xl">
            RURA
          </span>
        </motion.div>
      )}
    </>
  );
}
