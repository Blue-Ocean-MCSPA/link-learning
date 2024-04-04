"use client";
import { AppWrapper } from "../../context/index";
import SwitchPanels from "../../Components/admin/SwitchPanels";
import HeaderTemplate from "@/app/Components/admin/AdminHeaderTemplate.jsx";

export default function AdminPage() {
  return (
    <>
      <HeaderTemplate />
      <SwitchPanels />
    </>
  );
}