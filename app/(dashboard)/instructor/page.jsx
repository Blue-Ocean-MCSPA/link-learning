"use client";
import React from "react";
import { AppWrapper } from "../../context";
import Instructor from "@/app/(Components)/instructor/instructor";

export default function InstructorDashboard() {
  return (
    <div>
      <AppWrapper>
        <Instructor />
      </AppWrapper>
    </div>
  );
}
