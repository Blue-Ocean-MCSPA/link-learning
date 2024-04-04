"use client";
import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/index";
import Link from "next/link";

const HeaderTemplate = () => {
  const { selectedRole, users, setUsers, darkMode, toggleDarkMode } =
    useContext(AppContext);
    let user = users;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/users");
        if (!response.ok) {
          throw new Errow("Failed to fetch users");
        }
        const responseData = await response.json();
        const userData = responseData.data.rows;
        if (userData.length > 0) {
          setUsers(userData[0]);
        }
        console.log("Users fetched from header", userData);
      } catch (error) {
        console.log("Error fetching users:", error);
        setUsers([]);
      }
    }
    fetchUsers();
  }, []);
console.log(user.first_name)

  return (
    <>
      <div className="banner flex justify-between items-center p-3 bg-light-inactive_selection">
        <div className="left-div pl-2 text-2xl text-light-foreground">
          <Link href="/">LearningLink</Link>
        </div>
        <h1 className="centered-div text-2xl text-black">Welcome {user.first_name}!</h1>
        {/* this is where the menu will be  -------------------------------*/}
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
                  <span className="text-xl">MJ</span>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderTemplate;