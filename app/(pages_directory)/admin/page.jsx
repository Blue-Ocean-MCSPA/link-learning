"use client";
import SwitchPanels from "../../Components/admin/SwitchPanels";
import Header from "@/app/Components/Header";
import withAuth from "@/app/Components/withAuth";

function AdminPage() {
  return (
    <>
      <Header />
      <SwitchPanels />
    </>
  );
}

export default withAuth(AdminPage, [1]);