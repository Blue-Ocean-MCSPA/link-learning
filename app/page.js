'use client'
import HeaderTemplate from './Components/HeaderTemplate.jsx';
import LandingPage from './Components/LandingPage.jsx'
import { UserProvider } from './Context/Context.jsx';

export default function Home() {
	return (
    	<>
			{/* <UserProvider>
				<HeaderTemplate />
			</UserProvider> */}
			<UserProvider>
				<LandingPage />
			</UserProvider>
    	</>
  	);
}
