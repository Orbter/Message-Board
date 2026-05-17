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

export { handlePost, handleAllPost };
