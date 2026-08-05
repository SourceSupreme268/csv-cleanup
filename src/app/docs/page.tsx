import Link from "next/link";
import { Sparkles, ArrowLeft, Upload, ShieldCheck, Download, Clock } from "lucide-react";

const sections = [
  {
    icon: Upload,
    title: "Uploading a CSV",
    body: "Go to Dashboard → Upload CSV, then drag and drop your file or click Browse Files. Your file is processed immediately — rows are parsed, and any exact-duplicate rows are automatically removed.",
  },
  {
    icon: ShieldCheck,
    title: "What gets cleaned",
    body: "CSV Cleanup detects rows that are complete duplicates of another row in the same file and removes them, keeping the first occurrence. Row and error counts are calculated during this pass.",
  },
  {
    icon: Download,
    title: "Exporting cleaned data",
    body: "Once a file finishes processing, visit the Exports page to download the cleaned result as a real .xlsx file. Downloads are available for 30 days after upload.",
  },
  {
    icon: Clock,
    title: "Data retention",
    body: "We never store your original uploaded file — only the cleaned result, and only for 30 days. After that, it's automatically deleted. You can also delete any file manually at any time from Cleaning History or Exports.",
  },
];

export default function DocsPage() {
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

        <div className="mb-10 flex items-center gap-3">
          <Sparkles className="h-6 w-6 text-emerald-400" />
          <h1 className="text-2xl font-semibold text-white">Documentation</h1>
        </div>

        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.title}>
              <div className="mb-2 flex items-center gap-2">
                <s.icon className="h-4 w-4 text-emerald-400" />
                <h2 className="text-sm font-medium text-white">{s.title}</h2>
              </div>
              <p className="text-sm leading-relaxed text-neutral-400">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}