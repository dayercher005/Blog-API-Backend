import { Router } from 'express';
import { renderDashboard, renderIndividualPost } from '../controllers/User/Homepage.ts';
import { renderCommentForm, sendCommentForm } from '../controllers/User/CreateComment.ts';
import { validateLogInForm, sendLogInForm } from '../controllers/User/Login.ts';
import { validateSignUpForm, sendSignUpForm } from '../controllers/User/SignUp.ts';
import "../config/jwtStrategy.ts";
import passport from 'passport';

export const UserFrontend = Router();

UserFrontend.get("/", renderDashboard);
UserFrontend.get("/:post", passport.authenticate("UserJwtStrategy", {session: false}), renderIndividualPost);
UserFrontend.get("/:post/comment", passport.authenticate("UserJwtStrategy", {session: false}), renderCommentForm);
UserFrontend.post("/:post/comment", passport.authenticate("UserJwtStrategy", {session: false}), sendCommentForm);

UserFrontend.post("/log-in", validateLogInForm, sendLogInForm);

UserFrontend.post("/sign-up", validateSignUpForm, sendSignUpForm);