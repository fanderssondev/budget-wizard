"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Goal = exports.goalSchema = void 0;
const mongoose_1 = require("mongoose");
exports.goalSchema = new mongoose_1.Schema({
    user: {
        user: {
            type: mongoose_1.Types.ObjectId,
            required: true,
            ref: 'User',
        },
    },
    text: {
        type: String,
        required: [true, 'Please add a text value'],
    },
}, {
    timestamps: true,
});
exports.Goal = (0, mongoose_1.model)('Goal', exports.goalSchema);
