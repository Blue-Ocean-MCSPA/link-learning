'use client'
import { AppProvider } from "./Context/Context";
import HeaderTemplate from "./Components/HeaderTemplate";

export default function Home() {
	return (
    	<>
			<AppProvider>
				<HeaderTemplate />
			</AppProvider>
    	</>
  	);
}
