'use client'
import React from "react";
import Login from "@/app/Components/Login.jsx";
import { useAppContext } from "@/app/context";
import { AppWrapper } from "@/app/context";

const mainLogin = () => {
    const { 
		cohorts, 
		setCohorts,
		loggedInRole,
		setLoggedInRole,

	} = useAppContext();

    return (
        <>
            <AppWrapper>
                <Login />
            </AppWrapper>
        </>
    )
}

export default mainLogin;