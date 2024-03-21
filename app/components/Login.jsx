import React from "react";

const Login = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="text-9xl py-10">
                <h1 className="pb-6">LearningLink</h1>
            </div>
            <div className="flex flex-col py-6">
                <h3 className="text-center text-2xl">Login</h3>
                <div className="p-2">
                    <label htmlFor="username" className="block text-base mb-2"></label>
                    <input type="text" id="username" className="border border-black rounded-md w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-cyan-600" placeholder="Email"/>
                </div>
                <div className="p-2">
                    <label htmlFor="password" className="block text-base mb-2"></label>
                    <input type="text" id="password" className="border border-black rounded-md w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-cyan-600" placeholder="Password"/>
                </div>
            </div>
        </div>
    )
}

export default Login;