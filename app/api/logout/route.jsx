import bcrypt from 'bcrypt';
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { SignJWT } from 'jose';
import { getJwtSecretKey } from '@/lib/auth';
import { jwtVerify } from 'jose';

export async function POST(request) {
    const cookieStore = cookies();


   
    }