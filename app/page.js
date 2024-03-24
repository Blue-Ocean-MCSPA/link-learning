'use client';
import Messages from "./components/messages.jsx";
import './styles.css';
import { StudentProvider } from "./Context/Context";
import HeaderTemplate from "./Components/HeaderTemplate";

export default function Home() {
	return (
		<>
			{/* <StudentProvider>
				<HeaderTemplate />
			</StudentProvider> */}
			<Messages className="nightOwlLight"/>
		</>
	);
}
