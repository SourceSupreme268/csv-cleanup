import { Lock, ShieldCheck, Trash2, ServerCog, type LucideIcon } from "lucide-react";
import { trustItems } from "@/data/trust-bar";

const iconMap: Record<string, LucideIcon> = {
  Lock,
  ShieldCheck,
  Trash2,
  ServerCog,
};

export default function TrustBar() {
  return (
    <section className="mx-auto flex min-h-[40vh] max-w-6xl flex-col justify-center px-6 py-14">
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-10">
        <div className="mb-8 text-center">
          <h2 className="text-xl font-semibold text-white">
            Secure. Private. Reliable.
          </h2>
          <p className="mt-2 text-sm text-neutral-400">
            Your data is safe with us.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div key={item.title} className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10">
                  <Icon className="h-4 w-4 text-neutral-300" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-neutral-400">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}