"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, HelpCircle, Loader2, CheckCircle2 } from "lucide-react";

export default function HelpCenterPage() {
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
    <div className="min-h-screen bg-[#0a0a0a] px-6 py-16">
      <div className="mx-auto max-w-lg">
        <Link
          href="/"
          className="mb-8 flex items-center gap-2 text-sm text-neutral-400 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="mb-6 flex items-center gap-3">
          <HelpCircle className="h-6 w-6 text-emerald-400" />
          <h1 className="text-2xl font-semibold text-white">Help Center</h1>
        </div>
        <p className="mb-8 text-sm text-neutral-400">
          Found a bug or have a question? Send us a message and we&apos;ll
          get back to you.
        </p>

        {sent ? (
          <div className="flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4 text-sm text-emerald-400">
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
              placeholder="Describe your issue or question"
              required
              rows={4}
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
  );
}