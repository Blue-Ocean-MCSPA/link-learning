import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "@/app/context/index";
import AssignmentOverview from "./assignments";

const CohortOverview = () => {
  const { enrollments, setEnrollments } =
    useContext(AppContext);
  const [selectedTab, setSelectedTab] = useState("students");
  useEffect(() => {
    async function fetchEnrollments() {
      try {
        const response = await fetch("/api/enrollments");
        if (!response.ok) {
          throw new Errow("Failed to fetch enrollments");
        }
        const responseData = await response.json();
        const userData = responseData.data.rows;
        setEnrollments(userData);
        console.log("Enrollments fetched for student", userData);
      } catch (error) {
        console.log("Error fetching users:", error);
        setEnrollments([]);
      }
    }
    // calling to fetch the data within the use effect hook
    fetchEnrollments();
  }, []);


//  const enrollmentData = enrollments.map(function(enrollment){
//   return enrollment.cohortid;
// });
 console.log(enrollments)

  return (
    <div className="flex flex-col justify-evenly">
      <div className="flex items-center p-4 bg-slate-500 ">
        <div className="border flex  p-4 bg-slate-700">
          Cohort: 
        </div>
      </div>
      <div className="flex items-center p-4 bg-slate-600">
        <ul className="flex space-x-6">
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
