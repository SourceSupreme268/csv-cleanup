"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { useDashboardMenu } from "@/lib/dashboard-menu-context";

export default function DashboardPageClient({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const { openMenu } = useDashboardMenu();

  return (
    <div>
      <DashboardHeader title={title} onMenuClick={openMenu} />
      <div className="p-4 sm:p-8">{children}</div>
    </div>
  );
}
