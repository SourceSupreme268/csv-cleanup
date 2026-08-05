import { CheckCircle2, XCircle, Loader2 } from "lucide-react";

interface CleanupRow {
  id: string;
  fileName: string;
  rows: number;
  duplicates: number;
  errorsFixed: number;
  status: string;
  createdAt: Date;
}

export default function RecentActivity({
  cleanups,
}: {
  cleanups: CleanupRow[];
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-white">Recent Activity</h2>
      </div>

      {cleanups.length === 0 ? (
        <p className="text-sm text-neutral-400">No activity yet.</p>
      ) : (
        <div className="space-y-4">
          {cleanups.map((c) => {
            const isFailed = c.status === "FAILED";
            const isProcessing = c.status === "PROCESSING";
            const Icon = isFailed
              ? XCircle
              : isProcessing
                ? Loader2
                : CheckCircle2;
            const color = isFailed
              ? "text-red-400"
              : isProcessing
                ? "text-blue-400"
                : "text-emerald-400";

            return (
              <div
                key={c.id}
                className="flex items-start justify-between gap-4"
              >
                <div className="flex items-start gap-3">
                  <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${color}`} />
                  <div>
                    <p className="text-sm text-neutral-200">
                      {c.fileName}{" "}
                      {isFailed
                        ? "failed to process"
                        : isProcessing
                          ? "is processing"
                          : "cleaned successfully"}
                    </p>
                    <p className="text-xs text-neutral-500">
                      {c.rows.toLocaleString()} rows · {c.duplicates}{" "}
                      duplicates · {c.errorsFixed} errors fixed
                    </p>
                  </div>
                </div>
                <span className="shrink-0 text-xs text-neutral-500">
                  {new Date(c.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
