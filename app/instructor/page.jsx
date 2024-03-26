'use client'
import HeaderTemplate from "../components/HeaderTemplate";
import InstructorDashboard from "../components/InstructorView/InstructorDashboard";
import AppContext, { AppProvider } from "@/app/Context/Context.jsx";

const Instructor = () => {
    return (
        <AppProvider>
            <HeaderTemplate />
            <InstructorDashboard />
        </AppProvider>
    )
}

export default Instructor;