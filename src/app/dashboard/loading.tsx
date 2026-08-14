import { Loader2 } from "lucide-react";

export default function DashboardLoading() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-[#0a0a0a]">
      <Loader2 className="h-6 w-6 animate-spin text-emerald-400" />
      <p className="text-sm text-gray-400">Loading…</p>
    </div>
  );
}
