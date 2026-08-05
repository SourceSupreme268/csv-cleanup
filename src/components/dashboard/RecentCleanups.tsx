"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { FileSpreadsheet, UploadCloud, Loader2 } from "lucide-react";

interface CleanupRow {
  id: string;
  fileName: string;
  rows: number;
  duplicates: number;
  errorsFixed: number;
  status: string;
  createdAt: Date;
}

const statusStyles: Record<string, string> = {
  COMPLETED: "bg-emerald-500/10 text-emerald-400",
  PROCESSING: "bg-blue-500/10 text-blue-400",
  FAILED: "bg-red-500/10 text-red-400",
};

export default function RecentCleanups({
  cleanups,
}: {
  cleanups: CleanupRow[];
}) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function uploadFile(file: File) {
    setUploading(true);
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

      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setUploading(false);
    }
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) uploadFile(file);
  }

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-white">Recent Cleanups</h2>
        <button
          onClick={() => router.push("/dashboard/history")}
          className="text-xs text-neutral-400 transition hover:text-white"
        >
          View all
        </button>
      </div>

      {cleanups.length === 0 ? (
        <p className="mb-4 text-sm text-neutral-400">
          No cleanups yet — upload your first CSV below.
        </p>
      ) : (
        <div className="-mx-5 mb-4 overflow-x-auto px-5">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs text-neutral-500">
                <th className="w-[38%] pb-2 pr-4 font-normal">File name</th>
                <th className="w-[13%] pb-2 pr-4 font-normal">Rows</th>
                <th className="w-[15%] pb-2 pr-4 font-normal">Duplicates</th>
                <th className="w-[15%] pb-2 pr-4 font-normal">Errors fixed</th>
                <th className="w-[12%] pb-2 pr-4 font-normal">Status</th>
                <th className="w-[7%] pb-2 font-normal">Date</th>
              </tr>
            </thead>
            <tbody>
              {cleanups.map((c) => (
                <tr key={c.id} className="border-b border-white/5">
                  <td className="flex items-center gap-2 py-3 pr-4 text-neutral-200">
                    <FileSpreadsheet className="h-4 w-4 shrink-0 text-emerald-400" />
                    <span className="truncate">{c.fileName}</span>
                  </td>
                  <td className="py-3 pr-4 tabular-nums text-neutral-300">
                    {c.rows.toLocaleString()}
                  </td>
                  <td className="py-3 pr-4 tabular-nums text-neutral-300">
                    {c.duplicates}
                  </td>
                  <td className="py-3 pr-4 tabular-nums text-neutral-300">
                    {c.errorsFixed}
                  </td>
                  <td className="py-3 pr-4">
                    <span
                      className={`whitespace-nowrap rounded-full px-2 py-1 text-xs font-medium ${statusStyles[c.status]}`}
                    >
                      {c.status.charAt(0) + c.status.slice(1).toLowerCase()}
                    </span>
                  </td>
                  <td className="whitespace-nowrap py-3 text-xs text-neutral-500">
                    {new Date(c.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        className={`flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed px-4 py-6 text-center text-sm transition sm:flex-row ${
          dragging
            ? "border-emerald-500/60 bg-emerald-500/5"
            : "border-white/15 text-neutral-400"
        }`}
      >
        {uploading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin text-emerald-400" />
            <span>Cleaning...</span>
          </>
        ) : (
          <>
            <UploadCloud className="h-4 w-4" />
            <span>Drag & drop your CSV file here or</span>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="font-medium text-emerald-400 hover:underline"
            >
              Browse Files
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".csv"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) uploadFile(file);
              }}
            />
          </>
        )}
      </div>

      {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
    </div>
  );
}
