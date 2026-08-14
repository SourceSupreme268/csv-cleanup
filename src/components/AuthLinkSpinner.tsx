"use client";

import { useLinkStatus } from "next/link";
import { Loader2 } from "lucide-react";

export default function AuthLinkSpinner() {
  const { pending } = useLinkStatus();
  return pending ? <Loader2 className="h-4 w-4 animate-spin" /> : null;
}