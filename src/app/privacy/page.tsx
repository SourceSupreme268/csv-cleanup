import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="mb-8 flex items-center gap-2 text-sm text-neutral-400 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <h1 className="mb-2 text-2xl font-semibold text-white">
          Privacy Policy
        </h1>
        <p className="mb-8 text-xs text-neutral-500">
          Last updated: August 2026
        </p>

        <div className="space-y-6 text-sm leading-relaxed text-neutral-400">
          <div>
            <h2 className="mb-2 text-sm font-medium text-white">
              What we collect
            </h2>
            <p>
              We collect your name and email address when you create an
              account. When you upload a CSV file, we process it to remove
              duplicate rows and generate a cleaned result.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-sm font-medium text-white">
              Your uploaded files
            </h2>
            <p>
              We do not store your original uploaded file. Only the cleaned
              result is temporarily stored, for up to 30 days, after which
              it is automatically and permanently deleted. You can also
              delete any cleaned file manually at any time.
            </p>
          </div>

          {/* <div>
            <h2 className="mb-2 text-sm font-medium text-white">
              How we use your data
            </h2>
            <p>
              We use your account information to operate your account and
              respond to support requests. We use aggregated, anonymized
              usage analytics to understand how the product is used and
              improve it.
            </p>
          </div> */}

          {/* <div>
            <h2 className="mb-2 text-sm font-medium text-white">
              Third parties
            </h2>
            <p>
              We use Clerk for authentication, Neon for database hosting,
              and PostHog for product analytics. These providers process
              data on our behalf and are bound by their own privacy and
              security commitments.
            </p>
          </div> */}

          <div>
            <h2 className="mb-2 text-sm font-medium text-white">
              Your rights
            </h2>
            <p>
              You can access, update, or delete your account information at
              any time from Settings. You can request full deletion of your
              account and associated data by contacting us.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-sm font-medium text-white">
              Contact
            </h2>
            <p>
              Questions about this policy? Reach out via our{" "}
              <Link href="/contact" className="text-emerald-400 hover:underline">
                Contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}