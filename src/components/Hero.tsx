import Link from "next/link";
import { Sparkles, ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-20 pt-24 text-center">
      <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-neutral-300">
        <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
        Smart CSV cleanup in seconds
      </div>

      <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
        Clean CSVs.
        <br />
        <span className="text-emerald-400">Save hours.</span>
      </h1>

      <p className="mx-auto mt-6 max-w-xl text-neutral-400">
        Remove duplicates, validate columns, fix formats, and export clean
        data ready for your business.
      </p>

      <div className="mt-8 flex items-center justify-center gap-4">
        <Link
          href="/sign-up"
          className="flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-medium text-black transition hover:bg-emerald-400"
        >
          Start cleaning for free
          <ArrowRight className="h-4 w-4" />
        </Link>
        {/* <Link
          href="#"
          className="flex items-center gap-2 rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/5"
        >
          <PlayCircle className="h-4 w-4" />
          View demo
        </Link> */}
      </div>
    </section>
  );
}