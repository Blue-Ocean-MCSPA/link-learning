import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
  const data = await sql`SELECT * FROM users`;
  return NextResponse.json({ data }, { status: 200 });
}

export async function POST(request) {
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
  } = await request.json();
  const data =
    await sql` INSERT INTO users ( email, password_hash, first_name, last_name, roleid, contact_info, certifications_and_training, performance_metrics, activity_log, grade, assignments_completed, course_started, course_ended, absent_days) VALUES ( ${email}, ${password_hash}, ${first_name}, ${last_name}, ${roleid}, ${contact_info}, COALESCE(${certifications_and_training}, 'NONE'), COALESCE(${performance_metrics},' 0%'), COALESCE(${activity_log}), COALESCE (${grade}),COALESCE( ${assignments_completed}, 0), ${course_started}, ${course_ended}, COALESCE(${absent_days}, 0))`;
  return NextResponse.json({ data }, { status: 200 });
}

export async function PATCH(request) {
  const { updatedStudent } = await request.json();
  const {  id, email, password_hash, first_name, last_name, roleid, contact_info, certifications_and_training, performance_metrics, activity_log, grade, assignments_completed, course_started, course_ended, absent_days} = updatedStudent; // Destructure all properties directly
  console.log(updatedStudent);
  const result = await sql`
        UPDATE users
        SET email = COALESCE(${email}, email),
            password_hash = COALESCE(${password_hash}, password_hash),
            first_name = COALESCE(${first_name}, first_name),
            last_name = COALESCE(${last_name}, last_name),
            roleid = COALESCE(${roleid}, roleid),
            contact_info = COALESCE(${contact_info}, contact_info),
            certifications_and_training = COALESCE(${certifications_and_training}, certifications_and_training),
            performance_metrics = COALESCE(${performance_metrics}, performance_metrics),
            activity_log = COALESCE(${activity_log}, activity_log),
            grade = COALESCE(${grade}, grade),
            assignments_completed = COALESCE(${assignments_completed}, assignments_completed),
            course_started = COALESCE(${course_started}, course_started),
            course_ended = COALESCE(${course_ended}, course_ended),
            absent_days = COALESCE(${absent_days}, absent_days)
        WHERE id = ${id} RETURNING *`;

  return NextResponse.json({ result }, { status: 200 });
}