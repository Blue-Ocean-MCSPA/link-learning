'use client'
import { UserProvider } from "./Context/Context";
import HeaderTemplate from "./Components/HeaderTemplate";
import LandingPage from './Components/LandingPage.jsx'

export default function Home() {
	return (
    	<>
			{/* <UserProvider>
				<HeaderTemplate />
			</UserProvider> */}
			<LandingPage />
		</>
  	);
}
