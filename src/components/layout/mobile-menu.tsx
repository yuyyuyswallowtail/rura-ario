"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { EASE } from "@/lib/motion";
import { NAV_LINKS } from "@/lib/nav";
import { InspirationBadge } from "./inspiration-badge";

export function MobileMenu({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const list = {
    closed: {},
    open: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } },
  };
  const item = {
    closed: { opacity: 0, y: reduce ? 0 : 50, clipPath: "inset(0 0 100% 0)" },
    open: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0 0 0% 0)",
      transition: { duration: reduce ? 0.15 : 0.7, ease: EASE },
    },
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[70] flex flex-col bg-ink text-white"
          initial={
            reduce
              ? { opacity: 0 }
              : { opacity: 0, clipPath: "inset(0 0 100% 0)" }
          }
          animate={
            reduce
              ? { opacity: 1 }
              : { opacity: 1, clipPath: "inset(0 0 0% 0)" }
          }
          exit={
            reduce
              ? { opacity: 0 }
              : { opacity: 0, clipPath: "inset(0 0 100% 0)" }
          }
          transition={{ duration: reduce ? 0.15 : 0.6, ease: EASE }}
        >
          <div className="edge flex items-start justify-between pt-4">
            <span className="text-2xl font-bold leading-none tracking-[0.22em]">
              RURA
            </span>
            <button
              type="button"
              onClick={onClose}
              className="text-xs font-semibold uppercase tracking-[0.2em]"
            >
              Close ×
            </button>
          </div>
          <nav
            aria-label="Mobile"
            className="edge flex flex-1 flex-col justify-center"
          >
            <motion.ul
              variants={list}
              initial="closed"
              animate="open"
              className="space-y-1"
            >
              {NAV_LINKS.map((l) => (
                <motion.li key={l.href} variants={item}>
                  <Link
                    href={l.href}
                    onClick={onClose}
                    aria-current={
                      pathname.startsWith(l.href) ? "page" : undefined
                    }
                    className={`block py-1 text-[clamp(2.5rem,12.5vw,6rem)] font-bold uppercase leading-[0.95] tracking-[-0.05em] ${
                      pathname.startsWith(l.href) ? "text-signal" : "text-white"
                    }`}
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
          <div className="edge flex items-center justify-between pb-6 text-white/65">
            <InspirationBadge />
            <span className="caption">EN</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
