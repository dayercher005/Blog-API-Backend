import type { Request, Response, RequestHandler } from 'express';
import { body, validationResult, matchedData } from 'express-validator';
import bcrypt from 'bcryptjs';
import type { ValidationChain } from 'express-validator';
import { CreateAuthors } from '../lib/queries.ts';


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

export function renderSignUpForm(req: Request, res: Response){
    res.json({
        message: "success"
    });
}

export async function sendSignUpForm(req: Request, res: Response){
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        res.status(400).json();
    }

    const { username, password } = matchedData(req);

    const encryptedPassword = await bcrypt.hash(password, 10);

    CreateAuthors(username, encryptedPassword);

    res.redirect("/log-in");
}