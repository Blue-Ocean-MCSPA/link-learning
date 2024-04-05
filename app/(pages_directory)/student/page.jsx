"use client";

import React from "react";
import Header from "@/app/Components/Header";
import SwitchPanels from "@/app/Components/studentview/SwitchPanels";
import { AppWrapper } from "@/app/context";

export default function AdminPage() {
  return (
    <>
      <Header/>
      <AppWrapper>
        <SwitchPanels />
      </AppWrapper>
    </>
  );
}