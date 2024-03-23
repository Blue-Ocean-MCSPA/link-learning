import Link from "next/link";
import React from "react";
import { useState } from "react";

const LandingPage = () => {
    const [ isExpanded, setIsExpanded ] = useState(false);

    const toggleDropdown = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className="flex-col w-full h-screen bg-light-foreground">
            <div className="bg-light-background border border-light-background rounded-tl-full rounded-r-xl flex justify-between h-1/5">
                <div className="pt-8 pl-16 text-6xl text-light-foreground">LearningLink</div>
                <div className="flex-col">
                    <div className="flex pt-2 pr-1 h-1/4 w-[80px] justify-center ml-auto cursor-pointer"
                    onClick={toggleDropdown}
                    >
                        Login
                        <img src="/dropdown-icon.svg" className={`w-2 transition-transform ${
                            isExpanded ? "transform rotate-180" : ""
                        }`}/>
                    </div>

                    {isExpanded && (
                        <div className="border border-light-active_selection bg-light-active_selection rounded-l-xl pl-4 py-1 mt-2">
                            <div className="pr-2 cursor-pointer hover:text-light-cursor">
                                <Link href="/loginAdmin">Admin/Instructor</Link>
                            </div>
                            <div className="pr-2 pt-2 text-right cursor-pointer hover:text-light-cursor">
                                <Link href="/loginStudent">Student</Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex border border-light-cursor rounded-b-xl bg-light-cursor h-4/5 justify-between">
                <div className="w-2/5 mx-16 mt-16">
                    <div className="text-3xl pb-4 text-light-background">Drifting through the wind? Wanting to start again?</div>
                    <hr className="text-light-background"></hr>
                    <div className="text-xl pt-6 text-light-inactive_selection"> Overcome life. See that mountain? You can climb it. Our formula has worked for over 10 years. With 16 times the detail - it just works! Let us be your link to learning.</div>
                </div>
                <div className="my-12 mr-12">
                    <img src="/student.png" className="h-full object-cover rounded-xl"></img>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;