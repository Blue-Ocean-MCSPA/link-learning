"use client";

import React from "react";
import Header from "@/app/Components/Header";
import SwitchPanels from "@/app/Components/studentview/SwitchPanels";
import { AppWrapper } from "@/app/context";
import withAuth from "@/app/Components/withAuth";

function StudentPage() {
  return (
    <>
      <Header/>
      <AppWrapper>
        <SwitchPanels />
      </AppWrapper>
    </>
  );
  
}
export default withAuth(StudentPage, [3]);