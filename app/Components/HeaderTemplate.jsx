import React, { useState, useContext, useEffect } from "react";
import Instructor from "./InstructorView/Instructor";

const HeaderTemplate = () => {

    return (
        <div className="flex flex-col font-Fenix">
            <div className="banner flex justify-between items-center p-4 bg-slate-800">
                <div className="left-div"></div>
                <h1 className="centered-div">Instructor Dashboard</h1>
                <div className="right-div flex bg-slate-100 border rounded">
                    <ul className="flex justify-center items-center">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="text-black" className="w-10 h-10">
                                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                            </svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="text-black" className="w-10 h-10">
                                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
                            </svg>
                        </li>
                        <li><div className="flex justify-center items-center rounded-full w-12 h-12 m-2 bg-blue-300 text-black">MH</div></li>
                    </ul>
                </div>
            </div>
            <Instructor />
        </div>
    );
}

export default HeaderTemplate;

