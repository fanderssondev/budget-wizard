import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { router as goalRouter } from './routes/goalRoutes';
import { router as userRouter } from './routes/userRoutes';
import { errorHandler } from './middleware/errorMiddleware';
import { connectDB } from './config/db';

const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', goalRouter);
app.use('/api/users', userRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
