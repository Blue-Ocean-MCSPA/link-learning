"use client";
import { AppProvider } from "../Context/Context";
import HeaderTemplate from "../Components/HeaderTemplate";

export default function AdminPage() {
  return (
    <>
      <AppProvider>
        <HeaderTemplate />
      </AppProvider>
    </>
  );
}

// 'use client'
// import React from "react";
// import Login from "../components/Login";

// const mainLogin = () => {
//     return (
//         <Login />
//     )
// }

// export default mainLogin;
