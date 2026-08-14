"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { navLinks } from "@/data/nav-links";
import AuthLinkSpinner from "./AuthLinkSpinner";

export default function Navbar() {
  return (
    <header className="w-full border-b border-white/10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold text-white">
          <Sparkles className="h-5 w-5 text-emerald-400" />
          CSV Cleanup
        </Link>

<ul className="hidden items-center gap-8 text-sm text-neutral-300 md:flex">
  {navLinks.map((link) => (
    <li key={link.label}>
      {link.href.startsWith("#") ? (
        <a
          href={link.href}
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector(link.href)
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="cursor-pointer transition hover:text-white"
        >
          {link.label}
        </a>
      ) : (
        <Link href={link.href} className="transition hover:text-white">
          {link.label}
        </Link>
      )}
    </li>
  ))}
</ul>

<div className="flex items-center gap-4 text-sm">
  <Link
    href="/sign-in"
    prefetch={false}
    className="flex items-center gap-1.5 text-neutral-300 transition hover:text-white"
  >
    Sign in
    <AuthLinkSpinner />
  </Link>
  <Link
    href="/sign-up"
    prefetch={false}
    className="flex items-center gap-1.5 rounded-lg bg-emerald-500 px-4 py-2 font-medium text-black transition hover:bg-emerald-400"
  >
    Get started
    <AuthLinkSpinner />
  </Link>
</div>
      </nav>
    </header>
  );
}