import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
  const { name, age } = request.body;
  const { id } = request.query;

  if (request.method == 'POST') {
    try {
      const result = await sql`INSERT INTO testing (name, age) VALUES (${name}, ${age})`;
      return response.status(200).json({ result });
    } catch (error) {
      return response.status(500).json({ error });
    }
  
  } else if (request.method == 'GET') {
    try {
      if (id) {
        // If ID is provided, fetch a single record
        const result = await sql`SELECT * FROM testing WHERE id = ${id}`;
        return response.status(200).json({ result });
      } else {
        // If ID is not provided, fetch all records
        const result = await sql`SELECT * FROM testing`;
        return response.status(200).json({ result });
      }
    } catch (error) {
      return response.status(500).json({ error });
    }
  } else {
    return response.status(405).json({ error: 'Method Not Allowed' });
  }
}


/*else if (request.method === 'DELETE') {
    try {
      //const  = await sql`DELETE FROM testing WHERE id = ${id} RETURNING ALL`;
      //return response.status(200).json({ result });
      const deleteUser = users.find(
          (user) => user.id === parseInt(id)
          )
          const index = users.findIndex((user) => user.id === parseInt(id))
          users.splice(index, 1)
          return response.status(200).json({ deleteUser });
    } catch (error) {
      return response.status(500).json({ error });
    }
  } else {
    return response.status(405).json({error: 'Method Not Allowed'});
  }*/