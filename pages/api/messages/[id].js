// pages/api/messages/[id].js
import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
    const {
        query: { id },
        method,
    } = req;

    switch (method) {
        case 'DELETE':
            try {
                const client = await sql.connect();
                const result = await client.sql`DELETE FROM messages WHERE id = ${id}`;
                await client.release();

                if (result.rowCount > 0) {
                    res.status(200).json({ message: 'Message successfully deleted' });
                } else {
                    res.status(404).json({ error: 'Message not found' });
                }
            } catch (error) {
                console.error('Error deleting message:', error);
                res.status(500).json({ error: 'Internal server error' });
            }
            break;

        case 'PATCH':
            try {
                const { message } = req.body;
                const client = await sql.connect();
                const result = await client.sql`
                    UPDATE messages
                    SET message = ${message}
                    WHERE id = ${id}
                    RETURNING *`;
                await client.release();

                if (result.rowCount > 0) {
                    res.status(200).json(result.rows[0]);
                } else {
                    res.status(404).json({ error: 'Message not found' });
                }
            } catch (error) {
                console.error('Error updating message:', error);
                res.status(500).json({ error: 'Internal server error' });
            }
            break;

        default:
            res.setHeader('Allow', ['DELETE', 'PATCH']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}