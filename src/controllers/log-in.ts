import type { Request, Response, NextFunction, RequestHandler } from 'express';
import { body, validationResult } from 'express-validator';
import path from 'node:path';
import fs from 'fs';
import type { ValidationChain } from 'express-validator';
import passport from 'passport';
import { generateJWT } from '../config/jwtGenerator';
import { ReadIndividualUser }  from '../lib/queries.ts';

const pathToKey = path.join('src/config', 'id_rsa_priv.pem');
const PrivateKey = fs.readFileSync(pathToKey, 'utf8');

export const validateSignUpForm: (ValidationChain | RequestHandler)[] = [
    body("username")
    .notEmpty()
    .isEmail()
    .withMessage("Please enter a valid username"),
    body("password")
    .notEmpty()
    .withMessage("Password cannot be empty"),
    body("confirmPassword").custom((password:string , {req}) => {
        return password === req.body.password
    })
]

export function renderLogInForm(req: Request, res: Response){
    res.json();
}

export async function sendLogInForm(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(404).json();
    }
    passport.authenticate("local", {session: false})
    const individualUser = await ReadIndividualUser((req.user as any).username)
    if (individualUser) {
        const token = generateJWT(individualUser.id, individualUser.username);
        res.json({token: token})
    }
}
    