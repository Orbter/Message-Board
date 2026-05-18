import express from 'express';
import {
  handleCommentPost,
  handleUploadComment,
} from '@/controllers/comments.controller';

const router = express.Router();

router.post('/save-comment', handleUploadComment);
router.get('/post/:postId', handleCommentPost);
export default router;
