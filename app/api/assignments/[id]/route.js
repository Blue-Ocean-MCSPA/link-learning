import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request, id) {
    console.log("This is is...", id.params.id)
    id = parseInt(id.params.id)
  const result = await sql`SELECT * FROM assignments WHERE id = ${id}`;
  return NextResponse.json({ result }, { status: 200 });
}

export async function DELETE(request, id) {
    id = parseInt(id.params.id)
  const result =
    await sql`DELETE FROM assignments WHERE id = ${id} RETURNING *`;
  return NextResponse.json({ result }, { status: 200 });
}

export async function PATCH(request, id) {
    id = parseInt(id.params.id)
  const { cohortid, title, description, dueDate } = data; // Destructure all properties directly

  const result = await sql`
        UPDATE assignments
        SET cohortid = COALESCE(${cohortid}, cohortid) 
            title = COALESCE(${title}, title), 
            description = COALESCE(${description}, description),
            dueDate = COALESCE(${dueDate}, dueDate)
        WHERE id = ${id}`;

  return NextResponse.json({ result }, { status: 200 });
}
