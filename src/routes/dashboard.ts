import { Router } from 'express';
import { renderDashboard } from '../controllers/dashboard.ts';

export const DashboardRouter = Router();

DashboardRouter.get("/", renderDashboard);