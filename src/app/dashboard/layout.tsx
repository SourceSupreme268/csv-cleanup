"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import { DashboardMenuContext } from "@/lib/dashboard-menu-context";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <DashboardMenuContext.Provider
      value={{ openMenu: () => setSidebarOpen(true) }}
    >
      <div className="flex h-screen bg-[#0a0a0a]">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </DashboardMenuContext.Provider>
  );
}