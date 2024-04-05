'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { jwtVerify } from "jose";
import { getJwtSecretKey } from '@/lib/auth';

const withAuth = (WrappedComponent, allowedRoles = []) => {

    const AuthComponent = (props) => {
        const router = useRouter();
        const [roleid, setRoleid] = useState(null);
        
        const decodeToken = async (token) => {
            try {
                const decoded = await jwtVerify(token, getJwtSecretKey());
                console.log(decoded, 'decodedasdSAdsadasdasdsadadas')
                // setRoleid(decoded.payload.roleid);
                return decoded;
            } catch (error) {
                router.push('/login');
                console.error('Error decoding token:', error);
                return null;
            }
        }   


        useEffect( () => {
            const token = localStorage.getItem('token');
            if (!token) {
                router.push('/login');
                return;
            } else {
                async function fetchData() {
                    const payload = await decodeToken(token);
                    if (allowedRoles.length < 0 || payload.payload.exp < Date.now() / 1000) {
                        router.push('/login');
                    }
                    console.log(payload, 'payload')
                }
                fetchData();
                // decodeToken(token)
                // .then(data => {
                //     console.log(data, 'data')
                //     const userRole = data.payload.roleid;
                //     console.log(userRole, 'userRole')
                //     setRoleid(userRole);
                //     if (allowedRoles.length < 0 || payload.payload.exp < Date.now() / 1000) {
                //         router.push('/login');
                //     }
                // })
                // .catch(err => {
                //     console.error(err);
                //     router.push('/login');
                
                // })
            }
        },[]);
        // return <WrappedComponent {...props} roleid={roleid} />;
        return roleid !== null ? <WrappedComponent {...props} roleid={roleid} /> : null;
    }
    return AuthComponent;
};

export default withAuth;