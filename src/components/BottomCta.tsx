import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import AuthLinkSpinner from "./AuthLinkSpinner";

export default function BottomCta() {
  return (
    <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
      <div className="grid grid-cols-1 items-center gap-8 rounded-2xl border border-white/10 bg-white/[0.02] p-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-white">
            Ready to clean your data?
          </h2>
          <p className="mt-2 text-sm text-neutral-400">
            Join thousands of teams saving hours every week.
          </p>
<Link
  href="/sign-up"
  prefetch={false}
  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-medium text-black transition hover:bg-emerald-400"
>
  Start cleaning for free
  <AuthLinkSpinner />
  <ArrowRight className="h-4 w-4" />
</Link>
          <p className="mt-3 text-xs text-neutral-500">No credit card required</p>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/40 p-6">
          <div className="mb-4 flex items-center gap-2 text-xs text-neutral-400">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            clean-data.csv
          </div>
          <div className="space-y-2">
            <div className="h-2 w-full rounded bg-white/10" />
            <div className="h-2 w-3/4 rounded bg-white/10" />
            <div className="h-2 w-5/6 rounded bg-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}