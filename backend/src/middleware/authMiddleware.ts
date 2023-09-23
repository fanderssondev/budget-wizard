import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import { User } from '../models/userModel';

export const protect = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let token: string = '';

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      try {
        // Get token from header
        token = req.headers.authorization.split(' ')[1];

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET!);

        // Get user from the token
        //NOTE: req.body.user || req.user @e2 35:18 .id on decoded too

        //NOTE @e2 39:04
        req.body.user = await User.findById(decoded.id!).select('-password');

        next();
      } catch (error) {
        console.log(error);
        res.status(401);
        throw new Error('Not authorized');
      }
    }

    if (!token) {
      res.status(401);
      throw new Error('Not authorized, no token');
    }
  }
);
