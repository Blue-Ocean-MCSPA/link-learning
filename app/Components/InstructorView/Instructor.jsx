import React, { useContext } from "react";
import InstructorDashboard from "./InstructorDashboard";
import CohortOverview from "./CohortOverview";
import { AppContext, useAppContext } from "@/app/context";
import { AppWrapper } from "@/app/context";

export default function Instructor() {
  const { selectedCohort } = useContext(AppContext);

  return (
    <div className="h-screen bg-black">
      {selectedCohort ? (
        <AppWrapper>
          <CohortOverview />
        </AppWrapper>
      ) : (
        <AppWrapper>
          <InstructorDashboard />
        </AppWrapper>
      )}
    </div>
  );
}