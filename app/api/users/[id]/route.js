import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request, id) {
  const data = request.json();
  id = parseInt(id.params.id) || data.id;
const result = await sql`SELECT * FROM users WHERE id = ${id}`;
return NextResponse.json({ result }, { status: 200 });
}

export async function DELETE(request, id) {
  const data = request.json();
  id = parseInt(id.params.id) || data.id;
const result =
  await sql`DELETE FROM users WHERE id = ${id} RETURNING *`;
return NextResponse.json({ result }, { status: 200 });
}

export async function PATCH(request, id) {
  const data = request.json();
  id = parseInt(id.params.id) || data.id;
const {  email, password_hash, first_name, last_name, roleid, contact_info, certifications_and_training, performance_metrics, activity_log, grade, assignments_completed, course_started, course_ended, absent_days} = data; // Destructure all properties directly

const result = await sql`
      UPDATE users
      SET email = COALESCE(${email}, email) 
          password_hash = COALESCE(${password_hash}, password_hash),
          first_name = COALESCE(${first_name}, first_name)
          last_name = COALESCE(${last_name}, last_name)
          roleid = COALESCE(${roleid}, roleid)
          contact_info = COALESCE(${contact_info}, contact_info)
          certifications_and_training = COALESCE(${certifications_and_training}, certifications_and_training)
          performance_metric = COALESCE(${performance_metrics}, performance_metric)
          activity_log = COALESCE(${activity_log}, activity_log)
          grade = COALESCE(${grade}, grade)
          assignments_completed = COALESCE(${assignments_completed}, assignments_completed)
          course_started = COALESCE(${course_started}, course_started)
          course_ended = COALESCE(${course_ended}, course_ended)
          absent_days = COALESCE(${absent_days}, absent_days)
      WHERE id = ${id}`;

return NextResponse.json({ result }, { status: 200 });
}