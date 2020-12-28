//Import Libraries
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import * as dotenv from 'dotenv';
import connectDB from './db';
import userRouter from './Routes/UserRoute';
import postRouter from './Routes/PostRoute';

const app = express();

// Add Middleware1
app.use(cors());
app.use(helmet());
app.use(express.json());
dotenv.config();

// Database connection
connectDB();

// Add Router
app.use('/api', userRouter);
app.use('/api', postRouter);
// Run Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`The Server is running on ${PORT}`));
