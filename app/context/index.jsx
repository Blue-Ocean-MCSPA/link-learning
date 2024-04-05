"use client";
import { createContext, useState } from "react";

export const AppContext = createContext();

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
  const [enrollments, setEnrollments] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [assignments, setAssignments] = useState([]);
  const [showAssignments, setShowAssignments] = useState(false)

  const handleBackToDashboard = () => {
    setShowAssignments(false);
};

  const changeLoggedInRole = (string) => {
    setLoggedInRole(string);
    return string;
  };

  const changeEnrollments = (number) => {
    setEnrollments(number);
    return number;
  };

  const changeSelectedRole = (string) => {
    setSelectedRole(string);
    return string;
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

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

  const fetchEnrollments = async () => {
    try {
      const response = await fetch("/api/enrollments");
      if (!response.ok) {
        throw new Error("Failed to fetch enrollments");
      }
      const data = await response.json();
      setEnrollments(data.data.rows[0]);
      console.log("Enrollments fetched:", data.data.rows);
    } catch (error) {
      console.error("Error fetching enrollments:", error);
      setEnrollments([]);
    }
  };

  const fetchAssignments = async () => {
    try {
      const response = await fetch("/api/assignments");
      if (!response.ok) {
        throw new Error("Failed to fetch assignments");
      }
      const data = await response.json();
      setAssignments(data.data.rows[0]);
      console.log("Assignments fetched:", data.data.rows);
    } catch (error) {
      console.error("Error fetching Assignments:", error);
      setAssignments([]);
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
        fetchEnrollments,
        enrollments,
        setEnrollments,
        loggedInUser,
        setLoggedInUser,
        fetchAssignments,
        setAssignments,
        handleBackToDashboard,
        showAssignments, 
        setShowAssignments,
        assignments,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
