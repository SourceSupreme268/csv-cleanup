import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import DashboardPageClient from "@/components/dashboard/DashboardPageClient";
import DeleteCleanupButton from "@/components/dashboard/DeleteCleanupButton";
import { FileSpreadsheet, Clock } from "lucide-react";

const statusStyles: Record<string, string> = {
  COMPLETED: "bg-emerald-500/10 text-emerald-400",
  PROCESSING: "bg-blue-500/10 text-blue-400",
  FAILED: "bg-red-500/10 text-red-400",
};

function daysLeft(expiresAt: Date | null | undefined): number {
  if (!expiresAt) return 0;
  const ms = new Date(expiresAt).getTime() - Date.now();
  return Math.max(0, Math.ceil(ms / (1000 * 60 * 60 * 24)));
}

export default async function HistoryPage() {
  const user = await currentUser();

  const cleanups = user
    ? await prisma.cleanup.findMany({
        where: { userId: user.id },
        orderBy: { createdAt: "desc" },
      })
    : [];

  return (
    <DashboardPageClient title="Cleaning History">
      {cleanups.length === 0 ? (
        <p className="text-sm text-neutral-400">
          No cleanups yet — upload a CSV to get started.
        </p>
      ) : (
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
          <div className="mb-4 flex items-start gap-2 rounded-lg border border-yellow-500/20 bg-yellow-500/5 px-3 py-2 text-xs text-yellow-400">
            <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            Cleaned files are available for download for 30 days after upload,
            then automatically removed. Visit the Exports page to download.
          </div>

          <div className="-mx-5 overflow-x-auto px-5">
            <table className="w-full min-w-[700px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-xs text-neutral-500">
                  <th className="w-[32%] pb-2 pr-4 font-normal">File name</th>
                  <th className="w-[12%] pb-2 pr-4 font-normal">Rows</th>
                  <th className="w-[13%] pb-2 pr-4 font-normal">Duplicates</th>
                  <th className="w-[13%] pb-2 pr-4 font-normal">Errors fixed</th>
                  <th className="w-[12%] pb-2 pr-4 font-normal">Status</th>
                  <th className="w-[11%] pb-2 pr-4 font-normal">Expires</th>
                  <th className="w-[7%] pb-2 font-normal"></th>
                </tr>
              </thead>
              <tbody>
                {cleanups.map((c) => {
                  const remaining = daysLeft(c.expiresAt);
                  const expired = remaining === 0 || !c.cleanedData;

                  return (
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
                      <td className="whitespace-nowrap py-3 pr-4 text-xs text-neutral-500">
                        {expired
                          ? "Expired"
                          : `${remaining} day${remaining === 1 ? "" : "s"} left`}
                      </td>
                      <td className="py-3">
                        <DeleteCleanupButton id={c.id} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </DashboardPageClient>
  );
}