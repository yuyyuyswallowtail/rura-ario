"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ImageAsset } from "@/data/types";
import { EASE } from "@/lib/motion";
import { ImageCaption } from "../ui/image-caption";
import { Photo } from "../ui/photo";

export function Figure({
  img,
  aspect = "aspect-[4/3]",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  showCaption = true,
  dark = false,
  gray = false,
  className = "",
}: {
  img: ImageAsset;
  aspect?: string;
  sizes?: string;
  priority?: boolean;
  showCaption?: boolean;
  dark?: boolean;
  gray?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <figure className={className}>
      <motion.div
        className={`relative overflow-hidden bg-steel/20 ${aspect}`}
        initial={
          reduce ? { opacity: 0 } : { clipPath: "inset(12% 12% 12% 12%)" }
        }
        whileInView={
          reduce ? { opacity: 1 } : { clipPath: "inset(0% 0% 0% 0%)" }
        }
        viewport={{ once: true, margin: "0px 0px -5% 0px" }}
        transition={{ duration: reduce ? 0.2 : 1.1, ease: EASE }}
      >
        <motion.div
          className="absolute inset-0"
          initial={reduce ? false : { scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, ease: EASE }}
        >
          <Photo
            img={img}
            sizes={sizes}
            priority={priority}
            className={`transition duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none ${
              gray ? "grayscale contrast-125 group-hover:grayscale-0" : ""
            }`}
          />
        </motion.div>
      </motion.div>
      {showCaption && <ImageCaption img={img} dark={dark} />}
    </figure>
  );
}
