export interface DashboardNavItem {
  label: string;
  href: string;
  icon:
    | "LayoutDashboard"
    | "UploadCloud"
    | "History"
    | "FileDown"
    | "Gauge"
    | "Settings"
    | "HelpCircle";
}

export const dashboardNavItems: DashboardNavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: "LayoutDashboard" },
  { label: "Upload CSV", href: "/dashboard/upload", icon: "UploadCloud" },
  { label: "Cleaning History", href: "/dashboard/history", icon: "History" },
  { label: "Exports", href: "/dashboard/exports", icon: "FileDown" },
  { label: "Usage", href: "/dashboard/usage", icon: "Gauge" },
];

export const dashboardBottomNavItems: DashboardNavItem[] = [
  { label: "Settings", href: "/dashboard/settings", icon: "Settings" },
  { label: "Help", href: "/dashboard/help", icon: "HelpCircle" },
];
