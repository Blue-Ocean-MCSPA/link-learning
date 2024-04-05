import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "@/app/context/index";

const AssignmentList = () => {
  const { assignments, setAssignments } = useContext(AppContext);
  const [showAssignments, setShowAssignments] = useState(false);
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await fetch("/api/assignments");
      if (!response.ok) {
        throw new Error("Failed to fetch assignments");
      }
      const data = await response.json();
      setAssignments(data.data.rows);
      setLoading(false); // Set loading to false after fetching assignments
    } catch (error) {
      console.error("Error fetching assignments:", error);
      setAssignments([]);
      setLoading(false); // Set loading to false in case of error
    }
  };

  const handleAssignmentClick = () => {
    setShowAssignments(true);
  };

  const handleClick = () => {
    console.log("Dashboard clicked");
  };

  console.log(assignments)

  return (
    <div className="h-screen">
      <div className="flex p-5 bg-light-foreground items-between">
        <div className="text-white">Assignments</div>
        <button className="ml-10 text-white" onClick={handleClick}>
          Back to Dashboard
        </button>
        <button className="ml-10 text-white" onClick={handleAssignmentClick}>
          View Assignments
        </button>
      </div>
      <div className="h-screen">
        {showAssignments && (
          <div className="p-5">
            <h2 className="text-black">List of Assignments:</h2>
            {loading ? (
              <p>Loading assignments...</p>
            ) : (
              <ul className="text-black">
                {assignments.map((assignment, index) => (
                  <li key={index}>{assignment.title}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AssignmentList;
