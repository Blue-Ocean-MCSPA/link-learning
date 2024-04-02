"use client";
import { AppWrapper } from "../../context/index";
import SwitchPanels from "./SwitchPanels";
import HeaderTemplate from "@/app/(Components)/HeaderTemplate.jsx";

export default function AdminPage() {
  return (
    <>
      <AppWrapper>
        <HeaderTemplate />
        <SwitchPanels />
      </AppWrapper>
    </>
  );
}
