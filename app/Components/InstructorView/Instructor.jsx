import React, { useContext } from "react";
import AppContext from "@/app/Context/Context";
import InstructorDashboard from "./InstructorDashboard";
import CohortOverview from "./CohortOverview";

export default function Instructor() {
    const {
        selectedCohort,
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