import { UserProfile } from "@clerk/nextjs";
import DashboardPageClient from "@/components/dashboard/DashboardPageClient";

export default function SettingsPage() {
  return (
    <DashboardPageClient title="Settings">
      <UserProfile
        routing="hash"
        appearance={{
          elements: {
            rootBox: "w-full",
            card: "bg-transparent shadow-none border border-white/10",
          },
        }}
      />
    </DashboardPageClient>
  );
}