import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';


export async function GET(request) {
        const users = await sql`SELECT * FROM users`;
        console.log(users)
        return NextResponse.json({ users }, { status: 200 });


}

