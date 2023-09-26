"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
const goalController_1 = require("../controllers/goalController");
const authMiddleware_1 = require("../middleware/authMiddleware");
exports.router.route('/').get(authMiddleware_1.protect, goalController_1.getGoals).post(authMiddleware_1.protect, goalController_1.setGoal);
exports.router.route('/:id').delete(authMiddleware_1.protect, goalController_1.deleteGoal).put(authMiddleware_1.protect, goalController_1.updateGoal);
