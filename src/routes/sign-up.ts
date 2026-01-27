import { Router } from 'express';
import { renderSignUpForm, sendSignUpForm } from '../controllers/user-sign-up.ts';

export const SignUpRouter = Router();

SignUpRouter.get("/", renderSignUpForm);
SignUpRouter.post("/", sendSignUpForm)