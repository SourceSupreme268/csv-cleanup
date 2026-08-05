import { Upload, Sparkles, Eye, FileDown, type LucideIcon } from "lucide-react";
import { steps } from "@/data/how-it-works";

const iconMap: Record<string, LucideIcon> = {
  Upload,
  Sparkles,
  Eye,
  FileDown,
};

export default function HowItWorks() {
  return (
    <section className="mx-auto flex min-h-[90vh] max-w-6xl flex-col justify-center px-6 py-34">
      <div className="mb-14 text-center">
        <h2 className="text-2xl font-semibold text-white">How it works</h2>
        <p className="mt-2 text-sm text-neutral-400">
          Clean your CSV in 4 simple steps.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => {
          const Icon = iconMap[s.icon];
          return (
            <div key={s.step} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10">
                <Icon className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="mb-1 text-sm font-medium text-white">
                {s.step}. {s.title}
              </h3>
              <p className="text-xs text-neutral-400">{s.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}