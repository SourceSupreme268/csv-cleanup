import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import DashboardPageClient from "@/components/dashboard/DashboardPageClient";
import StatCards from "@/components/dashboard/StatCards";
import RecentCleanups from "@/components/dashboard/RecentCleanups";
import DataQuality from "@/components/dashboard/DataQuality";
import RecentActivity from "@/components/dashboard/RecentActivity";

export default async function DashboardPage() {
  const user = await currentUser();
  const firstName = user?.firstName ?? "there";

  const cleanups = user
    ? await prisma.cleanup.findMany({
        where: { userId: user.id },
        orderBy: { createdAt: "desc" },
      })
    : [];

  const totalFiles = cleanups.length;
  const totalRows = cleanups.reduce((sum, c) => sum + c.rows, 0);
  const totalDuplicates = cleanups.reduce((sum, c) => sum + c.duplicates, 0);
  const totalErrors = cleanups.reduce((sum, c) => sum + c.errorsFixed, 0);

  const goodRows = Math.max(0, totalRows - totalDuplicates);
  const goodPercent = totalRows > 0 ? Math.round((goodRows / totalRows) * 100) : 100;
  const duplicatePercent = 100 - goodPercent;

  return (
    <DashboardPageClient title="Dashboard">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white">
          Welcome back, {firstName} 👋
        </h2>
        <p className="mt-1 text-sm text-neutral-400">
          Clean, validate and transform your CSV data in seconds.
        </p>
      </div>

      <div className="mb-6">
        <StatCards
          totalFiles={totalFiles}
          totalRows={totalRows}
          totalDuplicates={totalDuplicates}
          totalErrors={totalErrors}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RecentCleanups cleanups={cleanups.slice(0, 5)} />
        </div>
        <div>
          <DataQuality
            totalRows={totalRows}
            goodRows={goodRows}
            goodPercent={goodPercent}
            duplicatePercent={duplicatePercent}
          />
        </div>
      </div>

      <div className="mt-6">
        <RecentActivity cleanups={cleanups.slice(0, 5)} />
      </div>
    </DashboardPageClient>
  );
}
