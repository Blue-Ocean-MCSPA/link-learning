"use client";
import React, { useContext, useState } from "react";
import { AppContext, AppWrapper } from "../../context/index";
import MainDash from "./MainDash";



const SwitchPanels = () => {

  const { loggedInRole } = useContext(AppContext);
  const { selectedStudents, setSelectedStudents } = useContext(AppContext);
  const { assignments, setAssignments } = useContext(AppContext);
  const [selectedCohort, setSelectedCohort] = useState(false);

  return (
    <div className="">
        <MainDash
          assignments={assignments}
          setAssignments={setAssignments}
        />
    </div>
  );
};

export default SwitchPanels;
