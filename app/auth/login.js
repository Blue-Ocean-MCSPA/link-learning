//This file handles the server-side logic for the login request.
import { serialize } from 'cookie';
import { signToken } from '../../utils/jwt'; // Adjust the path if needed
import { validateUser } from '../../utils/auth'; // Implement this function

export default async function handler(req, res) {
  const { email, password } = req.body;

  try {
      const user = await validateUser(email, password);
      const token = await signToken({ userId: user.id, role: user.role });

      // Serialize the token into a cookie
      const serialized = serialize('token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          path: '/',
          sameSite: 'strict',
      });

      // Set the cookie in the response header
      res.setHeader('Set-Cookie', serialized);

      // Include the roleID in the response body
      res.status(200).json({ message: 'Authentication successful', roleID: user.roleid });
  } catch (error) {
      res.status(401).json({ error: error.message });
  }
}