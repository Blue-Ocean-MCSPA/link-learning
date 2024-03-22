import React from "react";

const Login = () => {
    return (
        <div className="flex">
            <div className="w-2/5 flex flex-col justify-center items-center h-screen bg-orange-50">
                <div className="flex flex-col text-5xl w-full justify-center h-1/3">
                    <h1 className="text-center tracking-wide font-sans text-slate-400">Learning Link</h1>
                </div>
                <div className="flex flex-col h-full justify-center items-center w-full bg-blue-100">
                    <div className="w-2/3 h-1/2">
                        <div className="ml-2 mb-5 text-2xl text-blue-400">Login to your account</div>
                        <div className="pb-2">
                            <label htmlFor="username" className="block text-base mb-2"></label>
                            <input type="text" id="username" className="border border-transparent rounded-full w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-sky-300" placeholder="Email"/>
                        </div>
                        <div className="pb-2">
                            <label htmlFor="password" className="block text-base mb-2"></label>
                            <input type="text" id="password" className="border border-transparent rounded-full w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-sky-300" placeholder="Password"/>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-1/2 text-center mr-4 mt-3 py-1 text-base text-white bg-blue-400 hover:bg-blue-300 hover:cursor-pointer rounded-full">Login</div>
                            <div className="w-1/2 text-center mt-3 py-1 text-base text-blue-400 hover:text-blue-300 border border-blue-400 hover:border-blue-300 hover:cursor-pointer rounded-full">Sign Up</div>
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