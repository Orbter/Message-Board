import express from 'express';
import { handleCommentPost } from '@/controllers/comments.controller';

const router = express.Router();

router.get('/post/:id', handleCommentPost);

export default router;
