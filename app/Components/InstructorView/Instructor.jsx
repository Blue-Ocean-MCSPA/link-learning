import React, { useState, useContext, useEffect } from "react";
import AppContext from "@/app/Context/Context";
import InstructorDashboard from "./InstructorDashboard";
import CohortOverview from "./CohortOverview";
import withAuth from "../withAuth";

function Instructor({ roleid }) {
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
            {roleid && <div>Role ID: {roleid}</div>}
        </div>
    );
}

export default withAuth(Instructor, [2]);