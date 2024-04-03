import React, { useState } from "react";

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
  selectName,
  email,
  assignmentsCompleted,
  grade,
}) {
  const [name, setName] = useState(selectName); // Initialize name state with selectName
  const [updatedEmail, setEmail] = useState(email); // Initialize email state with email
  const [updatedAssignmentsCompleted, setAssignmentsCompleted] = useState(assignmentsCompleted); // Initialize assignmentsCompleted state with assignmentsCompleted
  const [updatedGrade, setGrade] = useState(grade); // Initialize grade state with grade

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any validation if needed

    // Update the student object with the new values
    const updatedStudent = {
      name: name,
      email: updatedEmail,
      assignmentsCompleted: updatedAssignmentsCompleted,
      grade: updatedGrade
    };

    // Call a function to handle saving the updated student data
    // For demonstration purposes, let's assume we log the updated student data
    console.log("Updated Student Data:", updatedStudent);

    // Close the modal
    toggleModal();
  };

  return (
    <div className="text-sm text-light-foreground bg-light-background border border-b-1 border-light-inactive_selection">
      <label
        htmlFor=""
        className="flex py-2 hover:cursor-pointer"
        onClick={toggleModal} // Open and close modal
      >
          <div className="pl-5 w-1/4">{selectName}</div>
          <div className="w-1/4">{email}</div>
          <div className="w-1/4 text-center">{assignmentsCompleted}</div>
          <div className="w-1/4 text-center">{grade}</div>
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
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                <label htmlFor="assignmentsCompleted">Assignments Completed:</label>
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
                <button type="submit" className="btn">Save</button>
                <button type="button" className="btn" onClick={toggleModal}>Close</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

          // <div className="modal" role="dialog">
          //   <div className="modal-box border border-light-cursor bg-light-background">
          //     <div>
          //       <div>Name: {selectName}</div>
          //       <div>Email: {email}</div>
          //       <div>Assignments Completed: {assignmentsCompleted}</div>
          //       <div>Grade: {grade}</div>
          //     </div>
          //     {/* You can render additional information about the student here */}
          //     {/* {children} */}
          //     <div className="modal-action">
          //       <label
          //         htmlFor="modal-toggle"
          //         className="btn"
          //         onClick={toggleModal}
          //       >
          //         Close
          //       </label>
          //     </div>
          //   </div>
          // </div>