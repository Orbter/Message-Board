import express from 'express';
import {
  handlePost,
  handleAllPost,
  handlePostLikes,
} from '@/controllers/post.controller';

const router = express.Router();
router.post('/save-post', handlePost);
router.get('/all-posts', handleAllPost);
router.get(':id/likes', handlePostLikes);

export default router;
