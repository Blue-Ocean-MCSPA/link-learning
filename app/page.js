
'use client'
import { StudentProvider } from "./Context/Context";
import HeaderTemplate from "./Components/HeaderTemplate";
import LandingPage from './components/LandingPage.jsx'
import InstructorDashboard from "./components/InstructorView/InstructorDashboard";
import Messages from "./components/Messages";

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
