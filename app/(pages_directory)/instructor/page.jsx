"use client";
import React from "react";
import { AppWrapper } from "../../context";
import InstructorHeader from "@/app/Components/Instructor/InstructorHeader";
import SwitchPanels from "@/app/Components/Instructor/SwitchPanels";

export default function InstructorHome() {
  return (
    <div>
      <InstructorHeader />
      <SwitchPanels />
    </div>
  );
}
