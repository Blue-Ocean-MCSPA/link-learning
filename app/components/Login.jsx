"use client";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleLoginClick = async (event) => {
    try {
      const response = await fetch("/api/users");
      const data = await response.json();
      console.log(data.data.rows);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };

  return (
    <div className="flex">
      <div className="w-2/5 flex flex-col justify-center items-center h-screen bg-light-background">
        <div className="flex flex-col text-6xl w-full justify-center h-1/3">
          <div className="text-center tracking-wide font-sans text-light-foreground">
            Learning Link
          </div>
        </div>
        <div className="flex flex-col h-full justify-center items-center w-full bg-light-cursor">
          <div className="w-2/3 h-1/2">
            <div className="ml-2 mb-5 text-2xl text-light-active_selection">
              Login to your account
            </div>
            <div className="pb-2">
              <label
                htmlFor="username"
                className="block text-base mb-2"
              ></label>
              <input
                type="email"
                id="email"
                value={email}
                placeholder="Email"
                className="bg-light-background border border-2 border-light-comment rounded-full w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-light-inactive_selection"
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
                className="bg-light-background border border-2 border-light-comment rounded-full w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-light-inactive_selection"
                placeholder="Password"
              />
            </div>
            <div className="flex justify-center">
              <div
                className="w-1/2 text-center mr-4 mt-3 py-1 text-base text-light-background bg-light-foreground hover:opacity-75 hover:cursor-pointer rounded-full"
                onClick={handleLoginClick}
              >
                Login
              </div>
              <div className="border w-1/2 text-center mt-3 py-1 text-base text-light-background hover:text-light-inactive_selection hover:border-light-inactive_selection hover:cursor-pointer rounded-full">
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
          className="object-fill"
        ></img>
      </div>
    </div>
  );
};

export default Login;
