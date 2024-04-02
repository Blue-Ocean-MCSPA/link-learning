"use client";
import { createContext, useState } from "react";

// Import AppContext into your component along with useContext to access state
const AppContext = createContext();

/****************Context functions****************/
// Function that stores fetch data from students API hit into state.
export function AppProvider({ children }) {
  const [cohorts, setCohorts] = useState([
    "MCSP-2312",
    "MCSP-2313",
    "MCSP-2314",
    "MCSP-2315",
    "MCSP-2316",
    "MCSP-2317",
  ]);
  const [students, setStudents] = useState([]);
  const [instructors, setInstructors] = useState([]);

  // Function to fetch cohorts from the database and add them to state
  const fetchStudents = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/students");
      const data = await response.json();
      setStudents([
        {
          name: data,
          loading: false,
        },
      ]);
    } catch (error) {
      console.error("Error fetching cohorts:", error);
      setStudents({
        name: [],
        loading: false,
      });
    }
  };
  // Return student data and fetch function.
  return (
    <AppContext.Provider
      value={{
        cohorts,
        setCohorts,
        fetchStudents,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;

