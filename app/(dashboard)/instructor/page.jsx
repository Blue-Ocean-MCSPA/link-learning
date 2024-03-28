'use client'
import React from "react";
import { UserProvider } from "../../Context/Context";
import Instructor from "@/app/Components/InstructorView/Instructor";

export default function InstructorDashboard() {

    return (
        <div>
            <UserProvider>
                <Instructor />
            </UserProvider>
        </div>
    );
}