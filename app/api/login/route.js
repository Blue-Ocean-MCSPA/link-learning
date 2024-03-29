import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
import { sql } from '@vercel/postgres';

export async function POST(request) {
    const { email, password } = await request.json();
    console.log(email, password)
}