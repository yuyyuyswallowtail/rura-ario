"use client";

import { useEffect, useState } from "react";

export function useIsDesktop(): boolean {
  const [value, setValue] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setValue(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return value;
}
