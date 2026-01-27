import jwt from 'jsonwebtoken';
import "dotenv/config";

export function generateJWT(userID: string, username: string){
    const payload = {
        id: userID,
        username: username
    }
    const secretOrPrivateKey: any = process.env.SECRET_OR_PUBLIC_KEY;
    const token = jwt.sign(payload, secretOrPrivateKey, {expiresIn: "3h"});
    return token
}