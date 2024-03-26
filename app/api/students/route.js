import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
    const data = await sql`SELECT * FROM testing`;
    return NextResponse.json({ data }, { status: 200 });
}

export async function POST(request) {
    const { name, age } = await request.json();
    console.log(name, age)
    const data = await sql`INSERT INTO testing (name, age) VALUES (${name}, ${age})`;
    return NextResponse.json( { data }, { status: 200 });
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