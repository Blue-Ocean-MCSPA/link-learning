// Server side file contains helper functions for authentication, such as validateUser and signToken.
import bcrypt from 'bcryptjs';
import { SignJWT, createSecretKey } from 'jose';
import { pool } from './db'; // Adjust this import based on where your database connection pool is located


// Make sure your JWT_SECRET is base64-encoded
const secretKey = fromSecretKey(Buffer.from(process.env.JWT_SECRET, 'base64'));

export const signToken = async (user) => {
  try {
    const token = await new SignJWT({ userId: user.id, roleID: user.roleid })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('1h')
      .sign(secretKey);

    return token;
  } catch (error) {
    console.error('Error signing token:', error);
    throw new Error('Error signing token');
  }
};



export async function validateUser(email, password) {
  // Query the database for a user with the provided email
  const userQuery = 'SELECT * FROM users WHERE email = $1';
  const { rows: userRows } = await pool.query(userQuery, [email]);

  if (userRows.length === 0) {
      throw new Error('User not found');
  }

  const user = userRows[0];

  // Compare the provided password with the stored hashed password
  const passwordMatches = await bcrypt.compare(password, user.password_hash);

  if (!passwordMatches) {
      throw new Error('Invalid password');
  }

  // Return the user object with the roleID
  return { ...user, roleID: user.roleid };
}
