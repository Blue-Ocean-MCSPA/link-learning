"use client"
import React from 'react'
import Link from 'next/link'

const Logout = () => {
  return (
    <button>
        LOGOUT
        <Link onClick={async() => {
        const response = await fetch("/api/logout", {
            method: POST,
        })
        const info = await response.json();
        router.refresh();
        console.log(info);
    }} href={"/"}/>
    </button>
    
  )
}
export default Logout;