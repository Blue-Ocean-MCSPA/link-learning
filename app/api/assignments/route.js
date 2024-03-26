import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

// Get all assignments
export async function GET_all_assignments(request) {
    const data = await sql`SELECT * FROM assignments`;
    return NextResponse.json({ data }, { status: 200 });
}

// Get single assignment
export async function GET_single_assignment(request) {
    const { id } = request.params;
    const assignment = await sql`SELECT * FROM assignments WHERE id = ${id}`;
    if (!assignment) {
        return NextResponse.json({ error: "Assignment not found" }, { status: 404 });
    }
    return NextResponse.json({ assignment }, { status: 200 });
}

// Create an assignment
export async function POST_create_assignment(request) {
    const { cohortID, title, description, due_date } = request.body;
    const newAssignment = await sql`INSERT INTO assignments (cohortID, title, description, due_date) VALUES (${cohortID}, ${title}, ${description}, ${due_date}) RETURNING *`;
    return NextResponse.json({ newAssignment }, { status: 201 });
}

// Delete an assignment
export async function DELETE_assignment(request) {
    const { id } = request.params;
    const deletedAssignment = await sql`DELETE FROM assignments WHERE id = ${id} RETURNING *`;
    if (!deletedAssignment) {
        return NextResponse.json({ error: "Assignment not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Assignment deleted successfully" }, { status: 200 });
}

// Update an assignment
export async function PUT_update_assignment(request) {
    const { id } = request.params;
    const { title, description, due_date } = request.body;
    const updatedAssignment = await sql`UPDATE assignments SET title = ${title}, description = ${description}, due_date = ${due_date} WHERE id = ${id} RETURNING *`;
    if (!updatedAssignment) {
        return NextResponse.json({ error: "Assignment not found" }, { status: 404 });
    }
    return NextResponse.json({ updatedAssignment }, { status: 200 });
}