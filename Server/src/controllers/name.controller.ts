import { Request, Response } from 'express';
import { supabase } from '@/utils/supabase.client';
export const handleLogin = async (req: Request, res: Response) => {
  const { name } = req.body;
  console.log('Saving to DB:', name);

  const { data, error } = await supabase
    .from('profiles')
    .insert([{ name: name }]);

  if (error) {
    console.error('Error saving to DB:', error);
    res.status(500).json({ message: 'Error saving to DB' });
    return;
  }

  res.status(200).json({ message: 'Mission Success: Saved to Cloud!', data });
};
