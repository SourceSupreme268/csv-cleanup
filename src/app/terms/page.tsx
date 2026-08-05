import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="mb-8 text-xs text-neutral-500">
          Last updated: August 2026
        </p>

        <div className="space-y-6 text-sm leading-relaxed text-neutral-400">
          <div>
            <h2 className="mb-2 text-sm font-medium text-white">
              Using CSV Cleanup
            </h2>
            <p>
              By creating an account and using CSV Cleanup, you agree to
              these terms. You must be legally able to enter into this
              agreement to use the service.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-sm font-medium text-white">
              Your content
            </h2>
            <p>
              You retain ownership of any data you upload. You&apos;re
              responsible for ensuring you have the right to upload and
              process any data you submit to the service.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-sm font-medium text-white">
              Acceptable use
            </h2>
            <p>
              You agree not to use the service to upload unlawful content,
              attempt to disrupt the service, or access accounts other than
              your own.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-sm font-medium text-white">
              Service availability
            </h2>
            <p>
              We aim to keep the service available and reliable, but we
              don&apos;t guarantee uninterrupted access. We may modify or
              discontinue features with reasonable notice.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-sm font-medium text-white">
              Limitation of liability
            </h2>
            <p>
              CSV Cleanup is provided &quot;as is.&quot; We are not liable
              for any indirect or consequential damages arising from your
              use of the service.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-sm font-medium text-white">
              Contact
            </h2>
            <p>
              Questions about these terms? Reach out via our{" "}
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