import express from 'express';
import { registerUser, loginUser, getMe } from '../controllers/userController';
export const router = express.Router();
import { protect } from '../middleware/authMiddleware';

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);
