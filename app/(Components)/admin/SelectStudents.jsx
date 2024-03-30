import React, { useState, useEffect } from "react";

import { FaSearch } from "react-icons/fa";

//npm install react-icons

const SelectStudents = ({ selectedStudents, setSelectedStudents }) => {
  //These next 3 state lines are for fetch data
  const [dataSource, setDataSource] = useState([]);
  // Array.from({ length: 20 })
  const [input, setInput] = useState("");
  const [searchInfo, setSearchInfo] = useState([]);
  const [selectName, setSelectName] = useState(null);

  useEffect(() => {
    //Fetch instructors as soon as the component mounts
    // i forgot what i have an 'a' in here. but its what renders all the names
    fetchInstructors("a");
  }, []); // Empty dependency array ensures this effect runs only once

  function handleClick() {
    setSelectedStudents(null);
  }
  function handleChange(value) {
    setInput(value);
    fetchSearch(value);
  }

  function handleClickInstructor(instructor) {
    setSelectName(instructor);
  }

  // this is filtering on the front end side. What you want to do is send 'value' to the back end and get the data from the backend .. "but for now we're filtering on the front end "
  function fetchSearch(value) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const result = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setSearchInfo(result);
      });
  }

  function fetchInstructors(value) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const result = json;
        console.log(result);
        setDataSource(result);
      });
  }

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
                onClick={() => handleClickInstructor(search)}
                className=" hover:bg-gray-200 hover:cursor-pointer"
              >
                {search.name}
              </div>
            );
          })}
        </div>
      </div>
      {/* this div is suppose to house the lower elements and flex them */}
      <div className="flex h-screen border-2 ">
        <div className=" w-52 border-2 hover:scroll-smooth">
          {dataSource.map((instructor, id) => {
            return (
              <div
                key={id}
                className="border-1 p-2 hover:cursor-pointer hover:bg-gray-300"
                onClick={() => handleClickInstructor(instructor)}
              >
                {instructor.name}
              </div>
            );
          })}
        </div>
        <div className="border flex flex-col justify-evenly items-center w-full bg-gray-200">
          <div>
            <h1>{selectName && selectName.name}</h1>
            <h1>{selectName && selectName.phone}</h1>
            <h1>
              {selectName && selectName.company && selectName.company.name}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectStudents;
