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
  
  }
  try {
    const result = await sql`SELECT * FROM testing;`;
    return response.status(200).json({ result });
  } catch (error) {
    return response.status(500).json({ error });
  }
}