import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../context/index";
import AssignmentList from "./AssignmentList"; 

const MainDash = ({}) => {
    const {handleBackToDashboard, showAssignments, setShowAssignments} = useContext(AppContext)



  const handleAssignmentClick = () => {
    setShowAssignments(true);
  };


  return (
    <div className="flex flex-col h-screen bg-light-background justify-center items-center">
      <div className="flex justify-center p-5 m-4"></div>
      {!showAssignments && ( 
        <div className="flex justify-center p-5 m-4">
          <button
            className="bg-transparent border border-1 border-light-foreground rounded-lg py-4 px-6 m-2 text-light-foreground hover:text-light-background hover:border-light-background hover:bg-light-comment"
            onClick={handleAssignmentClick} 
          >
            Assignment Overview
          </button>
        </div>
      )}
      {showAssignments && <AssignmentList handleBackToDashboard={() => setShowAssignments(false)}  />} 
    </div>
  );
};

export default MainDash;
