"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGoal = exports.updateGoal = exports.setGoal = exports.getGoals = void 0;
// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = (req, res) => {
    res.status(200).json({ message: 'Get Goals' });
};
exports.getGoals = getGoals;
// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setGoal = (req, res) => {
    res.status(200).json({ message: 'Set Goal' });
};
exports.setGoal = setGoal;
// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` });
};
exports.updateGoal = updateGoal;
// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` });
};
exports.deleteGoal = deleteGoal;
