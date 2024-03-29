import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
    let client;
    try {
        client = await sql.connect();
        const data = await client.sql`SELECT * FROM messages`;
        return NextResponse.json({ data }, { status: 200 });
    } finally {
        if (client) client.release();
    }
}

export async function POST(request) {
    let client;
    try {
        client = await sql.connect();
        const { senderid, recipientid, time_stamp, message } = await request.json();
        console.log(message);
        const data = await client.sql` INSERT INTO messages (senderid, recipientid, time_stamp, message) VALUES (${senderid}, ${recipientid}, ${time_stamp}, ${message})`;
        return NextResponse.json({ data }, { status: 200 });
    } finally {
        if (client) client.release();
    }
}

// // Handles DELETE requests: Deletes a message by ID from the database
// export async function DELETE(request) {
//     let client;
//     try {
//         // Connect to the database
//         client = await sql.connect();
//         // Parse the request body to extract the ID of the message to be deleted
//         const { id, message } = await request.json();
//         // Execute SQL query to delete the message from the 'messages' table by its ID
//         const result = await client.sql`DELETE FROM messages WHERE id = ${id}`;
//         // Return a JSON response with the result of the deletion and a 200 status code
//         return NextResponse.json({ result }, { status: 200 });
//     } finally {
//         // Release the database connection
//         if (client) client.release();
//     }
// }

// // Handles PATCH requests: Updates a message by ID in the database
// export async function PATCH(request) {
//     let client;
//     try {
//         // Connect to the database
//         client = await sql.connect();
//         // Parse the request body to extract the ID and new values for the message
//         const { id, message} = await request.json();
//         // Execute SQL query to update the specified fields of the message in the 'messages' table
//         const data = await client.sql`UPDATE messages SET name = ${message} WHERE id = ${id}`;
//         // Return a JSON response with the updated data and a 200 status code
//         return NextResponse.json({ data }, { status: 200 });
//     } finally {
//         // Ensure the database connection is released
//         if (client) client.release();
//     }
// }
