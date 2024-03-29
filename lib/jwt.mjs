import crypto from 'crypto';

// generate a random JWT secret key
const generateJwtSecret = () => {
    let data = crypto.randomBytes(32).toString('hex');
    return data
}

// export the function
export const JWT_SECRET = generateJwtSecret();