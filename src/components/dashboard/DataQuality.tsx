export default function DataQuality({
  totalRows,
  goodRows,
  goodPercent,
  duplicatePercent,
}: {
  totalRows: number;
  goodRows: number;
  goodPercent: number;
  duplicatePercent: number;
}) {
  const gradient = `conic-gradient(
    #10b981 0% ${goodPercent}%,
    #ef4444 ${goodPercent}% 100%
  )`;

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-white">
          Data Quality Overview
        </h2>
      </div>

      {totalRows === 0 ? (
        <p className="text-sm text-neutral-400">
          Upload a CSV to see your data quality.
        </p>
      ) : (
        <div className="flex flex-col items-center">
          <div
            className="relative flex h-40 w-40 items-center justify-center rounded-full"
            style={{ background: gradient }}
          >
            <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-[#0a0a0a]">
              <span className="text-2xl font-semibold text-white">
                {goodPercent}%
              </span>
              <span className="text-xs text-neutral-400">Good</span>
            </div>
          </div>

          <div className="mt-6 w-full space-y-2">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-neutral-300">Good Data</span>
              </div>
              <span className="text-neutral-400">
                {goodRows.toLocaleString()} ({goodPercent}%)
              </span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                <span className="text-neutral-300">Duplicates</span>
              </div>
              <span className="text-neutral-400">
                {(totalRows - goodRows).toLocaleString()} ({duplicatePercent}%)
              </span>
            </div>
          </div>

          <p className="mt-4 text-xs text-neutral-500">
            Based on {totalRows.toLocaleString()} total rows processed
          </p>
        </div>
      )}
    </div>
  );
}
