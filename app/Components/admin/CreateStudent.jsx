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
  selectFirstName,
  selectLastName,
  email,
  assignmentsCompleted,
  grade,
  student
}) {
  const [firstName, setFirstName] = useState(selectFirstName); // Initialize name state with selectName
  const [lastName, setLastName] = useState(selectLastName); // Initialize name state with selectName
  const [updatedEmail, setEmail] = useState(email); // Initialize email state with email
  const [updatedAssignmentsCompleted, setAssignmentsCompleted] = useState(assignmentsCompleted); // Initialize assignmentsCompleted state with assignmentsCompleted
  const [updatedGrade, setGrade] = useState(grade); // Initialize grade state with grade

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  //email, password_hash, first_name, last_name, roleid, contact_info, certifications_and_training, performance_metrics, activity_log, grade, assignments_completed, course_started, course_ended, absent_days
    const updatedStudent = {
      email: updatedEmail,
      first_name: selectFirstName,
      last_name: selectLastName,
      grade: updatedGrade,
      assignments_completed: updatedAssignmentsCompleted,
    };
  
    const id = student.id;

    try {
      const response = await fetch(`/api/users/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(id, updatedStudent),
      });
  
      if (!response.ok) {
        throw new Error("Failed to update student");
      }
  
      // Close the modal
      toggleModal();
  
      // Handle the response to update the state in the Edit component
      const updatedStudentData = await response.json();
      // Assuming you have a function to update the state in the parent component
      onUpdateStudent(updatedStudentData);
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

const onUpdateStudent = (updatedStudentData) => {
  // Update the state in the Edit component
  // For example:
  setToEdit(updatedStudentData);
};

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