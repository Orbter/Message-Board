import { Request, Response } from 'express';
import { supabase } from '@/utils/supabase.client';

export const handlePost = async (req: Request, res: Response) => {
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
