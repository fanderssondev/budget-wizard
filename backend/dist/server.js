"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const goalRoutes_1 = require("./routes/goalRoutes");
const userRoutes_1 = require("./routes/userRoutes");
const errorMiddleware_1 = require("./middleware/errorMiddleware");
const db_1 = require("./config/db");
const PORT = process.env.PORT || 5000;
(0, db_1.connectDB)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/api/goals', goalRoutes_1.router);
app.use('/api/users', userRoutes_1.router);
app.use(errorMiddleware_1.errorHandler);
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
