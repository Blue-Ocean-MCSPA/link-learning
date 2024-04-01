import React, { useState, useEffect } from "react";

import { FaSearch } from "react-icons/fa";

//npm install react-icons

const SelectInstructors = ({ setSelectedInstructor }) => {
  //These next 3 state lines are for fetch data
  const [instructorNames, setInstructorNames] = useState([]);
  // Array.from({ length: 20 })
  const [input, setInput] = useState("");
  const [searchInfo, setSearchInfo] = useState([]);
  const [selectName, setSelectName] = useState(null);

  useEffect(() => {
    //Fetch instructors as soon as the component mounts
    //
    fetchInstructors("a");
  }, []); // Empty dependency array ensures this effect runs only once

  function handleClick() {
    setSelectedInstructor(null);
  }
  function handleChange(value) {
    setInput(value);
    fetchSearch(value);
  }

  function handleClickInstructor(instructor) {
    setSelectName(instructor);
  }

  function updateInstructorState(input) {
    setInstructorNames(input);
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
          user.email.includes("instructor")
      );
      setSearchInfo(result);
      console.log(result);
    } catch (error) {
      console.log("error fetching search", error);
    }
  }

  const fetchInstructors = async (value) => {
    try {
      const response = await fetch(`http://localhost:3000/api/users`); // all the users
      const data = await response.json();
      const matchedRows = data.data.rows;
      console.log("fetch instructor names = ", matchedRows);
      //matchedRows = {id, email, pwrd, fname, lasname, }
      updateInstructorState(matchedRows);
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
        <div className="flex items-center ml-auto bg-white rounded-lg p-1 relative">
          <FaSearch className="text-black" />
          <input
            className="bg-transparent border-none h-full w-full focus:outline-none ml-5 text-black items-center "
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
                onClick={() => handleClickInstructor(search)}
                className=" hover:bg-gray-200 hover:cursor-pointer"
              >
                {search.first_name} {search.last_name}
              </div>
            );
          })}
        </div>
      </div>
      {/* this div is suppose to house the lower elements and flex them */}
      <div className="flex h-screen">
        <div className=" w-52 hover:scroll-smooth">
          {instructorNames
            .filter((instructor) => instructor.email.includes("instructor"))
            .map((instructor, id) => {
              return (
                <div
                  key={id}
                  className="border-1 p-2 hover:cursor-pointer hover:bg-gray-300"
                  onClick={() => handleClickInstructor(instructor)}
                >
                  {instructor.first_name + " " + instructor.last_name}
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

export default SelectInstructors;
