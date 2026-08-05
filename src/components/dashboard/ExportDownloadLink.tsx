"use client";

import { Download } from "lucide-react";
import posthog from "posthog-js";

export default function ExportDownloadLink({
  id,
  fileName,
}: {
  id: string;
  fileName: string;
}) {
  return (
    <a
      href={`/api/export/${id}`}
      onClick={() => posthog.capture("export_downloaded", { fileName })}
      className="flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3 py-1.5 text-xs font-medium text-black transition hover:bg-emerald-400"
    >
      <Download className="h-3.5 w-3.5" />
      Download
    </a>
  );
}
