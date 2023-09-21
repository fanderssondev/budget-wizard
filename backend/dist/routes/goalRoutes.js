"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
const goalController_1 = require("../controllers/goalController");
exports.router.route('/').get(goalController_1.getGoals).post(goalController_1.setGoal);
exports.router.route('/:id').delete(goalController_1.deleteGoal).put(goalController_1.updateGoal);
