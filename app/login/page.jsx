'use client'
// import Login from '/Users/sp/Desktop/blueocean/link-learning/app/Components/Login.jsx'
import Login from '/Users/sp/Desktop/blueocean/link-learning/app/(Components)/Login.jsx'
import Link from 'next/link';
import useAuth from '/Users/sp/Desktop/blueocean/link-learning/useAuth/index.js'

export default function Home() {
	const auth = useAuth;
	return (
    	<>
			{auth ? (
				<Link href="/students"></Link>
			) : ( <Link href="/login"></Link>)
			
			}
			<Login />
		</>
  	);
}
