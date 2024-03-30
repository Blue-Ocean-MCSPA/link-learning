import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../context/index";

import SelectIntructors from "./SelectInstuctors.jsx";

//This screen ig is the clickable functionalilty
// this page is the AdminDash and also Admin....
// I have Purple border aroundt this one

const AdminDashboard = ({ selectedInstructor, setSelectedInstructor }) => {
  const { cohorts, setCohorts } = useContext(AppContext);
  const { selectedCohort, setSelectedCohort } = useContext(AppContext);
  // const { selectedInstructor, setSelectedInstructor } = useContext(AppContext);

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

  useEffect(() => {
    fetchCohorts();
  }, []);

  const cohortClick = (cohort) => {
    setSelectedCohort(cohort);
  };

  const instructorsListClick = () => {
    setSelectedInstructor(true);
  };
  return (
    <>
      <div className="flex flex-wrap justify-center items-center h-screen bg-slate-600 border-4 border-purple-500">
        <div className="flex justify-center  p-5 m-4">
          {/* <button className="bg-slate-800 p-6 m-4 border rounded">
              view all Cohorts
            </button> */}
          <button
            className="bg-slate-800 p-6 m-4 border rounded"
            onClick={() => instructorsListClick()}
          >
            view all Instructors
          </button>

          <button className="bg-slate-800 p-6 m-4 border rounded">
            view all Students
          </button>
        </div>
        {cohorts.map((cohort, index) => {
          return (
            <div
              key={index}
              className="bg-slate-800 p-6 m-4 border rounded"
              onClick={() => cohortClick(cohort)}
            >
              <h2>{cohort.cohort_name}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AdminDashboard;

// import React, { useState, useContext, useEffect } from "react";

// import { AppContext } from "@/app/context";

// //This screen ig is the clickable functionalilty
// // this page is the AdminDash and also Admin....
// // I have Purple border aroundt this one

// const AdminDashboard = ({ setSelectedCohort, setSelectedInstructor }) => {
//   const { cohorts, setCohorts } = useContext(AppContext);
//   const { selectedCohort, setSelectedCohort } = useState(null);
//   const [selectedInstructor, setSelectedInstructor] = useState(null);

//   const cohortClick = (cohort) => {
//     setSelectedCohort(cohort);
//   };

//   const instructorsListClick = () => {
//     setSelectedInstructor(true);
//   };
//   return (
//     <>
//       <div className="flex flex-wrap justify-center items-center h-screen bg-slate-600 border-4 border-purple-500">
//         <div className="flex justify-center  p-5 m-4">
//           {/* <button className="bg-slate-800 p-6 m-4 border rounded">
//               view all Cohorts
//             </button> */}
//           <button
//             className="bg-slate-800 p-6 m-4 border rounded"
//             onClick={() => instructorsListClick()}
//           >
//             view all Instructors
//           </button>

//           <button className="bg-slate-800 p-6 m-4 border rounded">
//             view all Students
//           </button>
//         </div>
//         {cohorts.map((cohort, index) => {
//           return (
//             <div
//               key={index}
//               className="bg-slate-800 p-6 m-4 border rounded"
//               onClick={() => cohortClick(cohort)}
//             >
//               <h2>{cohort}</h2>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default AdminDashboard;
