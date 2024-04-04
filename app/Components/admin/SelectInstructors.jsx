"use client";
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Modal from "./CreateInstructor";
import Form from "./Form";
import { useRouter } from "next/navigation";
import Edit from "./Edit";
import axios from "axios";

//npm install react-icons
// npm i -D daisyui@latest

const SelectInstructors = ({ setSelectedInstructor }) => {
  const router = useRouter();
  const [instructorNames, setInstructorNames] = useState([]);
  const [input, setInput] = useState("");
  const [searchInfo, setSearchInfo] = useState([]);
  const [selectName, setSelectName] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    roleid: "",
  });

  useEffect(() => {
    //Fetch instructors as soon as the component mounts
    // fetchInstructors();
    axios
      .get("http://localhost:3000/api/users")
      .then((res) => {
        console.log(res.data);
        setInstructorNames(res.data.data.rows);
      })
      .catch((err) => console.log(err));
  }, []); // Empty dependency array ensures this effect runs only once
  console.log(instructorNames);

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

  async function handleSubmit(e) {
    //post
    e.preventDefault();
    console.log(data);
    await handleAddInstructor();
    setData("");
    setIsOpen(false);
    router.refresh();
  }
  function onChange(e) {
    setData({ ...data, [e.target.id]: e.target.value });
    console.log(data);
  }

  const handleAddInstructor = async () => {
    try {
      const response = await fetch(`/api/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          first_name: data.firstName,
          last_name: data.lastName,
          password_hash: data.password,
          roleid: data.roleid,
        }),
        cache: "no-store",
      }); // all the users

      console.log("Server Response: ", response); // logging the object the server will send us
      const info = await response.json();
      console.log("handle add instructor clicked");
      return info;
    } catch (err) {
      console.error(err);
    }
  };

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

  return (
    <div className=" h-screen">
      <div className="flex p-5 bg-slate-600 items-center">
        <div className="text-white">Instructors</div>
        {/* putting the pop here for now  */}
        <div>
          <button className="ml-10 text-white" onClick={() => setIsOpen(true)}>
            Add Instructor
          </button>
          <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Form
              data={data}
              setData={setData}
              handleSubmit={handleSubmit}
              onChange={onChange}
              handleAddInstructor={handleAddInstructor}
            />
          </Modal>
        </div>
        {/* inbetween ------------- */}
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
      <div className="h-screen">
        <div className="w-full">
          <div className="flex flex-col">
            <div className="flex text-light-background bg-light-cursor py-4">
              <div className="w-1 pl-5">NAME</div>
              <div className="w-1/2 text-center">EMAIL</div>
              <div className="w-1 text-center">COHORT ASSIGNED</div>
              <div className="w-1/2 text-center">Rating</div>
            </div>
          </div>
          {instructorNames
            .filter(
              (instructor) =>
                instructor.email.toLowerCase().includes("instructor") &&
                instructor.roleid && // Check if roleid exists
                instructor.roleid.includes("2") // Check roleid for '2'
            )
            .map((instructor, id) => {
              return (
                <>
                  <div
                    key={id}
                    className="border-1 p-2 hover:cursor-pointer hover:bg-gray-300  bg-light-background text-light-foreground"
                    onClick={() => handleClickInstructor(instructor)}
                  >
                    <div className="flex py-3">
                      <div className="w-1/4 pl-5">
                        {instructor.first_name + " " + instructor.last_name}
                      </div>
                      <div className="w-1/4">{instructor.email}</div>
                      <div className="w-1/4">1</div>
                      <div className="rating flex">
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                      </div>
                      <Edit instructor={instructor} />
                    </div>
                  </div>
                </>
              );
            })}
        </div>
        {/* separate this is for the pop up/ on click modal ---------------------*/}
        <div className="border flex flex-col justify-evenly items-center w-full bg-gray-200">
          {/* underneath is the start  */}
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
          {/* this is where the pop up for the info ends */}
        </div>
      </div>
    </div>
  );
};

export default SelectInstructors;