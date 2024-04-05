import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '@/app/context/index';

const AssignmentList = () => {
    const { assignments, fetchAssignments } = useContext(AppContext);
    const [assignmentRows, setAssignmentRows] = useState([]);
    const [selectedAssignment, setSelectedAssignment] = useState(null);

    useEffect(() => {
        fetchAssignments();
    }, [assignments]);

    useEffect(() => {
        const rows = [];
        for (let i = 0; i < assignments.length; i += 3) {
            rows.push(assignments.slice(i, i + 3));
        }
        setAssignmentRows(rows);
    }, [assignments]);

    const handleAssignmentClick = (assignment) => {
      setSelectedAssignment(assignment);
  };


    return (
        <div>
            <h2>Assignment List</h2>
            <div className="assignment-list">
                {assignmentRows.map((row, rowIndex) => (
                    <div key={rowIndex} className="assignment-row">
                        {row.map((assignment) => (
                            <div key={assignment.id} className="assignment-item">
                                <p>{assignment.title}</p>
                                <p>Assignment Due: {assignment.due_date}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div>
                {selectedAssignment && (
                    <div>
                        <h2>Selected Assignment</h2>
                        <p>Title: {selectedAssignment.title}</p>
                        <p>Due Date: {selectedAssignment.due_date}</p>
                        <p>Description: {selectedAssignment.description}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AssignmentList;
