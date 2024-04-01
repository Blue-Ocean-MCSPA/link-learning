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

  return (
    <div className=" border h-screen">
      <div className="flex p-5 bg-slate-600 items-center">
        <div className="text-white">Assigned Cohort</div>
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
      <div className="flex h-screen border-2 ">
        <div className=" w-52 border-2 hover:scroll-smooth">
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
        <div className="border flex flex-col justify-evenly items-center w-full bg-gray-200">
          <div>
            <h1>{selectName && selectName.first_name}</h1>
            <h1>{selectName && selectName.contact_info}</h1>
            <h1>
              {selectName &&
                selectName.performance_metrics &&
                selectName.course_started}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectStudents;
