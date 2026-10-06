import Link from "next/link";
import { NAV_LINKS } from "@/lib/nav";
import { FooterWordmark } from "./footer-wordmark";
import { InspirationBadge } from "./inspiration-badge";

export function SiteFooter() {
  return (
    <footer data-theme="dark" className="overflow-hidden bg-ink text-white">
      <div className="edge cols gap-y-12 pb-24 pt-24 md:pt-40">
        <div className="col-span-2 md:col-span-2 lg:col-span-2">
          <h2 className="caption text-white/65">Navigation</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="underline-offset-4 hover:underline"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 md:col-span-2 lg:col-span-2">
          <h2 className="caption text-white/65">Social</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>LinkedIn (demo)</li>
            <li>Instagram (demo)</li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-2 lg:col-span-2">
          <h2 className="caption text-white/65">Languages</h2>
          <p className="mt-5 text-sm font-semibold">EN</p>
        </div>
        <div className="col-span-4 md:col-span-2 lg:col-span-3">
          <h2 className="caption text-white/65">Contact</h2>
          <p className="mt-5 text-sm">
            <a
              href="mailto:hello@rura.example"
              className="underline underline-offset-4"
            >
              hello@rura.example
            </a>
          </p>
          <p className="mt-3 text-sm text-white/75">
            Fictional studios: Calgary, Jakarta
          </p>
        </div>
      </div>

      <div className="edge flex flex-col gap-2 pb-6 text-xs text-white/65 md:flex-row md:items-center md:justify-between">
        <p>© 2026 RURA. A fictional portfolio project.</p>
        <InspirationBadge full />
        <p className="flex gap-5">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Cookies</span>
        </p>
      </div>
      <FooterWordmark />
    </footer>
  );
}
