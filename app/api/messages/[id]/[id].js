// pages/api/messages/[id].js
import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  console.log("Received request:", req.method, "for ID:", req.query.id);
  const { id } = req.query;

  switch (req.method) {
    case 'GET':
      try {
        const client = await sql.connect();
        const data = await client.sql`SELECT * FROM messages WHERE id = ${id}`;
        client.release();
        res.status(200).json(data.rows[0] || {});
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
      break;

    case 'DELETE':
      try {
        const client = await sql.connect();
        await client.sql`DELETE FROM messages WHERE id = ${id}`;
        client.release();
        res.status(200).json({ message: 'Message deleted successfully' });
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to delete message' });
      }
      break;

      case 'PATCH':
        try {
          const { message } = req.body;
          const client = await sql.connect();
          const result = await client.sql`
            UPDATE messages SET message = ${message} WHERE id = ${id}
            RETURNING *`; // Returns the updated row
          client.release();
          if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]); // Send back the updated message
          } else {
            res.status(404).json({ error: 'Message not found' });
          }
        } catch (error) {
          console.error('Error:', error);
          res.status(500).json({ error: 'Failed to update message' });
        }
        break;

    default:
      res.setHeader('Allow', ['GET', 'DELETE', 'PATCH']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}