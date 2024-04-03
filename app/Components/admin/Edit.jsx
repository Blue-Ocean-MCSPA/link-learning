// "use client";
// import { useState } from "react";
// import { FiEdit } from "react-icons/fi";
// import { FiTrash2 } from "react-icons/fi";
// import Modal from "./CreateInstructor";
// import { useRouter } from "next/navigation";

// function Edit({ data, instructor }) {
//   const router = useRouter();
//   const [openModalEdit, setOpenModalEdit] = useState(false);
//   const [openModalDelete, setOpenModalDelete] = useState(false);
//   const [toEdit, setToEdit] = useState({
//     firstName: instructor.firstName,
//     lastName: instructor.lastName,
//     email: instructor.email,
//     password: "",
//   });

//   // -------------for edit------------//
//   console.log(toEdit);

//   function handleSubmitEdit(e) {
//     e.prevent();
//     setOpenModalEdit(false);
//     fetchEdit();
//   }
//   console.log(toEdit);

//   async function fetchEdit() {
//     try {
//       const res = await fetch(`/api/user/${instructor.id}`, {
//         // due the instructor.id
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(toEdit),
//       });
//       if (res.ok) {
//         //handle success response
//         console.log("Instructor updated success");
//         router.refresh(); //refresh the instructor list
//       } else {
//         console.error("failed to updated instructors");
//       }
//     } catch (error) {
//       console.error("Error updating instructor:", error);
//     }
//   }
//   //------------for edit-----------//

//   //------for delete------//
//   async function handleDelete() {
//     try {
//       const res = await fetch(`/api/users/${instructor.id}`, {
//         method: "DELETE",
//       });
//       if (res.ok) {
//         //handle success repsonse
//         console.log("instructor deleted successfully");
//         router.refresh();
//       } else {
//         //handle error response
//         console.error("Failed to delete intructor ");
//       }
//     } catch (error) {
//       console.error("Failed deleting intructor:", error);
//     }
//   }

//   async function fetchDelete() {
//     await fetch(`/api/users/${instructor.id}`, {
//       method: "DELETE",
//     });
//     fetchInstructors(); // Update the instructor list after deleting
//   }

//   //------for delete-----//

//   return (
//     <div className="flex ml-auto items-center gap-7">
//       <FiEdit onClick={() => setOpenModalEdit(true)} size={25} />
//       <Modal isOpen={openModalEdit} setIsOpen={setOpenModalEdit}>
//         <form onSubmit={handleSubmitEdit}>
//           <h3 className="font-bold text-lg text-black mt-8">
//             Edit Instructor's Info
//           </h3>
//           <div className="modal-action flex-col items-center">
//             <label htmlFor="firstName">First Name</label>
//             <input
//               id="firstName"
//               type="text"
//               placeholder="First Name here..."
//               className="input input-bordered w-full max-full m-6"
//               onChange={(e) =>
//                 setToEdit({ ...toEdit, firstName: e.target.value })
//               }
//               value={toEdit.firstName}
//             />
//             <label htmlFor="lastName">Last Name</label>
//             <input
//               id="lastName"
//               type="text"
//               placeholder="Last Name here..."
//               className="input input-bordered w-full max-full m-6"
//               onChange={(e) =>
//                 setToEdit({ ...toEdit, lastName: e.target.value })
//               }
//               value={toEdit.lastName}
//             />
//             <label htmlFor="email">Email</label>
//             <input
//               id="email"
//               type="text"
//               placeholder="Email here..."
//               className="input input-bordered w-full max-full m-6"
//               onChange={(e) => setToEdit({ ...toEdit, email: e.target.value })}
//               value={toEdit.email}
//             />
//             <label htmlFor="email">Tempory Password</label>
//             <input
//               id="password"
//               type="text"
//               placeholder="Temp Password here..."
//               className="input input-bordered w-full max-full m-6"
//               onChange={(e) =>
//                 setToEdit({ ...toEdit, password: e.target.value })
//               }
//               value={toEdit.password}
//             />
//             <button type="submit" className="btn">
//               Submit
//             </button>
//           </div>
//         </form>
//       </Modal>
//       <FiTrash2
//         size={25}
//         className="text-red-500"
//         onClick={() => setOpenModalDelete(true)}
//       />
//       <Modal isOpen={openModalDelete} setIsOpen={setOpenModalDelete}>
//         <h3 className="text-lg">Are you sure you want to delete Instructor</h3>
//         <div className="modal-action">
//           <button className="btn" onClick={() => handleDelete()}>
//             {/* handleDelete(instructor.id) */}
//             Yes
//           </button>
//         </div>
//       </Modal>
//     </div>
//   );
// }

// export default Edit;

import { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./CreateInstructor";
import { useRouter } from "next/navigation";

function Edit({ instructor }) {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [toEdit, setToEdit] = useState({
    firstName: instructor.firstName,
    lastName: instructor.lastName,
    email: instructor.email,
    password: "",
  });

  console.log("openModalEdit:", openModalEdit);
  console.log("openModalDelete:", openModalDelete);

  async function handleSubmitEdit(e) {
    e.preventDefault();
    setOpenModalEdit(false);
    try {
      const res = await fetch(`/api/user/${instructor.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(toEdit),
      });
      if (res.ok) {
        console.log("Instructor updated successfully");
        router.refresh();
      } else {
        console.error("Failed to update instructor");
      }
    } catch (error) {
      console.error("Error updating instructor:", error);
    }
  }

  async function handleDelete() {
    setOpenModalDelete(false);
    try {
      const res = await fetch(`/api/users/${instructor.id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        console.log("Instructor deleted successfully");
        router.refresh();
      } else {
        console.error("Failed to delete instructor");
      }
    } catch (error) {
      console.error("Error deleting instructor:", error);
    }
  }

  return (
    <div className="flex ml-auto items-center gap-7">
      <FiEdit onClick={() => setOpenModalEdit(true)} size={25} />
      <Modal isOpen={openModalEdit} setIsOpen={setOpenModalEdit}>
        <form onSubmit={handleSubmitEdit}>
          {/* Form inputs */}
          <button type="submit" className="btn">
            Submit
          </button>
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
          <button className="btn" onClick={handleDelete}>
            Yes
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Edit;
