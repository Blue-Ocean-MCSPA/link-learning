import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export default async function handler(req, res) {
    const { id } = req.query
    // const data = await sql`SELECT email FROM users WHERE id = ${id}`
    // NextResponse.json({ data }, { status: 200 })
    res.status(200).json({ id })
}