import express from 'express';
import type { Application } from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import passport from 'passport';
import cors from 'cors';
import { LogInRouter } from './src/routes/log-in.ts';
import { SignUpRouter } from './src/routes/sign-up.ts';
import { DashboardRouter } from './src/routes/dashboard.ts';

const app: Application = express();

app.use(cors)

app.use("/", DashboardRouter);
app.use("/log-in", LogInRouter);
app.use("/sign-up", SignUpRouter);

const PORT = 8080;
app.listen(PORT, (error: any) => {
  if (error) {
    return error
  }
  console.log(`Members-Only Application - listening on port ${PORT}!`);
});