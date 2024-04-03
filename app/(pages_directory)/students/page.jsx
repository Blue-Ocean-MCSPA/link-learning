"use client";

import HeaderTemplate from "@/app/Components/admin/AdminHeaderTemplate.jsx";
import StudentView from "@/app/Components/student/StudentView";

export default function AdminPage() {
  return (
    <>
      <HeaderTemplate />
      <StudentView />
    </>
  );
}
