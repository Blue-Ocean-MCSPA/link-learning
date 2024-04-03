"use client";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import Modal from "./CreateInstructor";
import { useRouter } from "next/navigation";

function Edit({ data }) {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [toEdit, setToEdit] = useState(data.text);
  // above is not working becaue we have a lot of data. so we have to maybe look into spread operators or .map or something
  // vvvvvvvvvv getting this error because DATA is not being hanled properly
  //   app/Components/admin/Edit.jsx (55:40) @ e

  // -------------for edit------------//
  console.log(toEdit);

  function handleSubmitEdit(e) {
    setToEdit("");
    setOpenModalEdit(false);
    router.refresh();
    fetchEdit();
  }
  console.log(toEdit);

  async function fetchEdit() {
    const res = await fetch(`/api/user/${instructor.id}`, {
      // due the instructor.id
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toEdit),
    });
    const updatedInstructor = await res.json();
    // return UpdatedInstructor;
    console.log(updatedInstructor);
    fetchInstructors(); // update the instructor list after editing
  }
  //------------for edit-----------//

  //------for delete------//
  async function handleDelete() {
    await fetchDelete();
    openModalDelete(false);
    router.refresh();
  }

  async function fetchDelete() {
    await fetch(`/api/users/${instructor.id}`, {
      method: "DELETE",
    });
    fetchInstructors(); // Update the instructor list after deleting
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
          <div className="modal-action flex-col items-center">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              placeholder="First Name here..."
              className="input input-bordered w-full max-full m-6"
              onChange={(e) =>
                setToEdit({ ...toEdit, firstName: e.target.value })
              }
              value={toEdit.firstName}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              placeholder="Last Name here..."
              className="input input-bordered w-full max-full m-6"
              onChange={(e) =>
                setToEdit({ ...toEdit, lastName: e.target.value })
              }
              value={toEdit.lastName}
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              placeholder="Email here..."
              className="input input-bordered w-full max-full m-6"
              onChange={(e) => setToEdit({ ...toEdit, email: e.target.value })}
              value={toEdit.email}
            />
            <label htmlFor="email">Tempory Password</label>
            <input
              id="password"
              type="text"
              placeholder="Temp Password here..."
              className="input input-bordered w-full max-full m-6"
              onChange={(e) =>
                setToEdit({ ...toEdit, password: e.target.value })
              }
              value={toEdit.password}
            />
            <button type="submit" className="btn">
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
        <h3 className="text-lg">Are you sure you want to delete Instructor</h3>
        <div className="modal-action">
          <button className="btn" onClick={() => handleDelete()}>
            {/* handleDelete(instructor.id) */}
            Yes
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Edit;
