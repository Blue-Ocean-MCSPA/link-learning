// Imports the sql tagged template function from the @vercel/postgres, designed to facilitate connections and interactions with PostgreSQL databases.
import { sql } from '@vercel/postgres';
// Imports the NextResponse, used to create custom responses to HTTP requests within API routes or middleware in a Next.js application
import { NextResponse } from 'next/server';

// Unified API handler to manage different HTTP methods for messages
export async function messagesHandler(request) {
  try {
    let result;

    // Determine the HTTP method of the request and call the appropriate handler
    switch (request.method) {
      case 'GET':
        // Handle GET request
        result = await handleGet(request);
        break;
      case 'POST':
        // Handle POST request
        result = await handlePost(request);
        break;
      case 'DELETE':
        // Handle DELETE request
        result = await handleDelete(request);
        break;
      case 'PATCH':
        // Handle PATCH request
        result = await handlePatch(request);
        break;
      default:
        // If the method is not supported, throw an error
        throw new Error('Method Not Allowed');
    }

    // Return the result of the handler as a JSON response with a 200 status code
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    // Log the error and return a 500 Internal Server Error response if an exception occurs
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Handler for GET requests
async function handleGet(request) {
  const client = await sql.connect();
  // Select specific columns (message and time_stamp) from the 'messages' table
  const data = await client.sql`SELECT message, time_stamp FROM messages`;
  client.release(); // Release the database connection
  return data; // Return the fetched data
}

// Handler for POST requests
async function handlePost(request) {
  // Parse the request body to extract message details
  const { senderid, recipientid, time_stamp, message } = await request.json();
  const client = await sql.connect();
  // Insert the new message into the 'messages' table
  const data = await client.sql`INSERT INTO messages (senderid, recipientid, time_stamp, message) VALUES (${senderid}, ${recipientid}, ${time_stamp}, ${message})`;
  client.release(); // Release the database connection
  return data; // Return the inserted data
}

// Handler for DELETE requests
async function handleDelete(request) {
  const { id } = await request.json(); // Parse the request body to get the message ID
  const result = await sql`DELETE FROM messages WHERE id = ${id}`; // Delete the message by ID
  return result; // Return the result of the deletion
}

// Handler for PATCH requests
async function handlePatch(request) {
  // Parse the request body to get the message ID and new message content
  const { id, message } = await request.json();
  const data = await sql`UPDATE messages SET message = ${message} WHERE id = ${id}`; // Update the message
  return data; // Return the updated data
}