import { Router } from 'express';
import { Authentication } from '../config/authentication.ts';
import { renderDashboard } from '../controllers/Author/author-dashboard.ts';
import { validatePostForm, sendPostForm } from '../controllers/Author/author-post.ts';
import { validateLogInForm, sendLogInForm } from '../controllers/Author/author-log-in.ts';
import { validateSignUpForm, sendSignUpForm } from '../controllers/Author/author-sign-up.ts';

export const AuthorFrontend = Router();

AuthorFrontend.get("/dashboard", Authentication, renderDashboard);
AuthorFrontend.get("/create-post", Authentication);
AuthorFrontend.post("/create-post", validatePostForm, sendPostForm);

AuthorFrontend.post("/log-in", validateLogInForm, sendLogInForm);

AuthorFrontend.post("/sign-up", validateSignUpForm, sendSignUpForm);