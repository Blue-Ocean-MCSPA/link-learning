import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
  const data = await sql`SELECT * FROM enrollments`;
  return NextResponse.json({ data }, { status: 200 });
}

