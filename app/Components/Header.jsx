"use client";
import React, { useContext } from "react";
import { AppContext } from "../context/index";
import Link from "next/link";

const Header = () => {
  const { loggedInUser, darkMode, toggleDarkMode } = useContext(AppContext);

  let firstInitial = "";
  let secondInitial = "";

  // Check if loggedInUser is not null before accessing its properties
  if (loggedInUser) {
    firstInitial = loggedInUser.first_name
      ? loggedInUser.first_name.charAt(0)
      : "";
    secondInitial = loggedInUser.first_name
      ? loggedInUser.last_name.charAt(0)
      : "";
  }

  return (
    <>
      <div className="banner flex justify-between items-center p-3 bg-light-inactive_selection">
        <div className="left-div pl-2 text-2xl text-light-foreground">
          <Link href="/">LearningLink</Link>
        </div>
        <h1 className="centered-div text-2xl text-black">
          Welcome{" "}
          {loggedInUser && loggedInUser.first_name
            ? loggedInUser.first_name
            : ""}
          !
        </h1>
        <ul className="flex-row menu bg-base-600 lg:menu-horizontal rounded-box shadow-2xl">
          <li className="flex">
            <Link href="/msg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="text-black"
                className="w-10 h-10"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              Inbox
              <span className="badge badge-sm">99+</span>
            </Link>
          </li>
          <li className="flex ">
            <a>
              <div
                className="h-10 border rounded-full hover:border-2 border-light-background dark:bg-dark-foreground dark:border dark:border-dark-foreground dark:rounded-full dark:hover:border-2 dark:hover:border-dark-numbers cursor-pointer"
                onClick={toggleDarkMode}
              >
                <img
                  src="/light-dark-mode.svg"
                  className={`h-full w-full object-cover transition-transform ${
                    darkMode ? "transform rotate-180" : ""
                  }`}
                />
              </div>
            </a>
          </li>
          <li className="flex">
            <Link href="/login">
              <div className="avatar online placeholder">
                <div className="bg-neutral text-neutral-content rounded-full w-12">
                  <span className="text-xl">
                    {firstInitial}
                    {secondInitial}
                  </span>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
