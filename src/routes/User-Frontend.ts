import { Router } from 'express';
import { renderDashboard, renderIndividualPost } from '../controllers/User/Homepage.ts';
import { renderCommentForm, validateCommentForm, sendCommentForm } from '../controllers/User/CreateComment.ts';
import { validateLogInForm, sendLogInForm } from '../controllers/User/Login.ts';
import { validateSignUpForm, sendSignUpForm } from '../controllers/User/SignUp.ts';
import "../config/jwtStrategy.ts";
import passport from 'passport';

export const UserFrontend = Router();

UserFrontend.get("/", renderDashboard);
UserFrontend.get("/:blogID", passport.authenticate("UserJwtStrategy", {session: false}), renderIndividualPost);
UserFrontend.get("/:blogID/comment", passport.authenticate("UserJwtStrategy", {session: false}), renderCommentForm);
UserFrontend.post("/:blogID/comment", passport.authenticate("UserJwtStrategy", {session: false}), validateCommentForm, sendCommentForm);

UserFrontend.post("/log-in", validateLogInForm, sendLogInForm);

UserFrontend.post("/sign-up", validateSignUpForm, sendSignUpForm);