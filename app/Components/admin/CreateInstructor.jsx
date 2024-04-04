import React, { useState } from "react";

function Modal({ isOpen, setIsOpen, children }) {
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

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
          <div
            className={
              isOpen
                ? "modal-box bg-white w-64 h-26"
                : "modal-box bg-white w-2/4 h-4/6"
            }
          >
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
//w - auto 1/2 1/4 2/4 fit max dvw lvw svw full

export default Modal;

// className={`modal ${openCreate ? "model-open " : ""}`}
