import type { Metadata } from "next";
import { Geist } from "next/font/google";
import type { ReactNode } from "react";
import { CookieNotice } from "@/components/layout/cookie-notice";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PageTransition } from "@/components/motion/page-transition";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const base = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: "RURA — Industrial Systems Re-engineered",
  description:
    "RURA is a fictional industrial technology company focused on decarbonization, electrification and next-generation manufacturing. A portfolio design study inspired by ARIO.",
  openGraph: {
    title: "RURA — Industrial Systems Re-engineered",
    siteName: "RURA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RURA — Industrial Systems Re-engineered",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:bg-signal focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <SiteHeader />
        <PageTransition>
          <main id="main">{children}</main>
          <SiteFooter />
        </PageTransition>
        <CookieNotice />
      </body>
    </html>
  );
}
