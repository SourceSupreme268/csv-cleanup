import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest, NextResponse } from "next/server";
import { PostHog } from "posthog-node";

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);

    if (evt.type === "user.created") {
      const posthog = new PostHog(
        process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN!,
        { host: process.env.NEXT_PUBLIC_POSTHOG_HOST }
      );

      posthog.capture({
        distinctId: evt.data.id,
        event: "user_signed_up",
        properties: {
          email: evt.data.email_addresses?.[0]?.email_address,
        },
      });

      await posthog.shutdown();
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Webhook verification failed:", err);
    return NextResponse.json({ error: "Invalid webhook" }, { status: 400 });
  }
}