import express from 'express';
import {
  handlePost,
  handleAllPost,
  handleLike,
} from '../controllers/post.controller';

const router = express.Router();

router.post('/save-post', handlePost);
router.get('/all-posts', handleAllPost);
router.post('/like', handleLike);

export default router;
