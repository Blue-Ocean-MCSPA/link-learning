import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
    const client = await sql.connect();
    const data = await client.sql`SELECT * FROM messages`;
    return NextResponse.json({ data }, { status: 200 });
    client.release();
}

export async function POST(request) {
    const client = await sql.connect();
    const { message } = await request.json();
    console.log(message)
    const data = await sql`INSERT INTO messages (message) VALUES ${message})`;
    return NextResponse.json( { data }, { status: 200 });
    client.release();
}

export async function DELETE(request) {
    const data = await request.json();
    const id = data.id;
    const result = await sql`DELETE FROM testing WHERE id = ${id}`;
    return NextResponse.json( { result }, { status: 200 });
}

export async function PATCH(request) {
    const { id, editedAge, editedName } = await request.json();
    const data = await sql`UPDATE testing SET name = ${editedName}, age = ${editedAge} WHERE id = ${id}`;
    return NextResponse.json( { data }, { status: 200 });
}