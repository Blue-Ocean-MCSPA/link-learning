"use client";
import React from "react";
import { AppWrapper } from "../../context";
import Instructor from "@/app/Components/InstructorView/Instructor";
import withAuth from "@/app/Components/withAuth";

function InstructorDashboard() {
  return (
    <div>
        <Instructor />
    </div>
  );
}

export default withAuth(InstructorDashboard, [2]);