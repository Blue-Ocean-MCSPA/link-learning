import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
    const data = await client.sql`SELECT * FROM messages`;
    return NextResponse.json({ data }, { status: 200 });
}

export async function POST(request) {
    const { senderid, recipientid, time_stamp, message } = await request.json();
    console.log(message);
    const data = await sql` INSERT INTO messages (senderid, recipientid, time_stamp, message) VALUES (${senderid}, ${recipientid}, ${time_stamp}, ${message})`;
    return NextResponse.json({ data }, { status: 200 });
}