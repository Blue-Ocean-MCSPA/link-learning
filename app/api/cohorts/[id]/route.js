import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request, id) {
    const data = request.json();
    id = parseInt(id.params.id) || data.id;
  const result = await sql`SELECT * FROM cohorts WHERE id = ${id}`;
  return NextResponse.json({ result }, { status: 200 });
}

export async function DELETE(request, id) {
    const data = request.json();
    id = parseInt(id.params.id) || data.id;
  const result =
    await sql`DELETE FROM assignments WHERE id = ${id} RETURNING *`;
  return NextResponse.json({ result }, { status: 200 });
}

export async function PATCH(request, id) {
    const data = request.json();
    id = parseInt(id.params.id) || data.id;
  const { cohort_name, description, instructorid} = data; // Destructure all properties directly

  const result = await sql`
        UPDATE assignments
        SET cohortid = COALESCE(${cohort_name}, cohort_name) 
            description = COALESCE(${description}, description),
            dueDate = COALESCE(${instructorid}, instructorid)
        WHERE id = ${id}`;

  return NextResponse.json({ result }, { status: 200 });
}
