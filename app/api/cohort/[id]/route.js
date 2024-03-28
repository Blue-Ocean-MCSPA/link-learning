import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

// Get cohorts depending on instructorId
export async function GET (request, { params }) {
	try {
		const id = params.id; // Access id directly from params
		console.log("Getting id of ", parseInt(id));

		const instructorCohorts = await sql`SELECT c.id, c.cohort_name, c.description
			FROM cohort c
			JOIN users u ON c.instructorID = u.id
			WHERE u.id = ${id}`;
		return NextResponse.json({ instructorCohorts }, { status: 200 });
	} catch (error) {
		console.error('Error executing query:', error);
		return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
	}
}