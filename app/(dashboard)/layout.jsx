import React from "react";
import HeaderTemplate from "../Components/HeaderTemplate";

export default function Dashboard({ children }) {
  return (
    <div className="flex flex-col font-Fenix">
      <HeaderTemplate />
      <main>{children}</main>
    </div>
  );
}
