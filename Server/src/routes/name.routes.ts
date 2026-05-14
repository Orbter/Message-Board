import express, { Request, Response } from 'express';
const router = express.Router();
import { handleLogin } from '../controllers/name.controller';

router.post('/save-name', handleLogin);
export default router;
