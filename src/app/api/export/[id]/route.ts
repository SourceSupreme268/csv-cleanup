import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import Papa from "papaparse";
import xlsx from "json-as-xlsx";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  const cleanup = await prisma.cleanup.findUnique({ where: { id } });

  if (!cleanup || cleanup.userId !== user.id) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  if (!cleanup.cleanedData || cleanup.expiresAt < new Date()) {
    return NextResponse.json(
      { error: "This file has expired and is no longer available for export" },
      { status: 410 }
    );
  }

  const { data: rows } = Papa.parse<Record<string, string>>(
    cleanup.cleanedData,
    { header: true, skipEmptyLines: true }
  );

  if (rows.length === 0) {
    return NextResponse.json({ error: "No data to export" }, { status: 400 });
  }

  const columns = Object.keys(rows[0]).map((key) => ({
    label: key,
    value: key,
  }));

  const buffer = xlsx(
    [{ sheet: "Cleaned Data", columns, content: rows }],
    { writeOptions: { type: "buffer", bookType: "xlsx" } }
  ) as unknown as Buffer;

  return new NextResponse(buffer, {
    headers: {
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition": `attachment; filename="cleaned_${cleanup.fileName.replace(/\.csv$/i, "")}.xlsx"`,
    },
  });
}