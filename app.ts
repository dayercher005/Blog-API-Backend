import express from 'express';
import type { Application } from 'express';
import cors from 'cors';
import { UserLogInRouter } from './src/routes/User/user-log-in.ts';
import { UserSignUpRouter } from './src/routes/User/user-sign-up.ts';
import { UserDashboardRouter } from './src/routes/User/user-dashboard.ts';


const app: Application = express();

const allowedOrigins: string[] = ['http://localhost:5173', 'http://localhost:5174'];

interface DynamicCorsOptionsType {
  origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => void;
}

const DynamicCorsOptions: DynamicCorsOptionsType = {
  origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
    if (!origin || allowedOrigins.indexOf(origin) !== -1){
      callback(null, true);
    } else{
      callback(new Error('Unauthorized origin'));
    }
  }
}

app.use(express.json());
app.use(cors(DynamicCorsOptions));

app.use("/", UserDashboardRouter);
app.use("/log-in", UserLogInRouter);
app.use("/sign-up", UserSignUpRouter);


const PORT = 8080;
app.listen(PORT, (error: any) => {
  if (error) {
    return error
  }
  console.log(`Members-Only Application - listening on port ${PORT}!`);
});