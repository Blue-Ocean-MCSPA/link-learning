"use client";
import React from "react";
import Login from "@/app/Components/Login";

import { AppWrapper } from "@/app/context/index.jsx";

const mainLogin = () => {
  return (
    <AppWrapper>
      <Login />
    </AppWrapper>
  );
};

export default mainLogin;
