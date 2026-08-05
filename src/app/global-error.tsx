"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] antialiased">
        <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <h1 className="text-2xl font-semibold text-white">
            Application error
          </h1>
          <p className="mt-2 max-w-sm text-sm text-neutral-400">
            Something went wrong loading the app. Please try again.
          </p>
          <button
            onClick={reset}
            className="mt-6 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-medium text-black transition hover:bg-emerald-400"
          >
            Reload
          </button>
        </div>
      </body>
    </html>
  );
}