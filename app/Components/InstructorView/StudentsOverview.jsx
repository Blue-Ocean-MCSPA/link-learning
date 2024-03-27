import React, { useState, useContext, useEffect } from "react";
import AppContext from "@/app/Context/Context";

const StudentsOverview = () => {
    const { 
        students,
        setStudents,
        selectedStudent,
        setSelectedStudent,
        fetchStudentsInCohort,
        selectedCohort,
    } = useContext(AppContext);
    
    useEffect(() => {
        fetchStudentsInCohort(selectedCohort);
    }, []);

    const [studentsOverviewSelected, setStudentsOverviewSelected] = useState(true); // New state to track whether Assignments Overview is selected
    
    const handleStudentClick = (student) => {
        setSelectedStudent(student);
        setStudentsOverviewSelected(true); // Ensure that Assignments Overview remains selected
    }

    return (
        <div className="flex justify-center bg-white">
            <div className="student-listflex flex-col items-center bg-slate-600">
                <ul>
                    {students.map((student, index) => {
                        return (
                            <li>
                                <button key={index} className="bg-slate-800 px-14 py-6 m-4 border rounded focus:bg-blue-700" onClick={() => handleStudentClick(student)}>
                                    <h2>{student.first_name} {student.last_name}</h2>
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="flex flex-col justify-center items-center w-full student-info bg-slate-400">
                {selectedStudent && (
                    <>
                        <h2>{selectedStudent.name}</h2>
                        <p>Grade: {selectedStudent.grade}</p>
                        <p>Absences: {selectedStudent.absent_days}</p>
                        <p>Contact Info: {selectedStudent.contact_info}</p>
                    </>
                )}
            </div>
        </div>
    );   
}

export default StudentsOverview;