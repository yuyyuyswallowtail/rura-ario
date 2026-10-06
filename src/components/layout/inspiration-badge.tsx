import { ARIO_URL } from "@/lib/nav";

export function InspirationBadge({
  full = false,
  className = "",
}: {
  full?: boolean;
  className?: string;
}) {
  return (
    <a
      href={ARIO_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="RURA — Inspired by ARIO (opens ario.law in a new tab)"
      className={`text-[9px] uppercase tracking-[0.2em] underline-offset-4 hover:underline md:text-[10px] ${className}`}
    >
      {full ? "RURA — Inspired by ARIO" : "Inspired by ARIO"} ↗
    </a>
  );
}
