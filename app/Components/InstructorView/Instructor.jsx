import React, { useContext } from "react";
import InstructorDashboard from "./InstructorDashboard";
import CohortOverview from "./CohortOverview";
import withAuth from "../withAuth";
import { AppContext } from "@/app/context";

function Instructor({ roleid }) {
    const {
        cohorts, 
        setCohorts,
        selectedCohort,
        setSelectedCohort,
    } = useContext(AppContext);

    return (
        <div>
            {selectedCohort ? (
                <CohortOverview />
            ) : (
                <InstructorDashboard />
            )}
            {/* {roleid && <div>Role ID: {roleid}</div>} */}
        </div>
    );
}

export default withAuth(Instructor, [2]);

// import { useAppContext } from "@/app/context";
// import { AppWrapper } from "@/app/context";

// export default function Instructor() {
//   const { selectedCohort } = useAppContext();
//   //console.log("Instructor selected cohort: ", selectedCohort);

//   return (
//     <div className="h-screen bg-black">
//       {selectedCohort === 'none' ? ( // if no selectedCohort is 'none' (default), show dashboard to select cohort
//         <AppWrapper>
//           <InstructorDashboard />
//         </AppWrapper>
//       ) : (
//         <AppWrapper>
//           <CohortOverview />
//         </AppWrapper>
//       )}
//     </div>
//   );
// }
