"use client";
import { AppWrapper } from "../../context/index";

import HeaderTemplate from "@/app/Components/HeaderTemplate.jsx";

export default function AdminPage() {
  return (
    <>
      <HeaderTemplate />
      <StudentView />
    </>
  );
}
