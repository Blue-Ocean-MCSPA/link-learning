import React, { useContext } from "react";
import { AppContext, AppWrapper } from "../../context/index";

import AdminDash from "./AdminDash";
import CohortOverview from "./CohortOverview";
import SelectInstructors from "./SelectInstuctors";

// This component is responsible for rendering different views based on the state of selectedCohort and selectedInstructor.

const SwitchPanels = () => {
  const { loggedInRole } = useContext(AppContext);
  const { selectedCohort, setSelectedCohort } = useContext(AppContext);
  const { selectedInstructor, setSelectedInstructor } = useContext(AppContext);

  return (
    <div className="">
      {selectedCohort ? (
        <CohortOverview
          selectedCohort={selectedCohort}
          setSelectedCohort={setSelectedCohort}
        />
      ) : selectedInstructor ? (
        <SelectInstructors
          selectedInstructor={selectedInstructor}
          setSelectedInstructor={setSelectedInstructor}
        />
      ) : (
        <AdminDash
          selectedInstructor={selectedInstructor}
          setSelectedInstructor={setSelectedInstructor}
        />
      )}
    </div>
  );
};

export default SwitchPanels;

// switch case instead of turnary
// use a pice of state specifically for rendering in that switch case
//more useful if piece of state is string
