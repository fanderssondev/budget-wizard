import { Schema, model, Types } from 'mongoose';
import { IUser } from './userModel';

export interface Goal {
  user: IUser;
  text: String;
}

export const goalSchema = new Schema<Goal>(
  {
    user: {
      type: Types.ObjectId,
      required: true,
      ref: 'User',
    },
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  },
  {
    timestamps: true,
  }
);

export const Goal = model('Goal', goalSchema);
