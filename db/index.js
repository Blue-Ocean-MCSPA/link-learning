import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  try {
    // Use the SQL tagged template literal to make a SQL query
    const result = await sql`SELECT * FROM Users`;

    // Send the query result back as JSON
    return res.status(200).json(result);
  } catch (error) {
    // Log the error for server-side debugging
    console.error(error);

    // Respond with a generic error message
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}


