"use client";

import { createContext, useState } from "react";

// Import AppContext into your component along with useContext to access state
export const AppContext = createContext();

/****************Context functions****************/
// Function that stores fetch data from users API hit into state.
export function AppWrapper({ children }) {
  const [users, setUsers] = useState([]);
  const [loggedInRole, setLoggedInRole] = useState("string"); // [user, setUser
  const [cohorts, setCohorts] = useState([]);
  const [cohortId, setCohortId] = useState(null);
  const [students, setStudents] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState(false);
  const [selectedInstructor, setSelectedInstructor] = useState(false);
  const [selectedCohort, setSelectedCohort] = useState(null);
  const [selectedTab, setSelectedTab] = useState("students");
  const [selectedRole, setSelectedRole] = useState("Admin");
  const [darkMode, setDarkMode] = useState(false);

  const changeLoggedInRole = (string) => {
    setLoggedInRole(string);
    return string;
  };

  const changeSelectedRole = (string) => {
    setSelectedRole(string);
    return string;
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Function to fetch users from the database and add them to state
  const fetchInstructorCohorts = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/cohort/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch cohorts");
      }
      const data = await response.json();
      setCohorts(data.instructorCohorts.rows);
    } catch (error) {
      console.error("Error fetching cohorts:", error);
      setCohorts([]);
    }
  };

  const fetchCohorts = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/cohort/");
      if (!response.ok) {
        throw new Error("Failed to fetch cohorts");
      }
      const data = await response.json();
      setCohorts(data.cohorts.rows);
      console.log("Cohorts fetched:", data.cohorts.rows);
    } catch (error) {
      console.error("Error fetching cohorts:", error);
      setCohorts([]);
    }
  };

  const fetchStudentsInCohort = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/students/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch students belonging to cohort");
      }
      const data = await response.json();
      console.log(data);
      setStudents(data.studentsInCohort.rows);
      console.log("Students fetched:", students);
    } catch (error) {
      console.error("Error fetching students:", error);
      setStudents([]);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/users");
      const data = await response.json();
      setUsers([
        {
          user: data,
          loading: false,
        },
      ]);
      console.log("Users fetched:", data);
    } catch (error) {
      console.error("Error fetching users:", error);
      setUsers({
        users: [],
        loading: false,
      });
    }
  };
  // Return student data and fetch function.
  return (
    <AppContext.Provider
      value={{
        users,
        setUsers,
        loggedInRole,
        changeLoggedInRole,
        cohorts,
        setCohorts,
        selectedCohort,
        setSelectedCohort,
        cohortId,
        setCohortId,
        fetchCohorts,
        fetchInstructorCohorts,
        students,
        setStudents,
        selectedStudents,
        setSelectedStudents,
        fetchStudentsInCohort,
        fetchUsers,
        selectedTab,
        setSelectedTab,
        selectedRole,
        setSelectedRole,
        darkMode,
        toggleDarkMode,
        selectedInstructor,
        setSelectedInstructor,
        changeSelectedRole,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
