import { Router } from 'express';
import { renderDashboard } from '../controllers/Author/Dashboard.ts';
import { validatePostForm, sendPostForm } from '../controllers/Author/CreateBlog.ts';
import { validateLogInForm, sendLogInForm } from '../controllers/Author/Login.ts';
import { validateSignUpForm, sendSignUpForm } from '../controllers/Author/SignUp.ts';
import "../config/jwtStrategy.ts";
import passport from 'passport';

export const AuthorFrontend = Router();

AuthorFrontend.get("/dashboard", passport.authenticate("AuthorJwtStrategy", {session: false}), renderDashboard);

AuthorFrontend.get("/create-blog", passport.authenticate("AuthorJwtStrategy", {session: false}));
AuthorFrontend.post("/create-blog", validatePostForm, sendPostForm);

AuthorFrontend.post("/log-in", validateLogInForm, sendLogInForm);

AuthorFrontend.post("/sign-up", validateSignUpForm, sendSignUpForm);