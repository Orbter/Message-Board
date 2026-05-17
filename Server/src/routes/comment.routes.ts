import express from 'express';
import { handleCommentCount } from '@/controllers/comments.controller';

const router = express.Router();

router.get('/:id/count', handleCommentCount);

export default router;
