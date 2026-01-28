import { Router } from 'express';
import { validateSignUpForm, renderSignUpForm, sendSignUpForm } from '../../controllers/Author/author-sign-up.ts';

export const AuthorSignUpRouter = Router();

AuthorSignUpRouter.get("/", renderSignUpForm);
AuthorSignUpRouter.post("/", validateSignUpForm, sendSignUpForm)