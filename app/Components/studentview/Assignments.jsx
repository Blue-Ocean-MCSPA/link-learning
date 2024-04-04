import React, { useState, useContext, useEffect } from "react";

const AssignmentOverview = () => {
  const [assignments, setAssignments] = useState([]);
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  const handleAssignmentClick = (assignment) => {
    setSelectedAssignment(assignment);
  };

  return (
    <div className="flex items-center bg-white">
      <div className="assignment-listflex flex-col items-center bg-slate-600 ">
        {assignments.map((assignment, index) => {
          return (
            <div
              key={index}
              className="bg-slate-800 p-4 m-4"
              onClick={() => handleAssignmentClick(assignment)}
            >
              <h2>{assignment.name}</h2>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col justify-evenly items-center text-black w-full assignment-info bg-slate-400">
        {selectedAssignment && (
          <>
            <h2>{selectedAssignment.name}</h2>
            <p>Due Date: {selectedAssignment.dueDate}</p>
            <p>Grade: {selectedAssignment.grade}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default AssignmentOverview;