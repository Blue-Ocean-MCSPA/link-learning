"use client";
import React, { useContext, useState } from "react";
import { AppContext, AppWrapper } from "../../context/index";

import CohortOverview from "./CohortOverview";

import MainDash from "./MainDash";
import SelectStudents from "./SelectStudents";
import App from "next/app";

// This component is responsible for rendering different views based on the state of selectedCohort and selectedInstructor.

const SwitchPanels = () => {
  // SwitchPanels is consuming the AppWrapper
  const { loggedInRole } = useContext(AppContext);
  const { selectedStudents, setSelectedStudents } = useContext(AppContext);
  const { assignments, setAssignments } = useContext(AppContext);
  const [selectedCohort, setSelectedCohort] = useState(false);

  return (
    <div className="">
      {selectedCohort ? (
        <AppWrapper>
          <CohortOverview
            selectedCohort={selectedCohort}
            setSelectedCohort={setSelectedCohort}
          />
        </AppWrapper>
      ) : selectedStudents ? (
        <SelectStudents
          selectedStudents={selectedStudents}
          setSelectedStudents={setSelectedStudents}
        />
      ) : (
        <MainDash
          selectedStudents={selectedStudents}
          setSelectedStudents={setSelectedStudents}
          assignments={assignments}
          setAssignments={setAssignments}
        />
      )}
    </div>
  );
};

export default SwitchPanels;
