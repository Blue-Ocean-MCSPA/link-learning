import { redirect } from "next/dist/server/api-utils";
import React, { useEffect, useState } from "react";

function Modal({ isOpen, setIsOpen, children }) {
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" ml-10 bg-transparent">
      <label
        htmlFor=""
        className="text-white hover:cursor-pointer"
        onClick={toggleModal}
      >
        Add Student
      </label>
      <input
        type="checkbox"
        id="modal-toggle"
        className="modal-toggle bg-white"
        checked={isOpen}
        onChange={toggleModal}
      />
      {isOpen && (
        <div className="modal" role="dialog">
          <div className="modal-box">
            {children}

            <div className="modal-action">
              <label
                htmlFor="modal-toggle"
                className="btn"
                onClick={toggleModal}
              >
                Close
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;

export function StudentModal({
  isOpen,
  setIsOpen,
  selectFirstName,
  selectLastName,
  email,
  assignmentsCompleted,
  grade,
  student,
}) {
  const [firstName, setFirstName] = useState(selectFirstName); // Initialize name state with selectName
  const [lastName, setLastName] = useState(selectLastName); // Initialize name state with selectName
  const [updatedEmail, setEmail] = useState(email); // Initialize email state with email
  const [updatedAssignmentsCompleted, setAssignmentsCompleted] =
    useState(assignmentsCompleted); // Initialize assignmentsCompleted state with assignmentsCompleted
  const [updatedGrade, setGrade] = useState(grade); // Initialize grade state with grade

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    const updatedUser = {
      id: student.id,
      email: updatedEmail,
      first_name: firstName,
      last_name: lastName,
      grade: updatedGrade,
      assignments_completed: updatedAssignmentsCompleted,
    };

    try {
      const response = await fetch(`/api/users`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ updatedUser }),
      });

      if (!response.ok) {
        throw new Error("Failed to update student");
      }

      // Close the modal
      toggleModal();

      // Handle the response to update the state in the Edit component
      const data = await response.json();
      //router.refresh();
    } catch (error) {
      console.error("Error updating student:", error.message);
      // Handle error
    }
  };

  return (
    <div className="text-sm text-light-foreground bg-light-background border border-b-1 border-light-inactive_selection">
      <label
        htmlFor=""
        className="flex py-2 hover:cursor-pointer"
        onClick={toggleModal} // Open and close modal
      >
        <div className="pl-5 w-1/5">{selectFirstName}</div>
        <div className="pl-5 w-1/5">{selectLastName}</div>
        <div className="w-1/5">{email}</div>
        <div className="w-1/5 text-center">{assignmentsCompleted}</div>
        <div className="w-1/5 text-center">{grade}</div>
      </label>
      <input
        type="checkbox"
        id="modal-toggle"
        className="modal-toggle bg-white"
        checked={isOpen}
        onChange={toggleModal}
      />
      {isOpen && (
        <div className="modal" role="dialog">
          <div className="modal-box border border-light-cursor bg-light-background">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">First Name:</label>
                <input
                  type="text"
                  id="name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="m-2 px-2 bg-light-background border border-1 border-light-foreground rounded-full"
                />
              </div>
              <div>
                <label htmlFor="name">Last Name:</label>
                <input
                  type="text"
                  id="name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="m-2 px-2 bg-light-background border border-1 border-light-foreground rounded-full"
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={updatedEmail}
                  onChange={(e) => setEmail(e.target.value)}
                  className="m-2 px-2 bg-light-background border border-1 border-light-foreground rounded-full"
                />
              </div>
              <div>
                <label htmlFor="assignmentsCompleted">Assignments:</label>
                <input
                  type="number"
                  id="assignmentsCompleted"
                  value={updatedAssignmentsCompleted}
                  onChange={(e) => setAssignmentsCompleted(e.target.value)}
                  className="m-2 px-2 bg-light-background border border-1 border-light-foreground rounded-full"
                />
              </div>
              <div>
                <label htmlFor="grade">Grade:</label>
                <input
                  type="text"
                  id="grade"
                  value={updatedGrade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="m-2 px-2 bg-light-background border border-1 border-light-foreground rounded-full"
                />
              </div>
              <div className="modal-action">
                <button type="submit" className="btn">
                  Save
                </button>
                <button type="button" className="btn" onClick={toggleModal}>
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
