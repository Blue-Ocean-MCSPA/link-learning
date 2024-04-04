"use client";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import Modal from "./CreateInstructor";
import { useRouter } from "next/navigation";

export default function Edit({ data, instructorNames, setInstructorNames }) {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  // const [toEdit, setToEdit] = useState({
  //   firstName: instructor.firstName,
  //   lastName: instructor.lastName,
  //   email: instructor.email,
  //   password: "",
  // });

  // -------------for edit------------//

  function handleSubmitEdit(e) {
    e.prevent();
    setOpenModalEdit(false);
    fetchEdit();
  }
  console.log(instructorNames);

  async function fetchEdit() {
    try {
      const res = await fetch(`/api/user/${instructor.id}`, {
        // due the instructor.id
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(instructorNames),
      });
      if (res.ok) {
        //handle success response
        console.log("Instructor updated success");
        router.refresh(); //refresh the instructor list
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
                setInstructorNames({
                  ...instructorNames,
                  firstName: e.target.value,
                })
              }
              value={instructorNames.firstName}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              placeholder="Last Name here..."
              className="input input-bordered w-full max-full m-6"
              onChange={(e) =>
                setInstructorNames({
                  ...instructorNames,
                  lastName: e.target.value,
                })
              }
              value={instructorNames.lastName}
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              placeholder="Email here..."
              className="input input-bordered w-full max-full m-6"
              onChange={(e) =>
                setInstructorNames({
                  ...instructorNames,
                  email: e.target.value,
                })
              }
              value={instructorNames.email}
            />
            <label htmlFor="email">Tempory Password</label>
            <input
              id="password"
              type="text"
              placeholder="Temp Password here..."
              className="input input-bordered w-full max-full m-6"
              onChange={(e) =>
                setInstructorNames({
                  ...instructorNames,
                  password: e.target.value,
                })
              }
              value={instructorNames.password}
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

// export default Edit;

// export function Edit({
//   isOpen,
//   setIsOpen,
//   selectFirstName,
//   selectLastName,
//   email,
//   assignmentsCompleted,
//   grade,
//   student,
// }) {
//   const [firstName, setFirstName] = useState(selectFirstName); // Initialize name state with selectName
//   const [lastName, setLastName] = useState(selectLastName); // Initialize name state with selectName
//   const [updatedEmail, setEmail] = useState(email); // Initialize email state with email
//   const [updatedAssignmentsCompleted, setAssignmentsCompleted] =
//     useState(assignmentsCompleted); // Initialize assignmentsCompleted state with assignmentsCompleted
//   const [updatedGrade, setGrade] = useState(grade); // Initialize grade state with grade

//   // useEffect(()=> {

//   // }, [])

//   const toggleModal = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const updatedUser = {
//       id: student.id,
//       email: updatedEmail,
//       first_name: firstName,
//       last_name: lastName,
//       grade: updatedGrade,
//       assignments_completed: updatedAssignmentsCompleted,
//     };

//     try {
//       const response = await fetch(`/api/users`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ updatedUser }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to update student");
//       }

//       // Close the modal
//       toggleModal();

//       // Handle the response to update the state in the Edit component
//       const data = await response.json();
//     } catch (error) {
//       console.error("Error updating student:", error.message);
//       // Handle error
//     }
//   };

//   return (
//     <div className="text-sm text-light-foreground bg-light-background border border-b-1 border-light-inactive_selection">
//       <label
//         htmlFor=""
//         className="flex py-2 hover:cursor-pointer"
//         onClick={toggleModal} // Open and close modal
//       >
//         <div className="pl-5 w-1/5">{selectFirstName}</div>
//         <div className="pl-5 w-1/5">{selectLastName}</div>
//         <div className="w-1/5">{email}</div>
//         <div className="w-1/5 text-center">{assignmentsCompleted}</div>
//         <div className="w-1/5 text-center">{grade}</div>
//       </label>
//       <input
//         type="checkbox"
//         id="modal-toggle"
//         className="modal-toggle bg-white"
//         checked={isOpen}
//         onChange={toggleModal}
//       />
//       {isOpen && (
//         <div className="modal" role="dialog">
//           <div className="modal-box border border-light-cursor bg-light-background">
//             <form onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="name">First Name:</label>
//                 <input
//                   type="text"
//                   id="name"
//                   value={firstName}
//                   onChange={(e) => setFirstName(e.target.value)}
//                   className="m-2 px-2 bg-light-background border border-1 border-light-foreground rounded-full"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="name">Last Name:</label>
//                 <input
//                   type="text"
//                   id="name"
//                   value={lastName}
//                   onChange={(e) => setLastName(e.target.value)}
//                   className="m-2 px-2 bg-light-background border border-1 border-light-foreground rounded-full"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email">Email:</label>
//                 <input
//                   type="email"
//                   id="email"
//                   value={updatedEmail}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="m-2 px-2 bg-light-background border border-1 border-light-foreground rounded-full"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="assignmentsCompleted">
//                   Assignments Completed:
//                 </label>
//                 <input
//                   type="number"
//                   id="assignmentsCompleted"
//                   value={updatedAssignmentsCompleted}
//                   onChange={(e) => setAssignmentsCompleted(e.target.value)}
//                   className="m-2 px-2 bg-light-background border border-1 border-light-foreground rounded-full"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="grade">Grade:</label>
//                 <input
//                   type="text"
//                   id="grade"
//                   value={updatedGrade}
//                   onChange={(e) => setGrade(e.target.value)}
//                   className="m-2 px-2 bg-light-background border border-1 border-light-foreground rounded-full"
//                 />
//               </div>
//               <div className="modal-action">
//                 <button type="submit" className="btn">
//                   Save
//                 </button>
//                 <button type="button" className="btn" onClick={toggleModal}>
//                   Close
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
