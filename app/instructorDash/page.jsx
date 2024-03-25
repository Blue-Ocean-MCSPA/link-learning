'use client'
import HeaderTemplate from "../components/HeaderTemplate";
import InstructorDashboard from "../components/InstructorView/InstructorDashboard";
import AppContext, { AppProvider } from "@/app/Context/Context";

const InstructorDash = () => {
    return (
        <AppProvider>
            <HeaderTemplate />
            <InstructorDashboard />
        </AppProvider>
    )
}

export default InstructorDash;