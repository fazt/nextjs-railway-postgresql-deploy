import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const result = await prisma.$queryRaw`SELECT NOW()`;
  return NextResponse.json({
    result,
  });
}
