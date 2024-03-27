'use client'
import { UserProvider } from "@/app/Context/Context.jsx";
import HeaderTemplate from "@/app/Components/HeaderTemplate.jsx";

export default function InstructorView() {
	return (
    	<>
			<UserProvider>
				<HeaderTemplate />
			</UserProvider>
		</>
  	);
}