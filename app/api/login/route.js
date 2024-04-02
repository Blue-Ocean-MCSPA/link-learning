import bcrypt from 'bcrypt';
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { SignJWT } from 'jose';
import { getJwtSecretKey } from '@/lib/auth';
import { jwtVerify } from 'jose';

export async function POST(request) {

    const { email, password } = await request.json();
    console.log(email, password)
    const data = await sql`SELECT * FROM users WHERE email = ${email}`;

    if (data.rowCount == 0) {
        return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    const user = data.rows[0];
    const passwordMatch = await bcrypt.compare(password, user.password_hash);
    console.log(user.password_hash, password, passwordMatch)
    console.log(user, 'user')
    
    if (!passwordMatch) {
        return NextResponse.json({ message: "Incorrect password" }, { status: 401 });
    } else {
        const token = await new SignJWT({
            email: user.email,
            roleid: user.roleid
        })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime("1min")
        .sign(getJwtSecretKey());

        const decodeToken = async (token) => {
            try {
                const decoded = await jwtVerify(token, getJwtSecretKey());
                // console.log(decoded.payload);
                return decoded;
            } catch (error) {
                console.error('Error decoding token:', error);
                return null;
            }
        }   
        const decodedToken = await decodeToken(token);
        // console.log(decodedToken);

        const cookie = `token=${token}; Path=/; HttpOnly`;
        return NextResponse.json({ user, token, decodedToken }, {
            status: 200,
            headers: {
                'content-type': "application/json",
                'set-cookie': cookie
            },
        });


        } 

    }




    const saltRounds = 10;
    const plainTextPassword = 'hashed_password';
    const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds);