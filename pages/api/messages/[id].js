// Import the `sql` module from '@vercel/postgres' for database operations.
import { sql } from '@vercel/postgres';

// The default exported asynchronous function `handler` handles incoming HTTP requests.
export default async function handler(req, res) {
    // Destructure `id` from the query parameters and `method` from the request object.
    // `id` is the identifier of the message to be modified or deleted.
    const {
        query: { id },
        method,
    } = req;

    // A `switch` statement to handle different HTTP methods.
    switch (method) {
        case 'DELETE':
            // Handle the DELETE request to delete a message.
            try {
                // Connect to the database.
                const client = await sql.connect();
                // Execute a SQL DELETE operation to remove the message with the specified `id`.
                const result = await client.sql`DELETE FROM messages WHERE id = ${id}`;
                // Release the database connection.
                await client.release();

                // If a row was deleted (rowCount > 0), send a success response.
                if (result.rowCount > 0) {
                    res.status(200).json({ message: 'Message successfully deleted' });
                } else {
                    // If no row was deleted (message not found), send a 404 Not Found response.
                    res.status(404).json({ error: 'Message not found' });
                }
            } catch (error) {
                // Log any errors and send a 500 Internal Server Error response.
                console.error('Error deleting message:', error);
                res.status(500).json({ error: 'Internal server error' });
            }
            break;

        case 'PATCH':
            // Handle the PATCH request to update a message's content.
            try {
                // Extract `message` from the request body, which contains the new message text.
                const { message } = req.body;
                // Connect to the database.
                const client = await sql.connect();
                // Execute a SQL UPDATE operation to change the message's text where the `id` matches.
                const result = await client.sql`
                    UPDATE messages
                    SET message = ${message}
                    WHERE id = ${id}
                    RETURNING *`;
                // Release the database connection.
                await client.release();

                // If a row was updated (rowCount > 0), send back the updated message.
                if (result.rowCount > 0) {
                    res.status(200).json(result.rows[0]);
                } else {
                    // If no row was updated (message not found), send a 404 Not Found response.
                    res.status(404).json({ error: 'Message not found' });
                }
            } catch (error) {
                // Log any errors and send a 500 Internal Server Error response.
                console.error('Error updating message:', error);
                res.status(500).json({ error: 'Internal server error' });
            }
            break;

        default:
            // If the HTTP method is neither DELETE nor PATCH, inform the client of the allowed methods.
            res.setHeader('Allow', ['DELETE', 'PATCH']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}