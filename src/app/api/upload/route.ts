import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { cleanCsv } from "@/lib/csv-clean";

export async function POST(req: NextRequest) {
  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const csvText = await file.text();
  const result = cleanCsv(file.name, csvText);

  await prisma.user.upsert({
    where: { id: user.id },
    update: {},
    create: {
      id: user.id,
      email: user.primaryEmailAddress?.emailAddress ?? "unknown@example.com",
    },
  });

  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 30);

  const cleanup = await prisma.cleanup.create({
    data: {
      fileName: result.fileName,
      rows: result.rows,
      duplicates: result.duplicates,
      errorsFixed: result.errorsFixed,
      cleanedData: result.cleanedCsv,
      expiresAt,
      status: "COMPLETED",
      userId: user.id,
    },
  });

  return NextResponse.json({ cleanup });
}
