import React, { useState, useContext, useEffect } from "react";
import AppContext from "@/app/Context/Context";

const InstructorDashboard = ({ setSelectedCohort }) => {
    const { cohorts, setCohorts } = useContext(AppContext);


    const cohortClick = (cohort) => {
        setSelectedCohort(cohort);
    }

    return (
        <div className="flex flex-wrap justify-center items-center h-screen bg-slate-600">
            {cohorts.map((cohort, index) => {
                return (
                    <div key={index} className="bg-slate-800 p-6 m-4 border rounded" onClick={() => cohortClick(cohort)}>
                        <h2>{cohort}</h2>
                    </div>
                )
            })}
        </div>
    );   
}

export default InstructorDashboard;