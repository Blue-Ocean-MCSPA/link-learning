import React, { useState, useContext, useEffect } from "react";
import StudentsOverview from "./StudentsOverview";
import AssignmentOverview from "./AssignmentOverview";

//This is the main main page for if you click a cohort

const CohortOverview = ({ setSelectedCohort }) => {
  const [selectedTab, setSelectedTab] = useState("students");

  function handleClick() {
    setSelectedCohort(null);
  }

  return (
    <div className="flex flex-col justify-evenly">
      <div className="flex items-center p-4 bg-slate-500 ">
        <div className="border flex  p-4 bg-slate-700">Assigned Cohort</div>
        <button
          className="border ml-10  p-4 bg-slate-700"
          onClick={handleClick}
        >
          Back to Dashboard
        </button>
      </div>
      <div className="flex items-center p-4 bg-slate-600">
        <ul className="flex space-x-6">
          <li onClick={() => setSelectedTab("students")}>
            <button className="border rounded p-4 bg-slate-700 focus:bg-red-300">
              Students Overview
            </button>
          </li>
          <li onClick={() => setSelectedTab("assignments")}>
            <button className="border rounded p-4 bg-slate-700 focus:bg-red-300">
              Assignments Overview
            </button>
          </li>
          <li>Messages</li>
        </ul>
      </div>
      <div>{selectedTab === "assignments" && <AssignmentOverview />}</div>
    </div>
  );
};

export default CohortOverview;
