"use client";

import { useState } from "react";
import DashboardPageClient from "@/components/dashboard/DashboardPageClient";
import { Mail, BookOpen, Loader2, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function HelpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error ?? "Failed to send message");
      }

      setSent(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <DashboardPageClient title="Help">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Link
          href="/docs"
          className="block rounded-xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-emerald-500/30"
        >
          <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10">
            <BookOpen className="h-4.5 w-4.5 text-emerald-400" />
          </div>
          <h3 className="mb-1 text-sm font-medium text-white">
            Documentation
          </h3>
          <p className="text-xs text-neutral-400">
            Learn how to clean, validate, and export your CSV files.
          </p>
        </Link>

        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
          <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10">
            <Mail className="h-4.5 w-4.5 text-emerald-400" />
          </div>
          <h3 className="mb-3 text-sm font-medium text-white">
            Contact Support
          </h3>

          {sent ? (
            <div className="flex items-center gap-2 text-sm text-emerald-400">
              <CheckCircle2 className="h-4 w-4" />
              Message sent — we&apos;ll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:border-emerald-500/50 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:border-emerald-500/50 focus:outline-none"
              />
              <textarea
                placeholder="How can we help?"
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:border-emerald-500/50 focus:outline-none"
              />

              {error && <p className="text-xs text-red-400">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-black transition hover:bg-emerald-400 disabled:opacity-50"
              >
                {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </DashboardPageClient>
  );
}