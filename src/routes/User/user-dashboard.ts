import { Router } from 'express';
import { Authentication } from '../../config/authentication.ts';
import { renderDashboard, renderIndividualPost } from '../../controllers/User/user-dashboard.ts';
import { renderCommentForm, sendCommentForm } from '../../controllers/User/user-comment.ts'

export const UserDashboardRouter = Router();

UserDashboardRouter.get("/", renderDashboard);
UserDashboardRouter.get("/:post", Authentication, renderIndividualPost);
UserDashboardRouter.get("/:post/comment", Authentication, renderCommentForm);
UserDashboardRouter.post("/:post/comment", Authentication, sendCommentForm);