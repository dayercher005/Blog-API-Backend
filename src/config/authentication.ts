import jwt from 'jsonwebtoken';
import "dotenv/config";


const JWT_SECRET = process.env.SECRET_KEY || '';

export function getUserIdFromToken(token: any) {
    const decodedPayload: any = jwt.verify(token, JWT_SECRET);
    console.log(decodedPayload);

  
}