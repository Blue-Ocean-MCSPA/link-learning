// Import the `sql` module from the '@vercel/postgres' package.
// This module is used to interact with a PostgreSQL database.
import { sql } from '@vercel/postgres';

// Define the default export of this file as an asynchronous function named `handler`.
// This function handles incoming HTTP requests to the `/api/messages` endpoint.
export default async function handler(req, res) {
    // Destructure the `method` property from the `req` (request) object.
    // This tells us what HTTP method (GET, POST, etc.) was used in the request.
    const { method } = req;

    // Use a `switch` statement to perform different actions based on the HTTP method.
    switch (method) {
        case 'GET':
            // If the method is GET, try to fetch messages from the database.
            try {
                // Establish a connection to the database using the `sql` module.
                const client = await sql.connect();
                // Execute a SQL query to select all rows from the `messages` table.
                const result = await client.sql`SELECT * FROM messages`;
                // Release the database connection.
                await client.release();
                // Send a 200 OK status code and the result of the query (the messages) as JSON.
                res.status(200).json(result.rows);
            } catch (error) {
                // If an error occurs, log it and send a 500 Internal Server Error status code with the error message.
                console.error('Error fetching messages:', error);
                res.status(500).json({ error: 'Internal server error' });
            }
            break;

        case 'POST':
            // If the method is POST, try to add a new message to the database.
            try {
                // Destructure the necessary fields from the body of the request.
                const { senderid, recipientid, time_stamp, message } = req.body;
                // Establish a connection to the database.
                const client = await sql.connect();
                // Execute a SQL query to insert the new message into the `messages` table.
                // The `RETURNING *` clause returns the newly inserted row.
                const result = await client.sql`
                    INSERT INTO messages (senderid, recipientid, time_stamp, message)
                    VALUES (${senderid}, ${recipientid}, ${time_stamp}, ${message})
                    RETURNING *`;
                // Release the database connection.
                await client.release();
                // Send a 201 Created status code and the newly created message as JSON.
                res.status(201).json(result.rows[0]);
            } catch (error) {
                // If an error occurs, log it and send a 500 Internal Server Error status code with the error message.
                console.error('Error adding message:', error);
                res.status(500).json({ error: 'Internal server error' });
            }
            break;

        default:
            // If the method is neither GET nor POST, set the 'Allow' header to ['GET', 'POST'] to indicate allowed methods.
            res.setHeader('Allow', ['GET', 'POST']);
            // Send a 405 Method Not Allowed status code and a message indicating the disallowed method.
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}