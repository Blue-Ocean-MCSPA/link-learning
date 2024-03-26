import React, { useState, useContext, useEffect } from "react";
import AppContext from "@/app/Context/Context";
import SelectIntructors from "./SelectInstuctors";

const AdminDashboard = ({ setSelectedCohort, setSelectedInstructor }) => {
  const { cohorts, setCohorts } = useContext(AppContext);

  const cohortClick = (cohort) => {
    setSelectedCohort(cohort);
  };

  const instructorsListClick = () => {
    setSelectedInstructor(true);
  };
  return (
    <>
      <div className="flex flex-wrap justify-center items-center h-screen bg-slate-600">
        <div className="flex flex-wrap justify-center items-center h-screen bg-slate-600 ">
          <div className="flex justify-center  p-5 m-4">
            {/* <button className="bg-slate-800 p-6 m-4 border rounded">
              view all Cohorts
            </button> */}
            <button
              className="bg-slate-800 p-6 m-4 border rounded"
              onClick={() => instructorsListClick()}
            >
              view all Instructors
            </button>

            <button className="bg-slate-800 p-6 m-4 border rounded">
              view all Students
            </button>
          </div>
          {cohorts.map((cohort, index) => {
            return (
              <div
                key={index}
                className="bg-slate-800 p-6 m-4 border rounded"
                onClick={() => cohortClick(cohort)}
              >
                <h2>{cohort}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
