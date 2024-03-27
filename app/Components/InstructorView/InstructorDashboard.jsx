import React, { useState, useContext, useEffect } from "react";
import AppContext from "@/app/context/Context";

export default function InstructorDashboard() {
    const { 
        cohorts,
        setCohorts,
        selectedCohort,
        setSelectedCohort,
        fetchCohorts,
        fetchInstructorCohorts,
    } = useContext(AppContext);
    const [fetched, setFetched] = useState(false);

    useEffect(() => {
        fetchInstructorCohorts(5, () => {
            setFetched(true);
        });
    }, []);

    useEffect(() => {
        if (fetched) {
            console.log('Cohorts fetched:', cohorts);
        }
    }, [fetched]);

    const cohortClick = (cohort) => {
        setSelectedCohort(cohort.id);
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