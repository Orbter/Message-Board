import express from 'express';
import { handlePost, handleAllPost } from '../controllers/post.controller';

const router = express.Router();

router.post('/save-post', handlePost);
router.get('/all-posts', handleAllPost);

export default router;
