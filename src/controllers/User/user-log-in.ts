import type { Request, Response, NextFunction, RequestHandler } from 'express';
import { body, validationResult } from 'express-validator';
import type { ValidationChain } from 'express-validator';
import passport from 'passport';
import { generateJWT } from '../../config/jwtGenerator.ts';
import { ReadIndividualUser }  from '../../lib/queries.ts';

interface User {
    id: string;
    username: string;
}

export const validateLogInForm: (ValidationChain | RequestHandler)[] = [
    body("username")
    .notEmpty()
    .withMessage("Please enter a valid username"),
    body("password")
    .notEmpty()
    .withMessage("Password cannot be empty")
]


export async function sendLogInForm(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(404).json();
    }
    passport.authenticate("LocalUserAuthentication", { session: false }, (user: any) => {
        if (!user){
            return res.status(400).json({
                message: "Error",
                user: user
            })
        }
    });

    req.logIn(user, { session: false}, (error) => {
        if (error) {
            res.send(error);
        }
    })
    console.log(req.user);
    const individualUser: any = await ReadIndividualUser(req.body.username);
    const token = generateJWT(individualUser?.id, req.body.username);
    res.json({token: token})
}
    