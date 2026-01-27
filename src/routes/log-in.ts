import { Router } from 'express';
import { validateLogInForm, renderLogInForm, sendLogInForm } from '../controllers/user-log-in.ts';

export const LogInRouter = Router();

LogInRouter.get("/", renderLogInForm);
LogInRouter.post("/", sendLogInForm);