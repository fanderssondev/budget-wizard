"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const goalRoutes_1 = require("./routes/goalRoutes");
const PORT = process.env.PORT || 5000;
const app = (0, express_1.default)();
app.use('/api/goals', goalRoutes_1.router);
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
