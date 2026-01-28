import { Router } from 'express';
import { validateLogInForm, renderLogInForm, sendLogInForm } from '../../controllers/User/user-log-in.ts';

export const UserLogInRouter = Router();

UserLogInRouter.get("/", renderLogInForm);
UserLogInRouter.post("/", validateLogInForm, sendLogInForm);