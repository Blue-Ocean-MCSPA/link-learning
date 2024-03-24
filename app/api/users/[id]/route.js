import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
    const data = await request.json();
    const id = data.id;
    const singleUser = await sql`SELECT * FROM testing WHERE id = ${id}`;
    return NextResponse.json({ data }, { status: 200 });
}
