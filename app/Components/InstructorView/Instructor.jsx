import React, { useState, useContext, useEffect } from "react";
import AppContext from "@/app/context/Context";
import InstructorDashboard from "./InstructorDashboard";
import CohortOverview from "./CohortOverview";

const Instructor = () => {
    const [selectedCohort, setSelectedCohort] = useState(null);
    const { cohorts, setCohorts } = useContext(AppContext);

    return (
        <div>
            {selectedCohort ? (
                <CohortOverview selectedCohort={selectedCohort} />
            ) : (
                <InstructorDashboard setSelectedCohort={setSelectedCohort} />
            )}
        </div>
    );
}

export default Instructor;