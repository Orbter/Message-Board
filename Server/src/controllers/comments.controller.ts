import { Request, Response } from 'express';
import { supabase } from '@/utils/supabase.client';

const handleCommentCount = async (req: Request, res: Response) => {
  const postId = req.query.postId;
  if (!postId) {
    res.status(400).json({ message: 'Missing postId parameter in comments' });
    return;
  }
  const { count, error } = await supabase
    .from('comments')
    .select('*', { count: 'exact', head: true })
    .eq('post_id', postId);
  if (error) {
    console.error('Database error:', error);
    res.status(500).json({ message: 'Database error' });
    return;
  }
  res.status(200).json({ count: count || 0 });
};

export { handleCommentCount };
