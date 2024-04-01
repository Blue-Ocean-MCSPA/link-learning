'use client'
import React from "react";
import Link from "next/link";
import withAuth from "/Users/sp/Desktop/blueocean/link-learning/app/Components/withAuth.js";

const Admin = ({ roleid }) => {
    return (
        <div className="bg-light-comment">
            <div className="text-base">ADMIN</div>
            {/* {roleid && <div>Role ID: {roleid}</div>} */}
        </div>
    )
    
}

// export default Admin;
export default withAuth(Admin, [1]);