import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request, id){
    const data = request.json();
    id = parseInt(id.params.id) || data.id;
    console.log(id)
    const result = await sql`SELECT FROM messages WHERE id = ${id}`;
    return NextResponse.json( { result }, { status: 200 });
}

export async function DELETE(request, id) {
    const data = request.json();
    id = parseInt(id.params.id) || data.id;
    console.log(id)
    const result = await sql`DELETE FROM messages WHERE id = ${id}`;
    return NextResponse.json( { result }, { status: 200 });
}

export async function PATCH(request, id) {
    const data = request.json();
    id = parseInt(id.params.id) || data.id;
    const {  message } = data; // Destructure all properties directly

    const result = await sql`
          UPDATE users
          SET message = COALESCE(${message}, message) 
          WHERE id = ${id}`;
        return NextResponse.json({ result }, { status: 200 });
}
