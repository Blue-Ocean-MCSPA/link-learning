'use client'
import React from 'react'
import Cookies from 'universal-cookie'
import { verifyJwt } from '@/lib/auth';

export default function useAuth() {
    const [auth, setAuth] = React.useState(null);
    const getVerifiedtoken = async () => {
        const cookies = new Cookies();
        const token = cookies.get("token") ?? null;
        const verifiedToken = await verifyJwt(token);
        setAuth(verifiedToken);
    };
    React.useEffect(() => {
        getVerifiedtoken();
    }, []);
    return auth;
}
export async function logout() {
    // Destroy the session
    Cookies().set("session", "", { expires: new Date(0) });
  }
  
