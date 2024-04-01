import { jwtVerify } from "jose";
import  dotenv from "dotenv";
dotenv.config();

export function getJwtSecretKey() {
    const secret = 'key';
    if (!secret) {
        throw new Error("JWT_SECRET is not defined");
    }
    return new TextEncoder().encode(secret);
}

export async function verifyJwt(token) {
    try {
        const { payload } = await jwtVerify(token, getJwtSecretKey());
        return payload;
    } catch (error) {
        console.error(error);
        return null;
    }
}