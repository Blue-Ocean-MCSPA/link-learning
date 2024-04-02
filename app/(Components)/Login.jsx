import Link from "next/link";
import React, { useState } from "react";
import { redirect, useRouter, useContext } from "next/navigation";
import { AppContext, useAppContext } from "../context";
import { jwtVerify } from "jose";
import { getJwtSecretKey } from '@/lib/auth';

import dotenv from "dotenv";
dotenv.config();

const Login = () => {
  // const { loggedInRole, changeLoggedInRole, currentInstructor } = useContext(AppContext);

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ roleid, setRoleid ] = useState('');
    const [ token, setToken ] = useState('');
    const [ secret, setSecret ] = useState('');
    const router = useRouter();
    
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleLoginClick = async () => {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            console.log(response.status)
            if (response.status === 401) {
                alert('Incorrect email or password');
            }
            const data = await response.json();
            if (data.token) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('roleid', data.decodedToken.payload.roleid);
            }
            // console.log(data);
            console.log(data.decodedToken.payload.roleid, 'testing!!')
            console.log(data.user,'hihihhi')
                if (data.decodedToken.payload.roleid == 1) {
                    router.push('/admin');
                    router.refresh();
                } else if (data.decodedToken.payload.roleid == 2) {
                    router.push('/instructor');
                    router.refresh();
                } else if (data.decodedToken.payload.roleid == 3) {
                    router.push('/student');
                    router.refresh();
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
  );
};

export default Login;
