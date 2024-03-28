"use client";
import AppContext from "../../Context/Context";
import HeaderTemplate from "../../Components/HeaderTemplate";

export default function AdminPage() {
  return (
    <>
      <AppContext.Provider>
        <HeaderTemplate />
      </AppContext.Provider>
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
