import { Router } from 'express';
import { Authentication } from '../config/authentication.ts';
import { renderDashboard, renderIndividualPost } from '../controllers/user-dashboard.ts';
import { renderCommentForm, sendCommentForm } from '../controllers/user-comment.ts'

export const DashboardRouter = Router();

DashboardRouter.get("/", renderDashboard);
DashboardRouter.get("/:post", Authentication, renderIndividualPost);
DashboardRouter.get("/:post/comment", Authentication, renderCommentForm);
DashboardRouter.post("/:post/comment", Authentication, sendCommentForm);