import React from "react";
import { redirect } from "next/navigation";
import { getSession, login, logout } from "@/lib";

const Login = async () => {
    const session = await getSession();
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`/api/users`) // all the users
            const data = await response.json();
            const matchedRows = data.data.rows.filter((row) => {
                return row.email === email && row.password_hash === password;
            });
                if (matchedRows.length > 0) {
                    console.log("Email and password matched");
                    console.log("role id for this matched user: ", matchedRows[0].roleid);
                    const newRole = await changeLoggedInRole(matchedRows[0].roleid);
                    console.log("expected: ", matchedRows[0].roleid, "actual: ", newRole)
                    if (newRole === '1') {
                        router.push('/admin');
                    } else if (newRole === '2') {
                        console.log("Instructor route pushed");
                        router.push('/instructor');
                    } else if (newRole === '3') {
                        router.push('/student');
                    }
                    
                } else {
                    alert("STOP! You violated the law. Pay the court a fine or serve your sentence. Your stolen goods are now forfeit.");
                }
            }
            catch(err){
                console.error(err)
            }
        }

    const handleLogoutSubmit = async (event) => {
        event.preventDefault();
        await logout();
        redirect("/");
    }


        
  return (
    <section>
      <form
        action={async (formData) => {
          "use server";
          await login(formData);
          redirect("/student");
        }}
      >
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <br />
        <button type="submit">Login</button>
      </form>
      <form
        action={async () => {
          "use server";
          await logout();
          redirect("/");
        }}
      >
        <button type="submit">Logout</button>
      </form>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </section>
  );
}

export default Login;



