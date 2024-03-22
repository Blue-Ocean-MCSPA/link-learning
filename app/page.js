'use client'
import { StudentProvider } from "./Context/Context";
import HeaderTemplate from "./Components/HeaderTemplate";

export default function Home() {
	return (
		<>
			<StudentProvider>
				<HeaderTemplate />
			</StudentProvider>
		</>
	);
}
