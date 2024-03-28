'use client'
import React from "react";
import Login from "@/app/Components/Login.jsx";
import { loginProvider } from '@/app/context/Context.jsx';

const mainLogin = () => {
    return (
        <loginProvider>
            <Login />
        </loginProvider>
    )
}

export default mainLogin;