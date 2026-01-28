import { Router } from 'express';
import { Authentication } from '../../config/authentication.ts';
import { renderDashboard } from '../../controllers/Author/author-dashboard.ts';
import { validatePostForm, renderPostForm, sendPostForm } from '../../controllers/Author/author-post.ts';

export const AuthorDashboardRouter = Router();

AuthorDashboardRouter.get("/", Authentication, renderDashboard);
AuthorDashboardRouter.get("/create-post", Authentication, renderPostForm);
AuthorDashboardRouter.post("/create-post", validatePostForm, sendPostForm);