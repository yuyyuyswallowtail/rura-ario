"use client";

import Image from "next/image";
import { useState } from "react";
import type { ImageAsset } from "@/data/types";

// Fills its (relative) parent. Falls back to a flat grey block if the remote image fails.
export function Photo({
  img,
  sizes = "100vw",
  priority = false,
  className = "",
}: {
  img: ImageAsset;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        role="img"
        aria-label={img.alt}
        className="absolute inset-0 bg-steel/30"
      />
    );
  }
  return (
    <Image
      src={img.src}
      alt={img.alt}
      fill
      sizes={sizes}
      priority={priority}
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}
