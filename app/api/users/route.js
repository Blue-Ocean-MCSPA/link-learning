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
