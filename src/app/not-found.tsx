import Link from "next/link";

export default function NotFound() {
  return (
    <section data-theme="dark" className="bg-ink text-white">
      <div className="edge flex min-h-svh flex-col justify-end pb-12 pt-32">
        <p className="caption mb-6 text-white/60">404</p>
        <h1 className="display-lg">NOT FOUND</h1>
        <Link
          href="/"
          className="mt-8 w-fit text-sm underline underline-offset-4"
        >
          Back to home ↗
        </Link>
      </div>
    </section>
  );
}
