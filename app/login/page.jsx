'use client'
import React from "react";
import Login from "../components/Login";
import { UserProvider } from "../Context/Context";

const mainLogin = () => {
    return (
        <UserProvider>
            <Login />
        </UserProvider>
    )
}

export default mainLogin;