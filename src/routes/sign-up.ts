import { Router } from 'express';
import { renderSignUpForm, sendSignUpForm } from '../controllers/sign-up.ts';

export const SignUpRouter = Router();

SignUpRouter.get("/", renderSignUpForm);
SignUpRouter.post("/", sendSignUpForm)