import { FileText, Database, Users2, AlertTriangle } from "lucide-react";

export default function StatCards({
  totalFiles,
  totalRows,
  totalDuplicates,
  totalErrors,
}: {
  totalFiles: number;
  totalRows: number;
  totalDuplicates: number;
  totalErrors: number;
}) {
  const stats = [
    { label: "Files Cleaned", value: totalFiles.toLocaleString(), icon: FileText },
    { label: "Rows Processed", value: totalRows.toLocaleString(), icon: Database },
    { label: "Duplicates Removed", value: totalDuplicates.toLocaleString(), icon: Users2 },
    { label: "Errors Fixed", value: totalErrors.toLocaleString(), icon: AlertTriangle },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
        >
          <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10">
            <stat.icon className="h-4.5 w-4.5 text-emerald-400" />
          </div>
          <p className="text-xs text-neutral-400">{stat.label}</p>
          <p className="mt-1 text-2xl font-semibold text-white">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
}