import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    console.log(`Hit GET route`)
    try{
        const email = params.email
        const user = await sql`SELECT * FROM users WHERE email = ${email}`;
        console.log(user);
        return NextResponse.json({ data }, { status: 200 });

    }
    catch(error){
        console.error('Error executing query: ', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}