import React, { useState, useContext, useEffect } from "react";
import { useAppContext } from "@/app/context";
import { useRouter } from "next/router";

export default function InstructorDashboard() {
  const { 
    cohorts, 
    setSelectedCohort, 
    fetchInstructorCohorts, 
    currentInstructor 
  } = useAppContext();

  console.log("InstructorDashboard cohorts: ", cohorts);
  
  useEffect(() => {
    console.log("fetching cohorts for currentInstructor: ", currentInstructor);
    fetchInstructorCohorts(currentInstructor);// <- fetch for cohorts of current instructorNum, state is in indexjs
  }, []);

  const cohortClick = (cohort) => {
    setSelectedCohort(cohort);
  };

  return (
    <div className="flex flex-wrap justify-center items-center h-screen bg-slate-600 text-white">
      {cohorts.map((cohort, index) => {
        return (
          <div
            key={index}
            className="bg-slate-800 p-6 m-4 border rounded"
            onClick={() => cohortClick(cohort)}
          >
            <h2>{cohort.cohort_name}</h2>
          </div>
        );
      })}
    </div>
  );
}
