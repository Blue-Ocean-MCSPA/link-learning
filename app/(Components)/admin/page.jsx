"use client";
import { AppWrapper } from "../../context/index";
import SwitchPanels from "./SwitchPanels";
import HeaderTemplate from "@/app/(Components)/HeaderTemplate.jsx";
import withAuth from "../withAuth";

 function AdminPage() {
  return (
    <>
      <AppWrapper>
        <HeaderTemplate />
        <SwitchPanels />
      </AppWrapper>
    </>
  );
}

export default withAuth(AdminPage, [1]);