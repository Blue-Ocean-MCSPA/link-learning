import React, { useState, useContext, useEffect } from "react";

const StudentsOverview = () => {
  const [students, setStudents] = useState([
    {
      name: "John Doe",
      grade: "A",
      absences: 2,
      contactInfo: "john@example.com",
    },
    {
      name: "Jane Doe",
      grade: "B",
      absences: 3,
      contactInfo: "jane@example.com",
    },
    {
      name: "John Smith",
      grade: "C",
      absences: 1,
      contactInfo: "john.smith@example.com",
    },
    // Add more student objects as needed
  ]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
  };

  return (
    <div className="flex">
      <div className="bg-slate-500">
        <ul>
          {students.map((student, index) => {
            return (
              <li>
                <button
                  key={index}
                  className="bg-slate-800 px-14 py-6 m-4 border rounded focus:bg-blue-700"
                  onClick={() => handleStudentClick(student)}
                >
                  <h2>{student.name}</h2>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center w-full student-info bg-slate-400">
        {selectedStudent && (
          <>
            <h2>{selectedStudent.name}</h2>
            <p>Grade: {selectedStudent.grade}</p>
            <p>Absences: {selectedStudent.absences}</p>
            <p>Contact Info: {selectedStudent.contactInfo}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default StudentsOverview;