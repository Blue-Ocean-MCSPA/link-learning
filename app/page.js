'use client'
import { AppProvider } from "./Context/Context";
import HeaderTemplate from "./Components/HeaderTemplate";
import Login from './components/Login.jsx';

export default function Home() {
	return (
    	<>
			{/* <AppProvider>
				<HeaderTemplate />
			</AppProvider> */}
			<Login />
    	</>
  	);
}
