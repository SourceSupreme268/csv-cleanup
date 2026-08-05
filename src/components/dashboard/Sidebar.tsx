"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sparkles,
  LayoutDashboard,
  UploadCloud,
  History,
  FileDown,
  Gauge,
  Settings,
  HelpCircle,
  X,
  type LucideIcon,
} from "lucide-react";
import {
  dashboardNavItems,
  dashboardBottomNavItems,
} from "@/data/dashboard-nav";

const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard,
  UploadCloud,
  History,
  FileDown,
  Gauge,
  Settings,
  HelpCircle,
};

function NavLink({
  href,
  label,
  icon,
  active,
  onClick,
}: {
  href: string;
  label: string;
  icon: string;
  active: boolean;
  onClick?: () => void;
}) {
  const Icon = iconMap[icon];
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
        active
          ? "bg-emerald-500/10 font-medium text-emerald-400"
          : "text-neutral-400 hover:bg-white/5 hover:text-white"
      }`}
    >
      <Icon className="h-4 w-4" />
      {label}
    </Link>
  );
}

export default function Sidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      {/* Backdrop — mobile only, shown when drawer is open */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex h-screen w-64 shrink-0 flex-col border-r border-white/10 bg-[#0a0a0a] p-4 transition-transform duration-200 lg:static lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-between px-2">
          <Link href="/" className="flex items-center gap-2 font-semibold text-white">
            <Sparkles className="h-5 w-5 text-emerald-400" />
            CSV Cleanup
          </Link>
          <button onClick={onClose} className="text-neutral-400 lg:hidden">
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1">
          {dashboardNavItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
              active={pathname === item.href}
              onClick={onClose}
            />
          ))}
        </nav>

        <div className="flex flex-col gap-1 border-t border-white/10 pt-4">
          {dashboardBottomNavItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
              active={pathname === item.href}
              onClick={onClose}
            />
          ))}
        </div>
      </aside>
    </>
  );
}