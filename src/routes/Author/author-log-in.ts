import { Router } from 'express';
import { validateLogInForm, renderLogInForm, sendLogInForm } from '../../controllers/Author/author-log-in.ts';

export const AuthorLogInRouter = Router();

AuthorLogInRouter.get("/", renderLogInForm);
AuthorLogInRouter.post("/", validateLogInForm, sendLogInForm);