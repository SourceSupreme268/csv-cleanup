import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import DashboardPageClient from "@/components/dashboard/DashboardPageClient";
import DeleteCleanupButton from "@/components/dashboard/DeleteCleanupButton";
import { FileSpreadsheet, Download, Clock } from "lucide-react";
import ExportDownloadLink from "@/components/dashboard/ExportDownloadLink";

function daysLeft(expiresAt: Date): number {
  const ms = expiresAt.getTime() - Date.now();
  return Math.max(0, Math.ceil(ms / (1000 * 60 * 60 * 24)));
}

export default async function ExportsPage() {
  const user = await currentUser();

  const cleanups = user
    ? (
        await prisma.cleanup.findMany({
          where: {
            userId: user.id,
            status: "COMPLETED",
            expiresAt: { gt: new Date() },
          },
          orderBy: { createdAt: "desc" },
        })
      ).filter((c) => c.cleanedData !== null)
    : [];

  return (
    <DashboardPageClient title="Exports">
      <div className="mb-4 flex items-start gap-2 rounded-lg border border-yellow-500/20 bg-yellow-500/5 px-3 py-2 text-xs text-yellow-400">
        <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0" />
        Cleaned files are available for download for 30 days after upload.
      </div>

      {cleanups.length === 0 ? (
        <p className="text-sm text-neutral-400">
          No files available for export yet.
        </p>
      ) : (
        <div className="space-y-3">
          {cleanups.map((c) => (
            // <div
            //   key={c.id}
            //   className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4"
            // >
            //   <div className="flex items-center gap-3">
            //     <FileSpreadsheet className="h-4 w-4 text-emerald-400" />
            //     <div>
            //       <p className="text-sm text-white">{c.fileName}</p>
            //       <p className="text-xs text-neutral-500">
            //         {c.rows.toLocaleString()} rows · {daysLeft(c.expiresAt)}d left
            //       </p>
            //     </div>
            //   </div>
            //   <div className="flex items-center gap-2">
            //       <ExportDownloadLink id={c.id} fileName={c.fileName} />
            //     <DeleteCleanupButton id={c.id} />
            //   </div>
            // </div>

            <div key={c.id} className="flex flex-col gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-center gap-3">
                <FileSpreadsheet className="h-4 w-4 shrink-0 text-emerald-400" />
                <div className="min-w-0">
                <p className="truncate text-sm text-white">{c.fileName}</p>
                <p className="text-xs text-neutral-500">
                {c.rows.toLocaleString()} rows · {daysLeft(c.expiresAt)}d left
                </p>
            </div>
            </div>
            <div className="flex items-center justify-end gap-3">
              <ExportDownloadLink id={c.id} fileName={c.fileName} />
              <DeleteCleanupButton id={c.id} />
            </div>
            </div>

          ))}
        </div>
      )}
    </DashboardPageClient>
  );
}