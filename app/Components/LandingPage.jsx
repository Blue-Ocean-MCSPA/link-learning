import React from "react";
import { useState } from "react";

const LandingPage = () => {
    const [ isExpanded, setIsExpanded ] = useState(false);

    const toggleDropdown = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className="flex-col w-full h-screen p-4">
            <div className="flex border justify-between h-1/5">
                <div className="border">LearningLink</div>
                <div className="flex-col">
                    <div className="flex border h-1/4 w-[80px] justify-center ml-auto cursor-pointer"
                    onClick={toggleDropdown}
                    >
                        Login
                        <img src="/dropdown-icon.svg" className={`w-3 transition-transform ${
                            isExpanded ? "transform rotate-180" : ""
                        }`}/>
                    </div>

                    {isExpanded && (
                        <div>
                            <div className="border px-2 py-1 cursor-pointer hover:bg-light-active_selection"
                            //onClick= route <Link href="/login/admin"/>
                            >
                                Admin/Instructor</div>
                            <div className="border px-2 py-1 text-center cursor-pointer hover:bg-light-active_selection">Student</div>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex border justify-evenly h-4/5">
                <div className="border">blurb</div>
                <div className="border">pic container</div>
            </div>
        </div>
    )
}

export default LandingPage;