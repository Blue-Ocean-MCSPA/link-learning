
'use client'
import { UserProvider } from "./Context/Context";
import HeaderTemplate from "./Components/HeaderTemplate";
import LandingPage from './Components/LandingPage.jsx'
import Instructor from "./Components/InstructorView/Instructor";

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
