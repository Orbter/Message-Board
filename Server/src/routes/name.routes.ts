import express from 'express';
import { handleLogin } from '../controllers/name.controller';

const router = express.Router();
router.post('/save-name', handleLogin);
export default router;
