import { Router } from 'express';
import { Authentication } from '../config/authentication.ts';
import { renderDashboard, renderIndividualPost } from '../controllers/User/user-dashboard.ts';
import { renderCommentForm, sendCommentForm } from '../controllers/User/user-comment.ts';
import { validateLogInForm, sendLogInForm } from '../controllers/User/user-log-in.ts';
import { validateSignUpForm, sendSignUpForm } from '../controllers/User/user-sign-up.ts';

export const UserFrontend = Router();

UserFrontend.get("/", renderDashboard);
UserFrontend.get("/:post", renderIndividualPost);
UserFrontend.get("/:post/comment", Authentication, renderCommentForm);
UserFrontend.post("/:post/comment", Authentication, sendCommentForm);

UserFrontend.post("/log-in", validateLogInForm, sendLogInForm);

UserFrontend.post("/sign-up", validateSignUpForm, sendSignUpForm);