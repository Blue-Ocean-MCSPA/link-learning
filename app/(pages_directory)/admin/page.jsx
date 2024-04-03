"use client";
import { AppWrapper } from "../../context/index";
import SwitchPanels from "../../Components/admin/SwitchPanels";
import HeaderTemplate from "@/app/Components/HeaderTemplate.jsx";
import withAuth from "@/app/Components/withAuth";

 function AdminPage() {
  return (
    <>
        <HeaderTemplate />
        <SwitchPanels />
    </>
  );
}

export default withAuth(AdminPage, [1]);