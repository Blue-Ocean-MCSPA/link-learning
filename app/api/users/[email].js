import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
    const email = request.body.email;
    console.log('email: ', email);


//    try {
//         const {email} = request.query;
//         if (!email) return NextResponse.json({ error: 'Email is required' }, { status: 400 })
//         const decoded = decodeURIComponent(email);
//         const data = await sql`SELECT * FROM users WHERE email = ${decoded}`;
//         return NextResponse.json({ data }, { status: 200 });

//    } catch (error) {
//          console.log('error: ', error);
//          return NextResponse.json({ error: error }, { status: 500 });
//     }
}