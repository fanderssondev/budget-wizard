import { Schema, model } from 'mongoose';

export type TUser = {
  name: string;
  email: string;
  password: string;
};

const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
  },
  {
    timestamps: true,
  }
);

export const User = model('User', userSchema);
