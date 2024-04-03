import React, { useState } from "react";

// inferface ModalProps {
//     children: React.ReactNode
// }

function Modal({ isOpen, setIsOpen, children }) {
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // <div className=" ml-10 bg-transparent">
  // <label
  //   htmlFor=""
  //   className="text-white hover:cursor-pointer"
  //   onClick={toggleModal}
  // >
  //   Add Instructor
  return (
    <div className="model model-open">
      <label
        htmlFor=""
        className="text-white hover:cursor-pointer"
        onClick={toggleModal}
      ></label>
      <input
        type="checkbox"
        id="modal-toggle"
        className="modal-toggle"
        checked={isOpen}
        onChange={toggleModal}
      />
      {isOpen && (
        <div className="modal" role="dialog">
          <div className="modal-box bg-white w-96 h-4/6">
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