import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request, id) {
  const data = await request.json();
  id = parseInt(id.params.id) || data.id;
  const result = await sql`SELECT * FROM users WHERE id = ${id}`;
  return NextResponse.json({ result }, { status: 200 });
}

export async function DELETE(request, id) {
  const data = await request.json();
  id = parseInt(id.params.id) || data.id;
  const result = await sql`DELETE FROM users WHERE id = ${id} RETURNING *`;
  return NextResponse.json({ result }, { status: 200 });
}

export async function PATCH(request, id) {
  const data = await request.json();
  id = parseInt(id.params.id) || data.id;
  console.log(id);
  const {
    email,
    password_hash,
    first_name,
    last_name,
    roleid,
    contact_info,
    certifications_and_training,
    performance_metrics,
    activity_log,
    grade,
    assignments_completed,
    course_started,
    course_ended,
    absent_days,
  } = data; // Destructure all properties directly
  console.log(data.email);
  const result = await sql`
      UPDATE users
      SET email = COALESCE(${data.email}, email),
          password_hash = COALESCE(${data.password_hash}, password_hash),
          first_name = COALESCE(${data.first_name}, first_name),
          last_name = COALESCE(${data.last_name}, last_name),
          roleid = COALESCE(${data.roleid}, roleid),
          contact_info = COALESCE(${data.contact_info}, contact_info),
          certifications_and_training = COALESCE(${data.certifications_and_training}, certifications_and_training),
          performance_metrics = COALESCE(${data.performance_metrics}, performance_metrics),
          activity_log = COALESCE(${data.activity_log}, activity_log),
          grade = COALESCE(${data.grade}, grade),
          assignments_completed = COALESCE(${data.assignments_completed}, assignments_completed),
          course_started = COALESCE(${data.course_started}, course_started),
          course_ended = COALESCE(${data.course_ended}, course_ended),
          absent_days = COALESCE(${data.absent_days}, absent_days)
      WHERE id = ${id}`;

  return NextResponse.json({ result }, { status: 200 });
}
