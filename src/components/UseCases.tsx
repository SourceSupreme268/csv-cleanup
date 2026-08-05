import {
  Users,
  Cog,
  Landmark,
  ShoppingCart,
  Contact2,
  type LucideIcon,
} from "lucide-react";
import { useCases } from "@/data/use-cases";

const iconMap: Record<string, LucideIcon> = {
  Users,
  Cog,
  Landmark,
  ShoppingCart,
  Contact2,
};

export default function UseCases() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-6xl flex-col justify-center px-6 py-14">
      <div className="mb-14 text-center">
        <h2 className="text-2xl font-semibold text-white">
          Built for teams that work with data
        </h2>
        <p className="mt-2 text-sm text-neutral-400">
          From startups to enterprises, anyone who deals with CSVs.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
        {useCases.map((uc) => {
          const Icon = iconMap[uc.icon];
          return (
            <div key={uc.title} className="text-center">
              <Icon className="mx-auto mb-3 h-6 w-6 text-emerald-400" />
              <h3 className="mb-1 text-sm font-medium text-white">
                {uc.title}
              </h3>
              <p className="text-xs text-neutral-400">{uc.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}