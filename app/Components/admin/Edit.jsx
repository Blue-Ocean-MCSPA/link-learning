"use client";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import Modal from "./CreateInstructor";

export default function Edit({ instructor }) {
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [toEdit, setToEdit] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // -------------for edit------------//

  function handleSubmitEdit(e) {
    e.preventDefault();
    setOpenModalEdit(false);
    fetchEdit();
  }
  function onChange(e) {
    setToEdit({ ...toEdit, [e.target.id]: e.target.value });
    // console.log(toEdit);
  }
  // console.log(instructorNames);  -> consoles the array from database

  async function fetchEdit() {
    try {
      const res = await fetch(`/api/users/${instructor.id}`, {
        // due the instructor.id
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: toEdit.email,
          first_name: toEdit.firstName,
          last_name: toEdit.lastName,
          password: toEdit.password,
        }),
        cache: "no-store",
      });
      if (res.ok) {
        //handle success response
        console.log("Instructor updated success");
      } else {
        console.error("failed to updated instructors");
      }
    } catch (error) {
      console.error("Error updating instructor:", error);
    }
  }
  //------------for edit-----------//

  //------for delete------//
  async function handleDelete() {
    try {
      const res = await fetch(`/api/users/${instructor.id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        //handle success repsonse
        console.log("instructor deleted successfully");
        router.refresh();
      } else {
        //handle error response
        console.error("Failed to delete intructor ");
      }
    } catch (error) {
      console.error("Failed deleting intructor:", error);
    }

    async function fetchDelete() {
      await fetch(`/api/users/${instructor.id}`, {
        method: "DELETE",
      });
      fetchInstructors(); // Update the instructor list after deleting
    }
  }
  //------for delete-----//

  return (
    <div className="flex ml-auto items-center gap-7">
      <FiEdit onClick={() => setOpenModalEdit(true)} size={25} />
      <Modal isOpen={openModalEdit} setIsOpen={setOpenModalEdit}>
        <form onSubmit={handleSubmitEdit}>
          <h3 className="font-bold text-lg text-black mt-8">
            Edit Instructor's Info
          </h3>
          <div className="modal-action flex-col text-sm text-light-foreground bg-light-background border border-b-1 border-light-inactive_selection">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              placeholder="First Name here..."
              className="m-2 px-2 bg-light-background border border-1 border-light-foreground rounded-full"
              onChange={onChange}
              value={toEdit.firstName}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              placeholder="Last Name here..."
              className="m-2 px-2 bg-light-background border border-1 border-light-foreground rounded-full"
              onChange={onChange}
              value={toEdit.lastName}
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              placeholder="Email here..."
              className="m-2 px-2 bg-light-background border border-1 border-light-foreground rounded-full"
              onChange={onChange}
              value={toEdit.email}
            />
            <label htmlFor="email">Tempory Password</label>
            <input
              id="password"
              type="text"
              placeholder="Temp Password here..."
              className="m-2 px-2 bg-light-background border border-1 border-light-foreground rounded-full"
              onChange={onChange}
              value={toEdit.password}
            />
            <button type="submit" className="btn mt-20">
              Submit
            </button>
          </div>
        </form>
      </Modal>
      <FiTrash2
        size={25}
        className="text-red-500"
        onClick={() => setOpenModalDelete(true)}
      />
      <Modal isOpen={openModalDelete} setIsOpen={setOpenModalDelete}>
        <h3 className="text-lg">Are you sure you want to delete Instructor?</h3>
        <div className="modal-action justify-center gap-8">
          <button className="btn" onClick={() => handleDelete()}>
            {/* handleDelete(instructor.id) */}
            Yes
          </button>
          <button className="btn" onClick={() => setOpenModalDelete(false)}>
            {/* handleDelete(instructor.id) */}
            No
          </button>
        </div>
      </Modal>
    </div>
  );
}
