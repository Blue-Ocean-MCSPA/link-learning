'use client'
import HeaderTemplate from "@/app/components/HeaderTemplate.jsx";
import AppContext, { AppProvider } from "@/app/Context/Context";

const Instructor = () => {
    return (
        <AppProvider>
            <HeaderTemplate />
        </AppProvider>
    )
}

export default Instructor;