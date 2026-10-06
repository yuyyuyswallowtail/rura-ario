import type { ReactNode } from "react";

export function SectionLabel({
  children,
  dark = false,
  className = "",
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`caption ${dark ? "text-white/65" : "text-ink/60"} ${className}`}
    >
      {children}
    </p>
  );
}
