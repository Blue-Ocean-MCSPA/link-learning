import React, { useState, useEffect } from "react";
import Modal, { StudentModal } from "./CreateStudent";
import { FaSearch } from "react-icons/fa";

//npm install react-icons

const SelectStudents = ({ setSelectedStudents }) => {
  //These next 3 state lines are for fetch data
  const [studentNames, setStudentNames] = useState([]);
  // Array.from({ length: 20 })
  const [input, setInput] = useState("");
  const [searchInfo, setSearchInfo] = useState([]);
  const [selectName, setSelectName] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [modalStates, setModalStates] = useState({});

  useEffect(() => {
    //Fetch instructors as soon as the component mounts
    // i forgot what i have an 'a' in here. but its what renders all the names
    fetchStudents("a");
  }, []); // Empty dependency array ensures this effect runs only once

  function handleSubmit(e) {
    //post
    e.preventDefault();
  }

  function handleClick() {
    setSelectedStudents(null);
  }
  function handleChange(value) {
    setInput(value);
    fetchSearch(value);
  }

  function handleClickStudents(student) {
    setModalStates((prevModalStates) => ({
      ...prevModalStates,
      [student.id]: !prevModalStates[student.id], // Toggle isOpen state for the clicked student
    }));
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
      updateStudentState(matchedRows);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="h-screen">
      <div className="flex p-5 bg-light-foreground items-between">
        <div className="text-white">Students</div>
        {/* putting the pop here for now  */}
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <form onSubmit={handleSubmit}>
            <h3 className="font-bold text-lg">Student Name</h3>
            <div className="modal-action">
              <input
                type="text"
                placeholder="type here..."
                className="input input-bordered w-full max-full"
              />
              <button type="submit" className="btn">
                Add
              </button>
            </div>
          </form>
        </Modal>
        {/* inbetween ------------- */}
        <button className=" ml-10 text-white" onClick={handleClick}>
          Back to Dashboard
        </button>
        <div className="flex items-between ml-auto bg-white rounded-lg p-1">
          <FaSearch className="text-black" />
          <input
            className="bg-transparent border-none h-full w-full focus:outline-none ml-5 text-black items-between border"
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
      <div className="h-screen">
        <div className="w-full">
          <div className="flex flex-col">
            <div className="flex text-light-background bg-light-cursor py-3">
              <div className="w-1/4 pl-5">NAME</div>
              <div className="w-1/4">EMAIL</div>
              <div className="w-1/4 text-center">ASSIGNMENTS COMPLETED</div>
              <div className="w-1/4 text-center">GRADE</div>
            </div>
          </div>
          {studentNames
            .filter((student) => student.email.includes("student"))
            .map((student, id) => {
              return (
                <StudentModal
                  key={id}
                  isOpen={modalStates[student.id] || false} // Use isOpen state corresponding to the student
                  setIsOpen={(isOpen) =>
                    setModalStates((prevModalStates) => ({
                      ...prevModalStates,
                      [student.id]: isOpen,
                    }))
                  }
                  selectName={`${student.first_name} ${student.last_name}`}
                  email={student.email}
                  assignmentsCompleted={student.assignments_completed}
                  grade={student.grade}
                  onClick={() => handleClickStudents(student)}
                />
              );
            })}
        </div>
        {/* separate------------------------- */}
        <div className="border flex flex-col justify-evenly items-between w-full bg-gray-200">
          {/* underneath is where im putting the div  */}
          <div className="flex items-between w-full student-info">
            {selectName && (
              <div className="flex flex-col rounded p-8">
                <div className="flex justify-evenly items-between text-xl py-4 border border-gray-500">
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
                  <div className="flex items-between text-xl">
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
                    <div className="contact-info-bottom flex border border-gray-500">
                      <span className="text-xl p-2">
                        Address: {JSON.parse(selectName.contact_info).address}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-evenly p-5 mt-6 border-4 border-red-500 text-lx"></div>
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