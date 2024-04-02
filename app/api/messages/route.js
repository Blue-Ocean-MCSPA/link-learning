import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';


export async function GET(request) {
    try {
        const data = await sql`SELECT * FROM messages`;
        return NextResponse.json(data.rows, { status: 200 });

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(request) {
    console.log(request)
    const client = await sql.connect();
    try {
      const { senderid, recipientid, time_stamp, message } = request.body;
      const result = await client.query(
        'INSERT INTO messages (senderid, recipientid, time_stamp, message) VALUES ($1, $2, $3, $4) RETURNING *',
        [senderid, recipientid, time_stamp, message]
      );
      return NextResponse.json(result.rows[0], { status: 200 });
    } catch (error) {
      console.error('Error:', error);
      return NextResponse.json({ error: 'Failed to create message' }, { status: 500 });
    }
}
  