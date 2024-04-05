import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
  const cohorts = await sql`SELECT * FROM cohort;`;
  return NextResponse.json({ cohorts }, { status: 200 });
}

export async function POST(request) {
  const { cohort_name, description, instructorid } = await request.json();
  const data =
    await sql` INSERT INTO cohort (cohort_name, description, instructorid) VALUES (${cohort_name}, ${description}, ${instructorid})`;
  return NextResponse.json({ data }, { status: 200 });
}
