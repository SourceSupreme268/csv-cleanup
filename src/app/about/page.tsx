import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="mb-8 flex items-center gap-2 text-sm text-neutral-400 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="mb-8 flex items-center gap-3">
          <Sparkles className="h-6 w-6 text-emerald-400" />
          <h1 className="text-2xl font-semibold text-white">About Us</h1>
        </div>

        <div className="space-y-4 text-sm leading-relaxed text-neutral-400">
          <p>
            CSV Cleanup helps teams turn messy spreadsheets into reliable
            data. Upload a CSV, and we automatically detect and remove
            duplicate rows — no scripts, no manual sorting, no spreadsheet
            gymnastics.
          </p>
          <p>
            We built this because cleaning data shouldn&apos;t take longer
            than using it. Whether you&apos;re importing leads into a CRM,
            reconciling customer lists, or prepping data for analysis, CSV
            Cleanup gives you back a clean file in seconds.
          </p>
          <p>
            We&apos;re a small team focused on doing one thing well: making
            your CSV data trustworthy again.
          </p>
        </div>
      </div>
    </div>
  );
}