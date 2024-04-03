import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../context/index";

//This screen ig is the clickable functionalilty
// this page is the AdminDash and also Admin....
// I have Purple border aroundt this one

const AdminDash = ({
  selectedInstructor,
  setSelectedInstructor,
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
      console.log("Cohorts fetched:", data.cohorts.rows);
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

  const instructorsListClick = () => {
    setSelectedInstructor(true);
  };

  const studentListClick = () => {
    setSelectedStudents(true);
  };
  return (
    <>
      <div className="flex flex-col h-screen bg-slate-600 justify-center items-center">
        <div className="flex justify-center p-5 m-4">
          <button
            className="bg-slate-800 rounded py-4 px-6 m-2 text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-opacity-50"
            onClick={() => instructorsListClick()}
          >
            view all Instructors
          </button>

          <button
            className="bg-slate-800 rounded py-4 px-6 m-2 text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-opacity-50"
            onClick={() => studentListClick()}
          >
            view all Students
          </button>
        </div>
        <div className="flex justify-center items-center p-4">
          {cohorts.map((cohort, index) => {
            return (
              <button
                key={index}
                className="bg-slate-800 rounded py-4 px-6 m-2 text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-opacity-50"
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

export default AdminDash;