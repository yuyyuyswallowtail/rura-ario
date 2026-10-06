"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/nav";
import { InspirationBadge } from "./inspiration-badge";
import { MobileMenu } from "./mobile-menu";

// Header contrast follows whichever [data-theme] section is under it.
export function SiteHeader() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    document.documentElement.dataset.route = pathname;
    let raf = 0;
    const update = () => {
      raf = 0;
      for (const el of document.elementsFromPoint(window.innerWidth / 2, 28)) {
        const t = el.closest<HTMLElement>("[data-theme]");
        if (t) {
          setTheme(t.dataset.theme === "light" ? "light" : "dark");
          return;
        }
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    const timer = window.setTimeout(update, 900);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  const tone = theme === "dark" ? "text-white" : "text-ink";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${tone}`}
    >
      <div className="edge grid grid-cols-2 items-start pt-4 md:grid-cols-[1fr_auto_1fr]">
        <div>
          <Link
            href="/"
            aria-label="RURA home"
            className="block text-2xl font-bold leading-none tracking-[0.22em] md:text-3xl"
          >
            RURA
          </Link>
          <InspirationBadge className="mt-2 block opacity-80 hover:opacity-100" />
        </div>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex gap-7 pt-1 text-[13px]">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={
                    pathname.startsWith(l.href) ? "page" : undefined
                  }
                  className={`underline-offset-[6px] hover:underline ${pathname.startsWith(l.href) ? "underline" : ""}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-start justify-end gap-4 pt-1">
          <span className="hidden text-[13px] font-semibold md:block">EN</span>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={open}
            className="text-xs font-semibold uppercase tracking-[0.2em] md:hidden"
          >
            Menu +
          </button>
        </div>
      </div>
      <MobileMenu open={open} onClose={close} pathname={pathname} />
    </header>
  );
}
