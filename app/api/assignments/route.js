import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
        const data = await sql`SELECT * FROM assignments`;
        return NextResponse.json({ data }, { status: 200 });
}

export async function POST(request) {

        const { cohortid, title, description, dueDate } = await request.json();
        console.log(cohortid, title, description, dueDate);
        const data = await sql` INSERT INTO assignments (cohortid, title, description, due_date) VALUES (${cohortid}, ${title}, ${description}, ${dueDate})`;
        return NextResponse.json({ data }, { status: 200 });

}