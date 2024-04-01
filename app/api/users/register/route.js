// import { sql } from "@vercel/postgres";
// import { NextResponse } from "next/server";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// export async function POST(request) {
//   try {
//     const { id, email, password, firstName, lastName, role } = await request.json();
    
//     // Hash the password with bcrypt
//     const hashedPassword = await bcrypt.hash(password, 10); // Use 10 rounds of salting

//     // Insert the user into the database
//     const user = await sql`
//       INSERT INTO users (email, password_hash, first_name, last_name, roleid)
//       VALUES (${email}, ${hashedPassword}, ${firstName}, ${lastName}, ${role})
//       RETURNING id, email, first_name, last_name, roleid
//     `;
    
//     // Generate JWT token
//     const token = jwt.sign({ userid: user.id }, process.env.JWT_SECRET);

//     // Return success response with user data and token
//     return NextResponse.json({ success: true, user, token });
//   } catch (error) {
//     // Return error response if any error occurs
//     return NextResponse.json({ success: false, error: error.message });
//   }
// }
