import { Request, Response } from 'express';

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
export const getGoals = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Get Goals' });
};

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
export const setGoal = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Set Goal' });
};

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
export const updateGoal = (req: Request, res: Response) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
export const deleteGoal = (req: Request, res: Response) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
};
