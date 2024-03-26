import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {

    const data = await sql`SELECT * FROM submissions`;
    return NextResponse.json({ data }, { status: 200 });

}

export async function POST(request) {
    const { assignmentid, userid, submission_date, grade } = await request.json();
    const data = await sql`
        INSERT INTO submissions (assignmentid, userid, submission_date, grade)
        VALUES (${assignmentid}, ${userid}, ${submission_date}, ${grade})
        RETURNING *`;
    return NextResponse.json( { data }, { status: 200 });
}