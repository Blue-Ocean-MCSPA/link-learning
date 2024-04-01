import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request, params) {
  try {
    const { id } = params.id; // Access id directly from params
    console.log("Getting id of ", parseInt(id));

    const pets = await sql`SELECT * FROM users WHERE id = ${id}`;
    return NextResponse.json({ pets }, { status: 200 });
  } catch (error) {
    console.error('Error executing query:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}