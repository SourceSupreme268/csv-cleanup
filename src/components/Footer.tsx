"use client";

import Link from "next/link";
import { Sparkles, Twitter, Linkedin, Globe } from "lucide-react";
import { footerColumns } from "@/data/footer-links";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-semibold text-white">
              <Sparkles className="h-5 w-5 text-emerald-400" />
              CSV Cleanup
            </div>
            <p className="mt-3 max-w-xs text-sm text-neutral-400">
              The smart CSV cleanup tool for modern businesses.
            </p>
            <div className="mt-5 flex items-center gap-4 text-neutral-400">
              <Twitter className="h-4 w-4" />
              <Linkedin className="h-4 w-4" />
              <Globe className="h-4 w-4" />
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h4 className="mb-3 text-sm font-medium text-white">
                {col.heading}
              </h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                {col.links.map((link) =>
                  link.href.startsWith("/#") ? (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          const id = link.href.split("#")[1];
                          if (window.location.pathname === "/") {
                            document
                              .getElementById(id)
                              ?.scrollIntoView({ behavior: "smooth" });
                          } else {
                            window.location.href = link.href;
                          }
                        }}
                        className="cursor-pointer transition hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="transition hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row">
          <p>© 2026 CSV Cleanup. All rights reserved.</p>
          <p>Made with ❤️ for data teams</p>
        </div>
      </div>
    </footer>
  );
}