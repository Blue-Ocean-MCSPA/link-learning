// import React, { useState, useContext } from "react";
// import { useRouter } from "next/navigation";
// import { getSession, login } from "@/lib";

// const Login = async () => {
//     const session = await getSession();

//     const router = useRouter();

//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//     });

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setFormData({ ...formData, [name]: value });
//     }

//     const handleLoginClick = async (event) => {
//         event.preventDefault();
//         try {
//             const response = await fetch(`/api/users`) // all the users
//             const data = await response.json();
//             const matchedRows = data.data.rows.filter((row) => {
//                 return row.email === formData.email && row.password_hash === formData.password;
//             });
//             if (matchedRows.length > 0) {
//                 console.log("Email and password matched");
//                 console.log("role id for this matched user: ", matchedRows[0].roleid);
//                 // Redirect based on role
//                 router.push(`/${getRoleRoute(matchedRows[0].roleid)}`);
//             } else {
//                 alert("Invalid email or password.");
//             }
//         } catch (err) {
//             console.error(err);
//         }
//     }

//     const getRoleRoute = (roleid) => {
//         switch (roleid) {
//             case '1':
//                 return 'admin';
//             case '2':
//                 return 'instructor';
//             case '3':
//                 return 'student';
//             default:
//                 return '';
//         }
//     }

//     return (
//         <div className="flex">
//             <div className="w-2/5 flex flex-col justify-center items-center h-screen bg-light-background">
//                 <div className="flex flex-col text-6xl w-full justify-center h-1/3">
//                     <div className="text-center tracking-wide font-sans text-light-foreground">
//                         Learning Link
//                     </div>
//                 </div>
//                 <div className="flex flex-col h-full justify-center items-center w-full bg-light-cursor">
//                     <div className="w-2/3 h-1/2">
//                         <div className="ml-2 mb-5 text-2xl text-light-active_selection">Login to your account</div>
//                         <div className="pb-2">
//                             <label htmlFor="email" className="block text-base mb-2"></label>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 name="email"
//                                 value={formData.email}
//                                 placeholder="Email"
//                                 autoComplete="email"
//                                 className="bg-light-background border border-light-comment rounded-full w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-light-inactive_selection"
//                                 onChange={handleInputChange}
//                             />
//                         </div>
//                         <div className="pb-2">
//                             <label htmlFor="password" className="block text-base mb-2"></label>
//                             <input 
//                                 type="password"
//                                 id="password"
//                                 name="password"
//                                 value={formData.password}
//                                 placeholder="Password"
//                                 className="bg-light-background border border-light-comment rounded-full w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-light-inactive_selection"
//                                 onChange={handleInputChange}
//                             />
//                         </div>
//                         <div className="flex justify-center">
//                             <button
//                                 className="w-1/2 text-center mr-4 mt-3 py-1 text-base text-light-background bg-light-foreground hover:opacity-75 hover:cursor-pointer rounded-full"
//                                 onClick={handleLoginClick}
//                             >
//                                 Login
//                             </button>
//                             <button
//                                 className="border border-light-background w-1/2 text-center mt-3 py-1 text-base text-light-background hover:text-light-inactive_selection hover:border-light-inactive_selection hover:cursor-pointer rounded-full"
//                             >
//                                 Sign Up
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="bg-orange-50 w-3/5 h-full opacity-75">
//                 <img src="/fellowMugExtra2.webp" alt="placeholder" className="object-cover" />
//             </div>
//         </div>
//     )
// }

// export default Login;
