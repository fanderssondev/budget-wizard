import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { router } from './routes/goalRoutes';
import { errorHandler } from './middleware/errorMiddleware';
import { connectDB } from './config/db';

const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', router);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
