import React, { useState } from "react";

// inferface ModalProps {
//     children: React.ReactNode
// }

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
    const toggleModal = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="text-sm text-light-foreground bg-light-background border border-b-1 border-light-inactive_selection">
        <label
          htmlFor=""
          className="flex py-2 hover:cursor-pointer"
          onClick={toggleModal} //open and close modal
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
              <div>
                <div>Name: {selectName}</div>
                <div>Email: {email}</div>
                <div>Assignments Completed: {assignmentsCompleted}</div>
                <div>Grade: {grade}</div>
              </div>
              {/* You can render additional information about the student here */}
              {/* {children} */}
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

