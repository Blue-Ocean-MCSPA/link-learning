'use client'
import { createContext, useState } from 'react';

// Import AppContext into your component along with useContext to access state
const AppContext = createContext();

/****************Context functions****************/
// Function that stores fetch data from students API hit into state.
export function StudentProvider({ children }) {
    const [students, setStudents] = useState([]);

    // Function to fetch reviews from the database and add them to state
    const fetchStudents = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/students');
            const data = await response.json();
            setStudents([{
                students: data,
                loading: false
            }]);
        } catch (error) {
            console.error('Error fetching students:', error);
            setStudents({
                students: [],
                loading: false
            });
        }
    };
    // Return student data and fetch function.
    return (
        <AppContext.Provider value={{
            students,
            fetchStudents
        }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContext;