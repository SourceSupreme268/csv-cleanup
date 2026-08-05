import { trustedLogos } from "@/data/trusted-logos";

export default function TrustedBy() {
  return (
    <section className="mx-auto flex  max-w-4xl flex-col justify-center px-6 py-14 text-center">
      <p className="mb-6 text-xs uppercase tracking-wider text-neutral-500">
        Trusted by data-driven teams
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-neutral-500">
        {trustedLogos.map((name) => (
          <span key={name} className="text-sm font-medium">
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
