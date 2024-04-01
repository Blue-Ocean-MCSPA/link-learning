import React, { useState, useEffect } from "react";

import { FaSearch } from "react-icons/fa";

//npm install react-icons

const SelectStudents = ({ setSelectedStudents }) => {
  //These next 3 state lines are for fetch data
  const [studentNames, setStudentNames] = useState([]);
  // Array.from({ length: 20 })
  const [input, setInput] = useState("");
  const [searchInfo, setSearchInfo] = useState([]);
  const [selectName, setSelectName] = useState(null);

  useEffect(() => {
    //Fetch instructors as soon as the component mounts
    // i forgot what i have an 'a' in here. but its what renders all the names
    fetchStudents("a");
  }, []); // Empty dependency array ensures this effect runs only once

  function handleClick() {
    setSelectedStudents(null);
  }
  function handleChange(value) {
    setInput(value);
    fetchSearch(value);
  }

  function handleClickStudents(students) {
    setSelectName(students);
  }

  function updateStudentState(input) {
    setStudentNames(input);
  }

  async function fetchSearch(value) {
    try {
      const response = await fetch("http://localhost:3000/api/users");
      const json = await response.json();
      const users = json.data.rows; // accessing the array of users

      const result = users.filter(
        // replaces json.filter
        (user) =>
          value &&
          user &&
          user.first_name &&
          user.first_name.toLowerCase().includes(value) &&
          user.email.includes("student")
      );
      setSearchInfo(result);
      console.log(result);
    } catch (error) {
      console.log("error fetching search", error);
    }
  }
  const fetchStudents = async (value) => {
    try {
      const response = await fetch(`http://localhost:3000/api/users`); // all the users
      const data = await response.json();
      const matchedRows = data.data.rows;
      console.log("fetch student names = ", matchedRows);
      //matchedRows = {id, email, pwrd, fname, lasname, }
      updateStudentState(matchedRows);
      // console.log("state updated = ", instructorNames);
    } catch (err) {
      console.error(err);
    }
  };
  function handleAddStudent() {
    console.log("add student");
  }

  return (
    <div className=" border h-screen">
      <div className="flex p-5 bg-slate-600 items-center">
        <div className="text-white">Students</div>
        <button className=" ml-10 text-white" onClick={handleAddStudent}>
          Add Student
        </button>
        <button className=" ml-10 text-white" onClick={handleClick}>
          Back to Dashboard
        </button>
        <div className="flex items-center ml-auto bg-white rounded-lg p-1">
          <FaSearch className="text-black" />
          <input
            className="bg-transparent border-none h-full w-full focus:outline-none ml-5 text-black items-center border"
            type="text"
            placeholder=" type to search..."
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
        <div className="absolute bg-white shadow-white rounded-lg overflow-y-scroll right-10 top-40">
          {searchInfo.map((search, id) => {
            return (
              <div
                key={id}
                onClick={() => handleClickStudents(search)}
                className=" hover:bg-gray-200 hover:cursor-pointer"
              >
                {search.first_name} {search.last_name}
              </div>
            );
          })}
        </div>
      </div>
      {/* this div is suppose to house the lower elements and flex them */}
      <div className="flex h-screen  border-4">
        <div className="w-52 hover:scroll-smooth">
          {studentNames
            .filter((student) => student.email.includes("student"))
            .map((student, id) => {
              return (
                <div
                  key={id}
                  className="border-1 p-2 hover:cursor-pointer hover:bg-gray-300"
                  onClick={() => handleClickStudents(student)}
                >
                  {student.first_name + " " + student.last_name}
                </div>
              );
            })}
        </div>
        {/* separate------------------------- */}
        <div className="border flex flex-col justify-evenly items-center w-full bg-gray-200">
          {/* underneath is where im putting the div  */}
          <div className="flex justify-center items-center w-full student-info">
            {selectName && (
              <div className="flex flex-col justify-center border rounded p-8">
                <div className="flex justify-evenly items-center text-xl py-4 border border-gray-500">
                  <div>
                    Name: {selectName.first_name} {selectName.last_name}
                  </div>
                  <div>ID Number: {selectName.id}</div>
                </div>
                <div className="text-xl py-4 border border-gray-500">
                  Class Grade: {selectName.grade}
                </div>
                <div className="flex text-xl py-4 border border-gray-500">
                  <span className="pr-4 py-2">
                    Absences: {selectName.absent_days}
                  </span>
                  <span className="p-2">
                    Remaining Absences: {10 - selectName.absent_days}
                  </span>
                </div>
                <div className="contact-info flex py-4 border border-gray-500">
                  <div className="flex justify-center items-center text-xl">
                    <div className="px-4">Contact Info: </div>
                  </div>
                  <div className="flex flex-col border border-gray-500">
                    <div className="contact-info-top flex">
                      <span className="text-xl p-2 border border-gray-500">
                        Email: {JSON.parse(selectName.contact_info).email}
                      </span>
                      <span className="text-xl p-2 border border-gray-500">
                        Phone Number:{" "}
                        {JSON.parse(selectName.contact_info).phone}
                      </span>
                    </div>
                    <div className="contact-info-bottom flex justify-center border border-gray-500">
                      <span className="text-xl p-2">
                        Address: {JSON.parse(selectName.contact_info).address}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* This is where the div ENDs */}
        </div>
      </div>
    </div>
  );
};

export default SelectStudents;

// {
//   /* <div>
// <h1>{selectName && selectName.first_name}</h1>
// <h1>{selectName && selectName.contact_info}</h1>
// <h1>
//   {selectName &&
//     selectName.performance_metrics &&
//     selectName.course_started}
// </h1>
// </div> */
// }

// {
//   /* <div className="flex justify-center bg-white">
//   <div className="student-listflex flex-col items-center bg-slate-600">
//     <ul className="space-y-6">
//       {students.map((student, index) => {
//         return (
//           <li key={index}>
//             <button
//               className="bg-slate-800 px-10 py-6 m-4 border rounded focus:bg-blue-700"
//               onClick={() => handleStudentClick(student)}
//             >
//               <h2>
//                 {student.first_name} {student.last_name}
//               </h2>
//             </button>
//           </li>
//         );
//       })}
//     </ul>
//   </div>
//   <div className="flex justify-center items-center w-full student-info bg-slate-400">
//     {selectName && (
//       <div className="flex flex-col justify-center border rounded bg-slate-300 p-8">
//         <div className="flex justify-evenly items-center text-xl py-4">
//           <div>
//             Name: {selectName.first_name} {selectName.last_name}
//           </div>
//           <div>ID Number: {selectName.id}</div>
//         </div>
//         <div className="text-xl py-4">Class Grade: {selectName.grade}</div>
//         <div className="flex text-xl py-4">
//           <span className="pr-4 py-2">
//             Absences: {selectName.absent_days}
//           </span>
//           <span className="p-2">
//             Remaining Absences: {10 - selectName.absent_days}
//           </span>
//         </div>
//         <div className="contact-info flex py-4">
//           <div className="flex justify-center items-center text-xl border">
//             <div className="px-4">Contact Info: </div>
//           </div>
//           <div className="flex flex-col border">
//             <div className="contact-info-top flex border">
//               <span className="text-xl border p-2">
//                 Email: {JSON.parse(selectName.contact_info).email}
//               </span>
//               <span className="text-xl border p-2">
//                 Phone Number: {JSON.parse(selectName.contact_info).phone}
//               </span>
//             </div>
//             <div className="contact-info-bottom flex justify-center border">
//               <span className="text-xl p-2">
//                 Address: {JSON.parse(selectName.contact_info).address}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     )}
//   </div>
// </div>; */
// }
