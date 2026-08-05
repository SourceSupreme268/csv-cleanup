
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { UploadCloud, FileSpreadsheet, Loader2 } from "lucide-react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { useDashboardMenu } from "@/lib/dashboard-menu-context";
import posthog from "posthog-js";

export default function UploadPage() {
  const router = useRouter();
  const { openMenu } = useDashboardMenu();
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{
    fileName: string;
    rows: number;
    duplicates: number;
    errorsFixed: number;
  } | null>(null);

  async function handleUpload() {
    if (!file) return;
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error ?? "Upload failed");
      }

      const { cleanup } = await res.json();
      setResult(cleanup);

      posthog.capture("csv_uploaded", {
        rows: cleanup.rows,
        duplicates: cleanup.duplicates,
        errors_fixed: cleanup.errorsFixed,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <DashboardHeader title="Upload CSV" onMenuClick={openMenu} />

      <div className="p-4 sm:p-8">
        <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-white/15 bg-white/[0.02] py-16 text-center transition hover:border-emerald-500/40">
          <UploadCloud className="h-8 w-8 text-neutral-400" />
          <span className="text-sm text-neutral-300">
            {file ? file.name : "Drag & drop your CSV file here or click to browse"}
          </span>
          <input
            type="file"
            accept=".csv"
            className="hidden"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          />
        </label>

        {file && (
          <button
            onClick={handleUpload}
            disabled={loading}
            className="mt-4 flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-medium text-black transition hover:bg-emerald-400 disabled:opacity-50"
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            {loading ? "Cleaning..." : "Clean CSV"}
          </button>
        )}

        {error && <p className="mt-4 text-sm text-red-400">{error}</p>}

        {result && (
          <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="mb-3 flex items-center gap-2">
              <FileSpreadsheet className="h-4 w-4 text-emerald-400" />
              <span className="text-sm font-medium text-white">
                {result.fileName}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-neutral-500">Rows</p>
                <p className="text-white">{result.rows}</p>
              </div>
              <div>
                <p className="text-neutral-500">Duplicates</p>
                <p className="text-white">{result.duplicates}</p>
              </div>
              <div>
                <p className="text-neutral-500">Errors fixed</p>
                <p className="text-white">{result.errorsFixed}</p>
              </div>
            </div>
            <button
              onClick={() => router.push("/dashboard/history")}
              className="mt-4 text-xs text-emerald-400 hover:underline"
            >
              View in Cleaning History →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
