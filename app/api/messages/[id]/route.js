import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function DELETE(request) {
    const data = await request.json();
    const id = data.id;
    console.log(id)
    const result = await sql`DELETE FROM messages WHERE id = ${id}`;
    return NextResponse.json( { result }, { status: 200 });
}

export async function PATCH(request) {
    const data = await request.json();
    const id = data.id;
    const message = data.message;
        const result = await sql`UPDATE messages SET message = '${message}' WHERE id = ${id}`;
        return NextResponse.json({ result }, { status: 200 });
}
