import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../context/index";

//This screen ig is the clickable functionalilty
// this page is the AdminDash and also Admin....
// I have Purple border aroundt this one

const MainDash = ({
  assignments,
  setAssignments,
  selectedStudents,
  setSelectedStudents,
}) => {
  const { cohorts, setCohorts } = useContext(AppContext);
  const { selectedCohort, setSelectedCohort } = useContext(AppContext);

  const fetchCohorts = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/cohort/");
      if (!response.ok) {
        throw new Error("Failed to fetch cohorts");
      }
      const data = await response.json();
      setCohorts(data.cohorts.rows);
    } catch (error) {
      console.error("Error fetching cohorts:", error);
      setCohorts([]);
    }
  };

  useEffect(() => {
    fetchCohorts();
  }, []);

  const cohortClick = (cohort) => {
    setSelectedCohort(cohort);
  };

  const AssignmentClick = () => {
    setAssignments(true);
  };

  const studentListClick = () => {
    setSelectedStudents(true);
  };
  return (
    <>
      <div className="flex flex-col h-screen bg-light-background justify-center items-center">
        <div className="flex justify-center p-5 m-4">
          <button
            className="bg-transparent border border-1 border-light-foreground rounded-lg py-4 px-6 m-2 text-light-foreground hover:text-light-background hover:border-light-background hover:bg-light-comment"
            onClick={() => studentListClick()}
          >
            Students
          </button>
        </div>
        <div className="flex justify-center p-5 m-4">
          <button
            className="bg-transparent border border-1 border-light-foreground rounded-lg py-4 px-6 m-2 text-light-foreground hover:text-light-background hover:border-light-background hover:bg-light-comment"
            onClick={() => AssignmentClick()}
          >
            AssignmentOverView
          </button>
        </div>
        <div className="flex justify-center items-center p-4">
          {cohorts.map((cohort, index) => {
            return (
              <button
                key={index}
                className="bg-slate-800 rounded-lg py-4 px-6 m-2 text-white hover:bg-slate-700"
                onClick={() => cohortClick(cohort)}
              >
                <h2>{cohort.cohort_name}</h2>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MainDash;
