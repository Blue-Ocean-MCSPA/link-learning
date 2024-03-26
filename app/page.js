'use client'
import { UserProvider } from "./Context/Context";
import HeaderTemplate from "./Components/HeaderTemplate";

export default function Home() {
	return (
		<>
			<UserProvider>
				<HeaderTemplate />
			</UserProvider>
		</>
	);
}
