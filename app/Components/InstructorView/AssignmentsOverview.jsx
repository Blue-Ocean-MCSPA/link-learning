import React, { useState, useContext, useEffect } from "react";

const AssignmentsOverview = () => {
    const [assignments, setAssignments] = useState([
        { name: 'Assignment 1', dueDate: '2021-09-01', grade: 'A' },
        { name: 'Assignment 2', dueDate: '2021-09-08', grade: 'B' },
        { name: 'Assignment 3', dueDate: '2021-09-15', grade: 'C' },
        // Add more assignment objects as needed
    ]);
    const [selectedAssignment, setSelectedAssignment] = useState(null);
    const [assignmentsOverviewSelected, setAssignmentsOverviewSelected] = useState(true); // New state to track whether Students Overview is selected
    
    const handleAssignmentClick = (assignment) => {
        setSelectedAssignment(assignment);
        setAssignmentsOverviewSelected(true); // Ensure that Assignments Overview remains selected
    }

    return (
        <div className="flex justify-center bg-white">
            <div className="assignment-list flex flex-col items-center bg-slate-600">
                <ul>
                    {assignments.map((assignment, index) => {
                        return (
                            <li key={index}>
                                <button className="bg-slate-800 px-14 py-6 m-4 border rounded focus:bg-blue-700" onClick={() => handleAssignmentClick(assignment)}>
                                    <h2>{assignment.name}</h2>
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="flex flex-col justify-evenly items-center w-full assignment-info bg-slate-400">
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
}

export default AssignmentsOverview;