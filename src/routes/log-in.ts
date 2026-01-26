import { Router } from 'express';
import { renderLogInForm, sendLogInForm } from '../controllers/log-in.ts';

export const LogInRouter = Router();

LogInRouter.get("/", renderLogInForm);
LogInRouter.post("/", sendLogInForm);