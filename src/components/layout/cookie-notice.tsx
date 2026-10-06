"use client";

import { useEffect, useState } from "react";

const KEY = "rura-cookie-notice";

export function CookieNotice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  const dismiss = () => {
    try {
      localStorage.setItem(KEY, "1");
    } catch {
      /* storage unavailable: just hide for this session */
    }
    setShow(false);
  };

  return (
    <aside
      aria-label="Cookie notice"
      className="fixed inset-x-2 bottom-2 z-[60] flex items-center justify-between gap-4 border border-ink/15 bg-paper px-4 py-2.5 text-xs text-ink"
    >
      <p>
        This website uses cookies for a better experience. (Demo notice, nothing
        is tracked.)
      </p>
      <button
        type="button"
        onClick={dismiss}
        className="shrink-0 font-bold uppercase tracking-wider"
      >
        OK +
      </button>
    </aside>
  );
}
