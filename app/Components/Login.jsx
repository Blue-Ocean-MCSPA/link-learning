"use client";

import React, { useState, useContext } from "react";
import { AppContext, useAppContext } from "../context";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const { loggedInRole, changeLoggedInRole } = useContext(AppContext);
  const { selectedRole, setSelectedRole, changeSelectedRole } = useContext(AppContext);
  const { darkMode, toggleDarkMode } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  console.log("Dark Mode is: ", darkMode);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = async (event) => {
    try {
      const response = await fetch(`/api/users`); // all the users
      const data = await response.json();
      const matchedRows = data.data.rows.filter((row) => {
        return row.email === email && row.password_hash === password;
      });
      if (matchedRows.length > 0) {
        console.log("Email and password matched");
        console.log("role id for this matched user: ", matchedRows[0].roleid);
        const newRole = await changeLoggedInRole(matchedRows[0].roleid);
        console.log("expected: ", matchedRows[0].roleid, "actual: ", newRole);

        if (newRole === "1") {
          console.log("BEFORE set role: ", selectedRole);//-> wrong
          const loginRole = await changeSelectedRole("Admin");
          console.log("AFTER set role: ", selectedRole, loginRole);// -> Admin
          router.push("/admin");
        } else if (newRole === "2") {
          console.log("Instructor route pushed");
          router.push("/instructor");
          changeSelectedRole("instructor");
        } else if (newRole === "3") {
          router.push("/student");
        }
      } else {
        alert(
          "STOP! You violated the law. Pay the court a fine or serve your sentence. Your stolen goods are now forfeit."
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={`${darkMode && "dark"} flex overflow-hidden w-full h-screen ${darkMode ? "bg-dark-cursor" : "bg-light-foreground"}`}>
      <div className="w-2/5 flex flex-col bg-light-background dark:bg-dark-background  justify-between">
        <div className="pt-8 h-1/5 ml-24 text-6xl text-light-foreground dark:text-dark-foreground">
          <Link href="/">LearningLink</Link>
        </div>
        <div className="flex flex-col h-full justify-center items-center w-full bg-light-cursor">
          <div className="w-2/3 h-1/2">
            <div className="ml-2 mb-5 text-2xl text-light-active_selection">
              Login to your account
            </div>
            <div className="pb-2">
              <label htmlFor="email" className="block text-base mb-2"></label>
              <input
                type="email"
                id="email"
                value={email}
                placeholder="Email"
                autoComplete="email"
                className="bg-light-background border border-light-comment rounded-full w-full text-base text-light-foreground px-2 py-1 focus:outline-none focus:ring-0 focus:border-light-inactive_selection"
                onChange={handleEmailChange}
              />
            </div>
            <div className="pb-2">
              <label
                htmlFor="password"
                className="block text-base mb-2"
              ></label>
              <input
                type="text"
                id="password"
                value={password}
                placeholder="Password"
                className="bg-light-background border border-light-comment rounded-full w-full text-base text-light-foreground px-2 py-1 focus:outline-none focus:ring-0 focus:border-light-inactive_selection"
                onChange={handlePasswordChange}
              />
            </div>
            <div className="flex justify-center">
              <div
                className="w-1/2 text-center mr-4 mt-3 py-1 text-base text-light-background bg-light-foreground hover:opacity-75 hover:cursor-pointer rounded-full"
                onClick={handleLoginClick}
              >
                Login
              </div>
              <div className="border border-light-background w-1/2 text-center mt-3 py-1 text-base text-light-background hover:text-light-inactive_selection hover:border-light-inactive_selection hover:cursor-pointer rounded-full">
                Sign Up
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-orange-50 w-3/5 h-full opacity-75">
        <img
          src="/fellowMugExtra2.webp"
          alt="placeholder"
          className="object-cover"
        ></img>
      </div>
    </div>
  );
};

export default Login;
