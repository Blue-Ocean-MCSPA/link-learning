
'use client'
import { UserProvider } from "./Context/Context";
import HeaderTemplate from "./Components/HeaderTemplate";
import LandingPage from './components/LandingPage.jsx'
import InstructorDashboard from "./components/InstructorView/InstructorDashboard";

export default function Home() {
	return (
    	<>
			{/* <UserProvider>
				<HeaderTemplate />
				<Instructor />
			</UserProvider> */}
			<LandingPage />
    	</>
  	);



}
