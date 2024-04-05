"use client";
import React from "react";
import Header from "@/app/Components/Header";
import SwitchPanels from "@/app/Components/Instructor/SwitchPanels";
import { AppWrapper } from "@/app/context";

export default function InstructorHome() {
  return (
    <div>
      <Header />
      <AppWrapper>
        <SwitchPanels />
      </AppWrapper>
    </div>
  );
}
