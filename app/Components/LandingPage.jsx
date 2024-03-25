import Link from "next/link";
import React from "react";
import { useState } from "react";

const LandingPage = () => {
    const [ isExpanded, setIsExpanded ] = useState(false);
    const [ darkMode, setDarkMode ] = useState(false);

    const toggleDropdown = () => {
        setIsExpanded(!isExpanded);
    }

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);    
    }

    return (
        <div className={`${darkMode && 'dark'} flex-col w-full h-screen ${darkMode ? 'bg-dark-cursor' : 'bg-light-foreground'}`}>
            <div className="bg-light-background dark:bg-dark-background border border-light-background dark:border-dark-background rounded-tl-full rounded-r-xl flex justify-between h-1/5">
                <div className="pt-8 pl-16 text-6xl text-light-foreground dark:text-dark-foreground">LearningLink</div>
                <div className="flex">
                    <div className="h-1/5 mt-2 mr-1 border rounded-full hover:border-2 border-light-background dark:bg-dark-foreground dark:border dark:border-dark-foreground dark:rounded-full dark:hover:border-2 dark:hover:border-dark-numbers cursor-pointer"
                    onClick={toggleDarkMode}
                    >
                        <img src='/light-dark-mode.svg' className={`h-full w-full object-cover transition-transform ${
                                darkMode ? "transform rotate-180" : ""
                            }`}/>
                    </div>
                    <div className="flex-col">
                        
                        <div className="flex mt-2 w-[80px] justify-center ml-auto cursor-pointer hover:text-light-cursor text-light-foreground dark:text-dark-foreground dark:hover:text-dark-numbers"
                        onClick={toggleDropdown}
                        >
                            Login
                            <img src="/dropdown-icon.svg" className={`w-2 transition-transform ${
                                isExpanded ? "transform rotate-180" : ""
                            }`}/>
                        </div>

                        {isExpanded && (
                            <div className="border border-light-active_selection bg-light-active_selection dark:border-dark-active_selection dark:bg-dark-active_selection rounded-l-xl pl-4 py-1 mt-2">
                                <div className="pr-2 cursor-pointer hover:text-light-cursor dark:text-dark-foreground dark:hover:text-dark-numbers">
                                    <Link href="/login">Admin/Instructor</Link>
                                </div>
                                <div className="pr-2 pt-2 text-right cursor-pointer hover:text-light-cursor dark:text-dark-foreground dark:hover:text-dark-numbers">
                                    <Link href="/login">Student</Link>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
            <div className="flex border border-light-cursor dark:border-dark-active_selection rounded-b-xl bg-light-cursor dark:bg-dark-active_selection h-4/5 justify-between">
                <div className="w-2/5 mx-16 mt-16">
                    <div className="text-3xl pb-4 text-light-background dark:text-dark-cursor">Drifting through the wind? Wanting to start again?</div>
                    <hr></hr>
                    <div className="text-xl pt-6 text-light-inactive_selection dark:text-dark-cursor"> Overcome life. See that mountain? You can climb it. Our formula has worked for over 10 years. With 16 times the detail - it just works! Let us be your link to learning.</div>
                </div>
                <div className="my-12 mr-12">
                    <img src="/student.png" className="h-full object-cover rounded-xl"></img>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;