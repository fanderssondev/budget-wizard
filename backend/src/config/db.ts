import mongoose from 'mongoose';
import { log } from 'console-log-colors';
import { error } from 'console';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string);

    log.bgCyanBright(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    log.bgRedBright(error);
    process.exit(1);
  }
};
