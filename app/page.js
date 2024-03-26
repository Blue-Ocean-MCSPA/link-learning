
'use client'
import { StudentProvider } from "./context/Context";
import HeaderTemplate from "./components/HeaderTemplate";
import LandingPage from './components/LandingPage.jsx'
import InstructorDashboard from "./components/InstructorView/InstructorDashboard";
import Messages from "./components/messages";

export default function Home() {
	return (
    	<>
			{/* <AppProvider>
				<HeaderTemplate />
				<InstructorDashboard />
			</AppProvider> 
			<LandingPage />*/}

			<Messages />
    	</>
  	);

// 		<>
// 			<StudentProvider>
// 				<HeaderTemplate />
// 			</StudentProvider>
// 		</>
// 	);

}
