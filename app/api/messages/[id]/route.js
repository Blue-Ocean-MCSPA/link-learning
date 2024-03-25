import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function messagesHandler(request) {
  try {
    let result;

    switch (request.method) {
      case 'GET':
        result = await handleGet(request);
        break;
      case 'POST':
        result = await handlePost(request);
        break;
      case 'DELETE':
        result = await handleDelete(request);
        break;
      case 'PATCH':
        result = await handlePatch(request);
        break;
      default:
        throw new Error('Method Not Allowed');
    }

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

async function handleGet(request) {
  const client = await sql.connect();
  const data = await client.sql`SELECT message, time_stamp FROM messages`;
  client.release();
  return data;
}

async function handlePost(request) {
  const { senderid, recipientid, time_stamp, message } = await request.json();
  const client = await sql.connect();
  const data = await client.sql`INSERT INTO messages (senderid, recipientid, time_stamp, message) VALUES (${senderid}, ${recipientid}, ${time_stamp}, ${message})`;
  client.release();
  return data;
}

async function handleDelete(request) {
  const { id } = await request.json();
  const result = await sql`DELETE FROM messages WHERE id = ${id}`;
  return result;
}

async function handlePatch(request) {
  const { id, message } = await request.json();
  const data = await sql`UPDATE messages SET message = ${message} WHERE id = ${id}`;
  return data;
}
