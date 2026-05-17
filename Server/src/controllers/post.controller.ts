import { Request, Response } from 'express';
import { supabase } from '@/utils/supabase.client';

const handlePost = async (req: Request, res: Response) => {
  const { userId, content } = req.body;
  console.log('req.body:', req.body);
  const { data, error } = await supabase
    .from('posts')
    .insert({ user_id: userId, content: content })
    .select('*');

  if (error) {
    console.error('Error saving to DB:', error);
    res.status(500).json({ message: 'Error saving to DB' });
    return;
  }

  const allPostInDb = data;
  res.status(200).json({
    message: 'Mission Success: Saved to Cloud!',
    allPosts: allPostInDb,
  });
};
const handleAllPost = async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching from DB:', error);
    res.status(500).json({ message: 'Error fetching posts from DB' });
    return;
  }
  res.status(200).json(data);
};

const handlePostLikes = async (req: Request, res: Response) => {
  const postId = req.query.postId;
  if (!postId) {
    res.status(400).json({ message: 'Missing postId parameter' });
    return;
  }
  const { data, error } = await supabase
    .from('likes')
    .select('*')
    .eq('post_id', postId);

  if (error) {
    console.error(error);
    res.status(500).json({ message: 'Database error' });
    return;
  }
  res.status(200).json(data);
};

export { handlePost, handleAllPost, handlePostLikes };
