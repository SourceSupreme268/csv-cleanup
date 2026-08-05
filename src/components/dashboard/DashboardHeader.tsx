import { Menu } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

export default function DashboardHeader({
  title,
  onMenuClick,
}: {
  title: string;
  onMenuClick?: () => void;
}) {
  return (
    <header className="flex items-center justify-between border-b border-white/10 px-4 py-4 sm:px-8">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="text-neutral-400 hover:text-white lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
        <h1 className="text-lg font-semibold text-white">{title}</h1>
      </div>
      <UserButton afterSwitchSessionUrl="/" />
    </header>
  );
}