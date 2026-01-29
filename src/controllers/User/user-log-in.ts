import type { Request, Response, NextFunction, RequestHandler } from 'express';
import { body, validationResult } from 'express-validator';
import type { ValidationChain } from 'express-validator';
import passport from 'passport';
import { generateJWT } from '../../config/jwtGenerator.ts';
import { ReadIndividualUser }  from '../../lib/queries.ts';


export const validateLogInForm: (ValidationChain | RequestHandler)[] = [
    body("username")
    .notEmpty()
    .withMessage("Please enter a valid username"),
    body("password")
    .notEmpty()
    .withMessage("Password cannot be empty"),
    body("confirmPassword").custom((password:string , {req}) => {
        return password === req.body.password
    })
]


export async function sendLogInForm(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(404).json();
    }
    passport.authenticate("local", { session: false })
    const individualUser: any = await ReadIndividualUser(req.body.username)
    const token = generateJWT(individualUser?.id, individualUser?.username);
    res.json({token: token})
}
    