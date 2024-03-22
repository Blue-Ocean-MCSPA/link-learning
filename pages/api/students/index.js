import { sql } from '@vercel/postgres';
 
export default async function handler(request, response) {
  console.log(request.method)
  if (request.method == 'POST') {
    const { name, age } = request.body;
    try {
      const result = await sql`INSERT INTO testing (name, age) VALUES (${name}, ${age})`;
      return response.status(200).json({ result });
    } catch (error) {
      return response.status(500).json({ error });
    }
  }
  if (request.method == 'PATCH') {
    const { editedName, editedAge, id } = request.body;
    console.log(editedName, editedAge, id)
    try {
      const result = await sql`UPDATE testing SET name = ${editedName}, age = ${editedAge} WHERE id = ${id}`;
      return response.status(200).json({ result });
    } catch (error) {
      return response.status(500).json({ error });
    }
  }
  if (request.method == 'DELETE') {
    const { id } = request.body;
    console.log(id)
    try {
      const result = await sql`DELETE FROM testing WHERE id = ${id}`;
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