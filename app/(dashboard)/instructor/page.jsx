'use client'
import React, { useEffect, useContext } from "react";
import { AppContext } from "../../Context/Context";
import CohortsPage from "@/app/cohorts/page";

const InstructorDashboard = () => {
    const { fetchInstructorCohorts, cohorts } = useContext(AppContext);

    useEffect(() => {
        fetchInstructorCohorts(1);
    }, []);

    return (
        <div>
            <CohortsPage />
        </div>
    );
}

export default InstructorDashboard;
