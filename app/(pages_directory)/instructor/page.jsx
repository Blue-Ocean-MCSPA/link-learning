"use client";
import React from "react";
import Header from "@/app/Components/Header";
import SwitchPanels from "@/app/Components/Instructor/SwitchPanels";
import { AppWrapper } from "@/app/context";
import withAuth from "@/app/Components/withAuth";

function InstructorHome() {
  return (
    <div>
      <Header />
      <AppWrapper>
        <SwitchPanels />
      </AppWrapper>
    </div>
  );
}

export default withAuth(InstructorHome, [2]);
