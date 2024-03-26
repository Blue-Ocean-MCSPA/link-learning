import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET (request) {
  const userList = await sql`SELECT * FROM users;`;
  return NextResponse.json({ userList }, { status: 200 });
}