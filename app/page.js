'use client'
import Image from "next/image";
import AppContext, { StudentProvider } from "./Context/context";
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
