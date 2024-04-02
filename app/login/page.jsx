'use client'
import Login from "../Components/Login"
import Link from 'next/link';
import useAuth from '../../useAuth/index'

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
