// pages/api/messages/index.js
import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  let client;

  try {
    client = await sql.connect();

    switch (req.method) {
      case 'GET':
        // List all messages
        const data = await client.sql`SELECT * FROM messages`;
        res.status(200).json(data.rows);
        break;

      case 'POST':
        // Create a new message
        const { senderid, recipientid, time_stamp, message } = req.body;
        await client.sql`
          INSERT INTO messages (senderid, recipientid, time_stamp, message)
          VALUES (${senderid}, ${recipientid}, ${time_stamp}, ${message})`;
        // Assuming you want to return the created message or some confirmation
        res.status(201).json({ senderid, recipientid, time_stamp, message });
        break;

      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    if (client) client.release();
  }
}