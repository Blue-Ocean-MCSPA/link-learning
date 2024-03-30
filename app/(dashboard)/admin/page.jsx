"use client";
import { AppWrapper } from "@/app/context";
import Admin from "../../Components/admin/Admin.jsx";
import AdminDash from "../../Components/admin/AdminDash.jsx";
import HeaderTemplate from "@/app/Components/HeaderTemplate.jsx";

export default function AdminPage() {
  return (
    <>
      <AppWrapper>
        <HeaderTemplate />
        <Admin />
      </AppWrapper>
    </>
  );
}
