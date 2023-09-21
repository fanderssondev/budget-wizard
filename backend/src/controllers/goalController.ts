import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
export const getGoals = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: 'Get Goals' });
});

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
export const setGoal = asyncHandler(async (req: Request, res: Response) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please set a text field');
  }

  res.status(200).json({ message: 'Set Goal' });
});

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
export const updateGoal = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
export const deleteGoal = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});
