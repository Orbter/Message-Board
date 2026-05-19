import { Request, Response } from 'express';
import { supabase } from '@/utils/supabase.client';

const handlePost = async (req: Request, res: Response) => {
  const { userId, content } = req.body;
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
  try {
    const { data, error } = await supabase
      .from('posts')
      .select(
        `
        id,
        content,
        created_at,
        user_id,
        profiles ( name ),
        likes ( user_id ),
        comments ( id )
      `,
      )
      .order('created_at', { ascending: false });

    if (error) throw error;

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ message: 'Error fetching posts from DB' });
  }
};
const handleLike = async (req: Request, res: Response) => {
  try {
    const { userId, postId, commentId, action } = req.body;

    if (action === 'true') {
      const { data, error } = await supabase
        .from('likes')
        .insert({
          user_id: userId,
          post_id: postId || null,
          comment_id: commentId || null,
        })
        .select('*');

      if (error) throw error;
      res.status(200).json({ message: 'Like added', data });
    } else {
      let query = supabase.from('likes').delete().eq('user_id', userId);

      if (commentId) {
        query = query.eq('comment_id', commentId);
      } else {
        query = query.eq('post_id', postId);
      }

      const { error } = await query;

      if (error) throw error;
      res.status(200).json({ message: 'Like removed' });
    }
  } catch (error) {
    console.error('Error toggling like:', error);
    res.status(500).json({ message: 'Error processing like interaction' });
  }
};

export { handlePost, handleAllPost, handleLike };
