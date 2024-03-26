// Imports the sql tagged template function from the @vercel/postgres, designed to facilitate connections and interactions with PostgreSQL databases.
import { sql } from '@vercel/postgres';
// Imports the NextResponse, used to create custom responses to HTTP requests within API routes or middleware in a Next.js application
import { NextResponse } from 'next/server';

// Handles GET requests: Retrieves all messages from the database
export async function GET(request) {
    let client;
    try {
        // Connect to the database
        client = await sql.connect();
        // Execute SQL query to select all records from the 'messages' table
        const data = await client.sql`SELECT * FROM messages`;
        // Return the fetched data as a JSON response with a 200 status code
        return NextResponse.json({ data }, { status: 200 });
    } finally {
        // Ensure the database connection is released back to the pool
        if (client) client.release();
    }
}

// Handles POST requests: Inserts a new message into the database
export async function POST(request) {
    let client;
    try {
        // Connect to the database
        client = await sql.connect();
        // Parse the request body to extract the message
        const { message } = await request.json();
        // Log the received message - useful for debugging
        console.log(message);
        // Execute SQL query to insert the new message into the 'messages' table
        const data = await client.sql`INSERT INTO messages (message) VALUES (${message})`;
        // Return a JSON response with the inserted data and a 200 status code
        return NextResponse.json({ data }, { status: 200 });
    } finally {
        // Release the database connection
        if (client) client.release();
    }
}

// Handles DELETE requests: Deletes a message by ID from the database
export async function DELETE(request) {
    let client;
    try {
        // Connect to the database
        client = await sql.connect();
        // Parse the request body to extract the ID of the message to be deleted
        const { id } = await request.json();
        // Execute SQL query to delete the message from the 'messages' table by its ID
        const result = await client.sql`DELETE FROM messages WHERE id = ${id}`;
        // Return a JSON response with the result of the deletion and a 200 status code
        return NextResponse.json({ result }, { status: 200 });
    } finally {
        // Release the database connection
        if (client) client.release();
    }
}

// Handles PATCH requests: Updates a message by ID in the database
export async function PATCH(request) {
    let client;
    try {
        // Connect to the database
        client = await sql.connect();
        // Parse the request body to extract the ID and new values for the message
        const { id, editedAge, editedName } = await request.json();
        // Execute SQL query to update the specified fields of the message in the 'messages' table
        const data = await client.sql`UPDATE messages SET name = ${editedName}, age = ${editedAge} WHERE id = ${id}`;
        // Return a JSON response with the updated data and a 200 status code
        return NextResponse.json({ data }, { status: 200 });
    } finally {
        // Ensure the database connection is released
        if (client) client.release();
    }
}