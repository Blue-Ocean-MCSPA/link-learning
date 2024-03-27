import React, { useState, useContext, useEffect } from "react";
import AppContext from "@/app/Context/Context";
import InstructorDashboard from "./InstructorDashboard";
import CohortOverview from "./CohortOverview";

export default function Instructor() {
    const {
        cohorts, 
        setCohorts,
        selectedCohort,
        setSelectedCohort,
    } = useContext(AppContext);

    return (
        <div>
            {selectedCohort ? (
                <CohortOverview />
            ) : (
                <InstructorDashboard />
            )}
        </div>
    );
}