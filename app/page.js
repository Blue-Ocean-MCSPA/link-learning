
'use client'
import { StudentProvider } from "./Context/Context";
import HeaderTemplate from "./Components/HeaderTemplate";
import LandingPage from './Components/LandingPage.jsx'
import InstructorDashboard from "./Components/InstructorDashboard.jsx";

export default function Home() {
	return (
    	<>
			{/* <AppProvider>
				<HeaderTemplate />
				<InstructorDashboard />
			</AppProvider> */}
			<LandingPage />
    	</>
  	);

// 		<>
// 			<StudentProvider>
// 				<HeaderTemplate />
// 			</StudentProvider>
// 		</>
// 	);

}
