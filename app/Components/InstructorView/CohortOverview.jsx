import React, { useState, useContext, useEffect } from "react";
import StudentsOverview from "./StudentsOverview";
import AssignmentsOverview from "./AssignmentsOverview";

const CohortOverview = () => {
  const [selectedTab, setSelectedTab] = useState("students");

  return (
    <div className="flex flex-col justify-evenly">
      <div className="flex items-center p-4 bg-slate-500">
        <div>Assigned Cohort</div>
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
      <div>
        {selectedTab === "students" && <StudentsOverview />}
        {selectedTab === "assignments" && <AssignmentsOverview />}
      </div>
    </div>
  );
};

export default CohortOverview;
