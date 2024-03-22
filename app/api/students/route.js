import { NextRequest, NextResponse } from 'next/server';

export async function get(request) {
  const res = await fetch(process.env.POSTGRESURL+'/api/posts', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = await res.json();
  return NextResponse.json({ result });
}

export async function post(request) {
  const body = await request.json();
  const res = await fetch(process.env.POSTGRES_URL+'/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return NextResponse.json(data);
}
