import React, { useState, useContext, useEffect } from "react";
import AppContext from "@/app/Context/Context";
import AdminDash from "./AdminDash";
import CohortOverview from "./CohortOverview";
import SelectInstructors from "./SelectInstuctors";

//This page is green. This is the page that shows all the buttons to click on view all
//instructors, students, cohorts

//This is the main parent it looks like
//I have a red big border in this one

const Admin = () => {
  const [selectedCohort, setSelectedCohort] = useState(null);
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  return (
    <div className="">
      {(() => {
        switch (true) {
          case !!selectedCohort:
            return (
              <CohortOverview
                selectedCohort={selectedCohort}
                setSelectedCohort={setSelectedCohort}
              />
            );
          case !!selectedInstructor:
            return (
              <SelectInstructors
                setSelectedInstructor={setSelectedInstructor}
              />
            );
          default:
            return (
              <AdminDash
                setSelectedCohort={setSelectedCohort}
                setSelectedInstructor={setSelectedInstructor}
              />
            );
        }
      })()}
    </div>
  );
};

export default Admin;

// switch case instead of turnary
// use a pice of state specifically for rendering in that switch case
//more useful if piece of state is string

{
  /* <div>
{selectedCohort ? (
  <CohortOverview
    selectedCohort={selectedCohort}
    setSelectedCohort={setSelectedCohort}
  />
) : (
  <AdminDash
    setSelectedCohort={setSelectedCohort}
    setSelectedInstructor={setSelectedInstructor}
  />
)}

{selectedInstructor ? (
  <SelectIntructors />
) : (
  <AdminDash
    setSelectedCohort={setSelectedCohort}
    setSelectedInstructor={setSelectedInstructor}
  />
)}
</div> */
}
