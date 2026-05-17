import { Request, Response } from 'express';
import { supabase } from '@/utils/supabase.client';

const handleCommentPost = async (req: Request, res: Response) => {
  const postId = req.params.id;
  try {
    const { data, error } = await supabase
      .from('comments')
      .select(
        `
      id,
      post_id,
      user_id,
      content,
      created_at,
      profiles( name ),
      posts ( content )
      likes( id ),
      `,
      )
      .eq('post_id', postId)
      .order('created_at', { ascending: false });
    if (error) {
      throw error;
    }

    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to fetch comments' });
  }
};

export { handleCommentPost };
