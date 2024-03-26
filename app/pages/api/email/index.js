import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export default async function handler(req, res) {

    const data = await sql`SELECT email FROM users}`
    NextResponse.json({ data }, { status: 200 })
}