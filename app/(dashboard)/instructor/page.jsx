"use client";
import React from "react";
import { AppWrapper } from "../../context";
import Instructor from "@/app/(Components)/InstructorView/Instructor";

export default function InstructorDashboard() {
  return (
    <div>
      <AppWrapper>
        <Instructor />
      </AppWrapper>
    </div>
  );
}
