'use client'
import LandingPage from './Components/LandingPage.jsx';
import { useAppContext } from './context/index.jsx';
import { AppWrapper } from './context/index.jsx';

export default function Home() {
	const { 
		darkMode,
		toggleDarkMode

	} = useAppContext();

	return (
		<AppWrapper>
			<LandingPage />
		</AppWrapper>
  	);
}
