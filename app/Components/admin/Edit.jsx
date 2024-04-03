"use client";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import Modal from "./CreateInstructor";

function Edit({ data }) {
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [toEdit, setToEdit] = useState(data.text);

  function handleSubmitEdit() {}

  return (
    <div className="flex ml-auto items-center gap-7">
      <FiEdit onClick={() => setOpenModalEdit(true)} size={25} />
      <Modal isOpen={openModalEdit} setIsOpen={setOpenModalEdit}>
        <form onSubmit={handleSubmitEdit}>
          <h3 className="font-bold text-lg text-black mt-8">
            Edit Instructor's Info
          </h3>
          <div className="modal-action flex-col items-center">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              placeholder="First Name here..."
              className="input input-bordered w-full max-full m-6"
              onChange={() => setToEdit(e.target.value)}
              value={toEdit}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              placeholder="Last Name here..."
              className="input input-bordered w-full max-full m-6"
              onChange={() => setToEdit(e.target.value)}
              value={toEdit}
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              placeholder="Email here..."
              className="input input-bordered w-full max-full m-6"
              onChange={() => setToEdit(e.target.value)}
              value={toEdit}
            />
            <label htmlFor="email">Tempory Password</label>
            <input
              id="password"
              type="text"
              placeholder="Temp Password here..."
              className="input input-bordered w-full max-full m-6"
              onChange={() => setToEdit(e.target.value)}
              value={toEdit}
            />
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </Modal>
      <FiTrash2 size={25} className="text-red-500" />
    </div>
  );
}

export default Edit;

// <form onSubmit={handleSubmitEdit}>
// <h3 className="font-bold text-lg text-black mt-8">
//   Edit Instructor's Information
// </h3>
// <div className="modal-action flex-col items-center">
//   <label htmlFor="firstName">First Name</label>
//   <input
//     value={toEdit}
//     onChange={() => setToEdit(e.target.value)}
//     type="text"
//     id="firstName"
//     placeholder="First Name here..."
//     className="input input-bordered w-full max-full m-6"
//   />
// </div>
// </form>
