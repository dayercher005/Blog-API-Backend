import { Router } from 'express';
import { validateSignUpForm, renderSignUpForm, sendSignUpForm } from '../../controllers/User/user-sign-up.ts';

export const UserSignUpRouter = Router();

UserSignUpRouter.get("/", renderSignUpForm);
UserSignUpRouter.post("/", validateSignUpForm, sendSignUpForm)