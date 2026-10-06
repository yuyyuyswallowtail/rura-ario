import type { ImageAsset } from "@/data/types";

export function ImageCaption({
  img,
  dark = false,
  className = "",
}: {
  img: ImageAsset;
  dark?: boolean;
  className?: string;
}) {
  return (
    <figcaption
      className={`mt-2.5 text-[11px] leading-snug ${dark ? "text-white/65" : "text-ink/60"} ${className}`}
    >
      <span className="block">{img.caption}</span>
      <span className="block text-[10px] uppercase tracking-[0.12em]">
        {img.credit}
      </span>
    </figcaption>
  );
}
