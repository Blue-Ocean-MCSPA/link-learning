import { sql } from '@vercel/postgres';
 
export default async function handler(request, response) {
  if (request.method == 'POST') {
    const { name, age } = request.body;
    try {
      const result = await sql`INSERT INTO testing (name, age) VALUES (${name}, ${age})`;
      return response.status(200).json({ result });
    } catch (error) {
      return response.status(500).json({ error });
    }
  
  } else if (request.method == 'GET') {
    try {
      const result = await sql`SELECT * FROM testing;`;
      return response.status(200).json({ result });
    } catch (error) {
      return response.status(500).json({ error });
    } 
  } else if (request.method === 'DELETE') {
    try {
      const { id } = req.params;
      const result = await sql`DELETE FROM testing WHERE id = ${id}`;
      return response.status(200).json({ result });
    } catch (error) {
      return response.status(500).json({ error });
    }
  } else {
    return response.status(405).json({error: 'Method Not Allowed'});
  }
}