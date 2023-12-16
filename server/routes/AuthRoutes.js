import express from 'express';
import { login, onBoardUser } from '../controllers/AuthController.js';

const router = express.Router();

router.post('/login', login)

router.post('/onBoardUser', onBoardUser)

export default router