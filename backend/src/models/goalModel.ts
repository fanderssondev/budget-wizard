import { Schema, model } from 'mongoose';

export type TGoal = {
  text: String;
};

export const goalSchema = new Schema<TGoal>(
  {
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  },
  {
    timestamps: true,
  }
);

export const Goal = model<TGoal>('Goal', goalSchema);
