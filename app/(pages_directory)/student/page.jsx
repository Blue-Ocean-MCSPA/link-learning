"use client";

import HeaderTemplate from "@/app/Components/HeaderTemplate.jsx";
import StudentDash from "@/app/Components/studentview/StudentDash.jsx"

export default function AdminPage() {
  return (
    <>
      <HeaderTemplate />
      <StudentDash />
    </>
  );
}