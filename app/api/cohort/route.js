import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET (request) {
  const cohorts = await sql`SELECT * FROM cohort;`;
  return NextResponse.json({ cohorts }, { status: 200 });
}