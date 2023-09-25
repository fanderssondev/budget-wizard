"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGoal = exports.updateGoal = exports.setGoal = exports.getGoals = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const goalModel_1 = require("../models/goalModel");
// @desc    Get goals
// @route   GET /api/goals
// @access  Private
exports.getGoals = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const goals = yield goalModel_1.Goal.find();
    res.status(200).json(goals);
}));
// @desc    Set goal
// @route   POST /api/goals
// @access  Private
exports.setGoal = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.text) {
        res.status(400);
        throw new Error('Please set a text field');
    }
    const goal = yield goalModel_1.Goal.create({
        text: req.body.text,
    });
    res.status(200).json(goal);
}));
// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
exports.updateGoal = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const goal = yield goalModel_1.Goal.findById(req.params.id);
    if (!goal) {
        res.status(400);
        throw new Error('Goal not found');
    }
    const updatedGoal = yield goalModel_1.Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).json(updatedGoal);
}));
// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
exports.deleteGoal = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const goal = yield goalModel_1.Goal.findById(req.params.id);
    if (!goal) {
        res.status(400);
        throw new Error('Goal not found');
    }
    yield goal.deleteOne();
    res.status(200).json({ id: req.params.id });
}));
