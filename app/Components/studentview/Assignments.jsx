import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "@/app/context/index";
import AssignmentList from "./AssignmentList";

const AssignmentOverview = () => {
  const { assignments } = useContext(AppContext);
  const [selectedAssignment, setSelectedAssignment] = useState(null);


  const handleAssignmentClick = (assignment) => {
    console.log("assignment clicked")
    setSelectedAssignment(assignment);
  };

  return (
    <div className="flex items-center bg-white">
      <AssignmentList />
      <div className="flex flex-col justify-evenly items-center w-full assignment-info bg-slate-400">
        {selectedAssignment && (
          <>
            <h2>{selectedAssignment.title}</h2>
            <p>Due Date: {selectedAssignment.due_date}</p>
            <p>Description: {selectedAssignment.description}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default AssignmentOverview;
