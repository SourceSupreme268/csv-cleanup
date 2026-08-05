import { Users2, ShieldCheck, Wand2, Download, type LucideIcon } from "lucide-react";
import { features } from "@/data/features";

const iconMap: Record<string, LucideIcon> = {
  Users2,
  ShieldCheck,
  Wand2,
  Download,
};

export default function FeatureGrid() {
  return (
    <section id="features" className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-6 py-4">
      <div className="mb-14 text-center">
        <h2 className="text-2xl font-semibold text-white">Everything you need</h2>
        <p className="mt-2 text-sm text-neutral-400">
          Everything you need to clean your CSVs and get accurate data.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = iconMap[feature.icon];
          return (
            <div
              key={feature.title}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
            >
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10">
                <Icon className="h-4.5 w-4.5 text-emerald-400" />
              </div>
              <h3 className="mb-1.5 text-sm font-medium text-white">
                {feature.title}
              </h3>
              <p className="text-xs leading-relaxed text-neutral-400">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}