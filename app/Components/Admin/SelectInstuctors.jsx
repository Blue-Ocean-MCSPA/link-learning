import React, { useState, useContext, useEffect } from "react";
import StudentsOverview from "./StudentsOverview";
import AssignmentOverview from "./AssignmentOverview";
import InfiniteScroll from "react-infinite-scroll-component";
import { data } from "autoprefixer";
import { FaSearch } from "react-icons/fa";
// npm install --save react-infinite-scroll-component
//npm install react-icons

const SelectInstructors = ({ setSelectedCohort, setSelectedInstructor }) => {
  const [selectedTab, setSelectedTab] = useState("students");

  const [dataSource, setDataSource] = useState(Array.from({ length: 20 }));

  const [input, setInput] = useState("");
  const [searchInfo, setSearchInfo] = useState([]);

  function handleClick() {
    setSelectedInstructor(null);
  }
  function handleChange(value) {
    setInput(value);
    fetchData(value);
  }

  // this is filtering on the front end side. What you want to do is send 'value' to the back end and get the data from the backend .. "but for now we're filtering on the front end "
  function fetchData(value) {
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

  return (
    <div className="bg-slate-600 ">
      <div className="flex p-5 bg-slate-500 items-center ">
        <div className="">Assigned Cohort</div>
        <button className=" ml-10" onClick={handleClick}>
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
        <div className="absolute bg-white shadow-white rounded-lg overflow-y-scroll hover: bg-gray-200 right-10 top-40">
          {searchInfo.map((search, id) => {
            return <div key={id}>{search.name}</div>;
          })}
        </div>
      </div>
      <div className="flex flex-col w-15 border ">
        <InfiniteScroll dataLength={dataSource.length}>
          {dataSource.map((item, index) => {
            return <div className="bg-600 p-7 border">Instructor: {item}</div>;
          })}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default SelectInstructors;
