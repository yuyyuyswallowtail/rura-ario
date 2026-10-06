import type { Metadata } from "next";

export function pageMeta(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "RURA",
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
