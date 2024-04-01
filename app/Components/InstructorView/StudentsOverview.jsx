import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "@/app/context";

const StudentsOverview = () => {
    const { 
        students,
        setStudents,
        selectedStudent,
        setSelectedStudent,
        fetchStudentsInCohort,
        selectedCohort,
    } = useContext(AppContext);

    console.log("selectedCohort: ", selectedCohort)
    
    useEffect(() => {
        fetchStudentsInCohort(selectedCohort.id);
    }, []);

    const [studentsOverviewSelected, setStudentsOverviewSelected] = useState(true); // New state to track whether Assignments Overview is selected
    
    const handleStudentClick = (student) => {
        setSelectedStudent(student);
        setStudentsOverviewSelected(true); // Ensure that Assignments Overview remains selected
        const contactInfo = JSON.parse(student.contact_info);
    }

    return (
        <div className="flex justify-center bg-white">
            <div className="student-listflex flex-col items-center bg-slate-600">
                <ul className="space-y-6">
                    {students.map((student, index) => {
                        return (
                            <li key={index}>
                                <button className="bg-slate-800 px-10 py-6 m-4 border rounded focus:bg-blue-700" onClick={() => handleStudentClick(student)}>
                                    <h2>{student.first_name} {student.last_name}</h2>
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="flex justify-center items-center w-full student-info bg-slate-400">
                {selectedStudent && (
                    <div className="flex flex-col justify-center border rounded bg-slate-300 p-8"> 
                        <div className="flex justify-evenly items-center text-xl py-4">
                            <div>
                                Name: {selectedStudent.first_name} {selectedStudent.last_name}
                            </div>
                            <div>
                                ID Number: {selectedStudent.id}
                            </div>
                        </div>
                        <div className="text-xl py-4">Class Grade: {selectedStudent.grade}</div>
                        <div className="flex text-xl py-4">
                            <span className="pr-4 py-2">Absences: {selectedStudent.absent_days}</span>
                            <span className="p-2">Remaining Absences: {10 - selectedStudent.absent_days}</span>
                        </div>
                        <div className="contact-info flex py-4">
                            <div className="flex justify-center items-center text-xl border">
                                <div className="px-4">Contact Info: </div>
                            </div>
                            <div className="flex flex-col border">
                                <div className="contact-info-top flex border">
                                    <span className="text-xl border p-2">Email: {JSON.parse(selectedStudent.contact_info).email}</span>
                                    <span className="text-xl border p-2">Phone Number: {JSON.parse(selectedStudent.contact_info).phone}</span>
                                </div>
                                <div className="contact-info-bottom flex justify-center border">
                                    <span className="text-xl p-2">Address: {JSON.parse(selectedStudent.contact_info).address}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );   
}

export default StudentsOverview;