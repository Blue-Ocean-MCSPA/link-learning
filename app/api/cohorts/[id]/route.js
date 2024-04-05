import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const id = params.id; // Access id directly from params
    console.log("Getting id of ", parseInt(id));

    const instructorCohorts =
      await sql`SELECT c.id, c.cohort_name, c.description
			FROM cohort c
			JOIN users u ON c.instructorID = u.id
			WHERE u.id = ${id}`;
    return NextResponse.json({ instructorCohorts }, { status: 200 });
  } catch (error) {
    console.error("Error executing query:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
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
  const { cohort_name, description, instructorid } = data;

  const result = await sql`
        UPDATE assignments
        SET cohortid = COALESCE(${cohort_name}, cohort_name) 
            description = COALESCE(${description}, description),
            dueDate = COALESCE(${instructorid}, instructorid)
        WHERE id = ${id}`;

  return NextResponse.json({ result }, { status: 200 });
}
