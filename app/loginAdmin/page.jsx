'use client'
import React from "react";
import Link from "next/link";

import InstructorDashboard from '@/app/components/InstructorView/InstructorDashboard';

const Login = () => {


    return (
        <div className="flex">
            <div className="w-2/5 flex flex-col justify-center items-center h-screen bg-light-background">
                <div className="flex flex-col text-6xl w-full justify-center h-1/3">
                    <div className="text-center tracking-wide font-sans text-light-foreground">
                        <Link href="/">Learning Link</Link>
                    </div>
                </div>
                <div className="flex flex-col h-full justify-center items-center w-full bg-light-cursor">
                    <div className="w-2/3 h-1/2">
                        <div className="ml-2 mb-3 text-sm text-light-active_selection">Welcome back, admin/instructor</div>
                        <div className="ml-2 mb-5 text-2xl text-white">Login to your account</div>
                        <div className="pb-2">
                            <label htmlFor="username" className="block text-base mb-2"></label>
                            <input type="text" id="username" className="bg-light-background border border-2 border-light-comment rounded-full w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-light-inactive_selection" placeholder="Email"/>
                        </div>
                        <div className="pb-2">
                            <label htmlFor="password" className="block text-base mb-2"></label>
                            <input type="text" id="password" className="bg-light-background border border-2 border-light-comment rounded-full w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-light-inactive_selection" placeholder="Password"/>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-1/2 text-center mr-4 mt-3 py-1 text-base text-light-background bg-light-foreground hover:opacity-75 hover:cursor-pointer rounded-full"
                            
                            >
                                <Link href="/instructorDash">Login</Link>
                            </div>
                            <div className="border w-1/2 text-center mt-3 py-1 text-base hover:text-light-inactive_selection hover:border-light-inactive_selection hover:cursor-pointer rounded-full">Sign Up</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-orange-50 w-3/5 h-screen overflow-hidden opacity-75">
                <img src="/fellowMugExtra2.webp" alt="placeholder"></img>
            </div>
        </div>   
    )
}

export default Login;