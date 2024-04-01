// import { sql } from '@vercel/postgres';
// import { NextResponse } from 'next/server';

// export async function GET(request) {
//     const email = request.params.email;
//     const data = await sql`SELECT * FROM users WHERE email = ${email}`;
//     return NextResponse.json({ data }, { status: 200 });
// }