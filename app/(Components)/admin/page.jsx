"use client";
import { AppWrapper } from "../../context/index";
import Admin from "./Admin.jsx";
import AdminDash from "./AdminDash.jsx";
import HeaderTemplate from "@/app/(Components)/HeaderTemplate.jsx";

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
