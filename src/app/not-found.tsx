import Link from "next/link";
import { FileSearch } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] px-6 text-center">
      <FileSearch className="mb-4 h-10 w-10 text-neutral-500" />
      <h1 className="text-2xl font-semibold text-white">Page not found</h1>
      <p className="mt-2 max-w-sm text-sm text-neutral-400">
        The page you&apos;re looking for doesn&apos;t exist or may have been
        moved.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-medium text-black transition hover:bg-emerald-400"
      >
        Back to home
      </Link>
    </div>
  );
}
