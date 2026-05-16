import express from 'express';
import { handlePost } from '@/controllers/post.controller';

const router = express.Router();
router.post('/save-post', handlePost);
export default router;
