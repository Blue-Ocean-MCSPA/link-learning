import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ roleid, setRoleid ] = useState('');
    const router = useRouter();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleLoginClick = async (event) => {
        try {
            console.log(email, password)
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            console.log(data);
            if (response.ok) {
                // 1 = admin, 2 = instructor, 3 = student
                if (roleid == 1) {
                    router.push('/admin');
                } else if (roleid == 2) {
                    router.push('/instructor');
                } else if (roleid == 3) {
                    router.push('/student');
                }
            }

        }
        catch (error) {
            console.error(error);
        }
    }
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
                        <div className="ml-2 mb-5 text-2xl text-light-active_selection">Login to your account</div>
                        <div className="pb-2">
                            <label htmlFor="email" className="block text-base mb-2"></label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                placeholder="Email"
                                autoComplete="email"
                                className="bg-light-background border border-2 border-light-comment rounded-full w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-light-inactive_selection"
                                onChange={handleEmailChange}
                            />
                        </div>
                        <div className="pb-2">
                            <label htmlFor="password" className="block text-base mb-2"></label>
                            <input 
                            type="text" 
                            id="password"
                            value={password}
                            className="bg-light-background border border-2 border-light-comment rounded-full w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-light-inactive_selection" 
                            placeholder="Password"
                            onChange={handlePasswordChange}
                            />
                        </div>
                        <div className="flex justify-center">
                            <div className="w-1/2 text-center mr-4 mt-3 py-1 text-base text-light-background bg-light-foreground hover:opacity-75 hover:cursor-pointer rounded-full"
                            onClick={handleLoginClick}
                            >Login
                            </div>
                            <div className="border border-light-background w-1/2 text-center mt-3 py-1 text-base text-light-background hover:text-light-inactive_selection hover:border-light-inactive_selection hover:cursor-pointer rounded-full">Sign Up</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-orange-50 w-3/5 h-full opacity-75">
                <img src="/fellowMugExtra2.webp" alt="placeholder" className="object-cover"></img>
            </div>
        </div>
        
    )
}

export default Login;