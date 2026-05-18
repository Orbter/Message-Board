import { Request, Response } from 'express';
import { supabase } from '@/utils/supabase.client';

const handleCommentPost = async (req: Request, res: Response) => {
  const { postId } = req.params;
  console.log('hi amit this is relly importent', req.body);

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
        likes ( id ),
        comments (
          id,
          content,
          created_at,
          user_id,
          profiles ( name ) 
        )
      `,
      )
      .eq('id', postId)
      .single();

    if (error) throw error;
    console.log('hi amit this is relly importent', data);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching post' });
  }
};
const handleUploadComment = async (req: Request, res: Response) => {
  const { userId, postId, content } = req.body;
  console.log('req body:', req.body);
  const { data, error } = await supabase
    .from('comments')
    .insert({ post_id: postId, user_id: userId, content: content })
    .select('*');

  if (error) {
    console.error('Error saving to DB:', error);
    res.status(500).json({ message: 'Error saving to DB' });
    return;
  }

  const commentsInDb = data;
  res.status(200).json({
    message: 'Mission Success: Saved to Cloud!',
    comment: commentsInDb,
  });
};

export { handleCommentPost, handleUploadComment };
