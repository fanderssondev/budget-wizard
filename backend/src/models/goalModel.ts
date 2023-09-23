import { Schema, model, Types } from 'mongoose';
import { TUser } from './userModel';

type TGoal = {
  user: TUser;
  text: String;
};

export const goalSchema = new Schema<TGoal>(
  {
    user: {
      user: {
        type: Types.ObjectId,
        required: true,
        ref: 'User',
      },
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
