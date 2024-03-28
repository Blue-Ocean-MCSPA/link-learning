import React, { useState, useContext, useEffect } from "react";
import StudentsOverview from "./StudentsOverview";
import AssignmentsOverview from "./AssignmentsOverview";
import AppContext from "@/app/Context/Context";

const CohortOverview = () => {
    const {
        cohorts,
        setCohorts,
        selectedCohort,
        setSelectedCohort,
        selectedTab,
        setSelectedTab
    } = useContext(AppContext);
    
    
    const [studentsOverviewSelected, setStudentsOverviewSelected] = useState(true); // New state to track whether Students Overview is selected
    const [assignmentsOverviewSelected, setAssignmentsOverviewSelected] = useState(false); // New state to track whether Assignments Overview is selected
    const [messagesSelected, setMessagesSelected] = useState(false); // New state to track whether Messages is selected

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
        if (tab === 'students') {
            setStudentsOverviewSelected(true);
        } else if (tab === 'assignments') {
            setAssignmentsOverviewSelected(true);
        } else {
            setMessagesSelected(true);
        }
    }
    const handleReturnToCohortClick = () => {
        setSelectedCohort(null);
    }

    return (
        <div className="flex flex-col flex-grow text-white h-full">
            <div className="flex items-center p-4 bg-slate-500">
                <div className="border rounded p-4">{selectedCohort.cohort_name}</div>
                <button className="m-2 p-4 border rounded" onClick={handleReturnToCohortClick}>Return to Cohort Selection</button>
            </div>
            <div className="flex items-center p-4 bg-slate-600">
                <ul className="flex space-x-6">
                    <li onClick={() => handleTabClick('students')}>
                        <button className={`border rounded p-4 ${selectedTab === 'students' && studentsOverviewSelected ? 'bg-red-300' : 'bg-slate-700'}`}>
                            Students Overview
                        </button>                    </li>
                    <li onClick={() => handleTabClick('assignments')}>
                        <button className={`border rounded p-4 ${selectedTab === 'assignments' && assignmentsOverviewSelected ? 'bg-red-300' : 'bg-slate-700'}`}>
                            Assignments Overview
                        </button>
                    </li>
                    <li onClick={() => handleTabClick('messages')}>
                        <button className="border rounded p-4 bg-slate-700 focus:bg-red-300">
                            Messages
                        </button>
                    </li>
                </ul>
            </div>
            <div>
                {selectedTab === 'students' && <StudentsOverview />}
                {selectedTab === 'assignments' && <AssignmentsOverview />}
            </div>
        </div>
    )
}

export default CohortOverview;