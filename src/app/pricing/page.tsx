import Link from "next/link";
import { Sparkles, ArrowLeft } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] px-6 text-center">
      <Sparkles className="mb-4 h-10 w-10 text-emerald-400" />
      <h1 className="text-2xl font-semibold text-white">Pricing — Coming Soon</h1>
      <p className="mt-2 max-w-sm text-sm text-neutral-400">
        We&apos;re finalizing our pricing plans. Check back soon.
      </p>
      <Link
        href="/"
        className="mt-6 flex items-center gap-2 text-sm text-emerald-400 hover:underline"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>
    </div>
  );
}