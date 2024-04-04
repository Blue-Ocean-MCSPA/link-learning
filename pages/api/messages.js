// pages/api/messages.js
import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const client = await sql.connect();
                const result = await client.sql`SELECT * FROM messages`;
                await client.release();
                res.status(200).json(result.rows);
            } catch (error) {
                console.error('Error fetching messages:', error);
                res.status(500).json({ error: 'Internal server error' });
            }
            break;

        case 'POST':
            try {
                const { senderid, recipientid, time_stamp, message } = req.body;
                const client = await sql.connect();
                const result = await client.sql`
                    INSERT INTO messages (senderid, recipientid, time_stamp, message)
                    VALUES (${senderid}, ${recipientid}, ${time_stamp}, ${message})
                    RETURNING *`;
                await client.release();
                res.status(201).json(result.rows[0]);
            } catch (error) {
                console.error('Error adding message:', error);
                res.status(500).json({ error: 'Internal server error' });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}