"use client";
import React, { useContext } from "react";
import { AppContext } from "../../context/index";

import CohortOverview from "./CohortOverview";

import MainDash from "./MainDash";
import SelectStudents from "./SelectStudents";

// This component is responsible for rendering different views based on the state of selectedCohort and selectedInstructor.

const SwitchPanels = () => {
  // SwitchPanels is consuming the AppWrapper
  const { loggedInRole } = useContext(AppContext);
  const { selectedCohort, setSelectedCohort } = useContext(AppContext);
  const { selectedStudents, setSelectedStudents } = useContext(AppContext);

  return (
    <div className="">
      {selectedCohort ? (
        <CohortOverview
          selectedCohort={selectedCohort}
          setSelectedCohort={setSelectedCohort}
        />
      ) : selectedStudents ? (
        <SelectStudents
          selectedStudents={selectedStudents}
          setSelectedStudents={setSelectedStudents}
        />
      ) : (
        <MainDash
          selectedStudents={selectedStudents}
          setSelectedStudents={setSelectedStudents}
        />
      )}
    </div>
  );
};

export default SwitchPanels;
