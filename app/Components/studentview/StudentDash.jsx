import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "@/app/context/index";
import AssignmentList from "./AssignmentList";

const CohortOverview = () => {
  const { enrollments, loggedInUser, assignments } =
    useContext(AppContext);
  const [selectedTab, setSelectedTab] = useState("students");
  let cohort = enrollments[loggedInUser.id].cohortid;

  return (
    <div className="flex flex-col justify-evenly">
      <div className="flex items-center p-4 bg-slate-500 ">
        <div className="border flex  p-4 bg-slate-700">Cohort: {cohort || 'Not Enrolled'}</div>
      </div>
      <div className="flex items-center p-4 bg-slate-600">
        <ul className="flex space-x-6">
          <li onClick={() => setSelectedTab('assignments')}>
            <button className="border rounded p-4 bg-slate-700 focus:bg-red-300">Assignments Overview</button>
          </li>
        </ul>
      </div>
      <div>{ <AssignmentList assignments={assignments} />}</div>
    </div>
  );
};

export default CohortOverview;
