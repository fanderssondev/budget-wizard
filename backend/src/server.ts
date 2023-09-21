import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { router } from './routes/goalRoutes';

const PORT = process.env.PORT || 5000;

const app = express();

app.use('/api/goals', router);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
