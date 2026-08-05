import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "CSV Cleanup — Clean CSVs. Save hours.",
  description:
    "Remove duplicates, validate columns, fix formats, and export clean data ready for your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        theme: dark,
        variables: {
          colorPrimary: "#10b981",
          colorBackground: "#0a0a0a",
          colorInputBackground: "#171717",
          colorInputText: "#ededed",
          colorText: "#ededed",
          colorTextSecondary: "#a3a3a3",
          colorNeutral: "#ffffff",
          borderRadius: "0.75rem",
        },
      }}
    >
      <html lang="en">
        <body className="antialiased">{children}</body>
      </html>
    </ClerkProvider>
  );
}