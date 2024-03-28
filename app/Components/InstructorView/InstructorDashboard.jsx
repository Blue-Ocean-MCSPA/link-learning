import React, { useState, useContext, useEffect } from "react";
import AppContext from "@/app/Context/Context";
import { useRouter } from "next/router";

export default function InstructorDashboard() {
    const { 
        cohorts,
        setSelectedCohort,
        fetchInstructorCohorts,
        loggedInUser,
    } = useContext(AppContext);

    useEffect(() => {
        fetchInstructorCohorts(5);
    }, [loggedInUser]);

    const cohortClick = (cohort) => {
        setSelectedCohort(cohort);
    }

    return (
        <div className="flex flex-wrap justify-center items-center h-screen bg-slate-600 text-white">
            {cohorts.map((cohort, index) => {
                return (
                    <div key={index} className="bg-slate-800 p-6 m-4 border rounded" onClick={() => cohortClick(cohort)}>
                        <h2>{cohort.cohort_name}</h2>
                    </div>
                )
            })}
        </div>
    );   
}