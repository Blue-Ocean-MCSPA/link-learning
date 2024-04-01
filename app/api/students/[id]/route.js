import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

// Get students depending on cohortID
export async function GET (request, { params }) {
	try {
		const id = params.id; // Access id directly from params
		console.log("Getting id of ", parseInt(id));

		const studentsInCohort = await sql`
            SELECT u.id, u.email, u.first_name, u.last_name, u.roleID,
                u.contact_info, u.certifications_and_training, u.performance_metrics,
                u.activity_log, u.grade, u.assignments_completed, u.course_started, u.course_ended,
                u.absent_days
            FROM students s
            JOIN users u 
            ON s.userID = u.id
            WHERE s.cohortID = ${id};
        `;
		return NextResponse.json({ studentsInCohort }, { status: 200 });
	} catch (error) {
		console.error('Error executing query:', error);
		return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
	}
}