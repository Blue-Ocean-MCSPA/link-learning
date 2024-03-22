import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
    const { id } = request.query;
    try {
        const result = await sql`SELECT * FROM testing WHERE id = ${id}`;
        return response.status(200).json({ result });
    } catch (error) {
        return response.status(500).json({ error });
    }
}
