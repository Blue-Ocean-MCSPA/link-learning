"use client";
import { createContext, useState } from "react";

// Import AppContext into your component along with useContext to access state
const AppContext = createContext();

/****************Context functions****************/
// Function that stores fetch data from users API hit into state.
export function UserProvider({ children }) {
    const [users, setUsers] = useState([]);
    const [cohorts, setCohorts] = useState([]);
    const [cohortId, setCohortId] = useState(null);
    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [selectedCohort, setSelectedCohort] = useState(null);
    const [selectedTab, setSelectedTab] = useState('students');
    // const [selectedRole, setSelectedRole] = useState(null);

    // Function to fetch users from the database and add them to state
    const fetchInstructorCohorts = async (id, callback) => {
        try {
            const response = await fetch(`http://localhost:3000/api/cohort/${id}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch cohorts');
            }
            const data = await response.json();
            setCohorts(data.instructorCohorts.rows);
            callback();
        } catch (error) {
            console.error('Error fetching cohorts:', error);
            setCohorts([]);
        }
    }

    const fetchCohorts = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/cohort/', 
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch cohorts');
            }
            const data = await response.json();
            setCohorts(data.cohorts.rows);
            console.log('Cohorts fetched:', data.cohorts.rows);
        } catch (error) {
            console.error('Error fetching cohorts:', error);
            setCohorts([]);
        }
    }
    
    const fetchStudentsInCohort = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/api/students/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch students belonging to cohort');
            }
            const data = await response.json();
            console.log(data)
            setStudents(data.studentsInCohort.rows);
            console.log('Students fetched:', students);
        } catch (error) {
            console.error('Error fetching students:', error);
            setStudents([]);
        }
    }
    
    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/users');
            const data = await response.json();
            setUsers([{
                user: data,
                loading: false
            }]);
            console.log('Users fetched:', data);
        } catch (error) {
            console.error('Error fetching users:', error);
            setUsers({
                users: [],
                loading: false
            });
        }
    };
    // Return student data and fetch function.
    return (
        <AppContext.Provider value={{
            users,
            setUsers,
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
            selectedStudent,
            setSelectedStudent,
            fetchStudentsInCohort,
            fetchUsers,
            selectedTab,
            setSelectedTab,
            selectedRole,
            setSelectedRole
        }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContext;
