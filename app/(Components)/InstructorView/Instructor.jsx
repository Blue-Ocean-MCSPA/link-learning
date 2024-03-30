import React, { useContext } from "react";
import InstructorDashboard from "./InstructorDashboard";
import CohortOverview from "./CohortOverview";
import { useAppContext } from "@/app/context";
import { AppWrapper } from "@/app/context";

export default function Instructor() {
  const { selectedCohort } = useAppContext;

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
