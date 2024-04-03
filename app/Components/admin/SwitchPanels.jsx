import React, { useContext } from "react";
import { AppContext, AppWrapper } from "../../context/index";

import AdminDash from "./AdminDash";
import CohortOverview from "./CohortOverview";
import SelectInstructors from "./SelectInstructors";
import SelectStudents from "./SelectStudents";

// This component is responsible for rendering different views based on the state of selectedCohort and selectedInstructor.

const SwitchPanels = () => {
  // SwitchPanels is consuming the AppWrapper
  const { loggedInRole } = useContext(AppContext);
  const { selectedCohort, setSelectedCohort } = useContext(AppContext);
  const { selectedInstructor, setSelectedInstructor } = useContext(AppContext);
  const { selectedStudents, setSelectedStudents } = useContext(AppContext);

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
      ) : selectedStudents ? (
        <SelectStudents
          selectedStudents={selectedStudents}
          setSelectedStudents={setSelectedStudents}
        />
      ) : (
        <AdminDash
          selectedInstructor={selectedInstructor}
          setSelectedInstructor={setSelectedInstructor}
          selectedStudents={selectedStudents}
          setSelectedStudents={setSelectedStudents}
        />
      )}
    </div>
  );
};

export default SwitchPanels;
// <div className="">
//   {selectedCohort ? (
//     <CohortOverview
//       selectedCohort={selectedCohort}
//       setSelectedCohort={setSelectedCohort}
//     />
//   ) : selectedInstructor ? (
//     <SelectInstructors
//       selectedInstructor={selectedInstructor}
//       setSelectedInstructor={setSelectedInstructor}
//     />
//   ) : (
//     <AdminDash
//       selectedInstructor={selectedInstructor}
//       setSelectedInstructor={setSelectedInstructor}
//     />
//   )}
// </div>
