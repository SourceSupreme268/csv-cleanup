"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] px-6 text-center">
      <AlertTriangle className="mb-4 h-10 w-10 text-red-400" />
      <h1 className="text-2xl font-semibold text-white">
        Something went wrong
      </h1>
      <p className="mt-2 max-w-sm text-sm text-neutral-400">
        An unexpected error occurred. You can try again, or head back home.
      </p>
      <div className="mt-6 flex items-center gap-3">
        <button
          onClick={reset}
          className="rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-medium text-black transition hover:bg-emerald-400"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/5"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
