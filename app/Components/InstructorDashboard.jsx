import React from "react";
import { useState, useContext, useEffect } from "react";

const InstructorDashboard = () => {
    const [cohorts, setCohorts] = useState(['MCSP-2312', 'MCSP-2313', 'MCSP-2314', 'MCSP-2315', 'MCSP-2316', 'MCSP-2317']);
    
    return (
        <div className="flex flex-wrap justify-center items-center h-screen bg-slate-600">
            {cohorts.map((cohort, index) => {
                return (
                    <div key={index} className="bg-slate-800 p-6 m-4 border rounded">
                        <h2>{cohort}</h2>
                    </div>
                )
            })}
        </div>
    );   
}

export default InstructorDashboard;