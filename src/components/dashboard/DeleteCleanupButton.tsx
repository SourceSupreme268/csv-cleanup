"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2, Loader2 } from "lucide-react";
import posthog from "posthog-js";

export default function DeleteCleanupButton({ id }: { id: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [confirming, setConfirming] = useState(false);

  async function handleDelete() {
    if (!confirming) {
      setConfirming(true);
      return;
    }

    setLoading(true);
    try {
      await fetch(`/api/cleanup/${id}`, { method: "DELETE" });
      posthog.capture("cleanup_deleted", { id });
      router.refresh();
    } finally {
      setLoading(false);
      setConfirming(false);
    }
  }

  return (
    <button
      onClick={handleDelete}
      onBlur={() => setConfirming(false)}
      disabled={loading}
      className={`inline-flex items-center gap-1 rounded px-2 py-1 text-xs transition ${
        confirming
          ? "bg-red-500 text-white"
          : "text-neutral-500 hover:text-red-400"
      }`}
    >
      {loading ? (
        <Loader2 className="h-3.5 w-3.5 animate-spin" />
      ) : (
        <Trash2 className="h-3.5 w-3.5" />
      )}
      {confirming ? "Confirm?" : ""}
    </button>
  );
}