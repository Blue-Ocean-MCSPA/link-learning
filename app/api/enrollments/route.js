import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const data = await sql`SELECT * FROM enrollments`;
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error("Error fetching enrollments:", error);
    return NextResponse.json({ error: "Failed to fetch enrollments" }, { status: 500 });
  }
}


