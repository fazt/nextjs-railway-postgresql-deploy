import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export async function GET() {
  const result = await prisma.$queryRaw`SELECT NOW()`;
  return NextResponse.json({
    result,
  });
}
