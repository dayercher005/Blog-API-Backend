import express from 'express';
import type { Application } from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import passport from 'passport';
import { LogInRouter } from './src/routes/log-in';
import { SignUpRouter } from './src/routes/sign-up';
import { DashboardRouter } from './src/routes/dashboard';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app: Application = express();


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